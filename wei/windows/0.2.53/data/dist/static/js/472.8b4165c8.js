/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-05 15:16:32
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[472,3426,6700,5113,7842],{96545:function(e,a,t){t.d(a,{Bb:function(){return r},Ep:function(){return d},Ix:function(){return u},KG:function(){return n},My:function(){return s},Zr:function(){return p},fZ:function(){return i}});var l=t(92325),o=t(96486);function u(e,a){return(0,l.Z)({url:"/wwwapi.php?to=suanli_market&modac=device_list",method:"get",params:e})}function n(e){const a=(0,o.pickBy)(e,(e=>""!==e));return(0,l.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:a})}function p(e){return(0,l.Z)({url:"/wwwapi.php?to=suanli_device",method:"get",params:e})}function d(e){return(0,l.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function r(){return(0,l.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"get"})}function s(){return(0,l.Z)({url:"/wwwapi.php?to=models&modac=formbase",method:"get"})}function i(e){const a={...e};return e.typeid&&parseInt(e.typeid)>0?a.filter="typeid":delete a.typeid,(0,l.Z)({url:"/wwwapi.php?to=postModel",method:"get",params:a})}},83426:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var l=t(31452),o=(t(3241),t(68445),t(66252)),u={__name:"index",props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e;function u(){a("update:modelValue",t.value)}return(a,t)=>{const n=l.E2;return(0,o.wg)(),(0,o.j4)(n,{type:e.value===e.modelValue?"primary":"info",onClick:u},{default:(0,o.w5)((()=>[(0,o.WI)(a.$slots,"default")])),_:3},8,["type"])}}};function n(e){e.__source="src/components/LinkRadio/index.vue"}var p=t(83744);"function"===typeof n&&n(u);const d=(0,p.Z)(u,[["__scopeId","data-v-f4d9035e"]]);var r=d},48902:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(30032),o=(t(3241),t(91154),t(49676)),u=(t(73204),t(3837)),n=(t(81010),t(15659)),p=(t(10444),t(10661)),d=(t(35095),t(12694)),r=(t(85418),t(50363),t(66252)),s=t(3577),i=t(2262),m=t(4907);const _=e=>((0,r.dD)("data-v-9b15af6a"),e=e(),(0,r.Cn)(),e),c={class:"custom-table-container"},f=_((()=>(0,r._)("span",null,"数量",-1)));var g=(0,r.aZ)({__name:"hostTable",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change"],setup(e,{emit:a}){const t=(0,i.iH)(null),_=()=>{t.value.showDialog()};function g(e){a("change",e)}return(a,w)=>{const U=u.$Y,y=d.xk,b=p.Q0,h=(0,r.up)("vab-icon"),S=n.ElButton,v=u.eI,W=o.R,k=l.Kf;return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(k,{shadow:"hover"},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{fit:"",flexible:"",stripe:"","table-layout":"auto","row-key":"hostid",data:e.tableData,style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{fixed:"",sortable:"",prop:"host_room_str",label:"所属"}),(0,r.Wm)(U,{prop:"host_gpu_name",label:"GPU型号"}),(0,r.Wm)(U,{prop:"host_cpu_name",label:"CPU"}),(0,r.Wm)(U,{prop:"host_memony",label:"内存G",sortable:""}),(0,r.Wm)(U,{prop:"host_disk_size_str",label:"硬盘T",sortable:""}),(0,r.Wm)(U,{label:"切分租金(元/卡)",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{prop:"host_hour_fee",label:"小时",size:"small",sortable:""}),(0,r.Wm)(U,{prop:"host_daly_fee",label:"日",size:"small",sortable:""}),(0,r.Wm)(U,{prop:"host_week_fee",label:"周",size:"small",sortable:""}),(0,r.Wm)(U,{prop:"host_month_fee",label:"月",size:"small",sortable:""})])),_:1}),(0,r.Wm)(U,{label:"整机租金(元/卡)",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{prop:"host_daly_fee_w",label:"日",size:"small",sortable:""}),(0,r.Wm)(U,{prop:"host_week_fee_w",label:"周",size:"small",sortable:""}),(0,r.Wm)(U,{prop:"host_month_fee_w",label:"月",size:"small",sortable:""})])),_:1}),(0,r.Wm)(U,{label:"评分",sortable:"",prop:"rate"},{default:(0,r.w5)((e=>[(0,r.Wm)(y,{modelValue:e.row.host_rate,"onUpdate:modelValue":a=>e.row.host_rate=a,disabled:"",size:"small","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,r.Wm)(U,{prop:"host_off_time_str",label:"可租",sortable:""}),(0,r.Wm)(U,{prop:"gpuNum",width:"100"},{header:(0,r.w5)((e=>[(0,r.Wm)(b,{content:"可用GPU数量",placement:"top"},{default:(0,r.w5)((()=>[f])),_:1})])),default:(0,r.w5)((({row:e})=>[e.host_rent_method>0?((0,r.wg)(),(0,r.j4)(b,{key:0,content:"整租",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{icon:"databricks","is-custom-svg":""})])),_:1})):((0,r.wg)(),(0,r.j4)(b,{key:1,content:"可切分出租",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{icon:"slice-line"})])),_:1})),(0,r.Uk)(" "+(0,s.zw)(e.rent_status_string),1)])),_:1}),(0,r.Wm)(U,{fixed:"right",label:"操作"},{default:(0,r.w5)((e=>[(0,r.Wm)(S,{type:"primary",onClick:_},{default:(0,r.w5)((()=>[(0,r.Uk)("租赁")])),_:1})])),_:1})])),_:1},8,["data"]),(0,r.Wm)(W,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:g},null,8,["current-page","page-size","total"])])),_:1}),(0,r.Wm)((0,i.SU)(m["default"]),{ref_key:"dialogRef",ref:t},null,512)])}}});function w(e){e.__source="src/views/gpumarket/hosts/components/hostTable.vue"}var U=t(83744);"function"===typeof w&&w(g);const y=(0,U.Z)(g,[["__scopeId","data-v-9b15af6a"]]);var b=y},86400:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var l=t(4350),o=(t(3241),t(91103),t(7608)),u=t(49927),n=t(83396),p=(t(48157),t(74741),t(20129)),d=(t(69840),t(15659)),r=(t(10444),t(6589),t(91194)),s=(t(2993),t(32590),t(66252)),i=t(2262),m=t(49963),_=t(3577),c=t(48902),f=t(83426),g=t(96545);const w={class:"host-market-container"};var U={__name:"index",setup(e){const a={gpu_list:"",gpu_count:"",gpu_rent_type:"",gpu_rent_method:"",gpu_belong_type:"",gpu_net_type:"",gpu_address_rand:""},t=(0,i.qj)({collapseNames:[],loading:!1,list:[],queryForm:{page:1},bodyForm:{...a},pagination:{pageSize:1,total:1}}),{loading:U,queryForm:y,pagination:b}=(0,i.BK)(t),h=(0,i.iH)({gpu_list:[],gpu_count:[],gpu_rent_type:[],gpu_rent_method:[],gpu_belong_type:[],gpu_net_type:[],gpu_address_rand:[]}),S=(0,s.Fl)((()=>t.list.map((e=>(e.host_rate=parseInt(e.host_rate),e)))));function v(){t.collapseNames.length>0?t.collapseNames=[]:t.collapseNames=["form"]}function W(){t.bodyForm={...a}}function k(e){t.queryForm.page=e,V()}async function V(){try{t.loading=!0;let e={...t.bodyForm};0===t.collapseNames.length&&(e={gpu_list:e.gpu_list});const{body:{search:a,list:l,page_perpage:o,page_allcount:u}}=await(0,g.Ix)(t.queryForm,e);h.value=a,t.list=l||[],t.pagination.pageSize=parseInt(o),t.pagination.total=parseInt(u)}catch(e){console.log(e)}finally{t.loading=!1}}return(0,s.bv)((()=>{V()})),(e,a)=>{const g=r.QQ,z=r.Lf,Z=p.nH,C=d.ElButton,D=p.ly,j=n.aE,x=n.PH,I=u.Z,N=o.Z,F=l.t;return(0,s.wg)(),(0,s.iD)("div",w,[(0,s.Wm)(N,{class:"page-header"},{default:(0,s.w5)((()=>[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Wm)(x,{modelValue:(0,i.SU)(t).collapseNames,"onUpdate:modelValue":a[13]||(a[13]=e=>(0,i.SU)(t).collapseNames=e),class:"custom-collapse"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{name:"form",size:"small"},{title:(0,s.w5)((()=>[(0,s.Wm)(D,{inline:"",onClick:a[2]||(a[2]=(0,m.iM)((()=>{}),["stop"]))},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,{size:"small",class:""},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{label:"GPU型号"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_list,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,i.SU)(y).gpu_list=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("所有")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_list,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e.gpu_id,modelValue:(0,i.SU)(y).gpu_list,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,i.SU)(y).gpu_list=e),value:e.gpu_id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e.gpu_name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1})])),_:1})])),_:1}),(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{type:"primary",style:{"margin-left":"5em"},onClick:V},{default:(0,s.w5)((()=>[(0,s.Uk)(" 搜索 ")])),_:1}),(0,s.Wm)(C,{plain:"",type:"primary",onClick:W},{default:(0,s.w5)((()=>[(0,s.Uk)(" 重置 ")])),_:1}),(0,s.Wm)(C,{plain:"",type:"primary",onClick:v},{default:(0,s.w5)((()=>[(0,s.Uk)(" 高级搜索 ")])),_:1})])),_:1})])),_:1})])),default:(0,s.w5)((()=>[(0,s.Wm)(z,{column:3,size:"small"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{span:"3",label:"GPU数量"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_count,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,i.SU)(y).gpu_count=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("不限")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_count,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e,modelValue:(0,i.SU)(y).gpu_count,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,i.SU)(y).gpu_count=e),value:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,s.Wm)(g,{span:"3",label:"租赁方式"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_rent_type,"onUpdate:modelValue":a[5]||(a[5]=e=>(0,i.SU)(y).gpu_rent_type=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("不限")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_rent_type,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e.id,modelValue:(0,i.SU)(y).gpu_rent_type,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,i.SU)(y).gpu_rent_type=e),value:e.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,s.Wm)(g,{span:"3",label:"主机所属"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_belong_type,"onUpdate:modelValue":a[7]||(a[7]=e=>(0,i.SU)(y).gpu_belong_type=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("不限")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_belong_type,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e.id,modelValue:(0,i.SU)(y).gpu_belong_type,"onUpdate:modelValue":a[8]||(a[8]=e=>(0,i.SU)(y).gpu_belong_type=e),value:e.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,s.Wm)(g,{span:"3",label:"通信网络"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_net_type,"onUpdate:modelValue":a[9]||(a[9]=e=>(0,i.SU)(y).gpu_net_type=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("所有")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_net_type,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e.id,modelValue:(0,i.SU)(y).gpu_net_type,"onUpdate:modelValue":a[10]||(a[10]=e=>(0,i.SU)(y).gpu_net_type=e),value:e.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1}),(0,s.Wm)(g,{span:"3",label:"所处地区"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(f["default"]),{modelValue:(0,i.SU)(y).gpu_address_rand,"onUpdate:modelValue":a[11]||(a[11]=e=>(0,i.SU)(y).gpu_address_rand=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("所有")])),_:1},8,["modelValue"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(h).gpu_address_rand,(e=>((0,s.wg)(),(0,s.j4)((0,i.SU)(f["default"]),{key:e.id,modelValue:(0,i.SU)(y).gpu_address_rand,"onUpdate:modelValue":a[12]||(a[12]=e=>(0,i.SU)(y).gpu_address_rand=e),value:e.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(e.name),1)])),_:2},1032,["modelValue","value"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,s.wy)((0,s.Wm)((0,i.SU)(c["default"]),{"table-data":(0,i.SU)(S),page:(0,i.SU)(y).page,pagination:(0,i.SU)(b),onChange:k},null,8,["table-data","page","pagination"]),[[F,(0,i.SU)(U)]])])}}};function y(e){e.__source="src/views/gpumarket/hosts/index.vue"}var b=t(83744);"function"===typeof y&&y(U);const h=(0,b.Z)(U,[["__scopeId","data-v-c680db50"]]);var S=h},49927:function(e,a,t){t.d(a,{Z:function(){return i}});var l=t(22040),o=(t(3241),t(99426),t(66252));const u={class:"top-panel"};function n(e,a){const t=l.Dv;return(0,o.wg)(),(0,o.j4)(t,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.WI)(e.$slots,"default")])])),_:3})}function p(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var d=t(83744);const r={};"function"===typeof p&&p(r);const s=(0,d.Z)(r,[["render",n]]);var i=s}}]);