/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-15 16:38:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3688],{31794:function(e,t,a){function n(e){return new Promise(((t,a)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=function(){if(2==n.readyState){const e=new Image;e.src=n.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return n},x:function(){return s}})},27750:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(30032),s=(a(3241),a(91154),a(97830)),o=(a(13768),a(66252)),r=a(2262),d=a(3577),l=a(22201),u=(0,o.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,r.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const u=s.vk,i=n.Kf;return(0,o.wg)(),(0,o.j4)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,o.Nv)({default:(0,o.w5)((()=>[e.skeleton?((0,o.wg)(),(0,o.j4)(u,{key:0,animated:"",loading:(0,r.SU)(a),rows:e.skeletonRows},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,o.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"header",{},(()=>[(0,o.Uk)((0,d.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof i&&i(u);const f=(0,c.Z)(u,[["__scopeId","data-v-391150ea"]]);var h=f}}]);