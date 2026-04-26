const CACHE_NAME = 'cashmonie-v2';
const ASSETS = [
  './',
  './index.html',
  './home.html',
  './manifest.json',
  './app.js',
  './cmloan-onboard.png',
  './cmloan-onphone.png'
];

// Install and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch strategy: Network first, fallback to Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
