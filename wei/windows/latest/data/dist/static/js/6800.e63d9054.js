/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:00:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6800],{44904:function(e,t,n){n.d(t,{GT:function(){return l},Nl:function(){return d},Pb:function(){return m},_S:function(){return c},_c:function(){return p},fZ:function(){return i},nD:function(){return u}});var o=n(96486),a=n(92325),r=n(11555);function i(e){const t=(0,o.pickBy)(e,(e=>""!==e));return(0,a.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=typeid",method:"get",params:t})}async function u(e,t){return(0,r.Gv)().then((({body:{hash:n}})=>{const r={formhash:n,searchoption:{[t.inputId]:{value:t.keyword}},searchsortsubmit:""},i=(0,o.pickBy)(e,(e=>""!==e));return(0,a.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=sortid",method:"post",params:i,data:r})}))}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_model",method:"get",params:e})}function l(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_market&modac=model_down_form",method:"get"})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_market&modac=download_model",method:"post",data:e})}async function p(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function m(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},23471:function(e,t,n){n.d(t,{$u:function(){return D},AX:function(){return w},BX:function(){return k},Bs:function(){return V},ET:function(){return Z},Ep:function(){return i},IF:function(){return $},KD:function(){return x},LN:function(){return H},Nq:function(){return K},Pb:function(){return F},QC:function(){return q},RS:function(){return y},SI:function(){return W},U$:function(){return b},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return E},ak:function(){return B},an:function(){return m},c1:function(){return l},co:function(){return s},cu:function(){return U},dd:function(){return u},e$:function(){return j},m9:function(){return f},mL:function(){return c},oh:function(){return S},sw:function(){return g},t4:function(){return h},vQ:function(){return I},wW:function(){return C},zB:function(){return G},zw:function(){return p}});var o=n(92325),a=n(11555);function r(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:e,data:t})}function i(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function u(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:e})}function d(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:e})}function l(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:e}})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:e})}function p(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_evice",method:"get",params:{client_id:e}})}function m(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:e}})}function s(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function _(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function w(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function f(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function h(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function g(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function v(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function y(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function Z(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function b(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function k(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function U(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:e}})}function W(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function S(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function q(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function V(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:e}})}function H(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:e,data:t})}function D(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}function j(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",params:{model_id:e}})}async function F(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function B(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:e}})}function C(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function G(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:e})}function $(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:e}})}function x(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:e,data:t})}function E(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}function I(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",params:{model_id:e}})}async function K(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},85026:function(e,t,n){n.d(t,{$j:function(){return i},MH:function(){return r},U$:function(){return l},Y2:function(){return o},bT:function(){return a},f_:function(){return d},wH:function(){return u}});const o={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},a={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},l={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},16800:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var o=n(73481),a=(n(3241),n(62029),n(20129)),r=(n(69840),n(15659)),i=(n(10444),n(10661)),u=(n(35095),n(57018)),d=(n(74367),n(47820)),l=(n(50986),n(61715),n(6589),n(87692)),c=(n(45393),n(22411),n(66252)),p=n(2262),m=n(23471),s=n(85026);n(44904);const _={class:"w-full flex flex-justify-center"};var w={__name:"download_model_dialog",setup(e,{expose:t}){const n=(0,c.f3)("$pub"),w=(0,p.iH)(!1),f=(0,p.iH)({...s.$j}),h=(0,p.iH)([]),g=(0,p.iH)(),v=()=>({client_id:"",create_from_where:"model_list",model_thread_id:"",persion_input_model_src:"",model_type:""}),y=(0,p.iH)({...v()});function Z(e){y.value.client_id=e,w.value=!0,k()}function b(){y.value={...v()},w.value=!1,g.value.resetFields()}async function k(){const{body:e}=await(0,m.oh)();h.value=e}async function U(){await g.value.validate((async(e,t)=>{if(!e)return!1;await(0,m.QC)(y.value),w.value=!1,n("active-device-tab",{name:"model-list",callback:()=>{n("reload-model-list")}})}))}(0,p.iH)([]);return t({showDialog:Z}),(e,t)=>{const n=l.dn,m=l.KD,s=a.nH,v=d.BT,Z=d.km,k=u.EZ,W=(0,c.up)("vab-icon"),S=i.Q0,q=r.ElButton,V=a.ly,H=o.d0;return(0,c.wg)(),(0,c.j4)(H,{modelValue:(0,p.SU)(w),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,p.dq)(w)?w.value=e:null),title:"下载模型",width:"50%",onClose:b},{default:(0,c.w5)((()=>[(0,c.Wm)(V,{ref_key:"formRef",ref:g,"label-width":"auto",model:(0,p.SU)(y),rules:(0,p.SU)(f)},{default:(0,c.w5)((()=>[(0,c.Wm)(s,{label:"数据来源"},{default:(0,c.w5)((()=>[(0,c.Wm)(m,{modelValue:(0,p.SU)(y).create_from_where,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,p.SU)(y).create_from_where=e)},{default:(0,c.w5)((()=>[(0,c.Wm)(n,{label:"model_list"},{default:(0,c.w5)((()=>[(0,c.Uk)("模型收藏夹")])),_:1}),(0,c.Wm)(n,{label:"extra_path"},{default:(0,c.w5)((()=>[(0,c.Uk)("自主输入")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"model_list"===(0,p.SU)(y).create_from_where?((0,c.wg)(),(0,c.j4)(s,{key:0,label:"模型收藏夹"},{default:(0,c.w5)((()=>[(0,c.Wm)(Z,{filterable:""},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(h),(e=>((0,c.wg)(),(0,c.j4)(v,{key:e.type_key,label:e.name,value:e.type_key},null,8,["label","value"])))),128))])),_:1})])),_:1})):((0,c.wg)(),(0,c.j4)(s,{key:1,label:"模型地址",prop:"persion_input_model_src"},{default:(0,c.w5)((()=>[(0,c.Wm)(k,{modelValue:(0,p.SU)(y).persion_input_model_src,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,p.SU)(y).persion_input_model_src=e),placeholder:"模型地址"},null,8,["modelValue"])])),_:1})),(0,c.Wm)(s,{label:"模型分类",prop:"model_type"},{default:(0,c.w5)((()=>[(0,c.Wm)(Z,{modelValue:(0,p.SU)(y).model_type,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,p.SU)(y).model_type=e),filterable:"",placeholder:"选择模型保存到的分类",class:"contianer-name-helf"},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(h),(e=>((0,c.wg)(),(0,c.j4)(v,{key:e.type_key,label:e.name,value:e.type_key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,c.Wm)(S,{effect:"dark",content:"外部下载的模型，请选择模型的分类，不选择时默认保存在模型的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(W,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,c.Wm)(s,null,{default:(0,c.w5)((()=>[(0,c._)("div",_,[(0,c.Wm)(q,{type:"primary",onClick:U},{default:(0,c.w5)((()=>[(0,c.Uk)(" 拉取 ")])),_:1}),(0,c.Wm)(q,{onClick:b},{default:(0,c.w5)((()=>[(0,c.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function f(e){e.__source="src/views/gpumarket/myhosts/components/download_model_dialog.vue"}var h=n(83744);"function"===typeof f&&f(w);const g=(0,h.Z)(w,[["__scopeId","data-v-5c22d546"]]);var v=g}}]);