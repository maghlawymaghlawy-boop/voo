self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){}
 const shop=d.k=='shop';
 e.waitUntil(self.registration.showNotification('voo',{body:d.t||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.k||'voo',renotify:true,vibrate:shop?[120,80,120]:[200,100,200,100,400],data:{}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});
