/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-08 15:31:15
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7361],{7361:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(3837),o=(n(3241),n(81010),n(76128)),l=(n(74828),n(15659)),c=(n(10444),n(50363),n(66252)),i=n(3577);const r={m:"4"},p={m:"t-0 b-2"},s={m:"t-0 b-2"};var _={__name:"dockerlist",props:{tableData:{type:Array,default:()=>[]}},setup(e){return(t,n)=>{const _=(0,c.up)("vab-icon"),m=a.$Y,u=l.ElButton,f=o.GT,d=a.eI;return(0,c.wg)(),(0,c.j4)(d,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,class:"data-list"},{empty:(0,c.w5)((()=>[(0,c.Wm)(f,{class:"vab-data-empty",description:"暂无实例，请到“算力市场”选择主机创建实例"})])),default:(0,c.w5)((()=>[(0,c.Wm)(m,{type:"expand",fixed:""},{default:(0,c.w5)((({row:e})=>[(0,c._)("div",r,[(0,c._)("p",p," 配置："+(0,i.zw)(e.ct_host_gpu_name)+" CPU："+(0,i.zw)(e.ct_host_cpu_name)+" 内存：DDR2 32G 硬盘："+(0,i.zw)(e.ct_host_disk_type_str)+" 租金："+(0,i.zw)(e.ct_current_rent_fee),1),(0,c._)("p",s,[(0,c.Uk)(" SSH链接: ??????????? "),(0,c.Wm)(_,{icon:"file-copy-2-line"}),(0,c.Uk)(" 账号：??? 密码：????????? "),(0,c.Wm)(_,{icon:"file-copy-2-line"})])])])),_:1}),(0,c.Wm)(m,{label:"所在主机ID",prop:"ct_connectinfo.orginInfo.id"}),(0,c.Wm)(m,{label:"实例名称",prop:"ct_connectinfo.orginInfo.names"},{default:(0,c.w5)((({row:e})=>[(0,c.Uk)((0,i.zw)(e.ct_connectinfo.orginInfo.names)+" ",1),(0,c.Wm)(_,{icon:"file-copy-2-line"})])),_:1}),(0,c.Wm)(m,{label:"实例别名",prop:"ct_name"},{default:(0,c.w5)((({row:e})=>[(0,c.Uk)((0,i.zw)(e.ct_name)+" ",1),(0,c.Wm)(_,{icon:"pencil-line"})])),_:1}),(0,c.Wm)(m,{label:"基于镜像",prop:"ct_connectinfo.orginInfo.image"}),(0,c.Wm)(m,{label:"状态",prop:"ct_connectinfo.orginInfo.status"}),(0,c.Wm)(m,{label:"到期",prop:"ct_rent_endtime_str"}),(0,c.Wm)(m,{label:"操作",prop:"truedata"},{default:(0,c.w5)((()=>[(0,c.Wm)(u,{type:"primary",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("开启")])),_:1}),(0,c.Wm)(u,{type:"warning",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("停止")])),_:1}),(0,c.Wm)(u,{type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("删除")])),_:1})])),_:1})])),_:1},8,["data"])}}};function m(e){e.__source="src/views/gpumarket/myhosts/components/dockerlist.vue"}var u=n(83744);"function"===typeof m&&m(_);const f=(0,u.Z)(_,[["__scopeId","data-v-5fe92023"]]);var d=f}}]);