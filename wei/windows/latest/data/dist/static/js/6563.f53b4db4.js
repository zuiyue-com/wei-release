/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6563],{23471:function(t,n,e){e.d(n,{$u:function(){return z},AX:function(){return _},BX:function(){return b},Bs:function(){return $},ET:function(){return q},Ep:function(){return i},IF:function(){return E},KD:function(){return H},LN:function(){return F},Nq:function(){return Q},Pb:function(){return C},QC:function(){return D},RS:function(){return v},SI:function(){return I},U$:function(){return y},Vf:function(){return w},Wz:function(){return d},Xc:function(){return Z},Zr:function(){return a},Zt:function(){return L},ak:function(){return G},an:function(){return m},c1:function(){return c},co:function(){return l},cu:function(){return T},dd:function(){return u},e$:function(){return B},m9:function(){return h},mL:function(){return p},oh:function(){return k},sw:function(){return g},t4:function(){return f},vQ:function(){return N},wW:function(){return X},zB:function(){return j},zw:function(){return s}});var r=e(92325),o=e(11555);function a(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:n})}function i(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function c(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function p(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function s(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function m(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function l(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function w(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:n}})}function _(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function h(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function f(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function g(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function Z(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,r.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function v(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function q(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:n}})}function y(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:n}})}function b(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:n}})}function T(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function I(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function k(){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function D(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function $(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function F(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:n})}function z(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function B(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function C(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,r.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function G(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function X(){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function j(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function E(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function H(t,n){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:n})}function L(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function N(t){return(0,r.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function Q(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,r.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}},95965:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(23279),o=e.n(r);function a(){function t(t,n=3e3){return setInterval((()=>{t()}),n)}function n(t){t&&clearInterval(t)}function e(t,n=1e4){return setTimeout((()=>{t()}),n)}function r(t,n=3e3){o()((()=>{t()}),n)()}return{startIntervalTimer:t,stopIntervalTimer:n,startTimeoutTimer:e,startDebounce:r}}},85026:function(t,n,e){e.d(n,{$j:function(){return i},MH:function(){return a},U$:function(){return c},Y2:function(){return r},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const r={agree:[{validator(t,n,e){return n},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},a={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},c={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}}}]);