/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-06 12:25:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5556],{87693:function(e,t,a){a.d(t,{u:function(){return l},x:function(){return s}});var n=a(25342),o=a(80129),i=a.n(o);let c,r;function s(e,t){return new Promise(((a,n)=>{c=window.open(`${e}?${i().stringify(t)}`),r=setInterval((()=>{if(c&&c.closed){clearInterval(r);const e=JSON.parse(localStorage.getItem("socialData")||"{}");localStorage.removeItem("socialData"),e?a(e):n(e)}}),200)}))}function l(){let e=n.ZP.currentRoute.value.query;"{}"===JSON.stringify(e)&&(e=i().parse(document.location.search.slice(1))),localStorage.setItem("socialData",JSON.stringify(e))}},25556:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(15659),o=(a(3241),a(10444),a(66252)),i=a(3577);const c={class:"social-container"},r={key:0};function s(e,t,a,s,l,u){const f=n.ElButton;return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(f,{type:"primary",onClick:e.handleSocialLogin},{default:(0,o.w5)((()=>[(0,o.Uk)(" 点击进行Github登录 ")])),_:1},8,["onClick"]),e.data?((0,o.wg)(),(0,o.iD)("p",r,(0,i.zw)(e.data),1)):(0,o.kq)("",!0)])}var l=a(15790),u=a(87693),f=a(2262),d=(0,o.aZ)({name:"Social",setup(){const e=(0,o.f3)("$baseLoading"),t=(0,o.f3)("$baseMessage"),a=(0,l.L)(),n=e=>a.socialLogin(e),i=(0,f.iH)(),c=()=>{const a=e();(0,u.x)("https://github.com/login/oauth/authorize",{client_id:"e104bdc488d009840c4f"}).then((async e=>{i.value=e,await n(e)})).catch((()=>{t("第三方登录失败，未返回令牌","error","vab-hey-message-error")})).finally((()=>{a.close()}))};return{data:i,handleSocialLogin:c}}});function g(e){e.__source="src/views/other/social/index.vue"}var h=a(83744);"function"===typeof g&&g(d);const p=(0,h.Z)(d,[["render",s]]);var v=p}}]);