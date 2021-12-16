(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{5864:function(e,t,n){"use strict";n.d(t,{pk:function(){return a},iS:function(){return i},ek:function(){return r},yl:function(){return o}});var s=n(74231),a=s.Ry({firstName:s.Z_().required("First name is required"),lastName:s.Z_().required("Last name is required"),email:s.Z_().email("Enter a valid email address").required("E-mail address is required"),password:s.Z_().min(6).required("Password is required"),confirmPassword:s.Z_().required("Confirm password is required").oneOf([s.iH("password"),null],"Passwords must match")}),i=s.Ry({email:s.Z_().email("Enter a valid email address").required("E-mail address is required"),password:s.Z_().required("Password is required")}),r=s.Ry({newPassword:s.Z_().min(6,"Password is required").required("Password is required"),confirmNewPassword:s.Z_().required("Confirm password is required").oneOf([s.iH("newPassword"),null],"Passwords must match")}),o=s.Ry({email:s.Z_().email("Enter a valid email address").required("E-mail address is required")})},32519:function(e,t,n){"use strict";n.d(t,{Z:function(){return ee}});var s=n(85893),a=n(65988),i=n(40782),r=n(9008),o=n(67294),c=n(74865),l=n.n(c),d=n(11163),b=n(45697),f=n.n(b);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?u(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return j(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(o,e);var t,n,i,r=w(o);function o(){var e;return x(this,o),m(u(e=r.apply(this,arguments)),"timer",null),m(u(e),"routeChangeStart",(function(){l().set(e.props.startPosition),l().start()})),m(u(e),"routeChangeEnd",(function(){clearTimeout(e.timer),e.timer=setTimeout((function(){l().done(!0)}),e.props.stopDelayMs)})),e}return t=o,(n=[{key:"render",value:function(){var e=this.props,t=e.color,n=e.height;return(0,s.jsx)("div",{className:a.default.dynamic([["bb34f849f390e837",[t,n,t,t,t,t]]]),children:(0,s.jsx)(a.default,{id:"bb34f849f390e837",dynamic:[t,n,t,t,t,t],children:"#nprogress {pointer-events:none}\n#nprogress .bar {background:".concat(t,";\nposition:fixed;\nz-index:9999;\ntop:0;\nleft:0;\nwidth:100%;\nheight:").concat(n,"px}\n#nprogress .peg {display:block;\nposition:absolute;\nright:0px;\nwidth:100px;\nheight:100%;\nbox-shadow:0 0 10px ").concat(t,", 0 0 5px ").concat(t,";\nopacity:1;\n-webkit-transform:rotate(3deg) translate(0px, -4px);\n-ms-transform:rotate(3deg) translate(0px, -4px);\n-webkit-transform:rotate(3deg) translate(0px, -4px);\n-moz-transform:rotate(3deg) translate(0px, -4px);\n-ms-transform:rotate(3deg) translate(0px, -4px);\ntransform:rotate(3deg) translate(0px, -4px)}\n#nprogress .spinner {display:block;\nposition:fixed;\nz-index:1031;\ntop:15px;\nright:15px}\n#nprogress .spinner-icon {width:18px;\nheight:18px;\nbox-sizing:border-box;\nborder:solid 2px transparent;\nborder-top-color:").concat(t,";\nborder-left-color:").concat(t,";\nborder-radius:50%;\n-webkit-animation:nprogresss-spinner 400ms linear infinite;\n-webkit-animation:nprogress-spinner 400ms linear infinite;\nanimation:nprogress-spinner 400ms linear infinite}\n.nprogress-custom-parent {overflow:invisible;\nposition:relative}\n.nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar {position:absolute}\n@keyframes nprogress-spinner {0% {-webkit-transform:rotate(0deg)}100% {-webkit-transform:rotate(360deg)}}\n@keyframes nprogress-spinner {0% {transform:rotate(0deg)}100% {transform:rotate(360deg)}}")})})}},{key:"componentDidMount",value:function(){var e=this.props.options;e&&l().configure(e),d.default.events.on("routeChangeStart",this.routeChangeStart),d.default.events.on("routeChangeComplete",this.routeChangeEnd),d.default.events.on("routeChangeError",this.routeChangeEnd)}}])&&p(t.prototype,n),i&&p(t,i),o}(o.Component);m(y,"defaultProps",{color:"red",startPosition:.3,stopDelayMs:200,height:3}),y.propTypes={color:f().string,startPosition:f().number,stopDelayMs:f().number,options:f().object};var N=y,k=n(41664),C=n(40546),_=n(39226),z=n(12690),S=n(19789),q=n(51581),P=n(87968),Z=n(27713),T=n.n(Z);function E(e){var t,n,i=e.item,r=(0,S.Z)().updateQuantity,o=(null===(t=i.product.attributes)||void 0===t?void 0:t.box)?10:1,c=(null===(n=i.product.attributes)||void 0===n?void 0:n.box)?10:1;return(0,s.jsxs)("div",{className:"jsx-8c1bfe662b5c7aad",children:[(0,s.jsxs)("div",{className:"jsx-8c1bfe662b5c7aad d-flex align-items-center",children:[(0,s.jsx)("label",{style:{fontSize:"13px"},htmlFor:"itemQuantity",className:"jsx-8c1bfe662b5c7aad fw-normal me-1 text-muted",children:"Quantity:"}),(0,s.jsx)("input",{onClick:function(e){console.log("e.target.value",e.target.value),r(i,e.target.value)},type:"number",id:"itemQuantity",min:c,defaultValue:i.quantity,step:o,max:90,className:"jsx-8c1bfe662b5c7aad form-control my-2 py-1 text-center text-dark"})]}),(0,s.jsx)(a.default,{id:"8c1bfe662b5c7aad",children:".cartControl.jsx-8c1bfe662b5c7aad button.jsx-8c1bfe662b5c7aad {height:30px;\nwidth:30px;\ncolor:black;\npadding:0px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.cartControl.jsx-8c1bfe662b5c7aad button.jsx-8c1bfe662b5c7aad:hover {border:1px solid black!important}\n.cartControl.jsx-8c1bfe662b5c7aad input.jsx-8c1bfe662b5c7aad:hover {background-color:#f5f5f5}\n#itemQuantity.jsx-8c1bfe662b5c7aad {width:80px}"})]})}function O(e){var t=e.cartItem,n=(0,q.Z)(),a=n.loading,i=n.couponInputHandler,r=n.onSubmitCoupon;return(0,s.jsxs)("form",{onSubmit:r,className:"".concat(T().cartDiscount," flex-column d-flex justify-content-end"),children:[(0,s.jsx)("p",{className:"mb-0 mt-2 align-right",children:"Applied discounts"}),(0,s.jsx)("h6",{children:null===t||void 0===t?void 0:t.shipping}),(0,s.jsxs)("div",{className:"justify-content-end d-flex my-2",children:[(0,s.jsx)("input",{className:"mx-2 border px-4",onChange:i,placeholder:"Enter discount code",required:!0}),(0,s.jsx)(P.z,{className:"btn",loading:a,disable:a,text:"ADD",type:"submit"})]})]})}function I(){return(0,s.jsxs)("div",{className:"jsx-31d1c38e0bbe0048",children:[(0,s.jsxs)("div",{className:"jsx-31d1c38e0bbe0048 note",children:[(0,s.jsx)("h5",{className:"jsx-31d1c38e0bbe0048",children:"Pro Club is our all-access community of doctors,medical professionals and administrators who receive first access to our new products, industry insights and enhanced data profiles."}),(0,s.jsx)("button",{type:"button",className:"jsx-31d1c38e0bbe0048 learnMore btn btn-outline-primary d-block m-auto",children:"LEARN MORE"})]}),(0,s.jsx)(a.default,{id:"31d1c38e0bbe0048",children:".note.jsx-31d1c38e0bbe0048 {padding:10px;\nborder-radius:5px;\nbackground-color:#eef2fb;\nmargin:20px}\n.note.jsx-31d1c38e0bbe0048 h5.jsx-31d1c38e0bbe0048 {text-align:center;\nfont-size:16px;\ncolor:black;\nline-height:24px}\n@media (max-width:768px) {.note.jsx-31d1c38e0bbe0048 h5.jsx-31d1c38e0bbe0048 {font-size:13px;\nline-height:18px}\n.learnMore.jsx-31d1c38e0bbe0048 {font-size:13px;\npadding:5px 10px}}"})]})}var H=n(52705);function B(e){var t,n,i,r=e.item,o=(0,S.Z)().removeFromCart,c=(0,H.Z)().removeVboutCartItem,l=(0,_.C)((function(e){return e.cart})).cart;return console.log("itemProduct",r),(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef slide-cart border-bottom p-2 position-relative row",children:[(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef widget-cart-item py-1",children:[(0,s.jsx)("button",{type:"button",onClick:function(){o(r),c({cartId:l.id,productId:r.id})},"aria-label":"Remove",className:"jsx-a8139b54ebbe69ef btn-close text-danger ms-3",children:(0,s.jsx)("span",{"aria-hidden":"true",className:"jsx-a8139b54ebbe69ef",children:"\xd7"})}),(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef d-flex align-items-center",children:[(0,s.jsx)(k.default,{href:"/products/".concat(r.product.slug),passHref:!0,children:(0,s.jsx)("a",{className:"jsx-a8139b54ebbe69ef flex-shrink-0",children:(0,s.jsx)("img",{src:null===(t=r.product)||void 0===t?void 0:t.images[0].file.url.split(";")[0],alt:null===(n=r.product)||void 0===n?void 0:n.name,width:"64",className:"jsx-a8139b54ebbe69ef"})})}),(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef ps-2",children:[(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef name-group d-flex flex-column",children:[(0,s.jsx)("h5",{className:"jsx-a8139b54ebbe69ef widget-product-title",children:(0,s.jsx)(k.default,{href:"/products/".concat(r.product.slug),passHref:!0,children:(0,s.jsx)("a",{className:"jsx-a8139b54ebbe69ef",children:r.product.name})})}),(null===(i=r.product.attributes)||void 0===i?void 0:i.box)&&(0,s.jsxs)("p",{className:"jsx-a8139b54ebbe69ef",children:[r.quantity," carton = ",10*Number(r.quantity)," boxes"]})]}),(0,s.jsx)("div",{className:"jsx-a8139b54ebbe69ef d-flex align-items-center my-2",children:(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef widget-product-meta d-flex align-items-center",children:[(0,s.jsx)("span",{className:"jsx-a8139b54ebbe69ef text-accent me-2",children:(0,s.jsx)(C.Z,{price:r.price})}),(0,s.jsxs)("span",{className:"jsx-a8139b54ebbe69ef text-muted",children:["x ",r.quantity]}),(0,s.jsx)("span",{className:"jsx-a8139b54ebbe69ef mx-1",children:"= "}),(0,s.jsx)("span",{className:"jsx-a8139b54ebbe69ef text-accent me-2",children:(0,s.jsx)(C.Z,{price:r.priceTotal})})]})})]})]})]}),(0,s.jsxs)("div",{className:"jsx-a8139b54ebbe69ef cartItem d-flex align-items-center justify-content-between",children:[(0,s.jsx)(E,{item:r}),r.options&&r.options.map((function(e,t){return(0,s.jsxs)("p",{className:"jsx-a8139b54ebbe69ef small text-muted mx-2 mb-0 border px-2 rounded",children:[e.name," | ",e.value," "]},"item.name-".concat(t))}))]}),(0,s.jsx)(a.default,{id:"a8139b54ebbe69ef",children:".slidecart.jsx-a8139b54ebbe69ef {z-index:200;\ndisplay:d-flex;\nposition:fixed;\nright:0;\nwidth:100%;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\nheight:100%}\n.cart.jsx-a8139b54ebbe69ef {width:25%;\nright:0;\nposition:fixed;\nheight:100vh;\noverflow-y:scroll}\n.closeButton.jsx-a8139b54ebbe69ef {position:absolute;\ntop:10px;\nright:10px;\npadding:0px;\nz-index:100;\nheight:30px;\nwidth:30px;\ncolor:black;\nborder-radius:50%}\n.closeButton.jsx-a8139b54ebbe69ef:hover {background-color:black;\ncolor:white}\n.closeButton.jsx-a8139b54ebbe69ef:hover i.jsx-a8139b54ebbe69ef {color:white}\n.closeButton.jsx-a8139b54ebbe69ef i.jsx-a8139b54ebbe69ef {font-size:20px}\n.checkoutbtn.jsx-a8139b54ebbe69ef {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\ncolor:white;\nwidth:100%;\nfont-weight:bold;\nbackground-color:#42d697;\nfont-size:16px;\nmargin:auto}\n.checkoutbtn.jsx-a8139b54ebbe69ef:hover {background-color:white;\ncolor:green;\nborder:1px solid #42d697}\n.cartItem.jsx-a8139b54ebbe69ef p.jsx-a8139b54ebbe69ef:hover {color:white!important;\nbackground-color:#fb696a}\n@media (max-width:768px) {.cartItem.jsx-a8139b54ebbe69ef input.jsx-a8139b54ebbe69ef {font-size:12px}\n.name-group.jsx-a8139b54ebbe69ef p.jsx-a8139b54ebbe69ef {margin-bottom:0px;\nfont-size:13px}\n.cartItem.jsx-a8139b54ebbe69ef label.jsx-a8139b54ebbe69ef {font-size:12px!important}\n.cartItem.jsx-a8139b54ebbe69ef p.small.jsx-a8139b54ebbe69ef {font-size:10px}}"})]})}function R(e){var t,n,i=(0,_.T)(),r=(0,_.C)((function(e){return e.cart})).cart;console.log("cart",r);var o=0===(null===r||void 0===r||null===(t=r.items)||void 0===t?void 0:t.length)?"justify-center":"";return(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0",children:[(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0 slidecart d-flex align-items-center h-full position-fixed top-0 w-full justify-content-between right",children:[(0,s.jsx)("div",{style:{backgroundColor:"#190f0fc4"},onClick:e.toggle,className:"jsx-3cdb15e7b66c24d0 overlay w-3/4 h-screen cursor-pointer"}),(0,s.jsx)("div",{"data-aos":"fade-left","data-aos-duration":"500","data-aos-easing":"ease-in-back",className:"jsx-3cdb15e7b66c24d0 "+"cart bg-white fixed d-flex flex-column right-0 ".concat(o," px-2"),children:(null===r||void 0===r||null===(n=r.items)||void 0===n?void 0:n.length)>0?(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0",children:[(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0 cart-body",children:[(0,s.jsx)(I,{}),(0,s.jsx)("div",{className:"jsx-3cdb15e7b66c24d0 sidebar-cart-product-wrapper custom-scrollbar",children:null===r||void 0===r?void 0:r.items.map((function(e,t){return(0,s.jsx)(B,{item:e},"item.id-".concat(t))}))})]}),(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0 cart-footer bg-white px-4",children:[(0,s.jsx)(O,{cartItem:0}),(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0 mt-6",children:[(0,s.jsxs)("h5",{className:"jsx-3cdb15e7b66c24d0 mt-5 mb-2 subtotal d-flex align-items-center",children:["Subtotal:"," ",(0,s.jsx)("span",{className:"jsx-3cdb15e7b66c24d0 mx-2",children:r?(0,s.jsx)(C.Z,{price:r.subTotal}):"0.00"})]}),(0,s.jsx)("hr",{className:"jsx-3cdb15e7b66c24d0"})]}),(0,s.jsx)(k.default,{href:"/preview/single-checkout",passHref:!0,children:(0,s.jsxs)("button",{onClick:function(){i((0,z._V)()),e.toggle()},type:"button",className:"jsx-3cdb15e7b66c24d0 btn btn-outline-primary d-block w-100",children:[(0,s.jsx)("img",{alt:"checkout icon",src:"/icons/checkoutIcon.svg",className:"jsx-3cdb15e7b66c24d0"})," ",(0,s.jsx)("span",{className:"jsx-3cdb15e7b66c24d0 mx-2",children:"PROCEED TO CHECKOUT"})]})})]})]}):(0,s.jsxs)("div",{className:"jsx-3cdb15e7b66c24d0 emptyCart text-center d-flex flex-column justify-content-center align-items-center",children:[(0,s.jsx)("i",{className:"jsx-3cdb15e7b66c24d0 fas fa-shopping-cart my-2 fa-3x rounded-full bg-gray-200 text-red-400 d-flex text-white"}),(0,s.jsx)("p",{className:"jsx-3cdb15e7b66c24d0 font-bold text-2xl",children:"Your cart is empty "})]})})]}),(0,s.jsx)(a.default,{id:"3cdb15e7b66c24d0",children:".sidebar-cart-product-wrapper.custom-scrollbar.jsx-3cdb15e7b66c24d0 {height:400px;\noverflow-y:auto;\noverflow-x:hidden}\n.emptyCart.jsx-3cdb15e7b66c24d0 {height:180px;\nwidth:180px;\nmargin:auto;\nbackground-color:#fb696a;\nborder-radius:50%;\ncolor:white;\nfont-size:15px;\nfont-weight:bold}\n.slidecart.jsx-3cdb15e7b66c24d0 {z-index:200;\ndisplay:d-flex;\nposition:fixed;\nright:0;\nwidth:100%;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\nheight:100%}\n.overlay.jsx-3cdb15e7b66c24d0 {width:75%;\nbackground-color:black;\nheight:100%;\nposition:fixed;\nleft:0;\ntop:0}\n.cart.jsx-3cdb15e7b66c24d0 {width:25%;\nright:0;\nposition:fixed;\nheight:100vh;\noverflow-y:auto}\n.subtotal.jsx-3cdb15e7b66c24d0 {font-size:20px}\n@media (max-width:768px) {.overlay.jsx-3cdb15e7b66c24d0 {width:25%}\n.cart.jsx-3cdb15e7b66c24d0 {width:75%}\n.slidecart.jsx-3cdb15e7b66c24d0 {z-index:2000}\n.sidebar-cart-product-wrapper.custom-scrollbar.jsx-3cdb15e7b66c24d0 {height:300px}\n.subtotal.jsx-3cdb15e7b66c24d0 {font-size:16px}}"})]})}var M=n(83061),V=n(96628),D=n(55867),U=n(56486),A=n(8749);function L(e){var t=e.product,n=(0,_.T)(),i=t.productToView;return console.log("quickViewMM",t),(0,s.jsxs)(V.Z,{show:t.active,onHide:function(e){n((0,z.W3)(e))},size:"xl",role:"dialog",children:[(0,s.jsx)(V.Z.Header,{closeButton:!0,children:(0,s.jsx)(V.Z.Title,{children:(0,s.jsx)("h4",{className:"modal-title product-title",children:(0,s.jsx)(k.default,{href:"/products/".concat(i.slug),passHref:!0,children:(0,s.jsxs)("a",{"data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Go to product page",children:[i.name,(0,s.jsx)("i",{className:"ci-arrow-right fs-lg ms-2"})]})})})})}),(0,s.jsxs)(V.Z.Body,{children:[(0,s.jsxs)("div",{className:"jsx-3a4f295f95bb4f10 row",children:[(0,s.jsx)(A.Z,{product:i,quickView:!0}),(0,s.jsx)("div",{className:"jsx-3a4f295f95bb4f10 col-lg-5 pt-4 pt-lg-0",children:(0,s.jsxs)("div",{className:"jsx-3a4f295f95bb4f10 product-details ms-auto pb-3",children:[(0,s.jsxs)("div",{className:"jsx-3a4f295f95bb4f10 d-flex justify-content-between align-items-center mb-2",children:[(0,s.jsx)(D.Z,{product:i}),(0,s.jsx)("button",{type:"button","data-bs-toggle":"tooltip",title:"Add to wishlist",className:"jsx-3a4f295f95bb4f10 btn-wishlist",children:(0,s.jsx)("i",{className:"jsx-3a4f295f95bb4f10 ci-heart"})})]}),(0,s.jsx)(U.Z,{product:i}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description},className:"jsx-3a4f295f95bb4f10 description"})]})})]}),(0,s.jsx)(a.default,{id:"3a4f295f95bb4f10",children:".description.jsx-3a4f295f95bb4f10 {height:400px;\noverflow:auto}\n.description.jsx-3a4f295f95bb4f10::-webkit-scrollbar {width:1em}\n.description.jsx-3a4f295f95bb4f10::-webkit-scrollbar-track {box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.3)}\n.description.jsx-3a4f295f95bb4f10::-webkit-scrollbar-thumb {background-color:darkgrey;\noutline:1px solid slategrey;\nborder:0px!important}"})]})]})}var F=n(82580),Q=n(5864),J=JSON.parse('{"z":[{"name":"email","inputText":"email","label":"E-mail","id":"si-email","type":"input"},{"name":"password","inputText":"password","label":"Password","id":"si-password","type":"input"}],"y":[[{"name":"firstName","inputText":"text","label":"First name","id":"su-firstName","type":"input"},{"name":"lastName","inputText":"text","label":"Last name","id":"su-lastName","type":"input"}],{"name":"email","inputText":"email","label":"E-mail","id":"su-email","type":"input"},{"name":"password","inputText":"password","id":"su-password","label":"Password","type":"input"},{"name":"confirmPassword","inputText":"password","id":"su-confirm-password","label":"Confirm password","type":"input"}]}'),K=n(50950),W=n(18867);function G(){var e=(0,W.aC)().signUp;return(0,s.jsx)(F.J9,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:Q.pk,onSubmit:function(t,n){return e(t,n)},children:function(e){return(0,s.jsxs)("form",{className:"needs-validation tab-pane fade",autoComplete:"off",onSubmit:e.handleSubmit,noValidate:!0,id:"signup-tab",children:[J.y.map((function(t,n){return(null===t||void 0===t?void 0:t.length)?(0,s.jsx)("div",{className:"row",children:t.map((function(t,n){return(0,s.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,K.Bu)(t,e)},n)}))},n):(0,s.jsx)("div",{className:"row",children:(0,K.Bu)(t,e)},n)})),(0,s.jsx)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"submit",disabled:e.isSubmitting,children:"Sign up"})]})}})}function Y(){var e=function(){n((0,z.H3)())},t=(0,W.aC)().signIn,n=(0,_.T)();return(0,s.jsx)(F.J9,{initialValues:{email:"",password:""},validationSchema:Q.iS,onSubmit:function(e,n){return t(e,n)},children:function(t){return(0,s.jsxs)("form",{className:"needs-validation tab-pane fade show active",autoComplete:"off",noValidate:!0,onSubmit:t.handleSubmit,id:"signin-tab",children:[J.z.map((function(e,n){return(0,s.jsx)("div",{className:"row",children:(0,K.Bu)(e,t)},n)})),(0,s.jsx)("div",{className:"mb-3 d-flex flex-wrap justify-content-between",children:(0,s.jsx)(k.default,{href:"/account-password-recovery",passHref:!0,children:(0,s.jsx)("a",{onClick:e,className:"fs-sm",children:"Forgot password?"})})}),(0,s.jsx)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"submit",children:"Sign in"})]})}})}function X(e){var t=e.show,n=e.onHide;return(0,s.jsxs)(V.Z,{show:t,onHide:n,role:"dialog",children:[(0,s.jsx)(V.Z.Header,{className:"bg-secondary",closeButton:!0,children:(0,s.jsxs)("ul",{className:"nav nav-tabs card-header-tabs",role:"tablist",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)("a",{className:"nav-link fw-medium active",href:"#signin-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"true",children:[(0,s.jsx)("i",{className:"ci-unlocked me-2 mt-n1"}),"Sign in"]})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)("a",{className:"nav-link fw-medium",href:"#signup-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"false",children:[(0,s.jsx)("i",{className:"ci-user me-2 mt-n1"}),"Sign up"]})})]})}),(0,s.jsxs)(V.Z.Body,{className:"tab-content py-4",children:[(0,s.jsx)(Y,{}),(0,s.jsx)(G,{})]})]})}var $=n(58538);n(40993);function ee(e){var t,n=e.children,o=(0,S.Z)(),c=o.toggleCart,l=o.slideCart,d=(0,M.Z)().scroll,b=(0,_.C)((function(e){return e.UI})),f=(0,_.T)(),u=(0,_.C)((function(e){return e.checkout})).loading,x=d>450;return(0,s.jsxs)("div",{className:"jsx-19d5cfcf939bbbdf",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("script",{id:"vboutTrackingCodeScript",className:"jsx-19d5cfcf939bbbdf",children:"\n            var _vbset = _vbset || [];\n            _vbset.push(['_account', 'VBT-88360-6048']);\n            _vbset.push(['_domain', 'https://just-medic.vercel.app']);\n\n            (function() {\n              var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; \n              vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);\n            })();\n        "}),(0,s.jsx)("meta",{name:"robots",content:"noindex",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"google-site-verification",content:"jzOTMxF7oUbLPiv-axyDSRh7yVdltNu-gP2gKfcBIpc",className:"jsx-19d5cfcf939bbbdf"})]}),(0,s.jsx)("div",{"data-aos":"fade-up",id:"head",className:"jsx-19d5cfcf939bbbdf"}),l&&(0,s.jsx)(R,{toggle:c}),(null===b||void 0===b||null===(t=b.quickViewModal)||void 0===t?void 0:t.active)&&(0,s.jsx)(L,{product:b.quickViewModal}),(null===b||void 0===b?void 0:b.displayAuthModal)&&(0,s.jsx)(X,{onHide:function(){f((0,z.H3)())},show:b.displayAuthModal}),u&&(0,s.jsx)($.t2,{}),(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"utf-8",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"description",content:"Live Healthy - Shop for medical gloves,natural concepts hand-sanitizer,WeSail COVID-19 Rapid Antigen,li,drugs,free-shipping,covid-19-test-kit, test-kit,masks,respirators,nitrile glove,sterile glove,latex glove,vinyl glove,masks and respirator laboratory supplies,syringes and needles, industrial gloves, oxygen concentrators",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"keywords",content:"medical gloves,vinyl gloves, latex gloves,intco medical, natural concepts,antigen test, sterile gloves,hand-sanitizer,e-commerce,docsupplies,drugs,free-shipping,covid-19-test-kit, test-kit,masks,respirators,nitrile glove,sterile gloves,latex gloves,vinyl gloves,masks and respirator laboratory supplies,syringes and needles, industrial gloves, oxygen concentrators",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"author",content:"Bandicoot Studio",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("link",{rel:"manifest",href:"/site.webmanifest",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("link",{rel:"mask-icon",color:"#fe6a6a",href:"/safari-pinned-tab.svg",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff",className:"jsx-19d5cfcf939bbbdf"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff",className:"jsx-19d5cfcf939bbbdf"})]}),(0,s.jsx)(N,{color:"red",options:{showSpinner:!1}}),(0,s.jsx)(i.Ix,{}),(0,s.jsx)("div",{className:"jsx-19d5cfcf939bbbdf content position-relative",children:n}),x&&(0,s.jsx)("a",{href:"#head",style:{zIndex:1e3},"data-aos":"fade-right-up",className:"jsx-19d5cfcf939bbbdf goUp position-fixed d-flex",children:(0,s.jsx)("i",{className:"jsx-19d5cfcf939bbbdf fas fa-arrow-circle-up"})}),(0,s.jsx)(a.default,{id:"19d5cfcf939bbbdf",children:".goUp.jsx-19d5cfcf939bbbdf {font-size:25px;\nright:20px;\nbottom:20px}\n.goUp.jsx-19d5cfcf939bbbdf:hover {color:red;\nbackground-color:white}\n.goUp.jsx-19d5cfcf939bbbdf:hover i.jsx-19d5cfcf939bbbdf {color:red}\n.goUp.jsx-19d5cfcf939bbbdf i.jsx-19d5cfcf939bbbdf {position:fixed;\nright:20px;\nz-index:200;\nbottom:20px}"})]})}},27713:function(e){e.exports={uiElement:"ui_uiElement__8_Aj2",cartDiscount:"ui_cartDiscount__9p2L4",btn:"ui_btn__wjI_e"}}}]);