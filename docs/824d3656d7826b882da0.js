(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{620:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content__section"},[e._m(0),n("div",{staticClass:"content__work-space__feedback"},[n("ul",{staticClass:"works"},[e._l(e.reviews,function(e){return n("li",{staticClass:"works__item"},[n("reviewsItem",{attrs:{review:e}})],1)}),n("li",{staticClass:"works__item"},[n("button",{staticClass:"add__item-btn",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.showReviewsAdding=!0}}},[n("div",{staticClass:"add__item-btn__icon"}),n("div",{staticClass:"add__item-btn__title"},[e._v("Добавить отзыв")])])])],2),e.showReviewsAdding?n("reviewsAdd",{on:{cancelReviewsAdding:function(t){e.showReviewsAdding=!1}}}):e._e()],1)])};i._withStripped=!0;var r=n(167);function s(e,t,n,i,r,s,c){try{var o=e[s](c),a=o.value}catch(e){return void n(e)}o.done?t(a):Promise.resolve(a).then(i,r)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){return{showReviewsAdding:!1}},components:{reviewsAdd:function(){return n.e(8).then(n.bind(null,621))},reviewsItem:function(){return n.e(4).then(n.bind(null,622))}},computed:c({},Object(r.c)("reviews",{reviews:function(e){return e.reviews}})),methods:c({},Object(r.b)("reviews",["fetchReviews"]),{addingReview:function(e){this.reviews.push(e)}}),created:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchReviews();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("произошла ошибка при создании отзывов");case 8:case"end":return e.stop()}},e,this,[[0,5]])}),function(){var t=this,n=arguments;return new Promise(function(i,r){var c=e.apply(t,n);function o(e){s(c,i,r,o,a,"next",e)}function a(e){s(c,i,r,o,a,"throw",e)}o(void 0)})});return function(){return t.apply(this,arguments)}}()},u=n(78),l=Object(u.a)(a,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content__headline"},[t("h1",{staticClass:"headline__second-grade"},[this._v("Блок «Отзывы»")])])}],!1,null,null,null);l.options.__file="src/admin/components/pages/section_reviews.vue";t.default=l.exports}}]);