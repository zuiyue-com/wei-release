/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5824,220,8119],{61653:function(e,a,t){t.d(a,{E:function(){return o},p:function(){return s}});var n=t(27484),i=t.n(n),r=(t(33852),t(84110)),l=t.n(r);function o(e){return i().locale("zh-cn"),i()(e).fromNow()}function s(e,a="YYYY-MM-DD HH:mm:ss"){return i()(e).format(a)}i().extend(l())},35824:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var n=t(27750),i=t(27977),r=(t(3241),t(40355),t(96872),t(66252)),l=t(2262),o=t(83097),s=t(57749),c=t(56232),u=t(5817),m=(t(92131),t(78119),t(22201));const d={class:"tabs"};var p={__name:"device_tabs",setup(e){const a=(0,m.yj)(),t=(0,l.iH)(a.query.tab??"image-list"),p=(0,r.f3)("$sub"),_=(0,r.f3)("$unsub"),f=(0,r.f3)("hostOperationArray");return p("active-device-tab",(({name:e,callback:a=null})=>{t.value!==e?t.value=e:a&&a()})),(0,r.Ah)((()=>{_("active-device-tab")})),(e,a)=>{const m=(0,r.up)("vab-icon"),p=i.p8,_=i.Ub,g=n.Z;return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(g,{class:"tabs-card",shadow:"hover"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{modelValue:(0,l.SU)(t),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,l.dq)(t)?t.value=e:null)},{default:(0,r.w5)((()=>[(0,l.SU)(f).see_in_device_image?((0,r.wg)(),(0,r.j4)(p,{key:0,name:"image-list"},{label:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"windows-line",style:{color:"#69c0ff"}}),(0,r.Uk)(" 镜像管理 ")])),default:(0,r.w5)((()=>["image-list"===(0,l.SU)(t)?((0,r.wg)(),(0,r.j4)((0,l.SU)(s["default"]),{key:0})):(0,r.kq)("",!0)])),_:1})):(0,r.kq)("",!0),(0,l.SU)(f).see_in_device_container?((0,r.wg)(),(0,r.j4)(p,{key:1,name:"docker-list",lazy:""},{label:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"docker","is-custom-svg":"",style:{color:"#95de64"}}),(0,r.Uk)(" 容器管理 ")])),default:(0,r.w5)((()=>["docker-list"===(0,l.SU)(t)?((0,r.wg)(),(0,r.j4)((0,l.SU)(o["default"]),{key:0})):(0,r.kq)("",!0)])),_:1})):(0,r.kq)("",!0),(0,l.SU)(f).see_in_device_model?((0,r.wg)(),(0,r.j4)(p,{key:2,name:"model-list",lazy:""},{label:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"inbox-archive-line",style:{color:"#ffd666"}}),(0,r.Uk)(" 模型管理 ")])),default:(0,r.w5)((()=>["model-list"===(0,l.SU)(t)?((0,r.wg)(),(0,r.j4)((0,l.SU)(c["default"]),{key:0})):(0,r.kq)("",!0)])),_:1})):(0,r.kq)("",!0),(0,l.SU)(f).see_in_device_dataset?((0,r.wg)(),(0,r.j4)(p,{key:3,name:"dataset-list",lazy:""},{label:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"database-2-line",style:{color:"#4ecb73"}}),(0,r.Uk)(" 数据集 ")])),default:(0,r.w5)((()=>["dataset-list"===(0,l.SU)(t)?((0,r.wg)(),(0,r.j4)((0,l.SU)(u["default"]),{key:0})):(0,r.kq)("",!0)])),_:1})):(0,r.kq)("",!0)])),_:1},8,["modelValue"])])),_:1})])}}};function _(e){e.__source="src/views/gpumarket/mydevice/components/device_tabs.vue"}"function"===typeof _&&_(p);const f=p;var g=f},83097:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var n=t(3837),i=(t(3241),t(81010),t(76128)),r=(t(74828),t(50591)),l=(t(89035),t(15659)),o=(t(10444),t(10661)),s=(t(35095),t(50363),t(66252)),c=t(2262),u=t(3577),m=t(96486),d=t(61653),p=t(48123),_=t(42238),f=t(95965),g=t(23471),y=t(20681);const w={class:"el-progress-action"};var v={__name:"docker_list",setup(e){const{startLoadProgress:a,startReloadList:t,stopTimer:v}=(0,y.Z)(),{startTimeoutTimer:k}=(0,f.Z)(),b=(0,s.f3)("$baseMessage"),W=(0,s.f3)("$sub"),U=(0,s.f3)("$unsub"),h=(0,c.iH)([]),z=(0,s.Fl)((()=>h.value.map((e=>(e.diff_time=e.ct_add_time?(0,d.E)(1e3*e.ct_add_time):"---",e.cut_ci_name=(0,m.truncate)(e.ct_image_ci_name,{length:35,separator:"..."}),e))))),{paramsId:j}=(0,_.Z)((()=>{S()}));async function S(){const{body:e}=await(0,g.RS)(j.value);h.value=e,a(e,"ct_id","ct_operation_array",h,g.cu,S),t(e,"ct_id","ct_operation_array",h,(()=>(0,g.RS)(j.value)))}async function C(e){await(0,g.ET)(j.value,e),b("开启容器成功","success","vab-hey-message-success"),k((()=>{S()}))}async function q(e){await(0,g.U$)(j.value,e),b("停止容器成功","success","vab-hey-message-success"),k((()=>{S()}))}async function D(e){await(0,g.BX)(j.value,e),b("删除容器成功","success","vab-hey-message-success"),k((()=>{S()}))}return W("reload-docker-list",(()=>{v(),S()})),(0,s.bv)((()=>{S()})),(0,s.Ah)((()=>{v(),U("reload-docker-list")})),(e,a)=>{const t=n.$Y,m=o.Q0,d=(0,s.up)("vab-icon"),_=l.ElButton,f=r.i1,g=i.GT,y=n.eI;return(0,s.wg)(),(0,s.j4)(y,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:(0,c.SU)(z),"row-key":"ct_id",class:"data-list"},{empty:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"vab-data-empty",description:"暂时没有容器容器，请到旁边的镜像列表选择合适的镜像，然后“创建容器”"})])),default:(0,s.w5)((()=>[(0,s.Wm)(t,{label:"容器名称",prop:"ct_name"},{default:(0,s.w5)((({row:e})=>[(0,s.Uk)((0,u.zw)(e.ct_name)+" ",1),(0,s.Wm)((0,c.SU)(p["default"]),{text:e.ct_name},null,8,["text"])])),_:1}),(0,s.Wm)(t,{label:"基于镜像",prop:"ct_image_ci_name"},{default:(0,s.w5)((({row:e})=>[(0,s.Wm)(m,{placement:"top",content:e.ct_image_ci_name},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.cut_ci_name),1)])),_:2},1032,["content"])])),_:1}),(0,s.Wm)(t,{label:"状态",prop:"ct_use_status_str"},{default:(0,s.w5)((({row:e})=>[(0,s.Uk)((0,u.zw)(e.ct_use_status_str)+" "+(0,u.zw)(e.ct_operate_str)+" ",1),e.ct_hint?((0,s.wg)(),(0,s.j4)(m,{key:0,content:e.ct_hint},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{icon:"error-warning-line",style:(0,u.j5)({color:"var(--el-color-danger)"})},null,8,["style"])])),_:2},1032,["content"])):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(t,{label:"最后开启",prop:"diff_time"}),(0,s.Wm)(t,{label:"操作",prop:"truedata"},{default:(0,s.w5)((({row:e})=>[(0,s._)("div",w,[e.ct_operation_array.startContainer?((0,s.wg)(),(0,s.j4)(_,{key:0,type:"primary",size:"small",onClick:a=>C(e.ct_id)},{default:(0,s.w5)((()=>[(0,s.Uk)(" 开启 ")])),_:2},1032,["onClick"])):(0,s.kq)("",!0),e.ct_operation_array.stopContainer?((0,s.wg)(),(0,s.j4)(_,{key:1,type:"warning",size:"small",onClick:a=>q(e.ct_id)},{default:(0,s.w5)((()=>[(0,s.Uk)(" 停止 ")])),_:2},1032,["onClick"])):(0,s.kq)("",!0),e.ct_operation_array.delete?((0,s.wg)(),(0,s.j4)(f,{key:2,title:"确定删除此容器吗？",onConfirm:a=>D(e.ct_id)},{reference:(0,s.w5)((()=>[(0,s.Wm)(_,{type:"danger",size:"small"},{default:(0,s.w5)((()=>[(0,s.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,s.kq)("",!0)])])),_:1})])),_:1},8,["data"])}}};function k(e){e.__source="src/views/gpumarket/mydevice/components/docker_list.vue"}var b=t(83744);"function"===typeof k&&k(v);const W=(0,b.Z)(v,[["__scopeId","data-v-62379163"]]);var U=W},57749:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var n=t(3837),i=(t(3241),t(81010),t(76128)),r=(t(74828),t(50591)),l=(t(89035),t(15659)),o=(t(10444),t(32018)),s=(t(46160),t(50363),t(10661)),c=(t(35095),t(66252)),u=t(2262),m=t(3577),d=t(96486),p=t(23471),_=t(61653),f=t(63668),g=t(48123),y=t(95965),w=t(42238),v=t(20681);const k={key:1},b={class:"el-progress-action"};var W={__name:"image_list",setup(e){const a=(0,c.f3)("$baseMessage"),t=(0,c.f3)("$sub"),W=(0,c.f3)("$unsub"),{startLoadProgress:U,startReloadList:h,stopTimer:z}=(0,v.Z)(),{startTimeoutTimer:j}=(0,y.Z)(),S=(0,u.iH)([]),C=(0,c.Fl)((()=>S.value.map((e=>(e.link=e.img_forum_id>0?`/gpumarket/image/${e.img_forum_id}`:"",e.diff_time=e.img_create_time?(0,_.E)(1e3*e.img_create_time):"---",e.cut_img_name=(0,d.truncate)(e.img_name,{length:35,separator:"..."}),e))))),{paramsId:q}=(0,w.Z)((()=>{z(),D()}));async function D(){const{body:e}=await(0,p.co)(q.value);S.value=e,U(e,"img_id","img_operation_array",S,p.sw,D),h(e,"img_id","img_operation_array",S,(()=>(0,p.co)(q.value)))}t("reload-image-list",(()=>{z(),D()})),(0,c.bv)((()=>{D()})),(0,c.Ah)((()=>{z(),W("reload-image-list")}));const $=(0,u.iH)();async function x(e){$.value.showDialog(q.value,e)}async function Z(e){await(0,p.Vf)(q.value,e),a("删除镜像成功","success","vab-hey-message-success"),j((()=>{D()}))}async function T(e){const t={client_id:q.value,create_from_where:"image_list",image_thread_id:e,persion_input_image_src:""};await(0,p.t4)(t),a("拉取镜像成功","success","vab-hey-message-success"),j((()=>{D()}))}async function Y(e){await(0,p.Xc)(e),a("取消收藏成功","success","vab-hey-message-success"),j((()=>{D()}))}return(e,a)=>{const t=(0,c.up)("router-link"),d=s.Q0,p=n.$Y,_=(0,c.up)("vab-icon"),y=o.Xh,w=l.ElButton,v=r.i1,W=i.GT,U=n.eI;return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(U,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:(0,u.SU)(C),class:"data-list"},{empty:(0,c.w5)((()=>[(0,c.Wm)(W,{class:"vab-data-empty",description:"本机暂时没有镜像，请到镜像市场选择心仪的镜像并收藏，然后就能在这里拉取啦"})])),default:(0,c.w5)((()=>[(0,c.Wm)(p,{label:"镜像名称",prop:"img_name"},{default:(0,c.w5)((({row:e})=>[(0,c.Wm)(d,{placement:"top",content:e.img_name},{default:(0,c.w5)((()=>[e.link?((0,c.wg)(),(0,c.j4)(t,{key:0,to:e.link},{default:(0,c.w5)((()=>[(0,c.Uk)((0,m.zw)(e.cut_img_name),1)])),_:2},1032,["to"])):((0,c.wg)(),(0,c.iD)("span",k,(0,m.zw)(e.cut_img_name),1))])),_:2},1032,["content"]),(0,c.Wm)((0,u.SU)(g["default"]),{text:e.img_name},null,8,["text"])])),_:1}),(0,c.Wm)(p,{label:"TAG",prop:"img_tag"}),(0,c.Wm)(p,{label:"大小",prop:"img_size"}),(0,c.Wm)(p,{label:"状态",prop:"img_status_str"},{default:(0,c.w5)((({row:e})=>[(0,c.Uk)((0,m.zw)(e.img_status_str)+" ",1),e.img_hint?((0,c.wg)(),(0,c.j4)(d,{key:0,placement:"top",content:e.img_hint},{default:(0,c.w5)((()=>[(0,c.Wm)(_,{icon:"error-warning-line",style:(0,m.j5)({color:"var(--el-color-danger)"})},null,8,["style"])])),_:2},1032,["content"])):(0,c.kq)("",!0)])),_:1}),(0,c.Wm)(p,{label:"发布时间",prop:"diff_time"}),(0,c.Wm)(p,{label:"位置",prop:"img_where_str",sortable:""}),(0,c.Wm)(p,{label:"操作",prop:"truedata"},{default:(0,c.w5)((({row:e})=>[(0,c._)("div",b,[e.img_operation_array.showProcess?((0,c.wg)(),(0,c.j4)(y,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.img_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,c.wg)(),(0,c.iD)(c.HY,{key:1},[e.img_operation_array.showPullButtun?((0,c.wg)(),(0,c.j4)(w,{key:0,type:"primary",size:"small",onClick:a=>T(e.img_forum_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 拉取 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0),e.img_operation_array.createContainer?((0,c.wg)(),(0,c.j4)(w,{key:1,type:"primary",size:"small",onClick:a=>x(e.img_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 创建容器 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0)],64)),e.img_operation_array.delete?((0,c.wg)(),(0,c.j4)(v,{key:2,title:"确定删除此镜像吗？",onConfirm:a=>Z(e.img_id)},{reference:(0,c.w5)((()=>[(0,c.Wm)(w,{type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,c.kq)("",!0),e.img_favid?((0,c.wg)(),(0,c.j4)(v,{key:3,title:"确定取消收藏此镜像？",onConfirm:a=>Y(e.img_favid)},{reference:(0,c.w5)((()=>[(0,c.Wm)(w,{type:"warning",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,c.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,c.Wm)(f["default"],{ref_key:"createContainerDialogRef",ref:$},null,512)],64)}}};function U(e){e.__source="src/views/gpumarket/mydevice/components/image_list.vue"}var h=t(83744);"function"===typeof U&&U(W);const z=(0,h.Z)(W,[["__scopeId","data-v-0be60872"]]);var j=z},92131:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var n=t(49676),i=(t(3241),t(73204),t(3837)),r=(t(81010),t(76128)),l=(t(74828),t(31452)),o=(t(68445),t(50363),t(66252));function s(e,a,t,s,c,u){const m=i.$Y,d=l.E2,p=r.GT,_=i.eI,f=n.R;return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,height:"280"},{empty:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"vab-data-empty"},{description:(0,o.w5)((()=>[(0,o.Uk)(" 暂无数据，欢迎将设备上架到算力市场，向外出租，赚取租金。 "),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("出租教程")])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("出租收益计算说明")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"日期",prop:"date"}),(0,o.Wm)(m,{label:"租赁显卡数",prop:"name"}),(0,o.Wm)(m,{label:"租赁方式",prop:"province"}),(0,o.Wm)(m,{label:"租赁开始时间",prop:"city"}),(0,o.Wm)(m,{label:"租赁结束时间",prop:"address"}),(0,o.Wm)(m,{label:"租赁时长",prop:"zip"}),(0,o.Wm)(m,{label:"租金",prop:"monry"})])),_:1},8,["data"]),(0,o.Wm)(f,{"current-page":e.currentpage,"onUpdate:currentPage":a[0]||(a[0]=a=>e.currentpage=a),layout:"prev, pager, next","page-size":e.pagesize,total:e.pagetotal},null,8,["current-page","page-size","total"])],64)}var c=(0,o.aZ)({data(){return{tableData:[{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"},{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"},{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"},{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"},{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"},{date:"2016-05-03",name:"3张",province:"月租",city:"2023年11月01日 21:12",address:"2023年11月01日 21:12",zip:"5小时",monry:"320元"}],pagecurrent:3,pagesize:10,pagetotal:100}}});function u(e){e.__source="src/views/gpumarket/mydevice/components/rentlist.vue"}var m=t(83744);"function"===typeof u&&u(c);const d=(0,m.Z)(c,[["render",s]]);var p=d},78119:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var n=t(49676),i=(t(3241),t(73204),t(3837)),r=(t(81010),t(76128)),l=(t(74828),t(31452)),o=(t(68445),t(50363),t(66252));function s(e,a,t,s,c,u){const m=i.$Y,d=l.E2,p=r.GT,_=i.eI,f=n.R;return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,height:"280"},{empty:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"vab-data-empty"},{description:(0,o.w5)((()=>[(0,o.Uk)(" 暂无数据，欢迎在设备安装赚取算力的服务，完成平台的服务后获取奖励算力，赚取现金。 "),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("挂机教程")])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("挂机收益计算说明")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"时间",prop:"date"}),(0,o.Wm)(m,{label:"任务类型",prop:"name"}),(0,o.Wm)(m,{label:"完成数",prop:"province"}),(0,o.Wm)(m,{label:"获得算力",prop:"city"})])),_:1},8,["data"]),(0,o.Wm)(f,{"current-page":e.currentpage,"onUpdate:currentPage":a[0]||(a[0]=a=>e.currentpage=a),layout:"prev, pager, next","page-size":e.pagesize,total:e.pagetotal},null,8,["current-page","page-size","total"])],64)}var c=(0,o.aZ)({data(){return{tableData:[{date:"2016-05-03 23:22:00",name:"SD绘图",province:"1张",city:"23"},{date:"2016-05-03 23:22:00",name:"SD绘图",province:"1张",city:"23"},{date:"2016-05-03 23:22:00",name:"3D绘图",province:"1次",city:"23"},{date:"2016-05-03 23:22:00",name:"语音翻译",province:"1次",city:"23"},{date:"2016-05-03 23:22:00",name:"语音翻译",province:"1次",city:"23"}],pagecurrent:3,pagesize:10,pagetotal:100}}});function u(e){e.__source="src/views/gpumarket/mydevice/components/scorelist.vue"}var m=t(83744);"function"===typeof u&&u(c);const d=(0,m.Z)(c,[["render",s]]);var p=d}}]);