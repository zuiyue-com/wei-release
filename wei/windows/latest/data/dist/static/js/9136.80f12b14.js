/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:10:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9136],{89136:function(t,e,o){o.r(e),o.d(e,{default:function(){return r}});var n=o(10661),i=(o(3241),o(35095),o(14181)),s=(o(33828),o(66252)),p=o(2262),u=o(49963),a={__name:"index",props:{text:{type:String,default:""},tipText:{type:String,default:"拷贝生成信息"}},setup(t){const e=t,o=(0,p.qj)({tooltipText:e.tipText,tooltipStatus:!1});async function a(){try{await navigator.clipboard.writeText(e.text),o.tooltipText="已复制！"}catch(t){o.tooltipText="复制失败"}}function c(){o.tooltipStatus=!0,o.tooltipText=e.tipText,setTimeout((()=>{o.tooltipStatus=!1}),200)}return(t,e)=>{const l=(0,s.up)("DocumentCopy"),r=i.gn,d=n.Q0;return(0,s.wg)(),(0,s.j4)(d,{class:"box-item",effect:"dark",content:(0,p.SU)(o).tooltipText,disabled:(0,p.SU)(o).tooltipStatus,placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{style:{color:"var(--el-color-success)"},class:"cursor-pointer",onClick:(0,u.iM)(a,["stop"]),onMouseleave:(0,u.iM)(c,["stop"])},{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1},8,["onClick","onMouseleave"])])),_:1},8,["content","disabled"])}}};function c(t){t.__source="src/components/ClipboardTips/index.vue"}"function"===typeof c&&c(a);const l=a;var r=l}}]);