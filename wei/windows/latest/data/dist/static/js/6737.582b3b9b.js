/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6737,9527],{49527:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(66252),l=n(3577),a=n(2262);const o={class:"box"};var c={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(e){const t=e,n=(0,i.Fl)((()=>{const e={fontSize:t.size};return t.color&&(e.color=t.color),e}));return(t,c)=>{const s=(0,i.up)("vab-icon");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(s,{icon:e.icon,style:(0,l.j5)((0,a.SU)(n)),class:"icon"},null,8,["icon","style"]),(0,i._)("span",{style:(0,l.j5)((0,a.SU)(n))},(0,l.zw)(e.text),5)])}}};function s(e){e.__source="src/components/IconText/index.vue"}var u=n(83744);"function"===typeof s&&s(c);const r=(0,u.Z)(c,[["__scopeId","data-v-55dcc2f6"]]);var d=r},6737:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(10661),l=(n(3241),n(35095),n(66252)),a=n(2262),o=n(49527);const c={class:"info-box"};var s={__name:"image_actions",props:{topic:{type:Object,default:()=>{}},imageTimeline:{type:Object,default:()=>{}},canAction:{type:Boolean,default:!1}},emits:["delFav","addFav"],setup(e,{emit:t}){const n=e,{extraInfo:s,favId:u}=(0,a.BK)(n.topic);function r(){t("delFav")}function d(){t("addFav")}return(t,n)=>{const f=i.Q0;return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(f,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,a.SU)(u)>0?((0,l.wg)(),(0,l.j4)((0,a.SU)(o["default"]),{key:0,icon:"star-fill",text:(0,a.SU)(s).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:r},null,8,["text"])):((0,l.wg)(),(0,l.j4)((0,a.SU)(o["default"]),{key:1,icon:"star-line",text:(0,a.SU)(s).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:d},null,8,["text"]))])])),_:1}),e.imageTimeline.download?((0,l.wg)(),(0,l.j4)(f,{key:0,class:"box-item",effect:"dark",content:e.imageTimeline.download.title,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o["default"]),{icon:"download-2-line",text:e.imageTimeline.download.value,class:"icon"},null,8,["text"])])),_:1},8,["content"])):(0,l.kq)("",!0),(0,a.SU)(s).replies?((0,l.wg)(),(0,l.j4)(f,{key:1,class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o["default"]),{icon:"chat-poll-line",text:(0,a.SU)(s).replies,class:"icon"},null,8,["text"])])),_:1})):(0,l.kq)("",!0),e.imageTimeline.size?((0,l.wg)(),(0,l.j4)(f,{key:2,class:"box-item",effect:"dark",content:e.imageTimeline.size.title,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o["default"]),{icon:"database-2-line",text:e.imageTimeline.size.value,class:"icon"},null,8,["text"])])),_:1},8,["content"])):(0,l.kq)("",!0),e.imageTimeline.use?((0,l.wg)(),(0,l.j4)(f,{key:3,class:"box-item",effect:"dark",content:e.imageTimeline.use.title,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o["default"]),{icon:"file-2-line",text:e.imageTimeline.use.value,class:"icon"},null,8,["text"])])),_:1},8,["content"])):(0,l.kq)("",!0),e.imageTimeline.star?((0,l.wg)(),(0,l.j4)(f,{key:4,class:"box-item",effect:"dark",content:e.imageTimeline.star.title,placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o["default"]),{icon:"user-star-line",text:e.imageTimeline.star.value,class:"icon"},null,8,["text"])])),_:1},8,["content"])):(0,l.kq)("",!0)])}}};function u(e){e.__source="src/components/Topic/image_actions.vue"}var r=n(83744);"function"===typeof u&&u(s);const d=(0,r.Z)(s,[["__scopeId","data-v-0bf094e6"]]);var f=d}}]);