"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{83992:function(e,n,s){s.d(n,{Z:function(){return q}});var a=s(85893),t=s(56843),i=s(34859),c=s(41664),r=s(28080),l=s(65988);function d(e){switch(e){case"product_type":return"Category";case"vendor":return"Vendor";case"price":return"Price";case"rating":return"Rating";default:return""}}var o=(0,s(87955).Z)((function(e){var n=e.items,s=e.refine,t=e.createURL;return(0,a.jsxs)("ul",{className:"jsx-1629566681a896f5 currentRefinement",children:[n.map((function(e){return(0,a.jsx)("li",{className:"jsx-1629566681a896f5 list",children:e.items?(0,a.jsxs)("div",{className:"jsx-1629566681a896f5",children:[d(e.id),(0,a.jsx)("ul",{className:"jsx-1629566681a896f5",children:e.items.map((function(e){return(0,a.jsxs)("li",{className:"jsx-1629566681a896f5",children:[(0,a.jsx)("a",{href:t(e.value),onClick:function(n){n.preventDefault(),s(e.value)},className:"jsx-1629566681a896f5",children:e.label}),(0,a.jsx)("span",{className:"jsx-1629566681a896f5 mx-1 text-white",children:"x"})]},e.label)}))})]}):(0,a.jsxs)("a",{href:t(e.value),onClick:function(n){n.preventDefault(),s(e.value)},className:"jsx-1629566681a896f5 price",children:[e.label,(0,a.jsx)("span",{className:"jsx-1629566681a896f5 mx-1 text-white",children:"x"})]})},e.label)})),(0,a.jsx)(l.default,{id:"1629566681a896f5",children:"ul.currentRefinement.jsx-1629566681a896f5 ul.jsx-1629566681a896f5 li.jsx-1629566681a896f5, .price.jsx-1629566681a896f5 {margin:0px 10px;\nborder:1px solid white;\npadding:1px 15px;\nborder-radius:50px}\n.list.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin:0px 20px}\n.list.jsx-1629566681a896f5 div.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.list.jsx-1629566681a896f5 a.jsx-1629566681a896f5:hover {color:white}\nul.currentRefinement.jsx-1629566681a896f5 ul.jsx-1629566681a896f5 {list-style:none;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\npadding:0}\nul.currentRefinement.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\npadding:0;\nlist-style:none;\ncolor:white}"})]})})),m=s(31675),x=s(67294),u=s(72037),f=s.n(u);function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],a=!0,t=!1,i=void 0;try{for(var c,r=e[Symbol.iterator]();!(a=(c=r.next()).done)&&(s.push(c.value),!n||s.length!==n);a=!0);}catch(l){t=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(t)throw i}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=(0,m.Z)((function(e){var n=e.min,s=e.max,t=e.currentRefinement,i=e.canRefine,c=e.refine,r=(0,x.useState)(n),l=r[0],d=r[1],o=(0,x.useState)(s),m=o[0],u=o[1];return(0,x.useEffect)((function(){i&&(d(t.min),u(t.max))}),[t.min,t.max]),n===s?null:(0,a.jsxs)("div",{className:"widget mb-4 pb-4 border-bottom",children:[(0,a.jsx)("h3",{className:"widget-title",children:"Price"}),(0,a.jsx)(f(),{step:10,range:{min:n,max:s},start:[n,s],className:"cz-range-slider-ui",pips:{mode:"count",values:5},connect:!0,onChange:function(e){var n=b(e,2),s=n[0],a=n[1];t.min===s&&t.max===a||c({min:s,max:a})},onUpdate:function(e,n,s,a,t){d(s[0].toFixed(0)),u(s[1].toFixed(0))},tooltips:!0}),(0,a.jsx)("div",{className:"d-flex",children:(0,a.jsxs)("div",{className:"d-flex pb-1",children:[(0,a.jsx)("div",{className:"w-50 pe-2 me-2",children:(0,a.jsxs)("div",{className:"input-group input-group-sm",children:[(0,a.jsx)("span",{className:"input-group-text",children:"$"}),(0,a.jsx)("input",{className:"form-control range-slider-value-min",type:"text",value:l})]})}),(0,a.jsx)("div",{className:"w-50 ps-2",children:(0,a.jsxs)("div",{className:"input-group input-group-sm",children:[(0,a.jsx)("span",{className:"input-group-text",children:"$"}),(0,a.jsx)("input",{className:"form-control range-slider-value-max",type:"text",value:m})]})})]})})]})})),p=s(28568),h=s(75805);var g=(0,h.Z)((function(e){var n=e.items,s=e.isFromSearch,t=e.refine,i=e.searchForItems;return e.createURL,(0,a.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 widget widget-categories mb-4 pb-4 border-bottom",children:[(0,a.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 widget-title",children:"Vendors"}),(0,a.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 input-group input-group-sm mb-2",children:[(0,a.jsx)("input",{type:"text",onChange:function(e){i(e.currentTarget.value)},placeholder:"Search",className:"jsx-a3c24fb33cb0ba56 widget-filter-search form-control rounded-end"}),(0,a.jsx)("i",{className:"jsx-a3c24fb33cb0ba56 ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"})]}),(0,a.jsx)("div",{id:"shop-categories",className:"jsx-a3c24fb33cb0ba56 accordion mt-n1",children:n.map((function(e){return(0,a.jsx)("div",{className:"jsx-a3c24fb33cb0ba56 accordion-item",children:(0,a.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 text-sm",children:(0,a.jsx)("a",{onClick:function(){return function(e){t(e.value)}(e)},className:"jsx-a3c24fb33cb0ba56 cat-link",children:s?(0,a.jsx)(p.Z,{attribute:"label",hit:e}):(0,a.jsxs)(a.Fragment,{children:[e.label,(0,a.jsx)("span",{className:"jsx-a3c24fb33cb0ba56 mx-2 badge bg-danger",children:e.count})]})})})},e.label)}))}),(0,a.jsx)(l.default,{id:"a3c24fb33cb0ba56",children:"a.cat-link.jsx-a3c24fb33cb0ba56 {font-size:0.9375rem;\ncolor:#4b566b;\nfont-weight:normal}\na.jsx-a3c24fb33cb0ba56:hover {color:#fe696a}\na.badge.jsx-a3c24fb33cb0ba56 {font-size:0.75rem;\nfont-weight:normal;\ncolor:white}"})]})}));var v=(0,h.Z)((function(e){var n=e.items,s=e.isFromSearch,t=e.refine,i=e.searchForItems;return e.createURL,e.title,(0,a.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 widget widget-categories mb-4 pb-4 border-bottom",children:[(0,a.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 widget-title",children:"Categories"}),(0,a.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 input-group input-group-sm mb-2",children:[(0,a.jsx)("input",{type:"text",onChange:function(e){i(e.currentTarget.value)},placeholder:"Search",className:"jsx-a3c24fb33cb0ba56 widget-filter-search form-control rounded-end"}),(0,a.jsx)("i",{className:"jsx-a3c24fb33cb0ba56 ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"})]}),(0,a.jsx)("div",{id:"shop-categories",className:"jsx-a3c24fb33cb0ba56 accordion mt-n1",children:n.map((function(e){return(0,a.jsx)("div",{className:"jsx-a3c24fb33cb0ba56 accordion-item",children:(0,a.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 text-sm",children:(0,a.jsx)("a",{onClick:function(){return function(e){t(e.value)}(e)},className:"jsx-a3c24fb33cb0ba56 cat-link",children:s?(0,a.jsx)(p.Z,{attribute:"label",hit:e}):(0,a.jsxs)(a.Fragment,{children:[e.label,(0,a.jsx)("span",{className:"jsx-a3c24fb33cb0ba56 mx-2 badge bg-danger",children:e.count})]})})})},e.label)}))}),(0,a.jsx)(l.default,{id:"a3c24fb33cb0ba56",children:"a.cat-link.jsx-a3c24fb33cb0ba56 {font-size:0.9375rem;\ncolor:#4b566b;\nfont-weight:normal}\na.jsx-a3c24fb33cb0ba56:hover {color:#fe696a}\na.badge.jsx-a3c24fb33cb0ba56 {font-size:0.75rem;\nfont-weight:normal;\ncolor:white}"})]})})),N=s(44919);var y=(0,h.Z)((function(e){var n=e.items,s=e.refine;return e.createURL,(0,a.jsxs)("div",{className:"widget widget-categories d-flex flex-column",children:[(0,a.jsx)("h3",{className:"widget-title",children:"Ratings"}),n.map((function(e,n){return(0,a.jsxs)("div",{className:"my-1 d-flex align-items-center justify-content-between",children:[(0,a.jsx)("a",{onClick:function(){return function(e){s(e.value)}(e)},className:"btn btn-link m-0 p-0",children:(0,a.jsx)(N.Z,{rate:e.label})}),(0,a.jsx)("span",{className:"mx-2 badge bg-danger",children:e.count})]},n)}))]})}));function w(){return(0,a.jsx)("aside",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1",id:"shop-sidebar",style:{maxWidth:"22rem"},children:[(0,a.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[(0,a.jsx)("h2",{className:"h5 mb-0",children:"Filters"}),(0,a.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"offcanvas-body py-grid-gutter px-lg-grid-gutter",children:[(0,a.jsx)(v,{attribute:"product_type"}),(0,a.jsx)(g,{attribute:"vendor"}),(0,a.jsx)(j,{attribute:"price"}),(0,a.jsx)(y,{attribute:"rating"})]})]})})}var k=s(39226),C=s(42496),Z=s(37517),S=(0,s(72558).Z)((function(e){var n=e.items,s=e.refine,t=e.createURL;return(0,a.jsxs)(Z.Z,{className:"dropdown d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3",children:[(0,a.jsx)(Z.Z.Toggle,{className:"btn btn-light dropdown-toggle text-light fs-sm me-2 d-none d-sm-block",id:"sort-by-dropdown",children:"Sort by"}),(0,a.jsx)(Z.Z.Menu,{className:"dropdown-menu",children:n.map((function(e){return(0,a.jsx)(Z.Z.Item,{href:t(e.value),style:{fontWeight:e.isRefined?"bold":"normal"},className:"dropdown-item",onClick:function(n){n.preventDefault(),s(e.value)},children:e.label},e.value)}))})]})}));function _(){var e=function(e){n((0,C.Fk)(e))},n=(0,k.T)(),s=(0,k.C)((function(e){return e.shop})).productView,t="grid"===s?"bg-light":"nav-link-light",i="list"===s?"bg-light":"nav-link-light";return(0,a.jsxs)("div",{className:"ShopBannerToolbar d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5",children:[(0,a.jsx)(S,{defaultRefinement:"New_Livehealthy_products_index",items:[{value:"New_Livehealthy_products_index",label:"Featured"},{value:"New_Livehealthy_products_index_a-z",label:"Name A-Z"},{value:"New_Livehealthy_products_index_z-a",label:"Name Z-A"}]}),(0,a.jsxs)("div",{className:"d-none d-sm-flex pb-3",children:[(0,a.jsx)("span",{className:"btn btn-icon nav-link-style ".concat(t," me-2 cursor-pointer"),onClick:function(){return e("grid")},children:(0,a.jsx)("i",{className:"ci-view-grid"})}),(0,a.jsx)("span",{onClick:function(){return e("list")},className:"btn btn-icon nav-link-style ".concat(i," cursor-pointer"),children:(0,a.jsx)("i",{className:"ci-view-list"})})]})]})}var L=s(58533),z=s(68810),I=s(10332),R=s(24561);function P(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function V(e){return(0,a.jsx)(R.ZP,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(n){P(e,n,s[n])}))}return e}({speed:2,viewBox:"0 0 250 250",style:{width:"100%"},backgroundColor:"#e3d9d9",foregroundColor:"#ada4a4",title:"loading product...",animate:!0},e,{children:(0,a.jsx)("rect",{x:"0",y:"0%",rx:"5px",ry:"5px",width:"100%",height:"90%"})}))}function A(){var e=new Array(9).fill(0),n=(0,I.Z)("(max-width:768px)"),s=(0,I.Z)("(max-width:500px)")?"col-12":n?"col-2":"col-4";return(0,a.jsx)("div",{className:"row mt-5",children:e.map((function(e,n){return(0,a.jsx)("div",{className:s,children:(0,a.jsx)(V,{})},n)}))})}var F=s(39231),T=(s(28003),s(40546)),H=s(17199);function E(e){var n,s,t=e.product,i=(0,H.Z)(t),r=i.productViewEvent,d=i.addToCartHandler,o=i.quickViewHandler,m=i.optionHandler;return(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card product-card product-list mb-3 border-bottom justify-content-center",children:[(0,a.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 badge bg-danger badge-shadow",children:"Sale"}),(0,a.jsx)("button",{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Add to wishlist",className:"jsx-14d6f2c8ee3683b8 btn-wishlist btn-sm",children:(0,a.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-heart"})}),(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-sm-flex align-items-center",children:[(0,a.jsx)(c.default,{href:"/products/".concat(t.slug),passHref:!0,children:(0,a.jsx)("a",{onClick:r,className:"jsx-14d6f2c8ee3683b8 product-list-thumb",children:(0,a.jsx)(F.Z,{src:null===(n=t.images[0])||void 0===n||null===(s=n.file)||void 0===s?void 0:s.url,alt:(null===t||void 0===t?void 0:t.image_alt_text)?null===t||void 0===t?void 0:t.image_alt_text[0]:t.name,className:"productImage"})})}),(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card-body py-2",children:[(0,a.jsx)("a",{className:"jsx-14d6f2c8ee3683b8 product-meta d-block fs-xs pb-1",children:t.vendor}),(0,a.jsx)("h3",{className:"jsx-14d6f2c8ee3683b8 product-title fs-base",children:(0,a.jsx)(c.default,{href:"/products/".concat(t.slug),passHref:!0,children:(0,a.jsx)("a",{onClick:r,className:"jsx-14d6f2c8ee3683b8",children:t.name})})}),(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-flex justify-content-between",children:[(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 product-price d-flex align-items-baseline",children:[(0,a.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 text-accent",children:(0,a.jsx)(T.Z,{price:t.price})}),t.origPrice&&(0,a.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 small text-accent mx-2",children:(0,a.jsx)("del",{className:"jsx-14d6f2c8ee3683b8 fs-sm text-muted",children:(0,a.jsx)(T.Z,{price:t.origPrice})})})]}),(0,a.jsx)(N.Z,{rate:t.rating})]}),(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card-body card-body-hidden",children:[(0,a.jsx)("form",{onSubmit:d,className:"jsx-14d6f2c8ee3683b8",children:(null===t||void 0===t?void 0:t.options)&&(null===t||void 0===t?void 0:t.options.length)>0?null===t||void 0===t?void 0:t.options.map((function(e){return"Color"===(null===e||void 0===e?void 0:e.name)?(0,a.jsx)("div",{className:"jsx-14d6f2c8ee3683b8 pb-2",children:null===e||void 0===e?void 0:e.values.map((function(n){return(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 form-check form-option form-check-inline mb-2",children:[(0,a.jsx)("input",{type:"radio",value:n.name,onChange:m,name:e.name,id:n.id,required:!0,className:"jsx-14d6f2c8ee3683b8 form-check-input"}),(0,a.jsx)("label",{htmlFor:n.id,className:"jsx-14d6f2c8ee3683b8 form-option-label rounded-circle",children:(0,a.jsx)("span",{style:{backgroundColor:"".concat(n.name.toLowerCase())},className:"jsx-14d6f2c8ee3683b8 form-option-color rounded-circle"})})]},n.id)}))},e.id):"Size"===(null===e||void 0===e?void 0:e.name)?(0,a.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-flex mb-2",children:[(0,a.jsxs)("select",{style:{maxWidth:"14rem"},onChange:m,name:"Size",required:!0,className:"jsx-14d6f2c8ee3683b8 form-select form-select-sm me-2",children:[(0,a.jsx)("option",{value:"",className:"jsx-14d6f2c8ee3683b8",children:"Select Size"}),e.values.map((function(e){return(0,a.jsx)("option",{value:e.name,className:"jsx-14d6f2c8ee3683b8",children:e.name},e.id)}))]}),(0,a.jsxs)("button",{type:"submit",className:"jsx-14d6f2c8ee3683b8 btn btn-primary btn-sm",children:[(0,a.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-cart fs-sm me-1"}),"Add to Cart"]})]},e.id):null})):(0,a.jsxs)("button",{type:"submit",className:"jsx-14d6f2c8ee3683b8 btn btn-primary btn-sm m-auto d-flex align-items-center",children:[(0,a.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-cart fs-sm me-1"}),"Add to Cart"]})}),(0,a.jsx)("div",{className:"jsx-14d6f2c8ee3683b8 text-start",children:(0,a.jsxs)("a",{onClick:function(){return o(t)},"data-bs-toggle":"quickViewModal",className:"jsx-14d6f2c8ee3683b8 nav-link-style fs-ms",children:[(0,a.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-eye align-middle me-1"}),"Quick view"]})})]})]})]}),(0,a.jsx)(l.default,{id:"14d6f2c8ee3683b8",children:".card-body.card-body-hidden.jsx-14d6f2c8ee3683b8 {height:100%}\n.card.product-card.jsx-14d6f2c8ee3683b8 {height:250px}"})]})}var B=s(77939);var D=(0,z.Z)((function(e){var n=e.hits;console.log("hits",n);var s=n.filter((function(e){return 0!==e.images.length})),t=(0,k.C)((function(e){return e.shop})).productView,i=(0,x.useState)(30),c=i[0],r=i[1],l=null===s||void 0===s?void 0:s.slice(0,30),d=(0,x.useState)(l),o=d[0],m=d[1];return console.log("storeProducts",o),(0,a.jsx)(a.Fragment,{children:s.length>0?(0,a.jsx)(L.Z,{dataLength:o.length,next:function(){var e=null===s||void 0===s?void 0:s.slice(c,Number(c+30)),n=null===o||void 0===o?void 0:o.concat(e);m(n),r((function(e){return e+30}))},hasMore:!0,style:{overflow:"none"},className:"row",loader:(0,a.jsx)(A,{}),endMessage:(0,a.jsx)("p",{style:{textAlign:"center"},children:(0,a.jsx)("b",{children:"Yay! You have seen it all"})}),children:null===o||void 0===o?void 0:o.map((function(e,n){return"grid"===t?(0,a.jsx)(B.Z,{product:e},n):(0,a.jsx)(E,{product:e},n)}))}):(0,a.jsx)(A,{})})})),O=s(34155);function q(){return(0,a.jsxs)(t.Z,{indexName:"".concat(O.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME),searchClient:r.Z,children:[(0,a.jsx)(i.Z,{hitsPerPage:1e3,clickAnalytics:!0,distinct:!0,enablePersonalization:!0}),(0,a.jsx)("div",{className:"page-title-overlap bg-dark pt-4",children:(0,a.jsx)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:(0,a.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:(0,a.jsxs)("nav",{"aria-label":"breadcrumb",children:[(0,a.jsx)(o,{}),(0,a.jsxs)("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(c.default,{href:"/",passHref:!0,children:(0,a.jsx)("a",{className:"text-nowrap",children:"Home"})})}),(0,a.jsx)("li",{className:"breadcrumb-item text-nowrap",children:(0,a.jsx)("a",{children:"Shop"})})]})]})})})}),(0,a.jsx)("div",{className:"container pb-5 mb-2 mb-md-4",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)(w,{}),(0,a.jsxs)("section",{className:"col-lg-9",children:[(0,a.jsx)(_,{}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"row mx-n2 mb-5",children:(0,a.jsx)(D,{})}),(0,a.jsx)("hr",{className:"mb-2"})]})]})]})})]})}},77939:function(e,n,s){s.d(n,{Z:function(){return m}});var a=s(85893),t=s(65988),i=s(41664),c=s(9008),r=s(39231),l=(s(28003),s(40546)),d=s(17199),o=s(44919);function m(e){var n,s,m,x,u,f,b=e.product,j=e.forCategory,p=(0,d.Z)(b),h=p.productViewEvent,g=p.addToCartHandler,v=p.quickViewHandler,N=p.optionHandler,y=j?"d-flex flex-column":"d-flex";return(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 col-md-4 col-sm-6 mb-4",children:[(0,a.jsxs)(c.default,{children:[(0,a.jsx)("script",{id:"productLDJSon",type:"application/ld+json",className:"jsx-7878ec64d0b43f13",children:'{\n            "@context":"https://schema.org",\n            "@type":"Product",\n            "name":"'.concat(b.name,'",\n            "description":"').concat(b.description,'",      \n            "image":"').concat(null===(n=b.images[0])||void 0===n||null===(s=n.file)||void 0===s?void 0:s.url,'",\n            "url":"https://just-medic.vercel.app/products/').concat(b.slug,'",        \n            "aggregateRating": {\n              "@type": "AggregateRating",\n              "ratingValue": "5.0",\n              "reviewCount": "1"\n            },\n            "review": {\n              "@type": "Review",\n              "reviewRating": {\n                "@type": "Rating",\n                "ratingValue":"5",\n                "bestRating":"5"\n                },\n              "author":{\n                "@type":"Person",\n                "name":"Dave Olubisi"\n              }\n            },\n            "brand":{\n              "@type":"Brand",\n              "name":"').concat(b.name,'"\n            },                  \n            "isbn":"').concat(b.id,'",\n            "sku":"').concat(b.id,'",\n            "offers": {\n              "@type": "Offer",\n              "url":"https://just-medic.vercel.app/products/').concat(b.slug,'",        \n              "priceValidUntil": "2021-12-31",\n              "availability": "https://schema.org/InStock",\n              "price":"').concat(b.price,'",\n              "priceCurrency": "USD"\n            }\n          }\n        ')}),(0,a.jsx)("meta",{title:b.meta_title,className:"jsx-7878ec64d0b43f13"}),(0,a.jsx)("meta",{name:"description",content:b.description,className:"jsx-7878ec64d0b43f13"})]}),(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 card product-card p-2",children:[(0,a.jsx)("button",{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Add to wishlist",className:"jsx-7878ec64d0b43f13 btn-wishlist btn-sm",children:(0,a.jsx)("i",{className:"jsx-7878ec64d0b43f13 ci-heart"})}),(0,a.jsx)(i.default,{href:"/products/".concat(b.slug),passHref:!0,children:(0,a.jsx)("a",{onClick:h,className:"jsx-7878ec64d0b43f13 productLink card-img-top d-block overflow-hidden",children:(0,a.jsx)("div",{className:"jsx-7878ec64d0b43f13 productImage",children:(0,a.jsx)(r.Z,{src:null===(m=b.images[0])||void 0===m||null===(x=m.file)||void 0===x?void 0:x.url,alt:null===b||void 0===b?void 0:b.image_alt_text[0],className:"productImage"})})})}),(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 card-body py-3",children:[(0,a.jsx)("a",{className:"jsx-7878ec64d0b43f13 product-meta d-block fs-xs pb-1",children:b.vendor}),(0,a.jsx)("h3",{className:"jsx-7878ec64d0b43f13 product-title fs-sm",children:(0,a.jsx)(i.default,{href:"/products/".concat(b.slug),passHref:!0,children:(0,a.jsx)("a",{onClick:h,className:"jsx-7878ec64d0b43f13",children:b.name})})}),(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 d-flex justify-content-between",children:[(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 product-price d-flex align-items-baseline",children:[(0,a.jsx)("span",{className:"jsx-7878ec64d0b43f13 text-accent",children:(0,a.jsx)(l.Z,{price:b.price})}),b.origPrice&&(0,a.jsx)("span",{className:"jsx-7878ec64d0b43f13 small text-accent mx-2",children:(0,a.jsx)("del",{className:"jsx-7878ec64d0b43f13",children:(0,a.jsx)(l.Z,{price:b.origPrice})})})]}),(0,a.jsx)(o.Z,{rate:b.rating})]})]}),(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 card-body card-body-hidden",children:[(0,a.jsx)("form",{onSubmit:g,className:"jsx-7878ec64d0b43f13",children:(null===b||void 0===b||null===(u=b.options)||void 0===u?void 0:u.length)>0?null===b||void 0===b||null===(f=b.options)||void 0===f?void 0:f.map((function(e){return"Color"===e.name?(0,a.jsx)("div",{className:"jsx-7878ec64d0b43f13 text-center pb-2",children:e.values.map((function(n){return(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 form-check form-option form-check-inline mb-2",children:[(0,a.jsx)("input",{type:"radio",value:n.name,onChange:N,name:e.name,id:n.id,required:!0,className:"jsx-7878ec64d0b43f13 form-check-input"}),(0,a.jsx)("label",{htmlFor:n.id,className:"jsx-7878ec64d0b43f13 form-option-label rounded-circle",children:(0,a.jsx)("span",{style:{backgroundColor:"".concat(n.name.toLowerCase())},className:"jsx-7878ec64d0b43f13 form-option-color rounded-circle"})})]},n.id)}))},e.id):"Size"===e.name?(0,a.jsxs)("div",{className:"jsx-7878ec64d0b43f13 "+"mb-2 ".concat(y),children:[(0,a.jsxs)("select",{onChange:N,name:"Size",required:!0,className:"jsx-7878ec64d0b43f13 form-select form-select-sm me-2 mb-2",children:[(0,a.jsx)("option",{value:"",className:"jsx-7878ec64d0b43f13",children:"Select Size"}),e.values.map((function(e){return(0,a.jsx)("option",{value:e.name,className:"jsx-7878ec64d0b43f13",children:e.name},e.id)}))]}),(0,a.jsxs)("button",{type:"submit",className:"jsx-7878ec64d0b43f13 btn btn-primary btn-sm",children:[(0,a.jsx)("i",{className:"jsx-7878ec64d0b43f13 ci-cart fs-sm me-1"}),"Add to Cart"]})]},e.id):null})):(0,a.jsxs)("button",{type:"submit",className:"jsx-7878ec64d0b43f13 btn btn-primary btn-sm m-auto d-flex align-items-center",children:[(0,a.jsx)("i",{className:"jsx-7878ec64d0b43f13 ci-cart fs-sm me-1"}),"Add to Cart"]})}),(0,a.jsx)("div",{className:"jsx-7878ec64d0b43f13 text-center",children:(0,a.jsxs)("button",{onClick:function(){return v(b)},"data-bs-toggle":"quickViewModal",className:"jsx-7878ec64d0b43f13 nav-link-style fs-ms btn btn-link",children:[(0,a.jsx)("i",{className:"jsx-7878ec64d0b43f13 ci-eye align-middle me-1"}),"Quick view"]})})]})]}),(0,a.jsx)("hr",{className:"jsx-7878ec64d0b43f13 d-sm-none"}),(0,a.jsx)(t.default,{id:"7878ec64d0b43f13",children:".productImage.jsx-7878ec64d0b43f13 {height:220px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nmargin:auto}\n.productImage.jsx-7878ec64d0b43f13 img.productImage.jsx-7878ec64d0b43f13:hover {-webkit-transform:scale(1.03)!important;\n-moz-transform:scale(1.03)!important;\n-ms-transform:scale(1.03)!important;\ntransform:scale(1.03)!important;\n-webkit-transition:-webkit-transform 300ms ease-in 0s!important;\ntransition:transform 300ms ease-in 0s!important}\n@media (max-width:768px) {.productLink.jsx-7878ec64d0b43f13 img.jsx-7878ec64d0b43f13 {margin:auto;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}}"})]})}},17199:function(e,n,s){s.d(n,{Z:function(){return d}});var a=s(39226),t=s(12690),i=s(19789),c=s(81949),r=s(52705),l=s(62302);function d(e){var n=(0,i.Z)(),s=n.addItemToCart,d=n.cart,o=(0,c.Z)().optionHandler,m=(0,r.Z)(),x=m.addProductViewVbout,u=m.addCartItemVbout,f=(0,l.Z)(),b=f.itemViewed,j=f.productAddedToCart,p=(0,a.T)();return{productViewEvent:function(){!function(){var n={id:e.slug,productId:e.id,productName:e.name,price:e.price,productImage:e.images[0].file.url,description:e.description,link:"/products/".concat(e.slug)};x(n)}(),b("product_viewed",e.id,[e.slug])},addToCartHandler:function(n){n.preventDefault(),s(e),function(){var n,s={email:(null===d||void 0===d||null===(n=d.account)||void 0===n?void 0:n.email)||"",id:e.id,cartId:null===d||void 0===d?void 0:d.id,productId:e.id,productName:e.name,price:e.price,quantity:1,productImage:e.images[0].file.url};u(s)}(),j(e.id,[e.slug])},quickViewHandler:function(e){p((0,t.W3)(e))},optionHandler:o}}},5769:function(e,n,s){s.d(n,{Z:function(){return x}});var a=s(85893),t=s(9008),i=s(4298),c=s(80606),r=s(34967),l=s(32519),d=s(65988);function o(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"bar",className:"jsx-d674f3251d8e2de7",children:(0,a.jsx)("div",{className:"jsx-d674f3251d8e2de7"})}),(0,a.jsx)(d.default,{id:"d674f3251d8e2de7",children:'#bar.jsx-d674f3251d8e2de7 {position:fixed;\nz-index:1000000;\ntop:0px;\nleft:50%;\n-webkit-transform:translate(-50%, -50%);\n-moz-transform:translate(-50%, -50%);\n-ms-transform:translate(-50%, -50%);\n-webkit-transform:translate(-50%, -50%);\n-moz-transform:translate(-50%, -50%);\n-ms-transform:translate(-50%, -50%);\ntransform:translate(-50%, -50%);\nwidth:100%;\nheight:15px;\nbackground:#f9b3b3;\noverflow:hidden}\n#bar.jsx-d674f3251d8e2de7 div.jsx-d674f3251d8e2de7::before {content:"";\nposition:absolute;\ntop:0px;\nleft:0px;\nbottom:0px;\nbackground:#f54c4c;\n-webkit-animation:Line1 2100ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;\n-webkit-animation:Line1 1000ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;\nanimation:Line1 1000ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite}\n@keyframes Line1 {0% {left:-35%;\nright:100%}60%, 100% {left:100%;\nright:-90%}}\n#bar.jsx-d674f3251d8e2de7 div.jsx-d674f3251d8e2de7:after {content:"";\nposition:absolute;\ntop:0px;\nleft:0px;\nbackground:#f54c4c;\n-webkit-animation:Line2 2100ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\n-webkit-animation:Line2 1500ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\nanimation:Line2 1500ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;\nanimation-delay:20ms}\n@keyframes Line2 {0% {left:-200%;\nright:100%}60%, 100% {left:107%;\nright:-8%}}'})]})}var m=s(18079);function x(e){var n=e.children,s=e.title,d=(0,m.Z)().loading;return(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.default,{strategy:"beforeInteractive",id:"truconversionScript",children:"\n        var _tip = _tip || [];\n        (function(d,s,id){\n            var js, tjs = d.getElementsByTagName(s)[0];\n            if(d.getElementById(id)) { return; }\n            js = d.createElement(s); js.id = id;\n            js.async = true;\n            js.src = d.location.protocol + '//app.truconversion.com/ti-js/19189/ae4b0.js';\n            tjs.parentNode.insertBefore(js, tjs);\n        }(document, 'script', 'ti-js'));                       \n      "}),(0,a.jsxs)(t.default,{children:[(0,a.jsxs)("title",{children:["Live Healthy | ",s]}),(0,a.jsx)("script",{src:"https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script",defer:!0}),(0,a.jsx)("script",{src:"https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script",defer:!0})]}),d&&(0,a.jsx)(o,{}),(0,a.jsx)(c.Z,{headerSliderText1:"Free shipping Worldwide",headerSliderText2:"Trusted by Doctors & Medical Professionals",headerSliderText3:"Delivery to your doorstep",icon1:"globe.png",icon2:"checkIcon.png",icon3:"delivery.png",support:"00123-456-789",topbarBgColor:"#373F50",navBgColor:"white",local:!0}),n,(0,a.jsx)("div",{id:"4420c1ed-e3a7-47c2-b6a2-2d7386a819da"}),(0,a.jsx)("div",{id:"01739a85-4698-4d4c-90d5-876048fba847"}),(0,a.jsx)(r.Z,{topSectionBgColor:"#373F50",bottomSectionBgColor:"#2B3445"})]})}}}]);