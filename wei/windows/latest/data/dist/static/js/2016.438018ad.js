/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:00:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2016,3426,6700,7801,5822],{83426:function(e,a,l){l.r(a),l.d(a,{default:function(){return s}});var t=l(31452),o=(l(3241),l(68445),l(66252)),u={__name:"index",props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e;function u(){a("update:modelValue",l.value)}return(a,l)=>{const n=t.E2;return(0,o.wg)(),(0,o.j4)(n,{type:e.value===e.modelValue?"primary":"info",onClick:u},{default:(0,o.w5)((()=>[(0,o.WI)(a.$slots,"default")])),_:3},8,["type"])}}};function n(e){e.__source="src/components/LinkRadio/index.vue"}var p=l(83744);"function"===typeof n&&n(u);const d=(0,p.Z)(u,[["__scopeId","data-v-f4d9035e"]]);var s=d},48902:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var t=l(30032),o=(l(3241),l(91154),l(49676)),u=(l(73204),l(3837)),n=(l(81010),l(15659)),p=(l(10444),l(10661)),d=(l(35095),l(12694)),s=(l(85418),l(50363),l(66252)),_=l(3577),r=l(2262),m=l(44841);const i=e=>((0,s.dD)("data-v-9b15af6a"),e=e(),(0,s.Cn)(),e),g={class:"custom-table-container"},f=i((()=>(0,s._)("span",null,"数量",-1)));var c=(0,s.aZ)({__name:"hostTable",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change"],setup(e,{emit:a}){const l=(0,r.iH)(null),i=()=>{l.value.showDialog()};function c(e){a("change",e)}return(a,w)=>{const U=u.$Y,y=d.xk,b=p.Q0,S=(0,s.up)("vab-icon"),W=n.ElButton,h=u.eI,v=o.R,V=t.Kf;return(0,s.wg)(),(0,s.iD)("div",g,[(0,s.Wm)(V,{shadow:"hover"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{fit:"",flexible:"",stripe:"","table-layout":"auto","row-key":"hostid",data:e.tableData,style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{fixed:"",sortable:"",prop:"host_room_str",label:"所属"}),(0,s.Wm)(U,{prop:"host_gpu_name",label:"GPU型号"}),(0,s.Wm)(U,{prop:"host_cpu_name",label:"CPU"}),(0,s.Wm)(U,{prop:"host_memony",label:"内存G",sortable:""}),(0,s.Wm)(U,{prop:"host_disk_size_str",label:"硬盘T",sortable:""}),(0,s.Wm)(U,{label:"切分租金(元/卡)",size:"small"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{prop:"host_hour_fee",label:"小时",size:"small",sortable:""}),(0,s.Wm)(U,{prop:"host_daly_fee",label:"日",size:"small",sortable:""}),(0,s.Wm)(U,{prop:"host_week_fee",label:"周",size:"small",sortable:""}),(0,s.Wm)(U,{prop:"host_month_fee",label:"月",size:"small",sortable:""})])),_:1}),(0,s.Wm)(U,{label:"整机租金(元/卡)",size:"small"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{prop:"host_daly_fee_w",label:"日",size:"small",sortable:""}),(0,s.Wm)(U,{prop:"host_week_fee_w",label:"周",size:"small",sortable:""}),(0,s.Wm)(U,{prop:"host_month_fee_w",label:"月",size:"small",sortable:""})])),_:1}),(0,s.Wm)(U,{label:"评分",sortable:"",prop:"rate"},{default:(0,s.w5)((e=>[(0,s.Wm)(y,{modelValue:e.row.host_rate,"onUpdate:modelValue":a=>e.row.host_rate=a,disabled:"",size:"small","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.Wm)(U,{prop:"host_off_time_str",label:"可租",sortable:""}),(0,s.Wm)(U,{prop:"gpuNum",width:"100"},{header:(0,s.w5)((e=>[(0,s.Wm)(b,{content:"可用GPU数量",placement:"top"},{default:(0,s.w5)((()=>[f])),_:1})])),default:(0,s.w5)((({row:e})=>[e.host_rent_method>0?((0,s.wg)(),(0,s.j4)(b,{key:0,content:"整租",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{icon:"databricks","is-custom-svg":""})])),_:1})):((0,s.wg)(),(0,s.j4)(b,{key:1,content:"可切分出租",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{icon:"slice-line"})])),_:1})),(0,s.Uk)(" "+(0,_.zw)(e.rent_status_string),1)])),_:1}),(0,s.Wm)(U,{fixed:"right",label:"操作"},{default:(0,s.w5)((e=>[(0,s.Wm)(W,{type:"primary",onClick:i},{default:(0,s.w5)((()=>[(0,s.Uk)("租赁")])),_:1})])),_:1})])),_:1},8,["data"]),(0,s.Wm)(v,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:c},null,8,["current-page","page-size","total"])])),_:1}),(0,s.Wm)((0,r.SU)(m["default"]),{ref_key:"dialogRef",ref:l},null,512)])}}});function w(e){e.__source="src/views/gpumarket/hosts/components/hostTable.vue"}var U=l(83744);"function"===typeof w&&w(c);const y=(0,U.Z)(c,[["__scopeId","data-v-9b15af6a"]]);var b=y},79669:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});var t=l(4350),o=(l(3241),l(91103),l(7608)),u=l(49927),n=l(83396),p=(l(48157),l(74741),l(20129)),d=(l(69840),l(15659)),s=(l(10444),l(6589),l(91194)),_=(l(2993),l(32590),l(66252)),r=l(2262),m=l(49963),i=l(3577),g=l(48902),f=l(83426),c=l(92325);function w(e,a){return(0,c.Z)({url:"/wwwapi.php?to=suanli_market&modac=device_list",method:"get",params:e})}const U={class:"host-market-container"};var y={__name:"index",setup(e){const a={gpu_list:"",gpu_count:"",gpu_rent_type:"",gpu_rent_method:"",gpu_belong_type:"",gpu_net_type:"",gpu_address_rand:""},l=(0,r.qj)({collapseNames:[],loading:!1,list:[],queryForm:{page:1},bodyForm:{...a},pagination:{pageSize:1,total:1}}),{loading:c,queryForm:y,pagination:b}=(0,r.BK)(l),S=(0,r.iH)({gpu_list:[],gpu_count:[],gpu_rent_type:[],gpu_rent_method:[],gpu_belong_type:[],gpu_net_type:[],gpu_address_rand:[]}),W=(0,_.Fl)((()=>l.list.map((e=>(e.host_rate=parseInt(e.host_rate),e)))));function h(){l.collapseNames.length>0?l.collapseNames=[]:l.collapseNames=["form"]}function v(){l.bodyForm={...a}}function V(e){l.queryForm.page=e,k()}async function k(){try{l.loading=!0;let e={...l.bodyForm};0===l.collapseNames.length&&(e={gpu_list:e.gpu_list});const{body:{search:a,list:t,page_perpage:o,page_allcount:u}}=await w(l.queryForm,e);S.value=a,l.list=t||[],l.pagination.pageSize=parseInt(o),l.pagination.total=parseInt(u)}catch(e){console.log(e)}finally{l.loading=!1}}return(0,_.bv)((()=>{k()})),(e,a)=>{const w=s.QQ,z=s.Lf,C=p.nH,D=d.ElButton,j=p.ly,N=n.aE,x=n.PH,F=u.Z,H=o.Z,I=t.t;return(0,_.wg)(),(0,_.iD)("div",U,[(0,_.Wm)(H,{class:"page-header"},{default:(0,_.w5)((()=>[(0,_.Wm)(F,null,{default:(0,_.w5)((()=>[(0,_.Wm)(x,{modelValue:(0,r.SU)(l).collapseNames,"onUpdate:modelValue":a[13]||(a[13]=e=>(0,r.SU)(l).collapseNames=e),class:"custom-collapse"},{default:(0,_.w5)((()=>[(0,_.Wm)(N,{name:"form",size:"small"},{title:(0,_.w5)((()=>[(0,_.Wm)(j,{inline:"",onClick:a[2]||(a[2]=(0,m.iM)((()=>{}),["stop"]))},{default:(0,_.w5)((()=>[(0,_.Wm)(C,null,{default:(0,_.w5)((()=>[(0,_.Wm)(z,{size:"small",class:""},{default:(0,_.w5)((()=>[(0,_.Wm)(w,{label:"GPU型号"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_list,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,r.SU)(y).gpu_list=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("所有")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_list,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e.gpu_id,modelValue:(0,r.SU)(y).gpu_list,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,r.SU)(y).gpu_list=e),value:e.gpu_id},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e.gpu_name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1})])),_:1})])),_:1}),(0,_.Wm)(C,null,{default:(0,_.w5)((()=>[(0,_.Wm)(D,{type:"primary",style:{"margin-left":"5em"},onClick:k},{default:(0,_.w5)((()=>[(0,_.Uk)(" 搜索 ")])),_:1}),(0,_.Wm)(D,{plain:"",type:"primary",onClick:v},{default:(0,_.w5)((()=>[(0,_.Uk)(" 重置 ")])),_:1}),(0,_.Wm)(D,{plain:"",type:"primary",onClick:h},{default:(0,_.w5)((()=>[(0,_.Uk)(" 高级搜索 ")])),_:1})])),_:1})])),_:1})])),default:(0,_.w5)((()=>[(0,_.Wm)(z,{column:3,size:"small"},{default:(0,_.w5)((()=>[(0,_.Wm)(w,{span:"3",label:"GPU数量"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_count,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,r.SU)(y).gpu_count=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("不限")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_count,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e,modelValue:(0,r.SU)(y).gpu_count,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,r.SU)(y).gpu_count=e),value:e},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,_.Wm)(w,{span:"3",label:"租赁方式"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_rent_type,"onUpdate:modelValue":a[5]||(a[5]=e=>(0,r.SU)(y).gpu_rent_type=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("不限")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_rent_type,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e.id,modelValue:(0,r.SU)(y).gpu_rent_type,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,r.SU)(y).gpu_rent_type=e),value:e.id},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,_.Wm)(w,{span:"3",label:"主机所属"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_belong_type,"onUpdate:modelValue":a[7]||(a[7]=e=>(0,r.SU)(y).gpu_belong_type=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("不限")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_belong_type,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e.id,modelValue:(0,r.SU)(y).gpu_belong_type,"onUpdate:modelValue":a[8]||(a[8]=e=>(0,r.SU)(y).gpu_belong_type=e),value:e.id},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,_.Wm)(w,{span:"3",label:"通信网络"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_net_type,"onUpdate:modelValue":a[9]||(a[9]=e=>(0,r.SU)(y).gpu_net_type=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("所有")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_net_type,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e.id,modelValue:(0,r.SU)(y).gpu_net_type,"onUpdate:modelValue":a[10]||(a[10]=e=>(0,r.SU)(y).gpu_net_type=e),value:e.id},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,_.Wm)(w,{span:"3",label:"所处地区"},{default:(0,_.w5)((()=>[(0,_.Wm)((0,r.SU)(f["default"]),{modelValue:(0,r.SU)(y).gpu_address_rand,"onUpdate:modelValue":a[11]||(a[11]=e=>(0,r.SU)(y).gpu_address_rand=e)},{default:(0,_.w5)((()=>[(0,_.Uk)("所有")])),_:1},8,["modelValue"]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)((0,r.SU)(S).gpu_address_rand,(e=>((0,_.wg)(),(0,_.j4)((0,r.SU)(f["default"]),{key:e.id,modelValue:(0,r.SU)(y).gpu_address_rand,"onUpdate:modelValue":a[12]||(a[12]=e=>(0,r.SU)(y).gpu_address_rand=e),value:e.id},{default:(0,_.w5)((()=>[(0,_.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,_.wy)((0,_.Wm)((0,r.SU)(g["default"]),{"table-data":(0,r.SU)(W),page:(0,r.SU)(y).page,pagination:(0,r.SU)(b),onChange:V},null,8,["table-data","page","pagination"]),[[I,(0,r.SU)(c)]])])}}};function b(e){e.__source="src/views/gpumarket/hosts/index.vue"}var S=l(83744);"function"===typeof b&&b(y);const W=(0,S.Z)(y,[["__scopeId","data-v-c680db50"]]);var h=W},49927:function(e,a,l){l.d(a,{Z:function(){return r}});var t=l(22040),o=(l(3241),l(99426),l(66252));const u={class:"top-panel"};function n(e,a){const l=t.Dv;return(0,o.wg)(),(0,o.j4)(l,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.WI)(e.$slots,"default")])])),_:3})}function p(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var d=l(83744);const s={};"function"===typeof p&&p(s);const _=(0,d.Z)(s,[["render",n]]);var r=_}}]);