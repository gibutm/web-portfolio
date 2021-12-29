'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "d2dc8507b37fec958e2532b8f1dddf35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cbba3376998bef27dd1466145fadd750",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "367d53928b320c5f5f7ca72a89f1051e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "580781c6d254114e227787c0333778f4",
".git/logs/refs/heads/main": "580781c6d254114e227787c0333778f4",
".git/logs/refs/remotes/origin/HEAD": "a50e8f1fa621ad1e9c255d8af66478d0",
".git/logs/refs/remotes/origin/main": "ba1530fa81944fd693153fb20702f9bf",
".git/objects/0e/a6182ec8611ec42fb1807287ea3e69a752903f": "32d1645e1945351ddc601bac73a69e77",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/15/ce6d701d07175708e542f6e80c2f881e71b88a": "7dd8b18cac907996604867556325df45",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/35/a442dbf74e9ee71ee1de1f1a9ca835dabbe445": "ea42a2a36fc5ed159e7ebd3a33a6568b",
".git/objects/43/e4011d6d68c86c0cf6c779e47915d422d17b00": "bf899e081c949c6a35fb76fac7f01f81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/dd211b249e6a1d7d5933d0fd9ad43cdf189cd8": "48c3c6cf215faa1e8c1c0e4a1d46c3d1",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/76/fd703c9d3ec7ed279fd96252eae40051b68ab2": "4e2036dec4c386ab5b75396914198503",
".git/objects/79/7562da248a114e2ce4794786185a5c48bbd149": "d7465c0098b8f3e67b34ae39a09d1dd2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/22457677470dd78105114292e8aac7dd6217a6": "7f8bc02c0f16e244ee377083adf4cada",
".git/objects/a0/9c21fd0b34c8885e532d5c131218c60efb9f02": "72649a125999686d22f4ae605efae703",
".git/objects/a9/deddb1a8ad775f389d6f093ee7b692545711ca": "9b31a80ce2828e348d885183acaedd2b",
".git/objects/ad/91b4a9746886673a56e43bc4c554c25c5ad41d": "7d75a2d75f02822a214d332e3c3f217c",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/262fad22b8397e3f195645579d0e7529be1ae7": "29b6a6ec63513f6ba5e1047edfc59a8c",
".git/objects/d1/ef6854956f8ba336e83e9288ca1b0571d748e9": "2a09577f71bb6bbe40395dfb6480aa16",
".git/objects/e7/0e52a202f5594faa137c99fa0aae9f9aac2c1c": "94c6609ee7f08dfce7f0ae06e5a9b3bb",
".git/objects/e9/9bd717418287b480982a7ac8b64be8cefd464a": "187ab8bd00a25c73c47b084974a3c250",
".git/objects/ec/c7a5faebda23024a25f26db427fe6f58780d3a": "5a3118059d6049a12d369feed28bf4f0",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/ORIG_HEAD": "2cd32786aa8f6e38029625074903052a",
".git/packed-refs": "e9d72c81e8b6c9950f06c1d817b2d846",
".git/refs/heads/main": "2cd32786aa8f6e38029625074903052a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2cd32786aa8f6e38029625074903052a",
"assets/AssetManifest.json": "7736c716728be2cc892e9d3b1350a6c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/spooky_bg.jpg": "2a3faf8624d686830e18eabc4a0cd927",
"assets/NOTICES": "41317ea677792f09d81a8aa71b0dc852",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0a68765e91621dcf5ee886d5cf134fae",
"/": "0a68765e91621dcf5ee886d5cf134fae",
"LICENSE": "b1e79e075ea15a7a089047f331c78053",
"main.dart.js": "fe9f5c803dbb3e31c78da9279ea66777",
"manifest.json": "ec23d20894be16acfcd9240a203d24ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
