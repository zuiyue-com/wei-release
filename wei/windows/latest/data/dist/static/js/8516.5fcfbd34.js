/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8516],{28516:function(n,e,i){i.r(e),i.d(e,{default:function(){return g}});var r=i(77669),c=(i(3241),i(95774),i(2262)),o=i(66252),a=i(3577),t=i(20235),s=i(11555);const l={key:0,class:"box"},d=["src"],u={key:1};var w={__name:"weixin_qrcode",props:{redirect:{type:String,default:""},action:{type:String,default:"login"}},emits:["weixin"],setup(n,{emit:e}){const i=n,w=(0,c.qj)({qrcodeUrl:"",wxnickname:"",headimgurl:""}),{qrcodeUrl:p,wxnickname:m,headimgurl:f}=(0,c.BK)(w);async function g(){const{body:{qrcode:n}}=await(0,s.pH)((0,t.a9)(`${i.redirect}`));w.qrcodeUrl=n}async function _(){const{body:{qrcode:n,wxnickname:r,headimgurl:c}}=await(0,s.PE)((0,t.a9)(`${i.redirect}`));n?w.qrcodeUrl=n:e("weixin",r,c)}return(0,o.bv)((()=>{"login"==i.action?g():_()})),(n,e)=>{const i=r.vs;return(0,c.SU)(p)?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("iframe",{src:(0,c.SU)(p),frameborder:"0",height:"300",width:"300",sandbox:"allow-scripts allow-top-navigation allow-same-origin"},null,8,d)])):((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(i,{size:50,src:(0,c.SU)(f)},null,8,["src"]),(0,o._)("span",null,(0,a.zw)((0,c.SU)(m)),1)]))}}};function p(n){n.__source="src/components/LoginDialog/weixin_qrcode.vue"}var m=i(83744);"function"===typeof p&&p(w);const f=(0,m.Z)(w,[["__scopeId","data-v-b4bc4680"]]);var g=f}}]);