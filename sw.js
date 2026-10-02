// Service worker do Gelatos Gourmet: guarda o app no aparelho para abrir sem internet.
// Com internet, busca a versão mais nova; sem internet (ou se demorar), usa a guardada.
const CACHE = 'gelatos-gourmet-v2';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    new Promise((resolve) => {
      let respondeu = false;
      const usarCache = () =>
        caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'));
      const timer = setTimeout(() => {
        usarCache().then((r) => { if (r && !respondeu) { respondeu = true; resolve(r); } });
      }, 3500);
      fetch(req)
        .then((res) => {
          clearTimeout(timer);
          if (res && res.ok) {
            const copia = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copia));
          }
          if (!respondeu) { respondeu = true; resolve(res); }
        })
        .catch(() => {
          clearTimeout(timer);
          usarCache().then((r) => { if (!respondeu) { respondeu = true; resolve(r || Response.error()); } });
        });
    })
  );
});
