/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-16 18:54:59
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6180,5791,2674],{85826:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(27750),i=n(15659),s=(n(3241),n(10444),n(57534)),l=(n(92471),n(31452)),r=(n(68445),n(66252));const o={class:"bottom"};function u(e,t,n,u,c,d){const p=(0,r.up)("vab-icon"),m=l.E2,f=s.Ks,v=(0,r.up)("vab-chart"),g=(0,r.up)("vab-count"),_=i.ElButton,h=a.Z;return(0,r.wg)(),(0,r.j4)(h,{class:"access",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(p,{icon:"line-chart-line"}),(0,r.Uk)(" 租金统计 "),(0,r.Wm)(f,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(m,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(m,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(v,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",o,[(0,r._)("span",null,[(0,r.Uk)(" 租金总收入: "),(0,r.Wm)(g,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,r.Wm)(f,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("租金明细")])),_:1})])),_:1})])])),_:1})}n(57658);var c=n(96486),d=n.n(c),p=n(4901),m=n(4856),f=n(90178),v=n(2262),g=n(47720),_=n(22201),h=(0,r.aZ)({components:{VabChart:p["default"],VabCount:m["default"]},setup(){const e=(0,f.F)(),{echartsGraphic1:t}=(0,g.Jk)(e),n=(0,v.qj)({timer:null,countConfig:{startVal:0,endVal:d().random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"租金",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new p["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))}}]}});return(0,r.YP)((()=>t.value),(()=>{n.option.series[0].itemStyle.color=new p["default"].graphic.LinearGradient(0,0,1,0,t.value.map(((e,t)=>({color:e,offset:t}))))})),(0,r.bv)((()=>{const e=+new Date(2021,1,1),t=864e5,a=[],i=[1500*Math.random()];let s=new Date(e);const l=e=>{s=[s.getFullYear(),s.getMonth()+1,s.getDate()].join("/"),a.push(s),i.push(d().random(2e4,6e4)),e&&(a.shift(),i.shift()),s=new Date(+new Date(s)+t),n.option.xAxis[0].data=[],n.option.series[0].data=[],n.option.xAxis[0].data=a,n.option.series[0].data=i};for(let n=1;n<6;n++)l();n.timer=setInterval((()=>{l(!0)}),5e3)})),(0,_.iS)(((e,t,a)=>{clearInterval(n.timer),a()})),{...(0,v.BK)(n)}}});function w(e){e.__source="src/views/gpumarket/mydevice/components/Access.vue"}var b=n(83744);"function"===typeof w&&w(h);const y=(0,b.Z)(h,[["render",u]]);var x=y},2289:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(27750),i=n(15659),s=(n(3241),n(10444),n(57534)),l=(n(92471),n(31452)),r=(n(68445),n(66252));const o={class:"bottom"};function u(e,t,n,u,c,d){const p=(0,r.up)("vab-icon"),m=l.E2,f=s.Ks,v=(0,r.up)("vab-chart"),g=(0,r.up)("vab-count"),_=i.ElButton,h=a.Z;return(0,r.wg)(),(0,r.j4)(h,{class:"authorization",shadow:"hover",skeleton:""},{header:(0,r.w5)((()=>[(0,r.Wm)(p,{icon:"bar-chart-2-line"}),(0,r.Uk)(" 任务统计 "),(0,r.Wm)(f,{class:"card-header-tag card-header-tag-nobackground",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("日")])),_:1}),(0,r.Wm)(m,{type:"waring"},{default:(0,r.w5)((()=>[(0,r.Uk)("周")])),_:1}),(0,r.Wm)(m,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("月")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(v,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,r._)("div",o,[(0,r._)("span",null,[(0,r.Uk)(" 获得算力: "),(0,r.Wm)(g,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"]),(0,r.Wm)(f,{class:"card-footer-tag card-footer-tag-more"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{type:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("算力明细")])),_:1})])),_:1})])])])),_:1})}var c=n(96486),d=n.n(c),p=n(4901),m=n(4856),f=n(90178),v=n(2262),g=n(47720),_=n(22201),h=(0,r.aZ)({name:"Authorization",components:{VabChart:p["default"],VabCount:m["default"]},setup(){const e=(0,f.F)(),{echartsGraphic2:t}=(0,g.Jk)(e),n=(0,v.qj)({timer:null,n:5,countConfig:{startVal:0,endVal:d().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22],itemStyle:{borderRadius:[2,2,0,0],color:new p["default"].graphic.LinearGradient(0,0,0,1,t.value.map(((e,t)=>({color:e,offset:t}))))}}]}});return(0,r.YP)((()=>t.value),(()=>{n.option.series[0].itemStyle.color=new p["default"].graphic.LinearGradient(0,0,0,1,t.value.map(((e,t)=>({color:e,offset:t}))))})),(0,_.iS)(((e,t,a)=>{clearInterval(n.timer),a()})),(0,r.bv)((()=>{n.timer=setInterval((()=>{n.n>0?n.n--:(n.option.series[0].type=d().sample(d().pull(["bar","line","scatter"],n.option.series[0].type)),n.n=5)}),1e3)})),{...(0,v.BK)(n)}}});function w(e){e.__source="src/views/gpumarket/mydevice/components/Authorization.vue"}var b=n(83744);"function"===typeof w&&w(h);const y=(0,b.Z)(h,[["render",u]]);var x=y},83300:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(27750),i=n(10475),s=(n(3241),n(29290),n(15659)),l=(n(10444),n(12694)),r=(n(85418),n(86398)),o=(n(69448),n(57534)),u=(n(92471),n(34545)),c=(n(8780),n(66252)),d=n(3577),p=n(2262);const m=e=>((0,c.dD)("data-v-49c04df7"),e=e(),(0,c.Cn)(),e),f={class:"table"},v=m((()=>(0,c._)("td",null,"设备名称",-1))),g=m((()=>(0,c._)("td",null,"状态",-1))),_=m((()=>(0,c._)("tr",null,[(0,c._)("td",null,"GPU"),(0,c._)("td",null,"V100-SXM2-32GB * 4"),(0,c._)("td",null,"CPU"),(0,c._)("td",null,"AMD 2068V")],-1))),h=m((()=>(0,c._)("tr",null,[(0,c._)("td",null,"内存"),(0,c._)("td",null,"1024G"),(0,c._)("td",null,"硬盘"),(0,c._)("td",null,"SSD 4T")],-1))),w=m((()=>(0,c._)("tr",null,[(0,c._)("td",null,"其它"),(0,c._)("td",{colspan:"3"},"Windows 11，IB卡 * 4")],-1))),b=m((()=>(0,c._)("tr",null,[(0,c._)("td",null,"网络"),(0,c._)("td",{colspan:"3"},"电信 - 中国 广东省 广州市")],-1))),y=m((()=>(0,c._)("tr",null,[(0,c._)("td",null,"租金设置"),(0,c._)("td",null,"20元/时 3360元/周 45000元/月"),(0,c._)("td",null,"方式"),(0,c._)("td",null,"整租")],-1))),x=m((()=>(0,c._)("td",null,"下架时间",-1))),k=m((()=>(0,c._)("td",null,"剩余6个月04天",-1))),W=m((()=>(0,c._)("td",null,"评分",-1))),C=m((()=>(0,c._)("td",null,"操作",-1))),U={colspan:"3"};var j=(0,c.aZ)({__name:"VersionInformation",setup(e){const{dependencies:t,devDependencies:n,lastBuildTime:m,version:j}={name:"admin-plus",version:"12.9.5",private:!0,author:"vue-admin-better",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build","test:unit":"vue-cli-service test:unit --detectOpenHandles",lint:"vue-cli-service lint","build:report":"vue-cli-service build --report","build:test":"vue-cli-service build --mode test","global:install":"npm install -g nrm,cnpm,npm-check-updates,rimraf --registry=https://registry.npmmirror.com","globle:update":"ncu -g","lint:eslint":"eslint {src,mock,library}/**/*.{vue,js,ts} --fix","lint:prettier":"prettier {src,mock,library}/**/*.{html,vue,css,sass,scss,js,ts,md} --write","lint:stylelint":"stylelint {src,mock,library}/**/*.{vue,css,sass,scss} --fix --cache --cache-location node_modules/.cache/stylelint/","module:install":"pnpm install","module:reinstall":"rimraf node_modules&&npm run module:install","module:update":"ncu -u --reject chalk --registry=https://registry.npmmirror.com&&npm run module:install","nrm:npm":"nrm use npm","nrm:taobao":"nrm use taobao",template:"plop",git:"start ./git.sh"},dependencies:{"@element-plus/icons-vue":"^2.1.0","@logicflow/core":"^1.2.12","@logicflow/extension":"^1.2.13","@vueuse/core":"^10.4.1","@vueuse/head":"^1.3.1","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@yeger/vue-masonry-wall":"^5.0.2",ajv:"^6.12.6",axios:"^1.5.0","core-js":"^3.32.1",dayjs:"^1.11.9","decimal.js":"^10.4.3",downloadjs:"^1.4.7",downscale:"^1.0.6",echarts:"^5.4.3","element-plus":"^2.3.12","file-saver":"^2.0.5","image-conversion":"^2.1.1","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsencrypt:"^3.3.2",lodash:"^4.17.21",mitt:"^3.0.1",mockjs:"^1.1.0",nprogress:"^0.2.0","path-browserify":"^1.0.1",picocolors:"^1.0.0",pinia:"^2.1.6",qs:"^6.11.2","register-service-worker":"^1.7.2","resize-detector":"^0.3.0",sortablejs:"^1.15.0",swiper:"^11.0.3","vab-icons":"file:vab-icons",vue:"^3.3.4","vue-advanced-cropper":"^2.8.8","vue-i18n":"^9.3.0","vue-json-viewer":"^3.0.4","vue-masonry-wall":"^0.3.2","vue-popper":"^0.3.8","vue-qr":"^4.0.9","vue-router":"^4.2.4","vue-waterfall-plugin-next":"^2.2.4",vuedraggable:"^4.0.1",xlsx:"0.18.5"},devDependencies:{"@babel/core":"^7.22.15","@rushstack/eslint-patch":"^1.3.3","@types/file-saver":"^2.0.5","@types/js-cookie":"^3.0.3","@types/lodash-es":"^4.17.9","@types/node":"^20.5.9","@types/nprogress":"^0.2.0","@unocss/webpack":"^0.57.2","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-plugin-pwa":"^5.0.8","@vue/cli-plugin-router":"^5.0.8","@vue/cli-plugin-typescript":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/eslint-config-prettier":"^8.0.0","@vue/eslint-config-typescript":"^11.0.3","@vue/test-utils":"^2.4.1","body-parser":"^1.20.2","call-rely":"^1.3.2",chalk:"4.1.2",chokidar:"^3.5.3","compression-webpack-plugin":"^10.0.0",eslint:"^8.48.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-vue":"^9.17.0","filemanager-webpack-plugin":"^8.0.0","image-webpack-loader":"^8.1.0","lint-staged":"^14.0.1",plop:"^4.0.0","plop-templates":"^0.0.9","postcss-html":"^1.5.0",prettier:"^3.0.3","raw-loader":"^4.0.2",sass:"^1.66.1","sass-loader":"^13.3.2",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^13.0.0","stylelint-config-recommended-vue":"^1.5.0","svg-sprite-loader":"^6.0.11",typescript:"^5.2.2",unocss:"^0.57.2","unplugin-auto-import":"^0.16.6","unplugin-element-plus":"^0.8.0","unplugin-vue-components":"^0.25.2","unplugin-vue-define-options":"^1.3.17","vue-eslint-parser":"^9.3.1","vue-global-api":"^0.4.1","vue-unplugins":"^1.0.6",webpack:"^5.88.2",webpackbar:"^5.0.2"},gitHooks:{"pre-commit":"lint-staged"},homepage:"https://chu1204505056.gitee.io/admin-plus",license:"Mozilla Public License Version 2.0","lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},participants:["FlowPeakFish"],repository:{type:"git",url:"git+https://github.com/vue-admin-beautiful/admin-plus.git"},lastBuildTime:"2023-11-16 18:54:59"};return(e,t)=>{const n=(0,c.up)("vab-icon"),V=u.$t,z=o.Ks,A=r.gi,D=l.xk,S=s.ElButton,I=i.Mr,Z=a.Z;return(0,c.wg)(),(0,c.j4)(Z,{class:"version-information",shadow:"hover"},{header:(0,c.w5)((()=>[(0,c.Wm)(n,{icon:"information-line"}),(0,c.Uk)(" 设备编号：2098498578 "),(0,c.Wm)(z,{class:"card-header-tag"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 当前版本：V"+(0,d.zw)((0,p.SU)(j))+"   部署时间："+(0,d.zw)((0,p.SU)(m))+" ",1),(0,c.Wm)(V,{content:"已升级至最新版本",placement:"top-start",trigger:"hover",width:200},{reference:(0,c.w5)((()=>[(0,c.Wm)(n,{icon:"arrow-up-line"})])),_:1})])),_:1})])),default:(0,c.w5)((()=>[(0,c.Wm)(I,null,{default:(0,c.w5)((()=>[(0,c._)("table",f,[(0,c._)("tr",null,[v,(0,c._)("td",null,[(0,c.Uk)(" 爱国者1号 "),(0,c.Wm)(n,{icon:"file-copy-2-line"})]),g,(0,c._)("td",null,[(0,c.Wm)(A,{class:"mx-1",type:"success"},{default:(0,c.w5)((()=>[(0,c.Uk)("在线")])),_:1}),(0,c.Uk)("   "),(0,c.Wm)(A,{class:"mx-1",type:"success"},{default:(0,c.w5)((()=>[(0,c.Uk)("满租")])),_:1})])]),_,h,w,b,y,(0,c._)("tr",null,[x,k,W,(0,c._)("td",null,[(0,c.Wm)(D,{"model-value":"3.8",disabled:"",size:"small","text-color":"#ff9900"})])]),(0,c._)("tr",null,[C,(0,c._)("td",U,[(0,c.Wm)(S,{type:"primary"},{default:(0,c.w5)((()=>[(0,c.Uk)("出租设置")])),_:1}),(0,c.Wm)(S,{type:"danger"},{default:(0,c.w5)((()=>[(0,c.Uk)("关机")])),_:1})])])])])),_:1})])),_:1})}}});function V(e){e.__source="src/views/gpumarket/mydevice/components/VersionInformation.vue"}var z=n(83744);"function"===typeof V&&V(j);const A=(0,z.Z)(j,[["__scopeId","data-v-49c04df7"]]);var D=A},66246:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(73632),i=(n(3241),n(74965),n(22040)),s=(n(99426),n(66252));const l={class:"index-container"};function r(e,t,n,r,o,u){const c=(0,s.up)("version-information"),d=i.Dv,p=(0,s.up)("access"),m=(0,s.up)("authorization"),f=(0,s.up)("Tabs"),v=a.dq;return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(v,{gutter:20},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{lg:12,md:24,sm:24,xl:12,xs:24},{default:(0,s.w5)((()=>[(0,s.Wm)(c)])),_:1}),(0,s.Wm)(d,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,s.w5)((()=>[(0,s.Wm)(p)])),_:1}),(0,s.Wm)(d,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1}),(0,s.Wm)(d,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,s.w5)((()=>[(0,s.Wm)(f)])),_:1})])),_:1})])}var o=n(85826),u=n(2289),c=n(83300),d=n(8964),p=(0,s.aZ)({name:"Index",components:{Access:o["default"],Authorization:u["default"],VersionInformation:c["default"],Tabs:d["default"]}});function m(e){e.__source="src/views/gpumarket/mydevice/detail.vue"}var f=n(83744);"function"===typeof m&&m(p);const v=(0,f.Z)(p,[["render",r],["__scopeId","data-v-18a2c413"]]);var g=v}}]);