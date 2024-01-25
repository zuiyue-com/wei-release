/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3399,6682],{20681:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(95965);function a(){const{startIntervalTimer:e,stopIntervalTimer:t}=(0,r.Z)();let n,a,o={};function s(r,a,s,i,l,u){const c=r.filter((e=>e[s].showProcess));o={},t(n),0!==c.length&&(n=e((async()=>{const e=c.map((e=>e[a])),{body:{list:t}}=await l(e);let n=!1;for(const r in t){const{stop:e,progress_num:l,progress_text:u}=t[r],c=i.value.find((e=>e[a]===r));c[s].progress_num||(c[s].progress_num=0);const d=parseInt(l);d>c[s].progress_num&&(c[s].progress_num=d,c[s].progress_text=u,o[r]={progress_num:d,progress_text:u}),e&&(n=!0)}n&&u()})))}function i(n,r,s,i,l){const u=n.filter((e=>e[s].time_flash_list));t(a),0!==u.length&&(a=e((async()=>{const{body:e}=await l();for(const t in o){const n=o[t],a=e.find((e=>e[r]===t));a&&Object.assign(a[s],n)}i.value=e;const n=e.filter((e=>e[s].time_flash_list));n.length<=0&&t(a)}),5e3))}function l(){t(n),t(a)}return{startLoadProgress:s,startReloadList:i,stopTimer:l}}},95965:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(23279),a=n.n(r);function o(){function e(e,t=3e3){return setInterval((()=>{e()}),t)}function t(e){e&&clearInterval(e)}function n(e,t=1e4){return setTimeout((()=>{e()}),t)}function r(e,t=3e3){a()((()=>{e()}),t)()}return{startIntervalTimer:e,stopIntervalTimer:t,startTimeoutTimer:n,startDebounce:r}}},85026:function(e,t,n){n.d(t,{$j:function(){return s},MH:function(){return o},U$:function(){return u},Y2:function(){return r},bT:function(){return a},f_:function(){return l},wH:function(){return i}});const r={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},a={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},o={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},s={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},i={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},l={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},70076:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(73481),a=(n(3241),n(62029),n(20129)),o=(n(69840),n(15659)),s=(n(10444),n(10661)),i=(n(35095),n(47820)),l=(n(50986),n(61715),n(6589),n(57018)),u=(n(74367),n(66252)),c=n(2262),d=n(71726),m=n(85026),_=n(68367),g=n(20681),p=n(95965),f={__name:"download_dataset_dialog",setup(e,{expose:t}){const{startTimeoutTimer:n}=(0,p.Z)(),{startLoadProgress:f,startReloadList:v,stopTimer:h}=(0,g.Z)(),y=(0,u.f3)("$pub"),w=(0,u.f3)("$baseMessage"),b=(0,c.iH)(!1),k=(0,c.iH)({...m.f_}),U=(0,c.iH)(),q=()=>({container_id:"",create_from_where:"extra_path",model_thread_id:"0",persion_input_model_src:"",model_type:""}),T=(0,c.iH)({...q()});function H(e){b.value=!0,T.value.container_id=e,I(),x(e)}function W(){T.value={...q()},b.value=!1,Z.value=[],U.value.resetFields(),h()}function S(){n((()=>{x(T.value.container_id)}))}const V=(0,c.iH)([]);async function I(){const{body:e}=await(0,d.wW)();V.value=e}const Z=(0,c.iH)([]);async function x(e){const{body:t}=await(0,d.Hy)(e);Z.value=t,f(t,"model_id","model_operation_array",Z,d.AB,(()=>{x(e)})),v(t,"model_id","model_operation_array",Z,(()=>(0,d.Hy)(e)))}async function C(){await U.value.validate((async(e,t)=>{if(!e)return!1;const n=await(0,d.t9)(T.value);w(n.msg,"success","vab-hey-message-success");const r=T.value.container_id;U.value.resetFields(),T.value.container_id=r,b.value=!1,y("reload-my-docker-list")}))}return t({showDialog:H}),(e,t)=>{const n=l.EZ,d=a.nH,m=i.BT,g=i.km,p=(0,u.up)("vab-icon"),f=s.Q0,v=o.ElButton,h=a.ly,y=r.d0;return(0,u.wg)(),(0,u.j4)(y,{modelValue:(0,c.SU)(b),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.dq)(b)?b.value=e:null),title:"下载数据集",width:"80%",onClose:W},{default:(0,u.w5)((()=>[(0,u.Wm)(h,{ref_key:"formRef",ref:U,"label-width":"auto",model:(0,c.SU)(T),rules:(0,c.SU)(k)},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{label:"数据集地址",prop:"persion_input_model_src"},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{modelValue:(0,c.SU)(T).persion_input_model_src,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(T).persion_input_model_src=e),placeholder:"数据集地址(数据集下载完成后，要点击“应用”才可以添加在容器里面)"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(d,{label:"数据集分类",prop:"model_type"},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{modelValue:(0,c.SU)(T).model_type,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(T).model_type=e),filterable:"",placeholder:"选择数据集保存到的分类",class:"contianer-name-helf"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(V),(e=>((0,u.wg)(),(0,u.j4)(m,{key:e.type_key,label:e.name,value:e.type_key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(f,{effect:"dark",content:"外部下载的数据集，请选择数据集的分类，不选择时默认保存在数据集的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,u.w5)((()=>[(0,u.Wm)(p,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,u.Wm)(d,null,{label:(0,u.w5)((()=>[])),default:(0,u.w5)((()=>[(0,u.Wm)(v,{type:"primary",onClick:C},{default:(0,u.w5)((()=>[(0,u.Uk)(" 下载 ")])),_:1}),(0,u.Wm)(v,{onClick:W},{default:(0,u.w5)((()=>[(0,u.Uk)("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,u.Wm)(_["default"],{list:(0,c.SU)(Z),"container-id":(0,c.SU)(T).container_id,onReload:S},null,8,["list","container-id"])])),_:1},8,["modelValue"])}}};function v(e){e.__source="src/views/gpumarket/myhosts/components/download_dataset_dialog.vue"}var h=n(83744);"function"===typeof v&&v(f);const y=(0,h.Z)(f,[["__scopeId","data-v-415193ef"]]);var w=y}}]);