/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8422],{23471:function(e,t,n){n.d(t,{$u:function(){return B},AX:function(){return w},BX:function(){return k},Bs:function(){return V},ET:function(){return y},Ep:function(){return i},IF:function(){return F},KD:function(){return z},LN:function(){return H},Nq:function(){return I},Pb:function(){return D},QC:function(){return S},RS:function(){return Z},SI:function(){return q},U$:function(){return b},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return E},ak:function(){return $},an:function(){return s},c1:function(){return l},co:function(){return m},cu:function(){return U},dd:function(){return u},e$:function(){return C},m9:function(){return f},mL:function(){return c},oh:function(){return W},sw:function(){return g},t4:function(){return h},vQ:function(){return G},wW:function(){return j},zB:function(){return x},zw:function(){return p}});var a=n(92325),o=n(11555);function r(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:e,data:t})}function i(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function u(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:e})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:e})}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:e}})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:e})}function p(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:e}})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:e}})}function m(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function _(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function w(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function f(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function h(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function g(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function v(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function Z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function y(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function b(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function k(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function U(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:e}})}function q(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function W(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function S(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function V(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:e}})}function H(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:e,data:t})}function B(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}function C(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:e}})}async function D(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function $(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:e}})}function j(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function x(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:e})}function F(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:e}})}function z(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:e,data:t})}function E(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}function G(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:e}})}async function I(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},85026:function(e,t,n){n.d(t,{$j:function(){return i},MH:function(){return r},U$:function(){return l},Y2:function(){return a},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const a={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},l={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},98422:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(73481),o=(n(3241),n(62029),n(20129)),r=(n(69840),n(15659)),i=(n(10444),n(10661)),u=(n(35095),n(47820)),d=(n(50986),n(61715),n(6589),n(57018)),l=(n(74367),n(66252)),c=n(2262),p=n(23471),s=n(85026);const m={class:"w-full flex flex-justify-center"};var _={__name:"download_dataset_dialog",setup(e,{expose:t}){const n=(0,l.f3)("$pub"),_=(0,c.iH)(!1),w=(0,c.iH)({...s.f_}),f=(0,c.iH)([]),h=(0,c.iH)(),g=()=>({client_id:"",create_from_where:"extra_path",model_thread_id:"",persion_input_model_src:"",model_type:""}),v=(0,c.iH)({...g()});function Z(e){v.value.client_id=e,_.value=!0,b()}function y(){v.value={...g()},_.value=!1,h.value.resetFields()}async function b(){const{body:e}=await(0,p.wW)();f.value=e}async function k(){await h.value.validate((async(e,t)=>{if(!e)return!1;await(0,p.zB)(v.value),_.value=!1,n("active-device-tab",{name:"dataset-list",callback:()=>{n("reload-dataset-list")}})}))}return t({showDialog:Z}),(e,t)=>{const n=d.EZ,p=o.nH,s=u.BT,g=u.km,Z=(0,l.up)("vab-icon"),b=i.Q0,U=r.ElButton,q=o.ly,W=a.d0;return(0,l.wg)(),(0,l.j4)(W,{modelValue:(0,c.SU)(_),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.dq)(_)?_.value=e:null),title:"下载数据集",width:"50%",onClose:y},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{ref_key:"formRef",ref:h,"label-width":"auto",model:(0,c.SU)(v),rules:(0,c.SU)(w)},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{label:"数据集地址",prop:"persion_input_model_src"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:(0,c.SU)(v).persion_input_model_src,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(v).persion_input_model_src=e),placeholder:"数据集地址(下载完成后，要点击“应用”才可以添加在容器里面)"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(p,{label:"数据集分类",prop:"model_type"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:(0,c.SU)(v).model_type,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(v).model_type=e),filterable:"",placeholder:"选择数据集保存到的分类",class:"contianer-name-helf"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,c.SU)(f),(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.type_key,label:e.name,value:e.type_key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,l.Wm)(b,{effect:"dark",content:"外部下载的数据集，请选择数据集的分类，不选择时默认保存在数据集的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l.Wm)(U,{type:"primary",onClick:k},{default:(0,l.w5)((()=>[(0,l.Uk)(" 下载 ")])),_:1}),(0,l.Wm)(U,{onClick:y},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function w(e){e.__source="src/views/gpumarket/mydevice/components/download_dataset_dialog.vue"}var f=n(83744);"function"===typeof w&&w(_);const h=(0,f.Z)(_,[["__scopeId","data-v-98f084f4"]]);var g=h}}]);