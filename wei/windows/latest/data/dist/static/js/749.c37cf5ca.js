/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:58:23
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[749],{23471:function(t,e,n){n.d(e,{$u:function(){return S},AX:function(){return w},BX:function(){return b},Bs:function(){return C},ET:function(){return y},Ep:function(){return i},IF:function(){return B},KD:function(){return E},LN:function(){return H},Nq:function(){return X},Pb:function(){return j},QC:function(){return V},RS:function(){return Z},SI:function(){return U},U$:function(){return q},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return z},ak:function(){return D},an:function(){return s},c1:function(){return c},co:function(){return m},cu:function(){return k},dd:function(){return u},e$:function(){return $},m9:function(){return f},mL:function(){return l},oh:function(){return W},sw:function(){return g},t4:function(){return h},vQ:function(){return G},wW:function(){return F},zB:function(){return x},zw:function(){return p}});var a=n(92325),o=n(11555);function r(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:e})}function i(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function c(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function l(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function p(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_evice",method:"get",params:{client_id:t}})}function s(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function m(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function _(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:e}})}function w(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function g(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function v(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function Z(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function y(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:e}})}function q(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:e}})}function b(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:e}})}function k(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function U(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function W(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function V(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function C(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function H(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:e})}function S(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function $(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function j(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function D(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function F(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function x(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function B(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function E(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:e})}function z(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function G(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function X(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}},85026:function(t,e,n){n.d(e,{$j:function(){return i},MH:function(){return r},U$:function(){return c},Y2:function(){return a},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const a={agree:[{validator(t,e,n){return e},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},c={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},50749:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(73481),o=(n(3241),n(62029),n(20129)),r=(n(69840),n(15659)),i=(n(10444),n(6589),n(57018)),u=(n(74367),n(66252)),d=n(2262),c=n(85026),l=n(23471);const p={class:"w-full flex flex-justify-center"};var s={__name:"pull_image_dialog",setup(t,{expose:e}){const n=(0,u.f3)("$pub"),s=(0,d.iH)(!1),m={...c.MH},_=(0,d.qj)({client_id:0,create_from_where:"extra_path",image_thread_id:"",persion_input_image_src:""});function w(t){_.client_id=t,s.value=!0}function f(){_.persion_input_image_src="",s.value=!1,h.value.resetFields()}const h=(0,d.iH)();async function g(){await h.value.validate((async(t,e)=>{if(!t)return!1;await(0,l.t4)(_),s.value=!1,n("active-device-tab",{name:"image-list",callback:()=>{n("reload-image-list")}})}))}return e({showDialog:w}),(t,e)=>{const n=i.EZ,c=o.nH,l=r.ElButton,w=o.ly,v=a.d0;return(0,u.wg)(),(0,u.j4)(v,{modelValue:(0,d.SU)(s),"onUpdate:modelValue":e[1]||(e[1]=t=>(0,d.dq)(s)?s.value=t:null),title:"拉取镜像",width:"50%",onClose:f},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{ref_key:"formRef",ref:h,model:(0,d.SU)(_),rules:m,"label-width":"auto"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{label:"镜像地址",prop:"persion_input_image_src"},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{modelValue:(0,d.SU)(_).persion_input_image_src,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,d.SU)(_).persion_input_image_src=t),placeholder:"镜像"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(c,null,{default:(0,u.w5)((()=>[(0,u._)("div",p,[(0,u.Wm)(l,{type:"primary",onClick:g},{default:(0,u.w5)((()=>[(0,u.Uk)(" 拉取 ")])),_:1}),(0,u.Wm)(l,{onClick:f},{default:(0,u.w5)((()=>[(0,u.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])}}};function m(t){t.__source="src/views/gpumarket/mydevice/components/pull_image_dialog.vue"}"function"===typeof m&&m(s);const _=s;var w=_}}]);