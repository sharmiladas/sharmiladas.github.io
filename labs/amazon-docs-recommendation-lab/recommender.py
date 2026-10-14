"""Content recommendation learning lab. Python 3.10+, standard library only."""
import argparse,json,math,re,collections,time
from pathlib import Path
from http.server import BaseHTTPRequestHandler,HTTPServer
ROOT=Path(__file__).resolve().parent
STOP=set('a an the i how do does can me my we what which where for to with of in on is are and or it through want before'.split())
PLATFORMS={'any','web','mobile','tv','fire-os','vega'}
def tokens(s):return [t for t in re.findall(r'[a-z0-9]+',s.lower()) if t not in STOP]
def load():return json.loads((ROOT/'corpus.json').read_text())
def eligible(d,platform):return d.get('visibility')=='public' and d.get('status')=='active' and (platform=='any' or platform in d['platforms'])
def vector(counts,idf):
 v={t:(1+math.log(n))*idf[t] for t,n in counts.items() if t in idf};norm=math.sqrt(sum(x*x for x in v.values()))
 return {t:x/norm for t,x in v.items()} if norm else {}
def rank(query,mode='hybrid',platform='any',audience='developer',k=3,exclude=None,docs=None):
 if mode not in ['lexical','tfidf','hybrid'] or platform not in PLATFORMS or audience not in ['developer','qa','architect','product']:raise ValueError('Invalid mode, platform, or audience')
 if not isinstance(query,str) or not query.strip() or len(query)>2000:raise ValueError('Query must contain 1–2000 characters')
 if not isinstance(k,int) or not 1<=k<=8:raise ValueError('k must be 1–8')
 docs=load() if docs is None else docs
 # Fit IDF on public active candidates before platform filtering, never on excluded records.
 candidates=[d for d in docs if eligible(d,'any')]
 counts=[collections.Counter(tokens(d['title']+' '+d['summary'])) for d in candidates]
 df=collections.Counter(t for c in counts for t in c)
 idf={t:math.log((1+len(candidates))/(1+n))+1 for t,n in df.items()}
 qt=set(tokens(query));qv=vector(collections.Counter(tokens(query)),idf);out=[]
 for d,c in zip(candidates,counts):
  if d['id']==exclude or not eligible(d,platform):continue
  overlap=sorted(qt & set(c));lex=len(overlap)/max(1,len(qt))
  dv=vector(c,idf);cos=sum(qv.get(t,0)*v for t,v in dv.items())
  tag_hits=sorted(qt & set(tokens(' '.join(d['tags']))));tag_score=len(tag_hits)/max(1,len(qt))
  # Audience boost only applies after actual content/tag overlap; no popularity fallback.
  score=lex if mode=='lexical' else cos if mode=='tfidf' else .75*cos+.2*tag_score+(.05 if audience in d['audiences'] and (cos>0 or tag_score>0) else 0)
  if score<=0:continue
  out.append({**d,'score':round(score,6),'content_terms':overlap,'tag_terms':tag_hits,'audience_match':audience in d['audiences']})
 return sorted(out,key=lambda d:(-d['score'],d['id']))[:k]
def recommend(payload):
 start=time.perf_counter();source=payload.get('source_id');docs=load();query=payload.get('query','')
 if source:
  d=next((d for d in docs if d['id']==source and eligible(d,payload.get('platform','any'))),None)
  if not d:raise ValueError('Unknown or ineligible source_id')
  query=d['title']+' '+d['summary']
 result=rank(query,payload.get('mode','hybrid'),payload.get('platform','any'),payload.get('audience','developer'),payload.get('k',3),source,docs)
 return {'query':query,'mode':payload.get('mode','hybrid'),'results':result,'latency_ms':round((time.perf_counter()-start)*1000,3),'scope':'Recommendations from eight public-source paraphrases; not generated technical answers.'}
