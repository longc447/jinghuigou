(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/groupbuy/list/list"],{"10b1":function(t,n,e){"use strict";e.r(n);var o=e("98a7"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"17af":function(t,n,e){},"2aa6":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={nsAdv:function(){return e.e("components/ns-adv/ns-adv").then(e.bind(null,"b2cd"))},nsEmpty:function(){return e.e("components/ns-empty/ns-empty").then(e.bind(null,"431c"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"a197"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$lang("common.currencySymbol")),o=t.$lang("common.currencySymbol"),i=t.addonIsExit.groupbuy&&t.dataList.length?t.__map(t.dataList,(function(n,e){var o=t.__get_orig(n),i=t.goodsImg(n.goods_image),a=t.goodsTag(n),u=""!=a?t.goodsTag(n):null;return{$orig:o,m0:i,m1:a,m2:u}})):null;t.$mp.data=Object.assign({},{$root:{m3:e,m4:o,l0:i}})},a=[]},"69b2":function(t,n,e){"use strict";var o=e("17af"),i=e.n(o);i.a},"980e":function(t,n,e){"use strict";(function(t){e("f871");o(e("66fd"));var n=o(e("d4a5"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"98a7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("a5a8"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/uni-tag/uni-tag").then(function(){return resolve(e("87fb"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/ns-adv/ns-adv").then(function(){return resolve(e("b2cd"))}.bind(null,e)).catch(e.oe)},s={components:{uniTag:a,nsAdv:u},data:function(){return{dataList:[],siteId:0}},mixins:[o.default],onLoad:function(t){t.site_id&&(this.siteId=t.site_id)},onShow:function(){var t=this;this.$langConfig.refresh(),this.$store.dispatch("getAddonIsexit").then((function(n){n.groupbuy||(t.$util.showToast({title:"团购未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))}))},methods:{getData:function(t){var n=this;this.$api.sendRequest({url:"/groupbuy/api/goods/page",data:{page_size:t.size,page:t.num,site_id:this.siteId},success:function(e){var o=[],i=e.message;0==e.code&&e.data?o=e.data.list:n.$util.showToast({title:i}),t.endSuccess(o.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(o),n.$refs.loadingCover&&n.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/groupbuy/detail/detail",{groupbuy_id:t.groupbuy_id})},imgError:function(t){this.goodsList[t].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){var n=t.split(",");return n[0]?this.$util.img(n[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(t){switch(t.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}},onShareAppMessage:function(t){var n="参加团购，优惠更多哦",e="/promotionpages/groupbuy/list/list";return{title:n,path:e,success:function(t){},fail:function(t){}}}};n.default=s},d4a5:function(t,n,e){"use strict";e.r(n);var o=e("2aa6"),i=e("10b1");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("69b2");var u,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"8f7f646e",null,!1,o["a"],u);n["default"]=r.exports}},[["980e","common/runtime","common/vendor"]]]);