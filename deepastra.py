#!/usr/bin/env python3
"""DeepAstra: reproducible, metered design experiments using OpenRouter."""
import argparse, base64, datetime, hashlib, json, os, pathlib, re, shutil, signal, subprocess, sys, threading, time, urllib.error, urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ROOT = pathlib.Path(__file__).resolve().parent
WORK = pathlib.Path(os.environ.get('DEEPASTRA_WORK_DIR', str(ROOT.parent.parent / 'work' if ROOT.parent.name == 'outputs' else ROOT / 'work')))
WORK.mkdir(parents=True, exist_ok=True)
DS = 'deepseek/deepseek-v4.1-flash'
ASTRA = 'openai/gpt-6-astra'
API = 'https://openrouter.ai/api/v1'
LOCK = threading.Lock()

def stamp(): return datetime.datetime.now(datetime.timezone.utc).isoformat()
def read(p): return pathlib.Path(p).read_text()
def write_json(p, obj):
    p=pathlib.Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(obj,indent=2))
def request(route, body=None):
    key=os.environ.get('OPENROUTER_API_KEY')
    if not key: raise RuntimeError('Export OPENROUTER_API_KEY before running.')
    for attempt in range(4):
        try:
            return urllib.request.urlopen(urllib.request.Request(API+route,data=None if body is None else json.dumps(body).encode(),headers={'Authorization':'Bearer '+key,'Content-Type':'application/json','X-Title':'DeepAstra research benchmark'}),timeout=600)
        except urllib.error.HTTPError as err:
            if err.code!=429 or attempt==3:raise
            err.close();time.sleep([2,8,20][attempt])
def record(run, row):
    row={'at':stamp(),'run':run,**row}
    p=ROOT/'results'/run/'usage.jsonl';p.parent.mkdir(parents=True,exist_ok=True)
    with LOCK:
        with p.open('a') as f:f.write(json.dumps(row)+'\n')
