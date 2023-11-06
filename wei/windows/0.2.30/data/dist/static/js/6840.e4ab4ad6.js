/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-06 12:25:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6840,2767],{90891:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(27750),o=a(57534),s=(a(3241),a(92471),a(66252));const i={class:"bottom"};function r(e,t,a,r,l,d){const u=(0,s.up)("vab-icon"),c=o.Ks,f=(0,s.up)("vab-chart"),p=(0,s.up)("vab-count"),v=n.Z;return(0,s.wg)(),(0,s.j4)(v,{class:"access",shadow:"hover",skeleton:""},{header:(0,s.w5)((()=>[(0,s.Wm)(u,{icon:"line-chart-line"}),(0,s.Uk)(" 访问量 "),(0,s.Wm)(c,{class:"card-header-tag",type:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)("日")])),_:1})])),default:(0,s.w5)((()=>[(0,s.Wm)(f,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,s._)("div",i,[(0,s._)("span",null,[(0,s.Uk)(" 日均访问量: "),(0,s.Wm)(p,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])])),_:1})}a(57658);var l=a(96486),d=a.n(l),u=a(43576),c=a(41370),f=a(90178),p=a(2262),v=a(47720),h=a(22201),m=(0,s.aZ)({components:{VabChart:u["default"],VabCount:c["default"]},setup(){const e=(0,f.F)(),{echartsGraphic1:t}=(0,v.Jk)(e),a=(0,p.qj)({timer:null,countConfig:{startVal:0,endVal:d().random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问量",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new u["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))}}]}});return(0,s.YP)((()=>t.value),(()=>{a.option.series[0].itemStyle.color=new u["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))})),(0,s.bv)((()=>{const e=+new Date(2021,1,1),t=864e5,n=[],o=[1500*Math.random()];let s=new Date(e);const i=e=>{s=[s.getFullYear(),s.getMonth()+1,s.getDate()].join("/"),n.push(s),o.push(d().random(2e4,6e4)),e&&(n.shift(),o.shift()),s=new Date(+new Date(s)+t),a.option.xAxis[0].data=[],a.option.series[0].data=[],a.option.xAxis[0].data=n,a.option.series[0].data=o};for(let a=1;a<6;a++)i();a.timer=setInterval((()=>{i(!0)}),5e3)})),(0,h.iS)(((e,t,n)=>{clearInterval(a.timer),n()})),{...(0,p.BK)(a)}}});function y(e){e.__source="src/views/index/components/Access.vue"}var g=a(83744);"function"===typeof y&&y(m);const w=(0,g.Z)(m,[["render",r]]);var b=w},27750:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(30032),o=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),i=a(2262),r=a(3577),l=a(22201),d=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,i.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const d=o.vk,u=n.Kf;return(0,s.wg)(),(0,s.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(d,{key:0,animated:"",loading:(0,i.SU)(a),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof u&&u(d);const f=(0,c.Z)(d,[["__scopeId","data-v-391150ea"]]);var p=f}}]);