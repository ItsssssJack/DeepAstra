import json,pathlib,tempfile,unittest,os,subprocess,sys,time,signal
from unittest.mock import patch
import deepastra as d
import workflow as w

class WorkflowTests(unittest.TestCase):
    def setUp(self):
        self.temp=tempfile.TemporaryDirectory();self.root=pathlib.Path(self.temp.name);(self.root/'reference').mkdir()
        for n in ['TASK.md','DESIGN.md']:(self.root/'reference'/n).write_text('Reproduce the reference.')
        (self.root/'reference'/'authkit-reference.jpg').write_bytes(b'fixture')
        self.rootpatch=patch.object(d,'ROOT',self.root);self.rootpatch.start();self.calls=[]
    def tearDown(self):self.rootpatch.stop();self.temp.cleanup()
    def fake_completion(self,run,model,prompt,images=(),effort='high',max_tokens=64000,role='builder'):
        self.calls.append((run,model,role));d.record(run,{'role':role,'usage':{'cost':.01}})
        p=d.runpath(run);text='<!doctype html><html><body>fixture</body></html>' if role=='builder' else 'Fix the spacing.'
        (p/(role+'-answer.txt')).write_text(text);return text
    def capture(self,run,*_):
        p=d.runpath(run);(p/'desktop.png').write_bytes(b'fixture');(p/'mobile.png').write_bytes(b'fixture');d.write_json(p/'qa-mobile.json',{'width':390,'height':844,'scrollWidth':390})
    def test_complete_lineage_and_all_roles_charged(self):
        with patch.object(d,'completion',self.fake_completion):s=w.run_workflow('test',True,2,'astra',5,capturer=self.capture)
        self.assertEqual(s['status'],'complete');self.assertEqual(s['result'],'test-final');self.assertAlmostEqual(s['cost'],.08)
        self.assertEqual(len(self.calls),8);self.assertEqual(self.calls[-2][1],d.ASTRA);self.assertEqual(self.calls[-1][1],d.DS)
        self.assertTrue((self.root/'results/test-final/index.html').exists())
    def test_budget_rejects_before_spending(self):
        with patch.object(d,'completion',self.fake_completion):
            with self.assertRaisesRegex(RuntimeError,'Budget gate'):w.run_workflow('tiny',True,1,'none',.001,capturer=self.capture)
        self.assertEqual(self.calls,[]);self.assertEqual(json.loads((self.root/'results/tiny/workflow.json').read_text())['status'],'stopped')
    def test_preserves_existing_workflow(self):
        d.runpath('existing');d.write_json(self.root/'results/existing/workflow.json',{'keep':True})
        with self.assertRaisesRegex(RuntimeError,'already exists'):w.run_workflow('existing',capturer=self.capture)
        self.assertEqual(json.loads((self.root/'results/existing/workflow.json').read_text()),{'keep':True})
    def test_rejects_path_escape_and_partial_html(self):
        with self.assertRaises(ValueError):d.runpath('../escape')
        with self.assertRaises(RuntimeError):d.html_extract('<html><body>truncated')
    def test_preserves_existing_child_stage(self):
        p=d.runpath('existing-build')/'index.html';p.write_text('keep me')
        with self.assertRaisesRegex(RuntimeError,'child stage already exists'):w.run_workflow('existing',capturer=self.capture)
        self.assertEqual(p.read_text(),'keep me')
    @unittest.skipUnless(os.name=='posix','Codex process groups require POSIX')
    def test_timeout_stops_launcher_and_child(self):
        log=self.root/'process.log'
        script="import subprocess,sys,time; p=subprocess.Popen([sys.executable,'-c','import time,signal;signal.signal(signal.SIGTERM,signal.SIG_IGN);time.sleep(30)']); print(p.pid,flush=True); time.sleep(30)"
        with log.open('w') as f:code=d.run_bounded([sys.executable,'-c',script],'',f,.5)
        self.assertEqual(code,124);pid=int(log.read_text().strip())
        state=subprocess.run(['ps','-p',str(pid),'-o','stat='],capture_output=True,text=True).stdout.strip()
        try:self.assertTrue(not state or state.startswith('Z'),state)
        finally:
            if state and not state.startswith('Z'):
                try:os.kill(pid,signal.SIGKILL)
                except ProcessLookupError:pass

if __name__=='__main__':unittest.main()
