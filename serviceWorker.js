const staticToggleLight = "toggle-light-site-v1";
const assets = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/css/style.css",
  "/js/app.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticToggleLight).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
