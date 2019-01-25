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
    "revision": "83ff2228ea9f89e30223be63974745cb"
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
    "url": "assets/css/styles.ac11fff9.css",
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
    "url": "assets/js/3.d843b0bc.js",
    "revision": "412b78c66e4c54bfcab2c750bb1ae1b8"
  },
  {
    "url": "assets/js/4.674a218d.js",
    "revision": "8b1f2c6234ff54c6b90622f65bc25736"
  },
  {
    "url": "assets/js/5.8fcff0e5.js",
    "revision": "203c783003e6f7235a2b48a03fd37243"
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
    "url": "assets/js/app.ac11fff9.js",
    "revision": "16ee331602de2a5489e31580c8df8e51"
  },
  {
    "url": "guide/deployment.html",
    "revision": "650592390c8460363286052b7594ebbd"
  },
  {
    "url": "guide/development.html",
    "revision": "5bdf7f96ea864416754efc77c13a1cfc"
  },
  {
    "url": "guide/index.html",
    "revision": "ffa68892838bfb381b9fb27e72c25135"
  },
  {
    "url": "guide/licence.html",
    "revision": "0903964009cc44b4422b57c55bbeeb35"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "84320071913815ff46ea350f42f9b933"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "index.html",
    "revision": "ab711271c93011c348219bf48b2b2007"
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
