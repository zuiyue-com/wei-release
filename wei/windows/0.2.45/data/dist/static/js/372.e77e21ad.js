/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-26 19:14:22
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[372],{93457:function(t,e,a){a.d(e,{Ix:function(){return n},Pc:function(){return m},R1:function(){return r},Wl:function(){return p},YU:function(){return c},_5:function(){return d},p$:function(){return s},rt:function(){return u},ss:function(){return i}});var o=a(92325);function r(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function s(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function n(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,o.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function i(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function u(t={}){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function d(t){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function c(t,e){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}function m(){return(0,o.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,o.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},53580:function(t,e,a){a.d(e,{BB:function(){return n},BN:function(){return d},N7:function(){return v},NY:function(){return m},PM:function(){return g},Wx:function(){return u},Xq:function(){return f},Z0:function(){return h},iw:function(){return i},kA:function(){return p},l0:function(){return l},mE:function(){return w},wR:function(){return c},xS:function(){return b},yX:function(){return s},yo:function(){return y}});var o=a(92325),r=a(11555);function s(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function n(t){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function i(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function u(t){const e={...t,filter_form_id:3};return(0,o.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function d(t){return(0,o.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function c(t){const e={...t,fid:3};return(0,o.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function m(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function h(t){const{body:{hash:e}}=await(0,r.Gv)();return t.formhash=e,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function l(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){const e={...t,thread_forum:"sd"};return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function w(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function b(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,r.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function v(t){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},34339:function(t,e,a){a.d(e,{o:function(){return c}});a(57658);var o=a(53580),r=a(81095),s=a(15790),n=a(26010),i=a(93457),u=a(47720);const d=(0,s.L)(),c=(0,u.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageIndex:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return d.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},getImageId(){return this.imageId},hasNoMoreData(){return(0,n.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(t){const{body:{list:e,forum_thread:a,page_perpage:r,page_allcount:s}}=await(0,o.BN)(this.queryForm),n=e;this.detail=n[0]??{},this.images=this.formatImages(),this.comments=n.slice(1),this.extraInfo=a,this.pagination.pageSize=parseInt(r),this.pagination.total=parseInt(s),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0;const i=this.images.findIndex((e=>e.id==t));i>=0?(this.imageIndex=parseInt(i),this.imageId=parseInt(t)):(this.imageIndex=0,this.imageId=this.images[0]?this.images[0].id:0),this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:r}}=await(0,o.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(r)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,o.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,o.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,r.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):r.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,o.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,r.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,o.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,i.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},26010:function(t,e,a){a.d(e,{Gc:function(){return r},Vj:function(){return o},wV:function(){return s},xV:function(){return i}});a(57658);function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let o=0;o<t;o++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function r(t,e,a){const o=Math.ceil(a/e);return t>=o}function s(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function n(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function i(t=0){s(t),n(t)}},63877:function(t,e,a){a.d(e,{Nb:function(){return s},jQ:function(){return o},jl:function(){return r}});const o={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},r={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},s={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},30372:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var o=a(20129),r=(a(3241),a(69840),a(15659)),s=(a(10444),a(6589),a(57018)),n=(a(74367),a(66252)),i=a(2262),u=a(49963),d=a(63877),c=a(53580),m=a(34339),p=a(22201);const h={class:"form"};var l={__name:"form",setup(t,{expose:e}){const a=(0,n.f3)("$baseMessage"),l=(0,m.o)(),f=(0,p.yj)(),g=(0,i.qj)({queryForm:{tid:f.params.id,pid:0,message:""},showTextarea:!1,rules:{...d.jQ},topicFormRef:null,inputCommentRef:null}),{queryForm:w,topicFormRef:y,inputCommentRef:b}=(0,i.BK)(g);function v(){g.showTextarea=!0,I()}function I(){g["topicFormRef"].clearValidate(),(0,n.Y3)((()=>{b.value.focus()}))}async function F(){const t=/@\w+ /g;t.test(g.queryForm.message)?await(0,c.kA)(g.queryForm):await(0,c.NY)(g.queryForm),g.queryForm.message="",l.loadAddedTopic(),a("回复成功","success","vab-hey-message-success")}async function _(){g["topicFormRef"].validate((t=>{t&&F()}))}function x(t,e){g.showTextarea=!0,g.queryForm.pid=t,g.queryForm.message+=`@${e} `,I()}return e({bindReplyAuthor:x}),(t,e)=>{const a=s.EZ,d=o.nH,c=r.ElButton,m=o.ly;return(0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(m,{ref_key:"topicFormRef",ref:y,model:(0,i.SU)(w),rules:(0,i.SU)(g).rules},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(d,{prop:"message"},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{ref_key:"inputCommentRef",ref:b,modelValue:(0,i.SU)(w).message,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,i.SU)(w).message=t),placeholder:"在这里输入评论内容",type:"textarea",maxlength:"256",rows:3,"show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c,{type:"primary",class:"button",disabled:""===(0,i.SU)(w).message,onClick:_},{default:(0,n.w5)((()=>[(0,n.Uk)(" 评论 ")])),_:1},8,["disabled"])],512),[[u.F8,(0,i.SU)(g).showTextarea]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(a,{placeholder:"在这里输入评论内容",onFocus:v})],512),[[u.F8,!(0,i.SU)(g).showTextarea]])])),_:1},8,["model","rules"])])}}};function f(t){t.__source="src/views/topic/components/form.vue"}var g=a(83744);"function"===typeof f&&f(l);const w=(0,g.Z)(l,[["__scopeId","data-v-6579f080"]]);var y=w}}]);