/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3451],{93451:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var u=n(15659),a=(n(3241),n(10444),n(66252)),l=n(2262),s=n(3577);const i={key:0},d={key:1};var r={__name:"index",props:{text:{type:String,default:""}},setup(e,{expose:t}){const n=(0,l.qj)({disabled:!1,value:60}),r=(0,a.Fl)((()=>n.disabled));let o=null;function c(){o=null,n.value=60,n.disabled=!1}function p(){v(),n.disabled=!0,o=setInterval((()=>{n.value-=1,n.value<=0&&(clearInterval(o),c())}),1e3)}function v(){o&&clearInterval(o),c()}return t({isStart:r,startCount:p,stopCount:v}),(t,r)=>{const o=u.ElButton;return(0,a.wg)(),(0,a.j4)(o,{type:"primary",plain:"",disabled:(0,l.SU)(n).disabled},{default:(0,a.w5)((()=>[(0,l.SU)(n).disabled?((0,a.wg)(),(0,a.iD)("div",i,(0,s.zw)((0,l.SU)(n).value)+"s 重试",1)):((0,a.wg)(),(0,a.iD)("div",d,(0,s.zw)(e.text),1))])),_:1},8,["disabled"])}}};function o(e){e.__source="src/components/CountButton/index.vue"}"function"===typeof o&&o(r);const c=r;var p=c}}]);