/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6522,3415],{31794:function(a,e,n){function t(a){return new Promise(((e,n)=>{const t=new FileReader;t.readAsDataURL(a),t.onload=function(){if(2==t.readyState){const a=new Image;a.src=t.result,a.onload=function(){const a={width:this.width,height:this.height,src:this.src};e(a)}}else n()}}))}function o(a){return a.replace(/data:.+?;base64,/,"")}n.d(e,{I:function(){return t},x:function(){return o}})},16522:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var t=n(79329),o=(n(3241),n(68984),n(77669)),l=(n(95774),n(66252)),s=n(2262),i=n(53415),r=n(15790),c=n(31794),u=n(47720);const d={class:"avatar-wrap"},f={class:"avatar-box"},p={class:"mask-box"};var v={__name:"index",setup(a){const e=(0,r.L)(),{getAvatar:n}=(0,u.Jk)(e),{getUserInfo:v}=e,g=(0,s.iH)(null),m=(0,s.iH)(null);async function w(a){const{src:e}=await(0,c.I)(a.raw);g.value.showDialog(e),m.value.clearFiles()}return(a,e)=>{const r=o.vs,c=t.LW;return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",f,[(0,l.Wm)(r,{size:100,src:(0,s.SU)(n)},null,8,["src"]),(0,l._)("div",p,[(0,l.Wm)(c,{ref_key:"uploadRef",ref:m,accept:"image/png, image/jpeg",class:"upload",drag:"",limit:1,"on-change":w,"show-file-list":!1,"auto-upload":!1},null,512)])]),(0,l.Wm)((0,s.SU)(i["default"]),{ref_key:"cropperDialogRef",ref:g,onDone:(0,s.SU)(v)},null,8,["onDone"])])}}};function g(a){a.__source="src/components/AvatarUpload/index.vue"}var m=n(83744);"function"===typeof g&&g(v);const w=(0,m.Z)(v,[["__scopeId","data-v-880721aa"]]);var h=w},53415:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var t=n(73481),o=(n(3241),n(62029),n(15659)),l=(n(10444),n(66252)),s=n(2262),i=n(11555),r=n(31794),c=n(91790),u=n(61785),d=n.n(u);const f={class:"dialog"},p={class:"wrap"},v={class:"dialog-footer"};var g={__name:"index",emits:["done"],setup(a,{expose:e,emit:n}){const u=(0,s.iH)(null),g=(0,s.iH)(!1),m=(0,s.iH)(!1),w=(0,s.iH)("");function h(a){w.value=a,g.value=!0}async function _(){m.value=!0;const{canvas:a}=u.value.getResult(),e=a.toDataURL(),n=await d()(a.toDataURL(),120,120),t=await d()(a.toDataURL(),48,48);U(e,n,t)}async function U(a,e,t){const o={avatar1:(0,r.x)(a),avatar2:(0,r.x)(e),avatar3:(0,r.x)(t)};try{await(0,i.gg)(o),g.value=!1,n("done")}catch(l){console.log(l)}finally{m.value=!1}}return e({showDialog:h}),(a,e)=>{const n=o.ElButton,i=t.d0;return(0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(i,{modelValue:(0,s.SU)(g),"onUpdate:modelValue":e[1]||(e[1]=a=>(0,s.dq)(g)?g.value=a:null),title:"上传头像","show-close":!1,draggable:"",width:"420"},{footer:(0,l.w5)((()=>[(0,l._)("span",v,[(0,l.Wm)(n,{onClick:e[0]||(e[0]=a=>g.value=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(n,{type:"primary",loading:(0,s.SU)(m),onClick:_},{default:(0,l.w5)((()=>[(0,l.Uk)(" 下一步 ")])),_:1},8,["loading"])])])),default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.Wm)((0,s.SU)(c.fl),{ref_key:"cropperRef",ref:u,src:(0,s.SU)(w),"stencil-props":{aspectRatio:1},"image-restriction":"stencil",canvas:{width:200,height:200}},null,8,["src"])])])),_:1},8,["modelValue"])])}}};function m(a){a.__source="src/components/CropperDialog/index.vue"}"function"===typeof m&&m(g);const w=g;var h=w}}]);