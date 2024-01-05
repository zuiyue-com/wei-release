/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-05 14:58:34
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5594],{15594:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(49676),o=(a(3241),a(73204),a(3837)),s=(a(81010),a(76128)),n=(a(74828),a(15659)),p=(a(10444),a(10661)),r=(a(35095),a(86398)),i=(a(69448),a(50363),a(66252)),c=a(3577);const w={m:"4"},m={m:"t-0 b-2"},_={m:"t-0 b-2"},u={m:"t-0 b-2"},d={m:"t-0 b-2"};var y={__name:"mydevices",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change"],setup(e,{emit:t}){function a(e){t("change",e)}return(t,y)=>{const f=(0,i.up)("vab-icon"),k=o.$Y,g=r.gi,b=p.Q0,h=n.ElButton,z=s.GT,W=o.eI,U=l.R;return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(W,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,"row-key":"host_id",class:"data-list"},{empty:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"vab-data-empty",description:"暂无实例，请到“算力市场”选择主机创建实例"})])),default:(0,i.w5)((()=>[(0,i.Wm)(k,{type:"expand",fixed:""},{default:(0,i.w5)((({row:e})=>[(0,i._)("div",w,[(0,i._)("p",m," 配置："+(0,c.zw)(e.host_gpu_name)+" * "+(0,c.zw)(e.host_cpu_count)+" CPU："+(0,c.zw)(e.host_cpu_name)+" 内存："+(0,c.zw)(e.host_memony)+" 硬盘："+(0,c.zw)(e.host_disk_type_str),1),(0,i._)("p",_," 租金："+(0,c.zw)(e.host_hour_fee)+"元/时 "+(0,c.zw)(e.host_week_fee)+"元/周 "+(0,c.zw)(e.host_month_fee)+"元/月 ",1),(0,i._)("p",u," 网络："+(0,c.zw)(e.host_wan_ip)+" "+(0,c.zw)(e.host_lan_ip)+" "+(0,c.zw)(e.host_net_type_str)+" - ?????? ",1),(0,i._)("p",d,[(0,i.Uk)(" SSH链接: 187.122.33.2:2133 "),(0,i.Wm)(f,{icon:"file-copy-2-line"}),(0,i.Uk)(" 账号：root 密码：SD******SDF "),(0,i.Wm)(f,{icon:"file-copy-2-line"})])])])),_:1}),(0,i.Wm)(k,{label:"分组",prop:"group",sortable:""}),(0,i.Wm)(k,{label:"主机ID",prop:"date"},{default:(0,i.w5)((e=>[1==e.row.local?((0,i.wg)(),(0,i.j4)(f,{key:0,icon:"map-pin-line",style:{color:"rgb(54, 203, 203)"}})):(0,i.kq)("",!0),0==e.row.local?((0,i.wg)(),(0,i.j4)(f,{key:1,icon:"cloud-line",style:{color:"rgb(54, 203, 203)"}})):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,c.zw)(e.row.date)+" ",1),(0,i.Wm)(f,{icon:"file-copy-2-line"})])),_:1}),(0,i.Wm)(k,{label:"别名",prop:"name"},{default:(0,i.w5)((e=>[(0,i.Uk)((0,c.zw)(e.row.name)+" ",1),(0,i.Wm)(f,{icon:"pencil-line"})])),_:1}),(0,i.Wm)(k,{label:"GPU",prop:"name"},{default:(0,i.w5)((({row:e})=>[(0,i.Uk)((0,c.zw)(e.host_gpu_name)+" * "+(0,c.zw)(e.host_cpu_count),1)])),_:1}),(0,i.Wm)(k,{label:"IP",prop:"host_lan_ip"}),(0,i.Wm)(k,{label:"到期",prop:"host_off_time_str"}),(0,i.Wm)(k,{label:"状态",prop:"host_online_status"},{default:(0,i.w5)((e=>[0==e.row.city?((0,i.wg)(),(0,i.j4)(g,{key:0,class:"mx-1",type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 离线 ")])),_:1})):(0,i.kq)("",!0),1==e.row.city?((0,i.wg)(),(0,i.j4)(g,{key:1,class:"card-header-tag",type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 在线 ")])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(k,{label:"租况",prop:"rentstat"},{default:(0,i.w5)((e=>[0==e.row.rentstat?((0,i.wg)(),(0,i.j4)(g,{key:0,class:"mx-1",type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 空闲 ")])),_:1})):(0,i.kq)("",!0),1==e.row.rentstat?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Wm)(b,{class:"box-item",effect:"dark",content:"空闲1卡",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"mx-1",type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)("1")])),_:1})])),_:1}),(0,i.Uk)(" / "),(0,i.Wm)(g,{class:"mx-1",type:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("4")])),_:1})],64)):(0,i.kq)("",!0),2==e.row.rentstat?((0,i.wg)(),(0,i.j4)(g,{key:2,class:"mx-1",type:"success",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 满租 ")])),_:1})):(0,i.kq)("",!0),3==e.row.rentstat?((0,i.wg)(),(0,i.j4)(g,{key:3,class:"mx-1",type:"info",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 未上架 ")])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(k,{label:"操作",prop:"city"},{default:(0,i.w5)((e=>[(0,i.Wm)(h,{type:"primary",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("设置")])),_:1}),1!=e.row.city||0!=e.row.rentstat&&3!=e.row.rentstat?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(h,{key:0,type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 关机 ")])),_:1})),0==e.row.city?((0,i.wg)(),(0,i.j4)(h,{key:1,type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 删除 ")])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1},8,["data"]),(0,i.Wm)(U,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:a},null,8,["current-page","page-size","total"])],64)}}};function f(e){e.__source="src/views/gpumarket/mydevice/components/mydevices.vue"}var k=a(83744);"function"===typeof f&&f(y);const g=(0,k.Z)(y,[["__scopeId","data-v-1d6528d8"]]);var b=g}}]);