(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/chat/room/room"],{"080a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("a34a")),s=r(i("9959")),n=r(i("cf78")),a=r(i("a5a8"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i,o,s,n,a){try{var r=t[n](a),c=r.value}catch(d){return void i(d)}r.done?e(c):Promise.resolve(c).then(o,s)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(o,s){var n=t.apply(e,i);function a(t){c(n,o,s,a,r,"next",t)}function r(t){c(n,o,s,a,r,"throw",t)}a(void 0)}))}}var u=function(){Promise.all([i.e("common/vendor"),i.e("otherpages/components/chat-message/chat-message")]).then(function(){return resolve(i("6e40"))}.bind(null,i)).catch(i.oe)},l={components:{chatMessage:u},data:function(){return{emjoyList:n.default.emjoyList,emjoyShow:!1,chatMore:!1,formData:{content:"",goods_id:0,order_id:0,image:""},isNetWork:!1,send:!1,messageList:[],page:1,isAll:!1,isLoading:0,showLoading:!1,jumpBottom:null,scrollTop:0,scrollPosition:0,siteId:0,skuId:0,orderId:0,siteName:"",shopInfo:{},userInfo:{},style:{},inputFirst:0,inputShow:!1,inputOffsetBottom:0,goods_type:{promotion_name:"",promotion_id:""}}},mixins:[s.default,a.default],computed:{chatBottom:function(){return this.emjoyShow||this.chatMore||this.inputShow}},onLoad:function(e){if(!e.site_id)return this.$util.showToast({title:"缺少必要参数"}),void setTimeout((function(){t.navigateBack()}),1e3);this.siteId=e.site_id,this.getShopInfo(),this.skuId=e.sku_id?e.sku_id:0,this.orderId=e.order_id?e.order_id:0,(this.skuId||this.orderId)&&(this.send=!0),e.type?this.goods_type.promotion_name=e.type:this.goods_type.promotion_name="",e.type_id?this.goods_type.promotion_id=e.type_id:this.goods_type.promotion_id="",t.getStorageSync("token")?(this.getUserInfo(),this.inputFirst=0,this.inputShow=!1,this.inputOffsetBottom=0):this.$util.redirectTo("/pages/login/login/login")},onReady:function(){var e=this;t.onKeyboardHeightChange((function(t){e.inputOffsetBottom=t.height,0===t.height&&(e.focus=!1)}))},methods:{onEditorReady:function(){t.createSelectorQuery().select("#editor").context((function(t){})).exec()},onEditorinput:function(){var e=this;t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.getContents({success:function(t){e.formData.content=t.html}})})).exec()},openChatMore:function(){var t=this;this.$util.isAndroid&&(this.inputShow=!1,this.inputFirst=1),this.chatMore=!this.chatMore,this.emjoyShow=!1,this.$nextTick((function(){t.setPageScrollTo()}))},getShopInfo:function(){var e=this;0==this.siteId?(this.siteName="平台客服",t.setNavigationBarTitle({title:this.siteName})):this.$api.sendRequest({url:"/api/shop/info",data:{site_id:this.siteId},success:function(i){0==i.code&&(e.shopInfo=i.data,e.siteName=i.data.site_name,t.setNavigationBarTitle({title:e.siteName}))}})},getUserInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){0==e.code&&(t.userInfo=e.data)}})},getChatList:function(){var t=this;this.isAll?t.mescroll&&t.mescroll.endSuccess():this.isLoading||(this.isLoading=!0,console.log(this.page,"this.page"),1==this.page&&(this.messageList=[]),this.$api.sendRequest({url:"/servicer/api/chat/dialogs",data:{servicer_id:this.servicer_id,page:this.page,limit:7,site_id:t.siteId},success:function(e){if(t.page+=1,console.log(t.page,"this.page"),e.code>=0&&e.data){console.log(e.data.list.length,"res.data.list"),e.data.list&&e.data.list.length<5&&(t.isAll=!0);var i=0;this.messageList&&(i=this.messageList.slice(-1).id+1);var o=[];if(t.skuId){var s={id:i,isItMe:!0,contentType:"sendGood",sku_id:t.skuId};o.push(s),i+=1}var n=e.data.list;if(console.log(n,"arr"),n.length)for(var a=0;a<n.length;a++){var r={};0==n[a].content_type?(r.id=i,r.content=0==n[a].type?n[a].consumer_say:n[a].servicer_say,r.isItMe=0==n[a].type,r.contentType="string",r.sendStatus=!0,console.log(n[a],"arr[i]"),n[a].avatar?r.avatar=n[a].avatar:r.avatar=n[a].logo):1==n[a].content_type?(r.id=i,r.isItMe=0==n[a].type,1!=n[a].type?r.contentType="goods":r.contentType="goodssku",r.sku_id=n[a].goods_sku_id,r.send=!1,r.sendStatus=!0,n[a].avatar?r.avatar=n[a].avatar:r.avatar=n[a].logo):2==n[a].content_type?(r.id=i,r.isItMe=0==n[a].type,r.contentType="order",r.order_id=n[a].order_id,r.send=!1,r.sendStatus=!0,n[a].avatar?r.avatar=n[a].avatar:r.avatar=n[a].logo):3==n[a].content_type&&(r.id=i,r.isItMe=0==n[a].type,r.contentType="image",r.id=i,r.image=0==n[a].type?n[a].consumer_say:n[a].servicer_say,r.sendStatus=!0,n[a].avatar?r.avatar=n[a].avatar:r.avatar=n[a].logo),o.push(r),i+=1}if(2==t.page){var c={};c.id=i,t.servicer_id>0?c.contentType="online":0==t.servicer_id&&(c.contentType="noline"),o.push(c),i+=1}t.isLoading=!1,console.log(t.messageList,"that.messageList"),console.log(o,"newArr"),o.length&&(t.messageList=o.concat(t.messageList),t.$nextTick((function(){if(2==t.page)t.setPageScrollTo();else{var e="#chat"+o.length;t.setPageScrollTo(e)}})))}else this.$util.showToast({title:e.message})}}))},setPageScrollTo:function(e){if(e){var i=t.createSelectorQuery().in(this).select(e);i.boundingClientRect((function(e){t.pageScrollTo({scrollTop:e.top-30,duration:0})})).exec()}else{var o=t.createSelectorQuery().in(this);o.select(".room-content-box").boundingClientRect((function(e){t.pageScrollTo({scrollTop:e.height-30,duration:0})})).exec()}},sendGood:function(t,e){this.sendMsg("goods"),this.messageList.splice(e,1)},sendOrder:function(t,e){this.sendMsg("order"),this.messageList.splice(e,1)},sendMsg:function(e){if(!this.isNetWork){this.isNetWork=!0;var i=this;if("goods"==e){var o={};""!=this.goods_type.promotion_id&&(o.promotion_id=this.goods_type.promotion_id,o.promotion_name=this.goods_type.promotion_name),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{goods_id:this.skuId,servicer_id:this.servicer_id,content_type:1,site_id:this.siteId,relate_data:JSON.stringify(o)},success:function(t){i.send=!1,i.joinData("send","goods")},complete:function(){i.isNetWork=!1}})}else if("order"==e)this.$api.sendRequest({url:"/servicer/api/chat/say",data:{order_id:this.orderId,servicer_id:this.servicer_id,site_id:this.siteId,content_type:2},success:function(t){i.send=!1,i.joinData("send","order")},complete:function(){i.isNetWork=!1}});else if("image"==e)i.joinData("send","image"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.image.trim(),servicer_id:this.servicer_id,site_id:this.siteId,content_type:3},success:function(t){console.log(t,"图片上传成功")},error:function(){var e=this;i.messageList[i.messageList.length-1].sendStatus=!1,t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.clear()})).exec()},complete:function(){i.isNetWork=!1}});else{console.log(this.formData.content,"this.formData.content");var s=this.formData.content,n=s.replace(/<p>/,""),a=n.replace(/<\/p>/,""),r=a.replace(/<br>/,"");if("<p></p>"==s||"<p><br></p>"==s||!r.trim())return this.$util.showToast({title:"发送内容不能为空"}),t.createSelectorQuery().select("#editor").context((function(t){i.editorCtx=t.context,i.editorCtx.clear()})).exec(),void(i.isNetWork=!1);i.joinData("send","string"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.content,servicer_id:this.servicer_id,site_id:this.siteId,content_type:0},success:function(e){var o=this;console.log(e,"文字上传成功"),i.formData.content="<p></p>",t.createSelectorQuery().select("#editor").context((function(t){o.editorCtx=t.context,o.editorCtx.clear()})).exec()},error:function(){var e=this;i.messageList[i.messageList.length-1].sendStatus=!1,t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.clear()})).exec()},complete:function(){i.isNetWork=!1}})}}},joinData:function(t,e){var i=this;return d(o.default.mark((function s(){var n;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:"send"==t&&(n={isItMe:!0,contentType:e,sendStatus:!0},"string"==e?n.content=i.formData.content:"order"==e?n.order_id=i.orderId:"goods"==e?n.sku_id=i.skuId:"image"==e&&(n.image=i.formData.image),i.messageList.push(n),i.$nextTick((function(){i.setPageScrollTo()})));case 1:case"end":return o.stop()}}),s)})))()},hideLoadTips:function(t){var e=this;t?(this.ajax.loadText="消息获取成功",setTimeout((function(){e.ajax.loading=!1}),300)):(this.ajax.loading=!0,this.ajax.loadText="正在获取消息")},onPageScroll:function(t){t.scrollTop<5&&t.scrollTop>=0&&this.getChatList()},inputFocus:function(t){var e=this;this.$util.isAndroid()&&this.inputFirst&&(this.inputShow=!0),this.chatMore=!1,this.$nextTick((function(){e.setPageScrollTo()}))},closePopWindow:function(){this.inputFirst=0,this.chatMore=!1,this.inputShow=!1},openEmjoy:function(){var t=this;console.log(this.emjoyShow,"this.emjoyShow"),this.chatMore=!1,this.emjoyShow=!this.emjoyShow,this.$nextTick((function(){t.setPageScrollTo()}))},addEmjoy:function(e,i){var o=this;t.createSelectorQuery().select("#editor").context((function(t){o.editorCtx=t.context,o.editorCtx.getContents({success:function(t){"<p><br></p>"==t.html&&(t.html="<p></p>");var i=o.$util.img(e),s="<img src="+i+' style="height="20px; width=20px; margin-left=20px;">',n=t.html.replace(/<\/p>$/,s+"</p>");o.editorCtx.setContents({html:n}),o.formData.content=n,o.emjoyShow=!1}})})).exec()},addImg:function(){var t=this;this.$util.upload(1,{path:"chatimg"},(function(e){t.formData.image=e[0],t.sendMsg("image")}),"/servicer/api/chat/chatimg")}},beforeDestroy:function(){clearInterval(this.timeoutObj),this.timeoutObj=null,this.$api.sendRequest({url:"/servicer/api/chat/bye",data:{servicer_id:this.servicer_id,site_id:this.siteId},success:function(e){t.closeSocket()}})}};e.default=l}).call(this,i("543d")["default"])},3300:function(t,e,i){"use strict";(function(t){i("f871");o(i("66fd"));var e=o(i("6874"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},6874:function(t,e,i){"use strict";i.r(e);var o=i("6bb9"),s=i("fd31");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("db4e");var a,r=i("f0c5"),c=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},"6bb9":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.emjoyShow?t.__map(t.emjoyList,(function(e,i){var o=t.__get_orig(e),s=t.$util.img(e);return{$orig:o,g0:s}})):null);t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[]},db4e:function(t,e,i){"use strict";var o=i("f66e"),s=i.n(o);s.a},f66e:function(t,e,i){},fd31:function(t,e,i){"use strict";i.r(e);var o=i("080a"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a}},[["3300","common/runtime","common/vendor"]]]);