(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-count-down/uni-count-down"],{"03e1":function(t,n,e){},1043:function(t,n,e){"use strict";e.r(n);var o=e("5898"),i=e("bc64");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("d5c9");var u,r=e("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},5898:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},s=[]},b08d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"UniCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},backgroundColorClass:{type:String,default:""},borderColor:{type:String,default:"#000000"},borderColorClass:{type:String,default:""},color:{type:String,default:"#000000"},colorClass:{type:String,default:""},splitorColor:{type:String,default:"#000000"},splitorColorClass:{type:String,default:""},day:{type:[Number,String],default:0},hour:{type:[Number,String],default:0},minute:{type:[Number,String],default:0},second:{type:[Number,String],default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},mounted:function(t){var n=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()}),1e3)},watch:{day:function(t){var n=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()}),1e3)},hour:function(t){var n=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()}),1e3)},minute:function(t){var n=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()}),1e3)},second:function(t){var n=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()}),1e3)}},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o){return t=Number(t),n=Number(n),e=Number(e),o=Number(o),60*t*60*24+60*n*60+60*e+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i}}};n.default=o},bc64:function(t,n,e){"use strict";e.r(n);var o=e("b08d"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);n["default"]=i.a},d5c9:function(t,n,e){"use strict";var o=e("03e1"),i=e.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-count-down/uni-count-down-create-component',
    {
        'components/uni-count-down/uni-count-down-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1043"))
        })
    },
    [['components/uni-count-down/uni-count-down-create-component']]
]);