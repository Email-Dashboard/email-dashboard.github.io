/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b7d151fa73eab09ba513df2e1f19411"
  },
  {
    "url": "assets/css/1.styles.3ac4ce2d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.9d3b15ac.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.1caccd9d.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3ac4ce2d.js",
    "revision": "aa0a3e3ca70cfb3cbf1c8c7dd2c544d9"
  },
  {
    "url": "assets/js/2.9d3b15ac.js",
    "revision": "bcc486eea5a9b9b81519cb7ff4663161"
  },
  {
    "url": "assets/js/3.46e00407.js",
    "revision": "1966c5a1a3d13175167c9e4c844e0b09"
  },
  {
    "url": "assets/js/4.cbfe05ff.js",
    "revision": "022d12e9b0034d48edbf0e30e86fe3eb"
  },
  {
    "url": "assets/js/5.36dc825e.js",
    "revision": "afc4d70c793c524cd893ce41adbe586b"
  },
  {
    "url": "assets/js/6.f1bdb898.js",
    "revision": "db6438d3bd1c8ff6fc2f051500fac6ea"
  },
  {
    "url": "assets/js/7.3c1e6b03.js",
    "revision": "3bc3f6757cec9abc171825718112124c"
  },
  {
    "url": "assets/js/8.63bc742a.js",
    "revision": "e6dc850ca1bf2226357100bf6f7693f3"
  },
  {
    "url": "assets/js/9.21fe5eb7.js",
    "revision": "465c55a4747dadaf87ded9ac7ba1fa42"
  },
  {
    "url": "assets/js/app.1caccd9d.js",
    "revision": "d8c506750e437c973ea4cdad706065c6"
  },
  {
    "url": "guide/deployment.html",
    "revision": "678174072a53216e48b6fe4336082b87"
  },
  {
    "url": "guide/development.html",
    "revision": "74ed755e076a0c6cd534de73f1852a4b"
  },
  {
    "url": "guide/index.html",
    "revision": "e2df31a77249ebefad1083c6213079cc"
  },
  {
    "url": "guide/licence.html",
    "revision": "9cbc1b13ff0a08bd0d5f144f5e043951"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "43913078ca51b993bbaa946344436415"
  },
  {
    "url": "guide/usage.html",
    "revision": "85b1039a8137a3202fbf3269c6c1940f"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "img/usages/new-activity.png",
    "revision": "24f6026f0b4751d4e743556d8cd357d0"
  },
  {
    "url": "img/usages/new-notification.png",
    "revision": "ba624e5e00c7fc69569bb40ee1c8b0c7"
  },
  {
    "url": "img/usages/new-post-header.png",
    "revision": "a1e433d9d7af8e0e3e480f4496010c92"
  },
  {
    "url": "img/usages/new-post.png",
    "revision": "11da0172046ff8c027a7a8209bed9198"
  },
  {
    "url": "img/usages/new-smtp.png",
    "revision": "69bc17c70bfb54478f03dd8716a78050"
  },
  {
    "url": "img/usages/new-template.png",
    "revision": "c5cbf4447a632f768c628f9108b32454"
  },
  {
    "url": "index.html",
    "revision": "80dcf97d30ec4f31385c396f3bd3ea57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
