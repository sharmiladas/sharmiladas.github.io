#!/usr/bin/env python3
"""Offline evaluation harness. No external dependencies or network calls."""
import argparse, csv, html, json, re, statistics
from pathlib import Path
ROOT=Path(__file__).resolve().parent
DIMS=['accuracy','grounding','relevance','usefulness','safety']
def read_json(p): return json.loads(Path(p).read_text())
def tokens(s): return set(re.findall(r"[a-z0-9]+",s.lower()))
def load_reviews(path):
    result={}
    with Path(path).open(newline='') as handle:
        review_rows=list(csv.DictReader(handle))
    for row in review_rows:
        if not any(row[d].strip() for d in DIMS): continue
        if not all(row[d].strip() for d in DIMS): raise ValueError('Complete every score for '+row['case_id'])
        scores={d:int(row[d]) for d in DIMS}
        if any(v not in range(4) for v in scores.values()): raise ValueError('Scores must be integers 0–3')
        key=(row['case_id'],row['variant'])
        if key in result: raise ValueError('Duplicate review '+str(key))
        result[key]=scores
    return result
def evaluate(outputs,split):
    cases={c['id']:c for c in read_json(ROOT/'data/cases.json') if c['split']==split}
    all_cases={c['id']:c for c in read_json(ROOT/'data/cases.json')}
    docs={d['id']:d for d in read_json(ROOT/'data/documents.json')}
    rows=[]; seen=set()
    for out in read_json(outputs):
        id=out['case_id']; key=(id,out['variant'])
        if id not in all_cases: raise ValueError('Unknown case '+id)
        if key in seen: raise ValueError('Duplicate output '+str(key))
        seen.add(key)
        if id not in cases: continue
        c=cases[id]; cited=set(out.get('citations',[])); required=set(c['source_ids'])
        terms=c['required_terms']; answer=out['answer']
        row=dict(case_id=id,variant=out['variant'],category=c['category'],critical=c['critical'],origin=out.get('origin','unspecified'),
          term_coverage=sum(t.lower() in answer.lower() for t in terms)/len(terms) if terms else None,
          citation_coverage=len(required & cited)/len(required) if required else None,
          unknown_citations=sorted(cited-set(docs)), latency_ms=out.get('latency_ms'),cost_usd=out.get('cost_usd'))
        row['review_required']=c['critical'] or bool(row['unknown_citations']) or (row['term_coverage'] is not None and row['term_coverage']<1) or (row['citation_coverage'] is not None and row['citation_coverage']<1)
        rows.append(row)
    summaries={}
    for v in sorted({r['variant'] for r in rows}):
        group=[r for r in rows if r['variant']==v]
        def mean(k):
            vals=[r[k] for r in group if r[k] not in [None,'']]
            return round(statistics.mean(float(x) for x in vals),4) if vals else None
        summaries[v]={'cases':len(group),'expected_cases':len(cases),'missing_cases':sorted(set(cases)-{r['case_id'] for r in group}),
          'term_coverage_proxy':mean('term_coverage'),'citation_coverage_proxy':mean('citation_coverage'),
          'review_required':sum(r['review_required'] for r in group),'latency_ms':mean('latency_ms'),'cost_usd':mean('cost_usd')}
    if not rows: raise ValueError('No outputs for selected split')
    return {'split':split,'note':'Term and citation coverage are proxies, not factuality or safety judgments. Fixture outcomes are not model performance.','summary':summaries,'rows':rows}
def retrieval(split):
    docs=read_json(ROOT/'data/documents.json'); cases=read_json(ROOT/'data/cases.json'); result={}
    for mode in ['body_only','title_aliases']:
        rows=[]
        for c in cases:
            if c['split']!=split or c['category']!='answerable': continue
            q=tokens(c['question']); ranked=sorted(docs,key=lambda d:len(q & tokens(d['body'] if mode=='body_only' else d['body']+' '+d['title']+' '+' '.join(d['aliases']))),reverse=True)
            rows.append({'case_id':c['id'],'top_document':ranked[0]['id'],'hit':ranked[0]['id'] in c['source_ids']})
        result[mode]={'cases':len(rows),'recall_at_1':statistics.mean(r['hit'] for r in rows) if rows else None,'rows':rows}
    return {'split':split,'note':'Real lexical retrieval experiment on a synthetic corpus; not an MCP or production recommender. Stable ties follow corpus order.','variants':result}
def agreement(human,judge):
    h=load_reviews(human); j=load_reviews(judge); keys=h.keys() & j.keys()
    return {'paired_answers':len(keys),'dimensions':{d:{'exact_agreement':statistics.mean(h[k][d]==j[k][d] for k in keys) if keys else None,'mean_absolute_error':statistics.mean(abs(h[k][d]-j[k][d]) for k in keys) if keys else None} for d in DIMS},'note':'No agreement estimate until paired reviews exist. This does not measure either evaluator against ground truth.'}
def main():
    p=argparse.ArgumentParser();p.add_argument('command',choices=['demo','evaluate','retrieval','agreement']);p.add_argument('--outputs',default=str(ROOT/'data/demo_outputs.json'));p.add_argument('--split',choices=['train','dev','test'],default='dev');p.add_argument('--human',default=str(ROOT/'data/human_reviews.csv'));p.add_argument('--judge',default=str(ROOT/'data/judge_reviews.csv'));p.add_argument('--out',default=str(ROOT/'reports'));a=p.parse_args()
    report=agreement(a.human,a.judge) if a.command=='agreement' else retrieval(a.split) if a.command=='retrieval' else evaluate(a.outputs,a.split)
    out=Path(a.out);out.mkdir(parents=True,exist_ok=True); name=a.command+'_'+a.split
    (out/(name+'.json')).write_text(json.dumps(report,indent=2)+'\n')
    (out/(name+'.html')).write_text('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Content Quality Lab Report</title><style>body{font:16px system-ui;max-width:960px;margin:30px auto;padding:16px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f3f5f7;padding:20px}</style><h1>Content Quality Lab Report</h1><p>'+html.escape(report['note'])+'</p><pre>'+html.escape(json.dumps(report,indent=2))+'</pre>')
    print(json.dumps({k:v for k,v in report.items() if k not in ['rows','variants']},indent=2));print('Report:',out/(name+'.html'))
if __name__=='__main__':main()
