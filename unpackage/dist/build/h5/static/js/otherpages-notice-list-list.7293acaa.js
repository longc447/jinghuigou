(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-list-list"],{"506a":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a5a8")),o={data:function(){return{dataList:[]}},onShow:function(){this.$langConfig.refresh()},mixins:[a.default],methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/api/notice/page",data:{page_size:t.size,page:t.num},success:function(i){var n=[],a=i.message;0==i.code&&i.data?n=i.data.list:e.$util.showToast({title:a}),t.endSuccess(n.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(n),e.dataList.forEach((function(t){t.info=t.content.replace(/<[^>]+>/g,"")})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},jumpDetail:function(t){this.$util.redirectTo("/otherpages/notice/detail/detail?notice_id="+t)}},onShareAppMessage:function(t){var e="公告",i="/otherpages/notice/list/list";return{title:e,path:i,success:function(t){},fail:function(t){}}}};e.default=o},8513:function(t,e,i){"use strict";i.r(e);var n=i("edd8"),a=i("ad53");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9472");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"f5e883e2",null,!1,n["a"],s);e["default"]=r.exports},9001:function(t,e,i){var n=i("e7b2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("529c3df3",n,!0,{sourceMap:!1,shadowMode:!1})},9472:function(t,e,i){"use strict";var n=i("9001"),a=i.n(n);a.a},ad53:function(t,e,i){"use strict";i.r(e);var n=i("506a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e7b2:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */[data-v-f5e883e2] .fixed{position:relative;top:0}.cart-empty[data-v-f5e883e2]{padding-top:154px}.notice-list .notice-item[data-v-f5e883e2]{margin:%?20?% %?30?%;background:#fff;border-radius:%?10?%;padding:%?32?% %?34?% %?23?% %?34?%;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;line-height:1}.notice-list .notice-item .title-info[data-v-f5e883e2]{width:100%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f3f3f3;padding-bottom:%?20?%;overflow:hidden}.notice-list .notice-item .title-info .title[data-v-f5e883e2]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center}.notice-list .notice-item .title-info .title > uni-text[data-v-f5e883e2]:first-child{color:#000;font-size:%?28?%;line-height:%?28?%;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.notice-list .notice-item .title-info .title > uni-text[data-v-f5e883e2]:nth-child(2){font-size:%?22?%;color:#fff;line-height:%?28?%;border-radius:%?6?%;padding:0 %?6?%;margin-left:%?14?%}.notice-list .notice-item .title-info .release-time[data-v-f5e883e2]{width:%?160?%;min-width:%?160?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:%?20?%;color:#909399;text-align:right;font-size:%?24?%}.notice-list .notice-item .content[data-v-f5e883e2]{margin-top:%?10?%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;color:#909399;font-size:%?22?%;padding-bottom:%?30?%}.notice-list .notice-item .more[data-v-f5e883e2]{width:100%;display:flex;justify-content:space-between;padding-top:%?20?%;font-size:%?24?%;align-items:center}.notice-list .notice-item .more .detail[data-v-f5e883e2]{width:%?505?%;color:#606266;font-size:%?24?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.notice-list .notice-item .more .iconright[data-v-f5e883e2]{color:#909399;font-size:%?28?%}',""]),t.exports=e},edd8:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={nsEmpty:i("431c").default,loadingCover:i("a197").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[i("mescroll-uni",{ref:"mescroll",on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[t.dataList.length?i("v-uni-view",{staticClass:"notice-list"},t._l(t.dataList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"notice-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetail(e.id)}}},[i("v-uni-view",{staticClass:"title-info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(e.title))]),1==e.is_top?i("v-uni-text",{staticClass:"color-base-bg"},[t._v("置顶")]):t._e()],1),i("v-uni-text",{staticClass:"release-time"},[t._v(t._s(t.$util.timeStampTurnTime(e.create_time,1)))])],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-text",{staticClass:"detail"},[t._v(t._s(e.info))]),i("v-uni-view",{staticClass:"iconfont iconright"})],1)],1)})),1):i("v-uni-view",{staticClass:"cart-empty"},[i("ns-empty",{attrs:{text:"暂无公告",isIndex:!1}})],1),i("loading-cover",{ref:"loadingCover"})],1)],2)],1)},o=[]}}]);