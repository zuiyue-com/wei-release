/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 11:44:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[19,9884,5594],{96545:function(e,t,a){a.d(t,{Bb:function(){return i},Ep:function(){return u},Ix:function(){return l},KG:function(){return r},My:function(){return c},Zr:function(){return s},fZ:function(){return p}});var n=a(92325),o=a(96486);function l(e,t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=device_list",method:"get",params:e})}function r(e){const t=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:t})}function s(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device",method:"get",params:e})}function u(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function i(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"get"})}function c(){return(0,n.Z)({url:"/wwwapi.php?to=models&modac=formbase",method:"get"})}function p(e){const t={...e};return e.typeid&&parseInt(e.typeid)>0?t.filter="typeid":delete t.typeid,(0,n.Z)({url:"/wwwapi.php?to=postModel",method:"get",params:t})}},15594:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(49676),o=(a(3241),a(73204),a(3837)),l=(a(81010),a(76128)),r=(a(74828),a(15659)),s=(a(10444),a(10661)),u=(a(35095),a(86398)),i=(a(69448),a(50363),a(66252)),c=a(3577);const p={m:"4"},d={m:"t-0 b-2"},m={m:"t-0 b-2"},w={m:"t-0 b-2"},f={m:"t-0 b-2"};var _={__name:"mydevices",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change"],setup(e,{emit:t}){function a(e){t("change",e)}return(t,_)=>{const y=(0,i.up)("vab-icon"),g=o.$Y,k=u.gi,h=s.Q0,v=r.ElButton,b=l.GT,W=o.eI,U=n.R;return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(W,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:e.tableData,"row-key":"host_id",class:"data-list"},{empty:(0,i.w5)((()=>[(0,i.Wm)(b,{class:"vab-data-empty",description:"暂无实例，请到“算力市场”选择主机创建实例"})])),default:(0,i.w5)((()=>[(0,i.Wm)(g,{type:"expand",fixed:""},{default:(0,i.w5)((({row:e})=>[(0,i._)("div",p,[(0,i._)("p",d," 配置："+(0,c.zw)(e.host_gpu_name)+" * "+(0,c.zw)(e.host_cpu_count)+" CPU："+(0,c.zw)(e.host_cpu_name)+" 内存："+(0,c.zw)(e.host_memony)+" 硬盘："+(0,c.zw)(e.host_disk_type_str),1),(0,i._)("p",m," 租金："+(0,c.zw)(e.host_hour_fee)+"元/时 "+(0,c.zw)(e.host_week_fee)+"元/周 "+(0,c.zw)(e.host_month_fee)+"元/月 ",1),(0,i._)("p",w," 网络："+(0,c.zw)(e.host_wan_ip)+" "+(0,c.zw)(e.host_lan_ip)+" "+(0,c.zw)(e.host_net_type_str)+" - ?????? ",1),(0,i._)("p",f,[(0,i.Uk)(" SSH链接: 187.122.33.2:2133 "),(0,i.Wm)(y,{icon:"file-copy-2-line"}),(0,i.Uk)(" 账号：root 密码：SD******SDF "),(0,i.Wm)(y,{icon:"file-copy-2-line"})])])])),_:1}),(0,i.Wm)(g,{label:"分组",prop:"group",sortable:""}),(0,i.Wm)(g,{label:"主机ID",prop:"date"},{default:(0,i.w5)((e=>[1==e.row.local?((0,i.wg)(),(0,i.j4)(y,{key:0,icon:"map-pin-line",style:{color:"rgb(54, 203, 203)"}})):(0,i.kq)("",!0),0==e.row.local?((0,i.wg)(),(0,i.j4)(y,{key:1,icon:"cloud-line",style:{color:"rgb(54, 203, 203)"}})):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,c.zw)(e.row.date)+" ",1),(0,i.Wm)(y,{icon:"file-copy-2-line"})])),_:1}),(0,i.Wm)(g,{label:"别名",prop:"name"},{default:(0,i.w5)((e=>[(0,i.Uk)((0,c.zw)(e.row.name)+" ",1),(0,i.Wm)(y,{icon:"pencil-line"})])),_:1}),(0,i.Wm)(g,{label:"GPU",prop:"name"},{default:(0,i.w5)((({row:e})=>[(0,i.Uk)((0,c.zw)(e.host_gpu_name)+" * "+(0,c.zw)(e.host_cpu_count),1)])),_:1}),(0,i.Wm)(g,{label:"IP",prop:"host_lan_ip"}),(0,i.Wm)(g,{label:"到期",prop:"host_off_time_str"}),(0,i.Wm)(g,{label:"状态",prop:"host_online_status"},{default:(0,i.w5)((e=>[0==e.row.city?((0,i.wg)(),(0,i.j4)(k,{key:0,class:"mx-1",type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 离线 ")])),_:1})):(0,i.kq)("",!0),1==e.row.city?((0,i.wg)(),(0,i.j4)(k,{key:1,class:"card-header-tag",type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 在线 ")])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(g,{label:"租况",prop:"rentstat"},{default:(0,i.w5)((e=>[0==e.row.rentstat?((0,i.wg)(),(0,i.j4)(k,{key:0,class:"mx-1",type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 空闲 ")])),_:1})):(0,i.kq)("",!0),1==e.row.rentstat?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Wm)(h,{class:"box-item",effect:"dark",content:"空闲1卡",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"mx-1",type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)("1")])),_:1})])),_:1}),(0,i.Uk)(" / "),(0,i.Wm)(k,{class:"mx-1",type:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("4")])),_:1})],64)):(0,i.kq)("",!0),2==e.row.rentstat?((0,i.wg)(),(0,i.j4)(k,{key:2,class:"mx-1",type:"success",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 满租 ")])),_:1})):(0,i.kq)("",!0),3==e.row.rentstat?((0,i.wg)(),(0,i.j4)(k,{key:3,class:"mx-1",type:"info",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 未上架 ")])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(g,{label:"操作",prop:"city"},{default:(0,i.w5)((e=>[(0,i.Wm)(v,{type:"primary",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("设置")])),_:1}),1!=e.row.city||0!=e.row.rentstat&&3!=e.row.rentstat?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(v,{key:0,type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 关机 ")])),_:1})),0==e.row.city?((0,i.wg)(),(0,i.j4)(v,{key:1,type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 删除 ")])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1},8,["data"]),(0,i.Wm)(U,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:a},null,8,["current-page","page-size","total"])],64)}}};function y(e){e.__source="src/views/gpumarket/mydevice/components/mydevices.vue"}var g=a(83744);"function"===typeof y&&y(_);const k=(0,g.Z)(_,[["__scopeId","data-v-1d6528d8"]]);var h=k},70019:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(4350),o=(a(3241),a(91103),a(73632)),l=(a(74965),a(22040)),r=(a(99426),a(27750)),s=a(7608),u=a(49927),i=a(20129),c=(a(69840),a(31452)),p=(a(68445),a(86398)),d=(a(69448),a(15659)),m=(a(10444),a(6589),a(57018)),w=(a(74367),a(47820)),f=(a(50986),a(61715),a(57658),a(66252)),_=a(49963),y=a(2262),g=a(3577),k=a(96545),h=a(65781),v=a(15594),b=a(22201);const W={class:"task-management-container"};var U={__name:"index",setup(e){const t=(0,y.qj)({loading:!1,list:[],statistics:{},queryForm:{page:1},pagination:{pageSize:1,total:1}}),{loading:a,statistics:U,queryForm:z,pagination:x}=(0,y.BK)(t),S=(0,b.tv)(),Z=(0,f.Fl)((()=>t.list.map((e=>e))));(0,f.bv)((()=>{j()}));const q=async e=>{S.push({name:"Hostsdetail",params:{id:e}})};function I(e){t.queryForm.page=e,j()}async function j(){try{t.loading=!0;const{body:{list:e,statistics:a,page_perpage:n,page_allcount:o}}=await(0,k.Zr)(t.queryForm);t.list=e||[],t.statistics=a,t.pagination.pageSize=parseInt(n),t.pagination.total=parseInt(o)}catch(e){console.log(e)}finally{t.loading=!1}}return(e,t)=>{const k=w.BT,b=w.km,S=m.EZ,j=i.nH,D=d.ElButton,C=p.gi,V=c.E2,F=i.ly,B=u.Z,$=s.Z,H=r.Z,E=l.Dv,P=o.dq,Q=n.t;return(0,f.wg)(),(0,f.iD)("div",W,[(0,f.Wm)($,{class:"page-header"},{default:(0,f.w5)((()=>[(0,f.Wm)(B,null,{default:(0,f.w5)((()=>[(0,f.Wm)(F,{inline:"",onSubmit:t[3]||(t[3]=(0,_.iM)((()=>{}),["prevent"]))},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(S,{modelValue:e.input9,"onUpdate:modelValue":t[1]||(t[1]=t=>e.input9=t),placeholder:"请输入内容",style:{width:"350px"}},{prepend:(0,f.w5)((()=>[(0,f.Wm)(b,{modelValue:e.select,"onUpdate:modelValue":t[0]||(t[0]=t=>e.select=t),placeholder:"请选择"},{default:(0,f.w5)((()=>[(0,f.Wm)(k,{label:"主机名",value:1}),(0,f.Wm)(k,{label:"主机ID",value:2}),(0,f.Wm)(k,{label:"显卡型号",value:3})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(D,{icon:(0,y.SU)(h.Search),type:"primary",onClick:e.queryData},{default:(0,f.w5)((()=>[(0,f.Uk)(" 查询 ")])),_:1},8,["icon","onClick"]),(0,f.Wm)(D,{type:"primary",onClick:t[2]||(t[2]=e=>q(3))},{default:(0,f.w5)((()=>[(0,f.Uk)(" 查看主机详情 ")])),_:1}),(0,f.Wm)(V,null,{default:(0,f.w5)((()=>[(0,f.Uk)(" 在线已租 "),(0,f.Wm)(C,{class:"mx-1",type:"success"},{default:(0,f.w5)((()=>[(0,f.Uk)((0,g.zw)((0,y.SU)(U).rent_in_use),1)])),_:1}),(0,f.Uk)(" 台 ")])),_:1}),(0,f.Wm)(V,null,{default:(0,f.w5)((()=>[(0,f.Uk)(" 在线空闲 "),(0,f.Wm)(C,{class:"mx-1",type:"waring"},{default:(0,f.w5)((()=>[(0,f.Uk)((0,g.zw)((0,y.SU)(U).rent_un_use),1)])),_:1}),(0,f.Uk)(" 台 ")])),_:1}),(0,f.Wm)(V,null,{default:(0,f.w5)((()=>[(0,f.Uk)(" 未上架 "),(0,f.Wm)(C,{class:"mx-1",type:"info"},{default:(0,f.w5)((()=>[(0,f.Uk)("????")])),_:1}),(0,f.Uk)(" 台 ")])),_:1}),(0,f.Wm)(V,null,{default:(0,f.w5)((()=>[(0,f.Uk)(" 离线 "),(0,f.Wm)(C,{class:"mx-1",type:"danger"},{default:(0,f.w5)((()=>[(0,f.Uk)((0,g.zw)((0,y.SU)(U).offline),1)])),_:1}),(0,f.Uk)(" 台 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,f.Wm)(P,{gutter:20,span:"24"},{default:(0,f.w5)((()=>[(0,f.Wm)(E,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,f.w5)((()=>[(0,f.Wm)(H,{shadow:"hover"},{default:(0,f.w5)((()=>[(0,f.wy)((0,f.Wm)((0,y.SU)(v["default"]),{"table-data":(0,y.SU)(Z),page:(0,y.SU)(z).page,pagination:(0,y.SU)(x),onChange:I},null,8,["table-data","page","pagination"]),[[Q,(0,y.SU)(a)]])])),_:1})])),_:1})])),_:1})])}}};function z(e){e.__source="src/views/gpumarket/mydevice/index.vue"}var x=a(83744);"function"===typeof z&&z(U);const S=(0,x.Z)(U,[["__scopeId","data-v-2cb67489"]]);var Z=S},27750:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(30032),o=(a(3241),a(91154),a(97830)),l=(a(13768),a(66252)),r=a(2262),s=a(3577),u=a(22201),i=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,r.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,u.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,u)=>{const i=o.vk,c=n.Kf;return(0,l.wg)(),(0,l.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[e.skeleton?((0,l.wg)(),(0,l.j4)(i,{key:0,animated:"",loading:(0,r.SU)(a),rows:e.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"header",{},(()=>[(0,l.Uk)((0,s.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var p=a(83744);"function"===typeof c&&c(i);const d=(0,p.Z)(i,[["__scopeId","data-v-391150ea"]]);var m=d},49927:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(22040),o=(a(3241),a(99426),a(66252));const l={class:"top-panel"};function r(e,t){const a=n.Dv;return(0,o.wg)(),(0,o.j4)(a,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o.WI)(e.$slots,"default")])])),_:3})}function s(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var u=a(83744);const i={};"function"===typeof s&&s(i);const c=(0,u.Z)(i,[["render",r]]);var p=c},7608:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(73632),o=(a(3241),a(74965),a(66252));function l(e,t){const a=n.dq;return(0,o.wg)(),(0,o.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var s=a(83744);const u={};"function"===typeof r&&r(u);const i=(0,s.Z)(u,[["render",l],["__scopeId","data-v-172989c8"]]);var c=i}}]);