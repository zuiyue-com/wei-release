/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:38:19
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9678,6879],{15904:function(t,e,a){a.d(e,{l:function(){return c},x:function(){return o}});var n=a(20235),i=a(96486),r=a.n(i);function o(t){const e=r().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,n.gx)(e.authorid),e}function c(t,e){return t.map((t=>{const a=r().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);a.link={path:`/topic/${t.tid}`,query:{}},a.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,a.images=t.attachmentPic.map((t=>t.img)),a.author_route=(0,n.gx)(t.authorid);const i=parseInt(t.authorid)!==e;return a.like={can:i&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},a}))}},84562:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var n=a(4350),i=(a(3241),a(91103),a(76128)),r=(a(74828),a(73632)),o=(a(74965),a(22040)),c=(a(99426),a(49676)),s=(a(73204),a(10661)),u=(a(35095),a(66252)),p=a(2262),l=a(49963),d=a(83793),m=a(53580),g=a(15904),f=a(15790);const h={class:"share-container"},y=(0,u._)("div",{class:"mt-2"},null,-1),v={key:1};var w={__name:"share",setup(t){const e=(0,f.L)(),a=(0,u.f3)("$baseConfirm"),w=(0,u.f3)("$baseMessage"),_=(0,p.qj)({topics:[],queryForm:{page:1,uid:0},pagination:{pageSize:1,total:1},loading:!1}),{topics:b,queryForm:k,pagination:S,loading:U}=(0,p.BK)(_);async function q(){try{_.loading=!0;const{body:{list:t,page_perpage:a,page_allcount:n}}=await(0,m.wR)(_.queryForm),i=(0,g.l)(t,e.getUserId);_.topics=i,_.pagination.pageSize=parseInt(a),_.pagination.total=parseInt(n)}catch(t){console.log(t)}finally{_.loading=!1}}function x(t){_.queryForm.page=t,q()}async function C(t){a("你确定要删除此帖子吗？",null,(async()=>{try{const e={tid:t.tid,fid:t.fid,pid:t.pid};await(0,m.Z0)(e),w("删除成功！","success","vab-hey-message-success"),_.queryForm.page=1,q()}catch(e){}}))}return(0,u.bv)((()=>{q()})),(t,e)=>{const a=(0,u.up)("vab-icon"),m=s.Q0,g=(0,u.up)("masonry-wall"),f=c.R,w=o.Dv,_=r.dq,q=i.GT,W=n.t;return(0,u.wy)(((0,u.wg)(),(0,u.iD)("div",h,[(0,p.SU)(b).length>0?((0,u.wg)(),(0,u.j4)(_,{key:0,gutter:20},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{items:(0,p.SU)(b),col:"7",gap:16,"column-width":230,"key-mapper":t=>t.tid},{default:(0,u.w5)((({item:t,index:e})=>[(0,u.Wm)((0,p.SU)(d["default"]),{item:t,"show-user-bar":!0},{action:(0,u.w5)((({post:t})=>[(0,u.Wm)(m,{class:"box-item",effect:"dark",content:"删除分享",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)","margin-left":"5px"},onClick:(0,l.iM)((e=>C(t)),["prevent"])},null,8,["onClick"])])),_:2},1024)])),bottom:(0,u.w5)((()=>[y])),_:2},1032,["item"])])),_:1},8,["items","key-mapper"]),(0,u.Wm)(f,{"current-page":(0,p.SU)(k).page,"onUpdate:currentPage":e[0]||(e[0]=t=>(0,p.SU)(k).page=t),layout:"prev, pager, next","page-size":(0,p.SU)(S).pageSize,total:(0,p.SU)(S).total,onCurrentChange:x},null,8,["current-page","page-size","total"])])),_:1})])),_:1})):((0,u.wg)(),(0,u.iD)("div",v,[(0,u.Wm)(q,{class:"vab-data-empty",description:"你还没有分享"})]))])),[[W,(0,p.SU)(U)]])}}};function _(t){t.__source="src/views/stablediffusion/share.vue"}"function"===typeof _&&_(w);const b=w;var k=b}}]);