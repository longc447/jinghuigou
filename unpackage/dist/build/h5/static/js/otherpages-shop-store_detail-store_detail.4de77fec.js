(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-shop-store_detail-store_detail"],{"0f8c":function(t,e,i){"use strict";i.r(e);var a=i("e3a9"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"22a1":function(t,e,i){var a=i("5524");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("3b5e1430",a,!0,{sourceMap:!1,shadowMode:!1})},"2a43":function(t,e,i){"use strict";i.r(e);var a=i("c09a"),o=i("2bdd");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("b96b");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"c387a32c",null,!1,a["a"],r);e["default"]=l.exports},"2bdd":function(t,e,i){"use strict";i.r(e);var a=i("6bf9"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},5524:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.store_detail[data-v-c387a32c]{width:100%;height:100%;background:#f5f5f5}.shop-info[data-v-c387a32c]{width:100%;padding:%?20?%;box-sizing:border-box;display:flex;align-items:center;position:relative;box-sizing:border-box;background:#fff}.shop-image[data-v-c387a32c]{width:%?90?%;height:%?90?%;border-radius:50%;overflow:hidden;margin-right:%?30?%}.shop-image uni-image[data-v-c387a32c]{width:100%;height:100%}.shop-con[data-v-c387a32c]{width:calc(80% - %?90?% - %?20?%);color:#fff}.store-desc[data-v-c387a32c]{display:flex;flex-direction:column;padding:%?20?%;box-sizing:border-box;background:#fff}.store-desc .desc-title[data-v-c387a32c]{width:100%;font-size:%?28?%;box-sizing:border-box;font-weight:700;line-height:1}.store-explain[data-v-c387a32c]{background:#fff;padding:%?20?%;box-sizing:border-box;margin-bottom:%?20?%;border-top:%?1?% solid #eee}.store-explain .explain-li[data-v-c387a32c]{display:inline-block;margin-right:%?20?%;margin-bottom:%?10?%}.store-base-info[data-v-c387a32c]{background:#fff;padding:%?20?%;padding-right:%?30?%;box-sizing:border-box;margin-bottom:%?40?%;border-top:%?1?% solid #eee}.store-base-info .base-title[data-v-c387a32c]{width:100%;height:%?70?%;font-size:%?32?%;color:#909399;padding:%?10?% %?20?% 0 0;box-sizing:border-box}.store-base-info .base-li[data-v-c387a32c]{width:100%;display:flex;justify-content:space-between;align-items:flex-start;font-size:%?28?%;padding:%?10?% 0;box-sizing:border-box}.store-base-info .base-li .iconfont[data-v-c387a32c]{font-size:%?32?%;color:#909399}.store-base-info .base-li uni-text[data-v-c387a32c]{line-height:1.1}.store-base-info .base-li uni-text[data-v-c387a32c]:nth-child(2){display:inline-block;font-size:%?24?%;max-width:65%}uni-map[data-v-c387a32c]{width:100%}',""]),t.exports=e},"569c":function(t,e,i){var a=i("6dd3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6619191b",a,!0,{sourceMap:!1,shadowMode:!1})},"6bf9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{storeDetail:[],siteId:0,storeId:0}},computed:{markers:function(){var t=[];return this.storeDetail&&this.storeDetail.latitude&&this.storeDetail.longitude?t.push({id:0,latitude:this.storeDetail.latitude,longitude:this.storeDetail.longitude,iconPath:this.$util.img("upload/uniapp/location.png"),width:25,height:25}):t=[],t}},onLoad:function(t){t.store_id&&t.site_id?(this.storeId=t.store_id,this.siteId=t.site_id,this.getData()):this.$util.redirectTo("/otherpages/shop/index/index",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/store/info",data:{site_id:this.siteId,store_id:this.storeId},success:function(e){0==e.code&&e.data?t.storeDetail=e.data:t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},call:function(){uni.makePhoneCall({phoneNumber:this.storeDetail.telphone})}}};e.default=a},"6dd3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.placeholder[data-v-22a7a62e]{height:56px}.placeholder.bluge[data-v-22a7a62e]{height:90px}.safe-area[data-v-22a7a62e]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.tab-bar[data-v-22a7a62e]{background:#fff;background-color:#fff;box-sizing:border-box;position:fixed;left:0;bottom:0;width:100%;z-index:998;display:flex;border-top:1px solid #f5f5f5;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.tab-bar .tabbar-border[data-v-22a7a62e]{background-color:hsla(0,0%,100%,.329412);position:absolute;left:0;top:0;width:100%;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tab-bar .item[data-v-22a7a62e]{display:flex;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex:1;flex-direction:column;padding-bottom:5px;box-sizing:border-box}.tab-bar .item .bd[data-v-22a7a62e]{position:relative;height:50px;flex-direction:column;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.tab-bar .item .bd .icon[data-v-22a7a62e]{position:relative;display:inline-block;margin-top:5px;width:%?40?%;height:%?40?%}.tab-bar .item .bd .icon uni-image[data-v-22a7a62e]{width:100%;height:100%}.tab-bar .item .bd .label[data-v-22a7a62e]{position:relative;text-align:center;font-size:12px;line-height:1;margin-top:%?12?%}.tab-bar .item.bulge .bd[data-v-22a7a62e]{position:relative;height:50px;flex-direction:column;text-align:center}.tab-bar .item.bulge .bd .icon[data-v-22a7a62e]{margin-top:-30px;margin-bottom:2px;border-radius:50%;width:50px;height:51px;padding:5px;border-top:1px solid #f5f5f5;background-color:#fff;box-sizing:border-box}.tab-bar .item.bulge .bd .icon uni-image[data-v-22a7a62e]{width:100%;height:100%;border-radius:50%}.tab-bar .item.bulge .bd .label[data-v-22a7a62e]{position:relative;text-align:center;font-size:12px;line-height:1.6;height:20px;line-height:20px}.tab-bar .item .cartNumberBtn[data-v-22a7a62e]{position:absolute;top:%?-8?%;right:%?-18?%;width:%?24?%;height:%?24?%;display:flex;justify-content:center;align-items:center;color:#fff;padding:%?6?%;border-radius:50%;z-index:99}',""]),t.exports=e},"8c8e":function(t,e,i){"use strict";i.r(e);var a=i("f43b"),o=i("0f8c");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("a85d");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"22a7a62e",null,!1,a["a"],r);e["default"]=l.exports},a85d:function(t,e,i){"use strict";var a=i("569c"),o=i.n(a);o.a},b96b:function(t,e,i){"use strict";var a=i("22a1"),o=i.n(a);o.a},c09a:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={loadingCover:i("a197").default,diyBottomNav:i("8c8e").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"store_detail"},[t.storeDetail.store_image?i("v-uni-view",{staticClass:"shop-info"},[i("v-uni-view",{staticClass:"shop-image"},[i("v-uni-image",{attrs:{src:t.$util.img(t.storeDetail.store_image),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"shop-con"},[i("v-uni-view",{staticClass:"info-name"},[t._v(t._s(t.storeDetail.store_name))])],1)],1):t._e(),i("v-uni-view",{staticClass:"store-desc"},[i("v-uni-view",{staticClass:"desc-title"},[t._v("门店信息")])],1),i("v-uni-view",{staticClass:"store-base-info"},[t.storeDetail.site_name?i("v-uni-view",{staticClass:"base-li"},[i("v-uni-text",[t._v("店铺名称")]),i("v-uni-text",[t._v(t._s(t.storeDetail.site_name))])],1):t._e(),t.storeDetail.telphone?i("v-uni-view",{staticClass:"base-li"},[i("v-uni-text",[t._v("服务电话")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call.apply(void 0,arguments)}}},[t._v(t._s(t.storeDetail.telphone))])],1):t._e(),t.storeDetail.open_date?i("v-uni-view",{staticClass:"base-li"},[i("v-uni-text",[t._v("营业时间")]),i("v-uni-text",[t._v(t._s(t.storeDetail.open_date))])],1):t._e()],1),t.storeDetail.latitude&&t.storeDetail.longitude?i("v-uni-view",{staticClass:"store-desc"},[i("v-uni-view",{staticClass:"desc-title"},[t._v("门店位置")])],1):t._e(),t.storeDetail.latitude&&t.storeDetail.longitude?i("v-uni-view",{staticClass:"store-base-info"},[i("v-uni-map",{attrs:{latitude:Number(t.storeDetail.latitude),markers:t.markers,longitude:Number(t.storeDetail.longitude)}}),i("v-uni-view",{staticClass:"margin-top"},[i("v-uni-text",[t._v(t._s(t.storeDetail.full_address)+t._s(t.storeDetail.address))])],1)],1):t._e(),i("loading-cover",{ref:"loadingCover"}),i("diy-bottom-nav",{attrs:{type:"shop",siteId:t.siteId}})],1)},n=[]},e3a9:function(t,e,i){"use strict";var a=i("4ea4");i("c975"),i("26e9"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("8c8e"));var o={name:"diy-bottom-nav",props:{value:{type:Object},type:{type:String,default:""},siteId:{type:[Number,String],default:0}},data:function(){return{currentRoute:"",special:["pages/goods/cart/cart"],specialPage:"",isIphoneX:!1,jumpFlag:!0,bottomNav:{},textHoverColor:"",textColor:"",backgroundColor:"",list:{},bottomType:1}},mounted:function(){var t=getCurrentPages()[getCurrentPages().length-1];this.currentRoute=t.route,this.getBottomNav(),this.$store.dispatch("getCartNumber")},computed:{cartNumber:function(){return this.$store.state.cartNumber},isBulge:function(){return!1}},methods:{redirectTo:function(t){var e=this;if(this.$emit("callback"),this.jumpFlag){if(this.jumpFlag=!1,setTimeout((function(){e.jumpFlag=!0}),300),null==t||""==t||!t.wap_url)return!1;if(-1!=t.wap_url.indexOf(this.currentRoute))return!1;for(var i=!0,a=getCurrentPages().reverse(),o=0;o<a.length;o++)if(-1!=t.wap_url.indexOf(a[o].route)){i=!1,uni.navigateBack({delta:o});break}i&&(this.siteId&&-1==t.wap_url.indexOf("site_id")&&(t.wap_url+="?site_id="+this.siteId),this.$util.redirectTo(t.wap_url))}},verify:function(t){return!(null==t||""==t||!t.wap_url)&&-1!=t.wap_url.indexOf(this.currentRoute)},getBottomNav:function(){var t=this,e="/api/diyview/bottomNav",i={};this.siteId&&(e="/api/diyview/shopBottomNav",i.site_id=this.siteId),this.$api.sendRequest({url:e,data:i,success:function(e){console.log(e,"tabbar");var i=e.data;if(i&&i.value&&i.value.length){var a=JSON.parse(i.value);t.bottomNav=a,t.textColor=a.textColor,t.textHoverColor=a.textHoverColor,t.backgroundColor=a.backgroundColor,t.bottomType=a.type,t.list=a.list,t.$store.commit("setTabbarList",JSON.parse(i.value)),t.$forceUpdate()}}})}}};e.default=o},f43b:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list?i("v-uni-view",[i("v-uni-view",{staticClass:"tab-bar",style:{backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"tabbar-border"}),t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",class:{bulge:t.isBulge&&2==a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.redirectTo(e.link)}}},[i("v-uni-view",{staticClass:"bd"},[1==t.bottomType||2==t.bottomType?i("v-uni-view",{staticClass:"icon"},[i("v-uni-image",{attrs:{src:t.verify(e.link)?t.$util.img(e.selectedIconPath):t.$util.img(e.iconPath)}}),"/pages/goods/cart/cart"==e.link.wap_url&&t.cartNumber>0?i("v-uni-view",{staticClass:"cartNumberBtn font-size-activity-tag color-base-bg"},[t._v(t._s(t.cartNumber))]):t._e()],1):t._e(),1==t.bottomType||3==t.bottomType?i("v-uni-view",{staticClass:"label",style:{color:t.verify(e.link)?t.textHoverColor:t.textColor}},[t._v(t._s(e.text))]):t._e()],1)],1)}))],2)],1):t._e()},n=[]}}]);