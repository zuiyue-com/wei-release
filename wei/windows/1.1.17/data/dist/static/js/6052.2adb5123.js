/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-12 10:25:31
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6052],{23471:function(e,t,n){n.d(t,{$u:function(){return y},AX:function(){return l},BX:function(){return w},Bz:function(){return c},ET:function(){return _},QC:function(){return v},RS:function(){return m},SI:function(){return f},U$:function(){return s},Vf:function(){return i},Xc:function(){return p},ar:function(){return g},co:function(){return u},m9:function(){return r},oh:function(){return h},t4:function(){return d}});var o=n(92325),a=n(11555);function u(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function i(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function l(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function r(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function d(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function p(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function m(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function _(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function s(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function w(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function f(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function h(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function v(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function g(e,t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"get",data:{client_id:e,host_model_id:t}})}function y(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}},66052:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var o=n(73481),a=(n(3241),n(62029),n(20129)),u=(n(69840),n(15659)),i=(n(10444),n(10661)),l=(n(35095),n(47820)),r=(n(50986),n(61715),n(6589),n(57018)),d=(n(74367),n(66252)),c=n(2262),p=n(3577),m=n(23471);const _={class:"w-full flex flex-justify-center"};var s={__name:"pull_model_dialog",setup(e,{expose:t}){const n=(0,c.iH)(!1),s=(0,c.iH)([]),w=()=>({client_id:"",create_from_where:"extra_path",model_thread_id:"",persion_input_model_src:"",model_type:""}),f=(0,c.iH)({...w()});function h(e){f.value.client_id=e,n.value=!0,g()}function v(){f.value={...w()},n.value=!1}async function g(){const{body:e}=await(0,m.oh)();s.value=e}async function y(){await(0,m.QC)(),n.value=!1}return t({showDialog:h}),(e,t)=>{const m=r.EZ,w=a.nH,h=l.BT,g=l.km,Z=(0,d.up)("vab-icon"),k=i.Q0,U=u.ElButton,V=a.ly,W=o.d0;return(0,d.wg)(),(0,d.j4)(W,{modelValue:(0,c.SU)(n),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.dq)(n)?n.value=e:null),title:"下载模型",width:"50%",onClose:v},{default:(0,d.w5)((()=>[(0,d.Uk)((0,p.zw)((0,c.SU)(f))+" ",1),(0,d.Wm)(V,{"label-width":"auto"},{default:(0,d.w5)((()=>[(0,d.Wm)(w,{label:"模型地址"},{default:(0,d.w5)((()=>[(0,d.Wm)(m,{modelValue:(0,c.SU)(f).persion_input_model_src,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(f).persion_input_model_src=e),placeholder:"模型地址"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(w,{label:"模型分类"},{default:(0,d.w5)((()=>[(0,d.Wm)(g,{modelValue:(0,c.SU)(f).model_type,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(f).model_type=e),filterable:"",placeholder:"选择模型保存到的分类",class:"contianer-name-helf"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,c.SU)(s),(e=>((0,d.wg)(),(0,d.j4)(h,{key:e.type_key,value:e.type_key},{default:(0,d.w5)((()=>[(0,d.Uk)((0,p.zw)(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(k,{effect:"dark",content:"外部下载的模型，请选择模型的分类，不选择时默认保存在模型的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(Z,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(w,null,{default:(0,d.w5)((()=>[(0,d._)("div",_,[(0,d.Wm)(U,{type:"primary",onClick:y},{default:(0,d.w5)((()=>[(0,d.Uk)(" 拉取 ")])),_:1}),(0,d.Wm)(U,{onClick:v},{default:(0,d.w5)((()=>[(0,d.Uk)("取消")])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue"])}}};function w(e){e.__source="src/views/gpumarket/mydevice/components/pull_model_dialog.vue"}var f=n(83744);"function"===typeof w&&w(s);const h=(0,f.Z)(s,[["__scopeId","data-v-61d3d19a"]]);var v=h}}]);