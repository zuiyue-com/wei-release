/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-07 11:49:22
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5033,8516],{28516:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var i=r(77669),c=(r(3241),r(95774),r(2262)),t=r(66252),o=r(3577),a=r(20235),s=r(11555);const d={key:0,class:"box"},u=["src"],l={key:1};var w={__name:"weixin_qrcode",props:{redirect:{type:String,default:""},action:{type:String,default:"login"}},emits:["weixin"],setup(e,{emit:n}){const r=e,w=(0,c.qj)({qrcodeUrl:"",wxnickname:"",headimgurl:""}),{qrcodeUrl:f,wxnickname:p,headimgurl:m}=(0,c.BK)(w);async function v(){const{body:{qrcode:e}}=await(0,s.pH)((0,a.a9)(`${r.redirect}`));w.qrcodeUrl=e}async function _(){const{body:{qrcode:e,wxnickname:i,headimgurl:c}}=await(0,s.PE)((0,a.a9)(`${r.redirect}`));e?w.qrcodeUrl=e:n("weixin",i,c)}return(0,t.bv)((()=>{"login"==r.action?v():_()})),(e,n)=>{const r=i.vs;return(0,c.SU)(f)?((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("iframe",{src:(0,c.SU)(f),frameborder:"0",height:"300",width:"300",sandbox:"allow-scripts allow-top-navigation allow-same-origin"},null,8,u)])):((0,t.wg)(),(0,t.iD)("div",l,[(0,t.Wm)(r,{size:50,src:(0,c.SU)(m)},null,8,["src"]),(0,t._)("span",null,(0,o.zw)((0,c.SU)(p)),1)]))}}};function f(e){e.__source="src/components/LoginDialog/weixin_qrcode.vue"}var p=r(83744);"function"===typeof f&&f(w);const m=(0,p.Z)(w,[["__scopeId","data-v-b4bc4680"]]);var v=m},75033:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var i=r(66252),c=r(2262),t=r(28516),o=r(22201);const a={class:"qrcode"};var s={__name:"weixin",setup(e){const n=(0,o.yj)(),r=n.query.redirect??"",s=(0,c.qj)({redirect:`/wxoauth?redirect=${r}`,load:!1});return(e,n)=>((0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(t["default"],{redirect:(0,c.SU)(s).redirect},null,8,["redirect"])]))}};function d(e){e.__source="src/views/login/components/weixin.vue"}var u=r(83744);"function"===typeof d&&d(s);const l=(0,u.Z)(s,[["__scopeId","data-v-6c1f78c6"]]);var w=l}}]);