/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2086,5791,6700,4448,9886,6959],{60020:function(t,e,a){a.d(e,{F:function(){return i}});var n=a(54258),o=a(26010);function i(){return(0,o.Oo)()?(0,n.Z)({url:"/setting/data_read",method:"post",data:["uuid"]}):{code:200,data:"AAAAA",message:"success"}}},50232:function(t,e,a){a.d(e,{q:function(){return s}});var n=a(60020),o=a(23471),i=a(47720);const s=(0,i.Q_)("myDevice",{state:()=>({uuid:"",deviceInfo:{}}),getters:{getUUID(){return this.uuid},getClientId(){return this.deviceInfo.host_id},getDeviceInfo(){return this.deviceInfo}},actions:{isLocalDevice(t){return this.uuid===t},async loadUUID(){const{data:t}=await(0,n.F)();this.uuid=t},async loadDeviceInfo(){const{body:t}=await(0,o.Ep)(this.uuid);this.deviceInfo=t},resetDeviceInfo(){this.deviceInfo={}}}})},85826:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(27750),o=a(15659),i=(a(3241),a(10444),a(57534)),s=(a(92471),a(31452)),r=(a(68445),a(66252));const l={class:"bottom"};function u(t,e,a,u,c,d){const f=(0,r.up)("vab-icon"),p=s.E2,m=i.Ks,_=(0,r.up)("vab-chart"),v=(0,r.up)("vab-count"),h=o.ElButton,g=n.Z;return(0,r.wg)(),(0,r.j4)(g,{class:"access",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"line-chart-line"}),(0,r.Uk)(" 租金统计 "),(0,r.Wm)(m,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(p,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(_,{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",l,[(0,r._)("span",null,[(0,r.Uk)(" 租金总收入: "),(0,r.Wm)(v,{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,r.Wm)(m,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("租金明细")])),_:1})])),_:1})])])),_:1})}a(57658);var c=a(96486),d=a.n(c),f=a(4901),p=a(4856),m=a(90178),_=a(2262),v=a(47720),h=a(22201),g=(0,r.aZ)({components:{VabChart:f["default"],VabCount:p["default"]},setup(){const t=(0,m.F)(),{echartsGraphic1:e}=(0,v.Jk)(t),a=(0,_.qj)({timer:null,countConfig:{startVal:0,endVal:d().random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"租金",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new f["default"].graphic.LinearGradient(0,0,1,0,e.value.map(((t,e)=>({color:t,offset:e}))))}}]}});return(0,r.YP)((()=>e.value),(()=>{a.option.series[0].itemStyle.color=new f["default"].graphic.LinearGradient(0,0,1,0,e.value.map(((t,e)=>({color:t,offset:e}))))})),(0,r.bv)((()=>{const t=+new Date(2021,1,1),e=864e5,n=[],o=[1500*Math.random()];let i=new Date(t);const s=t=>{i=[i.getFullYear(),i.getMonth()+1,i.getDate()].join("/"),n.push(i),o.push(d().random(2e4,6e4)),t&&(n.shift(),o.shift()),i=new Date(+new Date(i)+e),a.option.xAxis[0].data=[],a.option.series[0].data=[],a.option.xAxis[0].data=n,a.option.series[0].data=o};for(let a=1;a<6;a++)s();a.timer=setInterval((()=>{s(!0)}),5e3)})),(0,h.iS)(((t,e,n)=>{clearInterval(a.timer),n()})),{...(0,_.BK)(a)}}});function w(t){t.__source="src/views/gpumarket/mydevice/components/Access.vue"}var y=a(83744);"function"===typeof w&&w(g);const U=(0,y.Z)(g,[["render",u]]);var x=U},2289:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(27750),o=a(15659),i=(a(3241),a(10444),a(57534)),s=(a(92471),a(31452)),r=(a(68445),a(66252));const l={class:"bottom"};function u(t,e,a,u,c,d){const f=(0,r.up)("vab-icon"),p=s.E2,m=i.Ks,_=(0,r.up)("vab-chart"),v=(0,r.up)("vab-count"),h=o.ElButton,g=n.Z;return(0,r.wg)(),(0,r.j4)(g,{class:"authorization",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"bar-chart-2-line"}),(0,r.Uk)(" 任务统计 "),(0,r.Wm)(m,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(p,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(_,{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",l,[(0,r._)("span",null,[(0,r.Uk)(" 获得算力: "),(0,r.Wm)(v,{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"]),(0,r.Wm)(m,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("算力明细")])),_:1})])),_:1})])])])),_:1})}var c=a(96486),d=a.n(c),f=a(4901),p=a(4856),m=a(90178),_=a(2262),v=a(47720),h=a(22201),g=(0,r.aZ)({name:"Authorization",components:{VabChart:f["default"],VabCount:p["default"]},setup(){const t=(0,m.F)(),{echartsGraphic2:e}=(0,v.Jk)(t),a=(0,_.qj)({timer:null,n:5,countConfig:{startVal:0,endVal:d().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22],itemStyle:{borderRadius:[2,2,0,0],color:new f["default"].graphic.LinearGradient(0,0,0,1,e.value.map(((t,e)=>({color:t,offset:e}))))}}]}});return(0,r.YP)((()=>e.value),(()=>{a.option.series[0].itemStyle.color=new f["default"].graphic.LinearGradient(0,0,0,1,e.value.map(((t,e)=>({color:t,offset:e}))))})),(0,h.iS)(((t,e,n)=>{clearInterval(a.timer),n()})),(0,r.bv)((()=>{a.timer=setInterval((()=>{a.n>0?a.n--:(a.option.series[0].type=d().sample(d().pull(["bar","line","scatter"],a.option.series[0].type)),a.n=5)}),1e3)})),{...(0,_.BK)(a)}}});function w(t){t.__source="src/views/gpumarket/mydevice/components/Authorization.vue"}var y=a(83744);"function"===typeof w&&w(g);const U=(0,y.Z)(g,[["render",u]]);var x=U},8813:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var n=a(27750),o=a(86398),i=(a(3241),a(69448),a(57534)),s=(a(92471),a(66252)),r=a(3577),l=a(2262);const u=t=>((0,s.dD)("data-v-39e9f663"),t=t(),(0,s.Cn)(),t),c={key:0,class:"table"},d=u((()=>(0,s._)("td",null,"设备名称",-1))),f=u((()=>(0,s._)("td",null,"状态",-1))),p=u((()=>(0,s._)("td",null,"设备编号",-1))),m={colspan:"3"},_=u((()=>(0,s._)("td",null,"CPU",-1))),v={colspan:"3"},h=u((()=>(0,s._)("td",null,"GPU",-1))),g={colspan:"3"},w=u((()=>(0,s._)("td",null,"内存",-1))),y=u((()=>(0,s._)("td",null,"硬盘",-1))),U=u((()=>(0,s._)("td",null,"网络",-1))),x={colspan:"3"},b=u((()=>(0,s._)("td",null,"其它",-1))),k={colspan:"3"};var S={__name:"version_information",setup(t){const e=(0,s.f3)("deviceInfo"),a=(0,s.f3)("isLocalDevice"),u=(0,s.Fl)((()=>{const t=e.value;return t.host_rate=parseFloat(t.host_rate),t.host_online_status_type="在线"===t.host_online_status?"success":"danger",t||{}})),S=(0,s.Fl)((()=>e.value.client_hardware||{}));return(t,e)=>{const W=(0,s.up)("vab-icon"),z=i.Ks,C=o.gi,D=n.Z;return(0,s.wg)(),(0,s.j4)(D,{class:"version-information",shadow:"hover"},{header:(0,s.w5)((()=>[(0,s.Wm)(W,{icon:"information-line"}),(0,s.Uk)(" 设备："+(0,r.zw)((0,l.SU)(a)?"本机设备":"远程主机设备")+" ",1),(0,s.Wm)(z,{class:"card-header-tag"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 当前版本：V"+(0,r.zw)((0,l.SU)(u).host_version)+"   部署时间："+(0,r.zw)((0,l.SU)(u).host_add_time_str),1)])),_:1})])),default:(0,s.w5)((()=>[(0,l.SU)(u).host_name?((0,s.wg)(),(0,s.iD)("table",c,[(0,s._)("tr",null,[d,(0,s._)("td",null,(0,r.zw)((0,l.SU)(u).host_name),1),f,(0,s._)("td",null,[(0,s.Wm)(C,{class:"mx-1",type:(0,l.SU)(u).host_online_status_type},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,l.SU)(u).host_online_status),1)])),_:1},8,["type"])])]),(0,s._)("tr",null,[p,(0,s._)("td",m,(0,r.zw)((0,l.SU)(u).host_uuid),1)]),(0,s._)("tr",null,[_,(0,s._)("td",v,(0,r.zw)((0,l.SU)(S).cpu)+" * "+(0,r.zw)((0,l.SU)(u).host_cpu_count),1)]),(0,s._)("tr",null,[h,(0,s._)("td",g,(0,r.zw)((0,l.SU)(u).host_gpu_name)+" * "+(0,r.zw)((0,l.SU)(u).host_gpu_count),1)]),(0,s._)("tr",null,[w,(0,s._)("td",null,(0,r.zw)((0,l.SU)(u).host_memony)+"G",1),y,(0,s._)("td",null,(0,r.zw)((0,l.SU)(u).host_disk_type_str),1)]),(0,s._)("tr",null,[U,(0,s._)("td",x,(0,r.zw)((0,l.SU)(u).host_net_type_str)+" - "+(0,r.zw)((0,l.SU)(u).host_address_str)+" "+(0,r.zw)((0,l.SU)(S).ip_info?(0,l.SU)(S).ip_info.wan_ip:"")+" "+(0,r.zw)((0,l.SU)(S).lan_ip),1)]),(0,s._)("tr",null,[b,(0,s._)("td",k,[(0,s._)("div",null,(0,r.zw)((0,l.SU)(S).system),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,l.SU)(S).disks_info,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},(0,r.zw)(t.MediaType)+": "+(0,r.zw)(t.Model)+" "+(0,r.zw)(t.Size)+"G ",1)))),128))])])])):(0,s.kq)("",!0)])),_:1})}}};function W(t){t.__source="src/views/gpumarket/mydevice/components/version_information.vue"}var z=a(83744);"function"===typeof W&&W(S);const C=(0,z.Z)(S,[["__scopeId","data-v-39e9f663"]]);var D=C},90932:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=a(73632),o=(a(3241),a(74965),a(22040)),i=(a(99426),a(66252)),s=a(2262),r=(a(85826),a(2289),a(8813)),l=a(35824),u=a(18531),c=a(23471),d=(a(60020),a(50232)),f=a(22201);const p={class:"index-container"},m=(0,i.aZ)({async beforeRouteEnter(t,e,a){const n=(0,d.q)();await n.loadUUID(),t.params.id?n.resetDeviceInfo():(await n.loadDeviceInfo(),t.params.id=n.getClientId),a()}});var _=Object.assign(m,{__name:"detail",setup(t){const e=(0,d.q)(),a=(0,s.iH)({});(0,i.JJ)("deviceInfo",a);const m=(0,i.Fl)((()=>a.value.host_operation_array||{}));(0,i.JJ)("hostOperationArray",m);const _=(0,f.yj)();(0,i.YP)((()=>_.params.id),(()=>{h(_.params.id)})),(0,i.bv)((()=>{h(_.params.id)}));const v=(0,s.iH)(!1);async function h(t){if(e.getClientId)v.value=!0,a.value=e.getDeviceInfo;else if(t){const{body:n}=await(0,c.Ep)(t);v.value=e.isLocalDevice(n.host_uuid),a.value=n}}return(0,i.JJ)("isLocalDevice",v),(t,e)=>{const a=o.Dv,c=n.dq;return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(c,{gutter:20},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(r["default"]))])),_:1}),(0,i.Wm)(a,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{gutter:20},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(u["default"]))])),_:1})])),_:1}),(0,i.Wm)(a,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(l["default"]))])),_:1})])),_:1})])}}});function v(t){t.__source="src/views/gpumarket/mydevice/detail.vue"}var h=a(83744);"function"===typeof v&&v(_);const g=(0,h.Z)(_,[["__scopeId","data-v-3e6b33b2"]]);var w=g}}]);