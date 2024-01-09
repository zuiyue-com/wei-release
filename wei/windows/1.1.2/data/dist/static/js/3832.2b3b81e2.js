/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 14:42:43
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3832,5791,8891,5705],{96545:function(e,t,a){a.d(t,{Bb:function(){return s},Ep:function(){return u},Ix:function(){return l},KG:function(){return i},My:function(){return c},Zr:function(){return r},fZ:function(){return d}});var n=a(92325),o=a(96486);function l(e,t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=device_list",method:"get",params:e})}function i(e){const t=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:t})}function r(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device",method:"get",params:e})}function u(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function s(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"get"})}function c(){return(0,n.Z)({url:"/wwwapi.php?to=models&modac=formbase",method:"get"})}function d(e){const t={...e};return e.typeid&&parseInt(e.typeid)>0?t.filter="typeid":delete t.typeid,(0,n.Z)({url:"/wwwapi.php?to=postModel",method:"get",params:t})}},85826:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(27750),o=a(15659),l=(a(3241),a(10444),a(57534)),i=(a(92471),a(31452)),r=(a(68445),a(66252));const u={class:"bottom"};function s(e,t,a,s,c,d){const f=(0,r.up)("vab-icon"),p=i.E2,m=l.Ks,v=(0,r.up)("vab-chart"),w=(0,r.up)("vab-count"),g=o.ElButton,h=n.Z;return(0,r.wg)(),(0,r.j4)(h,{class:"access",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"line-chart-line"}),(0,r.Uk)(" 租金统计 "),(0,r.Wm)(m,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(p,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(v,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",u,[(0,r._)("span",null,[(0,r.Uk)(" 租金总收入: "),(0,r.Wm)(w,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,r.Wm)(m,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("租金明细")])),_:1})])),_:1})])])),_:1})}a(57658);var c=a(96486),d=a.n(c),f=a(4901),p=a(4856),m=a(90178),v=a(2262),w=a(47720),g=a(22201),h=(0,r.aZ)({components:{VabChart:f["default"],VabCount:p["default"]},setup(){const e=(0,m.F)(),{echartsGraphic1:t}=(0,w.Jk)(e),a=(0,v.qj)({timer:null,countConfig:{startVal:0,endVal:d().random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"租金",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new f["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))}}]}});return(0,r.YP)((()=>t.value),(()=>{a.option.series[0].itemStyle.color=new f["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))})),(0,r.bv)((()=>{const e=+new Date(2021,1,1),t=864e5,n=[],o=[1500*Math.random()];let l=new Date(e);const i=e=>{l=[l.getFullYear(),l.getMonth()+1,l.getDate()].join("/"),n.push(l),o.push(d().random(2e4,6e4)),e&&(n.shift(),o.shift()),l=new Date(+new Date(l)+t),a.option.xAxis[0].data=[],a.option.series[0].data=[],a.option.xAxis[0].data=n,a.option.series[0].data=o};for(let a=1;a<6;a++)i();a.timer=setInterval((()=>{i(!0)}),5e3)})),(0,g.iS)(((e,t,n)=>{clearInterval(a.timer),n()})),{...(0,v.BK)(a)}}});function _(e){e.__source="src/views/gpumarket/mydevice/components/Access.vue"}var y=a(83744);"function"===typeof _&&_(h);const x=(0,y.Z)(h,[["render",s]]);var b=x},2289:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(27750),o=a(15659),l=(a(3241),a(10444),a(57534)),i=(a(92471),a(31452)),r=(a(68445),a(66252));const u={class:"bottom"};function s(e,t,a,s,c,d){const f=(0,r.up)("vab-icon"),p=i.E2,m=l.Ks,v=(0,r.up)("vab-chart"),w=(0,r.up)("vab-count"),g=o.ElButton,h=n.Z;return(0,r.wg)(),(0,r.j4)(h,{class:"authorization",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"bar-chart-2-line"}),(0,r.Uk)(" 任务统计 "),(0,r.Wm)(m,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(p,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(v,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",u,[(0,r._)("span",null,[(0,r.Uk)(" 获得算力: "),(0,r.Wm)(w,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"]),(0,r.Wm)(m,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("算力明细")])),_:1})])),_:1})])])])),_:1})}var c=a(96486),d=a.n(c),f=a(4901),p=a(4856),m=a(90178),v=a(2262),w=a(47720),g=a(22201),h=(0,r.aZ)({name:"Authorization",components:{VabChart:f["default"],VabCount:p["default"]},setup(){const e=(0,m.F)(),{echartsGraphic2:t}=(0,w.Jk)(e),a=(0,v.qj)({timer:null,n:5,countConfig:{startVal:0,endVal:d().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22],itemStyle:{borderRadius:[2,2,0,0],color:new f["default"].graphic.LinearGradient(0,0,0,1,t.value.map(((e,t)=>({color:e,offset:t}))))}}]}});return(0,r.YP)((()=>t.value),(()=>{a.option.series[0].itemStyle.color=new f["default"].graphic.LinearGradient(0,0,0,1,t.value.map(((e,t)=>({color:e,offset:t}))))})),(0,g.iS)(((e,t,n)=>{clearInterval(a.timer),n()})),(0,r.bv)((()=>{a.timer=setInterval((()=>{a.n>0?a.n--:(a.option.series[0].type=d().sample(d().pull(["bar","line","scatter"],a.option.series[0].type)),a.n=5)}),1e3)})),{...(0,v.BK)(a)}}});function _(e){e.__source="src/views/gpumarket/mydevice/components/Authorization.vue"}var y=a(83744);"function"===typeof _&&_(h);const x=(0,y.Z)(h,[["render",s]]);var b=x},50935:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(22040),o=(a(3241),a(99426),a(27750)),l=a(91557),i=(a(35635),a(66252)),r=a(78891),u=a(2262);const s=e=>((0,i.dD)("data-v-73db7bd4"),e=e(),(0,i.Cn)(),e),c=s((()=>(0,i._)("p",null,"拉取镜像",-1))),d=s((()=>(0,i._)("p",null,"下载模型",-1)));var f={__name:"IconList",setup(e){const t=(0,u.iH)(null);function a(e,a){t.value.showDialog(e,a)}return(e,u)=>{const s=(0,i.up)("vab-icon"),f=l.dQ,p=o.Z,m=n.Dv;return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,{lg:6,md:6,sm:12,xl:12,xs:24},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"icon-panel",shadow:"hover",onClick:u[0]||(u[0]=e=>a("拉取镜像","镜像"))},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{value:"+"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{icon:"windows-line",style:{color:"#69c0ff"}})])),_:1}),c])),_:1})])),_:1}),(0,i.Wm)(m,{lg:6,md:6,sm:12,xl:12,xs:24},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"icon-panel",shadow:"hover",onClick:u[1]||(u[1]=e=>a("下载模型","模型"))},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{value:"+"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{icon:"inbox-archive-line",style:{color:"#ffd666"}})])),_:1}),d])),_:1})])),_:1}),(0,i.Wm)(r["default"],{ref_key:"pullDialogRef",ref:t},null,512)],64)}}};function p(e){e.__source="src/views/gpumarket/mydevice/components/IconList.vue"}var m=a(83744);"function"===typeof p&&p(f);const v=(0,m.Z)(f,[["__scopeId","data-v-73db7bd4"]]);var w=v},78891:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(73481),o=(a(3241),a(62029),a(20129)),l=(a(69840),a(15659)),i=(a(10444),a(47820)),r=(a(50986),a(61715),a(6589),a(57018)),u=(a(74367),a(66252)),s=a(2262);const c={class:"w-full flex flex-justify-center"};var d={__name:"pull_dialog",setup(e,{expose:t}){const a=(0,s.qj)({title:"",type:"",show:!1,images:[{value:"选项1",label:"Akegarasu/lora-scripts/lora-train"},{value:"选项2",label:"Akegarasu/lora-scripts/lora-train/aaaaa"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]}),{images:d,title:f,type:p}=(0,s.BK)(a),m=(0,s.qj)({url:"",collection:""});function v(e,t){a.title=e,a.type=t,a.show=!0}function w(){m.url="",m.collection="",a.show=!1}return t({showDialog:v}),(e,t)=>{const v=r.EZ,g=o.nH,h=i.BT,_=i.km,y=l.ElButton,x=o.ly,b=n.d0;return(0,u.wg)(),(0,u.j4)(b,{modelValue:(0,s.SU)(a).show,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,s.SU)(a).show=e),title:(0,s.SU)(f),width:"500","close-on-click-modal":!1,"close-on-press-escape":!1,onClose:w},{default:(0,u.w5)((()=>[(0,u.Wm)(x,{"label-width":"auto"},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{label:(0,s.SU)(p)+"地址"},{default:(0,u.w5)((()=>[(0,u.Wm)(v,{modelValue:(0,s.SU)(m).url,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.SU)(m).url=e),placeholder:(0,s.SU)(p)+"地址"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,u.Wm)(g,{label:"从收藏夹中选择"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{modelValue:(0,s.SU)(m).collection,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,s.SU)(m).collection=e),multiple:"",placeholder:"收藏的"+(0,s.SU)(p),class:"w-full"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,s.SU)(d),(e=>((0,u.wg)(),(0,u.j4)(h,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,u.Wm)(g,null,{default:(0,u.w5)((()=>[(0,u._)("div",c,[(0,u.Wm)(y,{type:"primary",onClick:w},{default:(0,u.w5)((()=>[(0,u.Uk)("拉取")])),_:1}),(0,u.Wm)(y,{onClick:w},{default:(0,u.w5)((()=>[(0,u.Uk)("取消")])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue","title"])}}};function f(e){e.__source="src/views/gpumarket/mydevice/components/pull_dialog.vue"}"function"===typeof f&&f(d);const p=d;var m=p},47658:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(73632),o=(a(3241),a(74965),a(22040)),l=(a(99426),a(66252)),i=a(2262),r=a(85826),u=a(2289),s=a(39040),c=a(91061),d=a(50935),f=a(96545),p=a(22201);const m={class:"index-container"};var v={__name:"detail",setup(e){const t=(0,i.iH)({}),a=(0,p.yj)();async function v(e){const{body:a}=await(0,f.Ep)(e);t.value=a}return(0,l.bv)((()=>{v(a.params.id)})),(e,a)=>{const f=o.Dv,p=n.dq;return(0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(p,{gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(s["default"]),{"device-info":(0,i.SU)(t)},null,8,["device-info"])])),_:1}),(0,l.Wm)(f,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(r["default"]))])),_:1}),(0,l.Wm)(f,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(u["default"]))])),_:1})])),_:1}),(0,l.Wm)(p,{gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d["default"]))])),_:1})])),_:1}),(0,l.Wm)(f,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(c["default"]))])),_:1})])),_:1})])}}};function w(e){e.__source="src/views/gpumarket/mydevice/detail.vue"}var g=a(83744);"function"===typeof w&&w(v);const h=(0,g.Z)(v,[["__scopeId","data-v-c17f648c"]]);var _=h}}]);