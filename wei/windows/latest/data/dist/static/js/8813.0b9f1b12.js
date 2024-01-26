/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8813],{8813:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var s=n(27750),a=n(86398),l=(n(3241),n(69448),n(57534)),o=(n(92471),n(66252)),_=n(3577),d=n(2262);const u=t=>((0,o.dD)("data-v-39e9f663"),t=t(),(0,o.Cn)(),t),r={key:0,class:"table"},i=u((()=>(0,o._)("td",null,"设备名称",-1))),c=u((()=>(0,o._)("td",null,"状态",-1))),w=u((()=>(0,o._)("td",null,"设备编号",-1))),p={colspan:"3"},f=u((()=>(0,o._)("td",null,"CPU",-1))),h={colspan:"3"},v=u((()=>(0,o._)("td",null,"GPU",-1))),y={colspan:"3"},S=u((()=>(0,o._)("td",null,"内存",-1))),U=u((()=>(0,o._)("td",null,"硬盘",-1))),m=u((()=>(0,o._)("td",null,"网络",-1))),k={colspan:"3"},z=u((()=>(0,o._)("td",null,"其它",-1))),b={colspan:"3"};var g={__name:"version_information",setup(t){const e=(0,o.f3)("deviceInfo"),n=(0,o.f3)("isLocalDevice"),u=(0,o.Fl)((()=>{const t=e.value;return t.host_rate=parseFloat(t.host_rate),t.host_online_status_type="在线"===t.host_online_status?"success":"danger",t||{}})),g=(0,o.Fl)((()=>e.value.client_hardware||{}));return(t,e)=>{const I=(0,o.up)("vab-icon"),W=l.Ks,C=a.gi,D=s.Z;return(0,o.wg)(),(0,o.j4)(D,{class:"version-information",shadow:"hover"},{header:(0,o.w5)((()=>[(0,o.Wm)(I,{icon:"information-line"}),(0,o.Uk)(" 设备："+(0,_.zw)((0,d.SU)(n)?"本机设备":"远程主机设备")+" ",1),(0,o.Wm)(W,{class:"card-header-tag"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 当前版本：V"+(0,_.zw)((0,d.SU)(u).host_version)+"   部署时间："+(0,_.zw)((0,d.SU)(u).host_add_time_str),1)])),_:1})])),default:(0,o.w5)((()=>[(0,d.SU)(u).host_name?((0,o.wg)(),(0,o.iD)("table",r,[(0,o._)("tr",null,[i,(0,o._)("td",null,(0,_.zw)((0,d.SU)(u).host_name),1),c,(0,o._)("td",null,[(0,o.Wm)(C,{class:"mx-1",type:(0,d.SU)(u).host_online_status_type},{default:(0,o.w5)((()=>[(0,o.Uk)((0,_.zw)((0,d.SU)(u).host_online_status),1)])),_:1},8,["type"])])]),(0,o._)("tr",null,[w,(0,o._)("td",p,(0,_.zw)((0,d.SU)(u).host_uuid),1)]),(0,o._)("tr",null,[f,(0,o._)("td",h,(0,_.zw)((0,d.SU)(g).cpu)+" * "+(0,_.zw)((0,d.SU)(u).host_cpu_count),1)]),(0,o._)("tr",null,[v,(0,o._)("td",y,(0,_.zw)((0,d.SU)(u).host_gpu_name)+" * "+(0,_.zw)((0,d.SU)(u).host_gpu_count),1)]),(0,o._)("tr",null,[S,(0,o._)("td",null,(0,_.zw)((0,d.SU)(u).host_memony)+"G",1),U,(0,o._)("td",null,(0,_.zw)((0,d.SU)(u).host_disk_type_str),1)]),(0,o._)("tr",null,[m,(0,o._)("td",k,(0,_.zw)((0,d.SU)(u).host_net_type_str)+" - "+(0,_.zw)((0,d.SU)(u).host_address_str)+" "+(0,_.zw)((0,d.SU)(g).ip_info?(0,d.SU)(g).ip_info.wan_ip:"")+" "+(0,_.zw)((0,d.SU)(g).lan_ip),1)]),(0,o._)("tr",null,[z,(0,o._)("td",b,[(0,o._)("div",null,(0,_.zw)((0,d.SU)(g).system),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,d.SU)(g).disks_info,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},(0,_.zw)(t.MediaType)+": "+(0,_.zw)(t.Model)+" "+(0,_.zw)(t.Size)+"G ",1)))),128))])])])):(0,o.kq)("",!0)])),_:1})}}};function I(t){t.__source="src/views/gpumarket/mydevice/components/version_information.vue"}var W=n(83744);"function"===typeof I&&I(g);const C=(0,W.Z)(g,[["__scopeId","data-v-39e9f663"]]);var D=C},27750:function(t,e,n){n.d(e,{Z:function(){return w}});var s=n(30032),a=(n(3241),n(91154),n(97830)),l=(n(13768),n(66252)),o=n(2262),_=n(3577),d=n(22201),u=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const n=(0,o.iH)(!0);return e=setTimeout((()=>{n.value=!1}),500),(0,d.iS)(((t,n,s)=>{clearInterval(e),s()})),(e,d)=>{const u=a.vk,r=s.Kf;return(0,l.wg)(),(0,l.j4)(r,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[t.skeleton?((0,l.wg)(),(0,l.j4)(u,{key:0,animated:"",loading:(0,o.SU)(n),rows:t.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"header",{},(()=>[(0,l.Uk)((0,_.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function r(t){t.__source="library/components/VabCard/index.vue"}var i=n(83744);"function"===typeof r&&r(u);const c=(0,i.Z)(u,[["__scopeId","data-v-391150ea"]]);var w=c}}]);