/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:38:19
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7842,6700,5113],{48902:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var l=t(30032),o=(t(3241),t(91154),t(49676)),s=(t(73204),t(3837)),r=(t(81010),t(15659)),p=(t(10444),t(10661)),n=(t(35095),t(12694)),m=(t(85418),t(50363),t(66252)),u=t(3577),i=t(2262),_=t(4907);const d=e=>((0,m.dD)("data-v-9b15af6a"),e=e(),(0,m.Cn)(),e),b={class:"custom-table-container"},f=d((()=>(0,m._)("span",null,"数量",-1)));var c=(0,m.aZ)({__name:"hostTable",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change"],setup(e,{emit:a}){const t=(0,i.iH)(null),d=()=>{t.value.showDialog()};function c(e){a("change",e)}return(a,h)=>{const w=s.$Y,W=n.xk,g=p.Q0,k=(0,m.up)("vab-icon"),y=r.ElButton,z=s.eI,v=o.R,U=l.Kf;return(0,m.wg)(),(0,m.iD)("div",b,[(0,m.Wm)(U,{shadow:"hover"},{default:(0,m.w5)((()=>[(0,m.Wm)(z,{fit:"",flexible:"",stripe:"","table-layout":"auto","row-key":"hostid",data:e.tableData,style:{width:"100%"}},{default:(0,m.w5)((()=>[(0,m.Wm)(w,{fixed:"",sortable:"",prop:"host_room_str",label:"所属"}),(0,m.Wm)(w,{prop:"host_gpu_name",label:"GPU型号"}),(0,m.Wm)(w,{prop:"host_cpu_name",label:"CPU"}),(0,m.Wm)(w,{prop:"host_memony",label:"内存G",sortable:""}),(0,m.Wm)(w,{prop:"host_disk_size_str",label:"硬盘T",sortable:""}),(0,m.Wm)(w,{label:"切分租金(元/卡)",size:"small"},{default:(0,m.w5)((()=>[(0,m.Wm)(w,{prop:"host_hour_fee",label:"小时",size:"small",sortable:""}),(0,m.Wm)(w,{prop:"host_daly_fee",label:"日",size:"small",sortable:""}),(0,m.Wm)(w,{prop:"host_week_fee",label:"周",size:"small",sortable:""}),(0,m.Wm)(w,{prop:"host_month_fee",label:"月",size:"small",sortable:""})])),_:1}),(0,m.Wm)(w,{label:"整机租金(元/卡)",size:"small"},{default:(0,m.w5)((()=>[(0,m.Wm)(w,{prop:"host_daly_fee_w",label:"日",size:"small",sortable:""}),(0,m.Wm)(w,{prop:"host_week_fee_w",label:"周",size:"small",sortable:""}),(0,m.Wm)(w,{prop:"host_month_fee_w",label:"月",size:"small",sortable:""})])),_:1}),(0,m.Wm)(w,{label:"评分",sortable:"",prop:"rate"},{default:(0,m.w5)((e=>[(0,m.Wm)(W,{modelValue:e.row.host_rate,"onUpdate:modelValue":a=>e.row.host_rate=a,disabled:"",size:"small","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,m.Wm)(w,{prop:"host_off_time_str",label:"可租",sortable:""}),(0,m.Wm)(w,{prop:"gpuNum",width:"100"},{header:(0,m.w5)((e=>[(0,m.Wm)(g,{content:"可用GPU数量",placement:"top"},{default:(0,m.w5)((()=>[f])),_:1})])),default:(0,m.w5)((({row:e})=>[e.host_rent_method>0?((0,m.wg)(),(0,m.j4)(g,{key:0,content:"整租",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{icon:"databricks","is-custom-svg":""})])),_:1})):((0,m.wg)(),(0,m.j4)(g,{key:1,content:"可切分出租",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{icon:"slice-line"})])),_:1})),(0,m.Uk)(" "+(0,u.zw)(e.rent_status_string),1)])),_:1}),(0,m.Wm)(w,{fixed:"right",label:"操作"},{default:(0,m.w5)((e=>[(0,m.Wm)(y,{type:"primary",onClick:d},{default:(0,m.w5)((()=>[(0,m.Uk)("租赁")])),_:1})])),_:1})])),_:1},8,["data"]),(0,m.Wm)(v,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:c},null,8,["current-page","page-size","total"])])),_:1}),(0,m.Wm)((0,i.SU)(_["default"]),{ref_key:"dialogRef",ref:t},null,512)])}}});function h(e){e.__source="src/views/gpumarket/hosts/components/hostTable.vue"}var w=t(83744);"function"===typeof h&&h(c);const W=(0,w.Z)(c,[["__scopeId","data-v-9b15af6a"]]);var g=W}}]);