/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5993],{16273:function(e,o,t){t.d(o,{Z:function(){return p}});var r=t(30032),n=(t(3241),t(91154),t(97830)),a=(t(13768),t(66252)),l=t(2262),i=t(3577),c=t(22201),d=(0,a.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let o=null;const t=(0,l.iH)(!0);return o=setTimeout((()=>{t.value=!1}),500),(0,c.iS)(((e,t,r)=>{clearInterval(o),r()})),(o,c)=>{const d=n.vk,s=r.Kf;return(0,a.wg)(),(0,a.j4)(s,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,a.Nv)({default:(0,a.w5)((()=>[e.skeleton?((0,a.wg)(),(0,a.j4)(d,{key:0,animated:"",loading:(0,l.SU)(t),rows:e.skeletonRows},{default:(0,a.w5)((()=>[(0,a.WI)(o.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,a.WI)(o.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[o.$slots.header||e.header?{name:"header",fn:(0,a.w5)((()=>[(0,a.WI)(o.$slots,"header",{},(()=>[(0,a.Uk)((0,i.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function s(e){e.__source="library/components/VabCard/index.vue"}var u=t(83744);"function"===typeof s&&s(d);const v=(0,u.Z)(d,[["__scopeId","data-v-391150ea"]]);var p=v},86415:function(e,o,t){t.d(o,{Z:function(){return s}});var r=t(30032),n=(t(3241),t(91154),t(66252)),a=t(3577),l=(0,n.aZ)({__name:"index",props:{shadow:{type:String,default:""},colorFrom:{type:String,default:""},colorTo:{type:String,default:""},title:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(o,t)=>{const l=(0,n.up)("vab-icon"),i=r.Kf;return(0,n.wg)(),(0,n.j4)(i,{class:"vab-colorful-card",shadow:e.shadow,style:(0,a.j5)({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.title),1)])),default:(0,n.w5)((()=>[e.icon?((0,n.wg)(),(0,n.j4)(l,{key:0,icon:e.icon},null,8,["icon"])):(0,n.kq)("",!0),(0,n.WI)(o.$slots,"default")])),_:3},8,["shadow","style"])}}});function i(e){e.__source="library/components/VabColorfulCard/index.vue"}var c=t(83744);"function"===typeof i&&i(l);const d=(0,c.Z)(l,[["__scopeId","data-v-18dc2024"]]);var s=d},55993:function(e,o,t){t.r(o),t.d(o,{default:function(){return h}});var r=t(16273),n=t(73632),a=(t(3241),t(74965),t(22040)),l=(t(99426),t(86415)),i=t(57534),c=(t(92471),t(66252)),d=t(3577);const s={class:"project-card-description"};function u(e,o,t,u,v,p){const f=(0,c.up)("vab-icon"),w=i.Ks,h=l.Z,m=a.Dv,y=n.dq,b=r.Z;return(0,c.wg)(),(0,c.j4)(b,{shadow:"hover"},{header:(0,c.w5)((()=>[(0,c.Wm)(f,{icon:"github-line"}),(0,c.Uk)(" 开源项目 "),(0,c.Wm)(w,{class:"card-header-tag"},{default:(0,c.w5)((()=>[(0,c.Uk)("爱我别走")])),_:1})])),default:(0,c.w5)((()=>[(0,c.Wm)(y,{gutter:20},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.list,((o,t)=>((0,c.wg)(),(0,c.j4)(m,{key:t,lg:12,md:12,sm:24,xl:12,xs:24},{default:(0,c.w5)((()=>[(0,c.Wm)(h,{"color-from":o.colorFrom,"color-to":o.colorTo,icon:o.icon,shadow:"hover",title:o.title,onClick:t=>e.handleOpenWindow(o.url)},{default:(0,c.w5)((()=>[(0,c._)("div",s,(0,d.zw)(o.description),1)])),_:2},1032,["color-from","color-to","icon","title","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})}var v=(0,c.aZ)({setup(){const e=[{title:"vue-admin-better",description:"一款绝佳的中后台前端开发管理框架",colorFrom:"var(--el-color-primary)",colorTo:"var(--el-color-transition)",icon:"vuejs-line",url:"https://github.com/chuzhixin/vue-admin-better/tree/master"},{title:"vue-admin-better-antdv(vue3.x)",description:"一款基于vue3.x + ant-design-vue的绝佳的中后台前端开发管理框架",colorFrom:"var(--el-color-transition)",colorTo:"var(--el-color-primary)",icon:"dashboard-line",url:"https://github.com/chuzhixin/vue-admin-better/tree/vue3.0-antdv"},{title:"vue-admin-arco(vue3.x)",description:"一款基于vue3.x + vite + ts + arco-design-pro-vue修改的前端框架",colorFrom:"var(--el-color-primary)",colorTo:"var(--el-color-transition)",icon:"dashboard-line",url:"https://github.com/chuzhixin/vue-admin-arco"}],o=e=>{window.open(e)};return{list:e,handleOpenWindow:o}}});function p(e){e.__source="src/views/index/components/MyProject.vue"}var f=t(83744);"function"===typeof p&&p(v);const w=(0,f.Z)(v,[["render",u],["__scopeId","data-v-192a8160"]]);var h=w}}]);