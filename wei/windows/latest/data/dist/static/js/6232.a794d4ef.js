/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6232],{40560:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});var t=a(73481),o=(a(3241),a(62029),a(20129)),n=(a(69840),a(15659)),r=(a(10444),a(6589),a(47820)),s=(a(50986),a(61715),a(66252)),i=a(2262),d=a(23471),m=a(85026);const u={class:"w-full flex flex-justify-center"};var _={__name:"apply_model_dialog",setup(e,{expose:l}){const a=(0,s.f3)("$pub"),_=(0,s.f3)("$baseMessage"),c=(0,i.iH)(!1),f=(0,i.iH)({...m.wH}),p=(0,i.iH)({client_id:"",host_model_id:""}),w=(0,i.iH)({container_id:"",host_model_id:""});function y(e,l){l?(p.value={client_id:e,host_model_id:l},w.value={container_id:"",host_model_id:l},c.value=!0,k()):_("模型不能为空","error","vab-hey-message-error")}function v(){c.value=!1,b.value.resetFields()}const g=(0,i.iH)([]);async function k(){const{body:{list:e}}=await(0,d.Bs)(p.value.client_id);g.value=e}const b=(0,i.iH)();async function h(){await b.value.validate((async(e,l)=>{if(!e)return!1;const t=await(0,d.LN)(p.value,w.value);c.value=!1,_(t.msg,"success","vab-hey-message-success"),a("reload-model-list")}))}return l({showDialog:y}),(e,l)=>{const a=r.BT,d=r.km,m=o.nH,_=n.ElButton,p=o.ly,y=t.d0;return(0,s.wg)(),(0,s.j4)(y,{modelValue:(0,i.SU)(c),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,i.dq)(c)?c.value=e:null),title:"应用模型",width:"30%",onClose:v},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{ref_key:"formRef",ref:b,"label-width":"auto",model:(0,i.SU)(w),rules:(0,i.SU)(f)},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{label:"选择容器",prop:"container_id"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{modelValue:(0,i.SU)(w).container_id,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,i.SU)(w).container_id=e),filterable:"",placeholder:"选择用户此设备上的容器",class:"contianer-name-helf"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(g),(e=>((0,s.wg)(),(0,s.j4)(a,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s.Wm)(_,{type:"primary",onClick:h},{default:(0,s.w5)((()=>[(0,s.Uk)(" 保存 ")])),_:1}),(0,s.Wm)(_,{onClick:v},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function c(e){e.__source="src/views/gpumarket/mydevice/components/apply_model_dialog.vue"}"function"===typeof c&&c(_);const f=_;var p=f},56232:function(e,l,a){a.r(l),a.d(l,{default:function(){return U}});var t=a(3837),o=(a(3241),a(81010),a(76128)),n=(a(74828),a(50591)),r=(a(89035),a(15659)),s=(a(10444),a(32018)),i=(a(46160),a(10661)),d=(a(35095),a(50363),a(66252)),m=a(2262),u=a(3577),_=a(96486),c=a(23471),f=a(48123),p=a(20681),w=a(42238),y=a(40560),v=a(95965);const g={class:"el-progress-action"};var k={__name:"model_list",setup(e){const{startLoadProgress:l,startReloadList:a,stopTimer:k}=(0,p.Z)(),{startTimeoutTimer:b}=(0,v.Z)(),h=(0,d.f3)("$baseMessage"),W=(0,d.f3)("$sub"),U=(0,d.f3)("$unsub"),C=(0,m.iH)([]),H=(0,d.Fl)((()=>C.value.map((e=>(e.format_model_file_name=(0,_.truncate)(e.model_file_name,{length:45,separator:"..."}),e))))),{paramsId:j}=(0,w.Z)((()=>{k(),S()}));async function S(){const{body:e}=await(0,c.SI)(j.value);C.value=e,l(e,"model_id","model_operation_array",C,c.e$,S),a(e,"model_id","model_operation_array",C,(()=>(0,c.SI)(j.value)))}async function z(e){if(!e)return void h("无法下载此模型","error","vab-hey-message-error");const l={client_id:j.value,create_from_where:"model_list",model_thread_id:e,persion_input_model_src:"",model_type:""},a=await(0,c.QC)(l);h(a.msg,"success","vab-hey-message-success"),b((()=>{S()}))}W("reload-model-list",(()=>{k(),S()})),(0,d.bv)((()=>{S()})),(0,d.Ah)((()=>{k(),U("reload-model-list")}));const $=(0,m.iH)();async function x(e){$.value.showDialog(j.value,e)}async function q(e){await(0,c.$u)(e),h("删除模型成功","success","vab-hey-message-success"),b((()=>{S()}))}async function D(e){await(0,c.Pb)(e),h("取消收藏成功","success","vab-hey-message-success"),b((()=>{S()}))}return(e,l)=>{const a=t.$Y,_=i.Q0,c=(0,d.up)("vab-icon"),p=s.Xh,w=r.ElButton,v=n.i1,k=o.GT,b=t.eI;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(b,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:(0,m.SU)(H),"row-key":"model_id",class:"data-list"},{empty:(0,d.w5)((()=>[(0,d.Wm)(k,{class:"vab-data-empty",description:"没发现本机有模型，请到模型市场上收藏心仪的模型，然后就能在这里下载，并应用了"})])),default:(0,d.w5)((()=>[(0,d.Wm)(a,{label:"分类",prop:"model_type_str",sortable:""}),(0,d.Wm)(a,{label:"模型文件名",prop:"model_file_name"},{default:(0,d.w5)((({row:e})=>[(0,d.Wm)(_,{placement:"top",content:e.model_file_name},{default:(0,d.w5)((()=>[(0,d.Uk)((0,u.zw)(e.format_model_file_name),1)])),_:2},1032,["content"]),(0,d.Wm)((0,m.SU)(f["default"]),{text:e.model_file_name},null,8,["text"])])),_:1}),(0,d.Wm)(a,{label:"大小",prop:"model_size"}),(0,d.Wm)(a,{label:"创建时间",prop:"model_create_time_ago"}),(0,d.Wm)(a,{label:"所属",prop:"model_owner_str",sortable:""}),(0,d.Wm)(a,{label:"状态",prop:"model_status_str"},{default:(0,d.w5)((({row:e})=>[(0,d.Uk)((0,u.zw)(e.model_status_str)+" ",1),e.model_hint?((0,d.wg)(),(0,d.j4)(_,{key:0,placement:"top",content:e.model_hint},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{icon:"error-warning-line",style:(0,u.j5)({color:"var(--el-color-danger)"})},null,8,["style"])])),_:2},1032,["content"])):(0,d.kq)("",!0)])),_:1}),(0,d.Wm)(a,{label:"位置",prop:"model_where_str",sortable:""}),(0,d.Wm)(a,{label:"操作",prop:"truedata"},{default:(0,d.w5)((({row:e})=>[(0,d._)("div",g,[e.model_operation_array.showProcess?((0,d.wg)(),(0,d.j4)(p,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.model_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,d.wg)(),(0,d.iD)(d.HY,{key:1},[e.model_operation_array.showPullButtun?((0,d.wg)(),(0,d.j4)(w,{key:0,type:"primary",size:"small",onClick:l=>z(e.model_forum_id)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 下载 ")])),_:2},1032,["onClick"])):(0,d.kq)("",!0),e.model_operation_array.canApply?((0,d.wg)(),(0,d.j4)(w,{key:1,type:"primary",size:"small",onClick:l=>x(e.model_id)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 应用 ")])),_:2},1032,["onClick"])):(0,d.kq)("",!0)],64)),e.model_operation_array.delete?((0,d.wg)(),(0,d.j4)(v,{key:2,title:"确定删除此模型吗？",onConfirm:l=>q(e.model_id)},{reference:(0,d.w5)((()=>[(0,d.Wm)(w,{type:"danger",size:"small"},{default:(0,d.w5)((()=>[(0,d.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,d.kq)("",!0),e.model_operation_array.delete_fav&&e.model_favid?((0,d.wg)(),(0,d.j4)(v,{key:3,title:"确定取消收藏此镜像？",onConfirm:l=>D(e.model_favid)},{reference:(0,d.w5)((()=>[(0,d.Wm)(w,{type:"warning",size:"small"},{default:(0,d.w5)((()=>[(0,d.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,d.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,d.Wm)(y["default"],{ref_key:"applyModelDialogRef",ref:$},null,512)],64)}}};function b(e){e.__source="src/views/gpumarket/mydevice/components/model_list.vue"}var h=a(83744);"function"===typeof b&&b(k);const W=(0,h.Z)(k,[["__scopeId","data-v-df642674"]]);var U=W}}]);