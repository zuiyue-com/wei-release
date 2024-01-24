/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 16:34:29
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8229,6879],{15904:function(e,a,t){t.d(a,{l:function(){return c},x:function(){return o}});var n=t(20235),i=t(96486),r=t.n(i);function o(e){const a=r().pick(e,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return a.author_route=(0,n.gx)(a.authorid),a}function c(e,a){return e.map((e=>{const t=r().pick(e,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);t.link={path:`/topic/${e.tid}`,query:{}},t.image_id=e.attachmentPic.length>0?e.attachmentPic[0].aid:0,t.images=e.attachmentPic.map((e=>e.img)),t.author_route=(0,n.gx)(e.authorid);const i=parseInt(e.authorid)!==a;return t.like={can:i&&0==e.threadHasRecommend,number:parseInt(e.recommend_add),liked:!!e.threadHasRecommend},t}))}},27432:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(4350),i=(t(3241),t(91103),t(76128)),r=(t(74828),t(73632)),o=(t(74965),t(22040)),c=(t(99426),t(49676)),s=(t(73204),t(10661)),u=(t(35095),t(66252)),p=t(2262),d=t(49963),l=t(83793),m=t(53580),g=t(15904),f=t(15790);const h={class:"favoriate-container"},v={key:1};var y={__name:"favoriate",setup(e){const a=(0,f.L)(),t=(0,u.f3)("$baseConfirm"),y=(0,u.f3)("$baseMessage"),w=(0,p.qj)({topics:[],queryForm:{page:1,uid:0},pagination:{pageSize:1,total:1},loading:!1}),{topics:_,queryForm:b,pagination:k,loading:S}=(0,p.BK)(w);async function U(){try{w.loading=!0;const{body:{list:e,page_perpage:t,page_allcount:n}}=await(0,m.PM)(w.queryForm),i=e.map((e=>{const a=e.threadInfo;return a.favid=e.favid,a.threadHasRecommend=e.threadHasRecommend,a})),r=(0,g.l)(i,a.getUserId);w.topics=r,w.pagination.pageSize=parseInt(t),w.pagination.total=parseInt(n)}catch(e){console.log(e)}finally{w.loading=!1}}function q(e){w.queryForm.page=e,U()}async function x(e){t("你确定要取消收藏此帖子吗？",null,(async()=>{await(0,m.Xq)(e),w.queryForm.page=1,U(),y("成功取消收藏","success","vab-hey-message-success")}))}return(0,u.bv)((()=>{U()})),(e,a)=>{const t=(0,u.up)("vab-icon"),m=s.Q0,g=(0,u.up)("masonry-wall"),f=c.R,y=o.Dv,w=r.dq,U=i.GT,C=n.t;return(0,u.wy)(((0,u.wg)(),(0,u.iD)("div",h,[(0,p.SU)(_).length>0?((0,u.wg)(),(0,u.j4)(w,{key:0,gutter:20},{default:(0,u.w5)((()=>[(0,u.Wm)(y,{span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{items:(0,p.SU)(_),col:"7",gap:16,"column-width":230,"key-mapper":e=>e.tid},{default:(0,u.w5)((({item:e,index:a})=>[(0,u.Wm)((0,p.SU)(l["default"]),{item:e,"show-user-bar":!1},{action:(0,u.w5)((({post:e})=>[(0,u.Wm)(m,{class:"box-item",effect:"dark",content:"删除收藏",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(t,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)","margin-left":"5px"},onClick:(0,d.iM)((a=>x(e.favid)),["prevent"])},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["item"])])),_:1},8,["items","key-mapper"]),(0,u.Wm)(f,{"current-page":(0,p.SU)(b).page,"onUpdate:currentPage":a[0]||(a[0]=e=>(0,p.SU)(b).page=e),layout:"prev, pager, next","page-size":(0,p.SU)(k).pageSize,total:(0,p.SU)(k).total,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})])),_:1})):((0,u.wg)(),(0,u.iD)("div",v,[(0,u.Wm)(U,{class:"vab-data-empty",description:"你还没有收藏"})]))])),[[C,(0,p.SU)(S)]])}}};function w(e){e.__source="src/views/stablediffusion/favoriate.vue"}"function"===typeof w&&w(y);const _=y;var b=_}}]);