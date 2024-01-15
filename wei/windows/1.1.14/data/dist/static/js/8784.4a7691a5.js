/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-12 10:25:31
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8784,9527],{49527:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var o=n(66252),c=n(3577),l=n(2262);const a={class:"box"};var i={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(t){const e=t,n=(0,o.Fl)((()=>{const t={fontSize:e.size};return e.color&&(t.color=e.color),t}));return(e,i)=>{const r=(0,o.up)("vab-icon");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(r,{icon:t.icon,style:(0,c.j5)((0,l.SU)(n)),class:"icon"},null,8,["icon","style"]),(0,o._)("span",{style:(0,c.j5)((0,l.SU)(n))},(0,c.zw)(t.text),5)])}}};function r(t){t.__source="src/components/IconText/index.vue"}var s=n(83744);"function"===typeof r&&r(i);const u=(0,s.Z)(i,[["__scopeId","data-v-55dcc2f6"]]);var d=u},88784:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var o=n(14181),c=(n(3241),n(33828),n(10661)),l=(n(35095),n(66252)),a=n(2262),i=n(3577),r=n(49527);const s={class:"info-box"};var u={__name:"actions",props:{topic:{type:Object,default:()=>{}},canAction:{type:Boolean,default:!1}},emits:["delFav","addFav","addLike","report"],setup(t,{emit:e}){const n=t,{extraInfo:u,favId:d,likeId:f}=(0,a.BK)(n.topic);function p(){e("delFav")}function m(){e("addFav")}function v(){e("addLike")}function _(){e("report")}return(e,n)=>{const x=c.Q0,k=(0,l.up)("Bell"),S=o.gn;return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(x,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,a.SU)(d)>0?((0,l.wg)(),(0,l.j4)((0,a.SU)(r["default"]),{key:0,icon:"star-fill",text:(0,a.SU)(u).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:p},null,8,["text"])):((0,l.wg)(),(0,l.j4)((0,a.SU)(r["default"]),{key:1,icon:"star-line",text:(0,a.SU)(u).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:m},null,8,["text"]))])])),_:1}),(0,l.Wm)(x,{class:"box-item",effect:"dark",content:t.canAction?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,a.SU)(f)>0?((0,l.wg)(),(0,l.j4)((0,a.SU)(r["default"]),{key:0,icon:"heart-3-fill",text:(0,a.SU)(u).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,l.wg)(),(0,l.j4)((0,a.SU)(r["default"]),{key:1,icon:"heart-3-line",text:(0,a.SU)(u).recommend_add,class:(0,i.C_)(["icon",t.canAction?"cursor-pointer":"cursor-not-allowed"]),onClick:v},null,8,["text","class"]))])])),_:1},8,["content"]),(0,l.Wm)(x,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(r["default"]),{icon:"chat-2-line",text:(0,a.SU)(u).replies,class:"icon"},null,8,["text"])])),_:1}),(0,l.Wm)(x,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:_},{default:(0,l.w5)((()=>[(0,l.Wm)(k)])),_:1})])),_:1})])}}};function d(t){t.__source="src/components/Topic/actions.vue"}var f=n(83744);"function"===typeof d&&d(u);const p=(0,f.Z)(u,[["__scopeId","data-v-2bd0a91e"]]);var m=p}}]);