/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-26 18:49:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7439,3415],{31794:function(a,e,t){function n(a){return new Promise(((e,t)=>{const n=new FileReader;n.readAsDataURL(a),n.onload=function(){if(2==n.readyState){const a=new Image;a.src=n.result,a.onload=function(){const a={width:this.width,height:this.height,src:this.src};e(a)}}else t()}}))}function o(a){return a.replace(/data:.+?;base64,/,"")}t.d(e,{I:function(){return n},x:function(){return o}})},53415:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(73481),o=(t(3241),t(62029),t(15659)),s=(t(10444),t(66252)),i=t(2262),l=t(11555),r=t(31794),c=t(91790),u=t(61785),d=t.n(u);const f={class:"dialog"},v={class:"wrap"},p={class:"dialog-footer"};var g={__name:"index",emits:["done"],setup(a,{expose:e,emit:t}){const u=(0,i.iH)(null),g=(0,i.iH)(!1),w=(0,i.iH)(!1),m=(0,i.iH)("");function h(a){m.value=a,g.value=!0}async function _(){w.value=!0;const{canvas:a}=u.value.getResult(),e=a.toDataURL(),t=await d()(a.toDataURL(),120,120),n=await d()(a.toDataURL(),48,48);U(e,t,n)}async function U(a,e,n){const o={avatar1:(0,r.x)(a),avatar2:(0,r.x)(e),avatar3:(0,r.x)(n)};try{await(0,l.gg)(o),g.value=!1,t("done")}catch(s){console.log(s)}w.value=!1}return e({showDialog:h}),(a,e)=>{const t=o.ElButton,l=n.d0;return(0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(l,{modelValue:(0,i.SU)(g),"onUpdate:modelValue":e[1]||(e[1]=a=>(0,i.dq)(g)?g.value=a:null),title:"上传头像","show-close":!1,draggable:"",width:"420"},{footer:(0,s.w5)((()=>[(0,s._)("span",p,[(0,s.Wm)(t,{onClick:e[0]||(e[0]=a=>g.value=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1}),(0,s.Wm)(t,{type:"primary",loading:(0,i.SU)(w),onClick:_},{default:(0,s.w5)((()=>[(0,s.Uk)(" 下一步 ")])),_:1},8,["loading"])])])),default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s.Wm)((0,i.SU)(c.fl),{ref_key:"cropperRef",ref:u,src:(0,i.SU)(m),"stencil-props":{aspectRatio:1},"image-restriction":"stencil",canvas:{width:200,height:200}},null,8,["src"])])])),_:1},8,["modelValue"])])}}};function w(a){a.__source="src/components/CropperDialog/index.vue"}"function"===typeof w&&w(g);const m=g;var h=m},47439:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(79329),o=(t(3241),t(68984),t(77669)),s=(t(95774),t(66252)),i=t(2262),l=t(53415),r=t(15790),c=t(31794),u=t(47720);const d={class:"avatar-wrap"},f={class:"avatar-box"},v={class:"mask-box"};var p={__name:"avatar",setup(a){const e=(0,r.L)(),{getAvatar:t}=(0,u.Jk)(e),{getUserInfo:p}=e,g=(0,i.iH)(null),w=(0,i.iH)(null);async function m(a){const{src:e}=await(0,c.I)(a.raw);g.value.showDialog(e),w.value.clearFiles()}return(a,e)=>{const r=o.vs,c=n.LW;return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",f,[(0,s.Wm)(r,{size:100,src:(0,i.SU)(t)},null,8,["src"]),(0,s._)("div",v,[(0,s.Wm)(c,{ref_key:"uploadRef",ref:w,accept:"image/png, image/jpeg",class:"upload",drag:"",limit:1,"on-change":m,"show-file-list":!1,"auto-upload":!1},null,512)])]),(0,s.Wm)((0,i.SU)(l["default"]),{ref_key:"cropperDialogRef",ref:g,onDone:(0,i.SU)(p)},null,8,["onDone"])])}}};function g(a){a.__source="src/views/stablediffusion/components/avatar.vue"}var w=t(83744);"function"===typeof g&&g(p);const m=(0,w.Z)(p,[["__scopeId","data-v-1a22122b"]]);var h=m}}]);