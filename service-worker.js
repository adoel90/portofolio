"use strict";var precacheConfig=[["/portofolio/index.html","7520f690bae72ed19327597f9de65f0e"],["/portofolio/static/js/main.242785f6.js","d2e6aa25ca7f6143cd7eb641cb82c9f1"],["/portofolio/static/media/base.915c9095.scss","915c9095192edbc1dc0ae0a4f08ab187"],["/portofolio/static/media/style.1b01edc6.scss","1b01edc637aae2f83df07d5061b6a877"],["/portofolio/static/media/style.34e78ad2.scss","34e78ad2b6d1486e0fbe15e19eaeb6f3"],["/portofolio/static/media/style.45678ab2.scss","45678ab24c778609b7498f685a87e928"],["/portofolio/static/media/style.46572844.scss","465728448bb4a57889e0590bb289ec37"],["/portofolio/static/media/style.52b36e8c.scss","52b36e8c2eda6ffd77b38952d23d8ef7"],["/portofolio/static/media/style.5781349d.scss","5781349d9fea84016b2f28d236eb2e58"],["/portofolio/static/media/style.65e5e21a.scss","65e5e21abadae430dadc576de395c1fb"],["/portofolio/static/media/style.7f570be9.scss","7f570be908fc423fcc8012aaf710531c"],["/portofolio/static/media/style.91e2ca72.scss","91e2ca7225a20e1f0b8fbeed9789bd15"],["/portofolio/static/media/style.aa560e7c.scss","aa560e7c38c5711bc242c448471d786c"],["/portofolio/static/media/style.d6541a57.scss","d6541a5700283ffcdac1ac525b2aef24"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),s=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var s="/portofolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});