/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:10:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7387],{53580:function(t,e,o){o.d(e,{BB:function(){return s},BN:function(){return u},N7:function(){return k},NY:function(){return d},PM:function(){return w},Wx:function(){return l},Xq:function(){return g},Z0:function(){return m},iw:function(){return i},kA:function(){return p},l0:function(){return f},mE:function(){return h},wR:function(){return c},xS:function(){return b},yX:function(){return r},yo:function(){return y}});var n=o(92325),a=o(11555);function r(){return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function i(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},o={...e[t]};return o}function l(t){const e={...t,filter_form_id:3};return(0,n.Z)({url:"/wwwapi.php?to=postTag",method:"get",params:e})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=postView&extra=",method:"get",params:t})}function c(t){const e={...t,fid:3};return(0,n.Z)({url:"/wwwapi.php?to=postOfUser",method:"get",params:e})}async function d(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function m(t){const{body:{hash:e}}=await(0,a.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function f(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function g(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function w(t){const e={...t,thread_forum:"sd"};return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function h(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function b(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:o}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:o,...e}})}async function k(t){return(0,n.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},63877:function(t,e,o){o.d(e,{Nb:function(){return r},jQ:function(){return n},jl:function(){return a}});const n={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},a={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},r={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},57387:function(t,e,o){o.r(e),o.d(e,{default:function(){return D}});var n=o(73481),a=(o(3241),o(62029),o(20129)),r=(o(69840),o(15659)),s=(o(10444),o(57534)),i=(o(92471),o(57018)),l=(o(74367),o(6589),o(73632)),u=(o(74965),o(22040)),c=(o(99426),o(86398)),d=(o(69448),o(27750)),p=o(57122),m=(o(69540),o(10661)),f=(o(35095),o(57658),o(66252)),g=o(2262),w=o(3577),h=o(53580),y=o(63877),b=o(22201);const k={class:"share-form-container"},v={class:"flex justify-end"},_={class:"lora-draw-card-body"},x={class:"lora-draw-image-group"},j={key:0,class:"flex justify-center"},U={key:1,class:"flex justify-between"},C={key:2,class:"flex justify-between"};var W={__name:"shareform",setup(t,{expose:e}){const o=(0,b.tv)(),W=(0,f.f3)("$baseMessage"),Z=(0,g.iH)(null),S=(0,g.qj)({form:{images:[],subject:"",tags:[]},dialogFormVisible:!1,tagOptions:[],rules:{...y.Nb},formRef:null,postLoading:!1}),{dialogFormVisible:q,form:D,tagOptions:V,rules:F,formRef:R,postLoading:G}=(0,g.BK)(S);(0,f.wF)((()=>{L()}));const B=(0,f.Fl)((()=>S.form.images.length));async function L(){const{body:t}=await(0,h.yX)();S.tagOptions=t.map((t=>({name:t,checked:!1})))}function N(t){const e=S.form.tags.findIndex((e=>e===t.name));e>=0||(t.checked=!0,S.form.tags.push(t.name))}async function O(t){const e=S.form.tags.findIndex((e=>e===t));if(e>=0){S.form.tags.splice(e,1);const o=S.tagOptions.find((e=>e.name===t));o&&(o.checked=!1)}}async function H(t){S.dialogFormVisible=!0,S.form.images=t}async function K(){S["formRef"].validate((t=>{t&&Y()}))}async function Y(){S.postLoading=!0;try{const{body:{data:t}}=await(0,h.xS)(S.form),{body:{tid:e}}=await(0,h.N7)(t);W("发帖成功","success","vab-hey-message-success"),S.postLoading=!1,o.push(`/topic/${e}`)}catch(t){}finally{S.postLoading=!1}}function z(t){S.form.images.splice(t,1)}function E(){S.form.image=[],S.form.subject="",S.form.tags=[],S.tagOptions.map((t=>t.checked=!1))}function I(t,e){const o=S.form.images,n=t+e;n>B-1||n<0||([o[n],o[t]]=[o[t],o[n]])}return e({showDialog:H}),(t,e)=>{const o=(0,f.up)("vab-icon"),h=m.Q0,y=p.F8,b=d.Z,W=c.gi,L=u.Dv,H=l.dq,Y=a.nH,X=i.EZ,$=s.Ks,A=r.ElButton,M=a.ly,P=n.d0;return(0,f.wg)(),(0,f.iD)("div",k,[(0,f.Wm)(P,{modelValue:(0,g.SU)(q),"onUpdate:modelValue":e[2]||(e[2]=t=>(0,g.dq)(q)?q.value=t:null),title:"分享作品",onClose:E},{default:(0,f.w5)((()=>[(0,f._)("div",v,[(0,f.Wm)(h,{content:"可拖动图片改变顺序",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(o,{icon:"question-line"})])),_:1})]),(0,f.Wm)(H,{ref_key:"imagesBoxRef",ref:Z,gutter:16,span:"24",justify:"center"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(D).images,((t,e)=>((0,f.wg)(),(0,f.j4)(L,{key:t,lg:4,md:4,sm:4,xl:3,xs:12},{default:(0,f.w5)((()=>[(0,f.Wm)(b,{"body-style":{padding:"0px"},shadow:"hover",class:"image-card"},{default:(0,f.w5)((()=>[(0,f._)("div",_,[(0,f._)("div",x,[(0,f._)("div",{class:(0,w.C_)(["lora-draw-image",{"cursor-pointer":(0,g.SU)(B)>1}])},[(0,f.Wm)(y,{src:t},null,8,["src"]),(0,g.SU)(B)>1?((0,f.wg)(),(0,f.j4)(o,{key:0,icon:"close-circle-line",style:{color:"var(--el-color-danger)"},class:"action",onClick:t=>z(e)},null,8,["onClick"])):(0,f.kq)("",!0)],2)])])])),_:2},1024),0===e?((0,f.wg)(),(0,f.iD)("div",j,[(0,f.Wm)(W,{type:"primary"},{default:(0,f.w5)((()=>[(0,f.Uk)("封面"+(0,w.zw)((0,g.SU)(S).hiddenCoverText),1)])),_:1})])):e===(0,g.SU)(B)-1?((0,f.wg)(),(0,f.iD)("div",U,[(0,f.Wm)(o,{icon:"arrow-left-circle-line",class:"cursor-pointer",onClick:t=>I(e,-1)},null,8,["onClick"])])):((0,f.wg)(),(0,f.iD)("div",C,[(0,f.Wm)(o,{icon:"arrow-left-circle-line",class:"cursor-pointer",onClick:t=>I(e,-1)},null,8,["onClick"]),(0,f.Wm)(o,{icon:"arrow-right-circle-line",class:"cursor-pointer",onClick:t=>I(e,1)},null,8,["onClick"])]))])),_:2},1024)))),128))])),_:1},512),(0,f.Wm)(M,{ref_key:"formRef",ref:R,model:(0,g.SU)(D),rules:(0,g.SU)(F),"label-width":"100px"},{default:(0,f.w5)((()=>[(0,f.Wm)(Y,{prop:"images"}),(0,f.Wm)(Y,{label:"标题",prop:"subject"},{default:(0,f.w5)((()=>[(0,f.Wm)(X,{modelValue:(0,g.SU)(D).subject,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,g.SU)(D).subject=t),placeholder:"请发挥您的创意，大笔挥上贴近您作品的创意标题"},null,8,["modelValue"])])),_:1}),(0,f.Wm)(Y,{label:"使用标签",prop:"tags"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(D).tags,(t=>((0,f.wg)(),(0,f.j4)($,{key:t,closable:"","disable-transitions":!1,style:{"margin-right":"10px","margin-bottom":"10px","margin-left":"0"},onClose:e=>O(t)},{default:(0,f.w5)((()=>[(0,f.Uk)((0,w.zw)(t),1)])),_:2},1032,["onClose"])))),128))])),_:1}),(0,f.Wm)(Y,{label:"可选标签"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(V),(t=>((0,f.wg)(),(0,f.j4)($,{key:t.name,type:t.checked?"info":"","disable-transitions":!1,style:{"margin-right":"10px","margin-bottom":"10px","margin-left":"0"},class:(0,w.C_)({"cursor-pointer":!t.checked}),onClick:e=>N(t)},{default:(0,f.w5)((()=>[(0,f.Uk)((0,w.zw)(t.name),1)])),_:2},1032,["type","class","onClick"])))),128))])),_:1}),(0,f.Wm)(Y,{label:""},{default:(0,f.w5)((()=>[(0,f.Wm)(A,{loading:(0,g.SU)(G),type:"primary",onClick:K},{default:(0,f.w5)((()=>[(0,f.Uk)(" 发布，欣赏下我的杰作吧 ")])),_:1},8,["loading"]),(0,f.Wm)(A,{onClick:e[1]||(e[1]=t=>q.value=!1)},{default:(0,f.w5)((()=>[(0,f.Uk)(" 先不分享，缓缓 ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function Z(t){t.__source="src/views/stablediffusion/components/shareform.vue"}var S=o(83744);"function"===typeof Z&&Z(W);const q=(0,S.Z)(W,[["__scopeId","data-v-503050a4"]]);var D=q}}]);