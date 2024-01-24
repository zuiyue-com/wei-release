/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[424,9136,7511],{20863:function(e,t,a){a.d(t,{If:function(){return r},sP:function(){return u}});var s=a(93457),o=a(61653),l=a(26010),n=a(47720);const i=e=>{const t={"-3":"失败","-2":"任务创建中","-1":"任务等待",100:"完成 "};return t[e]??"进行中"},r=e=>e.map((e=>{const t=e,a=e.imagelist.map((e=>(e.checked=!!e.checked&&e.checked,e)));t.imagelist=a;const s=e.imagelist.map((e=>e.bigimg));t.images=s,t.collapse=e.collapse&&e.collapse.length>0?e.collapse:[],t.expired_at=t.ms_deleteTime??"任务进行中",t.created_at=(0,o.p)(1e3*t.ms_createTime);const l=parseInt(t.ms_state);return t.percentage=l<=0?0:l,t.ms_state_msg=i(t.ms_state),e.logup=parseInt(e.logup),t.log=t.log?t.log:"",t})),u=(0,n.Q_)("imageResult",{state:()=>({tasks:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),getters:{getTasks(){return r(this.tasks)},getTasksImages(){return this.getTasks.map((e=>e.imagelist)).flat()},getTasksCheckedImages(){return this.getTasksImages.filter((e=>e.checked))},getProcessingTasks(){return this.getTasks.filter((e=>-3!==e.ms_state&&(e.ms_state<100||0===e.logup)))},hasNoMoreData(){return(0,l.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total)}},actions:{async load(){return(0,s.ss)(this.queryForm).then((e=>{const{body:{list:t,page_perpage:a,page_allcount:s}}=e;return 1===this.queryForm.page?this.tasks=[...t]:this.tasks=[...this.tasks,...t],this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(s),!0}))},async loadData(){return this.queryForm.page=1,this.load()},async loadMore(){return this.queryForm.page++,this.load()},resetImagesCheck(){this.getTasksCheckedImages.forEach((e=>e.checked=!1))},async loadTasksProcess(){if(0===this.getProcessingTasks.length)return;const e=this.getProcessingTasks.map((e=>e.ms_id)),{body:{list:t}}=await(0,s.rt)({ms_ids:e});t.forEach((e=>{const t=this.getProcessingTasks.find((t=>t.ms_id==e.ms_id));t&&(t.ms_state=parseInt(e.ms_state),t.ms_deleteTime=e.ms_deleteTime,t.log=e.log,t.logup=e.logup,e.imagelist.forEach(((e,a)=>{const s=t.imagelist[a];s.pic=e.pic,s.bigimg=e.bigimg})))}))}}})},61653:function(e,t,a){a.d(t,{E:function(){return i},p:function(){return r}});var s=a(27484),o=a.n(s),l=(a(33852),a(84110)),n=a.n(l);function i(e){return o().locale("zh-cn"),o()(e).fromNow()}function r(e,t="YYYY-MM-DD HH:mm:ss"){return o()(e).format(t)}o().extend(n())},89136:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(10661),o=(a(3241),a(35095),a(14181)),l=(a(33828),a(66252)),n=a(2262),i=a(49963),r={__name:"index",props:{text:{type:String,default:""},tipText:{type:String,default:"拷贝生成信息"}},setup(e){const t=e,a=(0,n.qj)({tooltipText:t.tipText,tooltipStatus:!1});async function r(){try{await navigator.clipboard.writeText(t.text),a.tooltipText="已复制！"}catch(e){a.tooltipText="复制失败"}}function u(){a.tooltipStatus=!0,a.tooltipText=t.tipText,setTimeout((()=>{a.tooltipStatus=!1}),200)}return(e,t)=>{const c=(0,l.up)("DocumentCopy"),d=o.gn,m=s.Q0;return(0,l.wg)(),(0,l.j4)(m,{class:"box-item",effect:"dark",content:(0,n.SU)(a).tooltipText,disabled:(0,n.SU)(a).tooltipStatus,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{style:{color:"var(--el-color-success)"},class:"cursor-pointer",onClick:(0,i.iM)(r,["stop"]),onMouseleave:(0,i.iM)(u,["stop"])},{default:(0,l.w5)((()=>[(0,l.Wm)(c)])),_:1},8,["onClick","onMouseleave"])])),_:1},8,["content","disabled"])}}};function u(e){e.__source="src/components/ClipboardTips/index.vue"}"function"===typeof u&&u(r);const c=r;var d=c},47511:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(45496),o=(a(3241),a(34462),a(2262)),l=a(66252),n={__name:"index",setup(e,{expose:t}){const a=(0,o.iH)(""),n=(0,o.iH)(0),i=(0,o.iH)(!1);function r(e,t){a.value=e,n.value=t,i.value=!0}function u(){i.value=!1}return t({previewImages:r}),(e,t)=>{const r=s.WZ;return(0,o.SU)(i)?((0,l.wg)(),(0,l.j4)(r,{key:0,"initial-index":(0,o.SU)(n),"url-list":(0,o.SU)(a),"hide-on-click-modal":!0,onClose:u},null,8,["initial-index","url-list"])):(0,l.kq)("",!0)}}};function i(e){e.__source="src/components/ImageViewer/index.vue"}"function"===typeof i&&i(n);const r=n;var u=r},79726:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(4350),o=(a(3241),a(91103),a(31452)),l=(a(68445),a(66252)),n=a(3577),i=a(2262);const r={class:"wrap aligin-center"},u={key:0,class:"loading"},c={key:2};var d={__name:"index",props:{status:{type:String,default:"loadmore"}},emits:["loadmore"],setup(e,{emit:t}){const a=e,d=(0,l.Fl)((()=>{let e="";switch(a.status){case"loadmore":e="更多";break;case"loading":e="加载中";break;case"nomore":e="没有数据了";break}return e}));function m(){t("loadmore")}return(t,a)=>{const g=o.E2,p=s.t;return(0,l.wg)(),(0,l.iD)("div",r,["loading"==e.status?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",u,null,512)),[[p,!0]]):(0,l.kq)("",!0),"loadmore"==e.status?((0,l.wg)(),(0,l.j4)(g,{key:1,type:"primary",onClick:m},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,i.SU)(d)),1)])),_:1})):((0,l.wg)(),(0,l.iD)("span",c,(0,n.zw)((0,i.SU)(d)),1))])}}};function m(e){e.__source="src/components/LoadMore/index.vue"}var g=a(83744);"function"===typeof m&&m(d);const p=(0,g.Z)(d,[["__scopeId","data-v-300dc6ea"]]);var f=p},424:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var s=a(65450),o=(a(3241),a(69998),a(58234)),l=(a(13901),a(27750)),n=a(32018),i=(a(46160),a(73632)),r=(a(74965),a(22040)),u=(a(99426),a(83396)),c=(a(48157),a(74741),a(91194)),d=(a(2993),a(15659)),m=(a(79987),a(10444),a(14181)),g=(a(33828),a(10661)),p=(a(35095),a(85381)),f=(a(68538),a(32590),a(66252)),_=a(2262),k=a(3577),w=a(49963),h=a(89136),v=a(47511),y=a(90468),x=a(79726),b=a(57387),S=a(20863),T=a(93457),W=a(33729),U=a.n(W),D=a(47720);const q={class:"taskqueue-container"},I=["infinite-scroll-disabled"],M={style:{"margin-left":"8px"}},C={class:"taskqueue-card-body"},F={class:"taskqueue-image-group"},j={class:"taskqueue-image",justify:"center"},z={class:"percentage-value"},P={class:"percentage-label"};var V={__name:"taskqueue",setup(e){const t=(0,f.f3)("$baseConfirm"),a=(0,f.f3)("$baseMessage"),W=(0,S.sP)(),{getTasks:V,getTasksCheckedImages:H,hasNoMoreData:Y}=(0,D.Jk)(W),E=(0,_.qj)({accordion:!1,shareFormRef:null,loadMoreStatus:"loading",imageViewerRef:null}),{accordion:R,shareFormRef:Q,loadMoreStatus:K,imageViewerRef:Z}=(0,_.BK)(E),L=e=>{const t=e?["1"]:[];V.value.map((e=>e.collapse=t))},N=(0,f.Fl)((()=>"loading"===K.value||"nomore"===K.value));let B;async function O(){Y.value||(E.loadMoreStatus="loading",await W.loadMore(),(0,f.Y3)((()=>{E.loadMoreStatus=Y.value?"nomore":"loadmore"})))}async function X(e){t("你确定要删除当前任务吗",null,(async()=>{const{msg:t}=await(0,T._5)(e.ms_id);a(t,"success","vab-hey-message-success"),W.loadData()}))}function $(){H.value.forEach((e=>{U()(e.bigimg)})),W.resetImagesCheck()}function A(){const e=H.value.map((e=>e.bigimg));Q.value.showDialog(e)}function G(e){Q.value.showDialog([e])}function J(e,t){Z.value.previewImages(e,t)}return(0,f.wF)((async()=>{E.loadMoreStatus="loading",await W.loadData(),(0,f.Y3)((()=>{E.loadMoreStatus=Y.value?"nomore":"loadmore"})),B=setInterval((()=>{W.loadTasksProcess()}),3e3)})),(0,f.Ah)((()=>{B&&clearInterval(B)})),(e,t)=>{const a=c.QQ,S=p.OX,T=g.Q0,W=(0,f.up)("Download"),U=m.gn,D=d.ElButton,Y=(0,f.up)("Share"),E=d.MO,B=c.Lf,ee=(0,f.up)("Delete"),te=u.aE,ae=u.PH,se=r.Dv,oe=i.dq,le=n.Xh,ne=l.Z,ie=o.mR,re=s.n;return(0,f.wg)(),(0,f.iD)("div",q,[(0,f.Wm)(B,{class:"margin-top",column:2},{default:(0,f.w5)((()=>[(0,f.Wm)(a,{label:"任务队列"}),(0,f.Wm)(a,{label:"","label-align":"right",align:"right"},{default:(0,f.w5)((()=>[(0,f.Wm)(T,{class:"box-item",effect:"dark",content:"折叠图片生成信息",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(S,{modelValue:(0,_.SU)(R),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,_.dq)(R)?R.value=e:null),"inline-prompt":"",style:{"--el-switch-on-color":"var(--el-color-primary)","--el-switch-off-color":"var(--el-color-grey)"},"active-text":"显示","inactive-text":"隐藏",onChange:L},null,8,["modelValue"])])),_:1}),(0,f.Wm)(E,{class:"ml-4"},{default:(0,f.w5)((()=>[(0,f.Wm)(T,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可批量下载",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(D,{type:"default",text:"",disabled:0===(0,_.SU)(H).length,onClick:$},{default:(0,f.w5)((()=>[(0,f.Wm)(U,null,{default:(0,f.w5)((()=>[(0,f.Wm)(W)])),_:1}),(0,f.Uk)(" 下载 ")])),_:1},8,["disabled"])])),_:1}),(0,f.Wm)(T,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可把选择的图片发帖，分享出去",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(D,{text:"",disabled:0===(0,_.SU)(H).length,onClick:A},{default:(0,f.w5)((()=>[(0,f.Wm)(U,null,{default:(0,f.w5)((()=>[(0,f.Wm)(Y)])),_:1}),(0,f.Uk)(" 分享 ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,f.wy)(((0,f.wg)(),(0,f.iD)("div",{id:"task-queue-scroll","infinite-scroll-disabled":(0,_.SU)(N),class:"scrollbar"},[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,_.SU)(V),(e=>((0,f.wg)(),(0,f.iD)("div",{key:e.ms_id},[(0,f.Wm)(ae,{modelValue:e.collapse,"onUpdate:modelValue":t=>e.collapse=t},{default:(0,f.w5)((()=>[(0,f.Wm)(te,{name:"1"},{title:(0,f.w5)((()=>[(0,f.Uk)((0,k.zw)(e.created_at)+" ",1),(0,f._)("i",M,(0,k.zw)(e.expired_at),1),(0,f.Wm)((0,_.SU)(h["default"]),{text:e.log},null,8,["text"]),(0,f.Wm)(T,{class:"box-item",effect:"dark",content:"删除任务",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(U,{style:{color:"var(--el-color-danger)"},onClick:(0,w.iM)((t=>X(e)),["stop"])},{default:(0,f.w5)((()=>[(0,f.Wm)(ee)])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,f.w5)((()=>[(0,f._)("div",null,(0,k.zw)(e.log),1)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"]),e.ms_state>=100?((0,f.wg)(),(0,f.j4)(oe,{key:0,gutter:16,span:"24",justify:"start"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.imagelist,((t,a)=>((0,f.wg)(),(0,f.j4)(se,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,f.w5)((()=>[(0,f.Wm)((0,_.SU)(y["default"]),{"image-item":t,onTopic:G,onPreview:t=>J(e.images,a)},null,8,["image-item","onPreview"])])),_:2},1024)))),128))])),_:2},1024)):((0,f.wg)(),(0,f.j4)(oe,{key:1,gutter:16},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.imagelist,((t,a)=>((0,f.wg)(),(0,f.j4)(se,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,f.w5)((()=>[(0,f.Wm)(ne,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,f.w5)((()=>[(0,f._)("div",C,[(0,f._)("div",F,[(0,f._)("div",j,[(0,f.Wm)(le,{type:"dashboard",percentage:e.percentage},{default:(0,f.w5)((({percentage:t})=>[(0,f._)("span",z,(0,k.zw)(t)+"%",1),(0,f._)("span",P,(0,k.zw)(e.ms_state_msg),1)])),_:2},1032,["percentage"])])])])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024))])))),128)),(0,f.Wm)((0,_.SU)(x["default"]),{status:(0,_.SU)(K),onLoadmore:O},null,8,["status"])],8,I)),[[re,O]]),(0,f.Wm)((0,_.SU)(b["default"]),{ref_key:"shareFormRef",ref:Q},null,512),(0,f.Wm)(ie,{target:"#task-queue-scroll"}),(0,f.Wm)((0,_.SU)(v["default"]),{ref_key:"imageViewerRef",ref:Z},null,512)])}}};function H(e){e.__source="src/views/stablediffusion/components/taskqueue.vue"}var Y=a(83744);"function"===typeof H&&H(V);const E=(0,Y.Z)(V,[["__scopeId","data-v-32a69831"]]);var R=E}}]);