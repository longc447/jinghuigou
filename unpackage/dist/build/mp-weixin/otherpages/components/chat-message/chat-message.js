(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/components/chat-message/chat-message"],{"2aad":function(e,t,n){"use strict";var a=n("c5a0"),i=n.n(a);i.a},"2f8f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a5a8")),i=o(n("c086")),s=o(n("cf78"));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){n.e("components/ns-chat/ns-chat-goods").then(function(){return resolve(n("7575"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/ns-chat/ns-chat-order").then(function(){return resolve(n("9be5"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/ns-chat/ns-chat-receiveGoods").then(function(){return resolve(n("6df8"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("fa04"))}.bind(null,n)).catch(n.oe)},f={name:"chat-message",props:{message:{type:Object},shopInfo:{type:Object},userInfo:{type:Object},send:{type:Boolean}},data:function(){return{avatar:"",defaultAvatar:this.$util.getDefaultImage().default_shop_img,myHeadImg:"",defaultHead:this.$util.getDefaultImage().default_headimg,emjoyList:s.default.emjoyList,currImg:""}},components:{nsChatGoods:u,nsChatOrder:r,uniPopup:l,nsChatReceiveGoods:c},mixins:[a.default],mounted:function(){this.avatar=this.$util.img(this.shopInfo.logo),this.myHeadImg=this.$util.img(this.userInfo.headimg)},methods:{previewMedia:function(t){var n=[t];e.previewImage({current:0,urls:n})},sendGood:function(){this.$emit("sendGood","goods")},sendOrder:function(){this.$emit("sendOrder","order")},stringToEmjoy:function(e){var t=this;if(e){var n=RegExp(/\[/);if(n.test(e)){var a=e,s=new RegExp("\\[emjoy_(.+?)\\]","g"),o=a.replace(s,(function(e){var n="";for(var a in t.emjoyList)if(e==a){var i=t.$util.img(t.emjoyList[a]);n="<img class='message-img' src='"+i+"'/>";break}return n||e})),u=(0,i.default)(o);return u.forEach((function(e){"img"==e.name&&(e.attrs.style="display: inline-block;width: 18px !important;height: 18px !important;padding:0 1px;")})),u}var r=e;return r}}}};t.default=f}).call(this,n("543d")["default"])},"5c3a":function(e,t,n){"use strict";n.r(t);var a=n("2f8f"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"6e40":function(e,t,n){"use strict";n.r(t);var a=n("7f38"),i=n("5c3a");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("2aad");var o,u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=r.exports},"7f38":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"fa04"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,"string"==e.message.contentType&&!e.message.isItMe&&e.message.avatar?e.$util.img(e.message.avatar):null),a="string"==e.message.contentType?e.stringToEmjoy(e.message.content):null,i="image"==e.message.contentType&&!e.message.isItMe&&e.message.avatar?e.$util.img(e.message.avatar):null,s="image"==e.message.contentType?e.$util.img(e.message.image):null,o="image"==e.message.contentType?e.$util.img(e.message.image):null,u=e.$util.img(e.currImg);e.$mp.data=Object.assign({},{$root:{g0:n,m0:a,g1:i,g2:s,g3:o,g4:u}})},s=[]},c5a0:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'otherpages/components/chat-message/chat-message-create-component',
    {
        'otherpages/components/chat-message/chat-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6e40"))
        })
    },
    [['otherpages/components/chat-message/chat-message-create-component']]
]);