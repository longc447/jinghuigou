(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-logistics-logistics"],{"1edd":function(t,e,i){"use strict";i.r(e);var a=i("92cd"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},"1ff2":function(t,e,i){"use strict";var a=i("73d6"),o=i.n(a);o.a},"4c43":function(t,e,i){"use strict";i.r(e);var a=i("ec34"),o=i("1edd");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("1ff2");var n,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"51ffc3ce",null,!1,a["a"],n);e["default"]=r.exports},"73d6":function(t,e,i){var a=i("bf1c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("ed9dcecc",a,!0,{sourceMap:!1,shadowMode:!1})},"92cd":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("26e9"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("a5a8")),s={data:function(){return{orderId:"",packageList:[],isIphoneX:!1,currIndex:0,status:0}},mixins:[o.default],onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},onShow:function(){this.$langConfig.refresh(),uni.getStorageSync("token")?this.getPackageInfo():this.$util.redirectTo("/pages/login/login/login"),this.isIphoneX=this.$util.uniappIsIPhoneX()},methods:{ontabtap:function(t){this.currIndex=t},getPackageInfo:function(){var t=this;this.$api.sendRequest({url:"/api/order/package",data:{order_id:this.orderId},success:function(e){e.code>=0?(t.packageList=e.data,t.packageList.forEach((function(e){e.trace.list&&(e.trace.list=e.trace.list.reverse()),e.status=t.status++})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},imgError:function(t,e){this.packageList[t].goods_list[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};e.default=s},bf1c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.swiper-item[data-v-51ffc3ce]{padding-top:%?94?%;height:100%;padding-bottom:%?30?%;padding-bottom:constant(safe-area-inset-bottom);\n  /*兼容 IOS<11.2*/padding-bottom:env(safe-area-inset-bottom)\n  /*兼容 IOS>11.2*/}.swiper-item .container[data-v-51ffc3ce]{height:calc(100vh - %?124?%);overflow-y:scroll;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;padding-bottom:%?30?%}.swiper-item .container.safearea[data-v-51ffc3ce]{padding:%?68?%}.order-nav[data-v-51ffc3ce]{width:100vw;flex-direction:row;white-space:nowrap;background:#fff;display:flex;position:fixed;left:0;z-index:998}.order-nav .uni-tab-item[data-v-51ffc3ce]{display:inline-block;padding:%?30?% %?24?% 0}.order-nav .uni-tab-item-title[data-v-51ffc3ce]{color:#555;font-size:%?32?%;display:block;line-height:1;padding:0 %?10?% %?30?%;flex-wrap:nowrap;white-space:nowrap;text-align:center}.order-nav .uni-tab-item-title-active[data-v-51ffc3ce]{display:block;border-bottom:1px solid #fff;padding:0 %?10?% %?30?%}.order-nav[data-v-51ffc3ce] ::-webkit-scrollbar{width:0;height:0;color:transparent}.goods-wrap[data-v-51ffc3ce]{padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);box-sizing:border-box;margin-top:%?20?%;padding:%?30?%}.goods-wrap .goods[data-v-51ffc3ce]{display:flex;position:relative;margin-bottom:%?20?%}.goods-wrap .goods[data-v-51ffc3ce]:last-of-type{margin-bottom:0}.goods-wrap .goods .goods-img[data-v-51ffc3ce]{width:%?180?%;height:%?180?%;margin-right:%?20?%}.goods-wrap .goods .goods-img uni-image[data-v-51ffc3ce]{width:100%;height:100%}.goods-wrap .goods .goods-info[data-v-51ffc3ce]{flex:1;display:flex;flex-direction:column;justify-content:space-between;position:relative;max-width:calc(100% - %?140?%)}.goods-wrap .goods .goods-info .goods-name[data-v-51ffc3ce]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%;font-weight:500}.goods-wrap .goods .goods-info .goods-sub-section[data-v-51ffc3ce]{width:100%;line-height:1.3;display:flex}.goods-wrap .goods .goods-info .goods-sub-section .goods-price[data-v-51ffc3ce]{font-weight:700;font-size:%?20?%}.goods-wrap .goods .goods-info .goods-sub-section .unit[data-v-51ffc3ce]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.goods-wrap .goods .goods-info .goods-sub-section uni-view[data-v-51ffc3ce]{flex:1;line-height:1.3}.goods-wrap .goods .goods-info .goods-sub-section uni-view[data-v-51ffc3ce]:last-of-type{text-align:left}.goods-wrap .goods .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-51ffc3ce]{line-height:1;font-size:%?24?%}.express-company-wrap[data-v-51ffc3ce]{padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);box-sizing:border-box;margin-top:%?20?%}.express-company-wrap .company-logo[data-v-51ffc3ce]{width:%?120?%;height:%?120?%;margin-right:%?20?%;float:left}.express-company-wrap .company-logo uni-image[data-v-51ffc3ce]{width:100%;height:100%}.express-company-wrap .info[data-v-51ffc3ce]{flex:1}.express-company-wrap .info .company[data-v-51ffc3ce]{line-height:1.5;margin-top:%?16?%}.express-company-wrap .info .no[data-v-51ffc3ce]{margin-top:%?10?%;line-height:1.5}.express-company-wrap .info .iconfuzhi[data-v-51ffc3ce]{font-size:%?28?%;line-height:1;margin-left:%?6?%}.track-wrap[data-v-51ffc3ce]{padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);box-sizing:border-box;margin-top:%?20?%}.track-wrap .track-item[data-v-51ffc3ce]{position:relative;flex-wrap:wrap;overflow:visible;display:flex}.track-wrap .track-item[data-v-51ffc3ce]:after{content:"";position:absolute;z-index:1;pointer-events:none;background-color:#e5e5e5;width:1px;height:150%;bottom:0;left:0;top:%?56?%;left:%?20?%;bottom:%?-40?%}.track-wrap .track-item .dot[data-v-51ffc3ce]{margin:%?34?% %?20?% 0 %?10?%;width:%?20?%;height:%?20?%;border-radius:%?10?%;background-color:#ccc;z-index:9}.track-wrap .track-item .msg[data-v-51ffc3ce]{padding:%?20?% 0;flex:1}.track-wrap .track-item .msg .text[data-v-51ffc3ce]{line-height:1.5;font-size:%?28?%}.track-wrap .track-item .msg .time[data-v-51ffc3ce]{color:#909399;font-size:%?20?%;line-height:1.3;margin-top:%?10?%}.track-wrap .track-item[data-v-51ffc3ce]:last-of-type:after{content:unset}[data-v-51ffc3ce] .uni-scroll-view ::-webkit-scrollbar{\n  /* 隐藏滚动条，但依旧具备可以滚动的功能 */display:none;width:0;height:0;color:transparent;background:transparent}[data-v-51ffc3ce] ::-webkit-scrollbar{display:none;width:0;height:0;color:transparent;background:transparent}',""]),t.exports=e},ec34:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={loadingCover:i("a197").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[i("v-uni-scroll-view",{staticClass:"order-nav",attrs:{"scroll-x":!0,"show-scrollbar":!1}},t._l(t.packageList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-tab-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap(a)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:a==t.currIndex?"uni-tab-item-title-active color-base-border  color-base-text":""},[t._v(t._s(e.package_name))])],1)})),1),t._l(t.packageList,(function(e,a){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==t.currIndex,expression:"packageIndex == currIndex"}],key:a,staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"goods-wrap"},[i("v-uni-view",{staticClass:"body"},t._l(e.goods_list,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods"},[i("v-uni-view",{staticClass:"goods-img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsDetail(e.sku_id)}}},[i("v-uni-image",{attrs:{src:t.$util.img(e.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imgError(a,o)}}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsDetail(e.sku_id)}}},[t._v(t._s(e.sku_name))]),i("v-uni-view",{staticClass:"goods-sub-section"},[i("v-uni-view",[i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont iconclose"}),t._v(t._s(e.num))],1)],1)],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"express-company-wrap"},[i("v-uni-view",{staticClass:"company-logo"},[i("v-uni-image",{attrs:{src:t.$util.img(e.express_company_image)}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"company"},[i("v-uni-text",[t._v("承运公司： "+t._s(e.express_company_name))])],1),i("v-uni-view",{staticClass:"no"},[i("v-uni-text",[t._v("运单号："),i("v-uni-text",{staticClass:"color-tip"},[t._v(t._s(e.delivery_no))])],1),i("v-uni-text",{staticClass:"iconfont iconfuzhi",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.copy(e.delivery_no)}}})],1)],1)],1),i("v-uni-view",{staticClass:"track-wrap"},[e.trace.success&&0!=e.trace.list.length?t._l(e.trace.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"track-item",class:0==a?"active":"",attrs:{"data-theme":t.themeStyle}},[i("v-uni-view",{staticClass:"dot",class:0==a?"color-base-bg":""}),i("v-uni-view",{staticClass:"msg"},[i("v-uni-view",{staticClass:"text",class:0==a?"color-base-text":""},[t._v(t._s(e.remark))]),i("v-uni-view",{staticClass:"time",class:0==a?"color-base-text":""},[t._v(t._s(e.datetime))])],1)],1)})):(e.trace.success&&e.trace.list.length,[i("v-uni-view",{staticClass:"fail-wrap font-size-base"},[t._v(t._s(e.trace.reason))])])],2)],1)],1)})),i("loading-cover",{ref:"loadingCover"})],2)},s=[]}}]);