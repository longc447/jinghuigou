(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-goods-level-category/diy-goods-level-two-second"],{"109b":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a5a8")),a=o(i("fd37"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){i.e("components/ns-search/ns-search").then(function(){return resolve(i("60db"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{isLoadingCate:!1,categoryAdvImage:"",cateList:[],twoCateList:[],height:0,oneCategoryId:0,TwoCategoryId:0,child_list:{},current:[]}},components:{nsSearch:s},mixins:[n.default,a.default],props:{value:{type:Object},categoryHeight:{type:[Number,String],default:0},siteId:{type:[Number,String],default:0}},created:function(){this.getCategoryList()},computed:{mainHeight:function(){var t=this.categoryHeight?this.categoryHeight+"px":"100%";return t="height:"+t,t}},methods:{showCate:function(t){console.log(t),this.current.includes(t)?this.current.splice(this.current.indexOf(t),1):this.current.push(t)},getCategoryList:function(){var e=this,i="/api/goodscategory/tree",n={level:3,template:this.value.template};this.siteId&&(n.site_id=this.siteId,i="/api/shopgoodscategory/tree"),this.isLoadingCate=!1,this.$api.sendRequest({url:i,data:n,success:function(i){if(e.isLoadingCate=!0,0!=i.code)return e.$util.showToast({title:i.message}),!1;0==i.code&&i.data.length&&(e.cateList=i.data,e.categoryAdvImage=e.cateList[0].image_adv,e.oneCategoryId=e.cateList[0].category_id_1,i.data[0].child_list&&(e.twoCateList=i.data[0].child_list,console.log(e.twoCateList),i.data[0].child_list[0]&&(e.TwoCategoryId=i.data[0].child_list[0].category_id_2)),e.$nextTick((function(){var e=this,i=t.createSelectorQuery().in(this);i.select(".category-cate-top").boundingClientRect((function(t){e.height=t.height+"px"})).exec()}))),e.$emit("netFinish",!0)}})},cancelDrawer:function(){this.showScreen=!1},toListDetail:function(t){console.log(t),this.child_list=null,t.child_list&&(this.child_list=t.child_list),this.showScreen=!0},toDetail:function(t){console.log(t),this.showScreen=!1;var e={category_id:t.category_id,category_id_1:t.category_id_1},i="/pages/goods/list/list";this.siteId&&(i="/otherpages/shop/list/list",e.site_id=this.siteId),this.$util.redirectTo(i,e)},selectOneCategory:function(e,i){this.oneCategoryId=e,this.categoryAdvImage=this.cateList[i].image_adv,this.twoCateList=this.cateList[i].child_list?this.cateList[i].child_list:[],this.twoCateList.length?(this.TwoCategoryId=this.twoCateList[0].category_id_2,this.TwoCategoryIndex=0):this.TwoCategoryId=0,this.$nextTick((function(){var e=this,i=t.createSelectorQuery().in(this);i.select(".category-cate-top").boundingClientRect((function(t){e.height=t.height+"px"})).exec()}))},cateImgError:function(t){this.twoCateList[t].image=this.$util.getDefaultImage().default_category_img,this.$forceUpdate()}}};e.default=c}).call(this,i("543d")["default"])},"19e1":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"431c"))},uniDrawer:function(){return i.e("components/uni-drawer/uni-drawer").then(i.bind(null,"bb44"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.cateList.length&&t.isLoadingCate&&t.categoryAdvImage?t.$util.img(t.categoryAdvImage):null),n=t.cateList.length&&t.isLoadingCate&&t.twoCateList.length?t.__map(t.twoCateList,(function(e,i){var n=t.__get_orig(e),a=e.child_list&&e.image?t.$util.img(e.image):null,o=e.child_list&&!e.image?t.$util.getDefaultImage():null,s=!e.child_list&&e.image?t.$util.img(e.image):null,c=e.child_list||e.image?null:t.$util.getDefaultImage();return{$orig:n,g1:a,g2:o,g3:s,g4:c}})):null,a=t.__map(t.child_list,(function(e,i){var n=t.__get_orig(e),a=e.child_list?t.current.includes(i):null,o=t.current.includes(i);return{$orig:n,g5:a,g6:o}}));t._isMounted||(t.e0=function(e){t.categoryAdvImage=t.$util.img("/upload/uniapp/default_ad.png")},t.e1=function(e){t.showScreen=!1}),t.$mp.data=Object.assign({},{$root:{g0:i,l0:n,l1:a}})},o=[]},"1aa9":function(t,e,i){"use strict";i.r(e);var n=i("19e1"),a=i("fe60");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("de0b");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},"8ad3":function(t,e,i){},de0b:function(t,e,i){"use strict";var n=i("8ad3"),a=i.n(n);a.a},fe60:function(t,e,i){"use strict";i.r(e);var n=i("109b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-goods-level-category/diy-goods-level-two-second-create-component',
    {
        'components/diy-goods-level-category/diy-goods-level-two-second-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1aa9"))
        })
    },
    [['components/diy-goods-level-category/diy-goods-level-two-second-create-component']]
]);