/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1924],{23471:function(t,n,e){e.d(n,{$u:function(){return C},AX:function(){return w},BX:function(){return U},Bs:function(){return D},ET:function(){return k},Ep:function(){return u},IF:function(){return E},KD:function(){return G},LN:function(){return j},Nq:function(){return X},Pb:function(){return z},QC:function(){return V},RS:function(){return Z},SI:function(){return W},U$:function(){return y},Vf:function(){return _},Wz:function(){return d},Xc:function(){return g},Zr:function(){return i},Zt:function(){return H},ak:function(){return B},an:function(){return s},c1:function(){return c},co:function(){return m},cu:function(){return b},dd:function(){return r},e$:function(){return q},m9:function(){return f},mL:function(){return l},oh:function(){return S},sw:function(){return v},t4:function(){return h},vQ:function(){return I},wW:function(){return F},zB:function(){return A},zw:function(){return p}});var a=e(92325),o=e(11555);function i(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:n})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function r(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function c(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function l(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function p(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function s(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function m(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function _(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:n}})}function w(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function v(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function g(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function Z(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function k(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:n}})}function y(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:n}})}function U(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:n}})}function b(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function W(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function S(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function V(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function D(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function j(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:n})}function C(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function q(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function z(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function B(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function F(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function A(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function E(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function G(t,n){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:n})}function H(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function I(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function X(t){const{body:{hash:n}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}},71924:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var a=e(73481),o=(e(3241),e(62029),e(20129)),i=(e(69840),e(15659)),u=(e(10444),e(6589),e(87692)),r=(e(45393),e(22411),e(66252)),d=e(2262),c=e(23471);const l={class:"deviceAdvenceSetting-form-container"},p={class:"flex justify-center w-full"};var s={__name:"device_advance_setting_dialog",setup(t,{expose:n}){const e=(0,r.f3)("hostOperationArray"),s=()=>({client_id:"0",host_docker_service_up:"1",auto_start_docker_service:"1"}),m=(0,d.qj)({...s()}),_=(0,d.iH)(!1),w=(0,d.iH)(!1);function f(t){Object.assign(m,{...s(),client_id:t}),_.value=!0}async function h(){try{w.value=!0,await(0,c.Wz)(m),_.value=!1}catch(t){console.log(t)}finally{w.value=!1}}return n({showDialog:f}),(t,n)=>{const c=u.dn,s=u.KD,f=o.nH,v=i.ElButton,g=o.ly,Z=a.d0;return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(Z,{modelValue:(0,d.SU)(_),"onUpdate:modelValue":n[3]||(n[3]=t=>(0,d.dq)(_)?_.value=t:null),title:"高级设置",width:"50%"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{"label-width":"auto"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{label:"后端服务"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{modelValue:(0,d.SU)(m).start_and_stop_docker_service,"onUpdate:modelValue":n[0]||(n[0]=t=>(0,d.SU)(m).start_and_stop_docker_service=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{label:"1"},{default:(0,r.w5)((()=>[(0,r.Uk)("马上开启")])),_:1}),(0,r.Wm)(c,{label:"0"},{default:(0,r.w5)((()=>[(0,r.Uk)("马上关闭")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,d.SU)(e).auto_start_docker_service?((0,r.wg)(),(0,r.j4)(f,{key:0,label:"后端服务"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{modelValue:(0,d.SU)(m).auto_start_docker_service,"onUpdate:modelValue":n[1]||(n[1]=t=>(0,d.SU)(m).auto_start_docker_service=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{label:"1"},{default:(0,r.w5)((()=>[(0,r.Uk)("软件打开后自动开启")])),_:1}),(0,r.Wm)(c,{label:"0"},{default:(0,r.w5)((()=>[(0,r.Uk)("软件打开不自动开启")])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(f,{label:""},{default:(0,r.w5)((()=>[(0,r._)("div",p,[(0,r.Wm)(v,{loading:(0,d.SU)(w),type:"primary",onClick:h},{default:(0,r.w5)((()=>[(0,r.Uk)(" 保存 ")])),_:1},8,["loading"]),(0,r.Wm)(v,{onClick:n[2]||(n[2]=t=>_.value=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("取消")])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}};function m(t){t.__source="src/views/gpumarket/mydevice/components/device_advance_setting_dialog.vue"}var _=e(83744);"function"===typeof m&&m(s);const w=(0,_.Z)(s,[["__scopeId","data-v-5ea08284"]]);var f=w}}]);