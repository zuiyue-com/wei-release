/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-25 17:57:10
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4424,9527],{93457:function(t,e,n){n.d(e,{Ix:function(){return s},Pc:function(){return l},R1:function(){return o},Wl:function(){return p},YU:function(){return d},_5:function(){return u},p$:function(){return i},rt:function(){return c},ss:function(){return r}});var a=n(92325);function o(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function s(t,e){const n=new FormData;return n.append("Filedata",t.file),(0,a.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:n,...e})}function r(t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function c(t={}){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function d(t,e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function l(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,n){n.d(e,{BB:function(){return s},BN:function(){return u},N7:function(){return I},NY:function(){return l},PM:function(){return g},Wx:function(){return c},Xq:function(){return f},Z0:function(){return h},iw:function(){return r},kA:function(){return p},l0:function(){return m},mE:function(){return w},wR:function(){return d},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var a=n(92325),o=n(11555);function i(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,a.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function r(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},n={...e[t]};return n}function c(t){const e={...t,filter_form_id:3};return(0,a.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function d(t){const e={...t,fid:3};return(0,a.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function h(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,a.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){const e={...t,thread_forum:"sd"};return(0,a.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:n}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:n,...e}})}async function I(t){return(0,a.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,n){n.d(e,{o:function(){return d}});n(57658);var a=n(53580),o=n(81095),i=n(15790),s=n(26010),r=n(93457),c=n(47720);const u=(0,i.L)(),d=(0,c.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return u.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,s.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:n,page_perpage:o,page_allcount:i}}=await(0,a.BN)(this.queryForm),s=e;this.detail=s[0]??{},this.images=this.formatImages(),this.comments=s.slice(1),this.extraInfo=n,this.pagination.pageSize=parseInt(o),this.pagination.total=parseInt(i),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const r=this.images.findIndex((e=>e.id==t));r>=0?(this.imageIndex=parseInt(r),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:n,page_allcount:o}}=await(0,a.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(n),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,a.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,a.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,a.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,a.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,r.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,n){n.d(e,{Gc:function(){return o},Vj:function(){return a},wV:function(){return i},xV:function(){return r}});n(57658);function a(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let n="";for(let a=0;a<t;a++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}function o(t,e,n){const a=Math.ceil(n/e);return t>=a}function i(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function s(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function r(t=0){i(t),s(t)}},49527:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var a=n(66252),o=n(3577),i=n(2262);const s={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(t){const e=t,n=(0,a.Fl)((()=>{const t={fontSize:e.size};return e.color&&(t.color=e.color),t}));return(e,r)=>{const c=(0,a.up)("vab-icon");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c,{icon:t.icon,style:(0,o.j5)((0,i.SU)(n)),class:"icon"},null,8,["icon","style"]),(0,a._)("span",{style:(0,o.j5)((0,i.SU)(n))},(0,o.zw)(t.text),5)])}}};function c(t){t.__source="src/components/IconText/index.vue"}var u=n(83744);"function"===typeof c&&c(r);const d=(0,u.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var l=d},64424:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(14181),o=(n(3241),n(33828),n(10661)),i=(n(35095),n(66252)),s=n(2262),r=n(3577),c=n(49527),u=n(34339),d=n(47720);const l={class:"info-box"};var p={__name:"actions",emits:["reply","report"],setup(t,{emit:e}){const n=(0,u.o)(),{extraInfo:p,favId:h,likeId:m,canAction:f,getPid:g}=(0,d.Jk)(n),{handleDelFavTopic:w,handleAddFavTopic:y,handleAddLikeTopic:v}=n;async function I(){e("report",g.value,p.value.fid)}return(t,e)=>{const n=o.Q0,u=(0,i.up)("Bell"),d=a.gn;return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(h)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"star-fill",text:(0,s.SU)(p).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(w)},null,8,["text","onClick"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"star-line",text:(0,s.SU)(p).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(y)},null,8,["text","onClick"]))])])),_:1}),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:(0,s.SU)(f)?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(m)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"heart-3-fill",text:(0,s.SU)(p).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"heart-3-line",text:(0,s.SU)(p).recommend_add,class:(0,r.C_)(["icon",(0,s.SU)(f)?"cursor-pointer":"cursor-not-allowed"]),onClick:(0,s.SU)(v)},null,8,["text","class","onClick"]))])])),_:1},8,["content"]),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(c["default"]),{icon:"chat-2-line",text:(0,s.SU)(p).replies,class:"icon"},null,8,["text"])])),_:1}),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:I},{default:(0,i.w5)((()=>[(0,i.Wm)(u)])),_:1})])),_:1})])}}};function h(t){t.__source="src/views/topic/components/actions.vue"}var m=n(83744);"function"===typeof h&&h(p);const f=(0,m.Z)(p,[["__scopeId","data-v-586c818c"]]);var g=f}}]);