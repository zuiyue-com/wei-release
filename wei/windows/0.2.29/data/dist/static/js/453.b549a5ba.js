/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[453],{10453:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(3837),i=(n(3241),n(81010),n(50363),n(15659)),r=(n(10444),n(66252));const l={class:"print-container"},p=["src"],u=(0,r._)("br",null,null,-1);function s(e,t,n,s,m,c){const o=(0,r.up)("vab-icon"),d=i.ElButton,f=a.$Y,b=a.eI;return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(d,{type:"primary",onClick:t[0]||(t[0]=t=>e.print("imageRef"))},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{icon:"printer-line"}),(0,r.Uk)(" 打印图片 ")])),_:1}),(0,r.Wm)(d,{type:"primary",onClick:t[1]||(t[1]=t=>e.print("tableRef"))},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{icon:"printer-line"}),(0,r.Uk)(" 打印表格 ")])),_:1}),(0,r.Wm)(d,{type:"primary",onClick:e.remotePrint},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{icon:"printer-line"}),(0,r.Uk)(" 自定义打印 ")])),_:1},8,["onClick"]),(0,r._)("img",{ref:"imageRef",src:"https://fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg",style:{display:"block",width:"520px","margin-top":"15px"}},null,8,p),u,(0,r.Wm)(b,{ref:"tableRef",data:e.tableData,style:{width:"520px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{label:"姓名",prop:"name",width:"120px"}),(0,r.Wm)(f,{label:"地址",prop:"address"})])),_:1},8,["data"])])}var m=n(83794),c=n(2262),o=n(10844),d=(n(65109),n(22979),(0,r.aZ)({name:"Print",setup(){const e=(0,c.qj)({imageRef:null,tableRef:null,tableData:[{name:"马云",address:"上海市普陀区金沙江路"},{name:"马化腾",address:"上海市普陀区金沙江路"},{name:"李彦宏",address:"上海市普陀区金沙江路"},{name:"刘强东",address:"上海市普陀区金沙江路"}]}),t=async t=>{await(0,m.Z)(e[t])},n=()=>{o.T.prompt("","自定义打印",{inputType:"textarea",inputValue:"<h1>Vue Admin Plus</h1>\n<p>vue-admin-beautiful.com</p>",inputErrorMessage:"Invalid Email",confirmButtonText:"打印"}).then((({value:e})=>{(0,m.Z)(e)})).catch((()=>{}))};return{...(0,c.BK)(e),print:t,remotePrint:n}}}));function f(e){e.__source="src/views/other/print/index.vue"}var b=n(83744);"function"===typeof f&&f(d);const h=(0,b.Z)(d,[["render",s]]);var v=h}}]);