/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8104],{55034:function(e,t,a){a.d(t,{g8:function(){return o},gp:function(){return l},q1:function(){return u}});var n=a(52806);function l(e){return(0,n.Z)({url:"/table/getList",method:"get",params:e})}function o(e){return(0,n.Z)({url:"/table/doEdit",method:"post",data:e})}function u(e){return(0,n.Z)({url:"/table/doDelete",method:"post",data:e})}},31473:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22040),l=(a(3241),a(99426),a(66252));const o={class:"left-panel"};var u=(0,l.aZ)({__name:"VabQueryFormLeftPanel",props:{span:{type:Number,default:14}},setup(e){return(t,a)=>{const u=n.Dv;return(0,l.wg)(),(0,l.j4)(u,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.WI)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function r(e){e.__source="library/components/VabQueryForm/components/VabQueryFormLeftPanel.vue"}"function"===typeof r&&r(u);const i=u;var d=i},18838:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(73632),l=(a(3241),a(74965),a(66252));function o(e,t){const a=n.dq;return(0,l.wg)(),(0,l.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function u(e){e.__source="library/components/VabQueryForm/index.vue"}var r=a(83744);const i={};"function"===typeof u&&u(i);const d=(0,r.Z)(i,[["render",o],["__scopeId","data-v-172989c8"]]);var s=d},88104:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(4350),l=(a(3241),a(91103),a(3837)),o=(a(81010),a(57534)),u=(a(92471),a(50363),a(18838)),r=a(31473),i=a(20129),d=(a(69840),a(15659)),s=(a(10444),a(14132)),c=(a(50986),a(61715),a(6589),a(57018)),f=(a(74367),a(66252)),m=a(49963),p=a(3577);const w={class:"export-excel-container"};function h(e,t,a,h,_,b){const g=c.EZ,v=i.nH,y=s.BT,x=s.ElSelect,W=d.ElButton,k=i.ly,V=r.Z,Z=u.Z,L=l.$Y,D=o.Ks,E=l.eI,T=n.t;return(0,f.wg)(),(0,f.iD)("div",w,[(0,f.Wm)(Z,null,{default:(0,f.w5)((()=>[(0,f.Wm)(V,{span:24},{default:(0,f.w5)((()=>[(0,f.Wm)(k,{inline:"","label-width":"100px",onSubmit:t[2]||(t[2]=(0,m.iM)((()=>{}),["prevent"]))},{default:(0,f.w5)((()=>[(0,f.Wm)(v,{label:"文件名"},{default:(0,f.w5)((()=>[(0,f.Wm)(g,{modelValue:e.filename,"onUpdate:modelValue":t[0]||(t[0]=t=>e.filename=t),placeholder:"请输出要导出文件的名称"},null,8,["modelValue"])])),_:1}),(0,f.Wm)(v,{label:"文件类型"},{default:(0,f.w5)((()=>[(0,f.Wm)(x,{modelValue:e.bookType,"onUpdate:modelValue":t[1]||(t[1]=t=>e.bookType=t)},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.options,(e=>((0,f.wg)(),(0,f.j4)(y,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,f.Wm)(v,null,{default:(0,f.w5)((()=>[(0,f.Wm)(W,{type:"primary",onClick:e.handleDownload},{default:(0,f.w5)((()=>[(0,f.Uk)(" 导出 Excel ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,f.wy)(((0,f.wg)(),(0,f.j4)(E,{border:"",data:e.list},{default:(0,f.w5)((()=>[(0,f.Wm)(L,{align:"center",label:"序号",width:"55"},{default:(0,f.w5)((({$index:e})=>[(0,f.Uk)((0,p.zw)(e+1),1)])),_:1}),(0,f.Wm)(L,{align:"center",label:"标题"},{default:(0,f.w5)((({row:e})=>[(0,f.Uk)((0,p.zw)(e.title),1)])),_:1}),(0,f.Wm)(L,{align:"center",label:"作者"},{default:(0,f.w5)((({row:e})=>[(0,f.Wm)(D,null,{default:(0,f.w5)((()=>[(0,f.Uk)((0,p.zw)(e.author),1)])),_:2},1024)])),_:1}),(0,f.Wm)(L,{align:"center",label:"访问量"},{default:(0,f.w5)((({row:e})=>[(0,f.Uk)((0,p.zw)(e.pageViews),1)])),_:1}),(0,f.Wm)(L,{align:"center",label:"时间"},{default:(0,f.w5)((({row:e})=>[(0,f._)("span",null,(0,p.zw)(e.datetime),1)])),_:1})])),_:1},8,["data"])),[[T,e.listLoading]])])}var _=a(55034),b=(0,f.aZ)({name:"ExportExcel",data(){return{list:[],listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx",options:["xlsx","csv","txt"]}},created(){this.fetchData()},methods:{async fetchData(){this.listLoading=!0;const{data:{list:e}}=await(0,_.gp)();this.list=e,this.listLoading=!1},handleDownload(){this.downloadLoading=!0,Promise.all([a.e(399),a.e(3520)]).then(a.bind(a,33520)).then((e=>{const t=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageViews","datetime"],n=this.list,l=this.formatJson(a,n);e.export_json_to_excel({header:t,data:l,filename:this.filename,autoWidth:this.autoWidth,bookType:this.bookType}),this.downloadLoading=!1}))},formatJson(e,t){return t.map((t=>e.map((e=>t[e]))))}}});function g(e){e.__source="src/views/other/excel/exportExcel.vue"}var v=a(83744);"function"===typeof g&&g(b);const y=(0,v.Z)(b,[["render",h]]);var x=y}}]);