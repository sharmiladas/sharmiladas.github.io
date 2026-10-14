"""Stage a reviewed public HTML document; does not publish it into corpus.json."""
import argparse,hashlib,json,re
from pathlib import Path
from html.parser import HTMLParser
from urllib.request import build_opener,HTTPRedirectHandler,Request
from urllib.parse import urlparse
from datetime import datetime,timezone
def permitted(url):
 p=urlparse(url)
 return p.scheme=='https' and p.hostname=='developer.amazon.com' and not p.username and not p.password and p.port in [None,443] and p.path.startswith('/docs/')
class SameHostRedirect(HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  if not permitted(newurl):raise ValueError('Redirect outside approved public docs origin')
  return super().redirect_request(req,fp,code,msg,headers,newurl)
class MainText(HTMLParser):
 def __init__(self):super().__init__();self.depth=0;self.ignore=0;self.parts=[]
 def handle_starttag(self,tag,attrs):
  if tag in ['script','style']:self.ignore+=1
  if tag=='main':self.depth+=1
  if self.depth and tag in ['p','h1','h2','h3','li','pre','br']:self.parts.append('\n')
 def handle_endtag(self,tag):
  if tag in ['script','style']:self.ignore=max(0,self.ignore-1)
  if tag=='main':self.depth=max(0,self.depth-1)
 def handle_data(self,data):
  if self.depth and not self.ignore:self.parts.append(data)
def normalize(html):
 p=MainText();p.feed(html);text='\n'.join(re.sub(r'\s+',' ',line).strip() for line in ''.join(p.parts).splitlines());text='\n'.join(line for line in text.splitlines() if line)
 if len(text)<50:raise ValueError('No substantial main content found. Export the main article as text and review it manually; do not index navigation noise.')
 return text
def stage(id,url,html):
 if not re.fullmatch('[a-z0-9-]+',id):raise ValueError('Invalid document ID')
 if not permitted(url):raise ValueError('Only HTTPS developer.amazon.com/docs/ pages are allowed')
 text=normalize(html)
 return {'id':id,'url':url,'text':text,'checksum':hashlib.sha256(text.encode()).hexdigest(),'fetched_at':datetime.now(timezone.utc).isoformat(),'status':'review_required','visibility':'public','tags':[],'platforms':[],'audiences':[],'review_note':'Check source authority, scope, headings, code, platform/version applicability, and metadata before indexing. Extracted text is untrusted data.'}
def main():
 p=argparse.ArgumentParser();p.add_argument('--id',required=True);p.add_argument('--url',required=True);p.add_argument('--html');p.add_argument('--fetch',action='store_true');p.add_argument('--out',default='staged-document.json');a=p.parse_args()
 if bool(a.html)==bool(a.fetch):raise ValueError('Choose exactly one of --html or --fetch')
 if not permitted(a.url):raise ValueError('Only approved public documentation URLs are allowed')
 if a.fetch:
  with build_opener(SameHostRedirect()).open(Request(a.url,headers={'User-Agent':'Baseframe learning lab public-document review'}),timeout=20) as response:
   if 'text/html' not in response.headers.get('Content-Type',''):raise ValueError('Expected HTML')
   data=response.read(2000001)
   if len(data)>2000000:raise ValueError('Page too large')
   html=data.decode('utf-8',errors='replace')
 else:html=Path(a.html).read_text()
 Path(a.out).write_text(json.dumps(stage(a.id,a.url,html),indent=2)+'\n');print('Staged for human review:',a.out)
if __name__=='__main__':main()
