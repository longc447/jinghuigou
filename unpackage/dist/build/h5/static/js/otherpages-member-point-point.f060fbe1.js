(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-point-point"],{"0b28":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.head-wrap[data-v-129a0b42]{width:100vw;height:%?360?%;background-size:100%;padding:%?60?% %?30?%;box-sizing:border-box}.head-wrap .title[data-v-129a0b42]{color:#fff;text-align:center;line-height:1}.head-wrap .point[data-v-129a0b42]{font-size:%?48?%;color:#fff;text-align:center;line-height:1;margin-top:%?20?%}.head-wrap .flex-box[data-v-129a0b42]{display:flex;margin-top:%?30?%}.head-wrap .flex-box .flex-item[data-v-129a0b42]{flex:1}.head-wrap .flex-box .flex-item .num[data-v-129a0b42]{font-size:%?30?%;margin-bottom:%?20?%}.head-wrap .flex-box .flex-item uni-view[data-v-129a0b42]{text-align:center;color:#fff;line-height:1}.menu-wrap[data-v-129a0b42]{border-radius:%?10?%;margin:0 %?30?%;padding:%?30?%;background:#fff;display:flex;-webkit-transform:translateY(%?-54?%);transform:translateY(%?-54?%)}.menu-wrap .menu-item[data-v-129a0b42]{flex:1;text-align:center}.menu-wrap .menu-item .iconfont[data-v-129a0b42]{font-size:%?28?%;margin-right:%?6?%}.task-wrap .title[data-v-129a0b42]{font-size:%?32?%;text-align:center;margin-bottom:%?40?%}.task-wrap .title .text[data-v-129a0b42]{margin:0 %?20?%}.task-wrap .title .iconfont[data-v-129a0b42]{font-size:%?20?%;position:absolute;z-index:1}.task-wrap .title .color-base-text-light[data-v-129a0b42]{z-index:0}.task-wrap .title .box[data-v-129a0b42]{position:relative}.task-wrap .title .left[data-v-129a0b42]{right:%?20?%;top:%?6?%}.task-wrap .title .left .color-base-text-light[data-v-129a0b42]{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.task-wrap .title .right[data-v-129a0b42]{left:0;top:%?6?%}.task-wrap .title .right .color-base-text-light[data-v-129a0b42]{-webkit-transform:translateX(50%);transform:translateX(50%)}.task-wrap .task-item[data-v-129a0b42]{border-radius:%?10?%;background:#fff;padding:%?30?%;margin:%?20?% %?30?% 0 %?30?%;display:flex;align-items:center}.task-wrap .task-item .icon[data-v-129a0b42]{width:%?80?%;height:%?80?%;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:50%}.task-wrap .task-item .iconfont[data-v-129a0b42]{font-size:%?40?%}.task-wrap .task-item .wrap[data-v-129a0b42]{flex:1;padding-left:%?30?%}.task-wrap .task-item .wrap uni-view[data-v-129a0b42]{line-height:1;margin-top:%?10?%}.task-wrap .task-item .btn[data-v-129a0b42]{height:%?60?%;line-height:%?60?%;border-radius:%?60?%;text-align:center;width:%?130?%;border:1px solid}',""]),t.exports=a},"349e":function(t,a,e){"use strict";var i=e("4ea4");e("e25e"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("a5a8")),s={data:function(){return{pointInfo:{point:0,totalPoint:0,totalConsumePoint:0,todayPoint:0}}},mixins:[n.default],onShow:function(){this.$langConfig.refresh(),uni.getStorageSync("token")?(this.getMemberPoint(),this.getMemberTotalPoint(),this.getMemberTotalConsumePoint(),this.getMemberTodayPoint()):this.$refs.login.open("/otherpages/member/point/point")},methods:{toSign:function(){this.$util.redirectTo("/otherpages/member/signin/signin")},getMemberPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(a){0==a.code&&(t.pointInfo.point=parseInt(a.data.point)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(a){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getMemberTotalPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"income"},success:function(a){0==a.code&&(t.pointInfo.totalPoint=parseInt(a.data))}})},getMemberTotalConsumePoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"pay"},success:function(a){0==a.code&&(t.pointInfo.totalConsumePoint=Math.abs(parseInt(a.data)))}})},getMemberTodayPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",start_time:new Date((new Date).toLocaleDateString()).getTime()/1e3,end_time:parseInt((new Date).getTime()/1e3)},success:function(a){0==a.code&&(t.pointInfo.todayPoint=Math.abs(parseInt(a.data)))}})},getMemberrechargeConfig:function(){var t=this;this.$api.sendRequest({url:"/memberrecharge/api/memberrecharge/config",success:function(a){a.code>=0&&a.data&&(t.memberrechargeConfig=a.data)}})}},onBackPress:function(t){return"navigateBack"!==t.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};a.default=s},"640b":function(t,a,e){"use strict";e.r(a);var i=e("c4e0"),n=e("a472");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("f248");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"129a0b42",null,!1,i["a"],o);a["default"]=c.exports},"7c62":function(t,a,e){var i=e("0b28");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("778226f4",i,!0,{sourceMap:!1,shadowMode:!1})},a472:function(t,a,e){"use strict";e.r(a);var i=e("349e"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},c4e0:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={loadingCover:e("a197").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"point",attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"head-wrap color-base-bg",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/point_bg.png")+")"}},[e("v-uni-view",{staticClass:"title"},[t._v("当前积分")]),e("v-uni-view",{staticClass:"point"},[t._v(t._s(t.pointInfo.point))]),e("v-uni-view",{staticClass:"flex-box"},[e("v-uni-view",{staticClass:"flex-item"},[e("v-uni-view",{staticClass:"num"},[t._v(t._s(t.pointInfo.totalPoint))]),e("v-uni-view",{staticClass:"font-size-tag"},[t._v("累计积分")])],1),e("v-uni-view",{staticClass:"flex-item"},[e("v-uni-view",{staticClass:"num"},[t._v(t._s(t.pointInfo.totalConsumePoint))]),e("v-uni-view",{staticClass:"font-size-tag"},[t._v("累计消费")])],1),e("v-uni-view",{staticClass:"flex-item"},[e("v-uni-view",{staticClass:"num"},[t._v(t._s(t.pointInfo.todayPoint))]),e("v-uni-view",{staticClass:"font-size-tag"},[t._v("今日获得")])],1)],1)],1),e("v-uni-view",{staticClass:"menu-wrap"},[e("v-uni-view",{staticClass:"menu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$util.redirectTo("/otherpages/member/point_detail/point_detail")}}},[e("v-uni-text",{staticClass:"iconfont iconjifen-"}),e("v-uni-text",{staticClass:"font-size-base"},[t._v("积分明细")])],1),e("v-uni-view",{staticClass:"menu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$util.redirectTo("/promotionpages/point/list/list")}}},[e("v-uni-text",{staticClass:"iconfont icondianpu"}),e("v-uni-text",{staticClass:"font-size-base"},[t._v("积分商城")])],1)],1),e("v-uni-view",{staticClass:"task-wrap"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",{staticClass:"box left"},[e("v-uni-text",{staticClass:"color-base-text iconfont iconAK-YKfangkuai_fill"}),e("v-uni-text",{staticClass:"color-base-text-light iconfont iconAK-YKfangkuai_fill "})],1),e("v-uni-text",{staticClass:"text"},[t._v("积分任务")]),e("v-uni-text",{staticClass:"box right"},[e("v-uni-text",{staticClass:"color-base-text iconfont iconAK-YKfangkuai_fill"}),e("v-uni-text",{staticClass:"color-base-text-light iconfont iconAK-YKfangkuai_fill"})],1)],1),e("v-uni-view",{staticClass:"task-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toSign.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon color-base-bg"},[e("v-uni-text",{staticClass:"iconfont iconqiandao1"})],1),e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",[t._v("每日签到")]),e("v-uni-view",{staticClass:"color-tip font-size-tag"},[t._v("连续签到可获得更多积分")])],1),e("v-uni-view",{staticClass:"btn color-base-text color-base-border"},[t._v("去签到")])],1),e("v-uni-view",{staticClass:"task-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$util.redirectTo("/pages/index/index/index")}}},[e("v-uni-view",{staticClass:"icon color-base-bg"},[e("v-uni-text",{staticClass:"iconfont iconshangpin-"})],1),e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",[t._v("购买商品")]),e("v-uni-view",{staticClass:"color-tip font-size-tag"},[t._v("购买商品可获得积分")])],1),e("v-uni-view",{staticClass:"btn color-base-text color-base-border"},[t._v("去下单")])],1)],1),e("loading-cover",{ref:"loadingCover"})],1)},s=[]},f248:function(t,a,e){"use strict";var i=e("7c62"),n=e.n(i);n.a}}]);