/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 12:36:58
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1917],{53580:function(e,t,r){r.d(t,{BB:function(){return n},BN:function(){return l},N7:function(){return v},NY:function(){return d},PM:function(){return w},Wx:function(){return i},Xq:function(){return h},Z0:function(){return m},iw:function(){return u},kA:function(){return c},l0:function(){return f},mE:function(){return g},wR:function(){return p},xS:function(){return b},yX:function(){return s},yo:function(){return y}});var o=r(92325),a=r(11555);function s(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function n(e){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:e})}function u(e){const t={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},r={...t[e]};return r}function i(e){return(0,o.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:e})}function l(e){return(0,o.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:e})}function p(e){return(0,o.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:e})}async function d(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:t,tid:e.tid,message:e.message}})}async function c(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:t,...e}})}async function m(e){const{body:{hash:t}}=await(0,a.Gv)();return e.formhash=t,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:e})}async function f(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function h(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function w(e){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function g(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:e,hash:t}})}async function y(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${e.rid}`,formhash:t,...e}})}async function b(e){const t={...e};t.tags=t.tags.join(",");const{body:{hash:r}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:r,...t}})}async function v(e){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:e})}},63877:function(e,t,r){r.d(t,{Nb:function(){return s},jQ:function(){return o},jl:function(){return a}});const o={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},a={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},s={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},1917:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var o=r(73481),a=(r(3241),r(62029),r(15659)),s=(r(10444),r(20129)),n=(r(69840),r(57018)),u=(r(74367),r(6589),r(47820)),i=(r(50986),r(61715),r(66252)),l=r(2262),p=r(53580),d=r(63877);const c={class:"dialog-footer"};var m={__name:"report",setup(e,{expose:t}){const r=(0,i.f3)("$baseMessage"),m=["垃圾广告","攻击骚扰","违法违规","色情低俗","不实信息","抄袭侵权","其它"],f={report_select:"",message:"",rid:0,fid:0},h=(0,l.qj)({queryForm:{...f},rules:{...d.jl},dialogVisible:!1,formRef:null}),{queryForm:w,rules:g,dialogVisible:y,formRef:b}=(0,l.BK)(h);function v(e,t){h.dialogVisible=!0,w.value.rid=e,w.value.fid=t}function _(){h["formRef"].validate((async e=>{if(e){const e=await(0,p.yo)(w.value);r(e.msg,"success","vab-hey-message-success"),h.queryForm={...f},h.dialogVisible=!1}}))}return t({showDialog:v}),(e,t)=>{const r=u.BT,p=u.km,d=s.nH,f=n.EZ,h=s.ly,v=a.ElButton,Z=o.d0;return(0,i.wg)(),(0,i.j4)(Z,{modelValue:(0,l.SU)(y),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,l.dq)(y)?y.value=e:null),title:"举报帖子",width:"30%"},{footer:(0,i.w5)((()=>[(0,i._)("span",c,[(0,i.Wm)(v,{onClick:t[2]||(t[2]=e=>y.value=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)("取消")])),_:1}),(0,i.Wm)(v,{type:"primary",onClick:_},{default:(0,i.w5)((()=>[(0,i.Uk)("确认")])),_:1})])])),default:(0,i.w5)((()=>[(0,i.Wm)(h,{ref_key:"formRef",ref:b,model:(0,l.SU)(w),rules:(0,l.SU)(g)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{prop:"report_select"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{modelValue:(0,l.SU)(w).report_select,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.SU)(w).report_select=e),placeholder:"举报类型"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(m,(e=>(0,i.Wm)(r,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(d,{prop:"message"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{modelValue:(0,l.SU)(w).message,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,l.SU)(w).message=e),rows:3,type:"textarea",placeholder:"举报内容"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function f(e){e.__source="src/views/topic/components/report.vue"}"function"===typeof f&&f(m);const h=m;var w=h}}]);