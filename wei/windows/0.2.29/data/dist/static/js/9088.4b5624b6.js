/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9088],{95244:function(t,e,a){a.d(e,{Ix:function(){return r},R1:function(){return o},YU:function(){return c},_5:function(){return d},p$:function(){return i},rt:function(){return u},ss:function(){return s}});var n=a(52806);function o(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:t})}function r(t,e){const a=new FormData;return a.append("Filedata",t.file),(0,n.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...e})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:t})}function u(t={}){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:t}})}function c(t,e){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:t,postid:e}})}},24025:function(t,e,a){a.d(e,{BB:function(){return r},BN:function(){return d},N7:function(){return b},NY:function(){return p},PM:function(){return g},Wx:function(){return u},Xq:function(){return f},Z0:function(){return l},iw:function(){return s},kA:function(){return h},l0:function(){return m},mE:function(){return w},wR:function(){return c},xS:function(){return v},yX:function(){return i},yo:function(){return y}});var n=a(52806),o=a(12688);function i(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function r(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function s(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function c(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function h(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function g(t){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function v(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function b(t){return(0,n.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},5649:function(t,e,a){a.d(e,{o:function(){return c}});a(57658);var n=a(24025),o=a(81095),i=a(30582),r=a(17052),s=a(95244),u=a(47720);const d=(0,i.L)(),c=(0,u.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageId:0,imageDetail:{},imageLog:{}}),getters:{canAction(){return d.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},hasNoMoreData(){return(0,r.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:o}}=await(0,n.BN)(this.queryForm),i=t;this.detail=i[0]??{},this.images=this.formatImages(),this.comments=i.slice(1),this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(o),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0,this.imageId=this.images[0]?this.images[0].id:0,this.loadImageDetail()},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:o}}=await(0,n.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,n.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,n.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,n.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,n.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++},async loadImageDetail(){const{body:{detail:t,log:e}}=await(0,s.YU)(this.imageId,this.getTid);this.imageDetail=t,this.imageLog=e}}})},17052:function(t,e,a){a.d(e,{D8:function(){return r},Gc:function(){return i},TD:function(){return n},Vj:function(){return o}});a(57658);function n(t,e){if(0===arguments.length)return null;const a=e||"{y}-{m}-{d} {h}:{i}:{s}";let n;"object"===typeof t?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));const o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{([ymdhisa])+}/g,((t,e)=>{let a=o[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a=`0${a}`),a||0)}))}function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function i(t,e,a){const n=Math.ceil(a/e);return t>=n}function r(t=0){document.getElementById("app").scrollTo({top:t,left:0,behavior:"smooth"})}},58504:function(t,e,a){a.d(e,{x:function(){return r}});var n=a(19635),o=a(96486),i=a.n(o);function r(t){const e=i().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,n.gx)(e.authorid),e}},79088:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var n=a(57534),o=(a(3241),a(92471),a(15659)),i=(a(10444),a(77669)),r=(a(95774),a(66252)),s=a(2262),u=a(3577),d=a(58504),c=a(5649),p=a(30582),h=a(47720);const l={key:0,class:"item"},m={class:"row"},f={class:"name"},g={class:"author"},w=["innerHTML"],y={key:0},v={class:"content"},b={class:"tags-box"};var I={__name:"topic",setup(t){const e=(0,c.o)(),a=(0,p.L)(),{canAction:I,getTopicUserId:_,getTopicTags:k}=(0,h.Jk)(e),T=(0,r.Fl)((()=>(0,d.x)(e.detail))),Z=(0,r.Fl)((()=>parseInt(e.extraInfo.follow_record)>0));async function x(){await a.handleAddFollowUser(_.value),e.extraInfo.follow_record=1}async function S(){await a.handleDelFollowUser(_.value),e.extraInfo.follow_record=0}return(t,e)=>{const a=i.vs,d=(0,r.up)("router-link"),c=(0,r.up)("vab-icon"),p=o.ElButton,h=n.Ks;return(0,s.SU)(T)?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",m,[(0,r.Wm)(d,{to:(0,s.SU)(T).author_route},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{src:(0,s.SU)(T).avatar},null,8,["src"])])),_:1},8,["to"]),(0,r._)("div",f,[(0,r.Wm)(d,{to:(0,s.SU)(T).author_route},{default:(0,r.w5)((()=>[(0,r._)("div",g,(0,u.zw)((0,s.SU)(T).author),1)])),_:1},8,["to"]),(0,r._)("div",{innerHTML:(0,s.SU)(T).dateline},null,8,w)]),(0,s.SU)(I)?((0,r.wg)(),(0,r.iD)("div",y,[(0,s.SU)(Z)?((0,r.wg)(),(0,r.j4)(p,{key:1,round:"",type:"warning",size:"small",onClick:S},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:"group-line"}),(0,r.Uk)(" 取消关注 ")])),_:1})):((0,r.wg)(),(0,r.j4)(p,{key:0,round:"",type:"primary",size:"small",onClick:x},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:"group-line"}),(0,r.Uk)(" 关注 ")])),_:1}))])):(0,r.kq)("",!0)]),(0,r._)("div",v,(0,u.zw)((0,s.SU)(T).subject),1),(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(k),(t=>((0,r.wg)(),(0,r.j4)(d,{key:t.id,to:{path:"/index",query:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(t.name),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])])):(0,r.kq)("",!0)}}};function _(t){t.__source="src/views/topic/components/topic.vue"}var k=a(83744);"function"===typeof _&&_(I);const T=(0,k.Z)(I,[["__scopeId","data-v-56191dbb"]]);var Z=T}}]);