(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{35842:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview/checkout",function(){return t(8700)}])},5769:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(85893),i=t(9008),s=t(4298),o=t(89555),a=t(34967),c=t(32519),d=t(65988);function u(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"bar",className:"jsx-d674f3251d8e2de7",children:(0,r.jsx)("div",{className:"jsx-d674f3251d8e2de7"})}),(0,r.jsx)(d.default,{id:"d674f3251d8e2de7",children:'#bar.jsx-d674f3251d8e2de7 {position:fixed;\nz-index:1000000;\ntop:0px;\nleft:50%;\n-webkit-transform:translate(-50%, -50%);\n-moz-transform:translate(-50%, -50%);\n-ms-transform:translate(-50%, -50%);\n-webkit-transform:translate(-50%, -50%);\n-moz-transform:translate(-50%, -50%);\n-ms-transform:translate(-50%, -50%);\ntransform:translate(-50%, -50%);\nwidth:100%;\nheight:15px;\nbackground:#f9b3b3;\noverflow:hidden}\n#bar.jsx-d674f3251d8e2de7 div.jsx-d674f3251d8e2de7::before {content:"";\nposition:absolute;\ntop:0px;\nleft:0px;\nbottom:0px;\nbackground:#f54c4c;\n-webkit-animation:Line1 2100ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;\n-webkit-animation:Line1 1000ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;\nanimation:Line1 1000ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite}\n@keyframes Line1 {0% {left:-35%;\nright:100%}60%, 100% {left:100%;\nright:-90%}}\n#bar.jsx-d674f3251d8e2de7 div.jsx-d674f3251d8e2de7:after {content:"";\nposition:absolute;\ntop:0px;\nleft:0px;\nbackground:#f54c4c;\n-webkit-animation:Line2 2100ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\n-webkit-animation:Line2 1500ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\nanimation:Line2 1500ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\nanimation-delay:20ms}\n@keyframes Line2 {0% {left:-200%;\nright:100%}60%, 100% {left:107%;\nright:-8%}}'})]})}var l=t(18079);function f(n){var e=n.children,t=n.title,d=(0,l.Z)().loading;return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.default,{strategy:"beforeInteractive",id:"truconversionScript",children:"\n        var _tip = _tip || [];\n        (function(d,s,id){\n            var js, tjs = d.getElementsByTagName(s)[0];\n            if(d.getElementById(id)) { return; }\n            js = d.createElement(s); js.id = id;\n            js.async = true;\n            js.src = d.location.protocol + '//app.truconversion.com/ti-js/19189/ae4b0.js';\n            tjs.parentNode.insertBefore(js, tjs);\n        }(document, 'script', 'ti-js'));                       \n      "}),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("script",{src:"https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script",defer:!0}),(0,r.jsx)("script",{src:"https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script",defer:!0})]}),d&&(0,r.jsx)(u,{}),(0,r.jsx)(o.Z,{headerSliderText1:"Free shipping Worldwide",headerSliderText2:"Trusted by Doctors & Medical Professionals",headerSliderText3:"Delivery to your doorstep",icon1:"globe.png",icon2:"checkIcon.png",icon3:"delivery.png",support:"00123-456-789",topbarBgColor:"#373F50",navBgColor:"white",local:!0}),e,(0,r.jsx)("div",{id:"4420c1ed-e3a7-47c2-b6a2-2d7386a819da"}),(0,r.jsx)("div",{id:"01739a85-4698-4d4c-90d5-876048fba847"}),(0,r.jsx)(a.Z,{topSectionBgColor:"#373F50",bottomSectionBgColor:"#2B3445"})]})}},8700:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var r=t(85893),i=t(78798),s=t(5769);function o(){return(0,r.jsx)(s.Z,{title:"Checkout your Order",children:(0,i.Z)()})}},40993:function(){},74865:function(n,e,t){var r,i;void 0===(i="function"===typeof(r=function(){var n={version:"0.2.0"},e=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function t(n,e,t){return n<e?e:n>t?t:n}function r(n){return 100*(-1+n)}function i(n,t,i){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+r(n)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(n)+"%,0)"}:{"margin-left":r(n)+"%"}).transition="all "+t+"ms "+i,s}n.configure=function(n){var t,r;for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&(e[t]=r);return this},n.status=null,n.set=function(r){var a=n.isStarted();r=t(r,e.minimum,1),n.status=1===r?null:r;var c=n.render(!a),d=c.querySelector(e.barSelector),u=e.speed,l=e.easing;return c.offsetWidth,s((function(t){""===e.positionUsing&&(e.positionUsing=n.getPositioningCSS()),o(d,i(r,u,l)),1===r?(o(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){o(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},n.isStarted=function(){return"number"===typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),e.trickleSpeed)};return e.trickle&&t(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var r=n.status;return r?("number"!==typeof e&&(e=(1-r)*t(Math.random()*r,.1,.95)),r=t(r+e,0,.994),n.set(r)):n.start()},n.trickle=function(){return n.inc(Math.random()*e.trickleRate)},function(){var e=0,t=0;n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always((function(){0===--t?(e=0,n.done()):n.set((e-t)/e)})),this):this}}(),n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=e.template;var s,a=i.querySelector(e.barSelector),d=t?"-100":r(n.status||0),u=document.querySelector(e.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+d+"%,0,0)"}),e.showSpinner||(s=i.querySelector(e.spinnerSelector))&&l(s),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(i),i},n.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(e.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&l(n)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var s=function(){var n=[];function e(){var t=n.shift();t&&t(e)}return function(t){n.push(t),1==n.length&&e()}}(),o=function(){var n=["Webkit","O","Moz","ms"],e={};function t(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(n,e){return e.toUpperCase()}))}function r(e){var t=document.body.style;if(e in t)return e;for(var r,i=n.length,s=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((r=n[i]+s)in t)return r;return e}function i(n){return n=t(n),e[n]||(e[n]=r(n))}function s(n,e,t){e=i(e),n.style[e]=t}return function(n,e){var t,r,i=arguments;if(2==i.length)for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&s(n,t,r);else s(n,i[1],i[2])}}();function a(n,e){return("string"==typeof n?n:u(n)).indexOf(" "+e+" ")>=0}function c(n,e){var t=u(n),r=t+e;a(t,e)||(n.className=r.substring(1))}function d(n,e){var t,r=u(n);a(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function l(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return n})?r.call(e,t,e,n):r)||(n.exports=i)}},function(n){n.O(0,[774,133,11,927,519,798,888,179],(function(){return e=35842,n(n.s=e);var e}));var e=n.O();_N_E=e}]);