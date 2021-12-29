'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd341ba74d38c530da636604a427deda",
"index.html": "20c9817dad4f9f302727ab0d84de6c6e",
"/": "20c9817dad4f9f302727ab0d84de6c6e",
"main.dart.js": "0715391feb320b2a4e8b80f387585da0",
"README.md": "33417de7488b10fd3d60fe2dd2129f13",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7153a3b60445056c3f7f317a17a33434",
".git/config": "8be7072bd7098f0299a061ad422caf95",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/752cb718410cab771fc4cb8bc3b244bae16b57": "c35c3efdef37db91b5bafa4021b0eac7",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/be/6234004770422fd8bc6c81a8dac79efd14340a": "40c3d0e77234fe0fe6f2a39759357ae4",
".git/objects/d1/ef6854956f8ba336e83e9288ca1b0571d748e9": "2a09577f71bb6bbe40395dfb6480aa16",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4ee06e8207ae1fe8357c1bfee8acf81c81ee7e": "6dacdc6bccd16a587e6dabcc7af3ac26",
".git/objects/d8/ce5f96bdbc8065e52003ebb026dce7969e0fd5": "b6639d4ed78c7a5a5ba670843354054d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ecf8d6b1799581870ceba1aa862c30f8932972": "239c695a3ca8ed76e06fc0851c4c3991",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ec/c7a5faebda23024a25f26db427fe6f58780d3a": "5a3118059d6049a12d369feed28bf4f0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/503f3e4de1c0dbc55acd122beb4d4dec0084d5": "3961f54e1fee910c7d801890268f65b6",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/42/01f800c1af7933e9ea2ef5d27c9ebbdc3ec23c": "4aa5405edf76e97b01a7cbceb47bdd12",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/1f/5c641967f835814a9ac09aeb675c488ad11082": "a599745311170e0454f9edc699b6710e",
".git/objects/7b/13e961be4dc308006d52b0bf1b4e4b3ec4bc17": "42eee9a4ffe3ac24eab22b2b966cee97",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/6106a059fd1302ff5f564f400060bddda288e4": "ec8bd452684e437a384b7a7608d94774",
".git/objects/72/5b04f1231d408cff7e931d285fb43805752e7b": "abe653b92f0ae155020d1ee9fb2e480e",
".git/objects/43/e4011d6d68c86c0cf6c779e47915d422d17b00": "bf899e081c949c6a35fb76fac7f01f81",
".git/objects/43/2566078fd053d1aadb7667419942f2b214eecf": "437dc5a8c28a78cc9a9bff55d0bb0cda",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a3ac921e856ec42b7f6071268495f2116992d3": "1d56110588e169236b7e2f4bae7e7a3e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/96/e198badafa27ccc08752c1f99f5df2dc806585": "5a3ad6b2b20905adf1875feba42780d6",
".git/objects/3f/5198827b17a6439b94acc0078eecd815625997": "0764f6f4bd687415064e2206b372c017",
".git/objects/5b/587110ba422896a7966d2b57c445ca92982f24": "f62735fab0bc4950b2a5c8a7b8608dbb",
".git/objects/6d/45c835d990ce5d945934a3d0c826d95b083fb4": "af2511aa0bb0d03495c73782595de259",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/e63d4e365d4189ca670899d816cbde89cd1d4d": "04ee72357cf46a8075da659795675b06",
".git/objects/0f/360b9cf5efe5949bcf0a5e45fd202ea3f8a1ce": "56efa6c3621f35fc6fb62b667f077225",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/a0/9c21fd0b34c8885e532d5c131218c60efb9f02": "72649a125999686d22f4ae605efae703",
".git/objects/b8/262fad22b8397e3f195645579d0e7529be1ae7": "29b6a6ec63513f6ba5e1047edfc59a8c",
".git/objects/a9/deddb1a8ad775f389d6f093ee7b692545711ca": "9b31a80ce2828e348d885183acaedd2b",
".git/objects/a9/9c450dd5ea746b603da22c62100ce18090ec3a": "0f8b0cb9ec420292ecb7c23e7dd6f50a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/01a98ce35abc8bababbf1ebae7322a618cf5b7": "54bda62ca5dc3020c37a3f603bce9f75",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/afe09393b19e64ca3a9deae4469f9fd71570eb": "17f60ae6686fe99ac863b69c3bed4844",
".git/objects/ea/81d93b6d5b3710f16a0f54a2a9731a33e47590": "76d4f32ac728c9c106b46448406affca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/bba4ffc65624579dd9db67517cdfa83f5cdd36": "a83d06ad97eb77691c197e2361defade",
".git/objects/4a/17cba02f8cc888b9bde38b3148e834268311b7": "2f3e8ddd592188556e888ce9bd67ec6a",
".git/objects/8d/78571c3fa53672180bc9db1f543a6b499412fd": "55581cdd44b408dc5b80b0a461fdc794",
".git/objects/15/d910038b33fca291768fbfe2a0a2b537b2301c": "7b6fe7bafe64fcd5b289866a423752bb",
".git/objects/76/fd703c9d3ec7ed279fd96252eae40051b68ab2": "4e2036dec4c386ab5b75396914198503",
".git/objects/82/88410cadd311b731bb63ad35d5181f428a3d0d": "1d17cc6325a5495573599aef825aa3b8",
".git/objects/40/5b49aee88639107301405d3836bf2da194b39f": "874b17033fed2220af4356f63d91c2bd",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7f/4ec2b6571e2b8a522ebd91a65d7aa4d3d3a08a": "bfb6079883cc3586e141685536e68746",
".git/objects/7a/f0c6694e69845440954d206772f284e011c7d2": "2ac6f0b59acd5834ce4f4ea20da9bc15",
".git/objects/8e/3feb1353fee6da938bb2b86a627f9e9a4ea9f7": "628e8025d559ed08a086ee54794276e5",
".git/HEAD": "48e6b6c9c8b8ce3ba047628f0680f9bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5302f0ff3511d93b9d9cafaca103a1b4",
".git/logs/refs/heads/test": "0d000965597c4d99034bfad6e8eb2451",
".git/logs/refs/heads/main": "519db5c5fda277141e4b6234898576b0",
".git/logs/refs/heads/main-test": "37b78e8ec6d97ec55c91f9e07905540f",
".git/logs/refs/remotes/origin/test": "ba5c568ea1c27349e2a67676905b9e35",
".git/logs/refs/remotes/origin/main": "8ea681a2579604193f150a585f002f39",
".git/logs/refs/remotes/origin/main-test": "1c944d38fde9ff2ba92f1f258fef4139",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test": "07e09c56b61f5156003594f480d33ab6",
".git/refs/heads/main": "fa527c3b2b72bf474f6c6f726ab1105a",
".git/refs/heads/main-test": "34f80027bac4be344ebc932e285e5250",
".git/refs/remotes/origin/test": "07e09c56b61f5156003594f480d33ab6",
".git/refs/remotes/origin/main": "fa527c3b2b72bf474f6c6f726ab1105a",
".git/refs/remotes/origin/main-test": "34f80027bac4be344ebc932e285e5250",
".git/index": "df96e5f441ddfa1bd3222d0302808473",
".git/COMMIT_EDITMSG": "f0e8903fc5c827c60f8fa77c65ec1103",
"assets/AssetManifest.json": "19206fd36785a100cd41dc575b8e1780",
"assets/NOTICES": "172661f7a237bd44c35101faf594c151",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/preview.png": "6b10c71454f2d3eb2d2d867c656607ef",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
