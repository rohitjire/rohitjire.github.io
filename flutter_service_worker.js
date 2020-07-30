'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "da6e8ba33236407e55eb2db09ea733e2",
"assets/assets/flashchat.png": "837c4288713dbe56af119bf799ccedee",
"assets/assets/FlutterLogo.png": "e86cc9654f37fd893fcce802fb58d6e8",
"assets/assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/fonts/LaurenPremier.ttf": "32abea60cbf6eb0b68f84269c5ad83b0",
"assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/github.png": "f09ef5e695250343a372f4f70a6814e9",
"assets/assets/instagram.png": "a5d7889c105e33b90c9f34f7f8d78ab3",
"assets/assets/linkedin.png": "7c2ddc7b8b6595f6d71db4534f0bb098",
"assets/assets/medium.png": "dd01d2dd66b55d00f961292fe9b7b6a8",
"assets/assets/profile.jpg": "d2a40dacb075aa85ceacb997bcc05458",
"assets/assets/Resume.pdf": "e557bee46c911e1fe624aa0801bf365a",
"assets/assets/twitter.png": "312082f64163590d6cdf6f2929bf7612",
"assets/FontManifest.json": "7e6a6a4622e578311eebbaf28429db5a",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "9d2440fa38d14e364fd980ceeebe5f0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "58b4ca2546f19997240b894481807304",
"/": "58b4ca2546f19997240b894481807304",
"main.dart.js": "c66dd737e40ed9f7dd8f037b2444bd3b",
"manifest.json": "a1bc3309d7ad09fbd415428b20149334",
"rohitjire.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"rohitjire.github.io/.git/config": "4bbaacb4c70b1e905842f922adb99349",
"rohitjire.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"rohitjire.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"rohitjire.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"rohitjire.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"rohitjire.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"rohitjire.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"rohitjire.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"rohitjire.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"rohitjire.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"rohitjire.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"rohitjire.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"rohitjire.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"rohitjire.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"rohitjire.github.io/.git/index": "f11b3ad6cba7531239cf03d9184c6b10",
"rohitjire.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"rohitjire.github.io/.git/logs/HEAD": "b38a8e88784179d5ddab73a2d68e320b",
"rohitjire.github.io/.git/logs/refs/heads/master": "b38a8e88784179d5ddab73a2d68e320b",
"rohitjire.github.io/.git/logs/refs/remotes/origin/master": "775186dbf10292cf1939517ee661afb2",
"rohitjire.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"rohitjire.github.io/.git/objects/10/15e12bb8191cf27ccf21da986f53d2a2f677fb": "cd5c5b8ee7b2eb77421502d3788488e2",
"rohitjire.github.io/.git/objects/10/70aacda9489240308493094defb23ce0d1bedc": "f471f76fbc5a741c3ee62d32e23609b3",
"rohitjire.github.io/.git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
"rohitjire.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"rohitjire.github.io/.git/objects/1b/9c6bc75ede694a479e9826e21851b9b9088599": "1bac831a6a10274682e09b8ae3ea3569",
"rohitjire.github.io/.git/objects/1f/fd57799e31f51a0e267dc6bbec4d48757fb247": "dc4045b01bb3215c17a3dc0c28c283a0",
"rohitjire.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"rohitjire.github.io/.git/objects/23/1aa632f1d6a7450ceec3cf528fe1ce68f0e72f": "12305812217d6a9a381e74177980e503",
"rohitjire.github.io/.git/objects/2e/a11a2f74a755dd681f1ed54f75c95aad353493": "a1c8cffb03b83111ee4e919cfb2f1f36",
"rohitjire.github.io/.git/objects/43/7b1157cb4c32560095c6d40accde2956070c1c": "9e7e2f17a3467d973000e4231368942e",
"rohitjire.github.io/.git/objects/49/af116dff5a39beb7d6b9042046be687836bcb8": "27559bffbdead8cb6a7b2db4e2300da0",
"rohitjire.github.io/.git/objects/4a/02655a663e8ac7b14414325862dee47d648ded": "56175240fc56d492185d968309af669b",
"rohitjire.github.io/.git/objects/4a/e44b9446b7cddb96e2f64f146846114421e4f5": "f7ebae5a20fcec3bd05a47c9dd8de66d",
"rohitjire.github.io/.git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
"rohitjire.github.io/.git/objects/64/a603611748c85ded21eadc88d13ce0dacd1c22": "d540f02c389a9fbefac1105943ca37b9",
"rohitjire.github.io/.git/objects/73/5e69785c4f031d821badcaafa0febc3abc2f30": "c48b9288e1b09a577ccee396dcb212d8",
"rohitjire.github.io/.git/objects/74/7a5aceea7c7bf2beaa79c1ac9aba9e2842ec09": "26af5ca94760be18baee2497a365ac2f",
"rohitjire.github.io/.git/objects/78/21d1342f134a7b4d052db2f6752951e1f017c2": "e73649174b4fd6af187c99faa7b367b1",
"rohitjire.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"rohitjire.github.io/.git/objects/81/515b04a4c7eb11f78aef5013a108df4434eebb": "781be5ba9f1172f0dfaf7ebfb856b37e",
"rohitjire.github.io/.git/objects/83/1f36eb18e41e3debf7c7d38963a537add97400": "2470b818dc5a44dbe32bccda638846c9",
"rohitjire.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"rohitjire.github.io/.git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
"rohitjire.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"rohitjire.github.io/.git/objects/8d/2e19f3f1f504382c360b7c8ed4812487549dc1": "52c7a928421dfcaa01b03406fb4dc82f",
"rohitjire.github.io/.git/objects/93/7983be6b0678b56b93d376b81c056e748b81db": "90c8aa85fdb1d160ab57d9bab262a1a7",
"rohitjire.github.io/.git/objects/97/09e159d6e40bd2dadf922ff0e181cb87b5ec5c": "03e80837ca9ee9d2d0628c4929c3f7b5",
"rohitjire.github.io/.git/objects/97/bd133eb240c1d8592c1bb9e49a843115341d59": "f39f16708fbe53a600168509f8d7afe0",
"rohitjire.github.io/.git/objects/9f/2adc0459c5f8ab6b8fec406b19244e1f16e1a7": "a0b2bfd13949eb5292ccaf1666d69ebd",
"rohitjire.github.io/.git/objects/a5/5826924d643a0c81f197fd7bf622794ce2526e": "11a68b82cd7ef980d89209fe943b7e46",
"rohitjire.github.io/.git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
"rohitjire.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"rohitjire.github.io/.git/objects/b9/2dd1c1e95315726ae15650e65aa7742fcd45e1": "740a6d6f8f850bc75de1657d7f17a329",
"rohitjire.github.io/.git/objects/b9/4f68261c66bcf575ddfca3bbc35d5a8894bdcd": "3fb260f771eee840a2d0a565dbf40d5f",
"rohitjire.github.io/.git/objects/c3/99ef5f03c6428135510e53b8fabb8610c46c2f": "3e985cdac375e9a776c6a09a853f3a80",
"rohitjire.github.io/.git/objects/c8/819b698bf2585449dc3fc17461f4cacd063a63": "31e2f906cc2e78803acfd537ec5fdbdb",
"rohitjire.github.io/.git/objects/c8/b817e3fe81774791293714fffcc7dfdb46f84d": "16b727886f7cbd2938db9ffcaa334970",
"rohitjire.github.io/.git/objects/d6/e31ddf488bc2c621e4bdfd45cb5a1f5ec93270": "1b7b9ace3d5100ddfaeef7645fca1d38",
"rohitjire.github.io/.git/objects/d9/d13d96f5785fd3c7ae38b3e995f70765cb34d2": "301c79e848aae776d484f63816d51d22",
"rohitjire.github.io/.git/objects/e2/c69c3fb94651237de80e67a69d458c55b45649": "6673680e554c4a54919594421f2b934b",
"rohitjire.github.io/.git/objects/f4/3f90fea23d3a40731092ef83438c5038fc2362": "7a76bf03bed70ba7b77afc5e4b9ec5af",
"rohitjire.github.io/.git/objects/fe/c3dff25570368cedec0017f0fb16257840cecf": "fede3e4e6f6616b28559bba5187b5684",
"rohitjire.github.io/.git/refs/heads/master": "f1c2b1060ea91a336fa928dd1292dc90",
"rohitjire.github.io/.git/refs/remotes/origin/master": "f1c2b1060ea91a336fa928dd1292dc90",
"rohitjire.github.io/assets/AssetManifest.json": "da6e8ba33236407e55eb2db09ea733e2",
"rohitjire.github.io/assets/assets/flashchat.png": "837c4288713dbe56af119bf799ccedee",
"rohitjire.github.io/assets/assets/FlutterLogo.png": "e86cc9654f37fd893fcce802fb58d6e8",
"rohitjire.github.io/assets/assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"rohitjire.github.io/assets/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"rohitjire.github.io/assets/assets/fonts/LaurenPremier.ttf": "32abea60cbf6eb0b68f84269c5ad83b0",
"rohitjire.github.io/assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"rohitjire.github.io/assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"rohitjire.github.io/assets/assets/github.png": "f09ef5e695250343a372f4f70a6814e9",
"rohitjire.github.io/assets/assets/instagram.png": "a5d7889c105e33b90c9f34f7f8d78ab3",
"rohitjire.github.io/assets/assets/linkedin.png": "7c2ddc7b8b6595f6d71db4534f0bb098",
"rohitjire.github.io/assets/assets/medium.png": "dd01d2dd66b55d00f961292fe9b7b6a8",
"rohitjire.github.io/assets/assets/profile.jpg": "d2a40dacb075aa85ceacb997bcc05458",
"rohitjire.github.io/assets/assets/Resume.pdf": "e557bee46c911e1fe624aa0801bf365a",
"rohitjire.github.io/assets/assets/twitter.png": "312082f64163590d6cdf6f2929bf7612",
"rohitjire.github.io/assets/FontManifest.json": "7e6a6a4622e578311eebbaf28429db5a",
"rohitjire.github.io/assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"rohitjire.github.io/assets/NOTICES": "9d2440fa38d14e364fd980ceeebe5f0d",
"rohitjire.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"rohitjire.github.io/assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"rohitjire.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"rohitjire.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"rohitjire.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"rohitjire.github.io/index.html": "58b4ca2546f19997240b894481807304",
"rohitjire.github.io/main.dart.js": "b547dee02657ca0b0215c2bb21b09e8d",
"rohitjire.github.io/manifest.json": "a1bc3309d7ad09fbd415428b20149334"
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
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
