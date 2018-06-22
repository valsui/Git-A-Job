!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var r=n(6),i=n(26),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===o.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";(function(e){var r=n(0),i=n(23),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n(5):void 0!==e&&(a=n(5)),a),transformRequest:[function(t,e){return i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(o)}),t.exports=c}).call(this,n(24))},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},function(t,e,n){"use strict";var r=n(0),i=n(22),o=n(20),s=n(19),a=n(18),c=n(4),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(17);t.exports=function(t){return new Promise(function(e,h){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var f=new XMLHttpRequest,p="onreadystatechange",y=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||a(t.url)||(f=new window.XDomainRequest,p="onload",y=!0,f.onprogress=function(){},f.ontimeout=function(){}),t.auth){var m=t.auth.username||"",v=t.auth.password||"";d.Authorization="Basic "+u(m+":"+v)}if(f.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,f[p]=function(){if(f&&(4===f.readyState||y)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:n,config:t,request:f};i(e,h,r),f=null}},f.onerror=function(){h(c("Network Error",t,null,f)),f=null},f.ontimeout=function(){h(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var x=n(16),g=(t.withCredentials||a(t.url))&&t.xsrfCookieName?x.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in f&&r.forEach(d,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:f.setRequestHeader(e,t)}),t.withCredentials&&(f.withCredentials=!0),t.responseType)try{f.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){f&&(f.abort(),h(t),f=null)}),void 0===l&&(l=null),f.send(l)})}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){t.exports=n(27)},function(t,e,n){"use strict";n.r(e);const r=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),i=t=>t[Math.floor(Math.random()*t.length)],o=(t,e,n,r)=>{const i=n-t,o=r-e;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))},s=(t,e)=>{const n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)},a=(t,e)=>{const n=t.radius+e.radius;return o(t.x,t.y,e.x,e.y)<n},c=(t,e)=>{const n=s(e,t),r=o(t.x,t.y,e.x,e.y);return{x:t.x*Math.cos(n)/r,y:t.y*Math.sin(n)/r}};var u=class{constructor(t,e,n,r,i,o,s){this.x=t,this.y=e,this.orig_x=t,this.orig_y=e,this.center_x=o.x,this.center_y=o.y,this.radius=n,this.color=r,this.radians=2*Math.random()*Math.PI,this.gravity=i,this.velocity={x:10*Math.random()-5,y:10*Math.random()-5},this.distanceFromCenter=s,this.lastMouse={x:t,y:e},this.mouse={x:innerWidth/2,y:innerHeight/2},this.explodingParticle={explode_x:this.x,explode_y:this.y}}draw(t,e){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath()}explodeParticle(t,e){t.beginPath(),t.strokeStyle=this.color,t.lineWidth=this.radius,t.moveTo(e.x,e.y),this.explodingParticle.explode_x=e.x*this.velocity.x,this.explodingParticle.explode_y=e.y*this.velocity.y,t.lineTo(this.explodingParticle.explode_x,this.explodingParticle.explode_y),t.stroke(),t.closePath()}update(t){this.radians+=this.gravity;const e={x:this.x,y:this.y};this.x=this.center_x+Math.cos(this.radians)*this.distanceFromCenter,this.y=this.center_y+Math.sin(this.radians)*this.distanceFromCenter,this.draw(t,e)}};class h{constructor(t,e,n,r){this.x=t,this.y=e,this.direction=r,this.color=n}draw(t){let e=t.createRadialGradient(this.x,this.y,30,this.x,this.y,3);e.addColorStop(0,this.color),e.addColorStop(1,"white"),t.fillStyle=e,t.beginPath(),t.arc(this.x,this.y,h.RADIUS,0,2*Math.PI,!0),t.fill(),t.closePath()}update(t){this.x+=h.SPEED*this.direction.x,this.y+=h.SPEED*this.direction.y,this.draw(t)}}h.RADIUS=30,h.SPEED=3;var l=h;const d=["#FF9933","#33FF99","#FF3399","#3399FF","#B266FF","#FFFF00"];var f=class{constructor(t,e){this.base_x=t.width/2,this.base_y=t.height,this.radius=75,this.angle=3*Math.PI/2,this.x=this.base_x,this.y=this.base_y,this.mousePos={x:this.base_x,y:this.base_y},this.playerPos={x:this.base_x,y:this.base_y},this.game=e,addEventListener("mousemove",t=>{this.mousePos.x=t.clientX,this.mousePos.y=t.clientY,this.angle=s(this.mousePos,this.playerPos),this.x=(this.radius+100)*Math.cos(this.angle)+this.base_x,this.y=(this.radius+100)*Math.sin(this.angle)+this.base_y}),this.spaceToFire()}fireBullet(){const t={x:this.x,y:this.y},e=c(this.playerPos,t),n=new l(this.x,this.y,i(d),e);this.game.add(n)}spaceToFire(){let t=this;window.addEventListener("keypress",e=>{32===e.keyCode&&t.fireBullet()}),window.addEventListener("click",e=>{e.preventDefault(),document.getElementById("main-canvas").addEventListener("click",e=>{e.preventDefault(),t.fireBullet()})})}draw(t){t.save(),t.beginPath(),t.arc(this.base_x,this.base_y,this.radius,0,2*Math.PI,!0),t.stroke(),t.fillStyle="#CCE5FF",t.fill(),t.beginPath(),t.lineWidth="30",t.strokeStyle="#99CCFF",t.moveTo(this.base_x,this.base_y),t.lineTo(this.x,this.y),t.stroke()}update(t){this.draw(t)}};var p=class{constructor(t,e,n,i){this.x=t,this.y=e,this.previous_x=t,this.previous_y=e,this.velocity_x=r(10,30),this.velocity_y=r(10,30),this.canvas=i,this.colors=n,this.particles=[],this.lastParticles=[]}update(t){const e={x:this.x,y:this.y},n=[r(90,110),r(40,60),r(10,30),r(70,90)];for(let t=0;t<100;t++){const t=5*Math.random()+4,o=n[r(0,n.length-1)];this.particles.push(new u(this.x,this.y,t,i(this.colors),.01,e,o))}this.lastParticles=this.particles.slice(0),this.particles.forEach(e=>{e.update(t)}),this.x+5*this.velocity_x>this.canvas.width||this.x+5*this.velocity_x<0?(this.velocity_x=-this.velocity_x,this.x+=this.velocity_x):(this.avoidCanon(),this.x+=this.velocity_x),this.y+5*this.velocity_y>this.canvas.height||this.y+5*this.velocity_y<0?(this.velocity_y=-this.velocity_y,this.y+=this.velocity_y):(this.avoidCanon(),this.y+=this.velocity_y),this.particles=[]}explode(t){this.lastParticles.forEach(e=>{const n={x:e.x,y:e.y};e.explodeParticle(t,n)})}avoidCanon(){const t={x:this.canvas.width/2,y:this.canvas.height,radius:185},e={x:this.x+this.velocity_x,y:this.y+this.velocity_y,radius:110};a(t,e)&&(this.velocity_x=-this.velocity_x,this.velocity_y=-this.velocity_y)}};n(28);var y=class{constructor(){}drawLine(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.strokStyle="black",t.lineWidth=5,t.stroke()}branch(t,e){t.beginPath(),this.drawLine(t,0,0,0,-e),t.translate(0,-e),e>10&&(t.save(),t.rotate(Math.PI/4),this.branch(t,.75*e),t.restore(),t.save(),t.rotate(-Math.PI/4),this.branch(t,.75*e),t.restore())}draw(t){t.translate(t.canvas.width/2,t.canvas.height),this.branch(t,t.canvas.height/4)}};const m=["#2185C5","#7ECEFD","#FFF6E5","#FF7F66"];var v=class{constructor(t,e){this.canvas=t,this.context=e,this.wheel=[],this.bullets=[],this.player=[],this.won=!1,this.addWheels(15)}add(t){t instanceof p?this.wheel.push(t):t instanceof f?this.player.push(t):this.bullets.push(t)}addWheels(t){for(let e=0;e<t;e++){const t={x:r(0,this.canvas.width-185),y:r(0,this.canvas.height-185)};this.add(new p(t.x,t.y,m,this.canvas))}}onBulletCollision(t){let e,n;if(this.wheel.forEach((r,i)=>{const o={x:r.x+r.velocity_x,y:r.y+r.velocity_y,radius:110};this.bullets.forEach((s,c)=>{const u={x:s.x,y:s.y,radius:l.RADIUS};a(o,u)&&(r.explode(t),e=i,n=c)})}),void 0!==e){let t=new Audio;t.src="pop.mp3",t.volume=.4,t.play(),this.wheel.splice(e,1),this.bullets.splice(n,1)}this.callJob()}addPlayer(){const t=new f(this.canvas,this);return this.add(t),t}callJob(){if(0===this.wheel.length){this.won=!0;let t=document.querySelector(".end-modal");this.fillDivWithJobInfo(),setTimeout(()=>{let e=new Audio;e.src="KidsCheering.mp3",e.volume=.7,e.play(),t.style.display="flex"},100)}}fillDivWithJobInfo(){console.log(b);const t=b[r(0,b.length-1)];let e=document.getElementById("job-title"),n=document.getElementById("job-company"),i=document.getElementById("job-location"),o=document.getElementById("job-url");e.innerText=t.title,i.innerText=t.location,n.innerText=t.company,o.href=t.url}draw(t){this.wheel.forEach(e=>e.update(t)),this.player[0].update(t),this.bullets.forEach(e=>e.update(t))}};var x=class{constructor(t,e,n,r){this.context=e,this.game=t,this.canvas=n,this.player=this.game.addPlayer(),this.background=this.backgroundGradient(),this.treeCtx=r}start(){this.animate()}backgroundGradient(){let t;return(t=this.context.createLinearGradient(0,this.canvas.height,500,0)).addColorStop(0,"#CCFFE5"),t.addColorStop(1,"#FFF2E5"),t}animate(){this.context.fillStyle=this.background,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.game.won||setTimeout(()=>{requestAnimationFrame(this.animate.bind(this))},50),this.game.onBulletCollision(this.context),this.game.draw(this.context)}},g=n(7),w=n.n(g);let b;n.d(e,"jobs",function(){return b}),document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("main-canvas"),e=t.getContext("2d");t.width=innerWidth,t.height=innerHeight,addEventListener("resize",()=>{t.width=innerWidth,t.height=innerHeight});let n=document.createElement("canvas"),r=n.getContext("2d");document.getElementById("treediv").appendChild(n),r.canvas.width=500,r.canvas.height=400,document.getElementById("start").addEventListener("click",t=>{t.preventDefault(),document.querySelector(".start-modal").style.display="none",o.start()}),document.getElementById("close-start").addEventListener("click",t=>{t.preventDefault(),document.querySelector(".start-modal").style.display="none"}),document.getElementById("close-end").addEventListener("click",t=>{t.preventDefault(),window.location.reload()}),document.getElementById("instructions").addEventListener("click",t=>{t.preventDefault(),document.querySelector(".start-modal").style.display="flex"}),w.a.get("/jobs").then(t=>{b=t.data}).catch(t=>console.log(t));const i=new v(t,e),o=new x(i,e,t,r);(new y).draw(r)})},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";var r=n(2);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";var r=n(0),i=n(13),o=n(3),s=n(1),a=n(12),c=n(11);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return u(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(u(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,o=String(t),s="",a=0,c=r;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new i;e=e<<8|n}return s}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},function(t,e,n){"use strict";var r=n(0);function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))}))}),o=s.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(1),i=n(0),o=n(15),s=n(14);function a(t){this.defaults=t,this.interceptors={request:new o,response:new o}}a.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),(t=i.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,n){"use strict";var r=n(0),i=n(6),o=n(25),s=n(1);function a(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var c=a(s);c.Axios=o,c.create=function(t){return a(r.merge(s,t))},c.Cancel=n(2),c.CancelToken=n(10),c.isCancel=n(3),c.all=function(t){return Promise.all(t)},c.spread=n(9),t.exports=c,t.exports.default=c},function(t,e){}]);
//# sourceMappingURL=bundle.js.map