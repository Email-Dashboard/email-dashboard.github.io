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
    "revision": "25b8c5c1f247c127ecca34af15611f93"
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
    "url": "assets/css/styles.91cca60f.css",
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
    "url": "assets/js/3.d4529193.js",
    "revision": "3303ac0d11885fb2ac03483788af277b"
  },
  {
    "url": "assets/js/4.f8533975.js",
    "revision": "8b1f2c6234ff54c6b90622f65bc25736"
  },
  {
    "url": "assets/js/5.6fcf7342.js",
    "revision": "8265f8df65d7f85847d1ca6b8f8212d7"
  },
  {
    "url": "assets/js/6.4f97b047.js",
    "revision": "295a6d7fb360c2a7df7cdb2c5f7b84d8"
  },
  {
    "url": "assets/js/7.0a183a37.js",
    "revision": "176a2e71704ef2bc9b2cc60496d27367"
  },
  {
    "url": "assets/js/app.91cca60f.js",
    "revision": "b775f3bdda40d6bf8a883df443174196"
  },
  {
    "url": "guide/deployment.html",
    "revision": "9f31dca8d3592d9515956792bfc5a096"
  },
  {
    "url": "guide/development.html",
    "revision": "d8d4d39790cfb27c30b9f98561ce8698"
  },
  {
    "url": "guide/index.html",
    "revision": "9a0124f2b96e7ac896e54515d1be2991"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "5a9aed88637ecd542ddb11ed55a46d53"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "index.html",
    "revision": "c53d491a83b86df344928b1d350ef189"
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
