/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-06 12:25:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1509,7193],{20863:function(e,t,a){a.d(t,{If:function(){return r},sP:function(){return c}});var s=a(93457),o=a(61653),l=a(26010),n=a(47720);const i=e=>{const t={"-3":"失败","-2":"任务创建中","-1":"任务等待",100:"完成 "};return t[e]??"进行中"},r=e=>e.map((e=>{const t=e,a=e.imagelist.map((e=>(e.checked=!!e.checked&&e.checked,e)));t.imagelist=a;const s=e.imagelist.map((e=>e.bigimg));t.images=s,t.collapse=e.collapse&&e.collapse.length>0?e.collapse:[],t.expired_at=t.ms_deleteTime??"任务进行中",t.created_at=(0,o.p)(1e3*t.ms_createTime);const l=parseInt(t.ms_state);return t.percentage=l<=0?0:l,t.ms_state_msg=i(t.ms_state),e.logup=parseInt(e.logup),t.log=t.log?t.log:"",t})),c=(0,n.Q_)("imageResult",{state:()=>({tasks:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),getters:{getTasks(){return r(this.tasks)},getTasksImages(){return this.getTasks.map((e=>e.imagelist)).flat()},getTasksCheckedImages(){return this.getTasksImages.filter((e=>e.checked))},getProcessingTasks(){return this.getTasks.filter((e=>-3!==e.ms_state&&(e.ms_state<100||0===e.logup)))},hasNoMoreData(){return(0,l.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total)}},actions:{async load(){return(0,s.ss)(this.queryForm).then((e=>{const{body:{list:t,page_perpage:a,page_allcount:s}}=e;return 1===this.queryForm.page?this.tasks=[...t]:this.tasks=[...this.tasks,...t],this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(s),!0}))},async loadData(){return this.queryForm.page=1,this.load()},async loadMore(){return this.queryForm.page++,this.load()},resetImagesCheck(){this.getTasksCheckedImages.forEach((e=>e.checked=!1))},async loadTasksProcess(){if(0===this.getProcessingTasks.length)return;const e=this.getProcessingTasks.map((e=>e.ms_id)),{body:{list:t}}=await(0,s.rt)({ms_ids:e});t.forEach((e=>{const t=this.getProcessingTasks.find((t=>t.ms_id==e.ms_id));t&&(t.ms_state=parseInt(e.ms_state),t.ms_deleteTime=e.ms_deleteTime,t.log=e.log,t.logup=e.logup,e.imagelist.forEach(((e,a)=>{const s=t.imagelist[a];s.pic=e.pic,s.bigimg=e.bigimg})))}))}}})},61653:function(e,t,a){a.d(t,{E:function(){return i},p:function(){return r}});var s=a(27484),o=a.n(s),l=(a(33852),a(84110)),n=a.n(l);function i(e){return o().locale("zh-cn"),o()(e).fromNow()}function r(e,t="YYYY-MM-DD HH:mm:ss"){return o()(e).format(t)}o().extend(n())},17193:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(10661),o=(a(3241),a(35095),a(14181)),l=(a(33828),a(66252)),n=a(2262),i=a(49963),r={__name:"index",props:{text:{type:String,default:""},tipText:{type:String,default:"拷贝生成信息"}},setup(e){const t=e,a=(0,n.qj)({tooltipText:t.tipText,tooltipStatus:!1});async function r(){try{await navigator.clipboard.writeText(t.text),a.tooltipText="已复制！"}catch(e){a.tooltipText="复制失败"}}function c(){a.tooltipStatus=!0,a.tooltipText=t.tipText,setTimeout((()=>{a.tooltipStatus=!1}),200)}return(e,t)=>{const u=(0,l.up)("DocumentCopy"),d=o.gn,m=s.Q0;return(0,l.wg)(),(0,l.j4)(m,{class:"box-item",effect:"dark",content:(0,n.SU)(a).tooltipText,disabled:(0,n.SU)(a).tooltipStatus,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{style:{color:"var(--el-color-success)"},class:"cursor-pointer",onClick:(0,i.iM)(r,["stop"]),onMouseleave:(0,i.iM)(c,["stop"])},{default:(0,l.w5)((()=>[(0,l.Wm)(u)])),_:1},8,["onClick","onMouseleave"])])),_:1},8,["content","disabled"])}}};function c(e){e.__source="src/components/ClipboardTips/index.vue"}"function"===typeof c&&c(r);const u=r;var d=u},86594:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(4350),o=(a(3241),a(91103),a(31452)),l=(a(68445),a(66252)),n=a(3577),i=a(2262);const r={class:"wrap aligin-center"},c={key:0,class:"loading"},u={key:2};var d={__name:"index",props:{status:{type:String,default:"loadmore"}},emits:["loadmore"],setup(e,{emit:t}){const a=e,d=(0,l.Fl)((()=>{let e="";switch(a.status){case"loadmore":e="更多";break;case"loading":e="加载中";break;case"nomore":e="没有数据了";break}return e}));function m(){t("loadmore")}return(t,a)=>{const g=o.E2,p=s.t;return(0,l.wg)(),(0,l.iD)("div",r,["loading"==e.status?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",c,null,512)),[[p,!0]]):(0,l.kq)("",!0),"loadmore"==e.status?((0,l.wg)(),(0,l.j4)(g,{key:1,type:"primary",onClick:m},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,i.SU)(d)),1)])),_:1})):((0,l.wg)(),(0,l.iD)("span",u,(0,n.zw)((0,i.SU)(d)),1))])}}};function m(e){e.__source="src/components/LoadMore/index.vue"}var g=a(83744);"function"===typeof m&&m(d);const p=(0,g.Z)(d,[["__scopeId","data-v-300dc6ea"]]);var f=p},41509:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var s=a(65450),o=(a(3241),a(69998),a(27750)),l=a(32018),n=(a(46160),a(73632)),i=(a(74965),a(22040)),r=(a(99426),a(83396)),c=(a(48157),a(74741),a(91194)),u=(a(2993),a(15659)),d=(a(79987),a(10444),a(14181)),m=(a(33828),a(10661)),g=(a(35095),a(85381)),p=(a(68538),a(32590),a(66252)),f=a(2262),_=a(3577),k=a(49963),h=a(17193),w=a(14622),v=a(86594),y=a(79994),b=a(20863),x=a(36536),T=a(93457),S=a(33729),W=a.n(S),D=a(47720);const U={class:"taskqueue-container"},M=["infinite-scroll-disabled"],q={style:{"margin-left":"8px"}},C={class:"taskqueue-card-body"},I={class:"taskqueue-image-group"},z={class:"taskqueue-image",justify:"center"},F={class:"percentage-value"},j={class:"percentage-label"};var P={__name:"taskqueue",setup(e){const t=(0,p.f3)("$baseConfirm"),a=(0,p.f3)("$baseMessage"),S=(0,b.sP)(),{getTasks:P,getTasksCheckedImages:Y,hasNoMoreData:E,getProcessingTasks:V}=((0,x.m)(),(0,D.Jk)(S)),H=(0,f.qj)({accordion:!1,shareFormRef:null,loadMoreStatus:"loading"}),{accordion:Q,shareFormRef:K,loadMoreStatus:R}=(0,f.BK)(H),L=e=>{const t=e?["1"]:[];P.value.map((e=>e.collapse=t))},N=(0,p.Fl)((()=>"loading"===R.value||"nomore"===R.value));let Z;async function B(){E.value||(H.loadMoreStatus="loading",await S.loadMore(),(0,p.Y3)((()=>{H.loadMoreStatus=E.value?"nomore":"loadmore"})))}async function O(e){t("你确定要删除当前任务吗",null,(async()=>{const{msg:t}=await(0,T._5)(e.ms_id);a(t,"success","vab-hey-message-success"),S.loadData()}))}function X(){Y.value.forEach((e=>{W()(e.bigimg)})),S.resetImagesCheck()}async function $(){const e=Y.value.map((e=>e.bigimg));K.value.showDialog(e)}async function A(e){K.value.showDialog([e])}return(0,p.bv)((async()=>{H.loadMoreStatus="loading",await S.loadData(),(0,p.Y3)((()=>{H.loadMoreStatus=E.value?"nomore":"loadmore"})),Z=setInterval((()=>{S.loadTasksProcess()}),3e3)})),(0,p.Ah)((()=>{Z&&clearInterval(Z)})),(e,t)=>{const a=c.QQ,b=g.OX,x=m.Q0,T=(0,p.up)("Download"),S=d.gn,W=u.ElButton,D=(0,p.up)("Share"),E=u.MO,V=c.Lf,H=(0,p.up)("Delete"),Z=r.aE,G=r.PH,J=i.Dv,ee=n.dq,te=l.Xh,ae=o.Z,se=s.n;return(0,p.wg)(),(0,p.iD)("div",U,[(0,p.Wm)(V,{class:"margin-top",column:2},{default:(0,p.w5)((()=>[(0,p.Wm)(a,{label:"任务队列"}),(0,p.Wm)(a,{label:"","label-align":"right",align:"right"},{default:(0,p.w5)((()=>[(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"折叠图片生成信息",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(b,{modelValue:(0,f.SU)(Q),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,f.dq)(Q)?Q.value=e:null),"inline-prompt":"",style:{"--el-switch-on-color":"var(--el-color-primary)","--el-switch-off-color":"var(--el-color-grey)"},"active-text":"显示","inactive-text":"隐藏",onChange:L},null,8,["modelValue"])])),_:1}),(0,p.Wm)(E,{class:"ml-4"},{default:(0,p.w5)((()=>[(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可批量下载",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(W,{type:"default",text:"",disabled:0===(0,f.SU)(Y).length,onClick:X},{default:(0,p.w5)((()=>[(0,p.Wm)(S,null,{default:(0,p.w5)((()=>[(0,p.Wm)(T)])),_:1}),(0,p.Uk)(" 下载 ")])),_:1},8,["disabled"])])),_:1}),(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可把选择的图片发帖，分享出去",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(W,{text:"",disabled:0===(0,f.SU)(Y).length,onClick:$},{default:(0,p.w5)((()=>[(0,p.Wm)(S,null,{default:(0,p.w5)((()=>[(0,p.Wm)(D)])),_:1}),(0,p.Uk)(" 分享 ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,p.wy)(((0,p.wg)(),(0,p.iD)("div",{id:"task-queue-scroll","infinite-scroll-disabled":(0,f.SU)(N),class:"scrollbar"},[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)((0,f.SU)(P),(e=>((0,p.wg)(),(0,p.iD)("div",{key:e.ms_id},[(0,p.Wm)(G,{modelValue:e.collapse,"onUpdate:modelValue":t=>e.collapse=t},{default:(0,p.w5)((()=>[(0,p.Wm)(Z,{name:"1"},{title:(0,p.w5)((()=>[(0,p.Uk)((0,_.zw)(e.created_at)+" ",1),(0,p._)("i",q,(0,_.zw)(e.expired_at),1),(0,p.Wm)((0,f.SU)(h["default"]),{text:e.log},null,8,["text"]),(0,p.Wm)(x,{class:"box-item",effect:"dark",content:"删除任务",placement:"top"},{default:(0,p.w5)((()=>[(0,p.Wm)(S,{style:{color:"var(--el-color-danger)"},onClick:(0,k.iM)((t=>O(e)),["stop"])},{default:(0,p.w5)((()=>[(0,p.Wm)(H)])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,p.w5)((()=>[(0,p._)("div",null,(0,_.zw)(e.log),1)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"]),e.ms_state>=100?((0,p.wg)(),(0,p.j4)(ee,{key:0,gutter:16,span:"24",justify:"start"},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(e.imagelist,((t,a)=>((0,p.wg)(),(0,p.j4)(J,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,p.w5)((()=>[(0,p.Wm)((0,f.SU)(w["default"]),{"image-item":t,images:e.images,"image-index":a,onTopic:A},null,8,["image-item","images","image-index"])])),_:2},1024)))),128))])),_:2},1024)):((0,p.wg)(),(0,p.j4)(ee,{key:1,gutter:16},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(e.imagelist,((t,a)=>((0,p.wg)(),(0,p.j4)(J,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,p.w5)((()=>[(0,p.Wm)(ae,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,p.w5)((()=>[(0,p._)("div",C,[(0,p._)("div",I,[(0,p._)("div",z,[(0,p.Wm)(te,{type:"dashboard",percentage:e.percentage},{default:(0,p.w5)((({percentage:t})=>[(0,p._)("span",F,(0,_.zw)(t)+"%",1),(0,p._)("span",j,(0,_.zw)(e.ms_state_msg),1)])),_:2},1032,["percentage"])])])])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024))])))),128)),(0,p.Wm)((0,f.SU)(v["default"]),{status:(0,f.SU)(R),onLoadmore:B},null,8,["status"])],8,M)),[[se,B]]),(0,p.Wm)((0,f.SU)(y["default"]),{ref_key:"shareFormRef",ref:K},null,512)])}}};function Y(e){e.__source="src/views/stablediffusion/components/taskqueue.vue"}var E=a(83744);"function"===typeof Y&&Y(P);const V=(0,E.Z)(P,[["__scopeId","data-v-4c0cd0dd"]]);var H=V}}]);