/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8123],{81464:function(e,n,s){s.d(n,{Z:function(){return r}});var t=s(81095),c=s(26593);function o(e){t.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function u(e){t.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function r(e){const{isSupported:n,copy:s}=(0,c.VPI)();n||(0,c.gIw)("clipboard-write"),s(e).then((()=>{o(e)})).catch((n=>{console.log(n),u(e)}))}},48123:function(e,n,s){s.r(n),s.d(n,{default:function(){return a}});var t=s(66252),c=s(2262),o=s(81464),u={__name:"index",props:{text:{type:String,default:""}},setup(e){return(n,s)=>{const u=(0,t.up)("vab-icon");return(0,t.wg)(),(0,t.j4)(u,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:s[0]||(s[0]=n=>(0,c.SU)(o.Z)(e.text))})}}};function r(e){e.__source="src/components/ClipboardButton/index.vue"}"function"===typeof r&&r(u);const i=u;var a=i}}]);