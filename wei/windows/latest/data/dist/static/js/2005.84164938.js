/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 16:34:29
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2005,8123,6700,603],{81464:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(81095),r=n(26593);function i(e){a.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function s(e){a.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function o(e){const{isSupported:t,copy:n}=(0,r.VPI)();t||(0,r.gIw)("clipboard-write"),n(e).then((()=>{i(e)})).catch((t=>{console.log(t),s(e)}))}},61653:function(e,t,n){n.d(t,{E:function(){return o},p:function(){return c}});var a=n(27484),r=n.n(a),i=(n(33852),n(84110)),s=n.n(i);function o(e){return r().locale("zh-cn"),r()(e).fromNow()}function c(e,t="YYYY-MM-DD HH:mm:ss"){return r()(e).format(t)}r().extend(s())},20681:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(95965);function r(){const{startIntervalTimer:e,stopIntervalTimer:t}=(0,a.Z)();let n,r,i={};function s(a,r,s,o,c,u){const l=a.filter((e=>e[s].showProcess));i={},t(n),0!==l.length&&(n=e((async()=>{const e=l.map((e=>e[r])),{body:{list:t}}=await c(e);let n=!1;for(const a in t){const{stop:e,progress_num:c,progress_text:u}=t[a],l=o.value.find((e=>e[r]===a));l[s].progress_num||(l[s].progress_num=0);const m=parseInt(c);m>l[s].progress_num&&(l[s].progress_num=m,l[s].progress_text=u,i[a]={progress_num:m,progress_text:u}),e&&(n=!0)}n&&u()})))}function o(n,a,s,o,c){const u=n.filter((e=>e[s].time_flash_list));t(r),0!==u.length&&(r=e((async()=>{const{body:e}=await c();for(const t in i){const n=i[t],r=e.find((e=>e[a]===t));r&&Object.assign(r[s],n)}o.value=e;const n=e.filter((e=>e[s].time_flash_list));n.length<=0&&t(r)}),5e3))}function c(){t(n),t(r)}return{startLoadProgress:s,startReloadList:o,stopTimer:c}}},42238:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(22201),r=n(2262),i=n(66252);function s(e){const t=(0,a.yj)(),n=(0,r.iH)(t.params.id);return(0,i.YP)((()=>t.params.id),(()=>{t.params.id?(n.value=t.params.id,e()):n.value=""})),{paramsId:n}}},95965:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(23279),r=n.n(a);function i(){function e(e,t=3e3){return setInterval((()=>{e()}),t)}function t(e){e&&clearInterval(e)}function n(e,t=1e4){return setTimeout((()=>{e()}),t)}function a(e,t=3e3){r()((()=>{e()}),t)()}return{startIntervalTimer:e,stopIntervalTimer:t,startTimeoutTimer:n,startDebounce:a}}},48123:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(66252),r=n(2262),i=n(81464),s={__name:"index",props:{text:{type:String,default:""}},setup(e){return(t,n)=>{const s=(0,a.up)("vab-icon");return(0,a.wg)(),(0,a.j4)(s,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:n[0]||(n[0]=t=>(0,r.SU)(i.Z)(e.text))})}}};function o(e){e.__source="src/components/ClipboardButton/index.vue"}"function"===typeof o&&o(s);const c=s;var u=c},57749:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(3837),r=(n(3241),n(81010),n(76128)),i=(n(74828),n(50591)),s=(n(89035),n(15659)),o=(n(10444),n(32018)),c=(n(46160),n(50363),n(10661)),u=(n(35095),n(66252)),l=n(2262),m=n(3577),_=n(96486),p=n(23471),f=n(61653),g=n(63668),d=n(48123),w=n(95965),y=n(42238),v=n(20681);const k={key:1},b={class:"el-progress-action"};var h={__name:"image_list",setup(e){const t=(0,u.f3)("$baseMessage"),n=(0,u.f3)("$sub"),h=(0,u.f3)("$unsub"),{startLoadProgress:W,startReloadList:C,stopTimer:I}=(0,v.Z)(),{startTimeoutTimer:T}=(0,w.Z)(),x=(0,l.iH)([]),j=(0,u.Fl)((()=>x.value.map((e=>(e.link=e.img_forum_id>0?`/gpumarket/image/${e.img_forum_id}`:"",e.diff_time=e.img_create_time?(0,f.E)(1e3*e.img_create_time):"---",e.cut_img_name=(0,_.truncate)(e.img_name,{length:35,separator:"..."}),e))))),{paramsId:z}=(0,y.Z)((()=>{I(),Z()}));async function Z(){const{body:e}=await(0,p.co)(z.value);x.value=e,W(e,"img_id","img_operation_array",x,p.sw,Z),C(e,"img_id","img_operation_array",x,(()=>(0,p.co)(z.value)))}n("reload-image-list",(()=>{I(),Z()})),(0,u.bv)((()=>{Z()})),(0,u.Ah)((()=>{I(),h("reload-image-list")}));const U=(0,l.iH)();async function $(e){U.value.showDialog(z.value,e)}async function D(e){await(0,p.Vf)(z.value,e),t("删除镜像成功","success","vab-hey-message-success"),T((()=>{Z()}))}async function Y(e){const n={client_id:z.value,create_from_where:"image_list",image_thread_id:e,persion_input_image_src:""};await(0,p.t4)(n),t("拉取镜像成功","success","vab-hey-message-success"),T((()=>{Z()}))}async function H(e){await(0,p.Xc)(e),t("取消收藏成功","success","vab-hey-message-success"),T((()=>{Z()}))}return(e,t)=>{const n=(0,u.up)("router-link"),_=c.Q0,p=a.$Y,f=(0,u.up)("vab-icon"),w=o.Xh,y=s.ElButton,v=i.i1,h=r.GT,W=a.eI;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(W,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:(0,l.SU)(j),class:"data-list"},{empty:(0,u.w5)((()=>[(0,u.Wm)(h,{class:"vab-data-empty",description:"本机暂时没有镜像，请到镜像市场选择心仪的镜像并收藏，然后就能在这里拉取啦"})])),default:(0,u.w5)((()=>[(0,u.Wm)(p,{label:"镜像名称",prop:"img_name"},{default:(0,u.w5)((({row:e})=>[(0,u.Wm)(_,{placement:"top",content:e.img_name},{default:(0,u.w5)((()=>[e.link?((0,u.wg)(),(0,u.j4)(n,{key:0,to:e.link},{default:(0,u.w5)((()=>[(0,u.Uk)((0,m.zw)(e.cut_img_name),1)])),_:2},1032,["to"])):((0,u.wg)(),(0,u.iD)("span",k,(0,m.zw)(e.cut_img_name),1))])),_:2},1032,["content"]),(0,u.Wm)((0,l.SU)(d["default"]),{text:e.img_name},null,8,["text"])])),_:1}),(0,u.Wm)(p,{label:"TAG",prop:"img_tag"}),(0,u.Wm)(p,{label:"大小",prop:"img_size"}),(0,u.Wm)(p,{label:"状态",prop:"img_status_str"},{default:(0,u.w5)((({row:e})=>[(0,u.Uk)((0,m.zw)(e.img_status_str)+" ",1),e.img_hint?((0,u.wg)(),(0,u.j4)(_,{key:0,placement:"top",content:e.img_hint},{default:(0,u.w5)((()=>[(0,u.Wm)(f,{icon:"error-warning-line",style:(0,m.j5)({color:"var(--el-color-danger)"})},null,8,["style"])])),_:2},1032,["content"])):(0,u.kq)("",!0)])),_:1}),(0,u.Wm)(p,{label:"发布时间",prop:"diff_time"}),(0,u.Wm)(p,{label:"位置",prop:"img_where_str",sortable:""}),(0,u.Wm)(p,{label:"操作",prop:"truedata"},{default:(0,u.w5)((({row:e})=>[(0,u._)("div",b,[e.img_operation_array.showProcess?((0,u.wg)(),(0,u.j4)(w,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.img_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,u.wg)(),(0,u.iD)(u.HY,{key:1},[e.img_operation_array.showPullButtun?((0,u.wg)(),(0,u.j4)(y,{key:0,type:"primary",size:"small",onClick:t=>Y(e.img_forum_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 拉取 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0),e.img_operation_array.createContainer?((0,u.wg)(),(0,u.j4)(y,{key:1,type:"primary",size:"small",onClick:t=>$(e.img_id)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 创建容器 ")])),_:2},1032,["onClick"])):(0,u.kq)("",!0)],64)),e.img_operation_array.delete?((0,u.wg)(),(0,u.j4)(v,{key:2,title:"确定删除此镜像吗？",onConfirm:t=>D(e.img_id)},{reference:(0,u.w5)((()=>[(0,u.Wm)(y,{type:"danger",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,u.kq)("",!0),e.img_favid?((0,u.wg)(),(0,u.j4)(v,{key:3,title:"确定取消收藏此镜像？",onConfirm:t=>H(e.img_favid)},{reference:(0,u.w5)((()=>[(0,u.Wm)(y,{type:"warning",size:"small"},{default:(0,u.w5)((()=>[(0,u.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,u.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,u.Wm)(g["default"],{ref_key:"createContainerDialogRef",ref:U},null,512)],64)}}};function W(e){e.__source="src/views/gpumarket/mydevice/components/image_list.vue"}var C=n(83744);"function"===typeof W&&W(h);const I=(0,C.Z)(h,[["__scopeId","data-v-0be60872"]]);var T=I}}]);