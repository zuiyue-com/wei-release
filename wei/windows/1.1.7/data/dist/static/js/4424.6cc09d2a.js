/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-11 19:25:47
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4424,9527],{93457:function(t,e,a){a.d(e,{Ix:function(){return s},Pc:function(){return p},R1:function(){return o},Wl:function(){return l},YU:function(){return d},_5:function(){return u},p$:function(){return i},rt:function(){return c},ss:function(){return r}});var n=a(92325);function o(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function s(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,n.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function r(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function c(t={}){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function d(t,e){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function p(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function l(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,a){a.d(e,{BB:function(){return s},BN:function(){return u},N7:function(){return I},NY:function(){return p},PM:function(){return g},Wx:function(){return c},Xq:function(){return f},Z0:function(){return h},iw:function(){return r},kA:function(){return l},l0:function(){return m},mE:function(){return w},wR:function(){return d},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var n=a(92325),o=a(11555);function i(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function r(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function c(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function h(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function I(t){return(0,n.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,a){a.d(e,{o:function(){return d}});a(57658);var n=a(53580),o=a(81095),i=a(15790),s=a(26010),r=a(93457),c=a(47720);const u=(0,i.L)(),d=(0,c.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return u.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,s.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:a,page_perpage:o,page_allcount:i}}=await(0,n.BN)(this.queryForm),s=e;this.detail=s[0]??{},this.images=this.formatImages(),this.comments=s.slice(1),this.extraInfo=a,this.pagination.pageSize=parseInt(o),this.pagination.total=parseInt(i),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const r=this.images.findIndex((e=>e.id==t));r>=0?(this.imageIndex=parseInt(r),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:o}}=await(0,n.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,n.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,n.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,n.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,n.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,r.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,a){a.d(e,{Gc:function(){return o},Vj:function(){return n},wV:function(){return i},xV:function(){return r}});a(57658);function n(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function o(t,e,a){const n=Math.ceil(a/e);return t>=n}function i(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function s(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function r(t=0){i(t),s(t)}},49527:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=a(66252),o=a(3577),i=a(2262);const s={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(t){const e=t,a=(0,n.Fl)((()=>{const t={fontSize:e.size};return e.color&&(t.color=e.color),t}));return(e,r)=>{const c=(0,n.up)("vab-icon");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(c,{icon:t.icon,style:(0,o.j5)((0,i.SU)(a)),class:"icon"},null,8,["icon","style"]),(0,n._)("span",{style:(0,o.j5)((0,i.SU)(a))},(0,o.zw)(t.text),5)])}}};function c(t){t.__source="src/components/IconText/index.vue"}var u=a(83744);"function"===typeof c&&c(r);const d=(0,u.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var p=d},64424:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(14181),o=(a(3241),a(33828),a(10661)),i=(a(35095),a(66252)),s=a(2262),r=a(3577),c=a(49527),u=a(34339),d=a(47720);const p={class:"info-box"};var l={__name:"actions",emits:["reply","report"],setup(t,{emit:e}){const a=(0,u.o)(),{extraInfo:l,favId:h,likeId:m,canAction:f,getPid:g}=(0,d.Jk)(a),{handleDelFavTopic:w,handleAddFavTopic:y,handleAddLikeTopic:v}=a;async function I(){e("report",g.value,l.value.fid)}return(t,e)=>{const a=o.Q0,u=(0,i.up)("Bell"),d=n.gn;return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(a,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(h)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"star-fill",text:(0,s.SU)(l).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(w)},null,8,["text","onClick"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"star-line",text:(0,s.SU)(l).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(y)},null,8,["text","onClick"]))])])),_:1}),(0,i.Wm)(a,{class:"box-item",effect:"dark",content:(0,s.SU)(f)?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(m)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"heart-3-fill",text:(0,s.SU)(l).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"heart-3-line",text:(0,s.SU)(l).recommend_add,class:(0,r.C_)(["icon",(0,s.SU)(f)?"cursor-pointer":"cursor-not-allowed"]),onClick:(0,s.SU)(v)},null,8,["text","class","onClick"]))])])),_:1},8,["content"]),(0,i.Wm)(a,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(c["default"]),{icon:"chat-2-line",text:(0,s.SU)(l).replies,class:"icon"},null,8,["text"])])),_:1}),(0,i.Wm)(a,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:I},{default:(0,i.w5)((()=>[(0,i.Wm)(u)])),_:1})])),_:1})])}}};function h(t){t.__source="src/views/topic/components/actions.vue"}var m=a(83744);"function"===typeof h&&h(l);const f=(0,m.Z)(l,[["__scopeId","data-v-586c818c"]]);var g=f}}]);