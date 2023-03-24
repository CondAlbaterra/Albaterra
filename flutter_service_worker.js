'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "47d7b6f37b18284153b557fcddadc9cb",
"assets/assets/images/col_cities.csv": "75a745cad88df79a096322a380f753da",
"assets/assets/images/E00.png": "bff4ee186c23c8abe3ecd8d50834b0c5",
"assets/assets/images/E01.png": "00856140ef80893dffab319fd57a2418",
"assets/assets/images/E02.png": "a6dd696fa0d6c7c1e1478b20f9f8f6c5",
"assets/assets/images/E0P.png": "329df584d3ec78fea14d3c072756bf07",
"assets/assets/images/invertaga.png": "99538ab4ade870b2f0955541a1b66a8a",
"assets/assets/images/L01.png": "efda2726221c5c3ffc9b275378ed6f8b",
"assets/assets/images/L02.png": "fd42fdbd3a200f2fb55763c5e483d1ba",
"assets/assets/images/L03.png": "c4dbcc81220a20ea9eafa5e869f477d9",
"assets/assets/images/L04.png": "06feb24ecf3b0838d416611f9a7ca5bb",
"assets/assets/images/L05.png": "645dc53c305566f6a6d8c7498f294f6e",
"assets/assets/images/L06.png": "5ad5de3f890121d0bb9b7877bc8157a4",
"assets/assets/images/L07.png": "7a2776b7bda5b4fd78502ac3c7ccbefc",
"assets/assets/images/L08.png": "8055d6849e143ae41591755693013061",
"assets/assets/images/L09.png": "a2708d0cd20fdf7af05b580dca16a641",
"assets/assets/images/L10.png": "65d714938e7309332646da4adc66cd8e",
"assets/assets/images/L11.png": "e9d5770d6d920b6d4c001b84338c649e",
"assets/assets/images/L12.png": "a0f9493b3b79bf164a4c55be1340259b",
"assets/assets/images/L13.png": "4c2ab0c128e20c58d908fb63ee555e7f",
"assets/assets/images/L14.png": "965e6bc5f71f95728968c300908b720b",
"assets/assets/images/L15.png": "9b01a3ac18b63403390bac3a576be84d",
"assets/assets/images/L16.png": "f8b62839a63692e1be200b5d190f7588",
"assets/assets/images/L17.png": "518e55840b1e7092f1fab5eb5e39be60",
"assets/assets/images/L18.png": "19e0a2d1d8549f9acacfbabdd48a2736",
"assets/assets/images/L19.png": "8800cca8ca5360a85bea498e45a8affe",
"assets/assets/images/L20.png": "d581d02cf45cbb7d53939cd72656b0f3",
"assets/assets/images/L21.png": "df9f5775a2b19d4c39a9e6610aea36b8",
"assets/assets/images/L22.png": "194ca931052650e61480855a37e05b8d",
"assets/assets/images/L23.png": "4baea3c023a38d222a67eb859e8b2f22",
"assets/assets/images/L24.png": "12678e02176aa0ed579a513fac68f2d4",
"assets/assets/images/L25.png": "94ca242914dd8685e8358ac82243d8a6",
"assets/assets/images/L26.png": "1ac012429c4367352306a7862dcb3311",
"assets/assets/images/L27.png": "dbd650b5bc73f0b3cfd39199254c06a0",
"assets/assets/images/L28.png": "b812065004b4d4596aeafdcca0576d0c",
"assets/assets/images/L29.png": "8e81cefeaac50af6b94c60d738de8411",
"assets/assets/images/L30.png": "ecc31fe04af80d6fe797ee8691846b34",
"assets/assets/images/L31.png": "3523630b2b05247a7df0a282a1a4d394",
"assets/assets/images/L32.png": "e29e6cf6c1da5258932490303a2ee91c",
"assets/assets/images/L33.png": "531f3d5a67c6514543565f0e05eaa102",
"assets/assets/images/L34.png": "4edc38d9416ab95126189fce3f237b46",
"assets/assets/images/L35.png": "8a5422f44f1a0e43393110ba3b63d977",
"assets/assets/images/L36.png": "8595ee53c901d449d265fbc331f8c5df",
"assets/assets/images/L37.png": "eeaca9eac1e6f5ece73fa46c2b273f07",
"assets/assets/images/L38.png": "5b56b7f554556cbbfbfb2fa85145858c",
"assets/assets/images/L39.png": "49acce09e18935740766954a57843a0c",
"assets/assets/images/L40.png": "49cabbc886c4906a6355f10cd668e914",
"assets/assets/images/L41.png": "aeb70cd6e626cc873091e714a1414e00",
"assets/assets/images/L42.png": "6cd9f5f596774a91e7ca2e2046728b75",
"assets/assets/images/L43.png": "87137ad6e02a43e32f73624902bc1b07",
"assets/assets/images/L44.png": "8c0cefcc48033350bf5ebd046bf7469f",
"assets/assets/images/L45.png": "8602e5dfc5d31d08ab642865c877e1b0",
"assets/assets/images/L46.png": "7fe46000ff67d8ad6ca7e323aae9793d",
"assets/assets/images/L47.png": "5bf9c55559c2c4ec4c23a50515daa2f2",
"assets/assets/images/L48.png": "c5f99e12cb5b273605efa25149557da7",
"assets/assets/images/L49.png": "f89ab2bd5b109bd1bd92051fe8559626",
"assets/assets/images/L50.png": "bc0da673d9c8d8fdd97d2af3382461fa",
"assets/assets/images/L51.png": "f9c10154caaaaad0ce528cc9aa9ad2c7",
"assets/assets/images/L52.png": "d7612e37059e4918450549fd62d85a6e",
"assets/assets/images/L53.png": "9a5ba3a34e366039d8ee3fed4a5abe82",
"assets/assets/images/L54.png": "8cca6fac23722a5ca3cb5e59727089a8",
"assets/assets/images/L55.png": "64b609f2704f4de3ee06bba4483a6db8",
"assets/assets/images/L56.png": "15127b64de8bb3d6998659255cdf5dc7",
"assets/assets/images/L57.png": "b1c8a631a55b7d3337685586193064c6",
"assets/assets/images/L58.png": "eed9b7426dac831211842ed5771c0e73",
"assets/assets/images/L59.png": "94495bea82d94633656b731f14b42f73",
"assets/assets/images/L60.png": "a25fb5a052719d67a6cf3c76e99d982e",
"assets/assets/images/L61.png": "a70e8f6f190c194e12d2d293d28c2f90",
"assets/assets/images/L62.png": "e1ef45df46cc3a82c26bab146f5d8367",
"assets/assets/images/L63.png": "490f601e2d0e1d18aa690390021985d5",
"assets/assets/images/L64.png": "1e03ead2435fec3568d7fc64b91a6835",
"assets/assets/images/L65.png": "6149a9f5765cfe995ee93f49b9f6f904",
"assets/assets/images/L66.png": "d0b3420a5c8b3c024da035a49cbc9628",
"assets/assets/images/L67.png": "329df584d3ec78fea14d3c072756bf07",
"assets/assets/images/logo.png": "a7c5b1beaa4d19b41c1693f06be557e4",
"assets/assets/images/lote_general.png": "bff4ee186c23c8abe3ecd8d50834b0c5",
"assets/assets/images/vision.png": "e1bae521b30f18b2450eec6fbcadea97",
"assets/assets/images/world_countries.csv": "f4821393189e0906141ccbe2ccbffaa9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ffa3303814c5b2628b40d09686a47bc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f5acb776dedc8bf4f04cea8256871887",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "8408934557fa1000a8744faa6b1c2e13",
"icons/Icon-512.png": "485224332a5f78b11ea6e0c8128a1a58",
"icons/Icon-maskable-192.png": "d6b50f5744b405e1a56d3659d7ad2591",
"icons/Icon-maskable-512.png": "50947c6915140511591da4bb146acd02",
"index.html": "bc7e811200dbc339ca803824a7575976",
"/": "bc7e811200dbc339ca803824a7575976",
"main.dart.js": "7c818741491c6425372441f28176ed45",
"manifest.json": "d0ba7fca21c41a56a60eb5c821bbe17e",
"version.json": "f4812e959d4432be401573b415f9a234"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
