/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 13:10:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7058],{26192:function(t,e,a){a.d(e,{R0:function(){return r},ig:function(){return u},nm:function(){return s}});var n=a(92325),o=a(11555);function r(t){return(0,n.Z)({url:"/wwwapi.php?to=about",method:"get",params:{aid:t}})}function s(){return(0,n.Z)({url:"/wwwapi.php?to=faq",method:"get"})}async function u(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=faq&action=search",method:"post",data:{formhash:e,searchtype:"all",searchsubmit:"yes",keyword:t}})}},77058:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(73632),o=(a(3241),a(74965),a(22040)),r=(a(99426),a(27750)),s=a(66252),u=a(3577),i=a(2262),l=a(26192),c=a(27484),d=a.n(c);const f={class:"about-about-container"},p={class:"about-about-user-info"},w={class:"about-about-user-info-full-name"},m={class:"about-about-user-info-extrainfo"},b={class:"about-about-user-info-extrainfo-list"},v=["innerHTML"];var _={__name:"article",props:{articleId:{type:Number,required:!0}},setup(t){const e=t;(0,s.bv)((()=>{c()}));const a=(0,i.qj)({title:"",content:"",from:"",created_at:""});async function c(){const{body:{article:t,content:n}}=await(0,l.R0)(e.articleId);a.title=t.title,a.content=n.content,a.from=t.from,a.created_at=d()(1e3*t.timestamp).format("YYYY-MM-DD")}return(t,e)=>{const l=(0,s.up)("vab-icon"),c=r.Z,d=o.Dv,_=n.dq;return(0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(_,{gutter:20},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{shadow:"hover"},{default:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s._)("div",w,(0,u.zw)((0,i.SU)(a).title),1),(0,s._)("div",m,[(0,s._)("ul",b,[(0,s._)("li",null,[(0,s.Wm)(l,{icon:"user-3-line"}),(0,s.Uk)(" "+(0,u.zw)((0,i.SU)(a).from),1)]),(0,s._)("li",null,[(0,s.Wm)(l,{icon:"time-line"}),(0,s.Uk)(" "+(0,u.zw)((0,i.SU)(a).created_at),1)])])]),(0,s._)("div",{class:"about-about-user-info-description",innerHTML:(0,i.SU)(a).content},null,8,v)])])),_:1})])),_:1})])),_:1})])}}};function h(t){t.__source="src/views/about/components/article.vue"}var y=a(83744);"function"===typeof h&&h(_);const k=(0,y.Z)(_,[["__scopeId","data-v-00f1d082"]]);var g=k},27750:function(t,e,a){a.d(e,{Z:function(){return p}});var n=a(30032),o=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),s=a(2262),u=a(3577),i=a(22201),l=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const a=(0,s.iH)(!0);return e=setTimeout((()=>{a.value=!1}),500),(0,i.iS)(((t,a,n)=>{clearInterval(e),n()})),(e,i)=>{const l=o.vk,c=n.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[t.skeleton?((0,r.wg)(),(0,r.j4)(l,{key:0,animated:"",loading:(0,s.SU)(a),rows:t.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r.Uk)((0,u.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(t){t.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof c&&c(l);const f=(0,d.Z)(l,[["__scopeId","data-v-391150ea"]]);var p=f}}]);