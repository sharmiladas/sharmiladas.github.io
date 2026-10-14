import unittest,copy,json,threading,urllib.request,urllib.error
from recommender import rank,recommend,evaluate,load,Handler,HTTPServer
from ingest import normalize,stage,permitted
class Tests(unittest.TestCase):
 def test_related_excludes_current(self):self.assertNotIn('iap-overview',[d['id'] for d in recommend({'source_id':'iap-overview'})['results']])
 def test_platform_gate(self):self.assertTrue(all('vega' in d['platforms'] for d in rank('AAB VPKG manifest',platform='vega')))
 def test_private_and_retired_gate(self):
  ds=load();fake=copy.deepcopy(ds[0]);fake.update(id='private',visibility='private',title='secret needle');ds.append(fake)
  fake2=copy.deepcopy(fake);fake2.update(id='retired',visibility='public',status='withdrawn');ds.append(fake2)
  self.assertEqual(rank('secret needle',docs=ds),[])
 def test_empty_and_invalid(self):
  with self.assertRaises(ValueError):rank('')
  with self.assertRaises(ValueError):rank('a',platform='unknown')
  with self.assertRaises(ValueError):recommend({'source_id':'missing'})
 def test_no_results(self):self.assertEqual(rank('Kubernetes autoscaling'),[])
 def test_metric_bounds(self):
  r=evaluate('dev');self.assertEqual(len(r['variants']),3)
  for v in r['variants'].values():
   for k in ['precision_at_3','recall_at_3','ndcg_at_3','mrr','negative_abstention_rate']:self.assertTrue(0<=v[k]<=1)
 def test_html_noise_removed(self):self.assertNotIn('navigation',normalize('<nav>navigation</nav><main><p>'+('Main article facts. '*8)+'</p><script>hidden</script></main>'))
 def test_ingest_fail_closed(self):
  with self.assertRaises(ValueError):normalize('<nav>navigation only</nav>')
  self.assertFalse(permitted('http://localhost/docs/a'));self.assertFalse(permitted('https://developer.amazon.com.evil.example/docs/a'))
 def test_api(self):
  server=HTTPServer(('127.0.0.1',0),Handler);thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
  try:
   url=f'http://127.0.0.1:{server.server_port}/recommend'; req=urllib.request.Request(url,data=json.dumps({'query':'refresh expired access token'}).encode(),headers={'Content-Type':'application/json'})
   with urllib.request.urlopen(req) as response:self.assertEqual(json.loads(response.read())['results'][0]['id'],'lwa-refresh')
   with self.assertRaises(urllib.error.HTTPError):urllib.request.urlopen(urllib.request.Request(url,data=b'not json'))
  finally:server.shutdown();server.server_close();thread.join()
if __name__=='__main__':unittest.main()
