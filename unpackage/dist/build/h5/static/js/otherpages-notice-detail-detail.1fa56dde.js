(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-detail-detail"],{"183a":function(e,t,n){"use strict";n.r(t);var i=n("336b"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"336b":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("c086")),r=i(n("a5a8")),o={data:function(){return{noticeId:0,content:"",detail:{}}},mixins:[r.default],onLoad:function(e){var t=this;e.notice_id?this.noticeId=e.notice_id:this.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),this.$api.sendRequest({url:"/api/notice/info",data:{id:this.noticeId},success:function(e){0==e.code?e.data?(t.detail=e.data,t.content=(0,a.default)(e.data.content),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo")}),1e3))},fail:function(e){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onShow:function(){this.$langConfig.refresh()},onShareAppMessage:function(e){var t="[公告]"+this.detail.title,n="/otherpages/notice/detail/detail?notice_id="+this.noticeId;return{title:t,path:n,success:function(e){},fail:function(e){}}}};t.default=o},"77e7":function(e,t,n){"use strict";n.r(t);var i=n("7a52"),a=n("183a");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("e738");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"c308d98e",null,!1,i["a"],o);t["default"]=s.exports},"7a52":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={loadingCover:n("a197").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page",attrs:{"data-theme":e.themeStyle}},[n("v-uni-view",{staticClass:"notice-title"},[e._v(e._s(e.detail.title))]),n("v-uni-view",{staticClass:"notice-content"},[n("v-uni-rich-text",{attrs:{nodes:e.content}})],1),n("v-uni-view",{staticClass:"notice-meta"},[n("v-uni-text",{staticClass:"notice-time"},[e._v("发表时间: "+e._s(e.$util.timeStampTurnTime(e.detail.create_time)))])],1),n("loading-cover",{ref:"loadingCover"})],1)},r=[]},c086:function(e,t,n){"use strict";var i=n("4ea4");n("c975"),n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("f972")),r=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,o=/^<\/([-A-Za-z0-9_]+)[^>]*>/,c=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=g("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l=g("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=g("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=g("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),h=g("script,style");function p(e,t){var n,i,a,p=[],g=e;p.last=function(){return this[this.length-1]};while(e){if(i=!0,p.last()&&h[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""})),b("",p.last());else if(0==e.indexOf("\x3c!--")?(n=e.indexOf("--\x3e"),n>=0&&(t.comment&&t.comment(e.substring(4,n)),e=e.substring(n+3),i=!1)):0==e.indexOf("</")?(a=e.match(o),a&&(e=e.substring(a[0].length),a[0].replace(o,b),i=!1)):0==e.indexOf("<")&&(a=e.match(r),a&&(e=e.substring(a[0].length),a[0].replace(r,m),i=!1)),i){n=e.indexOf("<");var v=n<0?e:e.substring(0,n);e=n<0?"":e.substring(n),t.chars&&t.chars(v)}if(e==g)throw"Parse Error: "+e;g=e}function m(e,n,i,a){if(n=n.toLowerCase(),l[n])while(p.last()&&d[p.last()])b("",p.last());if(u[n]&&p.last()==n&&b("",n),a=s[n]||!!a,a||p.push(n),t.start){var r=[];i.replace(c,(function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";r.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(n,r,a)}}function b(e,n){if(n){for(i=p.length-1;i>=0;i--)if(p[i]==n)break}else var i=0;if(i>=0){for(var a=p.length-1;a>=i;a--)t.end&&t.end(p[a]);p.length=i}}b()}function g(e){for(var t={},n=e.split(","),i=0;i<n.length;i++)t[n[i]]=!0;return t}function v(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function m(e){e=e.replace(/<!--[\s\S]*-->/gi,"");return e}function b(e){e=e.replace(/\\/g,"").replace(/<img/g,'<img style="width:100% !important;display:block;"');return e=e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,t){return'<img style="width:100% !important;display:block;" src="'+a.default.img(t)+'"/>'})),e}function w(e){e=e.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(e,t){return e=e.replace(/[:](\s?)[\s\S]*/gi,(function(e,t){return e.replace(/"/g,"'")})),e}));return e}function x(e){return e.reduce((function(e,t){var n=t.value,i=t.name;return e[i]?e[i]=e[i]+" "+n:e[i]=n,e}),{})}function _(e){e=v(e),e=m(e),e=b(e),e=w(e);var t=[],n={node:"root",children:[]};return p(e,{start:function(e,i,a){var r={name:e};if(0!==i.length&&(r.attrs=x(i)),a){var o=t[0]||n;o.children||(o.children=[]),o.children.push(r)}else t.unshift(r)},end:function(e){var i=t.shift();if(i.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)n.children.push(i);else{var a=t[0];a.children||(a.children=[]),a.children.push(i)}},chars:function(e){var i={type:"text",text:e};if(0===t.length)n.children.push(i);else{var a=t[0];a.children||(a.children=[]),a.children.push(i)}},comment:function(e){var n={node:"comment",text:e},i=t[0];i.children||(i.children=[]),i.children.push(n)}}),n.children}var y=_;t.default=y},e738:function(e,t,n){"use strict";var i=n("ed7b"),a=n.n(i);a.a},ed6a:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.page[data-v-c308d98e]{width:100%;height:100%;padding:%?20?%;box-sizing:border-box;background-color:#fff}.notice-title[data-v-c308d98e]{font-size:%?32?%;text-align:center}.notice-content[data-v-c308d98e]{margin-top:%?20?%;word-break:break-all;font-size:%?28?%}.notice-meta[data-v-c308d98e]{text-align:right;margin-top:%?20?%;color:#909399}.notice-meta .notice-time[data-v-c308d98e]{font-size:%?24?%}',""]),e.exports=t},ed7b:function(e,t,n){var i=n("ed6a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("681a11d0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);