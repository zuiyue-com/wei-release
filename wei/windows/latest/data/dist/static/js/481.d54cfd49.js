/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 13:58:32
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[481,6959],{23471:function(t,n,o){o.d(n,{$u:function(){return X},AX:function(){return _},BX:function(){return k},Bs:function(){return C},ET:function(){return y},Ep:function(){return i},IF:function(){return Q},KD:function(){return S},LN:function(){return G},Nq:function(){return q},Pb:function(){return E},QC:function(){return B},RS:function(){return v},SI:function(){return F},U$:function(){return b},Vf:function(){return s},Wz:function(){return d},Xc:function(){return g},Zr:function(){return r},Zt:function(){return W},ak:function(){return I},an:function(){return m},c1:function(){return p},co:function(){return w},cu:function(){return D},dd:function(){return u},e$:function(){return $},m9:function(){return h},mL:function(){return c},oh:function(){return z},sw:function(){return Z},t4:function(){return f},vQ:function(){return j},wW:function(){return L},zB:function(){return N},zw:function(){return l}});var a=o(92325),e=o(11555);function r(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:n})}function i(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function p(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function c(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function l(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function m(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function w(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function s(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:n}})}function _(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function h(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function f(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function Z(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function g(t){const{body:{hash:n}}=await(0,e.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function v(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function y(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:n}})}function b(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:n}})}function k(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:n}})}function D(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function F(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function z(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function B(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function C(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function G(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:n})}function X(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function $(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function E(t){const{body:{hash:n}}=await(0,e.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function I(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function L(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function N(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function Q(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function S(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:n})}function W(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function j(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function q(t){const{body:{hash:n}}=await(0,e.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}}}]);