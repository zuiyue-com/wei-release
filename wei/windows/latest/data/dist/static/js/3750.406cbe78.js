/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 13:58:32
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3750,8123],{71726:function(t,n,o){o.d(n,{AB:function(){return h},Bb:function(){return r},C0:function(){return d},Hy:function(){return f},Is:function(){return g},KD:function(){return _},LN:function(){return p},Nq:function(){return Z},Pb:function(){return l},S1:function(){return s},_S:function(){return i},e$:function(){return c},oh:function(){return u},t9:function(){return w},wW:function(){return m}});var e=o(92325),a=o(11555);function r(t,n){return(0,e.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"post",params:t,data:n})}function u(){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"get"})}function i(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model_container",method:"post",data:t})}function d(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{container_id:t}})}function c(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}function p(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",data:t})}function s(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}async function l(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,e.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function m(){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"get"})}function w(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model_container",method:"post",data:t})}function f(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{container_id:t}})}function h(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}function _(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",data:t})}function g(t){return(0,e.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}async function Z(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,e.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}},81464:function(t,n,o){o.d(n,{Z:function(){return i}});var e=o(81095),a=o(26593);function r(t){e.gp.$baseMessage(`拷贝${t}成功`,"success","vab-hey-message-success",!1)}function u(t){e.gp.$baseMessage(`拷贝${t}失败`,"error","vab-hey-message-success",!1)}function i(t){const{isSupported:n,copy:o}=(0,a.VPI)();n||(0,a.gIw)("clipboard-write"),o(t).then((()=>{r(t)})).catch((n=>{console.log(n),u(t)}))}},48123:function(t,n,o){o.r(n),o.d(n,{default:function(){return c}});var e=o(66252),a=o(2262),r=o(81464),u={__name:"index",props:{text:{type:String,default:""}},setup(t){return(n,o)=>{const u=(0,e.up)("vab-icon");return(0,e.wg)(),(0,e.j4)(u,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:o[0]||(o[0]=n=>(0,a.SU)(r.Z)(t.text))})}}};function i(t){t.__source="src/components/ClipboardButton/index.vue"}"function"===typeof i&&i(u);const d=u;var c=d}}]);