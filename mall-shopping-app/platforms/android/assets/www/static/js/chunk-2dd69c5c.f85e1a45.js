(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd69c5c"],{"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),c=n("6821"),a=n("6a99"),o=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=c(t),e=a(e,!0),s)try{return u(t,e)}catch(n){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},"4d48":function(t,e,n){"use strict";n("68ef"),n("bf60")},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var c,a=e.constructor;return a!==n&&"function"==typeof a&&(c=a.prototype)!==n.prototype&&r(c)&&i&&i(t,c),t}},"666c":function(t,e,n){"use strict";n.r(e);var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods_topic"},[n("div",{staticClass:"topic-detail",domProps:{innerHTML:t._s(t.topic.content)}}),n("van-row",{attrs:{gutter:""}},t._l(t.topicGoods,(function(e,r){return n("van-col",{key:r,attrs:{span:"12"}},[n("router-link",{attrs:{to:{path:"/items/detail/"+e.id}}},[n("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.picUrl}})]),n("div",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.name))]),n("div",{staticStyle:{"margin-left":"20px",color:"#ab956d"}},[t._v("￥ "+t._s(e.retailPrice))])],1)})),1)],1)},c=[],a=n("bd86"),o=(n("81e6"),n("9ffb")),s=(n("4d48"),n("d1e1")),u=(n("7f7f"),n("9cb7"),n("66fd")),f=(n("c5f6"),n("4ec3")),l={props:{topicId:[String,Number]},data:function(){return{topic:{},topicGoods:[],topicRelated:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object(f["Q"])({id:this.topicId}).then((function(e){t.topic=e.data.data.topic,t.topicGoods=e.data.data.goods})),Object(f["S"])({id:this.topicId}).then((function(e){t.topicRelated=e.data.data}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(r={},Object(a["a"])(r,u["a"].name,u["a"]),Object(a["a"])(r,s["a"].name,s["a"]),Object(a["a"])(r,o["a"].name,o["a"]),r)},d=l,p=(n("fa01"),n("2877")),g=Object(p["a"])(d,i,c,!1,null,"a94fba28",null);e["default"]=g.exports},"66fd":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),c=n("d282"),a=n("a142"),o=n("ba31"),s=n("a3e2"),u=n("44bf"),f=Object(c["a"])("card"),l=f[0],d=f[1];function p(t,e,n,r){var c=e.thumb,f=n.num||Object(a["b"])(e.num),l=n.price||Object(a["b"])(e.price),p=n["origin-price"]||Object(a["b"])(e.originPrice),g=f||l||p;function b(t){Object(o["a"])(r,"click-thumb",t)}function h(){if(n.tag||e.tag)return t("div",{class:d("tag")},[n.tag?n.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function m(){if(n.thumb||c)return t("a",{attrs:{href:e.thumbLink},class:d("thumb"),on:{click:b}},[n.thumb?n.thumb():t(u["a"],{attrs:{src:c,width:"100%",height:"100%",fit:"contain","lazy-load":e.lazyLoad}}),h()])}function v(){return n.title?n.title():e.title?t("div",{class:d("title")},[e.title]):void 0}function y(){return n.desc?n.desc():e.desc?t("div",{class:[d("desc"),"van-ellipsis"]},[e.desc]):void 0}function S(){if(l)return t("div",{class:d("price")},[n.price?n.price():e.currency+" "+e.price])}function _(){if(p){var r=n["origin-price"];return t("div",{class:d("origin-price")},[r?r():e.currency+" "+e.originPrice])}}function N(){if(f)return t("div",{class:d("num")},[n.num?n.num():"x "+e.num])}function k(){if(n.footer)return t("div",{class:d("footer")},[n.footer()])}return t("div",i()([{class:d()},Object(o["b"])(r,!0)]),[t("div",{class:d("header")},[m(),t("div",{class:d("content",{centered:e.centered})},[v(),y(),n.tags&&n.tags(),g&&t("div",{class:"van-card__bottom"},[S(),_(),N(),n.bottom&&n.bottom()])])]),k()])}p.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=l(p)},"7b0a":function(t,e,n){},"81e6":function(t,e,n){"use strict";n("68ef"),n("7b0a")},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),c=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:c}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"972a":function(t,e,n){},"9b7e":function(t,e,n){},"9cb7":function(t,e,n){"use strict";n("68ef"),n("9b7e"),n("09fe"),n("ea82")},"9ffb":function(t,e,n){"use strict";var r=n("d282"),i=Object(r["a"])("col"),c=i[0],a=i[1];e["a"]=c({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.span,r=this.offset;return e(this.tag,{style:this.style,class:a((t={},t[n]=n,t["offset-"+r]=r,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),c=n("d282"),a=n("ba31"),o=n("b1d2"),s=Object(c["a"])("tag"),u=s[0],f=s[1];function l(t,e,n,r){var c,s,u=e.type,l=e.mark,d=e.plain,p=e.color,g=e.round,b=e.size,h=d?"color":"backgroundColor",m=(c={},c[h]=p,c);e.textColor&&(m.color=e.textColor);var v={mark:l,plain:d,round:g};return b&&(v[b]=b),t("span",i()([{style:m,class:[f([v,u]),(s={},s[o["e"]]=d,s)]},Object(a["b"])(r,!0)]),[n.default&&n.default()])}l.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},e["a"]=u(l)},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),c=n("79e5"),a=n("fdef"),o="["+a+"]",s="​",u=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=c((function(){return!!a[t]()||s[t]()!=s})),u=i[t]=o?e(d):a[t];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},bf60:function(t,e,n){},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),c=n("2d95"),a=n("5dbc"),o=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,p="Number",g=r[p],b=g,h=g.prototype,m=c(n("2aeb")(h))==p,v="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var n,r,i,c=e.charCodeAt(0);if(43===c||45===c){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),u=0,f=s.length;u<f;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(m?s((function(){h.valueOf.call(n)})):c(n)!=p)?a(new b(y(e)),n,g):y(e)};for(var S,_=n("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)i(b,S=_[N])&&!i(g,S)&&l(g,S,f(b,S));g.prototype=h,h.constructor=g,n("2aba")(r,p,g)}},d1e1:function(t,e,n){"use strict";var r=n("d282"),i=Object(r["a"])("row"),c=i[0],a=i[1];e["a"]=c({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.align,r=this.justify,i="flex"===this.type,c="-"+Number(this.gutter)/2+"px",o=this.gutter?{marginLeft:c,marginRight:c}:{};return e(this.tag,{style:o,class:a((t={flex:i},t["align-"+n]=i&&n,t["justify-"+r]=i&&r,t)),on:{click:this.onClick}},[this.slots()])}})},ea82:function(t,e,n){},fa01:function(t,e,n){"use strict";var r=n("972a"),i=n.n(r);i.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);