const CACHE_NAME = 'divya-mantra-box-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './deities-data.js',
  './deity-illustrations.js',
  './audio-engine.js',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Never intercept external TTS audio streams
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  // Network-first so code updates reach the phone immediately, falling back to cache when offline
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
