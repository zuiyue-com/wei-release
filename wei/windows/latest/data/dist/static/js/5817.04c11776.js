/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5817,8123],{81464:function(e,t,a){a.d(t,{Z:function(){return r}});var o=a(81095),l=a(26593);function n(e){o.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function s(e){o.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function r(e){const{isSupported:t,copy:a}=(0,l.VPI)();t||(0,l.gIw)("clipboard-write"),a(e).then((()=>{n(e)})).catch((t=>{console.log(t),s(e)}))}},20681:function(e,t,a){a.d(t,{Z:function(){return l}});var o=a(95965);function l(){const{startIntervalTimer:e,stopIntervalTimer:t}=(0,o.Z)();let a,l,n={};function s(o,l,s,r,i,u){const c=o.filter((e=>e[s].showProcess));n={},t(a),0!==c.length&&(a=e((async()=>{const e=c.map((e=>e[l])),{body:{list:t}}=await i(e);let a=!1;for(const o in t){const{stop:e,progress_num:i,progress_text:u}=t[o],c=r.value.find((e=>e[l]===o));c[s].progress_num||(c[s].progress_num=0);const d=parseInt(i);d>c[s].progress_num&&(c[s].progress_num=d,c[s].progress_text=u,n[o]={progress_num:d,progress_text:u}),e&&(a=!0)}a&&u()})))}function r(a,o,s,r,i){const u=a.filter((e=>e[s].time_flash_list));t(l),0!==u.length&&(l=e((async()=>{const{body:e}=await i();for(const t in n){const a=n[t],l=e.find((e=>e[o]===t));l&&Object.assign(l[s],a)}r.value=e;const a=e.filter((e=>e[s].time_flash_list));a.length<=0&&t(l)}),5e3))}function i(){t(a),t(l)}return{startLoadProgress:s,startReloadList:r,stopTimer:i}}},42238:function(e,t,a){a.d(t,{Z:function(){return s}});var o=a(22201),l=a(2262),n=a(66252);function s(e){const t=(0,o.yj)(),a=(0,l.iH)(t.params.id);return(0,n.YP)((()=>t.params.id),(()=>{t.params.id?(a.value=t.params.id,e()):a.value=""})),{paramsId:a}}},48123:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=a(66252),l=a(2262),n=a(81464),s={__name:"index",props:{text:{type:String,default:""}},setup(e){return(t,a)=>{const s=(0,o.up)("vab-icon");return(0,o.wg)(),(0,o.j4)(s,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:a[0]||(a[0]=t=>(0,l.SU)(n.Z)(e.text))})}}};function r(e){e.__source="src/components/ClipboardButton/index.vue"}"function"===typeof r&&r(s);const i=s;var u=i},20355:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var o=a(73481),l=(a(3241),a(62029),a(20129)),n=(a(69840),a(15659)),s=(a(10444),a(6589),a(47820)),r=(a(50986),a(61715),a(66252)),i=a(2262),u=a(23471),c=a(85026);const d={class:"w-full flex flex-justify-center"};var _={__name:"apply_dataset_dialog",setup(e,{expose:t}){const a=(0,r.f3)("$pub"),_=(0,r.f3)("$baseMessage"),m=(0,i.iH)(!1),p=(0,i.iH)({...c.U$}),f=(0,i.iH)({client_id:"",host_model_id:""}),y=(0,i.iH)({container_id:"",host_model_id:""});function v(e,t){t?(f.value={client_id:e,host_model_id:t},y.value={container_id:"",host_model_id:t},m.value=!0,b()):_("数据集不能为空","error","vab-hey-message-error")}function w(){m.value=!1,h.value.resetFields()}const g=(0,i.iH)([]);async function b(){const{body:{list:e}}=await(0,u.IF)(f.value.client_id);g.value=e}const h=(0,i.iH)();async function k(){await h.value.validate((async(e,t)=>{if(!e)return!1;await(0,u.KD)(f.value,y.value),m.value=!1,_("下载数据集成功","success","vab-hey-message-success"),a("reload-dataset-list")}))}return t({showDialog:v}),(e,t)=>{const a=s.BT,u=s.km,c=l.nH,_=n.ElButton,f=l.ly,v=o.d0;return(0,r.wg)(),(0,r.j4)(v,{modelValue:(0,i.SU)(m),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,i.dq)(m)?m.value=e:null),title:"应用数据集",width:"30%",onClose:w},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{ref_key:"formRef",ref:h,"label-width":"auto",model:(0,i.SU)(y),rules:(0,i.SU)(p)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{label:"选择容器",prop:"container_id"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:(0,i.SU)(y).container_id,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.SU)(y).container_id=e),filterable:"",placeholder:"选择用户此设备上的容器",class:"contianer-name-helf"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(g),(e=>((0,r.wg)(),(0,r.j4)(a,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r._)("div",d,[(0,r.Wm)(_,{type:"primary",onClick:k},{default:(0,r.w5)((()=>[(0,r.Uk)(" 保存 ")])),_:1}),(0,r.Wm)(_,{onClick:w},{default:(0,r.w5)((()=>[(0,r.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function m(e){e.__source="src/views/gpumarket/mydevice/components/apply_dataset_dialog.vue"}"function"===typeof m&&m(_);const p=_;var f=p},5817:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var o=a(3837),l=(a(3241),a(81010),a(76128)),n=(a(74828),a(50591)),s=(a(89035),a(15659)),r=(a(10444),a(32018)),i=(a(46160),a(10661)),u=(a(35095),a(50363),a(66252)),c=a(2262),d=a(3577),_=a(96486),m=a(23471),p=a(48123),f=a(20681),y=a(42238),v=a(20355),w=a(95965);const g={class:"el-progress-action"};var b={__name:"dataset_list",setup(e){const{startLoadProgress:t,startReloadList:a,stopTimer:b}=(0,f.Z)(),{startTimeoutTimer:h}=(0,w.Z)(),k=(0,u.f3)("$baseMessage"),W=(0,u.f3)("$sub"),U=(0,u.f3)("$unsub"),C=(0,c.iH)([]),x=(0,u.Fl)((()=>C.value.map((e=>(e.format_model_file_name=(0,_.truncate)(e.model_file_name,{length:45,separator:"..."}),e))))),{paramsId:j}=(0,y.Z)((()=>{b(),H()}));async function H(){const{body:e}=await(0,m.ak)(j.value);C.value=e,t(e,"model_id","model_operation_array",C,m.vQ,H),a(e,"model_id","model_operation_array",C,(()=>(0,m.vQ)(j.value)))}async function S(e){if(!e)return void k("无法下载此数据集","error","vab-hey-message-error");const t={client_id:j.value,create_from_where:"model_list",model_thread_id:e,persion_input_model_src:"",model_type:""};await(0,m.zB)(t),k("下载数据集成功","success","vab-hey-message-success"),h((()=>{H()}))}W("reload-dataset-list",(()=>{b(),H()})),(0,u.bv)((()=>{H()})),(0,u.Ah)((()=>{b(),U("reload-dataset-list")}));const $=(0,c.iH)();async function I(e){$.value.showDialog(j.value,e)}async function Z(e){await(0,m.Zt)(e),k("删除数据集成功","success","vab-hey-message-success"),h((()=>{H()}))}async function z(e){await(0,m.Nq)(e),k("取消收藏成功","success","vab-hey-message-success"),h((()=>{H()}))}return(e,t)=>{const a=o.$Y,_=i.Q0,m=(0,u.up)("vab-icon"),f=r.Xh,y=s.ElButton,w=n.i1,b=l.GT,h=o.eI;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(h,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:(0,c.SU)(x),"row-key":"model_id",class:"data-list"},{empty:(0,u.w5)((()=>[(0,u.Wm)(b,{class:"vab-data-empty",description:"没发现本机有数据集，请到数据集市场上收藏心仪的数据集，然后就能在这里下载，并应用了"})])),default:(0,u.w5)((()=>[(0,u.Wm)(a,{label:"分类",prop:"model_type_str",sortable:""}),(0,u.Wm)(a,{label:"数据集文件名",prop:"model_file_name"},{default:(0,u.w5)((({row:e})=>[(0,u.Wm)(_,{placement:"top",content:e.model_file_name},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.format_model_file_name),1)])),_:2},1032,["content"]),(0,u.Wm)((0,c.SU)(p["default"]),{text:e.model_file_name},null,8,["text"])])),_:1}),(0,u.Wm)(a,{label:"大小",prop:"model_size"}),(0,u.Wm)(a,{label:"创建时间",prop:"model_create_time_ago"}),(0,u.Wm)(a,{label:"所属",prop:"model_owner_str",sortable:""}),(0,u.Wm)(a,{label:"状态",prop:"model_status_str"},{default:(0,u.w5)((({row:e})=>[(0,u.Uk)((0,d.zw)(e.model_status_str)+" ",1),e.model_hint?((0,u.wg)(),(0,u.j4)(_,{key:0,placement:"top",content:e.model_hint},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{icon:"error-warning-line",style:(0,d.j5)({color:"var(--el-color-danger)"})},null,8,["style"])])),_:2},1032,["content"])):(0,u.kq)("",!0)])),_:1}),(0,u.Wm)(a,{label:"位置",prop:"model_where_str",sortable:""}),(0,u.Wm)(a,{label:"操作",prop:"truedata"},{default:(0,u.w5)((({row:e})=>[(0,u._)("div",g,[e.model_operation_array.showProcess?((0,u.wg)(),(0,u.j4)(f,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.model_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,u.wg)(),(0,u.iD)(u.HY,{key:1},[e.model_operation_array.showPullButtun?((0,u.wg)(),(0,u.j4)(y,{key:0,type:"primary",size:"small",onClick:t=>S(e.model_forum_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 下载 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0),e.model_operation_array.canApply?((0,u.wg)(),(0,u.j4)(y,{key:1,type:"primary",size:"small",onClick:t=>I(e.model_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 应用 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0)],64)),e.model_operation_array.delete?((0,u.wg)(),(0,u.j4)(w,{key:2,title:"确定删除此数据集吗？",onConfirm:t=>Z(e.model_id)},{reference:(0,u.w5)((()=>[(0,u.Wm)(y,{type:"danger",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,u.kq)("",!0),e.model_operation_array.delete_fav&&e.model_favid?((0,u.wg)(),(0,u.j4)(w,{key:3,title:"确定取消收藏此镜像？",onConfirm:t=>z(e.model_favid)},{reference:(0,u.w5)((()=>[(0,u.Wm)(y,{type:"warning",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,u.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,u.Wm)(v["default"],{ref_key:"applyDatasetDialogRef",ref:$},null,512)],64)}}};function h(e){e.__source="src/views/gpumarket/mydevice/components/dataset_list.vue"}var k=a(83744);"function"===typeof h&&h(b);const W=(0,k.Z)(b,[["__scopeId","data-v-1e9457cd"]]);var U=W}}]);