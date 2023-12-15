/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-15 16:38:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8633,398,7511],{20863:function(e,t,a){a.d(t,{If:function(){return r},sP:function(){return u}});var i=a(93457),s=a(61653),n=a(26010),l=a(47720);const o=e=>{const t={"-3":"失败","-2":"任务创建中","-1":"任务等待",100:"完成 "};return t[e]??"进行中"},r=e=>e.map((e=>{const t=e,a=e.imagelist.map((e=>(e.checked=!!e.checked&&e.checked,e)));t.imagelist=a;const i=e.imagelist.map((e=>e.bigimg));t.images=i,t.collapse=e.collapse&&e.collapse.length>0?e.collapse:[],t.expired_at=t.ms_deleteTime??"任务进行中",t.created_at=(0,s.p)(1e3*t.ms_createTime);const n=parseInt(t.ms_state);return t.percentage=n<=0?0:n,t.ms_state_msg=o(t.ms_state),e.logup=parseInt(e.logup),t.log=t.log?t.log:"",t})),u=(0,l.Q_)("imageResult",{state:()=>({tasks:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),getters:{getTasks(){return r(this.tasks)},getTasksImages(){return this.getTasks.map((e=>e.imagelist)).flat()},getTasksCheckedImages(){return this.getTasksImages.filter((e=>e.checked))},getProcessingTasks(){return this.getTasks.filter((e=>-3!==e.ms_state&&(e.ms_state<100||0===e.logup)))},hasNoMoreData(){return(0,n.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total)}},actions:{async load(){return(0,i.ss)(this.queryForm).then((e=>{const{body:{list:t,page_perpage:a,page_allcount:i}}=e;return 1===this.queryForm.page?this.tasks=[...t]:this.tasks=[...this.tasks,...t],this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(i),!0}))},async loadData(){return this.queryForm.page=1,this.load()},async loadMore(){return this.queryForm.page++,this.load()},resetImagesCheck(){this.getTasksCheckedImages.forEach((e=>e.checked=!1))},async loadTasksProcess(){if(0===this.getProcessingTasks.length)return;const e=this.getProcessingTasks.map((e=>e.ms_id)),{body:{list:t}}=await(0,i.rt)({ms_ids:e});t.forEach((e=>{const t=this.getProcessingTasks.find((t=>t.ms_id==e.ms_id));t&&(t.ms_state=parseInt(e.ms_state),t.ms_deleteTime=e.ms_deleteTime,t.log=e.log,t.logup=e.logup,e.imagelist.forEach(((e,a)=>{const i=t.imagelist[a];i.pic=e.pic,i.bigimg=e.bigimg})))}))}}})},61653:function(e,t,a){a.d(t,{E:function(){return o},p:function(){return r}});var i=a(27484),s=a.n(i),n=(a(33852),a(84110)),l=a.n(n);function o(e){return s().locale("zh-cn"),s()(e).fromNow()}function r(e,t="YYYY-MM-DD HH:mm:ss"){return s()(e).format(t)}s().extend(l())},47511:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=a(45496),s=(a(3241),a(34462),a(2262)),n=a(66252),l={__name:"index",setup(e,{expose:t}){const a=(0,s.iH)(""),l=(0,s.iH)(0),o=(0,s.iH)(!1);function r(e,t){a.value=e,l.value=t,o.value=!0}function u(){o.value=!1}return t({previewImages:r}),(e,t)=>{const r=i.WZ;return(0,s.SU)(o)?((0,n.wg)(),(0,n.j4)(r,{key:0,"initial-index":(0,s.SU)(l),"url-list":(0,s.SU)(a),"hide-on-click-modal":!0,onClose:u},null,8,["initial-index","url-list"])):(0,n.kq)("",!0)}}};function o(e){e.__source="src/components/ImageViewer/index.vue"}"function"===typeof o&&o(l);const r=l;var u=r},53715:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var i=a(4350),s=(a(3241),a(91103),a(49676)),n=(a(73204),a(76128)),l=(a(74828),a(19889)),o=(a(51738),a(73632)),r=(a(74965),a(22040)),u=(a(99426),a(63176)),g=(a(40463),a(27977)),c=(a(40355),a(15659)),m=(a(79987),a(10661)),d=(a(35095),a(10444),a(14181)),p=(a(33828),a(96872),a(66252)),f=a(2262),h=a(57387),k=a(90468),_=a(47511),w=a(93457),v=a(20863),y=a(26010);function S(e){const t=(0,f.qj)({dataList:[],loadingStatus:"",loaded:!1,queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:a,loadingStatus:i,loaded:s,queryForm:n,pagination:l}=(0,f.BK)(t);async function o(){try{t.loadingStatus="loading";const{body:{list:a,page_perpage:i,page_allcount:s}}=await e();t.dataList=[...a],l.pageSize=parseInt(i),l.total=parseInt(s);const{page:n}=t.queryForm,{pageSize:o,total:r}=t.pagination;t.loadingStatus=(0,y.Gc)(n,o,r),t.loaded=!0}catch(a){t.loadingStatus=""}}return{dataList:a,loaded:s,loadingStatus:i,queryForm:n,pagination:l,loadData:o}}var U=a(33729),b=a.n(U);const W={class:"create-list-container"},T={key:0},q={key:1},F={key:1};var D={__name:"list",setup(e){const{dataList:t,loaded:a,loadingStatus:y,queryForm:U,pagination:D,loadData:I}=S(Y),x=(0,f.qj)({imageType:"images",shareFormRef:null,imageViewerRef:null}),{imageType:C,shareFormRef:z,imageViewerRef:P}=(0,f.BK)(x);(0,p.wF)((()=>{I()}));const j=(0,p.Fl)((()=>R.value.map((e=>e.imagelist)).flat())),H=(0,p.Fl)((()=>j.value.map((e=>e.bigimg)).filter((e=>""!==e)))),R=(0,p.Fl)((()=>(0,v.If)(t.value))),E=(0,p.Fl)((()=>j.value.filter((e=>e.checked))));function V(){j.value.forEach((e=>e.checked=!1))}function Y(){const e={...U.value,onlyfinish:1};return(0,w.ss)(e)}function K(){E.value.forEach((e=>{b()(e.bigimg)})),V()}function L(){const e=E.value.map((e=>e.bigimg));z.value.showDialog(e)}function M(e){z.value.showDialog([e])}function B(e,t){P.value.previewImages(e,t)}return(e,t)=>{const w=g.p8,v=(0,p.up)("Download"),S=d.gn,b=c.ElButton,x=m.Q0,V=(0,p.up)("Share"),Y=c.MO,G=g.Ub,N=u.zi,Q=r.Dv,Z=o.dq,O=l.os,A=(0,p.up)("router-link"),J=n.GT,X=s.R,$=i.t;return(0,p.wy)(((0,p.wg)(),(0,p.iD)("div",W,[(0,p.Wm)(Q,{span:24},{default:(0,p.w5)((()=>[(0,p.Wm)(N,{offset:110},{default:(0,p.w5)((()=>[(0,p.Wm)(G,{modelValue:(0,f.SU)(C),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,f.dq)(C)?C.value=e:null)},{default:(0,p.w5)((()=>[(0,p.Wm)(w,{label:"默认平铺",name:"images"}),(0,p.Wm)(w,{label:"列表显示",name:"tasks"}),(0,p.Wm)(w,{name:"action",disabled:!0},{label:(0,p.w5)((()=>[(0,p.Wm)(Y,{class:"task-actions"},{default:(0,p.w5)((()=>[(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可批量下载",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(b,{type:"default",text:"",disabled:0===(0,f.SU)(E).length,onClick:K},{default:(0,p.w5)((()=>[(0,p.Wm)(S,null,{default:(0,p.w5)((()=>[(0,p.Wm)(v)])),_:1}),(0,p.Uk)(" 下载 ")])),_:1},8,["disabled"])])),_:1}),(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可把选择的图片发帖，分享出去",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(b,{text:"",disabled:0===(0,f.SU)(E).length,onClick:L},{default:(0,p.w5)((()=>[(0,p.Wm)(S,null,{default:(0,p.w5)((()=>[(0,p.Wm)(V)])),_:1}),(0,p.Uk)(" 分享 ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),!(0,f.SU)(a)||(0,f.SU)(j).length>0?((0,p.wg)(),(0,p.iD)("div",T,["images"===(0,f.SU)(C)?((0,p.wg)(),(0,p.j4)(Z,{key:0,gutter:20},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)((0,f.SU)(j),((e,t)=>((0,p.wg)(),(0,p.j4)(Q,{key:e.picid,xs:12,sm:6,md:4,lg:4,xl:3},{default:(0,p.w5)((()=>[(0,p.Wm)((0,f.SU)(k["default"]),{"image-item":e,redirect:!0,onTopic:M,onPreview:e=>B((0,f.SU)(H),t)},null,8,["image-item","onPreview"])])),_:2},1024)))),128))])),_:1})):(0,p.kq)("",!0),"tasks"===(0,f.SU)(C)?((0,p.wg)(),(0,p.iD)("div",q,[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)((0,f.SU)(R),(e=>((0,p.wg)(),(0,p.iD)("div",{key:e.ms_id},[(0,p.Wm)(Z,{gutter:16,span:"24",justify:"start"},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(e.imagelist,((t,a)=>((0,p.wg)(),(0,p.j4)(Q,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,p.w5)((()=>[(0,p.Wm)((0,f.SU)(k["default"]),{"image-item":t,redirect:!0,onTopic:M,onPreview:t=>B(e.images,a)},null,8,["image-item","onPreview"])])),_:2},1024)))),128))])),_:2},1024),(0,p.Wm)(O)])))),128))])):(0,p.kq)("",!0)])):((0,p.wg)(),(0,p.iD)("div",F,[(0,p.Wm)(J,{class:"vab-data-empty"},{description:(0,p.w5)((()=>[(0,p.Uk)(" 空空如也，开始 "),(0,p.Wm)(A,{to:"/sd/create"},{default:(0,p.w5)((()=>[(0,p.Uk)("绘图")])),_:1}),(0,p.Uk)(" 吧 ")])),_:1})]))])),_:1}),(0,f.SU)(R).length>0?((0,p.wg)(),(0,p.j4)(X,{key:0,"current-page":(0,f.SU)(U).page,"onUpdate:currentPage":t[1]||(t[1]=e=>(0,f.SU)(U).page=e),layout:"prev, pager, next","page-size":(0,f.SU)(D).pageSize,total:(0,f.SU)(D).total,onCurrentChange:(0,f.SU)(I)},null,8,["current-page","page-size","total","onCurrentChange"])):(0,p.kq)("",!0),(0,p.Wm)((0,f.SU)(h["default"]),{ref_key:"shareFormRef",ref:z},null,512),(0,p.Wm)((0,f.SU)(_["default"]),{ref_key:"imageViewerRef",ref:P},null,512)])),[[$,"loading"===(0,f.SU)(y)]])}}};function I(e){e.__source="src/views/stablediffusion/list.vue"}var x=a(83744);"function"===typeof I&&I(D);const C=(0,x.Z)(D,[["__scopeId","data-v-0c967f13"]]);var z=C}}]);