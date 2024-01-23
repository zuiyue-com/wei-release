/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 18:46:50
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6436,8123,9884,3019,689],{81464:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(81095),o=a(26593);function r(e){n.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function s(e){n.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function i(e){const{isSupported:t,copy:a}=(0,o.VPI)();t||(0,o.gIw)("clipboard-write"),a(e).then((()=>{r(e)})).catch((t=>{console.log(t),s(e)}))}},20681:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(95965);function o(){const{startIntervalTimer:e,stopIntervalTimer:t}=(0,n.Z)();let a,o,r={};function s(n,o,s,i,l,c){const u=n.filter((e=>e[s].showProcess));r={},t(a),0!==u.length&&(a=e((async()=>{const e=u.map((e=>e[o])),{body:{list:t}}=await l(e);let a=!1;for(const n in t){const{stop:e,progress_num:l,progress_text:c}=t[n],u=i.value.find((e=>e[o]===n));u[s].progress_num||(u[s].progress_num=0);const d=parseInt(l);d>u[s].progress_num&&(u[s].progress_num=d,u[s].progress_text=c,r[n]={progress_num:d,progress_text:c}),e&&(a=!0)}a&&c()})))}function i(a,n,s,i,l){const c=a.filter((e=>e[s].time_flash_list));t(o),0!==c.length&&(o=e((async()=>{const{body:e}=await l();for(const t in r){const a=r[t],o=e.find((e=>e[n]===t));o&&Object.assign(o[s],a)}i.value=e;const a=e.filter((e=>e[s].time_flash_list));a.length<=0&&t(o)}),5e3))}function l(){t(a),t(o)}return{startLoadProgress:s,startReloadList:i,stopTimer:l}}},48432:function(e,t,a){a.d(t,{Z:function(){return s}});a(57658);var n=a(2262),o=a(66252),r=a(26010);function s(e=!1){const t=(0,n.iH)({page:1}),a=(0,n.iH)([]),s=(0,n.qj)({pageSize:1,total:1,isFinished:!1,isLoading:!1});let i;const l=(0,o.Fl)((()=>s.isLoading?"loading":s.isFinished?"nomore":"loadmore"));function c(){return t.value.page=1,a.value=[],s.isFinished=!1,d(i)}function u(){if(!s.isFinished&&!s.isLoading)return t.value.page++,d(i)}function d(n){return i=n,s.isLoading=!0,n().then((({body:n})=>{const{list:o,page_perpage:i,page_allcount:l}=n;return e?a.value.push(...o||[]):a.value=o||[],s.pageSize=parseInt(i),s.total=parseInt(l),(0,r.Gc)(t.value.page,s.pageSize,s.total)?s.isFinished=!0:s.isFinished=!1,n})).finally((()=>{s.isLoading=!1}))}return{queryForm:t,dataList:a,pagination:s,loadMoreStatus:l,pullDownRefresh:c,reachBottom:u,loadData:d}}},95965:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(23279),o=a.n(n);function r(){function e(e,t=3e3){return setInterval((()=>{e()}),t)}function t(e){e&&clearInterval(e)}function a(e,t=1e4){return setTimeout((()=>{e()}),t)}function n(e,t=3e3){o()((()=>{e()}),t)()}return{startIntervalTimer:e,stopIntervalTimer:t,startTimeoutTimer:a,startDebounce:n}}},48123:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(66252),o=a(2262),r=a(81464),s={__name:"index",props:{text:{type:String,default:""}},setup(e){return(t,a)=>{const s=(0,n.up)("vab-icon");return(0,n.wg)(),(0,n.j4)(s,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:a[0]||(a[0]=t=>(0,o.SU)(r.Z)(e.text))})}}};function i(e){e.__source="src/components/ClipboardButton/index.vue"}"function"===typeof i&&i(s);const l=s;var c=l},28068:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(49676),o=(a(3241),a(73204),a(3837)),r=(a(81010),a(76128)),s=(a(74828),a(50591)),i=(a(89035),a(15659)),l=(a(10444),a(32018)),c=(a(46160),a(10661)),u=(a(35095),a(50363),a(66252)),d=a(3577),p=a(2262),_=a(48123),m=a(16800),f=a(95965),g=a(23471);const y={m:"4"},w={m:"t-0 b-2"},v={m:"t-0 b-2"},h={m:"t-0 b-2"},b={class:"el-progress-action"};var k={__name:"docker_list",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change-page","reload"],setup(e,{emit:t}){const a=(0,u.f3)("$baseMessage"),{startTimeoutTimer:k}=(0,f.Z)();function W(e){t("change-page",e)}const U=(0,p.iH)();async function S(e){U.value.showDialog(e)}async function x(e,n){await(0,g.ET)(e,n),a("开启容器成功","success","vab-hey-message-success"),k((()=>{t("reload")}))}async function I(e,n){await(0,g.U$)(e,n),a("停止容器成功","success","vab-hey-message-success"),k((()=>{t("reload")}))}async function Z(e,n){await(0,g.BX)(e,n),a("删除容器成功","success","vab-hey-message-success"),k((()=>{t("reload")}))}return(t,a)=>{const f=o.$Y,g=c.Q0,k=l.Xh,z=i.ElButton,C=s.i1,T=r.GT,j=o.eI,D=n.R;return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(j,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,"row-key":"ct_id",class:"data-list"},{empty:(0,u.w5)((()=>[(0,u.Wm)(T,{class:"vab-data-empty",description:"暂无容器，请到“算力市场”选择主机创建容器"})])),default:(0,u.w5)((()=>[(0,u.Wm)(f,{type:"expand",fixed:""},{default:(0,u.w5)((({row:e})=>[(0,u._)("div",y,[(0,u._)("p",w," GPU："+(0,d.zw)(e.ct_host_gpu_name)+" * "+(0,d.zw)(e.ct_gpu_count),1),(0,u._)("p",v,"CPU："+(0,d.zw)(e.ct_host_cpu_name)+" * 1",1),(0,u._)("p",h,"硬盘："+(0,d.zw)(e.ct_host_disk_type_str),1)])])),_:1}),(0,u.Wm)(f,{label:"主机UUID",prop:"ct_host_name",sortable:""},{default:(0,u.w5)((({row:e})=>[(0,u.Wm)(g,{effect:"dark",content:e.ct_host_name,placement:"top"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.format_ct_host_name),1)])),_:2},1032,["content"]),(0,u.Wm)((0,p.SU)(_["default"]),{text:e.ct_host_name},null,8,["text"])])),_:1}),(0,u.Wm)(f,{label:"容器名称",prop:"ct_name"},{default:(0,u.w5)((({row:e})=>[(0,u.Uk)((0,d.zw)(e.ct_name)+" ",1),(0,u.Wm)((0,p.SU)(_["default"]),{text:e.ct_name},null,8,["text"])])),_:1}),(0,u.Wm)(f,{label:"基于镜像",prop:"ct_image_ci_name",sortable:""},{default:(0,u.w5)((({row:e})=>[(0,u.Wm)(g,{effect:"dark",content:e.ct_image_ci_name,placement:"top"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.format_ct_image_ci_name),1)])),_:2},1032,["content"]),(0,u.Wm)((0,p.SU)(_["default"]),{text:e.ct_image_ci_name},null,8,["text"])])),_:1}),(0,u.Wm)(f,{label:"状态",prop:"ct_use_status_str"}),(0,u.Wm)(f,{label:"主机",prop:"ct_host_status_str"}),(0,u.Wm)(f,{label:"操作",prop:"truedata"},{default:(0,u.w5)((({row:e})=>[(0,u._)("div",b,[e.ct_operation_array.showProcess?((0,u.wg)(),(0,u.j4)(k,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.ct_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,u.wg)(),(0,u.iD)(u.HY,{key:1},[e.ct_operation_array.download_model?((0,u.wg)(),(0,u.j4)(z,{key:0,type:"primary",size:"small",onClick:t=>S(e.ct_host_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 下载模型 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0),e.ct_operation_array.download_dataset?((0,u.wg)(),(0,u.j4)(z,{key:1,type:"primary",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)(" 数据集 ")])),_:1})):(0,u.kq)("",!0),e.ct_operation_array.startContainer?((0,u.wg)(),(0,u.j4)(z,{key:2,type:"primary",size:"small",onClick:t=>x(e.ct_host_id,e.ct_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 开启 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0),e.ct_operation_array.stopContainer?((0,u.wg)(),(0,u.j4)(z,{key:3,type:"warning",size:"small",onClick:t=>I(e.ct_host_id,e.ct_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 停止 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0)],64)),e.ct_operation_array.delete?((0,u.wg)(),(0,u.j4)(C,{key:2,title:"确定删除此容器吗？",onConfirm:t=>Z(e.ct_host_id,e.ct_id)},{reference:(0,u.w5)((()=>[(0,u.Wm)(z,{type:"danger",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,u.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,u.Wm)((0,p.SU)(m["default"]),{ref_key:"downloadModelDialogRef",ref:U},null,512),(0,u.Wm)(D,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:W},null,8,["current-page","page-size","total"])])}}};function W(e){e.__source="src/views/gpumarket/myhosts/components/docker_list.vue"}var U=a(83744);"function"===typeof W&&W(k);const S=(0,U.Z)(k,[["__scopeId","data-v-71454d78"]]);var x=S},35154:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(4350),o=(a(3241),a(91103),a(73632)),r=(a(74965),a(22040)),s=(a(99426),a(27750)),i=a(7608),l=a(49927),c=a(20129),u=(a(69840),a(15659)),d=(a(10444),a(6589),a(57018)),p=(a(74367),a(47820)),_=(a(50986),a(61715),a(66252)),m=a(49963),f=a(2262),g=a(92325);function y(e,t){return(0,g.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"post",params:e,data:t})}var w=a(23471),v=a(28068),h=a(65781),b=a(48432),k=a(26010),W=a(20681);const U={class:"task-management-container"};var S={__name:"index",setup(e){const{startLoadProgress:t,stopTimer:a}=(0,W.Z)(),{queryForm:g,dataList:S,pagination:x,loadData:I}=(0,b.Z)(),Z=(0,_.Fl)((()=>S.value.map((e=>(e.format_ct_host_name=(0,k.fM)(e.ct_host_name,4,"***",4),e.format_ct_image_ci_name=(0,k.fM)(e.ct_image_ci_name,4,"***",4),e))))),z=(0,f.iH)({type:"uuid",keyword:""});async function C(){const e={[z.value.type]:z.value.keyword},{list:a}=await I((()=>y(g.value,e)));t(a,"ct_id","ct_operation_array",S,w.cu,C)}function T(e){g.value.page=e,C()}return(0,_.bv)((()=>{C()})),(0,_.Ah)((()=>{a()})),(e,t)=>{const a=p.BT,y=p.km,w=d.EZ,b=c.nH,k=u.ElButton,W=c.ly,S=l.Z,I=i.Z,j=s.Z,D=r.Dv,F=o.dq,$=n.t;return(0,_.wg)(),(0,_.iD)("div",U,[(0,_.Wm)(I,{class:"page-header"},{default:(0,_.w5)((()=>[(0,_.Wm)(S,null,{default:(0,_.w5)((()=>[(0,_.Wm)(W,{inline:"",onSubmit:t[2]||(t[2]=(0,m.iM)((()=>{}),["prevent"]))},{default:(0,_.w5)((()=>[(0,_.Wm)(b,null,{default:(0,_.w5)((()=>[(0,_.Wm)(w,{modelValue:(0,f.SU)(z).keyword,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,f.SU)(z).keyword=e),placeholder:"请输入内容",style:{width:"420px"},clearable:""},{prepend:(0,_.w5)((()=>[(0,_.Wm)(y,{modelValue:(0,f.SU)(z).type,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,f.SU)(z).type=e),placeholder:"请选择"},{default:(0,_.w5)((()=>[(0,_.Wm)(a,{label:"主机UUID",value:"uuid"}),(0,_.Wm)(a,{label:"容器名称",value:"container_name"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(b,null,{default:(0,_.w5)((()=>[(0,_.Wm)(k,{icon:(0,f.SU)(h.Search),type:"primary",onClick:C},{default:(0,_.w5)((()=>[(0,_.Uk)(" 查询 ")])),_:1},8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,_.Wm)(F,{gutter:20,span:"24"},{default:(0,_.w5)((()=>[(0,_.Wm)(D,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,_.w5)((()=>[(0,_.Wm)(j,{shadow:"hover"},{default:(0,_.w5)((()=>[(0,_.wy)((0,_.Wm)((0,f.SU)(v["default"]),{page:(0,f.SU)(g).page,"table-data":(0,f.SU)(Z),pagination:(0,f.SU)(x),onChangePage:T,onReload:C},null,8,["page","table-data","pagination"]),[[$,(0,f.SU)(x).isLoading]])])),_:1})])),_:1})])),_:1})])}}};function x(e){e.__source="src/views/gpumarket/myhosts/index.vue"}var I=a(83744);"function"===typeof x&&x(S);const Z=(0,I.Z)(S,[["__scopeId","data-v-13ec30a9"]]);var z=Z},27750:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(30032),o=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),s=a(2262),i=a(3577),l=a(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,s.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const c=o.vk,u=n.Kf;return(0,r.wg)(),(0,r.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,s.SU)(a),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,i.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof u&&u(c);const p=(0,d.Z)(c,[["__scopeId","data-v-391150ea"]]);var _=p},49927:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22040),o=(a(3241),a(99426),a(66252));const r={class:"top-panel"};function s(e,t){const a=n.Dv;return(0,o.wg)(),(0,o.j4)(a,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.WI)(e.$slots,"default")])])),_:3})}function i(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var l=a(83744);const c={};"function"===typeof i&&i(c);const u=(0,l.Z)(c,[["render",s]]);var d=u},7608:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(73632),o=(a(3241),a(74965),a(66252));function r(e,t){const a=n.dq;return(0,o.wg)(),(0,o.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function s(e){e.__source="library/components/VabQueryForm/index.vue"}var i=a(83744);const l={};"function"===typeof s&&s(l);const c=(0,i.Z)(l,[["render",r],["__scopeId","data-v-172989c8"]]);var u=c}}]);