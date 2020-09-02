const env = 'production'; //production || developoment;
const cacheName = 'cache-v001';
const oldCacheName = '';
const twoVersion = 2;
const precacheResources = [
  'index.html',
  'main.js',
  'styles/oxeenn.css',
  'images/github.svg',
  'images/gotopIcon.svg',
  'images/website-images/cube-shop-img.png',
  'images/website-images/financial-management-img.png',
  'images/website-images/flower-shop-img.png',
  'images/website-images/styeeings-img.png',
  'images/website-images/styssing-img.png',
  'images/website-images/thinking.png',
];

self.addEventListener('install', event => {
  if (env === 'development') {
    console.log('Service worker install event!');
  }

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      }),

    caches.keys()
      .then(cacheName => {
        if (cacheName.length == twoVersion) {
          if (env === 'development') {
            console.log(cacheName);
          }
          caches.delete(oldCacheName);
          self.skipWaiting();
        }
      })
  );

});

self.addEventListener('activate', event => {
  if (env === 'development') {
    console.log('Service worker activate event!');
  }
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  if (env === 'development') {
    console.log('Fetch intercepted for:', event.request.url);
  }
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});