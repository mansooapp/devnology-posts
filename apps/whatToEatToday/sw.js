if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-1d5d578f.js",revision:null},{url:"assets/index-c1d4a0ce.css",revision:null},{url:"index.html",revision:"1864b45ed18bb1db6237191dcb22df26"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"whatToEatToday-192x192.png",revision:"fdb953e747052b088eda7e2d8bc116b9"},{url:"whatToEatToday-512x512.png",revision:"fdb953e747052b088eda7e2d8bc116b9"},{url:"manifest.webmanifest",revision:"6a4715c51a82825973ff435b035499c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
