(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb4584a8"],{"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",(function(){return n}))},"0b33":function(t,e,i){"use strict";var n=i("c31d"),r=i("d282"),s=i("9884"),o=i("48f4"),a=Object(r["a"])("tab"),c=a[0],l=a[1];e["a"]=c({mixins:[Object(s["a"])("vanTabs")],props:Object(n["a"])({},o["c"],{name:[Number,String],title:String,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return this.name||this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()}},mounted:function(){this.slots("title")&&this.parent.renderTitle(this.$refs.title,this.index)},render:function(t){var e=this.slots,i=this.isActive,n=this.inited||!this.parent.lazyRender,r=[n?e():t()];return e("title")&&r.push(t("div",{ref:"title"},[e("title")])),this.parent.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!i},class:l("pane-wrapper",{inactive:!i})},[t("div",{class:l("pane")},[r])]):t("div",{directives:[{name:"show",value:i}],attrs:{role:"tabpanel"},class:l("pane")},[r])}})},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return l}));var n=i("a142"),r=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-r)),n=setTimeout(t,i);return r=e+i,n}var o=n["d"]?t:window,a=o.requestAnimationFrame||s;o.cancelAnimationFrame||o.clearTimeout;function c(t){return a.call(o,t)}function l(t){c((function(){c(t)}))}}).call(this,i("c8ba"))},"5e46":function(t,e,i){"use strict";var n=i("d282"),r=i("a142"),s=i("ea8e"),o=i("4598");function a(t,e,i){var n=0,r=t.scrollLeft,s=0===i?1:Math.round(1e3*i/16);function a(){t.scrollLeft+=(e-r)/s,++n<s&&Object(o["b"])(a)}a()}var c=i("48f4"),l=i("02de"),h=i("9884"),u=i("5fbe"),d=i("b1d2"),f=i("a8c1"),b=Object(n["a"])("tab")[1],p={props:{type:String,color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var r=i?this.activeColor:this.inactiveColor;return r&&(t.color=r),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},renderTitle:function(t){var e=this.$refs.title;e.innerHTML="",e.appendChild(t)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:b({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),style:this.style,on:{click:this.onClick}},[t("span",{ref:"title",class:{"van-ellipsis":this.ellipsis}},[this.title])])}},v=i("c31d"),m=i("3875"),g=Object(n["a"])("tabs"),x=g[0],y=g[1],w=50,S=x({mixins:[m["a"]],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=w&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},renderChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:y("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:y("content",{animated:this.animated}),on:Object(v["a"])({},this.listeners)},[this.renderChildren()])}}),O=Object(n["a"])("sticky"),k=O[0],I=O[1],j=k({mixins:[Object(u["a"])((function(t){this.scroller||(this.scroller=Object(f["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(r["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTop,n=Object(f["d"])(window),r=Object(f["a"])(this.$el),s=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var o=r+e.offsetHeight;if(n+i+this.height>o){var a=this.height+n-o;return a<this.height?(this.fixed=!0,this.transform=-(a+i)):this.fixed=!1,void s()}}n+i>r?(this.fixed=!0,this.transform=0):this.fixed=!1,s()}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:I({fixed:e}),style:this.style},[this.slots()])])}}),C=Object(n["a"])("tabs"),T=C[0],$=C[1];e["a"]=T({mixins:[Object(h["b"])("vanTabs"),Object(u["a"])((function(t){t(window,"resize",this.setLine,!0)}))],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&Object(f["e"])(Math.ceil(Object(f["a"])(this.$el)-this.offsetTop))}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{onShow:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(l["a"])(t.$el)){var n=i[t.currentIndex].$el,o=t.lineWidth,a=t.lineHeight,c=Object(r["b"])(o)?o:n.offsetWidth/2,h=n.offsetLeft+n.offsetWidth/2,u={width:Object(s["a"])(c),backgroundColor:t.color,transform:"translateX("+h+"px) translateX(-50%)"};if(e&&(u.transitionDuration=t.duration+"s"),Object(r["b"])(a)){var d=Object(s["a"])(a);u.height=d,u.borderRadius=d}t.lineStyle=u}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(r["b"])(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,r=e.computedName;n?this.$emit("disabled",r,i):(this.setCurrentIndex(t),this.$emit("click",r,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,r=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;a(i,r,t?0:this.duration)}},renderTitle:function(t,e){var i=this;this.$nextTick((function(){i.$refs.titles[e].renderTitle(t)}))},onScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)}},render:function(){var t,e=this,i=arguments[0],n=this.type,r=this.ellipsis,s=this.animated,o=this.scrollable,a=this.children.map((function(t,s){return i(p,{ref:"titles",refInFor:!0,attrs:{type:n,title:t.title,color:e.color,isActive:s===e.currentIndex,ellipsis:r,disabled:t.disabled,scrollable:o,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},on:{click:function(){e.onClick(s),Object(c["b"])(t.$router,t)}}})})),l=i("div",{ref:"wrap",class:[$("wrap",{scrollable:o}),(t={},t[d["g"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:$("nav",[n]),style:this.navStyle},[this.slots("nav-left"),a,"line"===n&&i("div",{class:$("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:$([n])},[this.sticky?i(j,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onScroll}},[l]):l,i(S,{attrs:{count:this.children.length,animated:s,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"66fd":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("d282"),o=i("a142"),a=i("ba31"),c=i("a3e2"),l=i("44bf"),h=Object(s["a"])("card"),u=h[0],d=h[1];function f(t,e,i,n){var s=e.thumb,h=i.num||Object(o["b"])(e.num),u=i.price||Object(o["b"])(e.price),f=i["origin-price"]||Object(o["b"])(e.originPrice),b=h||u||f;function p(t){Object(a["a"])(n,"click-thumb",t)}function v(){if(i.tag||e.tag)return t("div",{class:d("tag")},[i.tag?i.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function m(){if(i.thumb||s)return t("a",{attrs:{href:e.thumbLink},class:d("thumb"),on:{click:p}},[i.thumb?i.thumb():t(l["a"],{attrs:{src:s,width:"100%",height:"100%",fit:"contain","lazy-load":e.lazyLoad}}),v()])}function g(){return i.title?i.title():e.title?t("div",{class:d("title")},[e.title]):void 0}function x(){return i.desc?i.desc():e.desc?t("div",{class:[d("desc"),"van-ellipsis"]},[e.desc]):void 0}function y(){if(u)return t("div",{class:d("price")},[i.price?i.price():e.currency+" "+e.price])}function w(){if(f){var n=i["origin-price"];return t("div",{class:d("origin-price")},[n?n():e.currency+" "+e.originPrice])}}function S(){if(h)return t("div",{class:d("num")},[i.num?i.num():"x "+e.num])}function O(){if(i.footer)return t("div",{class:d("footer")},[i.footer()])}return t("div",r()([{class:d()},Object(a["b"])(n,!0)]),[t("div",{class:d("header")},[m(),t("div",{class:d("content",{centered:e.centered})},[g(),x(),i.tags&&i.tags(),b&&t("div",{class:"van-card__bottom"},[y(),w(),S(),i.bottom&&i.bottom()])])]),O()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=u(f)},9884:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));var n=i("2b0e");function r(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.children&&i(t.children)}))}return i(t),e}function s(t,e){var i,s;void 0===e&&(e={});var o=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(s={parent:function(){return this.disableBindRelation?null:this[t]}},s[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},s),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=r(this.parent.slots());t.sort((function(t,i){return e.indexOf(t.$vnode)-e.indexOf(i.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9b7e":function(t,e,i){},"9cb7":function(t,e,i){"use strict";i("68ef"),i("9b7e"),i("09fe"),i("ea82")},a3e2:function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("d282"),o=i("ba31"),a=i("b1d2"),c=Object(s["a"])("tag"),l=c[0],h=c[1];function u(t,e,i,n){var s,c,l=e.type,u=e.mark,d=e.plain,f=e.color,b=e.round,p=e.size,v=d?"color":"backgroundColor",m=(s={},s[v]=f,s);e.textColor&&(m.color=e.textColor);var g={mark:u,plain:d,round:b};return p&&(g[p]=p),t("span",r()([{style:m,class:[h([g,l]),(c={},c[a["e"]]=d,c)]},Object(o["b"])(n,!0)]),[i.default&&i.default()])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},e["a"]=l(u)},ae9e:function(t,e,i){},b807:function(t,e,i){},ea82:function(t,e,i){},f319:function(t,e,i){}}]);