(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-verification-index-index"],{2442:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Weixin=void 0;var t=function(){var e=i("b0db");this.init=function(n){e.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay","openAddress","updateAppMessageShareData","updateTimelineShareData","scanQRCode"]})},this.pay=function(n,i){e.ready((function(){e.chooseWXPay({timestamp:n.timestamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){"function"==typeof i&&i(e)}})}))},this.openAddress=function(n){e.ready((function(){e.openAddress({success:function(e){"function"==typeof n&&n(e)},fail:function(e){alert(JSON.stringify(e))}})}))},this.setShareData=function(n,i){e.ready((function(){e.updateAppMessageShareData({title:n.title||"",desc:n.desc||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof i&&i(res)}}),e.updateTimelineShareData({title:n.title||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof i&&i(res)}})}))},this.scanQRCode=function(n){e.ready((function(){e.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){"function"==typeof n&&n(e)}})}))}};n.Weixin=t},"423f":function(e,n,i){"use strict";var t=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(i("a5a8")),o=t(i("2442")),r={data:function(){return{operationType:"manualInput",verify_code:"",isFocus:!1}},mixins:[a.default],onShow:function(){this.$langConfig.refresh(),uni.getStorageSync("token")?this.checkIsVerifier():this.$util.redirectTo("/pages/member/index/index",{},"reLaunch")},methods:{focus:function(){this.isFocus=!this.isFocus},scanCode:function(){var e=this;if(this.$util.isWeiXin()){if("ios"==uni.getSystemInfoSync().platform)var n=uni.getStorageSync("initUrl");else n=location.href;this.$api.sendRequest({url:"/wechat/api/wechat/jssdkconfig",data:{url:n},success:function(n){if(0==n.code){var i=new o.default;i.init(n.data),i.scanQRCode((function(e){e.resultStr&&(location.href=e.resultStr)}))}else e.$util.showToast({title:n.message})}})}},changeOperationType:function(e){"sweepCode"!=e||this.$util.isWeiXin()?this.operationType=e:this.$util.showToast({title:"H5端不支持扫码核销"})},checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(n){if(-1==n.code&&"TOKEN_ERROR"==n.error_code){e.$util.showToast({title:"登录失败"});var i=getCurrentPages(),t=i[i.length-1].options,a=i[i.length-1].route;return t.back=a,void setTimeout((function(){e.$util.redirectTo("/pages/login/login/login",t)}),1e3)}n.data||(e.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3))}})},confirm:function(){var e=this,n=/[\S]+/;if(!n.test(this.verify_code))return this.$util.showToast({title:"请输入核销码"}),!1;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.verify_code},success:function(n){n.code>=0?e.$util.redirectTo("/otherpages/verification/detail/detail",{code:e.verify_code}):e.$util.showToast({title:n.message})}})}}};n.default=r},"4fa5":function(e,n,i){"use strict";var t=i("9124"),a=i.n(t);a.a},"5d9f":function(e,n,i){"use strict";i.r(n);var t=i("423f"),a=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(n,e,(function(){return t[e]}))}(o);n["default"]=a.a},9124:function(e,n,i){var t=i("cd4e");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=i("4f06").default;a("4948f3a7",t,!0,{sourceMap:!1,shadowMode:!1})},9523:function(e,n){function i(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}e.exports=i},b0db:function(e,n,i){var t;i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var a=i("9523");!function(a,o){t=function(){return o(a)}.call(n,i,n,e),void 0===t||(e.exports=t)}(window,(function(e,n){if(!e.jWeixin){var i,t,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var n in o)e[o[n]]=n;return e}(),c=e.document,s=c.title,d=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),l=!(!u.match("mac")&&!u.match("win")),p=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),g=-1!=d.indexOf("android"),m=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(t=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?t[1]:"",v={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:g?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},y={},S={_completes:[]},_={state:0,data:{}};R((function(){v.initEndTime=E()}));var x=!1,T=[],I=(i={config:function(n){L("config",y=n);var i=!1!==y.check;R((function(){if(i)C(o.config,{verifyJsApiList:O(y.jsApiList),verifyOpenTagList:O(y.openTagList)},function(){S._complete=function(e){v.preVerifyEndTime=E(),_.state=1,_.data=e},S.success=function(e){w.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):_.state=-1};var e=S._completes;return e.push((function(){!function(){if(!(l||p||y.debug||h<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=v.initEndTime-v.initStartTime,w.preVerifyTime=v.preVerifyEndTime-v.preVerifyStartTime,I.getNetworkType({isInnerInvoke:!0,success:function(n){w.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=i}})}}()})),S.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();S._completes=[]},S}()),v.preVerifyStartTime=E();else{_.state=1;for(var e=S._completes,n=0,t=e.length;n<t;++n)e[n]();S._completes=[]}})),I.invoke||(I.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,P(i),t)},I.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=_.state?e():(S._completes.push(e),!f&&y.debug&&e())},error:function(e){h<"6.0.2"||(-1==_.state?e(_.data):S._fail=e)},checkJsApi:function(e){C("checkJsApi",{jsApiList:O(e.jsApiList)},(e._complete=function(e){if(g){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=r[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){M(o.onMenuShareTimeline,{complete:function(){C("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(o.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?C("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):C("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(o.onMenuShareQQ,{complete:function(){C("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(o.onMenuShareWeibo,{complete:function(){C("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(o.onMenuShareQZone,{complete:function(){C("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){C("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){C("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){C("startRecord",{},e)},stopRecord:function(e){C("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){C("playVoice",{localId:e.localId},e)},pauseVoice:function(e){C("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){C("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){C("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){C("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){C("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){C("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){C(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){C("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){C("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,C("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,0<T.length){var n=T.shift();wx.getLocalImgData(n)}},e))):T.push(e)},getNetworkType:function(e){C("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),a=n.substring(t+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){C("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},a(i,"getLocation",(function(e){C(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),a(i,"hideOptionMenu",(function(e){C("hideOptionMenu",{},e)})),a(i,"showOptionMenu",(function(e){C("showOptionMenu",{},e)})),a(i,"closeWindow",(function(e){C("closeWindow",{},e=e||{})})),a(i,"hideMenuItems",(function(e){C("hideMenuItems",{menuList:e.menuList},e)})),a(i,"showMenuItems",(function(e){C("showMenuItems",{menuList:e.menuList},e)})),a(i,"hideAllNonBaseMenuItem",(function(e){C("hideAllNonBaseMenuItem",{},e)})),a(i,"showAllNonBaseMenuItem",(function(e){C("showAllNonBaseMenuItem",{},e)})),a(i,"scanQRCode",(function(e){C("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),a(i,"openAddress",(function(e){C(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),a(i,"openProductSpecificView",(function(e){C(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),a(i,"addCard",(function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var r=n[t],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}C(o.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var a=n[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))})),a(i,"chooseCard",(function(e){C("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),a(i,"openCard",(function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var r=n[t],c={card_id:r.cardId,code:r.code};i.push(c)}C(o.openCard,{card_list:i},e)})),a(i,"consumeAndShareCard",(function(e){C(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),a(i,"chooseWXPay",(function(e){C(o.chooseWXPay,A(e),e)})),a(i,"openEnterpriseRedPacket",(function(e){C(o.openEnterpriseRedPacket,A(e),e)})),a(i,"startSearchBeacons",(function(e){C(o.startSearchBeacons,{ticket:e.ticket},e)})),a(i,"stopSearchBeacons",(function(e){C(o.stopSearchBeacons,{},e)})),a(i,"onSearchBeacons",(function(e){M(o.onSearchBeacons,e)})),a(i,"openEnterpriseChat",(function(e){C("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),a(i,"launchMiniProgram",(function(e){C("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),a(i,"openBusinessView",(function(e){C("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),a(i,"miniProgram",{navigateBack:function(e){e=e||{},R((function(){C("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){R((function(){C("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){R((function(){C("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){R((function(){C("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){R((function(){C("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){R((function(){C("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){R((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),i),k=1,b={};return c.addEventListener("error",(function(e){if(!g){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=k++,n["wx-id"]=a),b[a])return;b[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(b[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=I),I}function C(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,P(i),(function(e){V(n,e,t)})):L(n,t)}function M(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),V(n,e,i)})):L(n,t||i)}function P(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=r[i];t&&(i=t);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",y.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var a=t.indexOf(":");switch(t.substring(a+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function O(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],a=o[t];a&&(e[n]=a)}return e}}function L(e,n){if(!(!y.debug||n&&n.isInnerInvoke)){var i=r[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function E(){return(new Date).getTime()}function R(n){f&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}))},b57f:function(e,n,i){"use strict";var t;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"container",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"action-wrap"},[i("v-uni-view",{staticClass:"record-wrap color-base-text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.$util.redirectTo("/otherpages/verification/list/list")}}},[i("v-uni-text",{staticClass:"iconfont iconjilu color-base-text"}),i("v-uni-text",[e._v("核销记录")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"sweepCode"==e.operationType,expression:"operationType == 'sweepCode'"}],staticClass:"sweep-code ns-gradient-otherpages-member-balance-balance-rechange",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.scanCode.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"manualInput"==e.operationType,expression:"operationType == 'manualInput'"}],staticClass:"manual-input"},[i("v-uni-view",{staticClass:"process-wrap"},[i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconshurutianxiebi color-base-text"})],1),i("v-uni-view",{staticClass:"_text"},[e._v("输入核销码")])],1),i("v-uni-view",[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconjiang-copy color-tip"})],1)],1),i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconhexiao color-base-text"})],1),i("v-uni-view",{staticClass:"_text"},[e._v("核销")])],1)],1),i("v-uni-input",{staticClass:"_input",attrs:{type:"text",value:"",placeholder:"请输入核销码","placeholder-class":"_placeholder",focus:e.isFocus},model:{value:e.verify_code,callback:function(n){e.verify_code=n},expression:"verify_code"}}),i("v-uni-view",{staticClass:"_btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)}}},[i("v-uni-button",{attrs:{type:"primary"}},[e._v("确认")])],1)],1)],1),i("v-uni-view",{staticClass:"arc-edge"}),i("v-uni-view",{staticClass:"action-type-wrap"},[i("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeOperationType("sweepCode")}}},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),i("v-uni-view",{staticClass:"_text"},[e._v("扫码核销")])],1),i("v-uni-view",{staticClass:"iconfont icontiaoxingmasaomiao ns-gradient-otherpages-member-balance-balance-rechange"}),i("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeOperationType("manualInput")}}},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconshuru"})],1),i("v-uni-view",{staticClass:"_text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.focus.apply(void 0,arguments)}}},[e._v("手动输入")])],1)],1)],1)},o=[]},cd4e:function(e,n,i){var t=i("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.container[data-v-c8d3e83e]{width:100vw;height:100vh}.container .action-wrap[data-v-c8d3e83e]{padding:%?100?% 0;background:#fff;position:relative}.container .action-wrap .record-wrap[data-v-c8d3e83e]{position:absolute;top:%?30?%;right:%?30?%}.container .action-wrap .record-wrap .iconfont[data-v-c8d3e83e]{font-size:%?24?%;margin-right:%?10?%}.container .action-wrap .sweep-code[data-v-c8d3e83e]{width:%?400?%;height:%?400?%;box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);border-radius:50%;margin:0 auto;text-align:center;line-height:%?400?%}.container .action-wrap .sweep-code .iconfont[data-v-c8d3e83e]{color:#fff;font-size:%?150?%}.container .action-wrap .manual-input[data-v-c8d3e83e]{width:70%;margin:auto}.container .action-wrap .manual-input .process-wrap[data-v-c8d3e83e]{height:%?150?%;display:flex;padding-top:%?60?%}.container .action-wrap .manual-input .process-wrap .wrap[data-v-c8d3e83e]{flex:1;text-align:center}.container .action-wrap .manual-input .process-wrap .wrap ._icon[data-v-c8d3e83e]{width:%?60?%;height:%?60?%;background:#eee;border-radius:50%;margin:0 auto;color:#909399}.container .action-wrap .manual-input .process-wrap .wrap ._icon .iconfont[data-v-c8d3e83e]{font-size:%?32?%}.container .action-wrap .manual-input .process-wrap .wrap ._text[data-v-c8d3e83e]{font-size:%?24?%;margin-top:%?10?%;color:#909399}.container .action-wrap .manual-input ._input[data-v-c8d3e83e]{height:%?80?%;border:1px solid #eee;border-radius:%?8?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._placeholder[data-v-c8d3e83e]{font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._btn[data-v-c8d3e83e]{margin-top:%?40?%;height:%?80?%;line-height:%?80?%}.container .arc-edge[data-v-c8d3e83e]{width:100%;height:%?80?%;background:#fff;border-radius:%?400?%/%?40?%;\n  /*上下有弧度的边*/-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container .action-type-wrap[data-v-c8d3e83e]{width:70%;height:%?90?%;background:#fff;border-radius:%?90?%;display:flex;position:relative;box-shadow:0 6px 6px 0 rgba(0,0,0,.03),0 4px 2px 0 rgba(0,0,0,.04);margin:%?100?% auto}.container .action-type-wrap .action[data-v-c8d3e83e]{flex:1;text-align:center;color:#303133}.container .action-type-wrap .action ._icon[data-v-c8d3e83e]{line-height:25px;height:25px}.container .action-type-wrap .action ._text[data-v-c8d3e83e]{font-size:%?24?%;line-height:1}.container .action-type-wrap .icontiaoxingmasaomiao[data-v-c8d3e83e]{width:%?110?%;height:%?110?%;border-radius:50%;-webkit-transform:translateY(%?-10?%);transform:translateY(%?-10?%);box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);color:#fff;text-align:center;line-height:%?110?%;font-size:%?32?%}',""]),e.exports=n},f86a:function(e,n,i){"use strict";i.r(n);var t=i("b57f"),a=i("5d9f");for(var o in a)"default"!==o&&function(e){i.d(n,e,(function(){return a[e]}))}(o);i("4fa5");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,"c8d3e83e",null,!1,t["a"],r);n["default"]=s.exports}}]);