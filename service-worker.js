!function(){"use strict";const e=1603118709715,t="cache"+e,s=["/client/client.0913e74e.js","/client/inject_styles.5607aec6.js","/client/index.d9e685af.js","/client/BlogPosts.e4f1bf13.js","/client/Tag.665d4ecb.js","/client/about.421f5faa.js","/client/index.bb9a03f6.js","/client/index.6595441b.js","/client/[category].c6e3db11.js","/client/[slug].c61a3e05.js"].concat(["/service-worker-index.html","/.DS_Store","/favicon.png","/global.css","/images/.DS_Store","/images/sapper/sapper_folder_structure.png","/images/sapper/sapper_nav_bar.png","/images/svelte/svelte_form.png","/images/svelte/svelte_form_1.png","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
