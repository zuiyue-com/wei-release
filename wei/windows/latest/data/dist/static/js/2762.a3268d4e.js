/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 15:38:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2762],{23471:function(t,n,e){e.d(n,{$u:function(){return j},AX:function(){return _},BX:function(){return k},Bs:function(){return S},ET:function(){return b},Ep:function(){return i},IF:function(){return G},KD:function(){return H},LN:function(){return C},Nq:function(){return $},Pb:function(){return F},QC:function(){return V},RS:function(){return Z},SI:function(){return U},U$:function(){return y},Vf:function(){return s},Wz:function(){return d},Xc:function(){return g},Zr:function(){return u},Zt:function(){return L},ak:function(){return q},an:function(){return m},c1:function(){return c},co:function(){return w},cu:function(){return W},dd:function(){return r},e$:function(){return B},m9:function(){return f},mL:function(){return l},oh:function(){return D},sw:function(){return v},t4:function(){return h},vQ:function(){return X},wW:function(){return z},zB:function(){return E},zw:function(){return p}});var o=e(92325),a=e(11555);function u(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:n})}function i(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function r(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function l(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function p(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function m(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function w(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function s(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:n}})}function _(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function v(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function g(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function Z(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function b(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:n}})}function y(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:n}})}function k(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:n}})}function W(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function U(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function D(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function V(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function S(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function C(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:n})}function j(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function B(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function F(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function q(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function z(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function E(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function G(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function H(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:n})}function L(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function X(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function $(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}},32762:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var o=e(73481),a=(e(3241),e(62029),e(20129)),u=(e(69840),e(15659)),i=(e(10444),e(22040)),r=(e(99426),e(66263)),d=(e(33790),e(6589),e(87692)),c=(e(45393),e(81691),e(57658),e(66252)),l=e(2262),p=e(23471),m=e(22201);const w={class:"deviceReboot-form-container"},s=(0,c._)("p",null," 1/重启以后需要留意软件有没有自动启动，没有自动启动的情况下请手动打开软件。 ",-1),_={class:"flex justify-center w-full"};var f={__name:"device_reboot_dialog",setup(t,{expose:n}){const e=(0,m.tv)(),f=(0,l.qj)({client_id:0,force_reboot:"0"}),h=(0,l.iH)(!1),v=(0,l.iH)(!1);function g(t){Object.assign(f,{client_id:t,force_reboot:"0"}),h.value=!0}async function Z(){try{v.value=!0,await(0,p.mL)(f),h.value=!1,e.push("/gpumarket/mydevice")}catch(t){console.log(t)}finally{v.value=!1}}return n({showDialog:g}),(t,n)=>{const e=d.rh,p=d.KD,m=a.nH,g=r.v,b=i.Dv,y=u.ElButton,k=a.ly,W=o.d0;return(0,c.wg)(),(0,c.iD)("div",w,[(0,c.Wm)(W,{modelValue:(0,l.SU)(h),"onUpdate:modelValue":n[2]||(n[2]=t=>(0,l.dq)(h)?h.value=t:null),title:"高级设置",width:"50%"},{default:(0,c.w5)((()=>[(0,c.Wm)(k,{"label-width":"auto"},{default:(0,c.w5)((()=>[(0,c.Wm)(m,{label:"强行重启"},{default:(0,c.w5)((()=>[(0,c.Wm)(p,{modelValue:(0,l.SU)(f).force_reboot,"onUpdate:modelValue":n[0]||(n[0]=t=>(0,l.SU)(f).force_reboot=t)},{default:(0,c.w5)((()=>[(0,c.Wm)(e,{label:"1"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 是，强行重启，无视一切，酣畅淋漓，但有租户的时候可能会被骂。 ")])),_:1}),(0,c.Wm)(e,{label:"0"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 否，如果当前设备在出租，将检测如果存在租户的时候，将取消重启，保护租户利益 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,c.Wm)(m,{label:""},{default:(0,c.w5)((()=>[(0,c.Wm)(b,null,{default:(0,c.w5)((()=>[(0,c.Wm)(g,{closable:!1},{default:(0,c.w5)((()=>[s])),_:1})])),_:1}),(0,c._)("div",_,[(0,c.Wm)(y,{loading:(0,l.SU)(v),type:"primary",onClick:Z},{default:(0,c.w5)((()=>[(0,c.Uk)(" 提交 ")])),_:1},8,["loading"]),(0,c.Wm)(y,{onClick:n[1]||(n[1]=t=>h.value=!1)},{default:(0,c.w5)((()=>[(0,c.Uk)("取消")])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}};function h(t){t.__source="src/views/gpumarket/mydevice/components/device_reboot_dialog.vue"}"function"===typeof h&&h(f);const v=f;var g=v}}]);