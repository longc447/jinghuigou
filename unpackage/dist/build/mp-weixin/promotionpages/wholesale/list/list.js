(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/wholesale/list/list"],{3868:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"431c"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"a197"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$lang("common.currencySymbol")),o=t.addonIsExit.wholesale&&t.dataList.length?t.__map(t.dataList,(function(e,n){var o=t.__get_orig(e),i=t.goodsImg(e.goods_image),a=t.goodsTag(e),s=""!=a?t.goodsTag(e):null;return{$orig:o,m0:i,m1:a,m2:s}})):null;t.$mp.data=Object.assign({},{$root:{m3:n,l0:o}})},a=[]},"38d5":function(t,e,n){},"4c82":function(t,e,n){"use strict";n.r(e);var o=n("3868"),i=n("f67b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("db73");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},a041:function(t,e,n){"use strict";(function(t){n("f871");o(n("66fd"));var e=o(n("4c82"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c336:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a5a8"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("promotionpages/components/drag-button/drag-button").then(function(){return resolve(n("4a84"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("promotionpages/components/diy-wholesale/diy-wholesale").then(function(){return resolve(n("003f"))}.bind(null,n)).catch(n.oe)},r={components:{dragButton:a,diyWholeSale:s},data:function(){return{dataList:[],siteId:0}},mixins:[o.default],onLoad:function(t){t.site_id&&(this.siteId=t.site_id)},onShow:function(){var t=this;this.$langConfig.refresh(),this.$store.dispatch("getAddonIsexit").then((function(e){e.wholesale||(t.$util.showToast({title:"批发活动未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))}))},methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/wholesale/api/goods/page",data:{page_size:t.size,page:t.num,site_id:this.siteId},success:function(n){var o=[],i=n.message;0==n.code&&n.data?o=n.data.list:e.$util.showToast({title:i}),t.endSuccess(o.length),1==t.num&&(e.dataList=[]),o.forEach((function(t){t.show_prce=t.min_price==t.max_price?t.min_price:+t.min_price+" ~ ￥"+t.max_price})),e.dataList=e.dataList.concat(o),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/wholesale/detail/detail",{goods_id:t.goods_id})},imgError:function(t){this.goodsList[t].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},btnClick:function(){this.$util.redirectTo("/promotionpages/wholesale/cartList/cartList")},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(t){switch(t.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}}};e.default=r},db73:function(t,e,n){"use strict";var o=n("38d5"),i=n.n(o);i.a},f67b:function(t,e,n){"use strict";n.r(e);var o=n("c336"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}},[["a041","common/runtime","common/vendor"]]]);