def evaluate(split):
 cases=[c for c in json.loads((ROOT/'cases.json').read_text()) if c['split']==split];report={'split':split,'label_origin':'Baseframe proposed relevance labels; not externally validated','corpus_size':len(load()),'variants':{}}
 for mode in ['lexical','tfidf','hybrid']:
  rows=[]
  for c in cases:
   rs=rank(c['query'],mode,c['platform'],c['audience']);ids=[d['id'] for d in rs];g=c['grades'];relevant={id for id,n in g.items() if n>0}
   if not relevant:
    rows.append({'id':c['id'],'query':c['query'],'ranked_ids':ids,'no_relevant_label':True,'abstained':not ids});continue
   dcg=sum((2**g.get(id,0)-1)/math.log2(j+2) for j,id in enumerate(ids));ideal=sum((2**n-1)/math.log2(j+2) for j,n in enumerate(sorted(g.values(),reverse=True)[:3]))
   rr=next((1/(j+1) for j,id in enumerate(ids) if id in relevant),0)
   rows.append({'id':c['id'],'query':c['query'],'ranked_ids':ids,'precision_at_3':len(set(ids)&relevant)/3,'recall_at_3':len(set(ids)&relevant)/len(relevant),'ndcg_at_3':dcg/ideal if ideal else 0,'reciprocal_rank':rr})
  def avg(k):
   vs=[r[k] for r in rows if k in r];return round(sum(vs)/len(vs),4) if vs else None
  report['variants'][mode]={'cases':len(rows),'precision_at_3':avg('precision_at_3'),'recall_at_3':avg('recall_at_3'),'ndcg_at_3':avg('ndcg_at_3'),'mrr':avg('reciprocal_rank'),'negative_abstention_rate':avg('abstained'),'rows':rows}
 return report
class Handler(BaseHTTPRequestHandler):
 def log_message(self,*args):pass # Do not store user queries or request histories.
 def do_GET(self):
  if self.path!='/':self.send_error(404);return
  body=(ROOT/'index.html').read_bytes();self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8');self.end_headers();self.wfile.write(body)
 def do_POST(self):
  if self.path!='/recommend':self.send_error(404);return
  try:
   n=int(self.headers.get('Content-Length','0'))
   if not 0<n<=16384:raise ValueError('Body must contain 1–16384 bytes')
   p=json.loads(self.rfile.read(n));
   if not isinstance(p,dict):raise ValueError('Expected JSON object')
   body=json.dumps(recommend(p)).encode();self.send_response(200)
  except (ValueError,TypeError,KeyError) as e:body=json.dumps({'error':str(e)}).encode();self.send_response(400)
  self.send_header('Content-Type','application/json');self.end_headers();self.wfile.write(body)
def main():
 p=argparse.ArgumentParser();p.add_argument('command',choices=['recommend','related','evaluate','serve']);p.add_argument('--query',default='test in app purchases');p.add_argument('--source-id',default='iap-overview');p.add_argument('--mode',choices=['lexical','tfidf','hybrid'],default='hybrid');p.add_argument('--platform',choices=sorted(PLATFORMS),default='any');p.add_argument('--audience',choices=['developer','qa','architect','product'],default='developer');p.add_argument('--split',choices=['train','dev','test'],default='dev');p.add_argument('--port',type=int,default=8765);a=p.parse_args()
 if a.command=='serve':print(f'Local API and UI: http://127.0.0.1:{a.port}');HTTPServer(('127.0.0.1',a.port),Handler).serve_forever();return
 result=evaluate(a.split) if a.command=='evaluate' else recommend({'query':a.query,'source_id':a.source_id if a.command=='related' else None,'mode':a.mode,'platform':a.platform,'audience':a.audience})
 if a.command=='evaluate':(ROOT/'results.json').write_text(json.dumps(result,indent=2)+'\n')
 print(json.dumps(result,indent=2))
if __name__=='__main__':main()
