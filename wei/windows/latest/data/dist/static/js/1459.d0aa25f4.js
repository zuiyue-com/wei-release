/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-04 16:59:46
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1459],{86457:function(e,n,l){l.r(n),l.d(n,{default:function(){return k}});var t=l(73632),a=(l(3241),l(74965),l(22040)),o=(l(99426),l(20129)),i=(l(69840),l(15659)),u=(l(10444),l(57534)),s=(l(92471),l(6589),l(86398)),r=(l(69448),l(57018)),m=(l(74367),l(66252)),f=l(3577),p=l(49963);const d=(0,m._)("div",{style:{"margin-bottom":"10px"}},"标签",-1);function c(e,n,l,c,w,b){const g=r.EZ,y=s.gi,V=o.nH,h=u.Ks,_=i.ElButton,k=o.ly,C=a.Dv,v=t.dq;return(0,m.wg)(),(0,m.j4)(v,null,{default:(0,m.w5)((()=>[(0,m.Wm)(C,{lg:12,md:16,sm:24,xl:12,xs:24},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{"label-width":"80px"},{default:(0,m.w5)((()=>[e.profile.canUpdate?((0,m.wg)(),(0,m.j4)(V,{key:0,label:"用户名"},{default:(0,m.w5)((()=>[(0,m.Wm)(g,{modelValue:e.form.newuname,"onUpdate:modelValue":n[0]||(n[0]=n=>e.form.newuname=n),placement:"用户名"},null,8,["modelValue"]),(0,m.Wm)(y,{type:"warning"},{default:(0,m.w5)((()=>[(0,m.Uk)("注意：用户名仅可以修改一次")])),_:1})])),_:1})):(0,m.kq)("",!0),(0,m.Wm)(V,{label:"个人简介"},{default:(0,m.w5)((()=>[(0,m.Wm)(g,{modelValue:e.form.bio,"onUpdate:modelValue":n[1]||(n[1]=n=>e.form.bio=n),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,m.Wm)(V,null,{label:(0,m.w5)((()=>[d])),default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(e.form.interest,(n=>((0,m.wg)(),(0,m.j4)(h,{key:n,closable:"","disable-transitions":!1,style:{"margin-right":"10px","margin-bottom":"10px","margin-left":"0"},onClose:l=>e.handleClose(n)},{default:(0,m.w5)((()=>[(0,m.Uk)((0,f.zw)(n),1)])),_:2},1032,["onClose"])))),128)),e.inputVisible?((0,m.wg)(),(0,m.j4)(g,{key:0,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=n=>e.inputValue=n),size:"small",style:{width:"100px","margin-bottom":"10px"},onBlur:e.handleInputConfirm,onKeyup:(0,p.D2)(e.handleInputConfirm,["enter"])},null,8,["modelValue","onBlur","onKeyup"])):((0,m.wg)(),(0,m.j4)(_,{key:1,size:"small",style:{"margin-bottom":"10px"},onClick:e.showInput},{default:(0,m.w5)((()=>[(0,m.Uk)(" 添加 ")])),_:1},8,["onClick"]))])),_:1}),(0,m.Wm)(V,null,{default:(0,m.w5)((()=>[(0,m.Wm)(_,{loading:e.loading,type:"primary",onClick:e.handleSaveProfile},{default:(0,m.w5)((()=>[(0,m.Uk)(" 保存 ")])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}l(57658);var w=l(11555),b=l(15790),g=l(2262),y=(0,m.aZ)({setup(){const e=(0,m.f3)("$baseMessage"),n=(0,b.L)(),l=(0,g.qj)({form:{newuname:"",bio:n.description,interest:[...n.tags]},profile:{username:"",canUpdate:!1},loading:!1,inputRef:null,inputVisible:!1,inputValue:""});(0,m.bv)((()=>{i()}));const t=e=>{l.form.interest.splice(l.form.interest.indexOf(e),1)},a=()=>{l.inputVisible=!0,(0,m.Y3)((()=>{l.inputRef.focus()}))},o=()=>{l.inputValue&&l.form.interest.push(l.inputValue),l.inputVisible=!1,l.inputValue=""};async function i(){const{body:{username:e,field1:n,interest:t,bio:a}}=await(0,w.Ai)();l.profile.username=e,l.profile.canUpdate=0===parseInt(n),l.form.bio=a,l.form.interest=[...t]}async function u(){l.loading=!0;try{const t={bio:l.form.bio,interest:l.form.interest};l.profile.canUpdate&&""!=l.form.newuname&&(t.newuname=l.form.newuname);await(0,w.JN)(t);n.getUserInfo(),i(),e("保存成功","success","vab-hey-message-success")}catch(t){}finally{l.loading=!1}}return{...(0,g.BK)(l),handleClose:t,showInput:a,handleInputConfirm:o,handleSaveProfile:u}}});function V(e){e.__source="src/views/setting/personalCenter/components/update_info_pane.vue"}var h=l(83744);"function"===typeof V&&V(y);const _=(0,h.Z)(y,[["render",c]]);var k=_}}]);