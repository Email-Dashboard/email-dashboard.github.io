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
    "revision": "0945abc13275d1d3f57645d8f1eacfbf"
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
    "url": "assets/css/styles.68cd9035.css",
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
    "url": "assets/js/app.68cd9035.js",
    "revision": "2857982817798ea70f2f99681f91f0d1"
  },
  {
    "url": "guide/deployment.html",
    "revision": "5c98bfb7f49b17eac5f5232b003e856c"
  },
  {
    "url": "guide/development.html",
    "revision": "31c91d7d0dc8f372362a503afd6c51be"
  },
  {
    "url": "guide/index.html",
    "revision": "92e09fcc77060a5b4da5077d6b1b839a"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "5e127b2c9b913d7b8d10fba9bbc17b52"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "index.html",
    "revision": "276e02922000343e5d7efbdf9fd57d8e"
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
