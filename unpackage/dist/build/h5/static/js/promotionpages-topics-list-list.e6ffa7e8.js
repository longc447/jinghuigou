(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-topics-list-list"],{1209:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[t.advList.length?a("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":t.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},t._l(t.advList,(function(i,e){return a("v-uni-swiper-item",{key:e,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jumppage(i.adv_url)}}},[a("v-uni-view",{staticClass:"image-box"},[a("v-uni-image",{attrs:{src:t.$util.img(i.adv_image)}})],1)],1)})),1):t._e()],1)},o=[]},"2c5e":function(t,i,a){var e=a("d883");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("e70f290a",e,!0,{sourceMap:!1,shadowMode:!1})},"2fa1":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={nsAdv:a("b2cd").default,nsEmpty:a("431c").default,loadingCover:a("a197").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[t.addonIsExit.topic?a("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"list"},slot:"list"},[a("ns-adv",{attrs:{keyword:"NS_TOPIC"}}),t._l(t.dataList,(function(i,e){return t.dataList.length?a("v-uni-view",{key:e,staticClass:"topic-list",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i.topic_id,i.topic_name)}}},[a("v-uni-view",{staticClass:"list-img"},[a("v-uni-image",{attrs:{src:t.$util.img(i.topic_adv),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"list-info"},[a("v-uni-view",{staticClass:"info-left"},[a("v-uni-text",{staticClass:"left-title"},[t._v(t._s(i.topic_name))]),a("v-uni-text",{staticClass:"left-time"},[t._v("活动时间："+t._s(i.start_time)+"~"+t._s(i.end_time))])],1),a("v-uni-view",{staticClass:"info-right"},[a("v-uni-text",{staticClass:"iconfont iconshijian1"}),t._v(t._s(t.nowTime<i.end_time?"进行中":"已结束"))],1)],1)],1):t._e()})),t.dataList.length?t._e():a("v-uni-view",{staticClass:"cart-empty"},[a("ns-empty",{attrs:{text:"暂无专题活动"}})],1)],2)],2):t._e(),a("loading-cover",{ref:"loadingCover"})],1)},o=[]},"312d":function(t,i,a){var e=a("f0c0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5cd074a6",e,!0,{sourceMap:!1,shadowMode:!1})},4016:function(t,i,a){"use strict";a.r(i);var e=a("dbdb"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"437f":function(t,i,a){"use strict";a.r(i);var e=a("62bc"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"62bc":function(t,i,a){"use strict";a("4160"),a("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"ns-adv",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.keyword&&this.$api.sendRequest({url:"/api/adv/detail",data:{keyword:this.keyword},success:function(i){0==i.code&&i.data&&(i.data.adv_list.forEach((function(t){t.adv_url&&(t.adv_url=JSON.parse(t.adv_url))})),t.advList=i.data.adv_list)}})},jumppage:function(t){this.$util.diyRedirectTo(t)}}};i.default=e},"64da":function(t,i,a){"use strict";a.r(i);var e=a("2fa1"),n=a("4016");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("f0cc");var s,d=a("f0c5"),r=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"ba5189a8",null,!1,e["a"],s);i["default"]=r.exports},b2cd:function(t,i,a){"use strict";a.r(i);var e=a("1209"),n=a("437f");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("bdc7");var s,d=a("f0c5"),r=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"e90b8dde",null,!1,e["a"],s);i["default"]=r.exports},bdc7:function(t,i,a){"use strict";var e=a("312d"),n=a.n(e);n.a},d883:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */[data-v-ba5189a8] .ns-adv{margin:%?20?% %?30?%;padding-top:%?20?%;border-radius:%?10?%;overflow:hidden;line-height:1}[data-v-ba5189a8] .ns-adv uni-image{width:100%}[data-v-ba5189a8] .fixed{position:relative;top:0}[data-v-ba5189a8] .empty{margin-top:0!important}.cart-empty[data-v-ba5189a8]{padding-top:54px}.topic-pic[data-v-ba5189a8]{height:%?300?%}.topic-pic uni-image[data-v-ba5189a8]{height:%?300?%}.topic-list[data-v-ba5189a8]{margin:0 %?24?% %?24?%;border-radius:%?10?%;overflow:hidden;display:flex;flex-direction:column;margin-bottom:%?16?%;background-color:#fff}.topic-list .list-img[data-v-ba5189a8]{width:100%;overflow:hidden}.topic-list .list-img uni-image[data-v-ba5189a8]{width:100%;height:100%}.topic-list .list-info[data-v-ba5189a8]{flex:1;display:flex;padding:0 %?24?%;box-sizing:border-box;align-items:center;justify-content:space-between;padding-top:%?29?%;padding-bottom:%?29?%}.topic-list .list-info .info-left[data-v-ba5189a8]{display:flex;flex-direction:column;line-height:1}.topic-list .list-info .info-left .left-title[data-v-ba5189a8]{font-size:%?28?%;color:#383838;line-height:1}.topic-list .list-info .info-left .left-time[data-v-ba5189a8]{font-size:%?22?%;color:#838383;margin-top:%?18?%;line-height:1}.topic-list .list-info .info-right[data-v-ba5189a8]{font-size:%?28?%;color:#838383;line-height:1}.topic-list .list-info .info-right .iconfont[data-v-ba5189a8]{font-size:%?32?%;vertical-align:middle}.topic-list .list-info .info-right uni-text[data-v-ba5189a8]{font-size:%?28?%;margin-right:%?8?%}',""]),t.exports=i},dbdb:function(t,i,a){"use strict";var e=a("4ea4");a("99af"),a("4160"),a("fb6a"),a("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("b2cd")),o=e(a("a5a8")),s={components:{nsAdv:n.default},data:function(){return{dataList:[],siteId:0,nowTime:""}},onLoad:function(t){t.site_id&&(this.siteId=t.site_id)},onShow:function(){var t=this;this.$langConfig.refresh(),this.$store.dispatch("getAddonIsexit").then((function(i){i.topic||(t.$util.showToast({title:"专题活动未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))}))},mixins:[o.default],methods:{getData:function(t){var i=this;this.$api.sendRequest({url:"/topic/api/topic/page",data:{page_size:t.size,page:t.num,site_id:this.siteId},success:function(a){var e=[],n=a.message;0==a.code&&a.data?e=a.data.list:i.$util.showToast({title:n}),t.endSuccess(e.length),1==t.num&&(i.dataList=[]),i.dataList=i.dataList.concat(e),i.dataList.forEach((function(t){t.start_time=i.$util.timeStampTurnTime(t.start_time).slice(0,10),t.end_time=i.$util.timeStampTurnTime(t.end_time).slice(0,10)})),i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(a){t.endErr(),i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},toDetail:function(t,i){this.$util.redirectTo("/promotionpages/topics/detail/detail",{topic_id:t,title:i})}},onShareAppMessage:function(t){var i="活动多多，优惠多多，快来看看吧",a="/promotionpages/topics/list/list";return{title:i,path:a,success:function(t){},fail:function(t){}}}};i.default=s},f0c0:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".bg[data-v-e90b8dde]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-e90b8dde]{background:#fff;height:%?300?%;border-radius:%?10?%;padding:%?8?% %?24?% %?24?%}.ns-adv .image-box[data-v-e90b8dde]{width:100%;height:100%;border-radius:%?10?%}.ns-adv uni-image[data-v-e90b8dde]{width:100%;height:100%;border-radius:%?10?%}",""]),t.exports=i},f0cc:function(t,i,a){"use strict";var e=a("2c5e"),n=a.n(e);n.a}}]);