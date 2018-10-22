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
    "revision": "70941e28ddfdd7e3bc5fde76e180cd1e"
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
    "url": "assets/css/styles.279b1220.css",
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
    "url": "assets/js/3.d0919be6.js",
    "revision": "412b78c66e4c54bfcab2c750bb1ae1b8"
  },
  {
    "url": "assets/js/4.f8533975.js",
    "revision": "8b1f2c6234ff54c6b90622f65bc25736"
  },
  {
    "url": "assets/js/5.f633b84c.js",
    "revision": "f0413a15d60b76864f481b2bc4ff8f50"
  },
  {
    "url": "assets/js/6.75aeeff5.js",
    "revision": "fdc953ab561c28c7699fb19f12cf68e7"
  },
  {
    "url": "assets/js/7.2834e67a.js",
    "revision": "cdcc198f9d00eb27e0f50ae9bb0e9824"
  },
  {
    "url": "assets/js/8.c97c9f1c.js",
    "revision": "81755fd57c0b31f71626edcd53ef6d4b"
  },
  {
    "url": "assets/js/app.279b1220.js",
    "revision": "bdbd55ad6984b02922ab30a23f6a5fe8"
  },
  {
    "url": "guide/deployment.html",
    "revision": "18fe6a4aee42181ad6c67f66aad7d897"
  },
  {
    "url": "guide/development.html",
    "revision": "860126e24608576cc9b9a4c7aaa94ddf"
  },
  {
    "url": "guide/index.html",
    "revision": "73e9ea24eb2e603f123690f1909718e0"
  },
  {
    "url": "guide/licence.html",
    "revision": "a2bc2aa803bf4250802aeae1061e5ed7"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "c565e2029ca0cd38075766d257a06691"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "index.html",
    "revision": "edc5eab5ae4f2b656b09649eff8d75d1"
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
