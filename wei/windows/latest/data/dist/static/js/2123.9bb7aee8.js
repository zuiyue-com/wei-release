/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 08:42:34
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2123],{93457:function(t,e,a){a.d(e,{Ix:function(){return s},Pc:function(){return h},R1:function(){return o},Wl:function(){return p},YU:function(){return c},_5:function(){return d},p$:function(){return i},rt:function(){return u},ss:function(){return r}});var n=a(92325);function o(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function s(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,n.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function r(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function u(t={}){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function c(t,e){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function h(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,n.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,a){a.d(e,{BB:function(){return s},BN:function(){return d},N7:function(){return I},NY:function(){return h},PM:function(){return g},Wx:function(){return u},Xq:function(){return f},Z0:function(){return l},iw:function(){return r},kA:function(){return p},l0:function(){return m},mE:function(){return w},wR:function(){return c},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var n=a(92325),o=a(11555);function i(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function r(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function c(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function h(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function I(t){return(0,n.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,a){a.d(e,{o:function(){return c}});a(57658);var n=a(53580),o=a(81095),i=a(15790),s=a(26010),r=a(93457),u=a(47720);const d=(0,i.L)(),c=(0,u.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return d.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,s.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:a,page_perpage:o,page_allcount:i}}=await(0,n.BN)(this.queryForm),s=e;this.detail=s[0]??{},this.images=this.formatImages(),this.comments=s.slice(1),this.extraInfo=a,this.pagination.pageSize=parseInt(o),this.pagination.total=parseInt(i),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const r=this.images.findIndex((e=>e.id==t));r>=0?(this.imageIndex=parseInt(r),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:o}}=await(0,n.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,n.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,n.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,n.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,n.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,r.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,a){a.d(e,{Gc:function(){return o},Vj:function(){return n},wV:function(){return i},xV:function(){return r}});a(57658);function n(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function o(t,e,a){const n=Math.ceil(a/e);return t>=n}function i(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function s(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function r(t=0){i(t),s(t)}},52308:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(27750),o=a(25917),i=(a(3241),a(27109),a(61684),a(57122)),s=(a(69540),a(66252)),r=a(2262),u=a(34339),d=a(47720);const c={class:"image-box"};var h={__name:"images",setup(t){const e=(0,u.o)(),{imageIndex:a,imageId:h,getTopicImages:p,getTopicImagesMaxHeight:l}=(0,d.Jk)(e),m=(0,s.Fl)((()=>p.value.length<=1?"never":"always"));async function f(t,a){h.value=p.value[t].id,e.loadImageDetail()}return(t,e)=>{const u=i.F8,d=o.B6,h=o.$J,g=n.Z;return(0,s.wg)(),(0,s.j4)(g,{shadow:"hover"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{height:(0,r.SU)(l)+"px",autoplay:!1,"initial-index":(0,r.SU)(a),arrow:(0,r.SU)(m),"indicator-position":(0,r.SU)(p).length>1?"":"none",onChange:f},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(p),(t=>((0,s.wg)(),(0,s.j4)(d,{key:t.id},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s.Wm)(u,{src:t.image},null,8,["src"])])])),_:2},1024)))),128))])),_:1},8,["height","initial-index","arrow","indicator-position"])])),_:1})}}};function p(t){t.__source="src/views/topic/components/images.vue"}var l=a(83744);"function"===typeof p&&p(h);const m=(0,l.Z)(h,[["__scopeId","data-v-f95dd8da"]]);var f=m},27750:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(30032),o=(a(3241),a(91154),a(97830)),i=(a(13768),a(66252)),s=a(2262),r=a(3577),u=a(22201),d=(0,i.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const a=(0,s.iH)(!0);return e=setTimeout((()=>{a.value=!1}),500),(0,u.iS)(((t,a,n)=>{clearInterval(e),n()})),(e,u)=>{const d=o.vk,c=n.Kf;return(0,i.wg)(),(0,i.j4)(c,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,i.Nv)({default:(0,i.w5)((()=>[t.skeleton?((0,i.wg)(),(0,i.j4)(d,{key:0,animated:"",loading:(0,s.SU)(a),rows:t.skeletonRows},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,i.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"header",{},(()=>[(0,i.Uk)((0,r.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(t){t.__source="library/components/VabCard/index.vue"}var h=a(83744);"function"===typeof c&&c(d);const p=(0,h.Z)(d,[["__scopeId","data-v-391150ea"]]);var l=p}}]);