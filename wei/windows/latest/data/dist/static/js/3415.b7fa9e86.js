/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 14:56:29
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3415],{31794:function(t,e,a){function n(t){return new Promise(((e,a)=>{const n=new FileReader;n.readAsDataURL(t),n.onload=function(){if(2==n.readyState){const t=new Image;t.src=n.result,t.onload=function(){const t={width:this.width,height:this.height,src:this.src};e(t)}}else a()}}))}function o(t){return t.replace(/data:.+?;base64,/,"")}a.d(e,{I:function(){return n},x:function(){return o}})},53415:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(73481),o=(a(3241),a(62029),a(15659)),i=(a(10444),a(66252)),s=a(2262),l=a(11555),c=a(31794),r=a(91790),u=a(61785),d=a.n(u);const f={class:"dialog"},p={class:"wrap"},w={class:"dialog-footer"};var h={__name:"index",emits:["done"],setup(t,{expose:e,emit:a}){const u=(0,s.iH)(null),h=(0,s.iH)(!1),v=(0,s.iH)(!1),g=(0,s.iH)("");function m(t){g.value=t,h.value=!0}async function _(){v.value=!0;const{canvas:t}=u.value.getResult(),e=t.toDataURL(),a=await d()(t.toDataURL(),120,120),n=await d()(t.toDataURL(),48,48);U(e,a,n)}async function U(t,e,n){const o={avatar1:(0,c.x)(t),avatar2:(0,c.x)(e),avatar3:(0,c.x)(n)};try{await(0,l.gg)(o),h.value=!1,a("done")}catch(i){console.log(i)}v.value=!1}return e({showDialog:m}),(t,e)=>{const a=o.ElButton,l=n.d0;return(0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(l,{modelValue:(0,s.SU)(h),"onUpdate:modelValue":e[1]||(e[1]=t=>(0,s.dq)(h)?h.value=t:null),title:"上传头像","show-close":!1,draggable:"",width:"420"},{footer:(0,i.w5)((()=>[(0,i._)("span",w,[(0,i.Wm)(a,{onClick:e[0]||(e[0]=t=>h.value=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)("取消")])),_:1}),(0,i.Wm)(a,{type:"primary",loading:(0,s.SU)(v),onClick:_},{default:(0,i.w5)((()=>[(0,i.Uk)(" 下一步 ")])),_:1},8,["loading"])])])),default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i.Wm)((0,s.SU)(r.fl),{ref_key:"cropperRef",ref:u,src:(0,s.SU)(g),"stencil-props":{aspectRatio:1},"image-restriction":"stencil",canvas:{width:200,height:200}},null,8,["src"])])])),_:1},8,["modelValue"])])}}};function v(t){t.__source="src/components/CropperDialog/index.vue"}"function"===typeof v&&v(h);const g=h;var m=g}}]);