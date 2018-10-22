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
    "revision": "d01df9c42dead9424aa7051a2efcdf66"
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
    "url": "assets/css/styles.a2fb2995.css",
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
    "url": "assets/js/app.a2fb2995.js",
    "revision": "c479254cec0b26b6440ec437348add12"
  },
  {
    "url": "guide/deployment.html",
    "revision": "9f56bc4e50bc26129570cf2192dc30ca"
  },
  {
    "url": "guide/development.html",
    "revision": "567c45f3fa9008fdb8caa5fc0f8ae5b9"
  },
  {
    "url": "guide/index.html",
    "revision": "da1e996f99393482279731147e61e44e"
  },
  {
    "url": "guide/licence.html",
    "revision": "fbc98e8899d51063396bdd533077315b"
  },
  {
    "url": "guide/README-zh_CN.html",
    "revision": "7c93db23fc51fd2aa1eb1cb7f7278f62"
  },
  {
    "url": "img/logo.png",
    "revision": "67ac3d2f27e0652d22c58cfdaceacd96"
  },
  {
    "url": "index.html",
    "revision": "f13017dbce1cf1c4cc63844b10556cc3"
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
