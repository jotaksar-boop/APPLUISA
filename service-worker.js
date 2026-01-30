const CACHE_NAME = "pwa-adivinanzas-v1";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon.jpeg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
