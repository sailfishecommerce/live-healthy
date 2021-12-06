"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{84357:function(e,s,t){t.r(s),t.d(s,{default:function(){return y}});var n=t(85893),r=t(41664),i=t(67294),l=t(45697),a=t.n(l),o=t(95426);t(77633);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function h(e,s){return!s||"object"!==g(s)&&"function"!==typeof s?c(e):s}function b(e,s){return(b=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var g=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=d(e);if(s){var r=d(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)}}var j=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&b(e,s)}(l,e);var s,t,r,i=p(l);function l(e){var s;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,l),(s=i.call(this,e)).state={defaultSettings:{}},s.slider=null,s.build=s.build.bind(c(s)),s.onClick=s.onClick.bind(c(s)),s.loaded=1,s}return s=l,(t=[{key:"onClick",value:function(e){e.preventDefault(),e.stopPropagation();var s=this.slider.getInfo();this.props.onClick&&this.props.onClick(s)}},{key:"componentDidMount",value:function(){this.build(this.props.settings)}},{key:"build",value:function(e){var s=void 0===e?{}:e;this.slider&&this.slider.destroy();var t=function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){f(e,s,t[s])}))}return e}({},this.state.defaultSettings,s,{container:this.ref});this.slider=(0,o.W)(t)}},{key:"componentWillUnmount",value:function(){this.slider&&this.slider.destroy()}},{key:"render",value:function(){var e=this,s=this.props,t=(s.settings,s.innerDivClassName),r=s.outerDivClassName,i=s.children;return m(s,["settings","innerDivClassName","outerDivClassName","children"]),(0,n.jsx)("div",{className:r,children:(0,n.jsx)("div",{className:"relative home-slider ".concat(t),ref:function(s){return e.ref=s},onClick:this.onClick,children:i})})}}])&&u(s.prototype,t),r&&u(s,r),l}(i.Component);j.propTypes={settings:a().object,outerDivClassName:a().string,innerDivClassName:a().string};var x=j;function y(){return(0,n.jsxs)("div",{className:"pt-5 position-relative",children:[(0,n.jsxs)("div",{className:"tns-controls",id:"blog-grid-controls",children:[(0,n.jsx)("button",{type:"button",children:(0,n.jsx)("i",{className:"ci-arrow-left"})}),(0,n.jsx)("button",{type:"button",children:(0,n.jsx)("i",{className:"ci-arrow-right"})})]}),(0,n.jsxs)(x,{onClick:function(){},settings:{items:2,nav:!1,autoHeight:!0,responsive:{0:{items:1},700:{items:2,gutter:20},991:{items:2,gutter:30}},controlsText:['<i class="ci-arrow-left"></i>','<i class="ci-arrow-right"></i>'],controlsContainer:"#blog-grid-controls"},children:[(0,n.jsxs)("article",{children:[(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-thumb mb-3",children:[(0,n.jsxs)("span",{className:"blog-entry-meta-label fs-sm",children:[(0,n.jsx)("i",{className:"ci-time"}),"Sep 10"]}),(0,n.jsx)("img",{src:"/img/blog/featured/01.jpg",alt:"Featured post"})]})}),(0,n.jsxs)("div",{className:"d-flex justify-content-between mb-2 pt-1",children:[(0,n.jsx)("h2",{className:"h5 blog-entry-title mb-0",children:(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsx)("a",{children:"Healthy Food - New Way of Living"})})}),(0,n.jsx)(r.default,{href:"/blog-single-sidebar#comments",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1",children:[(0,n.jsx)("i",{className:"ci-message"}),"13"]})})]}),(0,n.jsxs)("div",{className:"d-flex align-items-center fs-sm",children:[(0,n.jsxs)("a",{className:"blog-entry-meta-link",href:"#",children:[(0,n.jsx)("div",{className:"blog-entry-author-ava",children:(0,n.jsx)("img",{src:"/img/blog/meta/04.jpg",alt:"Olivia Reyes"})}),"Olivia Reyes"]}),(0,n.jsx)("span",{className:"blog-entry-meta-divider"}),(0,n.jsxs)("div",{className:"fs-sm text-muted",children:["in"," ",(0,n.jsx)("a",{href:"#",className:"blog-entry-meta-link",children:"Lifestyle"}),","," ",(0,n.jsx)("a",{href:"#",className:"blog-entry-meta-link",children:"Nutrition"})]})]})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-thumb mb-3",children:[(0,n.jsxs)("span",{className:"blog-entry-meta-label fs-sm",children:[(0,n.jsx)("i",{className:"ci-time"}),"Aug 27"]}),(0,n.jsx)("img",{src:"/img/blog/featured/02.jpg",alt:"Featured post"})]})}),(0,n.jsxs)("div",{className:"d-flex justify-content-between mb-2 pt-1",children:[(0,n.jsx)("h2",{className:"h5 blog-entry-title mb-0",children:(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsx)("a",{children:"Online Payment Security Tips for Shoppers"})})}),(0,n.jsx)(r.default,{href:"/blog-single-sidebar#comments",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1",children:[(0,n.jsx)("i",{className:"ci-message"}),"9"]})})]}),(0,n.jsxs)("div",{className:"d-flex align-items-center fs-sm",children:[(0,n.jsxs)("a",{className:"blog-entry-meta-link",href:"#",children:[(0,n.jsx)("div",{className:"blog-entry-author-ava",children:(0,n.jsx)("img",{src:"/img/blog/meta/05.jpg",alt:"Rafael Marquez"})}),"Rafael Marquez"]}),(0,n.jsx)("span",{className:"blog-entry-meta-divider"}),(0,n.jsxs)("div",{className:"fs-sm text-muted",children:["in"," ",(0,n.jsx)("a",{href:"#",className:"blog-entry-meta-link",children:"Online shpopping"})]})]})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-thumb mb-3",children:[(0,n.jsxs)("span",{className:"blog-entry-meta-label fs-sm",children:[(0,n.jsx)("i",{className:"ci-time"}),"Aug 16"]}),(0,n.jsx)("img",{src:"/img/blog/featured/03.jpg",alt:"Featured post"})]})}),(0,n.jsxs)("div",{className:"d-flex justify-content-between mb-2 pt-1",children:[(0,n.jsx)("h2",{className:"h5 blog-entry-title mb-0",children:(0,n.jsx)(r.default,{href:"/blog-single-sidebar",passHref:!0,children:(0,n.jsx)("a",{children:"We Launched New Store in San Francisco!"})})}),(0,n.jsx)(r.default,{href:"/blog-single-sidebar#comments",passHref:!0,children:(0,n.jsxs)("a",{className:"blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1",children:[(0,n.jsx)("i",{className:"ci-message"}),"23"]})})]}),(0,n.jsxs)("div",{className:"d-flex align-items-center fs-sm",children:[(0,n.jsxs)("a",{className:"blog-entry-meta-link",href:"#",children:[(0,n.jsx)("div",{className:"blog-entry-author-ava",children:(0,n.jsx)("img",{src:"/img/blog/meta/03.jpg",alt:"Paul Woodred"})}),"Paul Woodred"]}),(0,n.jsx)("span",{className:"blog-entry-meta-divider"}),(0,n.jsxs)("div",{className:"fs-sm text-muted",children:["in"," ",(0,n.jsx)("a",{href:"#",className:"blog-entry-meta-link",children:"Bandicoot news"})]})]})]})]})]})}}}]);