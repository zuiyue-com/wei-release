/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 11:44:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8634],{93457:function(t,e,a){a.d(e,{Ix:function(){return s},Pc:function(){return d},R1:function(){return n},Wl:function(){return h},YU:function(){return p},_5:function(){return c},p$:function(){return i},rt:function(){return u},ss:function(){return r}});var o=a(92325);function n(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function s(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,o.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function r(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function u(t={}){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function p(t,e){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function d(){return(0,o.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function h(){return(0,o.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,a){a.d(e,{BB:function(){return s},BN:function(){return c},N7:function(){return I},NY:function(){return d},PM:function(){return g},Wx:function(){return u},Xq:function(){return f},Z0:function(){return m},iw:function(){return r},kA:function(){return h},l0:function(){return l},mE:function(){return w},wR:function(){return p},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var o=a(92325),n=a(11555);function i(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function r(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function u(t){const e={...t,filter_form_id:3};return(0,o.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function p(t){const e={...t,fid:3};return(0,o.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function d(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function h(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function m(t){const{body:{hash:e}}=await(0,n.Gv)();return t.formhash=e,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function l(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){const e={...t,thread_forum:"sd"};return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function w(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function I(t){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,a){a.d(e,{o:function(){return p}});a(57658);var o=a(53580),n=a(81095),i=a(15790),s=a(26010),r=a(93457),u=a(47720);const c=(0,i.L)(),p=(0,u.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return c.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,s.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:a,page_perpage:n,page_allcount:i}}=await(0,o.BN)(this.queryForm),s=e;this.detail=s[0]??{},this.images=this.formatImages(),this.comments=s.slice(1),this.extraInfo=a,this.pagination.pageSize=parseInt(n),this.pagination.total=parseInt(i),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const r=this.images.findIndex((e=>e.id==t));r>=0?(this.imageIndex=parseInt(r),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:n}}=await(0,o.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(n)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,o.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,o.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,n.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):n.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,o.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,n.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,o.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,r.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,a){a.d(e,{Gc:function(){return n},Vj:function(){return o},wV:function(){return i},xV:function(){return r}});a(57658);function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let o=0;o<t;o++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function n(t,e,a){const o=Math.ceil(a/e);return t>=o}function i(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function s(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function r(t=0){i(t),s(t)}},48634:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var o=a(69950),n=(a(3241),a(82123),a(19615),a(57658),a(66252)),i=a(2262),s=a(3577),r=a(65781),u=a(34339),c=a(47720);const p={class:"timeline-container"};var d=(0,n.aZ)({__name:"generate",setup(t){const e=(0,u.o)(),{imageDetail:a}=(0,c.Jk)(e),d=(0,n.Fl)((()=>{const t=a.value.override_settings&&a.value.override_settings.sd_model_checkpoint?a.value.override_settings.sd_model_checkpoint:"",e=[{content:"基础模型",timestamp:t,size:"large",type:"primary",icon:r.MoreFilled}];if(a.value.lora_styles&&a.value.lora_styles.length>0){const t=a.value.lora_styles.map((t=>t.name));e.push({content:"LoRA",timestamp:t.join(","),color:"#2f9bff"})}a.value.prompt_words&&e.push({content:"创意描述",timestamp:a.value.prompt_words,color:"#46a6ff"}),a.value.negative_prompt_words&&e.push({content:"排除词",timestamp:a.value.negative_prompt_words,type:"primary",hollow:!0,color:"#5db1ff"});const o=[{content:"采样算法(Sampler)",timestamp:a.value.sampler_index,color:"#74bcff"},{content:"迭代步数(Steps)",timestamp:`${a.value.num_samples}`,color:"#8cc8ff"},{content:"创意描述词相关性(CFG Scale)",timestamp:`${a.value.cfg_scale}`,color:"#a3d3ff"},{content:"随机种子(Seed)",timestamp:`${a.value.seed}`,color:"#badeff "},{content:"尺寸",timestamp:`${a.value.width}x${a.value.height}`,color:"#d1e9ff"},{content:"Clip Skip",timestamp:`${a.value.clip_skip}`,color:"#e8f4ff"}];return e.push(...o),e}));return(t,e)=>{const a=o._T,r=o.rJ;return(0,n.wg)(),(0,n.iD)("div",p,[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(d),((t,e)=>((0,n.wg)(),(0,n.j4)(a,{key:e,icon:t.icon,type:t.type,color:t.color,size:t.size,hollow:t.hollow,timestamp:t.timestamp},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(t.content),1)])),_:2},1032,["icon","type","color","size","hollow","timestamp"])))),128))])),_:1})])}}});function h(t){t.__source="src/views/topic/components/generate.vue"}var m=a(83744);"function"===typeof h&&h(d);const l=(0,m.Z)(d,[["__scopeId","data-v-e538816c"]]);var f=l}}]);