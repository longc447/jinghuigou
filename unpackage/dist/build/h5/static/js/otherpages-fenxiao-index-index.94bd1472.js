(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-index-index"],{"02ff":function(e,i,t){"use strict";t.r(i);var n=t("c728"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a},"0d8e":function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}));var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[e.bottom_info?t("v-uni-view",{staticClass:"ns-copyright-info"},[e.bottom_info.logo?t("v-uni-view",{staticClass:"ns-copyright-pic code-pic",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.link(e.bottom_info.copyright_link)}}},[t("v-uni-image",{attrs:{src:e.$util.img(e.bottom_info.logo),mode:"widthFix"}})],1):e._e()],1):t("v-uni-view",{staticClass:"ns-copyright-info",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.link("http://www.niushop.com")}}},[t("v-uni-view",{staticClass:"ns-copyright-pic"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/logo_copy.png"),mode:"widthFix"}})],1)],1)],1)},o=[]},1446:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(i){i.code>=0&&i.data&&(e.fenxiaoWords=i.data,uni.setStorageSync("fenxiaoWords",i.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords"))}};i.default=n},"1aa8":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,"[data-v-555d347e] .ns-copyright-info{margin-bottom:0}",""]),e.exports=i},"3a2d":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.fenxiao_index[data-v-555d347e]{position:relative;display:flex;flex-direction:column;align-items:center}.fenxiao_index_header[data-v-555d347e]{width:100%;position:relative;min-height:%?200?%;display:flex;justify-content:space-between;align-items:center;padding:%?50?% %?40?% 0;box-sizing:border-box}.fenxiao_index_header .member-pic[data-v-555d347e]{width:%?90?%;height:%?90?%;border-radius:50%;border:%?6?% solid #fff}.fenxiao_index_header .member-info[data-v-555d347e]{width:%?500?%;height:%?120?%;margin-left:%?16?%;display:flex;flex-direction:column;justify-content:center}.fenxiao_index_header .member-info uni-view[data-v-555d347e]{color:#fff}.fenxiao_index_header .member-info .member-info-box[data-v-555d347e]{display:flex;align-items:center;line-height:1}.fenxiao_index_header .member-info .name[data-v-555d347e]{font-size:%?32?%}.fenxiao_index_header .member-info .level_name[data-v-555d347e]{display:flex;align-items:center;justify-content:center;border:%?2?% solid #fff;color:#fff;height:%?34?%;font-size:%?20?%;padding:0 %?4?%;margin-left:%?16?%;line-height:%?38?%;border-radius:%?4?%}.fenxiao_index_header .member-info .recommend[data-v-555d347e]{font-size:%?24?%;margin-top:%?20?%;line-height:1;margin-bottom:%?10?%}.fenxiao_index_header .member-tixian[data-v-555d347e]{width:%?120?%;height:%?50?%;border:%?2?% solid #fff;border-radius:%?50?%;display:flex;justify-content:center;align-items:center;font-size:%?24?%;color:#fff}.fenxiao_index_header .code[data-v-555d347e]{width:%?50?%;height:%?50?%}.fenxiao_index_money[data-v-555d347e]{color:#fff;display:flex;justify-content:center;align-items:center;width:100%}.fenxiao_index_money .xian[data-v-555d347e]{height:%?40?%;border:%?2?% solid hsla(0,0%,100%,.5)}.fenxiao_index_money .index-money-item[data-v-555d347e]{padding:%?40?% 0;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.fenxiao_index_money .index-money-item .item_money[data-v-555d347e]{color:#fff;font-size:%?36?%;line-height:1}.fenxiao_index_money .index-money-item .item_tit[data-v-555d347e]{padding-top:%?10?%;font-size:%?24?%;color:#fff}.fenxiao-index-allmoney[data-v-555d347e]{display:flex;flex-direction:column;justify-content:space-between;margin-top:%?20?%;width:%?690?%;border-radius:%?10?%;background-color:#fff}.fenxiao-index-allmoney .allmoney-top[data-v-555d347e]{padding:%?30?%;display:flex;justify-content:space-between;align-items:center}.fenxiao-index-allmoney .allmoney-top .allmoney-top-money .total_commission[data-v-555d347e]{margin-bottom:%?10?%;line-height:1;font-size:%?28?%}.fenxiao-index-allmoney .allmoney-top .allmoney-top-btn[data-v-555d347e]{color:#fff;padding:%?12?% %?17?%;font-size:%?24?%;line-height:1;border-radius:%?24?%}.fenxiao-index-allmoney .allmoney-xian[data-v-555d347e]{width:100%;border-top:%?2?% solid #eee}.fenxiao-index-allmoney .allmoney-bottom[data-v-555d347e]{display:flex}.fenxiao-index-allmoney .allmoney-bottom .allmoney-today[data-v-555d347e]{padding:%?30?%;flex:1}.fenxiao-index-allmoney .allmoney-bottom .allmoney-today .today[data-v-555d347e]{margin-bottom:%?10?%;line-height:1;font-size:%?32?%}.fenxiao-index-allmoney .allmoney-bottom .allmoney-all-wrap[data-v-555d347e]{padding:%?30?%;flex:1}.fenxiao-index-allmoney .allmoney-bottom .allmoney-all-wrap .allmoney-all[data-v-555d347e]{margin-bottom:%?10?%;line-height:1;font-size:%?32?%}.fenxiao-index-other[data-v-555d347e]{padding:%?30?% 0;display:flex;margin-top:%?20?%;width:%?690?%;border-radius:%?10?%;background-color:#fff}.fenxiao-index-other .all-money-item[data-v-555d347e]{flex:1;margin-left:%?46?%;display:flex;font-size:%?24?%;align-items:center}.fenxiao-index-other .all-money-item .img-wrap[data-v-555d347e]{display:flex;justify-content:center;align-items:center;width:%?70?%;height:%?70?%}.fenxiao-index-other .all-money-item .img-wrap uni-image[data-v-555d347e]{width:100%;height:100%}.fenxiao-index-other .all-money-item .all-money-tit-wrap[data-v-555d347e]{margin-left:%?24?%;display:flex;flex-direction:column;justify-content:space-between;height:%?70?%}.fenxiao-index-other .all-money-item .all-money-tit-wrap .all-money-tit[data-v-555d347e]{line-height:1;color:#303133;font-size:%?28?%}.fenxiao-index-other .all-money-item .all-money-tit-wrap .all-money-num[data-v-555d347e]{color:#909399;font-size:%?26?%;line-height:1}.fenxiao_manu_list[data-v-555d347e]{display:flex;flex-direction:column;justify-content:center;width:%?690?%;margin-top:%?20?%;background-color:#fff;border-radius:%?10?%}.fenxiao_manu_list .title-wrap[data-v-555d347e]{display:flex;align-items:center;border-bottom:%?1?% solid #f7f7f7;padding:%?20?% %?40?%}.fenxiao_manu_list .title-wrap .title-img[data-v-555d347e]{width:%?30?%;height:%?30?%;display:flex;justify-content:center;align-items:center;margin-right:%?10?%}.fenxiao_manu_list .title-wrap .title-img uni-image[data-v-555d347e]{width:100%;height:100%}.fenxiao_manu_list .title-wrap .title[data-v-555d347e]{color:#333;font-size:%?28?%;padding-left:%?10?%;padding-left:%?5?%}.fenxiao_manu_list .content_manu[data-v-555d347e]{padding:%?20?% 0;width:100%;background:#fff;border-radius:%?10?%;box-sizing:border-box;display:flex;flex-wrap:wrap;padding-bottom:%?10?%}.fenxiao_manu_list .content_manu .manu-list[data-v-555d347e]{width:24.5%;height:%?150?%;padding:0 %?20?%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center}.fenxiao_manu_list .content_manu .manu-list uni-image[data-v-555d347e]{width:%?50?%;height:%?50?%;margin-bottom:%?15?%}.fenxiao_manu_list .content_manu .manu-list uni-text[data-v-555d347e]{font-size:%?26?%}.fenxiao_content .content_manu[data-v-555d347e]{width:100%;background:#fff;border-radius:%?15?%;box-sizing:border-box;display:flex;flex-wrap:wrap}.fenxiao_content .content_manu .manu-list[data-v-555d347e]{width:24.5%;height:%?150?%;display:inline-block;box-sizing:border-box}.fenxiao_content .content_manu .manu-list .manu-list-box[data-v-555d347e]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.fenxiao_content .content_manu .manu-list .manu-list-box uni-image[data-v-555d347e]{width:%?60?%;height:%?60?%;margin-bottom:%?15?%}.fenxiao_content .content_manu .manu-list .manu-list-box uni-text[data-v-555d347e]{font-size:%?24?%}.empty[data-v-555d347e]{width:100%;height:%?400?%;margin-top:%?200?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.empty uni-image[data-v-555d347e]{width:%?300?%;margin-bottom:%?50?%}.empty uni-text[data-v-555d347e]{font-size:%?24?%;font-weight:600}.empty uni-view[data-v-555d347e]{width:%?300?%;height:%?70?%;border-radius:%?70?%;text-align:center;line-height:%?70?%;color:#fff;margin-top:%?30?%}',""]),e.exports=i},4953:function(e,i,t){"use strict";t.r(i);var n=t("0d8e"),a=t("b355");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("e9b1");var s,l=t("f0c5"),d=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"7fd8cec0",null,!1,n["a"],s);i["default"]=d.exports},"5b8b":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.ns-copyright-info[data-v-7fd8cec0]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:%?14?%;margin-bottom:%?14?%}.ns-copyright-info .ns-copyright-pic uni-image[data-v-7fd8cec0]{width:%?160?%}.ns-copyright-info uni-text[data-v-7fd8cec0]{font-size:%?22?%;height:%?100?%;line-height:%?100?%;color:#909399!important}.ns-copyright-info .copyright-desc[data-v-7fd8cec0]{color:#e0e1e2;font-size:%?22?%;text-shadow:0 0 1px #fafafb}',""]),e.exports=i},"5cb2":function(e,i,t){"use strict";var n=t("b72c"),a=t.n(n);a.a},"61cf":function(e,i,t){"use strict";t.r(i);var n=t("93c0"),a=t("02ff");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("5cb2"),t("efe4");var s,l=t("f0c5"),d=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"555d347e",null,!1,n["a"],s);i["default"]=d.exports},"8e00":function(e,i,t){var n=t("1aa8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("d8cbbb3a",n,!0,{sourceMap:!1,shadowMode:!1})},"93c0":function(e,i,t){"use strict";t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}));var n={nsCopyright:t("4953").default,loadingCover:t("a197").default},a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"fenxiao_index",attrs:{"data-theme":e.themeStyle}},[e.info.fenxiao_name?[t("v-uni-view",{staticClass:"fenxiao_index_header color-base-bg"},[t("v-uni-image",{staticClass:"member-pic",attrs:{src:e.info.headimg?e.$util.img(e.info.headimg):e.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(i){arguments[0]=i=e.$handleEvent(i),e.info.headimg=e.$util.getDefaultImage().default_headimg}}}),t("v-uni-view",{staticClass:"member-info"},[t("v-uni-view",{staticClass:"member-info-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/level/level",{back:"/otherpages/fenxiao/index/index",redirect:"redirectTo"})}}},[t("v-uni-text",{staticClass:"name"},[e._v(e._s(e.info.fenxiao_name))]),t("v-uni-text",{staticClass:"level_name"},[e._v(e._s(e.info.level_name))])],1),t("v-uni-view",{staticClass:"recommend"},[e._v("推荐人："+e._s(e.info.parent_name?e.info.parent_name:"无"))])],1),t("v-uni-view",{staticClass:"manu-list-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/promote_code/promote_code")}}},[t("v-uni-image",{staticClass:"code",attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/code1.png"),mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"fenxiao_index_money color-base-bg"},[t("v-uni-view",{staticClass:"index-money-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/bill/bill")}}},[t("v-uni-view",{staticClass:"item_money"},[e._v(e._s(e.info.total_commission))]),t("v-uni-view",{staticClass:"item_tit"},[e._v("累计佣金 (元)")])],1),t("v-uni-view",{staticClass:"xian"}),t("v-uni-view",{staticClass:"index-money-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/withdraw_list/withdraw_list")}}},[t("v-uni-view",{staticClass:"item_money"},[e._v(e._s(e.info.account_withdraw))]),t("v-uni-view",{staticClass:"item_tit"},[e._v("累计提现 (元)")])],1),t("v-uni-view",{staticClass:"xian"}),t("v-uni-view",{staticClass:"index-money-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/withdraw_list/withdraw_list")}}},[t("v-uni-text",{staticClass:"item_money"},[e._v(e._s(e.info.account_withdraw_apply))]),t("v-uni-text",{staticClass:"item_tit"},[e._v(e._s(e.fenxiaoWords.withdraw)+"中（元）")])],1)],1),t("v-uni-view",{staticClass:"fenxiao-index-allmoney"},[t("v-uni-view",{staticClass:"allmoney-top"},[t("v-uni-view",{staticClass:"allmoney-top-money"},[t("v-uni-view",{staticClass:"total_commission color-base-text"},[e._v(e._s(e.info.account))]),t("v-uni-view",{staticClass:"font-size-sub"},[e._v("可"+e._s(e.fenxiaoWords.withdraw)+"（元）")])],1),t("v-uni-text",{staticClass:"allmoney-top-btn color-base-bg",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")}}},[e._v("申请提现")])],1),t("v-uni-view",{staticClass:"allmoney-xian"}),t("v-uni-view",{staticClass:"allmoney-bottom"},[t("v-uni-view",{staticClass:"allmoney-today"},[t("v-uni-view",{staticClass:"today font-size-base color-base-text"},[e._v(e._s(e.info.today_commission))]),t("v-uni-view",{staticClass:"font-size-sub"},[e._v("今日收入 (元)")])],1),t("v-uni-view",{staticClass:"allmoney-all-wrap"},[t("v-uni-view",{staticClass:"allmoney-all font-size-base color-base-text"},[e._v(e._s(e.info.today_order_money))]),t("v-uni-view",{staticClass:"font-size-sub"},[e._v("总销售额 (元)")])],1)],1)],1),t("v-uni-view",{staticClass:"fenxiao-index-other"},[t("v-uni-view",{staticClass:"all-money-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/team/team")}}},[t("v-uni-view",{staticClass:"img-wrap"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/team2.png"),mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:"all-money-tit-wrap"},[t("v-uni-text",{staticClass:"all-money-tit"},[e._v("我的团队")]),t("v-uni-text",{staticClass:"all-money-num"},[e._v(e._s(e.teamNum)+"人")])],1)],1),t("v-uni-view",{staticClass:"all-money-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/team/team")}}},[t("v-uni-view",{staticClass:"img-wrap"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/member.png"),mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:"all-money-tit-wrap"},[t("v-uni-text",{staticClass:"all-money-tit"},[e._v("推荐会员")]),t("v-uni-text",{staticClass:"all-money-num"},[e._v(e._s(e.info.one_child_num)+"人")])],1)],1)],1),t("v-uni-view",{staticClass:"fenxiao_manu_list"},[t("v-uni-view",{staticClass:"content_manu"},[t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/withdraw.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.withdraw))])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/withdraw_list/withdraw_list")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/tixian.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.withdraw)+"明细")])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/order/order")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/order.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.concept+"订单"))])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/team/team")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/team.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.my_team))])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/promote_code/promote_code")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/code.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v("推广海报")])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/diy/diy/diy?name=DIY_FENXIAO_MARKET")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/market.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.concept+"市场"))])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/follow/follow")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/collection.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v(e._s(e.fenxiaoWords.concept+"商品"))])],1),t("v-uni-view",{staticClass:"manu-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirectTo("/otherpages/fenxiao/bill/bill")}}},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/bill.png"),mode:"aspectFill"}}),t("v-uni-text",[e._v("账单")])],1)],1)],1)]:e._e(),t("v-uni-view",{staticClass:"margin-top"},[t("ns-copyright")],1),e.info.fenxiao_name?e._e():t("v-uni-view",{staticClass:"empty"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/index/no-fenxiao.png"),mode:"widthFix"}}),t("v-uni-text",[e._v("您还不是"+e._s(e.fenxiaoWords.fenxiao_name)+"，请先提交申请")]),t("v-uni-view",{staticClass:"color-base-bg",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/fenxiao/apply/apply")}}},[e._v("立即加入")])],1),t("loading-cover",{ref:"loadingCover"})],2)},o=[]},b355:function(e,i,t){"use strict";t.r(i);var n=t("e3c4"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a},b72c:function(e,i,t){var n=t("3a2d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("1f12ebae",n,!0,{sourceMap:!1,shadowMode:!1})},c728:function(e,i,t){"use strict";var n=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("1446")),o=n(t("a5a8")),s=n(t("4953")),l={data:function(){return{info:{fenxiao_name:""},teamNum:0}},components:{nsCopyRight:s.default},mixins:[a.default,o.default],onShow:function(){var e=this;this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),this.$langConfig.title(this.fenxiaoWords.concept+"中心"),uni.getStorageSync("token")?this.getFenxiaoDetail():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/index/index"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{redirectTo:function(e){-1==this.info.status?this.$util.showToast({title:"您的账户已被冻结"}):this.$util.redirectTo(e)},getFenxiaoDetail:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",success:function(i){i.data?(e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.info=i.data,e.getTeamNum()):e.$util.redirectTo("/otherpages/fenxiao/apply/apply",{},"redirectTo")},fail:function(i){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},goTixian:function(){this.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")},getTeamNum:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/teamnum",success:function(i){i.code>=0&&(e.teamNum=i.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};i.default=l},e12f:function(e,i,t){var n=t("5b8b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("18461f68",n,!0,{sourceMap:!1,shadowMode:!1})},e3c4:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{bottom_info:{}}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var e=this;this.$api.sendRequest({url:"/api/config/copyright",success:function(i){0==i.code&&i.data&&(e.bottom_info=i.data)}})},link:function(e){e&&this.$util.redirectTo("/otherpages/webview/webview",{link:encodeURIComponent(e)})}}};i.default=n},e9b1:function(e,i,t){"use strict";var n=t("e12f"),a=t.n(n);a.a},efe4:function(e,i,t){"use strict";var n=t("8e00"),a=t.n(n);a.a}}]);