if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>r(s,l),a={module:{uri:l},exports:o,require:u};e[l]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"5e2ecb17061a769a2b12795e39142bcc"},{url:"404",revision:"5e2ecb17061a769a2b12795e39142bcc"},{url:"about-us",revision:"346d35511e89e5bf45aa9d240765b368"},{url:"assets/about-us.62d3ed25.js",revision:null},{url:"assets/contact-us.d622f604.js",revision:null},{url:"assets/default.87b152dc.css",revision:null},{url:"assets/default.924c45e1.js",revision:null},{url:"assets/entry.13ba8a89.js",revision:null},{url:"assets/entry.efc81a5d.css",revision:null},{url:"assets/error-404.16871f30.js",revision:null},{url:"assets/error-404.7fc72018.css",revision:null},{url:"assets/error-500.9da1ff4e.js",revision:null},{url:"assets/error-500.c5df6088.css",revision:null},{url:"assets/how-we-work.06422306.js",revision:null},{url:"assets/index.896a208d.js",revision:null},{url:"assets/index.aa317a68.js",revision:null},{url:"assets/innerPage.d45921b4.js",revision:null},{url:"assets/nuxt-link.904f9ede.js",revision:null},{url:"assets/privacy-policy.1f9ff172.css",revision:null},{url:"assets/privacy-policy.37a865b0.js",revision:null},{url:"assets/products.f2204b2a.js",revision:null},{url:"assets/projects.0b51d58e.js",revision:null},{url:"assets/services.e53eae2c.js",revision:null},{url:"assets/services.fc2f7a70.js",revision:null},{url:"assets/terms-and-conditions.64ce30a3.js",revision:null},{url:"assets/terms-and-conditions.c08f1812.css",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"contact-us",revision:"245ee635d4980f8dab347c6b64354ca4"},{url:"how-we-work",revision:"f89ffa8dab02ed2716930b41a324b11d"},{url:"/mp-solutions/",revision:"eebaf4187c763a24923e009bc63d972b"},{url:"privacy-policy",revision:"1d04d0370c5fedb3d90856c461b48d0b"},{url:"projects",revision:"025c5160f72a57ee972cf784a51d69f2"},{url:"services",revision:"42b2a382ffa6e371fae3f6ec85c949a2"},{url:"terms-and-conditions",revision:"feb47bb798e0f6ab109f7038ea22fc0a"},{url:"manifest.webmanifest",revision:"fc806db4099624cdf56287652e422eb1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/mp-solutions/")))}));
