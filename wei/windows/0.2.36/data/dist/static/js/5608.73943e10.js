/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 13:10:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5608],{53580:function(e,t,o){o.d(t,{BB:function(){return s},BN:function(){return u},N7:function(){return v},NY:function(){return d},PM:function(){return w},Wx:function(){return l},Xq:function(){return g},Z0:function(){return m},iw:function(){return i},kA:function(){return p},l0:function(){return f},mE:function(){return h},wR:function(){return c},xS:function(){return b},yX:function(){return n},yo:function(){return y}});var a=o(92325),r=o(11555);function n(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:e})}function i(e){const t={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},o={...t[e]};return o}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:e})}function u(e){return(0,a.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:e})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:e})}async function d(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:t,tid:e.tid,message:e.message}})}async function p(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:t,...e}})}async function m(e){const{body:{hash:t}}=await(0,r.Gv)();return e.formhash=t,(0,a.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:e})}async function f(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function g(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function w(e){return(0,a.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:e})}async function h(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:e,hash:t}})}async function y(e){const{body:{hash:t}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${e.rid}`,formhash:t,...e}})}async function b(e){const t={...e};t.tags=t.tags.join(",");const{body:{hash:o}}=await(0,r.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:o,...t}})}async function v(e){return(0,a.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:e})}},63877:function(e,t,o){o.d(t,{Nb:function(){return n},jQ:function(){return a},jl:function(){return r}});const a={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},r={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},n={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},15608:function(e,t,o){o.r(t),o.d(t,{default:function(){return F}});var a=o(73481),r=(o(3241),o(62029),o(20129)),n=(o(69840),o(15659)),s=(o(10444),o(57534)),i=(o(92471),o(57018)),l=(o(74367),o(6589),o(73632)),u=(o(74965),o(22040)),c=(o(99426),o(86398)),d=(o(69448),o(27750)),p=o(57122),m=(o(69540),o(10661)),f=(o(35095),o(57658),o(66252)),g=o(2262),w=o(3577),h=o(49963),y=o(53580),b=o(63877),v=o(51474),k=o(22201);const _={class:"share-form-container"},x={class:"flex justify-end"},S={class:"lora-draw-card-body"},U={class:"lora-draw-image-group"},Z={class:"cover-text"};var j={__name:"shareform",setup(e,{expose:t}){const o=(0,k.tv)(),j=(0,f.f3)("$baseMessage"),q=(0,g.iH)(null),W=(0,g.qj)({form:{images:[],subject:"",tags:[]},dialogFormVisible:!1,tagOptions:[],rules:{...b.Nb},formRef:null,postLoading:!1}),{dialogFormVisible:C,form:F,tagOptions:V,rules:R,formRef:D,postLoading:G}=(0,g.BK)(W);(0,f.wF)((()=>{N()}));const B=(0,f.Fl)((()=>W.form.images.length));let I=null;function L(){I=v.ZP.create(q.value.$el,{animation:300,dragClass:"sortable-drag",onChange:function({target:e,item:t,newIndex:o}){0===o?(document.querySelectorAll(".cover-text").forEach((e=>{e.style.display="none"})),t.querySelector(".cover-text")&&(t.querySelector(".cover-text").style.display="block")):(document.querySelectorAll(".cover-text")[0]&&(document.querySelectorAll(".cover-text")[0].style.display="block"),t.querySelector(".cover-text")&&(t.querySelector(".cover-text").style.display="none"))},onEnd({newIndex:e,oldIndex:t}){const o=W.form.images;[o[e],o[t]]=[o[t],o[e]]}})}async function N(){const{body:e}=await(0,y.yX)();W.tagOptions=e.map((e=>({name:e,checked:!1})))}function O(e){const t=W.form.tags.findIndex((t=>t===e.name));t>=0||(e.checked=!0,W.form.tags.push(e.name))}async function A(e){const t=W.form.tags.findIndex((t=>t===e));if(t>=0){W.form.tags.splice(t,1);const o=W.tagOptions.find((t=>t.name===e));o&&(o.checked=!1)}}async function E(e){W.dialogFormVisible=!0,W.form.images=e,(0,f.Y3)((()=>{L()}))}async function H(){W["formRef"].validate((e=>{e&&K()}))}async function K(){W.postLoading=!0;try{const{body:{data:e}}=await(0,y.xS)(W.form),{body:{tid:t}}=await(0,y.N7)(e);j("发帖成功","success","vab-hey-message-success"),W.postLoading=!1,o.push(`/topic/${t}`)}catch(e){}finally{W.postLoading=!1}}function Y(e){W.form.images.splice(e,1)}function $(){W.form.image=[],W.form.subject="",W.form.tags=[],W.tagOptions.map((e=>e.checked=!1)),I&&I.destroy()}return t({showDialog:E}),(e,t)=>{const o=(0,f.up)("vab-icon"),y=m.Q0,b=p.F8,v=d.Z,k=c.gi,j=u.Dv,I=l.dq,L=r.nH,N=i.EZ,E=s.Ks,K=n.ElButton,z=r.ly,P=a.d0;return(0,f.wg)(),(0,f.iD)("div",_,[(0,f.Wm)(P,{modelValue:(0,g.SU)(C),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,g.dq)(C)?C.value=e:null),title:"分享作品",onClose:$},{default:(0,f.w5)((()=>[(0,f._)("div",x,[(0,f.Wm)(y,{content:"可拖动图片改变顺序",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(o,{icon:"question-line"})])),_:1})]),(0,f.Wm)(I,{ref_key:"imagesBoxRef",ref:q,gutter:16,span:"24",justify:"center"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(F).images,((e,t)=>((0,f.wg)(),(0,f.j4)(j,{key:e,lg:4,md:4,sm:4,xl:3,xs:12},{default:(0,f.w5)((()=>[(0,f.Wm)(v,{"body-style":{padding:"0px"},shadow:"hover",class:"image-card"},{default:(0,f.w5)((()=>[(0,f._)("div",S,[(0,f._)("div",U,[(0,f._)("div",{class:(0,w.C_)(["lora-draw-image",{"cursor-pointer":(0,g.SU)(B)>1}])},[(0,f.Wm)(b,{src:e},null,8,["src"]),(0,g.SU)(B)>1?((0,f.wg)(),(0,f.j4)(o,{key:0,icon:"close-circle-line",style:{color:"var(--el-color-danger)"},class:"action",onClick:e=>Y(t)},null,8,["onClick"])):(0,f.kq)("",!0)],2)])])])),_:2},1024),(0,f.wy)((0,f._)("div",Z,[(0,f.Wm)(k,{type:"primary"},{default:(0,f.w5)((()=>[(0,f.Uk)("封面"+(0,w.zw)((0,g.SU)(W).hiddenCoverText),1)])),_:1})],512),[[h.F8,0===t]])])),_:2},1024)))),128))])),_:1},512),(0,f.Wm)(z,{ref_key:"formRef",ref:D,model:(0,g.SU)(F),rules:(0,g.SU)(R),"label-width":"100px"},{default:(0,f.w5)((()=>[(0,f.Wm)(L,{prop:"images"}),(0,f.Wm)(L,{label:"标题",prop:"subject"},{default:(0,f.w5)((()=>[(0,f.Wm)(N,{modelValue:(0,g.SU)(F).subject,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,g.SU)(F).subject=e),placeholder:"请发挥您的创意，大笔挥上贴近您作品的创意标题"},null,8,["modelValue"])])),_:1}),(0,f.Wm)(L,{label:"使用标签",prop:"tags"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(F).tags,(e=>((0,f.wg)(),(0,f.j4)(E,{key:e,closable:"","disable-transitions":!1,style:{"margin-right":"10px","margin-bottom":"10px","margin-left":"0"},onClose:t=>A(e)},{default:(0,f.w5)((()=>[(0,f.Uk)((0,w.zw)(e),1)])),_:2},1032,["onClose"])))),128))])),_:1}),(0,f.Wm)(L,{label:"可选标签"},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,g.SU)(V),(e=>((0,f.wg)(),(0,f.j4)(E,{key:e.name,type:e.checked?"info":"","disable-transitions":!1,style:{"margin-right":"10px","margin-bottom":"10px","margin-left":"0"},class:(0,w.C_)({"cursor-pointer":!e.checked}),onClick:t=>O(e)},{default:(0,f.w5)((()=>[(0,f.Uk)((0,w.zw)(e.name),1)])),_:2},1032,["type","class","onClick"])))),128))])),_:1}),(0,f.Wm)(L,{label:""},{default:(0,f.w5)((()=>[(0,f.Wm)(K,{loading:(0,g.SU)(G),type:"primary",onClick:H},{default:(0,f.w5)((()=>[(0,f.Uk)(" 发布，欣赏下我的杰作吧 ")])),_:1},8,["loading"]),(0,f.Wm)(K,{onClick:t[1]||(t[1]=e=>C.value=!1)},{default:(0,f.w5)((()=>[(0,f.Uk)(" 先不分享，缓缓 ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function q(e){e.__source="src/views/stablediffusion/components/shareform.vue"}var W=o(83744);"function"===typeof q&&q(j);const C=(0,W.Z)(j,[["__scopeId","data-v-6cc64ca8"]]);var F=C}}]);