const CACHE_NAME = 'divya-mantra-box-v1';
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
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
