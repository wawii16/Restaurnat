if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const d=e=>a(e,s),o={module:{uri:s},exports:f,require:d};i[s]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"21cb8f55d8e0c5b89751.woff2",revision:null},{url:"408.bundle.js",revision:"b7a8e06afb00035259f73f4b3f3781e2"},{url:"455ea818179b4def0c43.woff2",revision:null},{url:"4d986b00ff9ca3828fbd.woff2",revision:null},{url:"60127e352b7a11f7f1bc.ttf",revision:null},{url:"608.bundle.js",revision:"0f736225601f6c6e9cb00d27093b220f"},{url:"815.bundle.js",revision:"242f804c90dff006d9d655ada741de93"},{url:"app.webmanifest",revision:"8b5d74190134ab3d4125288de9e24362"},{url:"app~a51fa3f5.bundle.js",revision:"75e1bb978e917b173380a737aa642420"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"d1be4dbabc5704ba0f7bdfeab890f59e"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"a6f3e2cd24caabba607e07596e4a7860"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"3745be14951fc3948121c2f91a3158a2"},{url:"bacd5de623fb563b961a.ttf",revision:null},{url:"c8e090db312b0bea2aa2.ttf",revision:null},{url:"cf7f5903d06b79ad60f1.woff2",revision:null},{url:"eb91f7b948a42799f678.ttf",revision:null},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"9a14b9b7f5f811dbec5a213418eaf947"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restoran-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"restoran-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restoran-image-api-medium",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