def image_part(path):
    path=pathlib.Path(path);mime='image/jpeg' if path.suffix.lower() in ['.jpg','.jpeg'] else 'image/png'
    return {'type':'image_url','image_url':{'url':'data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode()}}
def runpath(run):
    if not re.fullmatch('[a-z0-9-]+',run):raise ValueError('Use a lowercase slug for run IDs.')
    p=ROOT/'results'/run;p.mkdir(parents=True,exist_ok=True);return p
def budget_check():
    d=json.load(request('/key'))['data']
    if d.get('limit_remaining') is not None and d['limit_remaining']<5:raise RuntimeError('Safety reserve reached: less than $5 remains on this API key.')
def run_bounded(cmd,prompt,log,timeout,env=None):
    """Bound a POSIX command and its children, including a Node-launched CLI."""
    proc=subprocess.Popen(cmd,stdin=subprocess.PIPE,text=True,stdout=log,stderr=subprocess.STDOUT,env=env,start_new_session=True)
    try:proc.communicate(prompt,timeout=timeout);return proc.returncode
    except subprocess.TimeoutExpired:
        try:os.killpg(proc.pid,signal.SIGTERM)
        except ProcessLookupError:pass
        try:proc.communicate(timeout=5)
        except subprocess.TimeoutExpired:
            try:os.killpg(proc.pid,signal.SIGKILL)
            except ProcessLookupError:pass
            proc.communicate()
        # A launcher can exit while a child ignores SIGTERM. Kill any surviving
        # member of this command's dedicated process group before returning.
        try:os.killpg(proc.pid,signal.SIGKILL)
        except ProcessLookupError:pass
        return 124
def completion(run, model, prompt, images=(), effort='high', max_tokens=64000, role='builder'):
    budget_check();p=runpath(run);(p/(role+'-prompt.md')).write_text(prompt)
    body={'model':model,'messages':[{'role':'user','content':[{'type':'text','text':prompt}]+[image_part(i) for i in images]}],'reasoning':{'effort':effort},'max_tokens':max_tokens,'provider':{'allow_fallbacks':False,'require_parameters':True,**({'only':['gmicloud/fp8']} if model==DS else {'only':['openai']})}}
    t=time.monotonic()
    try:
        res=json.load(request('/chat/completions',body))
    except urllib.error.HTTPError as e:
        err=e.read().decode();record(run,{'role':role,'requested_model':model,'effort':effort,'error':err,'seconds':time.monotonic()-t});raise RuntimeError(err)
    usage=res.get('usage',{});ch=res.get('choices',[{}])[0];msg=ch.get('message',{});content=msg.get('content') or ''
    record(run,{'role':role,'requested_model':model,'response_model':res.get('model'),'provider':res.get('provider'),'effort':effort,'max_output_tokens':max_tokens,'seconds':round(time.monotonic()-t,3),'generation_id':res.get('id'),'usage':usage,'finish_reason':ch.get('finish_reason'),'error':res.get('error')})
    (p/(role+'-answer.txt')).write_text(content)
    if res.get('error') or not content:raise RuntimeError(str(res.get('error') or 'Empty model output'))
    return content
def html_extract(s):
    m=re.search(r'<!doctype html.*?</html\s*>',s,re.I|re.S)
    if not m:m=re.search(r'<html.*?</html\s*>',s,re.I|re.S)
    if not m:raise RuntimeError('No complete HTML document returned; result preserved for inspection.')
    return m.group()
def base_prompt():return read(ROOT/'reference'/'TASK.md')+'\n\nDesign specification from the supplied Refero page:\n'+read(ROOT/'reference'/'DESIGN.md')
def raw(run,model=DS,effort='high',plan=None):
    p=runpath(run);prompt=base_prompt()
    if plan:prompt+='\n\nAdditional architect plan:\n'+read(plan)
    prompt+='\n\nReturn one complete index.html document only, with all CSS and JavaScript inline. No tools are available. Do not return an explanation.'
    out=completion(run,model,prompt,[ROOT/'reference'/'authkit-reference.jpg'],effort)
    (p/'index.html').write_text(html_extract(out));write_json(p/'meta.json',{'run':run,'model':model,'effort':effort,'harness':'direct API, one response','plan':str(plan) if plan else None,'completed':stamp()})
    print(run,'READY',flush=True)
def plan(run='astra-plan'):
    prompt=base_prompt()+'\n\nYou are the architect. Produce a compact implementation plan, at most 900 words. Specify spatial proportions, precise hero/card positioning, lighting construction, typography, lower-page rhythm, responsive behavior and functional local demo interactions. Prioritize matching the supplied screenshot. No code. Another model will implement without further help.'
    out=completion(run,ASTRA,prompt,[ROOT/'reference'/'authkit-reference.jpg'],max_tokens=4000,role='architect')
    print(run,'READY',flush=True)
def revise(run,source,critic=DS,planfile=None,iteration=1):
    p=runpath(run);source=pathlib.Path(source)
    if not (source/'desktop.png').exists():raise RuntimeError('Render source/desktop.png before visual critique.')
    prompt=base_prompt()+'\n\nYou are a visual critic. Image 1 is the reference. Image 2 is the current rendered website at the same 1600x1000 viewport. Compare them carefully. Return at most 8 concrete fixes ranked by visual impact, specifying current versus target positions, sizes, colors and missing details. Do not assume features work without evidence. Keep the critique under 650 words.\n\nCurrent HTML:\n'+read(source/'index.html')
    review_images=[ROOT/'reference'/'authkit-reference.jpg',source/'desktop.png']
    diagnostics={}
    for name in ['qa-mobile.json','qa-form.json']:
        if (source/name).exists():diagnostics[name]=json.loads(read(source/name))
    if diagnostics:prompt+='\n\nObserved browser diagnostics (treat these as evidence, and prioritize real overflow or interaction failures):\n'+json.dumps(diagnostics)
    if (source/'mobile.png').exists():
        review_images.append(source/'mobile.png');prompt+='\nImage 3 is the current mobile render at 390x844. Fix actual mobile overflow while preserving the desktop target.'
    critique=completion(run,critic,prompt,review_images,effort='low',max_tokens=16000 if critic==DS else 4500,role='critic')
    prompt=base_prompt()+'\n\nCurrent complete HTML:\n'+read(source/'index.html')+'\n\nVisual critique to implement:\n'+critique
    if planfile:prompt+='\n\nArchitect plan:\n'+read(planfile)
    prompt+='\n\nImplement the visual fixes. Preserve functional controls. Return a complete replacement index.html only, all CSS and JavaScript inline.'
    if diagnostics:prompt+='\n\nBrowser diagnostics to repair:\n'+json.dumps(diagnostics)
    out=completion(run,DS,prompt,review_images,role='builder')
    (p/'index.html').write_text(html_extract(out));write_json(p/'meta.json',{'run':run,'model':DS,'critic':critic,'critic_effort':'low','effort':'high','harness':'visual critic + direct API rewrite','source':source.name,'iteration':iteration,'diagnostics_included':list(diagnostics),'mobile_image_included':len(review_images)>2,'completed':stamp()});print(run,'READY',flush=True)

class MeterProxy(BaseHTTPRequestHandler):
    def log_message(self,*a):pass
    def do_GET(self):
        if self.path.endswith('/models'):
            try:
                data=request('/models').read();self.send_response(200);self.send_header('Content-Type','application/json');self.end_headers();self.wfile.write(data)
            except Exception:self.send_error(502)
        else:self.send_error(404)
    def do_POST(self):
        bits=self.path.strip('/').split('/');run=bits[0]
        if len(bits)!=2 or bits[1]!='responses' or not re.fullmatch('[a-z0-9-]+',run):self.send_error(404);return
        body=json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        body['provider']={'allow_fallbacks':False,'only':['gmicloud/fp8'] if body.get('model')==DS else ['openai']}
        body['max_output_tokens']=min(body.get('max_output_tokens',64000),64000)
        t=time.monotonic();p=runpath(run)
        # Requests and reasoning are not exported; only accounting metadata is stored.
        try:
            budget_check()
            with request('/responses',body) as res:
                self.send_response(res.status);self.send_header('Content-Type',res.headers.get('Content-Type','text/event-stream'));self.end_headers()
                for line in res:
                    self.wfile.write(line);self.wfile.flush()
                    if line.startswith(b'data: '):
                        try:
                            event=json.loads(line[6:]);response=event.get('response',{})
                            if event.get('type') in ('response.completed','response.failed','response.incomplete'):
                                record(run,{'role':'codex','requested_model':body.get('model'),'response_model':response.get('model'),'effort':body.get('reasoning'),'generation_id':response.get('id'),'usage':response.get('usage'),'seconds':round(time.monotonic()-t,3),'status':event.get('type'),'error':response.get('error')})
                        except (ValueError,TypeError):pass
        except Exception as e:
            record(run,{'role':'codex','error':str(e),'seconds':time.monotonic()-t})
            try:self.send_error(502,str(e))
            except Exception:pass
def codex(run,model=DS,effort='high',port=8788):
    p=runpath(run);scratch=WORK/'codex'/run;scratch.mkdir(parents=True,exist_ok=True)
    shutil.copy(ROOT/'reference'/'DESIGN.md',scratch/'DESIGN.md')
    shutil.copy(ROOT/'reference'/'TASK.md',scratch/'TASK.md')
    shutil.copy(ROOT/'reference'/'authkit-reference.jpg',scratch/'reference.jpg')
    prompt=read(ROOT/'reference'/'TASK.md')+'\n\nRead DESIGN.md. Build the site in index.html with inline CSS and JavaScript. The reference image is attached. You have the Codex coding harness: use file tools and shell checks to complete the task. Work only in this directory. Do not read parent directories, other runs, credentials or private files. Do not call external models or spawn agents. Do not fetch the original site source. Stop after completing and checking index.html. No server is required. All external interaction must be demo-only; never submit entered details to a remote destination.'
    prompt+='\nThe reference image is also available as reference.jpg in your working directory. Use only static shell/file checks; do not operate browsers through shell tools. A separate evaluator will render your result. If index.html already exists, preserve completed work and finish the requested remaining sections and checks.'
    (p/'codex-prompt.md').write_text(prompt)
    cmd=['codex','exec','--ignore-user-config','--ephemeral','--skip-git-repo-check','--json','-C',str(scratch),'-s','workspace-write','-c','approval_policy="never"','-c','model_provider="deepastra"','-c',f'model_providers.deepastra.name="OpenRouter via DeepAstra meter"','-c',f'model_providers.deepastra.base_url="http://127.0.0.1:{port}/{run}"','-c','model_providers.deepastra.wire_api="responses"','-c',f'model_reasoning_effort="{effort}"','-c','model_providers.deepastra.request_max_retries=0','-c','model_providers.deepastra.stream_max_retries=0','-c','project_doc_max_bytes=0','-m',model,'-i',str(ROOT/'reference'/'authkit-reference.jpg'),'-']
    env={k:v for k,v in os.environ.items() if not any(x in k.upper() for x in ['API_KEY','TOKEN','SECRET','PASSWORD'])}
    start=time.monotonic();n=len(list(WORK.glob(run+'-codex*.jsonl')));log=WORK/(run+f'-codex-{n+1}.jsonl')
    with log.open('w') as f:
        code=run_bounded(cmd,prompt,f,1200,env)
    if (scratch/'index.html').exists():shutil.copy(scratch/'index.html',p/'index.html')
    write_json(p/'meta.json',{'run':run,'model':model,'effort':effort,'harness':'Codex CLI 0.154.0, Responses API, file + shell tools','exit_code':code,'seconds':round(time.monotonic()-start,3),'completed':stamp(),'has_html':(p/'index.html').exists()})
    print(run,'READY' if (p/'index.html').exists() else 'FAILED',flush=True)

def main():
    a=argparse.ArgumentParser();sub=a.add_subparsers(dest='cmd',required=True)
    for name in ['raw','codex']:
        s=sub.add_parser(name);s.add_argument('run');s.add_argument('--model',default=DS);s.add_argument('--effort',default='high');
        if name=='raw':s.add_argument('--plan')
    sub.add_parser('plan');sub.add_parser('proxy')
    s=sub.add_parser('revise');s.add_argument('run');s.add_argument('source');s.add_argument('--critic',default=DS);s.add_argument('--plan');s.add_argument('--iteration',type=int,default=1)
    v=a.parse_args()
    if v.cmd=='proxy':print('Meter listening on 127.0.0.1:8788',flush=True);ThreadingHTTPServer(('127.0.0.1',8788),MeterProxy).serve_forever()
    elif v.cmd=='plan':plan()
    elif v.cmd=='raw':raw(v.run,v.model,v.effort,v.plan)
    elif v.cmd=='codex':codex(v.run,v.model,v.effort)
    elif v.cmd=='revise':revise(v.run,v.source,v.critic,v.plan,v.iteration)
if __name__=='__main__':main()
