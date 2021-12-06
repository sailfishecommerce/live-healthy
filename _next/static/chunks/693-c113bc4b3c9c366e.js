"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{90083:function(e,s,a){a.d(s,{Z:function(){return m},q:function(){return n}});var i=a(85893),l=a(82580),t=a(74231),c=t.Ry({firstName:t.Z_().required("First name is required"),lastName:t.Z_().required("Last name is required"),email:t.Z_().email("Enter a valid email address").required("E-mail address is required"),companyName:t.Z_().required("Company name is required"),phoneNumber:t.Z_().required("Phone number is required"),message:t.Z_().required("message is required")}),r=JSON.parse('[[{"name":"firstName","placeholder":"First Name","type":"input","inputText":"text"},{"name":"lastName","placeholder":"Last Name","type":"input","inputText":"text"}],[{"name":"companyName","placeholder":"company Name","type":"input","inputText":"text"}],[{"name":"email","placeholder":"Email Address","type":"input","inputText":"email"},{"name":"phoneNumber","placeholder":"Phone Number","type":"input","inputText":"text"}],[{"name":"message","placeholder":"A clear and concise summary of your requirement","type":"textarea","inputText":"text"}]]'),d=a(50950);function n(e,s,a){return e.map((function(e,l){return(0,i.jsx)("div",{className:s,children:(0,d.Bu)(e,a,"mb-0")},l)}))}function m(e){var s=e.setStage;return(0,i.jsx)(l.J9,{initialValues:{firstName:"",lastName:"",email:"",companyName:"",phoneNumber:"",message:""},validationSchema:c,onSubmit:function(e,a){a.setSubmitting;console.log("values",e),alert(JSON.stringify(e)),s(1)},children:function(e){return(0,i.jsxs)("form",{onSubmit:e.handleSubmit,children:[r.map((function(s,a){return(0,i.jsx)("div",{className:"row",children:2===s.length?n(s,"col-sm-6",e):1===s.length&&n(s,"col-sm-12",e)},a)})),(0,i.jsx)("button",{type:"submit",className:"btn d-flex m-auto btn-accent mt-2",children:"Submit"})]})}})}},37983:function(e,s,a){a.d(s,{Z:function(){return t}});var i=a(85893),l=a(41664);function t(e){var s=e.product;return(0,i.jsx)("div",{className:"page-title-overlap bg-dark pt-4 w-100",children:(0,i.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[(0,i.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:(0,i.jsx)("nav",{"aria-label":"breadcrumb",children:(0,i.jsxs)("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(l.default,{href:"/",passHref:!0,children:(0,i.jsxs)("a",{className:"text-nowrap",children:[(0,i.jsx)("i",{className:"ci-home"}),"Home"]})})}),(0,i.jsx)("li",{className:"breadcrumb-item text-nowrap",children:(0,i.jsx)(l.default,{href:"/shop",passHref:!0,children:(0,i.jsx)("a",{children:"Shop"})})}),(0,i.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:s.name})]})})}),(0,i.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start",children:(0,i.jsx)("h1",{className:"h3 text-light mb-0",children:s.name})})]})})}},57378:function(e,s,a){a.d(s,{Z:function(){return l}});var i=a(85893);function l(e){var s=e.product;return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row align-items-center py-md-3",children:[(0,i.jsx)("div",{className:"col-lg-5 col-md-6 offset-lg-1 order-md-2",children:(0,i.jsx)("img",{className:"d-block rounded-3",src:"/img/shop/single/prod-img.jpg",alt:"Image"})}),(0,i.jsxs)("div",{className:"col-lg-4 col-md-6 offset-lg-1 py-4 order-md-1",children:[(0,i.jsx)("h2",{className:"h3 mb-4 pb-2",children:"Product description"}),(0,i.jsx)("h6",{className:"fs-base mb-3",children:s.name}),(0,i.jsx)("p",{className:"fs-sm text-muted pb-2",dangerouslySetInnerHTML:{__html:s.description}}),(0,i.jsx)("h6",{className:"fs-base mb-3",children:"Washing instructions"}),(0,i.jsxs)("ul",{className:"nav nav-tabs mb-3",role:"tablist",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link active",href:"#wash","data-bs-toggle":"tab",role:"tab",children:(0,i.jsx)("i",{className:"ci-wash fs-xl"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#bleach","data-bs-toggle":"tab",role:"tab",children:(0,i.jsx)("i",{className:"ci-bleach fs-xl"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#hand-wash","data-bs-toggle":"tab",role:"tab",children:(0,i.jsx)("i",{className:"ci-hand-wash fs-xl"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#ironing","data-bs-toggle":"tab",role:"tab",children:(0,i.jsx)("i",{className:"ci-ironing fs-xl"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#dry-clean","data-bs-toggle":"tab",role:"tab",children:(0,i.jsx)("i",{className:"ci-dry-clean fs-xl"})})})]}),(0,i.jsxs)("div",{className:"tab-content text-muted fs-sm",children:[(0,i.jsx)("div",{className:"tab-pane fade show active",id:"wash",role:"tabpanel",children:"30\xb0 mild machine washing"}),(0,i.jsx)("div",{className:"tab-pane fade",id:"bleach",role:"tabpanel",children:"Do not use any bleach"}),(0,i.jsx)("div",{className:"tab-pane fade",id:"hand-wash",role:"tabpanel",children:"Hand wash normal (30\xb0)"}),(0,i.jsx)("div",{className:"tab-pane fade",id:"ironing",role:"tabpanel",children:"Low temperature ironing"}),(0,i.jsx)("div",{className:"tab-pane fade",id:"dry-clean",role:"tabpanel",children:"Do not dry clean"})]})]})]}),(0,i.jsxs)("div",{className:"row align-items-center py-4 py-lg-5",children:[(0,i.jsx)("div",{className:"col-lg-5 col-md-6 offset-lg-1",children:(0,i.jsx)("img",{className:"d-block rounded-3",src:"/img/shop/single/prod-map.png",alt:"Map"})}),(0,i.jsxs)("div",{className:"col-lg-4 col-md-6 offset-lg-1 py-4",children:[(0,i.jsx)("h2",{className:"h3 mb-4 pb-2",children:"Where is it made?"}),(0,i.jsx)("h6",{className:"fs-base mb-3",children:"Apparel Manufacturer, Ltd."}),(0,i.jsx)("p",{className:"fs-sm text-muted pb-2",children:"\u200bSam Tower, 6 Road No 32, Dhaka 1875, Bangladesh"}),(0,i.jsxs)("div",{className:"d-flex mb-2",children:[(0,i.jsxs)("div",{className:"me-4 pe-2 text-center",children:[(0,i.jsx)("h4",{className:"h2 text-accent mb-1",children:"3258"}),(0,i.jsx)("p",{children:"Workers"})]}),(0,i.jsxs)("div",{className:"me-4 pe-2 text-center",children:[(0,i.jsx)("h4",{className:"h2 text-accent mb-1",children:"43%"}),(0,i.jsx)("p",{children:"Female"})]}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h4",{className:"h2 text-accent mb-1",children:"57%"}),(0,i.jsx)("p",{children:"Male"})]})]}),(0,i.jsx)("h6",{className:"fs-base mb-3",children:"Factory information"}),(0,i.jsx)("p",{className:"fs-sm text-muted pb-md-2",children:"\u200bLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."})]})]})]})}},82819:function(e,s,a){a.d(s,{Z:function(){return N}});var i=a(85893),l=a(8749),t=a(1954);function c(e){var s=e.product;return(0,i.jsxs)("div",{className:"accordion mb-4 mt-3",id:"productPanels",children:[(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h3",{className:"accordion-header",children:(0,i.jsxs)("a",{className:"accordion-button",href:"#productInfo",role:"button","data-bs-toggle":"collapse","aria-expanded":"true","aria-controls":"productInfo",children:[(0,i.jsx)("i",{className:"ci-announcement text-muted fs-lg align-middle mt-n1 me-2"}),"Product info"]})}),(0,i.jsx)("div",{className:"accordion-collapse collapse show",id:"productInfo","data-bs-parent":"#productPanels",children:(0,i.jsxs)("div",{className:"accordion-body",children:[(0,i.jsx)("h6",{className:"fs-sm mb-2",children:"Benefits"}),(0,i.jsx)("ul",{className:"fs-sm px-0",children:s.content.productBenefits.map((function(e){return(0,i.jsxs)("li",{className:"my-1 list-unstyled",children:[(0,i.jsx)(t.JO,{fontSize:"22px",className:"mx-2",icon:e.icon}),e.text]},e.icon)}))}),(0,i.jsx)("h6",{className:"fs-sm mb-2",children:"Quantity in Stock"}),(0,i.jsx)("ul",{className:"fs-sm ps-4 mb-0",children:(0,i.jsx)("li",{children:s.content.maxQuantity})})]})})]}),(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h3",{className:"accordion-header",children:(0,i.jsxs)("a",{className:"accordion-button collapsed",href:"#shippingOptions",role:"button","data-bs-toggle":"collapse","aria-expanded":"true","aria-controls":"shippingOptions",children:[(0,i.jsx)("i",{className:"ci-delivery text-muted lead align-middle mt-n1 me-2"}),"Shipping options"]})}),(0,i.jsx)("div",{className:"accordion-collapse collapse",id:"shippingOptions","data-bs-parent":"#productPanels",children:(0,i.jsxs)("div",{className:"accordion-body fs-sm",children:[(0,i.jsxs)("div",{className:"d-flex justify-content-between border-bottom pb-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fw-semibold text-dark",children:"Courier"}),(0,i.jsx)("div",{className:"fs-sm text-muted",children:"2 - 4 days"})]}),(0,i.jsx)("div",{children:"$26.50"})]}),(0,i.jsxs)("div",{className:"d-flex justify-content-between border-bottom py-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fw-semibold text-dark",children:"Local shipping"}),(0,i.jsx)("div",{className:"fs-sm text-muted",children:"up to one week"})]}),(0,i.jsx)("div",{children:"$10.00"})]}),(0,i.jsxs)("div",{className:"d-flex justify-content-between border-bottom py-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fw-semibold text-dark",children:"Flat rate"}),(0,i.jsx)("div",{className:"fs-sm text-muted",children:"5 - 7 days"})]}),(0,i.jsx)("div",{children:"$33.85"})]}),(0,i.jsxs)("div",{className:"d-flex justify-content-between border-bottom py-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fw-semibold text-dark",children:"UPS ground shipping"}),(0,i.jsx)("div",{className:"fs-sm text-muted",children:"4 - 6 days"})]}),(0,i.jsx)("div",{children:"$18.00"})]}),(0,i.jsxs)("div",{className:"d-flex justify-content-between pt-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fw-semibold text-dark",children:"Local pickup from store"}),(0,i.jsx)("div",{className:"fs-sm text-muted",children:"\u2014"})]}),(0,i.jsx)("div",{children:"$0.00"})]})]})})]})]})}var r=a(67294),d=a(96628),n=a(90083);function m(e){var s=e.show,a=e.onHide,l=e.productName,t=(0,r.useState)(0),c=t[0],n=t[1];return(0,i.jsxs)(d.Z,{show:s,onHide:function(){n(0),a()},role:"dialog",children:[(0,i.jsx)(d.Z.Header,{className:"bg-secondary border-0",closeButton:!0}),(0,i.jsxs)("div",{className:"d-flex title flex-column m-auto",children:[(0,i.jsx)("h4",{className:"text-center mb-0",children:"Larger Order Enquiry"}),(0,i.jsx)("p",{className:"mb-0 text-center",children:"for"}),(0,i.jsx)("h4",{className:"text-center mb-0",children:l})]}),(0,i.jsx)(d.Z.Body,{className:"mb-5",children:x(c,n)})]})}function o(){return(0,i.jsxs)("div",{className:"d-flex m-auto text-center flex-column mb-3",children:[(0,i.jsxs)("div",{className:"text",children:[(0,i.jsx)("p",{className:"mb-0",children:"Thank you for your message."}),(0,i.jsx)("p",{children:"We will be in touch with you shortly."})]}),(0,i.jsx)("div",{className:"icon mt-5",children:(0,i.jsx)("img",{src:"/img/check-mark-verified.gif",alt:"message sent"})})]})}function x(e,s){switch(e){case 0:return(0,i.jsx)(n.Z,{setStage:s});case 1:return(0,i.jsx)(o,{})}}var h=a(40546),u=a(55867),j=a(56486);function p(e){var s=e.product,a=function(){c(!t)},l=(0,r.useState)(!1),t=l[0],c=l[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{show:t,onHide:a,productName:s.name}),(0,i.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)("button",{className:"btn-wishlist me-0 me-lg-n3",type:"button","data-bs-toggle":"tooltip",title:"Add to wishlist",children:(0,i.jsx)("i",{className:"ci-heart"})})]}),(0,i.jsxs)("div",{className:"mb-3 d-flex align-items-center justify-content-between",children:[(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{className:"h3 fw-normal text-accent me-1",children:(0,i.jsx)(h.Z,{price:s.price})}),s.origPrice&&(0,i.jsx)("span",{className:"h5 fw-normal text-accent mx-2",children:(0,i.jsx)("del",{children:(0,i.jsx)(h.Z,{price:s.origPrice})})})]}),(0,i.jsx)("span",{className:"badge bg-danger badge-shadow align-middle mt-n2",children:"Sale"})]}),(0,i.jsx)(j.Z,{product:s}),(0,i.jsx)("button",{onClick:a,className:"btn btn-link link-accent text-decoration-underline px-0",children:"Not enough? Contact us for more"})]})}var b=a(37486);function N(e){var s=e.product;return(0,i.jsx)("div",{className:"container bg-light shadow-lg rounded-3 px-4 py-3 mb-5",children:(0,i.jsx)("div",{className:"px-lg-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(l.Z,{product:s}),(0,i.jsx)("div",{className:"col-lg-5 pt-4 pt-lg-0",children:(0,i.jsxs)("div",{className:"product-details ms-auto pb-3",children:[(0,i.jsx)(p,{product:s}),(0,i.jsx)(c,{product:s}),(0,i.jsx)(b._r,{})]})})]})})})}},61693:function(e,s,a){a.d(s,{Z:function(){return j}});var i=a(85893),l=a(72873),t=a(88116),c=(a(30933),a(65519),a(9846),a(92),a(63470),a(68277),a(65988)),r=a(41664),d=a(40546);function n(e){var s=e.product;return(0,i.jsx)(r.default,{href:"/products/".concat(s.slug),passHref:!0,children:(0,i.jsxs)("div",{className:"jsx-638dabb502f9a79d card product-card card-static",children:[(0,i.jsx)("button",{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Add to wishlist",className:"jsx-638dabb502f9a79d btn-wishlist btn-sm",children:(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d ci-heart"})}),(0,i.jsx)("a",{href:"#",className:"jsx-638dabb502f9a79d card-img-top d-block overflow-hidden",children:(0,i.jsx)("img",{src:s.images[0].file.url,alt:s.name,className:"jsx-638dabb502f9a79d productImage"})}),(0,i.jsxs)("div",{className:"jsx-638dabb502f9a79d card-body py-2",children:[(0,i.jsx)("a",{href:"#",className:"jsx-638dabb502f9a79d product-meta d-block fs-xs pb-1",children:"Men\u2019s Hoodie"}),(0,i.jsx)("h3",{className:"jsx-638dabb502f9a79d product-title fs-sm",children:(0,i.jsx)("a",{href:"#",className:"jsx-638dabb502f9a79d",children:s.name})}),(0,i.jsxs)("div",{className:"jsx-638dabb502f9a79d d-flex justify-content-between",children:[(0,i.jsx)("div",{className:"jsx-638dabb502f9a79d product-price",children:(0,i.jsx)("span",{className:"jsx-638dabb502f9a79d text-accent",children:(0,i.jsx)(d.Z,{price:s.price})})}),(0,i.jsxs)("div",{className:"jsx-638dabb502f9a79d star-rating",children:[(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d star-rating-icon ci-star-half active"}),(0,i.jsx)("i",{className:"jsx-638dabb502f9a79d star-rating-icon ci-star"})]})]})]}),(0,i.jsx)(c.default,{id:"638dabb502f9a79d",children:".card-img-top.jsx-638dabb502f9a79d img.jsx-638dabb502f9a79d {height:200px;\nwidth:300px}\n@media (max-width:768px) {.card-img-top.jsx-638dabb502f9a79d img.jsx-638dabb502f9a79d {height:150px;\nwidth:300px}\n.card-body.jsx-638dabb502f9a79d {padding:0px}\n.product-title.jsx-638dabb502f9a79d {white-space:nowrap;\noverflow:hidden;\ntext-overflow:ellipsis}}"})]})})}function m(e){var s=e.otherProducts,a=e.product,c=null===s||void 0===s?void 0:s.filter((function(e){return e.id!==a.id}));return(0,i.jsxs)("div",{className:"otherProductCarousel container py-5 my-md-3",children:[(0,i.jsx)("h2",{className:"h3 text-center pb-4",children:"You may also like"}),(0,i.jsx)(l.t,{spaceBetween:20,loop:!0,autoplay:!0,slidesPerView:2,breakpoints:{500:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:15},1200:{slidesPerView:3,spaceBetween:20},1400:{slidesPerView:4,spaceBetween:30}},modules:[t.pt,t.W_,t.tl,t.Gk,t.N1,t.xW],pagination:!0,mousewheel:!0,keyboard:!0,navigation:!0,children:c.map((function(e){return(0,i.jsx)(l.o,{children:(0,i.jsx)(n,{product:e})},e.id)}))})]})}var o=a(37983),x=a(57378),h=a(82819),u=a(6031);function j(e){var s=e.products,a=e.pageProduct;return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{product:a}),(0,i.jsx)(h.Z,{product:a}),(0,i.jsx)(x.Z,{product:a}),(0,i.jsx)(u.Z,{product:a}),(0,i.jsx)(m,{product:a,otherProducts:s})]})}},6031:function(e,s,a){a.d(s,{Z:function(){return t}});var i=a(85893),l=a(9008);function t(e){var s=e.product;return console.log("product",s),(0,i.jsxs)("div",{className:"border-top border-bottom my-lg-3 py-5 w-100",children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("script",{src:"https://en.trustmate.io/api/widget/95d50730-e6a5-4465-b950-3fab710cf306/script?product=/products/".concat(s.slug),defer:!0}),(0,i.jsx)("script",{src:"https://en.trustmate.io/api/widget/5c6b265a-9520-4676-9d01-2ecfca53d95c/script",defer:!0})]}),(0,i.jsxs)("div",{className:"container pt-md-2",id:"reviews",children:[(0,i.jsxs)("div",{className:"row pb-3",children:[(0,i.jsxs)("div",{className:"col-lg-4 col-md-5",children:[(0,i.jsx)("h2",{className:"h3 mb-4",children:"74 Reviews"}),(0,i.jsxs)("div",{className:"star-rating me-2",children:[(0,i.jsx)("i",{className:"ci-star-filled fs-sm text-accent me-1"}),(0,i.jsx)("i",{className:"ci-star-filled fs-sm text-accent me-1"}),(0,i.jsx)("i",{className:"ci-star-filled fs-sm text-accent me-1"}),(0,i.jsx)("i",{className:"ci-star-filled fs-sm text-accent me-1"}),(0,i.jsx)("i",{className:"ci-star fs-sm text-muted me-1"})]}),(0,i.jsx)("span",{className:"d-inline-block align-middle",children:"4.1 Overall rating"}),(0,i.jsxs)("p",{className:"pt-3 fs-sm text-muted",children:["58 out of 74 (77%)",(0,i.jsx)("br",{}),"Customers recommended this product"]})]}),(0,i.jsxs)("div",{className:"col-lg-8 col-md-7",children:[(0,i.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,i.jsxs)("div",{className:"text-nowrap me-3",children:[(0,i.jsx)("span",{className:"d-inline-block align-middle text-muted",children:"5"}),(0,i.jsx)("i",{className:"ci-star-filled fs-xs ms-1"})]}),(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("div",{className:"progress",style:{height:"4px"},children:(0,i.jsx)("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"60%"},"aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100})})}),(0,i.jsx)("span",{className:"text-muted ms-3",children:"43"})]}),(0,i.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,i.jsxs)("div",{className:"text-nowrap me-3",children:[(0,i.jsx)("span",{className:"d-inline-block align-middle text-muted",children:"4"}),(0,i.jsx)("i",{className:"ci-star-filled fs-xs ms-1"})]}),(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("div",{className:"progress",style:{height:"4px"},children:(0,i.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"27%",backgroundColor:"#a7e453"},"aria-valuenow":27,"aria-valuemin":0,"aria-valuemax":100})})}),(0,i.jsx)("span",{className:"text-muted ms-3",children:"16"})]}),(0,i.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,i.jsxs)("div",{className:"text-nowrap me-3",children:[(0,i.jsx)("span",{className:"d-inline-block align-middle text-muted",children:"3"}),(0,i.jsx)("i",{className:"ci-star-filled fs-xs ms-1"})]}),(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("div",{className:"progress",style:{height:"4px"},children:(0,i.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"17%",backgroundColor:"#ffda75"},"aria-valuenow":17,"aria-valuemin":0,"aria-valuemax":100})})}),(0,i.jsx)("span",{className:"text-muted ms-3",children:"9"})]}),(0,i.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,i.jsxs)("div",{className:"text-nowrap me-3",children:[(0,i.jsx)("span",{className:"d-inline-block align-middle text-muted",children:"2"}),(0,i.jsx)("i",{className:"ci-star-filled fs-xs ms-1"})]}),(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("div",{className:"progress",style:{height:"4px"},children:(0,i.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"9%",backgroundColor:"#fea569"},"aria-valuenow":9,"aria-valuemin":0,"aria-valuemax":100})})}),(0,i.jsx)("span",{className:"text-muted ms-3",children:"4"})]}),(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsxs)("div",{className:"text-nowrap me-3",children:[(0,i.jsx)("span",{className:"d-inline-block align-middle text-muted",children:"1"}),(0,i.jsx)("i",{className:"ci-star-filled fs-xs ms-1"})]}),(0,i.jsx)("div",{className:"w-100",children:(0,i.jsx)("div",{className:"progress",style:{height:"4px"},children:(0,i.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{height:"4px"},"aria-valuenow":4,"aria-valuemin":0,"aria-valuemax":100})})}),(0,i.jsx)("span",{className:"text-muted ms-3",children:"2"})]})]})]}),(0,i.jsx)("hr",{className:"mt-4 mb-3"}),(0,i.jsxs)("div",{className:"row pt-4",children:[(0,i.jsxs)("div",{className:"col-md-7",children:[(0,i.jsx)("div",{className:"d-flex justify-content-end pb-4",children:(0,i.jsxs)("div",{className:"d-flex align-items-center flex-nowrap",children:[(0,i.jsx)("label",{className:"fs-sm text-muted text-nowrap me-2 d-none d-sm-block",htmlFor:"sort-reviews",children:"Sort by:"}),(0,i.jsxs)("select",{className:"form-select form-select-sm",id:"sort-reviews",children:[(0,i.jsx)("option",{children:"Newest"}),(0,i.jsx)("option",{children:"Oldest"}),(0,i.jsx)("option",{children:"Popular"}),(0,i.jsx)("option",{children:"High rating"}),(0,i.jsx)("option",{children:"Low rating"})]})]})}),(0,i.jsxs)("div",{className:"product-review pb-4 mb-4 border-bottom",children:[(0,i.jsxs)("div",{className:"d-flex mb-3",children:[(0,i.jsxs)("div",{className:"d-flex align-items-center me-4 pe-2",children:[(0,i.jsx)("img",{className:"rounded-circle",src:"/img/shop/reviews/01.jpg",width:"50",alt:"Rafael Marquez"}),(0,i.jsxs)("div",{className:"ps-3",children:[(0,i.jsx)("h6",{className:"fs-sm mb-0",children:"Rafael Marquez"}),(0,i.jsx)("span",{className:"fs-ms text-muted",children:"June 28, 2019"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"star-rating",children:[(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star"})]}),(0,i.jsx)("div",{className:"fs-ms text-muted",children:"83% of users found this review helpful"})]})]}),(0,i.jsx)("p",{className:"fs-md mb-2",children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est..."}),(0,i.jsxs)("ul",{className:"list-unstyled fs-ms pt-1",children:[(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Pros:\xa0"}),"Consequuntur magni, voluptatem sequi, tempora"]}),(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Cons:\xa0"}),"Architecto beatae, quis autem"]})]}),(0,i.jsxs)("div",{className:"text-nowrap",children:[(0,i.jsx)("button",{className:"btn-like",type:"button",children:"15"}),(0,i.jsx)("button",{className:"btn-dislike",type:"button",children:"3"})]})]}),(0,i.jsxs)("div",{className:"product-review pb-4 mb-4 border-bottom",children:[(0,i.jsxs)("div",{className:"d-flex mb-3",children:[(0,i.jsxs)("div",{className:"d-flex align-items-center me-4 pe-2",children:[(0,i.jsx)("img",{className:"rounded-circle",src:"/img/shop/reviews/02.jpg",width:"50",alt:"Barbara Palson"}),(0,i.jsxs)("div",{className:"ps-3",children:[(0,i.jsx)("h6",{className:"fs-sm mb-0",children:"Barbara Palson"}),(0,i.jsx)("span",{className:"fs-ms text-muted",children:"May 17, 2019"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"star-rating",children:[(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"})]}),(0,i.jsx)("div",{className:"fs-ms text-muted",children:"99% of users found this review helpful"})]})]}),(0,i.jsx)("p",{className:"fs-md mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),(0,i.jsxs)("ul",{className:"list-unstyled fs-ms pt-1",children:[(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Pros:\xa0"}),"Consequuntur magni, voluptatem sequi, tempora"]}),(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Cons:\xa0"}),"Architecto beatae, quis autem"]})]}),(0,i.jsxs)("div",{className:"text-nowrap",children:[(0,i.jsx)("button",{className:"btn-like",type:"button",children:"34"}),(0,i.jsx)("button",{className:"btn-dislike",type:"button",children:"1"})]})]}),(0,i.jsxs)("div",{className:"product-review pb-4 mb-4 border-bottom",children:[(0,i.jsxs)("div",{className:"d-flex mb-3",children:[(0,i.jsxs)("div",{className:"d-flex align-items-center me-4 pe-2",children:[(0,i.jsx)("img",{className:"rounded-circle",src:"/img/shop/reviews/03.jpg",width:"50",alt:"Daniel Adams"}),(0,i.jsxs)("div",{className:"ps-3",children:[(0,i.jsx)("h6",{className:"fs-sm mb-0",children:"Daniel Adams"}),(0,i.jsx)("span",{className:"fs-ms text-muted",children:"May 8, 2019"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"star-rating",children:[(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star-filled active"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star"}),(0,i.jsx)("i",{className:"star-rating-icon ci-star"})]}),(0,i.jsx)("div",{className:"fs-ms text-muted",children:"75% of users found this review helpful"})]})]}),(0,i.jsx)("p",{className:"fs-md mb-2",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem."}),(0,i.jsxs)("ul",{className:"list-unstyled fs-ms pt-1",children:[(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Pros:\xa0"}),"Consequuntur magni, voluptatem sequi"]}),(0,i.jsxs)("li",{className:"mb-1",children:[(0,i.jsx)("span",{className:"fw-medium",children:"Cons:\xa0"}),"Architecto beatae, quis autem, voluptatem sequ"]})]}),(0,i.jsxs)("div",{className:"text-nowrap",children:[(0,i.jsx)("button",{className:"btn-like",type:"button",children:"26"}),(0,i.jsx)("button",{className:"btn-dislike",type:"button",children:"9"})]})]}),(0,i.jsx)("div",{id:"95d50730-e6a5-4465-b950-3fab710cf306"}),(0,i.jsx)("div",{id:"5c6b265a-9520-4676-9d01-2ecfca53d95c"}),(0,i.jsx)("div",{className:"text-center",children:(0,i.jsxs)("button",{className:"btn btn-outline-accent",type:"button",children:[(0,i.jsx)("i",{className:"ci-reload me-2"}),"Load more reviews"]})})]}),(0,i.jsx)("div",{className:"col-md-5 mt-2 pt-4 mt-md-0 pt-md-0",children:(0,i.jsxs)("div",{className:"bg-secondary py-grid-gutter px-grid-gutter rounded-3",children:[(0,i.jsx)("h3",{className:"h4 pb-2",children:"Write a review"}),(0,i.jsxs)("form",{className:"needs-validation",method:"post",noValidate:!0,children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{className:"form-label",htmlFor:"review-name",children:["Your name",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)("input",{className:"form-control",type:"text",required:!0,id:"review-name"}),(0,i.jsx)("div",{className:"invalid-feedback",children:"Please enter your name!"}),(0,i.jsx)("small",{className:"form-text text-muted",children:"Will be displayed on the comment."})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{className:"form-label",htmlFor:"review-email",children:["Your email",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)("input",{className:"form-control",type:"email",required:!0,id:"review-email"}),(0,i.jsx)("div",{className:"invalid-feedback",children:"Please provide valid email address!"}),(0,i.jsx)("small",{className:"form-text text-muted",children:"Authentication only - we wont spam you."})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{className:"form-label",htmlFor:"review-rating",children:["Rating",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsxs)("select",{className:"form-select",required:!0,id:"review-rating",children:[(0,i.jsx)("option",{value:"",children:"Choose rating"}),(0,i.jsx)("option",{value:"5",children:"5 stars"}),(0,i.jsx)("option",{value:"4",children:"4 stars"}),(0,i.jsx)("option",{value:"3",children:"3 stars"}),(0,i.jsx)("option",{value:"2",children:"2 stars"}),(0,i.jsx)("option",{value:"1",children:"1 star"})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:"Please choose rating!"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{className:"form-label",htmlFor:"review-text",children:["Review",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)("textarea",{className:"form-control",rows:6,required:!0,id:"review-text"}),(0,i.jsx)("div",{className:"invalid-feedback",children:"Please write a review!"}),(0,i.jsx)("small",{className:"form-text text-muted",children:"Your review must be at least 50 characters."})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{className:"form-label",htmlFor:"review-pros",children:"Pros"}),(0,i.jsx)("textarea",{className:"form-control",rows:2,placeholder:"Separated by commas",id:"review-pros"})]}),(0,i.jsxs)("div",{className:"mb-3 mb-4",children:[(0,i.jsx)("label",{className:"form-label",htmlFor:"review-cons",children:"Cons"}),(0,i.jsx)("textarea",{className:"form-control",rows:2,placeholder:"Separated by commas",id:"review-cons"})]}),(0,i.jsx)("button",{className:"btn btn-primary btn-shadow d-block w-100",type:"button",children:"Submit a Review"})]})]})})]})]})]})}}}]);