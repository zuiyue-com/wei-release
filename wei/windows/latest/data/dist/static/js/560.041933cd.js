/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[560],{23471:function(e,t,n){n.d(t,{$u:function(){return $},AX:function(){return w},BX:function(){return k},Bs:function(){return W},ET:function(){return y},Ep:function(){return i},IF:function(){return x},KD:function(){return z},LN:function(){return V},Nq:function(){return L},Pb:function(){return C},QC:function(){return S},RS:function(){return Z},SI:function(){return U},U$:function(){return b},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return E},ak:function(){return D},an:function(){return s},c1:function(){return c},co:function(){return m},cu:function(){return q},dd:function(){return u},e$:function(){return B},m9:function(){return f},mL:function(){return l},oh:function(){return H},sw:function(){return g},t4:function(){return h},vQ:function(){return G},wW:function(){return j},zB:function(){return F},zw:function(){return p}});var a=n(92325),o=n(11555);function r(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:e,data:t})}function i(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function u(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:e})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:e})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:e}})}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:e})}function p(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:e}})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:e}})}function m(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function _(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function w(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function f(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function h(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function g(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function v(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function Z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function y(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function b(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function k(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function q(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:e}})}function U(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function H(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function S(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function W(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:e}})}function V(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:e,data:t})}function $(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}function B(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:e}})}async function C(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function D(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:e}})}function j(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function F(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:e})}function x(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:e}})}function z(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:e,data:t})}function E(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}function G(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:e}})}async function L(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},85026:function(e,t,n){n.d(t,{$j:function(){return i},MH:function(){return r},U$:function(){return c},Y2:function(){return a},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const a={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},c={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},40560:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(73481),o=(n(3241),n(62029),n(20129)),r=(n(69840),n(15659)),i=(n(10444),n(6589),n(47820)),u=(n(50986),n(61715),n(66252)),d=n(2262),c=n(23471),l=n(85026);const p={class:"w-full flex flex-justify-center"};var s={__name:"apply_model_dialog",setup(e,{expose:t}){const n=(0,u.f3)("$pub"),s=(0,u.f3)("$baseMessage"),m=(0,d.iH)(!1),_=(0,d.iH)({...l.wH}),w=(0,d.iH)({client_id:"",host_model_id:""}),f=(0,d.iH)({container_id:"",host_model_id:""});function h(e,t){t?(w.value={client_id:e,host_model_id:t},f.value={container_id:"",host_model_id:t},m.value=!0,Z()):s("模型不能为空","error","vab-hey-message-error")}function g(){m.value=!1,y.value.resetFields()}const v=(0,d.iH)([]);async function Z(){const{body:{list:e}}=await(0,c.Bs)(w.value.client_id);v.value=e}const y=(0,d.iH)();async function b(){await y.value.validate((async(e,t)=>{if(!e)return!1;const a=await(0,c.LN)(w.value,f.value);m.value=!1,s(a.msg,"success","vab-hey-message-success"),n("reload-model-list")}))}return t({showDialog:h}),(e,t)=>{const n=i.BT,c=i.km,l=o.nH,s=r.ElButton,w=o.ly,h=a.d0;return(0,u.wg)(),(0,u.j4)(h,{modelValue:(0,d.SU)(m),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,d.dq)(m)?m.value=e:null),title:"应用模型",width:"30%",onClose:g},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{ref_key:"formRef",ref:y,"label-width":"auto",model:(0,d.SU)(f),rules:(0,d.SU)(_)},{default:(0,u.w5)((()=>[(0,u.Wm)(l,{label:"选择容器",prop:"container_id"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{modelValue:(0,d.SU)(f).container_id,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,d.SU)(f).container_id=e),filterable:"",placeholder:"选择用户此设备上的容器",class:"contianer-name-helf"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(v),(e=>((0,u.wg)(),(0,u.j4)(n,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.Wm)(l,null,{default:(0,u.w5)((()=>[(0,u._)("div",p,[(0,u.Wm)(s,{type:"primary",onClick:b},{default:(0,u.w5)((()=>[(0,u.Uk)(" 保存 ")])),_:1}),(0,u.Wm)(s,{onClick:g},{default:(0,u.w5)((()=>[(0,u.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function m(e){e.__source="src/views/gpumarket/mydevice/components/apply_model_dialog.vue"}"function"===typeof m&&m(s);const _=s;var w=_}}]);