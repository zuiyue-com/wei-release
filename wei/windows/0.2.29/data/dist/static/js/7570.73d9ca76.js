/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7570,2767],{16273:function(o,a,e){e.d(a,{Z:function(){return p}});var t=e(30032),n=(e(3241),e(91154),e(97830)),r=(e(13768),e(66252)),l=e(2262),i=e(3577),s=e(22201),d=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(o){let a=null;const e=(0,l.iH)(!0);return a=setTimeout((()=>{e.value=!1}),500),(0,s.iS)(((o,e,t)=>{clearInterval(a),t()})),(a,s)=>{const d=n.vk,f=t.Kf;return(0,r.wg)(),(0,r.j4)(f,{"body-style":o.bodyStyle,class:"vab-card",shadow:o.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[o.skeleton?((0,r.wg)(),(0,r.j4)(d,{key:0,animated:"",loading:(0,l.SU)(e),rows:o.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||o.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(a.$slots,"header",{},(()=>[(0,r.Uk)((0,i.zw)(o.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function f(o){o.__source="library/components/VabCard/index.vue"}var u=e(83744);"function"===typeof f&&f(d);const c=(0,u.Z)(d,[["__scopeId","data-v-391150ea"]]);var p=c},73570:function(o,a,e){e.r(a),e.d(a,{default:function(){return k}});var t=e(16273),n=e(73632),r=(e(3241),e(74965),e(22040)),l=(e(99426),e(66252));const i=o=>((0,l.dD)("data-v-03ba8ba2"),o=o(),(0,l.Cn)(),o),s={class:"order"},d=i((()=>(0,l._)("p",null,"已售数量",-1))),f=i((()=>(0,l._)("p",null,"待售数量",-1))),u=i((()=>(0,l._)("p",null,"好评度",-1))),c=i((()=>(0,l._)("h1",null,"99%",-1))),p=i((()=>(0,l._)("p",null,"已完成订单",-1))),m=i((()=>(0,l._)("p",null,"计划完成订单",-1)));function g(o,a,e,i,g,h){const w=(0,l.up)("vab-icon"),x=(0,l.up)("vab-count"),v=r.Dv,y=n.dq,C=t.Z,b=(0,l.up)("vab-chart");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(C,{class:"order-card1",shadow:"hover"},{header:(0,l.w5)((()=>[(0,l.Wm)(w,{icon:"shopping-bag-2-line"}),(0,l.Uk)(" 商品 ")])),default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"order-card1-content"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{span:8},{default:(0,l.w5)((()=>[d,(0,l._)("h1",null,[(0,l.Wm)(x,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,l.Wm)(v,{span:8},{default:(0,l.w5)((()=>[f,(0,l._)("h1",null,[(0,l.Wm)(x,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,l.Wm)(v,{span:8},{default:(0,l.w5)((()=>[u,c])),_:1})])),_:1})])),_:1}),(0,l.Wm)(C,{class:"order-card2",shadow:"hover",skeleton:"","skeleton-rows":10},{header:(0,l.w5)((()=>[(0,l._)("span",null,[(0,l.Wm)(w,{icon:"list-unordered"}),(0,l.Uk)(" 订单 ")])])),default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"order-card2-content"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{span:12},{default:(0,l.w5)((()=>[p,(0,l._)("h1",null,[(0,l.Wm)(x,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":1.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,l.Wm)(v,{span:12},{default:(0,l.w5)((()=>[m,(0,l._)("h1",null,[(0,l.Wm)(x,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":2.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,l.Wm)(v,{span:24},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"order-chart","init-options":o.initOptions,option:o.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])),_:1})])),_:1})])}var h=e(96486),w=e.n(h),x=e(16501),v=e(22),y=(0,l.aZ)({components:{VabCount:v["default"],VabChart:x["default"]},setup(){const o=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{countConfig:{startVal:0,endVal:w().random(1e3,6e3),decimals:0,prefix:"",suffix:"",separator:",",duration:5e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{left:"3%",containLabel:!0},xAxis:[{type:"category",data:["1季度","2季度","3季度","4季度"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"已完成订单",type:"line",data:[1345,2100,1330,2901],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new x["default"].graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[0],borderColor:o[0]}},{name:"未完成订单",type:"line",data:[1905,1020,3330,512],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new x["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[1],borderColor:o[1]}}]}}}});function C(o){o.__source="src/views/index/components/Order.vue"}var b=e(83744);"function"===typeof C&&C(y);const _=(0,b.Z)(y,[["render",g],["__scopeId","data-v-03ba8ba2"]]);var k=_}}]);