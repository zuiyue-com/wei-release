/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-30 20:00:04
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7348],{37348:function(e,t,u){u.r(t),u.d(t,{default:function(){return v}});var s=u(86398),n=(u(3241),u(69448),u(57658),u(66252)),a=u(2262),r=u(3577),i=u(15790),c=u(22201);const o={class:"wrap"},d={key:0},p={class:"link"},w={key:1};var l={__name:"wxoauth",setup(e){const{wxlogin:t}=(0,i.L)(),u=(0,c.yj)(),l=(0,c.tv)();function y(){u.query.redirect?l.push({path:u.query.redirect}):l.push({path:"/"})}async function f(){u.query.token&&await t(u.query.token),u.query.message?setTimeout(y,3e3):y()}return(0,n.bv)((()=>{f()})),(e,t)=>{const i=s.gi,c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,a.SU)(u).query.message?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(i,{type:"danger"},{default:(0,n.w5)((()=>[(0,n.Uk)(" 登录失败："+(0,r.zw)((0,a.SU)(u).query.message)+"，3秒后跳转到首页。 ",1)])),_:1}),(0,n._)("div",p,[(0,n.Wm)(c,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("返回首页")])),_:1})])])):((0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(i,{type:"success"},{default:(0,n.w5)((()=>[(0,n.Uk)("正在登录...")])),_:1})]))])}}};function y(e){e.__source="src/views/login/wxoauth.vue"}var f=u(83744);"function"===typeof y&&y(l);const k=(0,f.Z)(l,[["__scopeId","data-v-02e9c58a"]]);var v=k}}]);