"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{11497:function(e,a,s){s.d(a,{Z:function(){return P}});var n=s(85893),i=s(56843),t=s(41664),c=s(28080),l=s(65988);function r(e){switch(e){case"category":return"Category";case"options.values.name":return"Size & Color";default:return"Hello"}}var d=(0,s(87955).Z)((function(e){var a=e.items,s=e.refine,i=e.createURL;return console.log("items CustomCurrentRefinements",a),(0,n.jsxs)("ul",{className:"jsx-1629566681a896f5 currentRefinement",children:[a.map((function(e){return(0,n.jsx)("li",{className:"jsx-1629566681a896f5 list",children:e.items?(0,n.jsxs)("div",{className:"jsx-1629566681a896f5",children:[r(e.id),(0,n.jsx)("ul",{className:"jsx-1629566681a896f5",children:e.items.map((function(e){return(0,n.jsxs)("li",{className:"jsx-1629566681a896f5",children:[(0,n.jsx)("a",{href:i(e.value),onClick:function(a){a.preventDefault(),s(e.value)},className:"jsx-1629566681a896f5",children:e.label}),(0,n.jsx)("span",{className:"jsx-1629566681a896f5 mx-1 text-white",children:"x"})]},e.label)}))})]}):(0,n.jsxs)("a",{href:i(e.value),onClick:function(a){a.preventDefault(),s(e.value)},className:"jsx-1629566681a896f5 price",children:[e.label,(0,n.jsx)("span",{className:"jsx-1629566681a896f5 mx-1 text-white",children:"x"})]})},e.label)})),(0,n.jsx)(l.default,{id:"1629566681a896f5",children:"ul.currentRefinement.jsx-1629566681a896f5 ul.jsx-1629566681a896f5 li.jsx-1629566681a896f5, .price.jsx-1629566681a896f5 {margin:0px 10px;\nborder:1px solid white;\npadding:1px 15px;\nborder-radius:50px}\n.list.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin:0px 20px}\n.list.jsx-1629566681a896f5 div.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.list.jsx-1629566681a896f5 a.jsx-1629566681a896f5:hover {color:white}\nul.currentRefinement.jsx-1629566681a896f5 ul.jsx-1629566681a896f5 {list-style:none;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\npadding:0}\nul.currentRefinement.jsx-1629566681a896f5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\npadding:0;\nlist-style:none;\ncolor:white}"})]})})),o=s(67294),m=s(31675),x=s(72037),b=s.n(x);function u(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var s=[],n=!0,i=!1,t=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(s.push(c.value),!a||s.length!==a);n=!0);}catch(r){i=!0,t=r}finally{try{n||null==l.return||l.return()}finally{if(i)throw t}}return s}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=(0,m.Z)((function(e){var a=e.min,s=e.max,i=e.currentRefinement,t=e.canRefine,c=e.refine,l=(0,o.useState)(a),r=l[0],d=l[1],m=(0,o.useState)(s),x=m[0],f=m[1];return console.log("min",a,"max",s),(0,o.useEffect)((function(){t&&(d(i.min),f(i.max))}),[i.min,i.max]),a===s?null:(0,n.jsxs)("div",{className:"widget mb-4 pb-4 border-bottom",children:[(0,n.jsx)("h3",{className:"widget-title",children:"Price"}),(0,n.jsx)(b(),{step:10,range:{min:a,max:s},start:[a,s],className:"cz-range-slider-ui",pips:{mode:"count",values:5},connect:!0,onChange:function(e){var a=u(e,2),s=a[0],n=a[1];i.min===s&&i.max===n||c({min:s,max:n})},onUpdate:function(e,a,s,n,i){console.log("value",s),d(s[0].toFixed(0)),f(s[1].toFixed(0))},tooltips:!0}),(0,n.jsx)("div",{className:"d-flex",children:(0,n.jsxs)("div",{className:"d-flex pb-1",children:[(0,n.jsx)("div",{className:"w-50 pe-2 me-2",children:(0,n.jsxs)("div",{className:"input-group input-group-sm",children:[(0,n.jsx)("span",{className:"input-group-text",children:"$"}),(0,n.jsx)("input",{className:"form-control range-slider-value-min",type:"text",value:r})]})}),(0,n.jsx)("div",{className:"w-50 ps-2",children:(0,n.jsxs)("div",{className:"input-group input-group-sm",children:[(0,n.jsx)("span",{className:"input-group-text",children:"$"}),(0,n.jsx)("input",{className:"form-control range-slider-value-max",type:"text",value:x})]})})]})})]})})),j=s(28568),p=s(75805);var h=(0,p.Z)((function(e){var a=e.items,s=e.isFromSearch,i=e.refine,t=e.searchForItems;return e.createURL,e.title,(0,n.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 widget widget-categories mb-4 pb-4 border-bottom",children:[(0,n.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 widget-title",children:"Categories"}),(0,n.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 input-group input-group-sm mb-2",children:[(0,n.jsx)("input",{type:"text",onChange:function(e){t(e.currentTarget.value)},placeholder:"Search",className:"jsx-a3c24fb33cb0ba56 widget-filter-search form-control rounded-end"}),(0,n.jsx)("i",{className:"jsx-a3c24fb33cb0ba56 ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"})]}),(0,n.jsx)("div",{id:"shop-categories",className:"jsx-a3c24fb33cb0ba56 accordion mt-n1",children:a.map((function(e){return(0,n.jsx)("div",{className:"jsx-a3c24fb33cb0ba56 accordion-item",children:(0,n.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 text-sm",children:(0,n.jsx)("a",{onClick:function(){return function(e){i(e.value)}(e)},className:"jsx-a3c24fb33cb0ba56 cat-link",children:s?(0,n.jsx)(j.Z,{attribute:"label",hit:e}):(0,n.jsxs)(n.Fragment,{children:[e.label,(0,n.jsx)("span",{className:"jsx-a3c24fb33cb0ba56 mx-2 badge bg-danger",children:e.count})]})})})},e.label)}))}),(0,n.jsx)(l.default,{id:"a3c24fb33cb0ba56",children:"a.cat-link.jsx-a3c24fb33cb0ba56 {font-size:0.9375rem;\ncolor:#4b566b;\nfont-weight:normal}\na.jsx-a3c24fb33cb0ba56:hover {color:#fe696a}\na.badge.jsx-a3c24fb33cb0ba56 {font-size:0.75rem;\nfont-weight:normal;\ncolor:white}"})]})}));var g=(0,p.Z)((function(e){var a=e.items,s=e.isFromSearch,i=e.refine,t=e.searchForItems;return e.createURL,e.title,(0,n.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 widget widget-categories mb-4 pb-4 border-bottom",children:[(0,n.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 widget-title",children:"Size & Color"}),(0,n.jsxs)("div",{className:"jsx-a3c24fb33cb0ba56 input-group input-group-sm mb-2",children:[(0,n.jsx)("input",{type:"text",onChange:function(e){t(e.currentTarget.value)},placeholder:"Search",className:"jsx-a3c24fb33cb0ba56 widget-filter-search form-control rounded-end"}),(0,n.jsx)("i",{className:"jsx-a3c24fb33cb0ba56 ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"})]}),(0,n.jsx)("div",{id:"shop-categories",className:"jsx-a3c24fb33cb0ba56 accordion mt-n1",children:a.map((function(e){return(0,n.jsx)("div",{className:"jsx-a3c24fb33cb0ba56 accordion-item",children:(0,n.jsx)("h3",{className:"jsx-a3c24fb33cb0ba56 text-sm",children:(0,n.jsx)("a",{onClick:function(){return function(e){i(e.value)}(e)},className:"jsx-a3c24fb33cb0ba56 cat-link",children:s?(0,n.jsx)(j.Z,{attribute:"label",hit:e}):(0,n.jsxs)(n.Fragment,{children:[e.label,(0,n.jsx)("span",{className:"jsx-a3c24fb33cb0ba56 mx-2 badge bg-danger",children:e.count})]})})})},e.label)}))}),(0,n.jsx)(l.default,{id:"a3c24fb33cb0ba56",children:"a.cat-link.jsx-a3c24fb33cb0ba56 {font-size:0.9375rem;\ncolor:#4b566b;\nfont-weight:normal}\na.jsx-a3c24fb33cb0ba56:hover {color:#fe696a}\na.badge.jsx-a3c24fb33cb0ba56 {font-size:0.75rem;\nfont-weight:normal;\ncolor:white}"})]})}));function v(){return(0,n.jsx)("aside",{className:"col-lg-3",children:(0,n.jsxs)("div",{className:"offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1",id:"shop-sidebar",style:{maxWidth:"22rem"},children:[(0,n.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[(0,n.jsx)("h2",{className:"h5 mb-0",children:"Filters"}),(0,n.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,n.jsxs)("div",{className:"offcanvas-body py-grid-gutter px-lg-grid-gutter",children:[(0,n.jsx)(h,{attribute:"category"}),(0,n.jsx)(g,{attribute:"options.values.name"}),(0,n.jsx)(f,{attribute:"price"})]})]})})}var N=s(59895),y=s(39226),w=s(42496),k=s(37517),C=(0,s(72558).Z)((function(e){var a=e.items,s=e.refine,i=e.createURL;return(0,n.jsxs)(k.Z,{className:"dropdown d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3",children:[(0,n.jsx)(k.Z.Toggle,{className:"btn btn-light dropdown-toggle text-light fs-sm me-2 d-none d-sm-block",id:"sort-by-dropdown",children:"Sort by"}),(0,n.jsx)(k.Z.Menu,{className:"dropdown-menu",children:a.map((function(e){return(0,n.jsx)(k.Z.Item,{href:i(e.value),style:{fontWeight:e.isRefined?"bold":"normal"},className:"dropdown-item",onClick:function(a){a.preventDefault(),s(e.value)},children:e.label},e.value)}))})]})}));function Z(){var e=function(e){a((0,w.Fk)(e))},a=(0,y.T)(),s=(0,y.C)((function(e){return e.shop})).productView,i="grid"===s?"bg-light":"nav-link-light",t="list"===s?"bg-light":"nav-link-light";return(0,n.jsxs)("div",{className:"ShopBannerToolbar d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5",children:[(0,n.jsx)(C,{defaultRefinement:"docsupplies_products",items:[{value:"docsupplies_products",label:"Featured"},{value:"docsupplies_product_price_asc",label:"Price asc."},{value:"docsupplies_product_price_des",label:"Price desc."}]}),(0,n.jsx)(N.Z,{showLast:!0}),(0,n.jsxs)("div",{className:"d-none d-sm-flex pb-3",children:[(0,n.jsx)("span",{className:"btn btn-icon nav-link-style ".concat(i," me-2 cursor-pointer"),onClick:function(){return e("grid")},children:(0,n.jsx)("i",{className:"ci-view-grid"})}),(0,n.jsx)("span",{onClick:function(){return e("list")},className:"btn btn-icon nav-link-style ".concat(t," cursor-pointer"),children:(0,n.jsx)("i",{className:"ci-view-list"})})]})]})}var S=s(68810),R=s(77939),H=s(40546),V=s(17199);function I(e){var a=e.product,s=(0,V.Z)(a),i=s.productViewEvent,c=s.addToCartHandler,r=s.quickViewHandler,d=s.optionHandler;return(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card product-card product-list mb-3 border-bottom justify-content-center",children:[(0,n.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 badge bg-danger badge-shadow",children:"Sale"}),(0,n.jsx)("button",{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Add to wishlist",className:"jsx-14d6f2c8ee3683b8 btn-wishlist btn-sm",children:(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-heart"})}),(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-sm-flex align-items-center",children:[(0,n.jsx)(t.default,{href:"/products/".concat(a.slug),passHref:!0,children:(0,n.jsx)("a",{onClick:i,className:"jsx-14d6f2c8ee3683b8 product-list-thumb",children:(0,n.jsx)("img",{src:a.images[0].file.url,alt:a.name,className:"jsx-14d6f2c8ee3683b8 productImage"})})}),(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card-body py-2",children:[(0,n.jsx)("h3",{className:"jsx-14d6f2c8ee3683b8 product-title fs-base",children:(0,n.jsx)(t.default,{href:"/products/".concat(a.slug),passHref:!0,children:(0,n.jsx)("a",{onClick:i,className:"jsx-14d6f2c8ee3683b8",children:a.name})})}),(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-flex justify-content-between",children:[(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 product-price d-flex align-items-baseline",children:[(0,n.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 text-accent",children:(0,n.jsx)(H.Z,{price:a.price})}),a.origPrice&&(0,n.jsx)("span",{className:"jsx-14d6f2c8ee3683b8 small text-accent mx-2",children:(0,n.jsx)("del",{className:"jsx-14d6f2c8ee3683b8 fs-sm text-muted",children:(0,n.jsx)(H.Z,{price:a.origPrice})})})]}),(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 star-rating",children:[(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 star-rating-icon ci-star"}),(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 star-rating-icon ci-star"})]})]}),(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 card-body card-body-hidden",children:[(0,n.jsx)("form",{onSubmit:c,className:"jsx-14d6f2c8ee3683b8",children:a.options.length>0?a.options.map((function(e){return"Color"===e.name?(0,n.jsx)("div",{className:"jsx-14d6f2c8ee3683b8 pb-2",children:e.values.map((function(a){return(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 form-check form-option form-check-inline mb-2",children:[(0,n.jsx)("input",{type:"radio",value:a.name,onChange:d,name:e.name,id:a.id,required:!0,className:"jsx-14d6f2c8ee3683b8 form-check-input"}),(0,n.jsx)("label",{htmlFor:a.id,className:"jsx-14d6f2c8ee3683b8 form-option-label rounded-circle",children:(0,n.jsx)("span",{style:{backgroundColor:"".concat(a.name.toLowerCase())},className:"jsx-14d6f2c8ee3683b8 form-option-color rounded-circle"})})]},a.id)}))},e.id):"Size"===e.name?(0,n.jsxs)("div",{className:"jsx-14d6f2c8ee3683b8 d-flex mb-2",children:[(0,n.jsxs)("select",{style:{maxWidth:"14rem"},onChange:d,name:"Size",required:!0,className:"jsx-14d6f2c8ee3683b8 form-select form-select-sm me-2",children:[(0,n.jsx)("option",{value:"",className:"jsx-14d6f2c8ee3683b8",children:"Select Size"}),e.values.map((function(e){return(0,n.jsx)("option",{value:e.name,className:"jsx-14d6f2c8ee3683b8",children:e.name},e.id)}))]}),(0,n.jsxs)("button",{type:"submit",className:"jsx-14d6f2c8ee3683b8 btn btn-primary btn-sm",children:[(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-cart fs-sm me-1"}),"Add to Cart"]})]},e.id):null})):(0,n.jsxs)("button",{type:"submit",className:"jsx-14d6f2c8ee3683b8 btn btn-primary btn-sm m-auto d-flex align-items-center",children:[(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-cart fs-sm me-1"}),"Add to Cart"]})}),(0,n.jsx)("div",{className:"jsx-14d6f2c8ee3683b8 text-start",children:(0,n.jsxs)("a",{onClick:function(){return r(a)},"data-bs-toggle":"quickViewModal",className:"jsx-14d6f2c8ee3683b8 nav-link-style fs-ms",children:[(0,n.jsx)("i",{className:"jsx-14d6f2c8ee3683b8 ci-eye align-middle me-1"}),"Quick view"]})})]})]})]}),(0,n.jsx)(l.default,{id:"14d6f2c8ee3683b8",children:".card-body.card-body-hidden.jsx-14d6f2c8ee3683b8 {height:100%}\n.card.product-card.jsx-14d6f2c8ee3683b8 {height:250px}"})]})}var z=(0,S.Z)((function(e){var a=e.hits;return(0,n.jsx)("div",{className:"row mx-n2",children:a.map((function(e,a){return(0,n.jsx)(R.Z,{product:e},a)}))})}));var _=(0,S.Z)((function(e){var a=e.hits;return(0,n.jsx)("div",{className:"row mx-n2",children:a.map((function(e,a){return(0,n.jsx)(I,{product:e},a)}))})}));var F=(0,s(73396).Z)((function(e){var a=e.currentRefinement,s=e.nbPages,i=e.refine,t=e.createURL,c=new Array(s).fill(null),l=!(c.length>1),r=l?"disabled":"";return(0,n.jsxs)("nav",{className:"d-flex justify-content-between pt-2","aria-label":"Page navigation",children:[(0,n.jsx)("ul",{className:"pagination",children:(0,n.jsx)("li",{className:"page-item ".concat(r),children:(0,n.jsxs)("button",{disabled:l,className:"page-link",children:[(0,n.jsx)("i",{className:"ci-arrow-left me-2"}),"Prev"]})})}),(0,n.jsx)("ul",{className:"pagination",children:c.map((function(e,s){var c=s+1,l={fontWeight:a===c?"bold":""};return(0,n.jsx)("li",{className:"page-item active d-none d-sm-block","aria-current":"page",children:(0,n.jsxs)("a",{href:t(c),style:l,className:"page-link",onClick:function(e){e.preventDefault(),i(c)},children:[c,(0,n.jsx)("span",{className:"visually-hidden",children:"(current)"})]})},s)}))}),(0,n.jsx)("ul",{className:"pagination",children:(0,n.jsx)("li",{className:"page-item ".concat(r),children:(0,n.jsxs)("button",{disabled:l,className:"page-link","aria-label":"Next",children:["Next",(0,n.jsx)("i",{className:"ci-arrow-right ms-2"})]})})})]})}));function P(){var e=(0,y.C)((function(e){return e.shop})).productView;return(0,n.jsxs)(i.Z,{indexName:"docsupplies_products",searchClient:c.Z,children:[(0,n.jsx)("div",{className:"page-title-overlap bg-dark pt-4",children:(0,n.jsx)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:(0,n.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:(0,n.jsxs)("nav",{"aria-label":"breadcrumb",children:[(0,n.jsx)(d,{}),(0,n.jsxs)("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(t.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"text-nowrap",children:"Home"})})}),(0,n.jsx)("li",{className:"breadcrumb-item text-nowrap",children:(0,n.jsx)("a",{children:"Shop"})})]})]})})})}),(0,n.jsx)("div",{className:"container pb-5 mb-2 mb-md-4",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(v,{}),(0,n.jsxs)("section",{className:"col-lg-9",children:[(0,n.jsx)(Z,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"row mx-n2 mb-5",children:"grid"===e?(0,n.jsx)(z,{}):(0,n.jsx)(_,{})}),(0,n.jsx)("hr",{className:"mb-5"}),(0,n.jsx)(F,{})]})]})]})})]})}},77939:function(e,a,s){s.d(a,{Z:function(){return d}});var n=s(85893),i=s(65988),t=s(41664),c=s(9008),l=s(40546),r=s(17199);function d(e){var a=e.product,s=e.forCategory,d=(0,r.Z)(a),o=d.productViewEvent,m=d.addToCartHandler,x=d.quickViewHandler,b=d.optionHandler;console.log("product",a);var u=s?"d-flex flex-column":"d-flex";return(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a col-md-4 col-sm-6 mb-4",children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("script",{id:"productLDJSon",type:"application/ld+json",className:"jsx-e9d3b87553ba212a",children:'{\n            "@context":"https://schema.org",\n            "@type":"Product",\n            "name":"'.concat(a.name,'",\n            "description":"').concat(a.description,'",      \n            "image":"').concat(a.images[0].file.url,'",\n            "url":"https://just-medic.vercel.app/products/').concat(a.slug,'",        \n            "aggregateRating": {\n              "@type": "AggregateRating",\n              "ratingValue": "5.0",\n              "reviewCount": "1"\n            },\n            "review": {\n              "@type": "Review",\n              "reviewRating": {\n                "@type": "Rating",\n                "ratingValue":"5",\n                "bestRating":"5"\n                },\n              "author":{\n                "@type":"Person",\n                "name":"Dave Olubisi"\n              }\n            },\n            "brand":{\n              "@type":"Brand",\n              "name":"').concat(a.name,'"\n            },                  \n            "isbn":"').concat(a.id,'",\n            "sku":"').concat(a.id,'",\n            "offers": {\n              "@type": "Offer",\n              "url":"https://just-medic.vercel.app/products/').concat(a.slug,'",        \n              "priceValidUntil": "2021-12-31",\n              "availability": "https://schema.org/InStock",\n              "price":"').concat(a.price,'",\n              "priceCurrency": "USD"\n            }\n          }\n        ')})}),(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a card product-card p-2",children:[(0,n.jsx)("button",{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Add to wishlist",className:"jsx-e9d3b87553ba212a btn-wishlist btn-sm",children:(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a ci-heart"})}),(0,n.jsx)(t.default,{href:"/products/".concat(a.slug),passHref:!0,children:(0,n.jsx)("a",{onClick:o,className:"jsx-e9d3b87553ba212a productLink card-img-top d-block overflow-hidden",children:(0,n.jsx)("img",{src:a.images[0].file.url,alt:a.name,className:"jsx-e9d3b87553ba212a productImage"})})}),(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a card-body py-3",children:[(0,n.jsx)("h3",{className:"jsx-e9d3b87553ba212a product-title fs-sm",children:(0,n.jsx)(t.default,{href:"/products/".concat(a.slug),passHref:!0,children:(0,n.jsx)("a",{onClick:o,className:"jsx-e9d3b87553ba212a",children:a.name})})}),(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a d-flex justify-content-between",children:[(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a product-price d-flex align-items-baseline",children:[(0,n.jsx)("span",{className:"jsx-e9d3b87553ba212a text-accent",children:(0,n.jsx)(l.Z,{price:a.price})}),a.origPrice&&(0,n.jsx)("span",{className:"jsx-e9d3b87553ba212a small text-accent mx-2",children:(0,n.jsx)("del",{className:"jsx-e9d3b87553ba212a",children:(0,n.jsx)(l.Z,{price:a.origPrice})})})]}),(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a star-rating",children:[(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a star-rating-icon ci-star-filled active"}),(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a star-rating-icon ci-star"}),(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a star-rating-icon ci-star"})]})]})]}),(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a card-body card-body-hidden",children:[(0,n.jsx)("form",{onSubmit:m,className:"jsx-e9d3b87553ba212a",children:a.options.length>0?a.options.map((function(e){return"Color"===e.name?(0,n.jsx)("div",{className:"jsx-e9d3b87553ba212a text-center pb-2",children:e.values.map((function(a){return(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a form-check form-option form-check-inline mb-2",children:[(0,n.jsx)("input",{type:"radio",value:a.name,onChange:b,name:e.name,id:a.id,required:!0,className:"jsx-e9d3b87553ba212a form-check-input"}),(0,n.jsx)("label",{htmlFor:a.id,className:"jsx-e9d3b87553ba212a form-option-label rounded-circle",children:(0,n.jsx)("span",{style:{backgroundColor:"".concat(a.name.toLowerCase())},className:"jsx-e9d3b87553ba212a form-option-color rounded-circle"})})]},a.id)}))},e.id):"Size"===e.name?(0,n.jsxs)("div",{className:"jsx-e9d3b87553ba212a "+"mb-2 ".concat(u),children:[(0,n.jsxs)("select",{onChange:b,name:"Size",required:!0,className:"jsx-e9d3b87553ba212a form-select form-select-sm me-2 mb-2",children:[(0,n.jsx)("option",{value:"",className:"jsx-e9d3b87553ba212a",children:"Select Size"}),e.values.map((function(e){return(0,n.jsx)("option",{value:e.name,className:"jsx-e9d3b87553ba212a",children:e.name},e.id)}))]}),(0,n.jsxs)("button",{type:"submit",className:"jsx-e9d3b87553ba212a btn btn-primary btn-sm",children:[(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a ci-cart fs-sm me-1"}),"Add to Cart"]})]},e.id):null})):(0,n.jsxs)("button",{type:"submit",className:"jsx-e9d3b87553ba212a btn btn-primary btn-sm m-auto d-flex align-items-center",children:[(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a ci-cart fs-sm me-1"}),"Add to Cart"]})}),(0,n.jsx)("div",{className:"jsx-e9d3b87553ba212a text-center",children:(0,n.jsxs)("button",{onClick:function(){return x(a)},"data-bs-toggle":"quickViewModal",className:"jsx-e9d3b87553ba212a nav-link-style fs-ms btn btn-link",children:[(0,n.jsx)("i",{className:"jsx-e9d3b87553ba212a ci-eye align-middle me-1"}),"Quick view"]})})]})]}),(0,n.jsx)("hr",{className:"jsx-e9d3b87553ba212a d-sm-none"}),(0,n.jsx)(i.default,{id:"e9d3b87553ba212a",children:".productImage.jsx-e9d3b87553ba212a {height:220px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nmargin:auto}\nimg.productImage.jsx-e9d3b87553ba212a:hover {-webkit-transform:scale(1.03);\n-moz-transform:scale(1.03);\n-ms-transform:scale(1.03);\ntransform:scale(1.03);\n-webkit-transition:-webkit-transform 300ms ease-in 0s;\ntransition:transform 300ms ease-in 0s}\n@media (max-width:768px) {.productLink.jsx-e9d3b87553ba212a img.jsx-e9d3b87553ba212a {margin:auto;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}}"})]})}},17199:function(e,a,s){s.d(a,{Z:function(){return d}});var n=s(39226),i=s(12690),t=s(19789),c=s(81949),l=s(52705),r=s(62302);function d(e){var a=(0,t.Z)(),s=a.addItemToCart,d=a.cart,o=(0,c.Z)().optionHandler,m=(0,l.Z)(),x=m.addProductViewVbout,b=m.addCartItemVbout,u=(0,r.Z)(),f=u.itemViewed,j=u.productAddedToCart,p=(0,n.T)();return{productViewEvent:function(){!function(){var a={id:e.slug,productId:e.id,productName:e.name,price:e.price,productImage:e.images[0].file.url,description:e.description,link:"/products/".concat(e.slug)};x(a)}(),f("product_viewed",e.id,[e.slug])},addToCartHandler:function(a){a.preventDefault(),s(e),function(){var a,s={email:(null===d||void 0===d||null===(a=d.account)||void 0===a?void 0:a.email)||"",id:e.id,cartId:null===d||void 0===d?void 0:d.id,productId:e.id,productName:e.name,price:e.price,quantity:1,productImage:e.images[0].file.url};b(s)}(),j(e.id,[e.slug])},quickViewHandler:function(e){p((0,i.W3)(e))},optionHandler:o}}}}]);