/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 16:34:29
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7647],{23471:function(e,t,n){n.d(t,{$u:function(){return C},AX:function(){return w},BX:function(){return U},Bs:function(){return S},ET:function(){return y},Ep:function(){return i},IF:function(){return F},KD:function(){return x},LN:function(){return D},Nq:function(){return I},Pb:function(){return j},QC:function(){return V},RS:function(){return Z},SI:function(){return q},U$:function(){return b},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return z},ak:function(){return $},an:function(){return m},c1:function(){return l},co:function(){return s},cu:function(){return k},dd:function(){return u},e$:function(){return H},m9:function(){return f},mL:function(){return c},oh:function(){return W},sw:function(){return g},t4:function(){return h},vQ:function(){return G},wW:function(){return B},zB:function(){return E},zw:function(){return p}});var a=n(92325),o=n(11555);function r(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:e,data:t})}function i(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function u(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:e})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:e})}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:e}})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:e})}function p(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:e}})}function m(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:e}})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function _(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function w(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function f(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function h(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function g(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function v(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function Z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function y(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function b(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function U(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function k(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:e}})}function q(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function W(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function V(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function S(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:e}})}function D(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:e,data:t})}function C(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}function H(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:e}})}async function j(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function $(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:e}})}function B(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function E(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:e})}function F(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:e}})}function x(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:e,data:t})}function z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}function G(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:e}})}async function I(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},85026:function(e,t,n){n.d(t,{$j:function(){return i},MH:function(){return r},U$:function(){return l},Y2:function(){return a},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const a={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},l={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},27647:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(73481),o=(n(3241),n(62029),n(20129)),r=(n(69840),n(15659)),i=(n(10444),n(63715)),u=(n(5508),n(87692)),d=(n(45393),n(22411),n(6589),n(66252)),l=n(2262),c=n(23471),p=n(85026);const m=e=>((0,d.dD)("data-v-90aa10da"),e=e(),(0,d.Cn)(),e),s={class:"rentsettingservice-form-container"},_=m((()=>(0,d._)("br",null,null,-1))),w=m((()=>(0,d._)("br",null,null,-1))),f=m((()=>(0,d._)("br",null,null,-1))),h=m((()=>(0,d._)("br",null,null,-1))),g={class:"flex justify-center w-full"};var v={__name:"device_rent_service_dialog",setup(e,{expose:t}){const n=(0,l.qj)({client_id:"",hanging_up:"0",agree:!1}),m={...p.Y2},v=(0,l.iH)(!1),Z=(0,l.iH)(!1),y=(0,l.iH)();function b(e){Object.assign(n,{client_id:e,hanging_up:"0"}),v.value=!0}async function U(){await y.value.validate((async(e,t)=>{if(!e)return!1;k()}))}async function k(){try{Z.value=!0,await(0,c.dd)(n),v.value=!1}catch(e){console.log(e)}finally{Z.value=!1}}return t({showDialog:b}),(e,t)=>{const c=o.nH,p=u.dn,b=u.KD,k=i.ElCheckbox,q=r.ElButton,W=o.ly,V=a.d0;return(0,d.wg)(),(0,d.iD)("div",s,[(0,d.Wm)(V,{ref_key:"formRef",ref:y,modelValue:(0,l.SU)(v),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,l.dq)(v)?v.value=e:null),title:"挂机表单",width:"50%"},{default:(0,d.w5)((()=>[(0,d.Wm)(W,{ref_key:"formRef",ref:y,model:(0,l.SU)(n),rules:m,"label-width":"auto"},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{label:"重要提示"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 1/确定参与挂机以后，系统自动清空设备上的容器，镜像，模型，为在线服务提供空间。请再三确定已经保存好了资料。按确定以后，资料丢失，软件不负任何责任。 "),_,(0,d.Uk)(" 2/参与挂机以后，用户不能进行容器，镜像，和模型等的操作，除非取消挂机。 "),w,(0,d.Uk)(" 3/用户取消挂机以后，软件不会恢复挂机前清空的容器，镜像和模型等数据，只会归还一个没有容器，镜像，模型的干净环境。 "),f,(0,d.Uk)(" 4/挂机期间，请不要在软件外使用电脑，否则影响设备的挂机表现，造成收益的达不到预期。重复的随性的频繁的参与和取消挂机将影响获取收益的速度。 "),h,(0,d.Uk)(" 5/还有更具体的内容，请阅读下面的设备挂机协议。 ")])),_:1}),(0,d.Wm)(c,{label:"是否参与"},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{modelValue:(0,l.SU)(n).hanging_up,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.SU)(n).hanging_up=e)},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{label:"1"},{default:(0,d.w5)((()=>[(0,d.Uk)("挂机")])),_:1}),(0,d.Wm)(p,{label:"0"},{default:(0,d.w5)((()=>[(0,d.Uk)("不挂机")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(c,{label:"挂机协议",prop:"agree"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{modelValue:(0,l.SU)(n).agree,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,l.SU)(n).agree=e),label:"请详细阅读设备挂机协议，在挂机期间共同遵守"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(c,null,{default:(0,d.w5)((()=>[(0,d._)("div",g,[(0,d.Wm)(q,{loading:(0,l.SU)(Z),type:"primary",onClick:U},{default:(0,d.w5)((()=>[(0,d.Uk)(" 保存 ")])),_:1},8,["loading"]),(0,d.Wm)(q,{onClick:t[2]||(t[2]=e=>v.value=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}};function Z(e){e.__source="src/views/gpumarket/mydevice/components/device_rent_service_dialog.vue"}var y=n(83744);"function"===typeof Z&&Z(v);const b=(0,y.Z)(v,[["__scopeId","data-v-90aa10da"]]);var U=b}}]);