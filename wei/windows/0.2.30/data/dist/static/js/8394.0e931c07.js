/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-06 12:25:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8394,1666],{42513:function(a,t,n){n.r(t),n.d(t,{default:function(){return f}});var e=n(4350),o=(n(3241),n(91103),n(66252)),i=n(2262),s=n(60019),r=n(53580),u=n(22201);const p={class:"home-topics"};var c={__name:"posts",setup(a){const t=(0,u.yj)();(0,o.bv)((()=>{y(t.query)})),(0,u.ao)((a=>{y(a.query)}));const n=(0,i.qj)({dataList:[],queryForm:{page:1},pagination:{pageSize:1,total:1},loading:!1}),{dataList:c,queryForm:l,pagination:g}=(0,i.BK)(n),d=(0,o.Fl)((()=>c.value.filter((a=>a.coverpath))));function f(a){if(a.tag){const t={name:a.tag,page:l.value.page};return(0,r.Wx)(t)}{const t=(0,r.iw)(a.filter);return t.page=l.value.page,(0,r.BB)(t)}}function v(a){l.value.page=a,y(t.query)}async function y(a){try{n.loading=!0;const{body:{list:t,page_perpage:e,page_allcount:o}}=await f(a);n.dataList=[...t],g.pageSize=parseInt(e),g.total=parseInt(o)}catch(t){}finally{n.loading=!1}}return(a,t)=>{const r=e.t;return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)((0,i.SU)(s["default"]),{list:(0,i.SU)(d),"query-form":(0,i.SU)(l),pagination:(0,i.SU)(g),onLoad:v},null,8,["list","query-form","pagination"])])),[[r,(0,i.SU)(n).loading]])}}};function l(a){a.__source="src/views/index/components/posts.vue"}var g=n(83744);"function"===typeof l&&l(c);const d=(0,g.Z)(c,[["__scopeId","data-v-599522e7"]]);var f=d}}]);