(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-point-result-result"],{"4a2d":function(t,e,n){var a=n("e3b8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1ab507e8",a,!0,{sourceMap:!1,shadowMode:!1})},cb130:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",attrs:{"data-theme":t.themeStyle}},[n("v-uni-view",{staticClass:"image-wrap"},[n("v-uni-image",{staticClass:"result-image",attrs:{src:t.$util.img("upload/uniapp/pay_success.png")}})],1),n("v-uni-view",{staticClass:"msg"},[t._v(t._s(t.$lang("exchangeSuccess")))]),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"btn color-base-border color-base-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderList()}}},[t._v(t._s(t.$lang("see")))]),n("v-uni-view",{staticClass:"btn go-home color-base-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toIndex.apply(void 0,arguments)}}},[t._v(t._s(t.$lang("goHome")))])],1)],1)},o=[]},d878:function(t,e,n){"use strict";n.r(e);var a=n("dfa6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},dc6e:function(t,e,n){"use strict";var a=n("4a2d"),i=n.n(a);i.a},dfa6:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a5a8")),o={data:function(){return{}},mixins:[i.default],onShow:function(){this.$langConfig.refresh()},methods:{toOrderList:function(){this.$util.redirectTo("/promotionpages/point/order_list/order_list",{},"redirectTo")},toIndex:function(){this.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}}};e.default=o},e3b8:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.container[data-v-64a705c9]{width:100vw;height:100vh;background:#fff}.container .image-wrap[data-v-64a705c9]{display:flex;justify-content:center;padding:%?200?% 0 %?40?% 0}.container .image-wrap .result-image[data-v-64a705c9]{width:%?166?%;height:%?132?%}.container .msg[data-v-64a705c9]{text-align:center;line-height:1;margin-bottom:%?50?%;font-size:%?28?%;color:#000}.container .pay-amount[data-v-64a705c9]{color:#999;text-align:center;line-height:1;margin-bottom:%?30?%}.container .action[data-v-64a705c9]{width:90%;margin:0 auto;text-align:center;margin-top:%?150?%;display:flex;justify-content:space-between}.container .action .btn[data-v-64a705c9]{width:%?310?%;height:%?78?%;border:%?2?% solid #fff;border-radius:%?80?%;font-size:%?24?%;display:flex;align-items:center;justify-content:center}.container .action .alone[data-v-64a705c9]{margin-left:0;width:60%}.container .action .go-home[data-v-64a705c9]{color:#fff}',""]),t.exports=e},ec76:function(t,e,n){"use strict";n.r(e);var a=n("cb130"),i=n("d878");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("dc6e");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"64a705c9",null,!1,a["a"],r);e["default"]=s.exports}}]);