if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),d={module:{uri:i},exports:r,require:t};s[i]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-8ImhkUnbZ4sVrJG1fuFCh.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8ImhkUnbZ4sVrJG1fuFCh/_buildManifest.js",revision:"08d90a7679d9aac41df63fd8a75f3dd0"},{url:"/_next/static/8ImhkUnbZ4sVrJG1fuFCh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2.4cfbac8afc479cdf.js",revision:"4cfbac8afc479cdf"},{url:"/_next/static/chunks/120.467ce64250e54a44.js",revision:"467ce64250e54a44"},{url:"/_next/static/chunks/664-1b4479b4462ded63.js",revision:"1b4479b4462ded63"},{url:"/_next/static/chunks/827.a1c50180a82a530d.js",revision:"a1c50180a82a530d"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-8e65c6fcee628a80.js",revision:"8e65c6fcee628a80"},{url:"/_next/static/chunks/pages/_app-a4bedab6530e14b2.js",revision:"a4bedab6530e14b2"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-380bf27ef89925d5.js",revision:"380bf27ef89925d5"},{url:"/_next/static/chunks/pages/class/%5BclassName%5D-76775c67c7bf445f.js",revision:"76775c67c7bf445f"},{url:"/_next/static/chunks/pages/index-d384210fe78486ce.js",revision:"d384210fe78486ce"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2a8926fb6d317e20.js",revision:"2a8926fb6d317e20"},{url:"/_next/static/css/0149843f511c3ea9.css",revision:"0149843f511c3ea9"},{url:"/_next/static/css/a4a9aca718b6e970.css",revision:"a4a9aca718b6e970"},{url:"/_next/static/css/c5d9c1ed545b05ad.css",revision:"c5d9c1ed545b05ad"},{url:"/_next/static/css/c87fd3d336d4f8d2.css",revision:"c87fd3d336d4f8d2"},{url:"/_next/static/css/f7cb9e8faee92a7c.css",revision:"f7cb9e8faee92a7c"},{url:"/_next/static/media/400b60eed27dfb33.p.woff2",revision:"69b28056044be6438ce7e5214c66ba82"},{url:"/_next/static/media/591327bf3b62a611.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/633da1f25676cae8.woff2",revision:"5bc5e06e2c36c36d2afbb4321dfc8697"},{url:"/_next/static/media/87c72f23c47212b9.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_offline",revision:"8ImhkUnbZ4sVrJG1fuFCh"},{url:"/favicon.png",revision:"f9a9e56f7c2a6a4d9a6e1cc7a2b83fac"},{url:"/icon-192x192.png",revision:"3654704b5fd441bd0b45785e2419e902"},{url:"/icon-256x256.png",revision:"a759d4ce60f42b489af19b428d7fe7c6"},{url:"/icon-384x384.png",revision:"7ef12ce0a36a923956685cacb62525a5"},{url:"/icon-512x512.png",revision:"99bf986a130021efd28d474b076ec924"},{url:"/manifest.json",revision:"88d5a47b311d8d3c8f042df6be446e23"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));