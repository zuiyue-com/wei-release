/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-16 15:14:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9653,6879],{15904:function(t,e,a){a.d(e,{l:function(){return u},x:function(){return o}});var n=a(20235),i=a(96486),r=a.n(i);function o(t){const e=r().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,n.gx)(e.authorid),e}function u(t,e){return t.map((t=>{const a=r().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);a.link={path:`/topic/${t.tid}`,query:{}},a.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,a.images=t.attachmentPic.map((t=>t.img)),a.author_route=(0,n.gx)(t.authorid);const i=parseInt(t.authorid)!==e;return a.like={can:i&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},a}))}},79805:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var n=a(4350),i=(a(3241),a(91103),a(76128)),r=(a(74828),a(73632)),o=(a(74965),a(22040)),u=(a(99426),a(49676)),s=(a(73204),a(66252)),c=a(2262),p=a(83793),d=a(53580),l=a(15904),g=a(15790);const m={class:"share-container"},h={key:1};var f={__name:"posts",setup(t){const e=(0,g.L)(),a=((0,s.f3)("$baseConfirm"),(0,s.f3)("$baseMessage"),(0,c.qj)({topics:[],queryForm:{page:1,uid:0},pagination:{pageSize:1,total:1},loading:!1})),{topics:f,queryForm:y,pagination:v,loading:_}=(0,c.BK)(a);async function w(){try{a.loading=!0;const{body:{list:t,page_perpage:n,page_allcount:i}}=await(0,d.wR)(a.queryForm),r=(0,l.l)(t,e.getUserId);a.topics=r,a.pagination.pageSize=parseInt(n),a.pagination.total=parseInt(i)}catch(t){console.log(t)}finally{a.loading=!1}}function k(t){a.queryForm.page=t,w()}return(0,s.bv)((()=>{w()})),(t,e)=>{const a=(0,s.up)("masonry-wall"),d=u.R,l=o.Dv,g=r.dq,w=i.GT,S=n.t;return(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",m,[(0,c.SU)(f).length>0?((0,s.wg)(),(0,s.j4)(g,{key:0,gutter:20},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{span:24},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{items:(0,c.SU)(f),col:"7",gap:16,"column-width":230,"key-mapper":t=>t.tid},{default:(0,s.w5)((({item:t})=>[(0,s.Wm)((0,c.SU)(p["default"]),{item:t},null,8,["item"])])),_:1},8,["items","key-mapper"]),(0,s.Wm)(d,{"current-page":(0,c.SU)(y).page,"onUpdate:currentPage":e[0]||(e[0]=t=>(0,c.SU)(y).page=t),layout:"prev, pager, next","page-size":(0,c.SU)(v).pageSize,total:(0,c.SU)(v).total,onCurrentChange:k},null,8,["current-page","page-size","total"])])),_:1})])),_:1})):((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Wm)(w,{class:"vab-data-empty",description:"你还没有分享"})]))])),[[S,(0,c.SU)(_)]])}}};function y(t){t.__source="src/views/setting/personalCenter/components/posts.vue"}"function"===typeof y&&y(f);const v=f;var _=v}}]);