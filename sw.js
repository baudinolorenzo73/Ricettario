'use strict';
const CACHE='lollo-ricettario-v1.5.0';
const FILES=['./index.html','./app.js','./appearance.js','./shopping.js','./community-shopping.js','./menu-calendar.js','./exports.js','./style.css','./features.css','./data.js','./recipes.json','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('lollo-ricettario-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).catch(()=>caches.match(new URL('./index.html',self.location.href).href)));return}event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});
