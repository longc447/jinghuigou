(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-shop-category-category"],{"0b6e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{shopInfo:{logo:"",site_name:"",sub_num:0,shop_desccredit:0,shop_servicecredit:0,shop_deliverycredit:0},hasFollow:!1}},props:{value:{type:Object,default:null},siteId:{type:[Number,String],default:0},type:{type:Number,default:0}},watch:{siteId:function(){this.getShopInfo(),this.isFollow()}},created:function(){this.getShopInfo(),this.isFollow()},methods:{follow:function(){var t=this,e=this;uni.getStorageSync("token")?this.hasFollow?uni.showModal({title:"提示",content:"真的要取消关注嘛",success:function(t){t.confirm&&e.$api.sendRequest({url:"/api/shopmember/delete",data:{site_id:e.siteId},success:function(t){0==t.code&&t.data&&(e.hasFollow=!e.hasFollow,e.$util.showToast({title:"取消成功"})),e.$forceUpdate()}})}}):this.$api.sendRequest({url:"/api/shopmember/add",data:{site_id:this.siteId},success:function(e){if(-1==e.code&&"TOKEN_ERROR"==e.error_code)return t.$util.showToast({title:"登录失败"}),void setTimeout((function(){t.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/shop/index/index?site_id="+t.siteId},"redirectTo")}),1e3);0==e.code&&(t.hasFollow=!t.hasFollow,t.$util.showToast({title:"关注成功"})),t.$forceUpdate()}}):this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/shop/index/index?site_id="+this.siteId},"redirectTo")},toIntroduction:function(){"otherpages/shop/introduce/introduce"!=getCurrentPages()[getCurrentPages().length-1].route&&this.$util.redirectTo("/otherpages/shop/introduce/introduce",{site_id:this.siteId})},getShopInfo:function(){var t=this;this.$api.sendRequest({url:"/api/shop/info",data:{site_id:this.siteId},success:function(e){0==e.code&&(t.shopInfo=e.data)}})},isFollow:function(){var t=this;this.$api.sendRequest({url:"/api/shopmember/issubscribe",data:{site_id:this.siteId},success:function(e){0==e.code&&(t.hasFollow=e.data)}})}}};e.default=o},"1b15":function(t,e,i){"use strict";i.r(e);var o=i("0b6e"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"1be1":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.shopInfo?i("v-uni-view",{staticClass:"shop-info"},[i("v-uni-view",{staticClass:"shop-image"},[t.shopInfo.avatar?i("v-uni-image",{attrs:{src:t.$util.img(t.shopInfo.avatar),mode:"aspectFit"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.shopInfo.avatar=t.$util.getDefaultImage().default_shop_img}}}):i("v-uni-image",{attrs:{src:t.$util.getDefaultImage().default_shop_img,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"shop-con"},[i("v-uni-view",{staticClass:"info-top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toIntroduction()}}},[i("v-uni-view",{staticClass:"info-name",style:t.value?"color:"+t.value.color:"#303133"},[t._v(t._s(t.shopInfo.site_name)),i("v-uni-text",{staticClass:"iconfont icongengduo"})],1)],1),i("v-uni-view",{staticClass:"info-desc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toIntroduction()}}},[i("v-uni-view",{staticClass:"desc-star",style:t.value?"color:"+t.value.color:"#303133"},[t._v("综合评分："),i("v-uni-text",[t._v(t._s(((parseFloat(t.shopInfo.shop_desccredit)+parseFloat(t.shopInfo.shop_servicecredit)+parseFloat(t.shopInfo.shop_deliverycredit))/3).toFixed(1)))])],1),i("v-uni-text",{staticClass:"fans",style:t.value?"color:"+t.value.color:"#303133"},[t._v("粉丝数："+t._s(t.shopInfo.sub_num))])],1)],1),t.hasFollow?i("v-uni-button",{staticClass:"info-follow",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow()}}},[i("v-uni-text",{staticClass:"iconfont iconguanzhu active"}),i("v-uni-text",[t._v("已关注")])],1):t._e(),t.hasFollow?t._e():i("v-uni-button",{staticClass:"info-follow",attrs:{type:"warn",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow()}}},[i("v-uni-text",{staticClass:"iconfont iconguanzhu"}),i("v-uni-text",[t._v("关注")])],1)],1):t._e()},a=[]},"46b9":function(t,e,i){"use strict";i.r(e);var o=i("1be1"),n=i("1b15");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("70e0");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"54215b6a",null,!1,o["a"],s);e["default"]=d.exports},"4ff7":function(t,e,i){"use strict";var o=i("4ea4");i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ade3")),a=o(i("46b9")),s=(o(i("7167")),o(i("8c8e"))),r={components:{diyBottomNav:s.default,diyShopInfo:a.default},data:function(){return{siteId:0,diyData:{global:{title:"",bgTopColor:"",textColor:""}},isIphoneX:!1,windowHeight:0}},onLoad:function(t){this.iphoneX=this.$util.uniappIsIPhoneX(),t.site_id?(this.siteId=t.site_id,this.getDiyInfo(),this.getHeight()):this.$util.redirectTo("/otherpages/shop/index/index",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},methods:{getHeight:function(){var t=this;uni.getSystemInfo({success:function(e){var i=0;t.$nextTick((function(){var o=uni.createSelectorQuery().in(t);o.select(".page-shop-info").boundingClientRect((function(o){i+=o.height,i+=57,t.windowHeight=e.windowHeight-i})).exec()}))}})},netFinish:function(t){var e=this;t&&this.$refs.loadingCover&&this.$refs.loadingCover.hide(),setTimeout((function(){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}),1e3)},getDiyInfo:function(){var t=this;this.$api.sendRequest({url:"/api/diyview/info",data:(0,n.default)({site_id:this.siteId,name:"DIY_VIEW_SHOP_GOODS_CATEGORY"},"site_id",this.siteId),success:function(e){if(0==e.code&&e.data){if(t.diyData=e.data,t.diyData.value){t.diyData=JSON.parse(t.diyData.value);for(var i=0;i<t.diyData.value.length;i++)if("PopWindow"==t.diyData.value[i].controller){setTimeout((function(){if(null!=uni.getStorageSync("index_wap_floating_layer")&&""!=uni.getStorageSync("index_wap_floating_layer")){var e=JSON.parse(uni.getStorageSync("index_wap_floating_layer"));e.closeNum<3&&t.$refs.uniPopup[0].open()}else t.$refs.uniPopup[0].open()}),500);break}}uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}else t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}}};e.default=r},"52d2":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={diyGoodsLevelCategory:i("7167").default,loadingCover:i("a197").default,diyBottomNav:i("8c8e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"page-shop-info"},[i("diy-shop-info",{attrs:{siteId:t.siteId}})],1),t._l(t.diyData.value,(function(e,o){return i("v-uni-view",{key:o},["GoodsCategory"==e.controller?[i("v-uni-view",{class:t.iphoneX?"active":"no"},[i("diy-goods-level-category",{attrs:{value:e,siteId:t.siteId,autoHeight:!1,categoryHeight:t.windowHeight},on:{netFinish:function(e){arguments[0]=e=t.$handleEvent(e),t.netFinish.apply(void 0,arguments)}}})],1)]:t._e()],2)})),i("loading-cover",{ref:"loadingCover"}),i("diy-bottom-nav",{attrs:{type:"shop",siteId:t.siteId}})],2)},a=[]},"558d":function(t,e,i){"use strict";i.r(e);var o=i("52d2"),n=i("7dc5");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("ee1e");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"5a629a24",null,!1,o["a"],s);e["default"]=d.exports},"6bd6":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.shop-info[data-v-54215b6a]{margin:%?20?% %?30?%;padding:%?20?%;box-sizing:border-box;display:flex;align-items:center;position:relative;box-sizing:border-box;background:#fff;border-radius:%?10?%}.shop-image[data-v-54215b6a]{width:%?90?%;height:%?90?%;border-radius:%?10?%;overflow:hidden;margin-right:%?20?%;border:%?1?% solid #eee}.shop-image uni-image[data-v-54215b6a]{width:100%;height:100%}.shop-con[data-v-54215b6a]{width:calc(80% - %?90?% - %?20?%);color:#fff}.info-top[data-v-54215b6a]{width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:%?4?%}.info-top .info-name[data-v-54215b6a]{width:60%;font-size:%?28?%;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.info-top .info-name .icongengduo[data-v-54215b6a]{font-size:%?26?%;margin-top:%?2?%;font-weight:400;font-weight:700;margin-left:%?10?%}uni-button[size="mini"].info-follow[data-v-54215b6a]{line-height:1.8!important;padding:0 %?20?%!important;position:absolute;right:%?30?%;top:%?20?%}uni-button[size="mini"].info-follow .iconfont[data-v-54215b6a]{margin-right:%?10?%;font-size:%?24?%}uni-button[size="mini"].info-follow .iconfont.active[data-v-54215b6a]{margin-right:%?10?%;font-size:%?24?%;color:#fff}.info-desc[data-v-54215b6a]{width:100%;display:flex;align-items:center}.info-desc .desc-star[data-v-54215b6a]{display:flex;align-items:center;font-size:%?20?%}.info-desc .fans[data-v-54215b6a]{margin-left:%?20?%;font-size:%?20?%}',""]),t.exports=e},"70e0":function(t,e,i){"use strict";var o=i("a855"),n=i.n(o);n.a},"7dc5":function(t,e,i){"use strict";i.r(e);var o=i("4ff7"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},9726:function(t,e,i){var o=i("ad63");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("12f65a99",o,!0,{sourceMap:!1,shadowMode:!1})},a855:function(t,e,i){var o=i("6bd6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("09e20fee",o,!0,{sourceMap:!1,shadowMode:!1})},ad63:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.page-shop-info[data-v-5a629a24]{overflow:hidden}.active[data-v-5a629a24] .newpage1{height:calc(100vh - 134px)!important}.no[data-v-5a629a24] .newpage1{height:calc(100vh - 100px)!important}',""]),t.exports=e},ee1e:function(t,e,i){"use strict";var o=i("9726"),n=i.n(o);n.a}}]);