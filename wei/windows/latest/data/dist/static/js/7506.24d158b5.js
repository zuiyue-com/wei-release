/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7506],{53580:function(t,e,r){r.d(e,{BB:function(){return a},BN:function(){return p},N7:function(){return v},NY:function(){return d},PM:function(){return w},Wx:function(){return i},Xq:function(){return h},Z0:function(){return m},iw:function(){return u},kA:function(){return l},l0:function(){return f},mE:function(){return g},wR:function(){return c},xS:function(){return b},yX:function(){return s},yo:function(){return y}});var o=r(92325),n=r(11555);function s(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function a(t){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function u(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},r={...e[t]};return r}function i(t){const e={...t,filter_form_id:3};return(0,o.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function p(t){return(0,o.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function c(t){const e={...t,fid:3};return(0,o.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function d(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function l(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function m(t){const{body:{hash:e}}=await(0,n.Gv)();return t.formhash=e,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function f(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function h(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function w(t){const e={...t,thread_forum:"sd"};return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function g(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function b(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:r}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:r,...e}})}async function v(t){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},63877:function(t,e,r){r.d(e,{Nb:function(){return s},jQ:function(){return o},jl:function(){return n}});const o={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},n={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},s={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},57506:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var o=r(20129),n=(r(3241),r(69840),r(15659)),s=(r(10444),r(6589),r(57018)),a=(r(74367),r(66252)),u=r(2262),i=r(49963),p=r(63877),c=r(53580);const d={class:"form"};var l={__name:"form",props:{tid:{type:String,default:"0"}},emits:["reload"],setup(t,{expose:e,emit:r}){const l=t,m=(0,a.f3)("$baseMessage"),f=(0,u.qj)({showTextarea:!1,rules:{...p.jQ},topicFormRef:null,inputCommentRef:null,loading:!1}),h=(0,u.qj)({tid:l.tid,pid:0,message:""});(0,a.YP)((()=>l.tid),(()=>{h.tid=l.tid}));const{topicFormRef:w,inputCommentRef:g}=(0,u.BK)(f);function y(){f.showTextarea=!0,b()}function b(){f["topicFormRef"].clearValidate(),(0,a.Y3)((()=>{g.value.focus()}))}async function v(){try{f.loading=!0;const t=/@\w+ /g;t.test(h.message)?await(0,c.kA)(h):await(0,c.NY)(h),h.message="",r("reload"),m("回复成功","success","vab-hey-message-success")}catch(t){console.log(t)}finally{f.loading=!1}}async function _(){f["topicFormRef"].validate((t=>{t&&v()}))}function Z(t,e){f.showTextarea=!0,h.pid=t,h.message+=`@${e} `,b()}return e({bindReplyAuthor:Z}),(t,e)=>{const r=s.EZ,p=o.nH,c=n.ElButton,l=o.ly;return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(l,{ref_key:"topicFormRef",ref:w,model:(0,u.SU)(h),rules:(0,u.SU)(f).rules},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(p,{prop:"message"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{ref_key:"inputCommentRef",ref:g,modelValue:(0,u.SU)(h).message,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,u.SU)(h).message=t),placeholder:"在这里输入评论内容",type:"textarea",maxlength:"256",rows:3,"show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(c,{type:"primary",class:"button",disabled:""===(0,u.SU)(h).message,loading:(0,u.SU)(f).loading,onClick:_},{default:(0,a.w5)((()=>[(0,a.Uk)(" 评论 ")])),_:1},8,["disabled","loading"])],512),[[i.F8,(0,u.SU)(f).showTextarea]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(r,{placeholder:"在这里输入评论内容",onFocus:y})],512),[[i.F8,!(0,u.SU)(f).showTextarea]])])),_:1},8,["model","rules"])])}}};function m(t){t.__source="src/components/Topic/form.vue"}var f=r(83744);"function"===typeof m&&m(l);const h=(0,f.Z)(l,[["__scopeId","data-v-75d0045b"]]);var w=h}}]);