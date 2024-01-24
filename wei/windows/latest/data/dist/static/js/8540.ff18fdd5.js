/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 16:34:29
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8540],{20681:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(95965);function a(){const{startIntervalTimer:e,stopIntervalTimer:t}=(0,r.Z)();let n,a,o={};function s(r,a,s,l,i,u){const d=r.filter((e=>e[s].showProcess));o={},t(n),0!==d.length&&(n=e((async()=>{const e=d.map((e=>e[a])),{body:{list:t}}=await i(e);let n=!1;for(const r in t){const{stop:e,progress_num:i,progress_text:u}=t[r],d=l.value.find((e=>e[a]===r));d[s].progress_num||(d[s].progress_num=0);const c=parseInt(i);c>d[s].progress_num&&(d[s].progress_num=c,d[s].progress_text=u,o[r]={progress_num:c,progress_text:u}),e&&(n=!0)}n&&u()})))}function l(n,r,s,l,i){const u=n.filter((e=>e[s].time_flash_list));t(a),0!==u.length&&(a=e((async()=>{const{body:e}=await i();for(const t in o){const n=o[t],a=e.find((e=>e[r]===t));a&&Object.assign(a[s],n)}l.value=e;const n=e.filter((e=>e[s].time_flash_list));n.length<=0&&t(a)}),5e3))}function i(){t(n),t(a)}return{startLoadProgress:s,startReloadList:l,stopTimer:i}}},95965:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(23279),a=n.n(r);function o(){function e(e,t=3e3){return setInterval((()=>{e()}),t)}function t(e){e&&clearInterval(e)}function n(e,t=1e4){return setTimeout((()=>{e()}),t)}function r(e,t=3e3){a()((()=>{e()}),t)()}return{startIntervalTimer:e,stopIntervalTimer:t,startTimeoutTimer:n,startDebounce:r}}},85026:function(e,t,n){n.d(t,{$j:function(){return s},MH:function(){return o},U$:function(){return u},Y2:function(){return r},bT:function(){return a},f_:function(){return i},wH:function(){return l}});const r={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},a={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},o={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},s={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},l={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},88540:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(73481),a=(n(3241),n(62029),n(20129)),o=(n(69840),n(15659)),s=(n(10444),n(10661)),l=(n(35095),n(47820)),i=(n(50986),n(61715),n(6589),n(57018)),u=(n(74367),n(66252)),d=n(2262),c=n(71726),m=n(85026),_=n(96607),p=n(20681),f=n(95965),g={__name:"download_model_dialog",setup(e,{expose:t}){const{startTimeoutTimer:n}=(0,f.Z)(),{startLoadProgress:g,startReloadList:y,stopTimer:w}=(0,p.Z)(),v=(0,u.f3)("$pub"),h=(0,u.f3)("$baseMessage"),k=(0,d.iH)(!1),b=(0,d.iH)({...m.$j}),U=(0,d.iH)(),W=()=>({container_id:"",create_from_where:"extra_path",model_thread_id:"0",persion_input_model_src:"",model_type:""}),q=(0,d.iH)({...W()});function C(e){k.value=!0,q.value.container_id=e,H(),x(e)}function S(){q.value={...W()},k.value=!1,j.value=[],U.value.resetFields(),w()}function I(){n((()=>{x(q.value.container_id)}))}const T=(0,d.iH)([]);async function H(){const{body:e}=await(0,c.oh)();T.value=e}const j=(0,d.iH)([]);async function x(e){const{body:t}=await(0,c.C0)(e);j.value=t,g(t,"model_id","model_operation_array",j,c.e$,(()=>{x(e)})),y(t,"model_id","model_operation_array",j,(()=>(0,c.C0)(e)))}async function V(){await U.value.validate((async(e,t)=>{if(!e)return!1;const n=await(0,c._S)(q.value);h(n.msg,"success","vab-hey-message-success");const r=q.value.container_id;U.value.resetFields(),q.value.container_id=r,k.value=!1,v("reload-my-docker-list")}))}return t({showDialog:C}),(e,t)=>{const n=i.EZ,c=a.nH,m=l.BT,p=l.km,f=(0,u.up)("vab-icon"),g=s.Q0,y=o.ElButton,w=a.ly,v=r.d0;return(0,u.wg)(),(0,u.j4)(v,{modelValue:(0,d.SU)(k),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,d.dq)(k)?k.value=e:null),title:"下载模型",width:"80%",onClose:S},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{ref_key:"formRef",ref:U,"label-width":"auto",model:(0,d.SU)(q),rules:(0,d.SU)(b)},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{label:"模型地址",prop:"persion_input_model_src"},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{modelValue:(0,d.SU)(q).persion_input_model_src,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,d.SU)(q).persion_input_model_src=e),placeholder:"模型地址(模型下载完成后，要点击“应用”才可以添加在容器里面)"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(c,{label:"模型分类",prop:"model_type"},{default:(0,u.w5)((()=>[(0,u.Wm)(p,{modelValue:(0,d.SU)(q).model_type,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,d.SU)(q).model_type=e),filterable:"",placeholder:"选择模型保存到的分类",class:"contianer-name-helf"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(T),(e=>((0,u.wg)(),(0,u.j4)(m,{key:e.type_key,label:e.name,value:e.type_key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(g,{effect:"dark",content:"外部下载的模型，请选择模型的分类，不选择时默认保存在模型的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,u.w5)((()=>[(0,u.Wm)(f,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,u.Wm)(c,null,{label:(0,u.w5)((()=>[])),default:(0,u.w5)((()=>[(0,u.Wm)(y,{type:"primary",onClick:V},{default:(0,u.w5)((()=>[(0,u.Uk)(" 下载 ")])),_:1}),(0,u.Wm)(y,{onClick:S},{default:(0,u.w5)((()=>[(0,u.Uk)("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,u.Wm)(_["default"],{list:(0,d.SU)(j),"container-id":(0,d.SU)(q).container_id,onReload:I},null,8,["list","container-id"])])),_:1},8,["modelValue"])}}};function y(e){e.__source="src/views/gpumarket/myhosts/components/download_model_dialog.vue"}var w=n(83744);"function"===typeof y&&y(g);const v=(0,w.Z)(g,[["__scopeId","data-v-3c047cf6"]]);var h=v},96607:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(3837),a=(n(3241),n(81010),n(50591)),o=(n(89035),n(15659)),s=(n(10444),n(32018)),l=(n(46160),n(10661)),i=(n(35095),n(50363),n(66252)),u=n(2262),d=n(3577),c=n(48123),m=n(96486),_=n(71726);const p=e=>((0,i.dD)("data-v-63da1196"),e=e(),(0,i.Cn)(),e),f=p((()=>(0,i._)("h3",null,"模型列表",-1))),g={class:"el-progress-action"},y=p((()=>(0,i._)("div",null," 没发现本机有容器，请到容器市场上收藏心仪的容器，然后就能在这里下载，并应用了 ",-1)));var w={__name:"model_list",props:{list:{type:Array,default:()=>[]},containerId:{type:[String,Number],default:0}},emits:["reload"],setup(e,{emit:t}){const n=e,p=(0,i.f3)("$baseMessage"),w=(0,i.Fl)((()=>n.list.map((e=>(e.format_model_file_name=(0,m.truncate)(e.model_file_name,{length:45,separator:"..."}),e)))));(0,u.iH)([]);async function v(e){if(!e)return void p("无法下载此模型","error","vab-hey-message-error");const r={container_id:n.containerId,create_from_where:"model_list",model_thread_id:e,persion_input_model_src:"",model_type:""},a=await(0,_._S)(r);p(a.msg,"success","vab-hey-message-success"),t("reload")}async function h(e){const r={container_id:n.containerId,host_model_id:e},a=await(0,_.LN)(r);p(a.msg,"success","vab-hey-message-success"),t("reload")}async function k(e){await(0,_.S1)(e),p("删除模型成功","success","vab-hey-message-success"),t("reload")}async function b(e){await(0,_.Pb)(e),p("取消收藏成功","success","vab-hey-message-success"),t("reload")}return(e,t)=>{const n=r.$Y,m=l.Q0,_=s.Xh,p=o.ElButton,U=a.i1,W=r.eI;return(0,i.wg)(),(0,i.iD)("div",null,[f,(0,i.Wm)(W,{data:(0,u.SU)(w),class:"model-list"},{empty:(0,i.w5)((()=>[y])),default:(0,i.w5)((()=>[(0,i.Wm)(n,{label:"分类",prop:"model_type_str",sortable:""}),(0,i.Wm)(n,{label:"容器文件名",prop:"model_file_name"},{default:(0,i.w5)((({row:e})=>[(0,i.Wm)(m,{placement:"top",content:e.model_file_name},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(e.format_model_file_name),1)])),_:2},1032,["content"]),(0,i.Wm)((0,u.SU)(c["default"]),{text:e.model_file_name},null,8,["text"])])),_:1}),(0,i.Wm)(n,{label:"状态",prop:"model_status_str",sortable:""}),(0,i.Wm)(n,{label:"位置",prop:"model_where_str",sortable:""}),(0,i.Wm)(n,{label:"操作",prop:"truedata"},{default:(0,i.w5)((({row:e})=>[(0,i._)("div",g,[e.model_operation_array.showProcess?((0,i.wg)(),(0,i.j4)(_,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.model_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[e.model_operation_array.showPullButtun?((0,i.wg)(),(0,i.j4)(p,{key:0,type:"primary",size:"small",onClick:t=>v(e.model_forum_id)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 下载 ")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),e.model_operation_array.canApply?((0,i.wg)(),(0,i.j4)(p,{key:1,type:"primary",size:"small",onClick:t=>h(e.model_id)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 应用 ")])),_:2},1032,["onClick"])):(0,i.kq)("",!0)],64)),e.model_operation_array.delete?((0,i.wg)(),(0,i.j4)(U,{key:2,title:"确定删除此模型吗？",onConfirm:t=>k(e.model_id)},{reference:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,i.kq)("",!0),e.model_operation_array.delete_fav&&e.model_favid?((0,i.wg)(),(0,i.j4)(U,{key:3,title:"确定取消收藏此镜像？",onConfirm:t=>b(e.model_favid)},{reference:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"warning",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,i.kq)("",!0)])])),_:1})])),_:1},8,["data"])])}}};function v(e){e.__source="src/views/gpumarket/myhosts/components/model_list.vue"}var h=n(83744);"function"===typeof v&&v(w);const k=(0,h.Z)(w,[["__scopeId","data-v-63da1196"]]);var b=k}}]);