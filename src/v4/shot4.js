const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
  for (const [n,w,h,s] of [['wide',1920,1000,0.4],['desk',1440,900,0.5],['lap',1280,800,0.5],['mob',390,844,1],['narrow',320,700,1]]) {
    const p = await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:s, reducedMotion:'reduce'});
    const errs=[]; p.on('pageerror',e=>errs.push(e.message));
    await p.goto('file://'+process.cwd()+'/dist4/test.html');
    await p.waitForTimeout(1200);
    await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,40))}scrollTo(0,0)});
    await p.waitForTimeout(600);
    await p.screenshot({path:`shot4-${n}.png`, fullPage:true});
    const r = await p.evaluate(()=>{
      const sw=document.documentElement.scrollWidth;
      const nav=document.querySelector('.nav'); const navH=nav.getBoundingClientRect().height;
      const btnWrap=[...document.querySelectorAll('.btn')].filter(b=>b.getBoundingClientRect().height>60).length;
      const tagWrap=[...document.querySelectorAll('.tag')].filter(t=>t.getBoundingClientRect().height>24).length;
      return {sw,navH:Math.round(navH),btnWrap,tagWrap};
    });
    console.log(n,w,JSON.stringify(r),'errors',errs);
    await p.close();
  }
  await b.close();
})();
