/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9035],{89035:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var n=s(66252),o=s(3577);const a={class:"node-panel"},d=["onMousedown"],l={key:0,class:"shape"},r={class:"node-label"};function c(e,t,s,c,p,u){return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.nodeList,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.text,class:"node-item",onMousedown:s=>e.$_dragNode(t)},[(0,n._)("div",{class:(0,o.C_)(["node-item-icon",t.class])},["user"===t.type||"time"===t.type?((0,n.wg)(),(0,n.iD)("div",l)):(0,n.kq)("",!0)],2),(0,n._)("span",r,(0,o.zw)(t.text),1)],40,d)))),128))])}var p=(0,n.aZ)({name:"NodePanel",props:{lf:{type:Object,default:()=>{}}},data(){return{nodeList:[{text:"开始",type:"start",class:"node-start"},{text:"矩形",type:"rect",class:"node-rect"},{type:"user",text:"用户",class:"node-user"},{type:"push",text:"推送",class:"node-push"},{type:"download",text:"位置",class:"node-download"},{type:"end",text:"结束",class:"node-end"}]}},methods:{$_dragNode(e){this.$props.lf.dnd.startDrag({type:e.type,text:e.label})}}});function u(e){e.__source="src/views/other/workflow/components/lFComponents/NodePanel.vue"}var i=s(83744);"function"===typeof u&&u(p);const f=(0,i.Z)(p,[["render",c],["__scopeId","data-v-7234497f"]]);var w=f}}]);