"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{7309:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(85893),a=n(67294),o=n(98431),i=n(5757),c=n(81949),u=n(71088),d=n(14718),s=n(12690);function l(e){var t,n,l=e.product,m=e.algoliaEvent,f=e.forCategory,v=(0,c.Z)().optionHandler,p=f?"d-flex flex-column":"d-flex",b=(0,o.Z)(),C=b.productAddedToCart,h=b.convertedItemAfterSearch,y=(0,d.T)(),g=(0,u.Z)().algoliaQuickViewEvent,x=(0,a.useCallback)((function(e){return{backgroundColor:e.toLowerCase()}}),[]),j=(0,i.Z)(),I=j.addItemToCart;return(0,j.loadingState)(I,"".concat(l.name," added to cart")),(0,r.jsxs)("div",{className:"card-body card-body-hidden",children:[(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),I.mutate({product:l,quantity:1}),"search"===m?h("product_added_to_cart_after_search",l.__queryID,[l.objectID]):C([l.id])},children:(null===l||void 0===l||null===(t=l.options)||void 0===t?void 0:t.length)>0?null===l||void 0===l||null===(n=l.options)||void 0===n?void 0:n.map((function(e){return"Color"===e.name?(0,r.jsx)("div",{className:"text-center pb-2",children:e.values.map((function(t){return(0,r.jsxs)("div",{className:"form-check form-option form-check-inline mb-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",value:t.name,onChange:v,name:e.name,id:t.id,required:!0}),(0,r.jsx)("label",{className:"form-option-label rounded-circle",htmlFor:t.id,children:(0,r.jsx)("span",{className:"form-option-color rounded-circle",style:x(t.name)})})]},t.id)}))},e.id):"Size"===e.name?(0,r.jsxs)("div",{className:"mb-2 ".concat(p),children:[(0,r.jsxs)("select",{onChange:v,name:"Size",className:"form-select form-select-sm me-2 mb-2",required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select Size"}),e.values.map((function(e){return(0,r.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),(0,r.jsxs)("button",{"aria-label":"Add to Cart",className:"btn btn-primary btn-sm",type:"submit",children:[(0,r.jsx)("i",{className:"ci-cart fs-sm me-1"}),"Add to Cart"]})]},e.id):null})):(0,r.jsxs)("button",{"aria-label":"Add to Cart",className:"btn btn-primary btn-sm m-auto d-flex align-items-center",type:"submit",children:[(0,r.jsx)("i",{className:"ci-cart fs-sm me-1"}),"Add to Cart"]})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("button",{"aria-label":"Product Quick View",className:"nav-link-style fs-ms btn btn-link",onClick:function(){y((0,s.W3)(l)),"search"===m?h("quick_view_after_search",l.__queryID,[l.objectID]):g(l)},"data-bs-toggle":"quickViewModal",children:[(0,r.jsx)("i",{className:"ci-eye align-middle me-1"}),"Quick view"]})})]})}},71088:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98431),a=n(14718),o=n(12690);function i(){var e=(0,r.Z)().itemViewed,t=(0,a.T)();return{algoliaQuickViewEvent:function(n){var r=void 0!==n.objectID?n.objectID:[n.id];e("quick_view_of_product_by_modal",r),t((0,o.W3)(n))}}}},81949:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(21182),o=n(39226);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(){var e=(0,r.useState)([]),t=e[0],n=e[1],c=(0,o.T)();return{optionHandler:function(e){var r={name:e.target.name,value:e.target.value},o=t.findIndex((function(t){return t.name===e.target.name}));if(-1!==o){var u=t;u[o]=r,c((0,a.v3)(i(u))),n(i(u))}else n(i(t).concat([r])),c((0,a.v3)(i(t).concat([r])))},selectedItemHandler:function(e){var r={name:e.target.name,value:e.target.value},a=t.findIndex((function(t){return t.name===e.target.name}));if(-1!==a){var o=t;o[a]=r,n(i(o))}else n(i(t).concat([r]))},selectedOptions:t}}},5757:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(9954),a=n(88767),o=n(40782),i=n(17439);function c(){var e=(0,i.Z)(),t=e.emptyCart,n=e.deleteCart,r=(0,a.useQueryClient)(),c=(0,i.Z)(),u=c.updateCartItemQuantity,d=c.addToCart,s=c.addToCartModal,l=c.removeCartItem;return{useUpdateCartItem:function(){return(0,a.useMutation)((function(e){var t=e.product,n=e.quantity;return u(t,n)}),{onSettled:function(){r.invalidateQueries("cart")}})},useAddItemToCart:function(){return(0,a.useMutation)((function(e){var t=e.product,n=e.quantity;return d(t,n)}),{onSettled:function(){r.invalidateQueries("cart")}})},useRemoveFromCart:function(){return(0,a.useMutation)((function(e){return l(e)}),{onSettled:function(){r.invalidateQueries("cart")}})},useEmptyCart:function(){return(0,a.useMutation)(t,{onSuccess:function(e){r.invalidateQueries("cart"),o.Am.success("cart cleared")}})},useAddItemToCartModal:function(){return(0,a.useMutation)((function(e){var t=e.product,n=e.productQty,r=e.selectedOptions;return s(t,n,r)}),{onSettled:function(){r.invalidateQueries("cart")}})},useDeleteCart:function(){return(0,a.useMutation)(n,{onSuccess:function(e,t){r.invalidateQueries("cart"),o.Am.success("cart deleted")},onError:function(e){o.Am.error("error deleting cart")}})}}}function u(){var e=c(),t=e.useRemoveFromCart,n=e.useAddItemToCartModal,a=e.useUpdateCartItem,o=(0,r.pm)(),i=o.loadToast,u=o.successToast,d=o.errorToast,s=c().useAddItemToCart,l=t();return{addItemToCart:s(),removeCartItem:l,addItemToCartModal:n(),updateCartItem:a(),loadingState:function(e,t){e.isLoading?i():e.isError?d("an error occured, please try again"):e.isSuccess&&u(t)}}}}}]);