/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-28 12:19:52
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2573],{93457:function(t,e,a){a.d(e,{Ix:function(){return r},Pc:function(){return l},R1:function(){return o},Wl:function(){return p},YU:function(){return d},_5:function(){return u},p$:function(){return i},rt:function(){return c},ss:function(){return s}});var n=a(92325);function o(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function r(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,n.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function c(t={}){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function d(t,e){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function l(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,a){a.d(e,{BB:function(){return r},BN:function(){return u},N7:function(){return k},NY:function(){return l},PM:function(){return g},Wx:function(){return c},Xq:function(){return f},Z0:function(){return h},iw:function(){return s},kA:function(){return p},l0:function(){return m},mE:function(){return w},wR:function(){return d},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var n=a(92325),o=a(11555);function i(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function r(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function s(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function c(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function h(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function k(t){return(0,n.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,a){a.d(e,{o:function(){return d}});a(57658);var n=a(53580),o=a(81095),i=a(15790),r=a(26010),s=a(93457),c=a(47720);const u=(0,i.L)(),d=(0,c.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return u.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,r.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:a,page_perpage:o,page_allcount:i}}=await(0,n.BN)(this.queryForm),r=e;this.detail=r[0]??{},this.images=this.formatImages(),this.comments=r.slice(1),this.extraInfo=a,this.pagination.pageSize=parseInt(o),this.pagination.total=parseInt(i),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const s=this.images.findIndex((e=>e.id==t));s>=0?(this.imageIndex=parseInt(s),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:o}}=await(0,n.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,n.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,n.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,n.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,n.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,s.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,a){a.d(e,{Gc:function(){return o},Vj:function(){return n},wV:function(){return i},xV:function(){return s}});a(57658);function n(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function o(t,e,a){const n=Math.ceil(a/e);return t>=n}function i(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function r(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function s(t=0){i(t),r(t)}},15904:function(t,e,a){a.d(e,{l:function(){return s},x:function(){return r}});var n=a(20235),o=a(96486),i=a.n(o);function r(t){const e=i().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,n.gx)(e.authorid),e}function s(t,e){return t.map((t=>{const a=i().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);a.link={path:`/topic/${t.tid}`,query:{}},a.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,a.images=t.attachmentPic.map((t=>t.img)),a.author_route=(0,n.gx)(t.authorid);const o=parseInt(t.authorid)!==e;return a.like={can:o&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},a}))}},34671:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=a(4350),o=(a(3241),a(91103),a(31452)),i=(a(68445),a(66252)),r=a(3577);const s={key:0,class:"loading"};var c={__name:"show",props:{status:{type:String,default:"loadmore"},align:{type:String,default:"end"},clicked:{type:Boolean,default:!1}},emits:["loadmore","reset"],setup(t,{emit:e}){function a(){e("loadmore")}function c(){e("reset")}return(e,u)=>{const d=o.E2,l=n.t;return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(["wrap aligin-center","justify-"+t.align])},["loading"==t.status?(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",s,null,512)),[[l,!0]]):(0,i.kq)("",!0),t.clicked?((0,i.wg)(),(0,i.j4)(d,{key:1,type:"primary",onClick:c},{default:(0,i.w5)((()=>[(0,i.Uk)("收起")])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(d,{type:"primary",onClick:a},{default:(0,i.w5)((()=>[(0,i.Uk)("更多")])),_:1})],2)}}};function u(t){t.__source="src/components/LoadMore/show.vue"}var d=a(83744);"function"===typeof u&&u(c);const l=(0,d.Z)(c,[["__scopeId","data-v-6bf37098"]]);var p=l},22573:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var n=a(10661),o=(a(3241),a(35095),a(14181)),i=(a(33828),a(77669)),r=(a(95774),a(66252)),s=a(2262),c=a(3577),u=a(34671),d=a(53580),l=a(15904),p=a(15790),h=a(34339),m=a(47720);const f={class:"comments"},g={class:"row"},w={class:"content-box"},y={class:"user-box"},v={class:"author"},k=["innerHTML"],b={class:"message"},_=["innerHTML"],I=["innerHTML"];var M={__name:"comments",emits:["reply","report"],setup(t,{emit:e}){const a=(0,r.f3)("$baseConfirm"),M=(0,r.f3)("$baseMessage"),Z=(0,h.o)(),{hasNoMoreData:x}=(0,m.Jk)(Z),T=(0,p.L)(),{getUserId:D}=(0,m.Jk)(T),L=(0,s.qj)({clickedLoadMore:!1,showAllGenerateParams:!1}),j=(0,r.Fl)((()=>Z.comments.map((t=>{const e=(0,l.x)(t);return e.canDelete=D.value==t.authorid,e})))),F=(0,r.Fl)((()=>{const t=L.clickedLoadMore?j.value.length:4;return j.value.slice(0,t)})),q=(0,r.Fl)((()=>j.value.length>4));function C(t){e("reply",t.pid,t.author)}async function S(t){a("你确定要删除此帖子吗？",null,(async()=>{const e={tid:t.tid,fid:t.fid,pid:t.pid};await(0,d.Z0)(e),Z.loadTopic(),M("删除成功！","success","vab-hey-message-success")}))}async function W(){L.clickedLoadMore?(x.value&&M("没有更多数据了","info"),Z.loadMoreComments()):L.clickedLoadMore=!0}async function H(){L.clickedLoadMore=!1}async function G(t){e("report",t.pid,t.fid)}return(t,e)=>{const a=i.vs,d=(0,r.up)("router-link"),l=(0,r.up)("ChatDotSquare"),p=o.gn,h=n.Q0,m=(0,r.up)("Bell"),M=(0,r.up)("Delete");return(0,r.wg)(),(0,r.iD)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(F),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.pid,class:"item"},[(0,r._)("div",g,[(0,r.Wm)(d,{to:t.author_route},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{src:t.avatar},null,8,["src"])])),_:2},1032,["to"]),(0,r._)("div",w,[(0,r._)("div",y,[(0,r.Wm)(d,{to:t.author_route},{default:(0,r.w5)((()=>[(0,r._)("div",v,(0,c.zw)(t.author),1)])),_:2},1032,["to"]),(0,r._)("div",{class:"date",innerHTML:t.dateline},null,8,k),(0,r.Wm)(h,{class:"box-item",effect:"dark",content:"回复",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{onClick:e=>C(t)},{default:(0,r.w5)((()=>[(0,r.Wm)(l)])),_:2},1032,["onClick"])])),_:2},1024),(0,r.Wm)(h,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:e=>G(t)},{default:(0,r.w5)((()=>[(0,r.Wm)(m)])),_:2},1032,["onClick"])])),_:2},1024),t.canDelete?((0,r.wg)(),(0,r.j4)(h,{key:0,class:"box-item",effect:"dark",content:"删除",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{style:{color:"var(--el-color-danger)"},onClick:e=>S(t)},{default:(0,r.w5)((()=>[(0,r.Wm)(M)])),_:2},1032,["onClick"])])),_:2},1024)):(0,r.kq)("",!0)]),(0,r._)("div",b,[(0,r._)("span",{innerHTML:t.subject},null,8,_),(0,r._)("span",{innerHTML:t.message},null,8,I)])])])])))),128)),(0,s.SU)(q)?((0,r.wg)(),(0,r.j4)((0,s.SU)(u["default"]),{key:0,clicked:(0,s.SU)(L).clickedLoadMore,onLoadmore:W,onReset:H},null,8,["clicked"])):(0,r.kq)("",!0)])}}};function Z(t){t.__source="src/views/topic/components/comments.vue"}var x=a(83744);"function"===typeof Z&&Z(M);const T=(0,x.Z)(M,[["__scopeId","data-v-5b49de28"]]);var D=T}}]);