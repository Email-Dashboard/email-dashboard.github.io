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
    "revision": "4ad358ebc561e56a1794e6f2ee9c93ed"
  },
  {
    "url": "assets/css/1.styles.fb0253dd.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.ac2986cc.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.b3723adb.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fb0253dd.js",
    "revision": "fe3aebd308f97884e54bac25226fd3be"
  },
  {
    "url": "assets/js/2.ac2986cc.js",
    "revision": "60fc58741cfb9975a3854e966f000c85"
  },
  {
    "url": "assets/js/3.c55f8ca4.js",
    "revision": "d094d095b4bee4168f1999cb56bb462f"
  },
  {
    "url": "assets/js/4.c1f21b96.js",
    "revision": "116aaadbb10f9c28d8fc68edad9347f4"
  },
  {
    "url": "assets/js/5.b20ea46b.js",
    "revision": "eb3bbbd94776e51ff835b8a774ce4e65"
  },
  {
    "url": "assets/js/6.65dc3b04.js",
    "revision": "721d4ad64920d70fb70935faaa7ec6e6"
  },
  {
    "url": "assets/js/7.0e6fedd1.js",
    "revision": "ffa51b5da86298a14cca4861935c83b1"
  },
  {
    "url": "assets/js/8.fdf13e05.js",
    "revision": "81755fd57c0b31f71626edcd53ef6d4b"
  },
  {
    "url": "assets/js/9.434ea2b0.js",
    "revision": "9d696bfd8c782c8f80de1a9a0c2954fe"
  },
  {
    "url": "assets/js/app.b3723adb.js",
    "revision": "175511d52ddd9e2b7e50b71774ac47eb"
  },
  {
    "url": "guide/deployment.html",
    "revision": "f35b78bfd09845879438485a11fdfbcb"
  },
  {
    "url": "guide/development.html",
    "revision": "b4a5e005c647d573669c89f29cf56914"
  },
  {
    "url": "guide/index.html",
    "revision": "fca3815698023b79895948e2073158b9"
  },
  {
    "url": "guide/licence.html",
    "revision": "0830565743ab705516bfd45c069f3a79"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "ded56929046a60890713471749908127"
  },
  {
    "url": "guide/usage.html",
    "revision": "f97187854fe7492ff22610d083f12c47"
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
    "revision": "5808ea8bba43d00996891232c88588f9"
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
