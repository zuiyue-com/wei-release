/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 10:23:14
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3099],{53580:function(t,e,n){n.d(e,{BB:function(){return s},BN:function(){return c},N7:function(){return k},NY:function(){return l},PM:function(){return w},Wx:function(){return u},Xq:function(){return h},Z0:function(){return f},iw:function(){return i},kA:function(){return p},l0:function(){return m},mE:function(){return y},wR:function(){return d},xS:function(){return v},yX:function(){return r},yo:function(){return g}});var o=n(92325),a=n(11555);function r(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function i(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},n={...e[t]};return n}function u(t){const e={...t,filter_form_id:3};return(0,o.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function d(t){const e={...t,fid:3};return(0,o.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function l(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function f(t){const{body:{hash:e}}=await(0,a.Gv)();return t.formhash=e,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function h(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function w(t){const e={...t,thread_forum:"sd"};return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function y(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function g(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:n,...e}})}async function k(t){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},15904:function(t,e,n){n.d(e,{l:function(){return i},x:function(){return s}});var o=n(20235),a=n(96486),r=n.n(a);function s(t){const e=r().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,o.gx)(e.authorid),e}function i(t,e){return t.map((t=>{const n=r().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);n.link={path:`/topic/${t.tid}`,query:{}},n.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,n.images=t.attachmentPic.map((t=>t.img)),n.author_route=(0,o.gx)(t.authorid);const a=parseInt(t.authorid)!==e;return n.like={can:a&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},n}))}},34671:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=n(4350),a=(n(3241),n(91103),n(31452)),r=(n(68445),n(66252)),s=n(3577);const i={key:0,class:"loading"};var u={__name:"show",props:{status:{type:String,default:"loadmore"},align:{type:String,default:"end"},clicked:{type:Boolean,default:!1}},emits:["loadmore","reset"],setup(t,{emit:e}){function n(){e("loadmore")}function u(){e("reset")}return(e,c)=>{const d=a.E2,l=o.t;return(0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["wrap aligin-center","justify-"+t.align])},["loading"==t.status?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",i,null,512)),[[l,!0]]):(0,r.kq)("",!0),t.clicked?((0,r.wg)(),(0,r.j4)(d,{key:1,type:"primary",onClick:u},{default:(0,r.w5)((()=>[(0,r.Uk)("收起")])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(d,{type:"primary",onClick:n},{default:(0,r.w5)((()=>[(0,r.Uk)("更多")])),_:1})],2)}}};function c(t){t.__source="src/components/LoadMore/show.vue"}var d=n(83744);"function"===typeof c&&c(u);const l=(0,d.Z)(u,[["__scopeId","data-v-6bf37098"]]);var p=l},63099:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var o=n(10661),a=(n(3241),n(35095),n(14181)),r=(n(33828),n(77669)),s=(n(95774),n(66252)),i=n(2262),u=n(3577),c=n(34671),d=n(53580),l=n(15904),p=n(15790),f=n(47720);const m={class:"comments"},h={class:"row"},w={class:"content-box"},y={class:"user-box"},g={class:"author"},v=["innerHTML"],k={class:"message"},_=["innerHTML"],b=["innerHTML"];var Z={__name:"comments",props:{comments:{type:Array,default:()=>[]},noMore:{type:Boolean,default:!1}},emits:["reply","reload","loadmore","report"],setup(t,{emit:e}){const n=t,Z=(0,s.f3)("$baseConfirm"),M=(0,s.f3)("$baseMessage"),L=(0,p.L)(),{getUserId:x}=(0,f.Jk)(L),C=(0,i.qj)({clickedLoadMore:!1,showAllGenerateParams:!1}),W=(0,s.Fl)((()=>n.comments.map((t=>{const e=(0,l.x)(t);return e.canDelete=x.value==t.authorid,e})))),j=(0,s.Fl)((()=>{const t=C.clickedLoadMore?W.value.length:4;return W.value.slice(0,t)})),D=(0,s.Fl)((()=>W.value.length>4));function G(t){e("reply",t.pid,t.author)}async function H(t){Z("你确定要删除此帖子吗？",null,(async()=>{const n={tid:t.tid,fid:t.fid,pid:t.pid};await(0,d.Z0)(n),e("reload"),M("删除成功！","success","vab-hey-message-success")}))}async function S(){C.clickedLoadMore?(n.noMore&&M("没有更多数据了","info"),e("loadmore")):C.clickedLoadMore=!0}async function q(){C.clickedLoadMore=!1}async function T(t){e("report",t.pid,t.fid)}return(t,e)=>{const n=r.vs,d=(0,s.up)("router-link"),l=(0,s.up)("ChatDotSquare"),p=a.gn,f=o.Q0,Z=(0,s.up)("Bell"),M=(0,s.up)("Delete");return(0,s.wg)(),(0,s.iD)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(j),(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.pid,class:"item"},[(0,s._)("div",h,[(0,s.Wm)(d,{to:t.author_route},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{src:t.avatar},null,8,["src"])])),_:2},1032,["to"]),(0,s._)("div",w,[(0,s._)("div",y,[(0,s.Wm)(d,{to:t.author_route},{default:(0,s.w5)((()=>[(0,s._)("div",g,(0,u.zw)(t.author),1)])),_:2},1032,["to"]),(0,s._)("div",{class:"date",innerHTML:t.dateline},null,8,v),(0,s.Wm)(f,{class:"box-item",effect:"dark",content:"回复",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{onClick:e=>G(t)},{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:2},1032,["onClick"])])),_:2},1024),(0,s.Wm)(f,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:e=>T(t)},{default:(0,s.w5)((()=>[(0,s.Wm)(Z)])),_:2},1032,["onClick"])])),_:2},1024),t.canDelete?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"box-item",effect:"dark",content:"删除",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{style:{color:"var(--el-color-danger)"},onClick:e=>H(t)},{default:(0,s.w5)((()=>[(0,s.Wm)(M)])),_:2},1032,["onClick"])])),_:2},1024)):(0,s.kq)("",!0)]),(0,s._)("div",k,[(0,s._)("span",{innerHTML:t.subject},null,8,_),(0,s._)("span",{innerHTML:t.message},null,8,b)])])])])))),128)),(0,i.SU)(D)?((0,s.wg)(),(0,s.j4)((0,i.SU)(c["default"]),{key:0,clicked:(0,i.SU)(C).clickedLoadMore,onLoadmore:S,onReset:q},null,8,["clicked"])):(0,s.kq)("",!0)])}}};function M(t){t.__source="src/components/Topic/comments.vue"}var L=n(83744);"function"===typeof M&&M(Z);const x=(0,L.Z)(Z,[["__scopeId","data-v-af1f1e70"]]);var C=x}}]);