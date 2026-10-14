import unittest,tempfile,json
from pathlib import Path
from lab import evaluate,retrieval,agreement,ROOT
class LabTests(unittest.TestCase):
 def test_demo_does_not_claim_real_measurements(self):
  r=evaluate(ROOT/'data/demo_outputs.json','dev')
  self.assertEqual(r['summary']['improved']['cost_usd'],None)
  self.assertEqual(r['summary']['improved']['missing_cases'],[])
  self.assertTrue(all(x['review_required'] for x in r['rows'] if x['critical']))
 def test_bad_citation_routes_to_review(self):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d)/'out.json';p.write_text(json.dumps([{'case_id':'Q025','variant':'a','answer':'document ID version conflict','citations':['invented']}]))
   row=evaluate(p,'dev')['rows'][0]
   self.assertEqual(row['unknown_citations'],['invented']);self.assertTrue(row['review_required'])
 def test_no_fake_agreement(self):
  self.assertEqual(agreement(ROOT/'data/human_reviews.csv',ROOT/'data/judge_reviews.csv')['paired_answers'],0)
 def test_retrieval_covers_selected_cases(self):
  self.assertEqual(retrieval('dev')['variants']['body_only']['cases'],8)
 def test_duplicate_outputs_rejected(self):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d)/'out.json';o={'case_id':'Q025','variant':'a','answer':'x','citations':[]};p.write_text(json.dumps([o,o]))
   with self.assertRaises(ValueError):evaluate(p,'dev')
if __name__=='__main__':unittest.main()
