/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-11 19:56:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8715,9884,7361],{96545:function(t,e,n){n.d(e,{Bb:function(){return s},Ep:function(){return i},Ix:function(){return r},KG:function(){return l},My:function(){return c},Zr:function(){return u},fZ:function(){return d}});var a=n(92325),o=n(96486);function r(t,e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_market&modac=device_list",method:"get",params:t})}function l(t){const e=(0,o.pickBy)(t,(t=>""!==t));return(0,a.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:e})}function u(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"get",params:t})}function i(t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function s(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"get"})}function c(){return(0,a.Z)({url:"/wwwapi.php?to=models&modac=formbase",method:"get"})}function d(t){const e={...t};return t.typeid&&parseInt(t.typeid)>0?e.filter="typeid":delete e.typeid,(0,a.Z)({url:"/wwwapi.php?to=postModel",method:"get",params:e})}},7361:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var a=n(3837),o=(n(3241),n(81010),n(76128)),r=(n(74828),n(15659)),l=(n(10444),n(50363),n(66252)),u=n(3577);const i={m:"4"},s={m:"t-0 b-2"},c={m:"t-0 b-2"};var d={__name:"dockerlist",props:{tableData:{type:Array,default:()=>[]}},setup(t){return(e,n)=>{const d=(0,l.up)("vab-icon"),p=a.$Y,f=r.ElButton,m=o.GT,_=a.eI;return(0,l.wg)(),(0,l.j4)(_,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:t.tableData,class:"data-list"},{empty:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"vab-data-empty",description:"暂无实例，请到“算力市场”选择主机创建实例"})])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{type:"expand",fixed:""},{default:(0,l.w5)((({row:t})=>[(0,l._)("div",i,[(0,l._)("p",s," 配置："+(0,u.zw)(t.ct_host_gpu_name)+" CPU："+(0,u.zw)(t.ct_host_cpu_name)+" 内存：DDR2 32G 硬盘："+(0,u.zw)(t.ct_host_disk_type_str)+" 租金："+(0,u.zw)(t.ct_current_rent_fee),1),(0,l._)("p",c,[(0,l.Uk)(" SSH链接: ??????????? "),(0,l.Wm)(d,{icon:"file-copy-2-line"}),(0,l.Uk)(" 账号：??? 密码：????????? "),(0,l.Wm)(d,{icon:"file-copy-2-line"})])])])),_:1}),(0,l.Wm)(p,{label:"所在主机ID",prop:"ct_connectinfo.orginInfo.id"}),(0,l.Wm)(p,{label:"实例名称",prop:"ct_connectinfo.orginInfo.names"},{default:(0,l.w5)((({row:t})=>[(0,l.Uk)((0,u.zw)(t.ct_connectinfo.orginInfo.names)+" ",1),(0,l.Wm)(d,{icon:"file-copy-2-line"})])),_:1}),(0,l.Wm)(p,{label:"实例别名",prop:"ct_name"},{default:(0,l.w5)((({row:t})=>[(0,l.Uk)((0,u.zw)(t.ct_name)+" ",1),(0,l.Wm)(d,{icon:"pencil-line"})])),_:1}),(0,l.Wm)(p,{label:"基于镜像",prop:"ct_connectinfo.orginInfo.image"}),(0,l.Wm)(p,{label:"状态",prop:"ct_connectinfo.orginInfo.status"}),(0,l.Wm)(p,{label:"到期",prop:"ct_rent_endtime_str"}),(0,l.Wm)(p,{label:"操作",prop:"truedata"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{type:"primary",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("开启")])),_:1}),(0,l.Wm)(f,{type:"warning",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("停止")])),_:1}),(0,l.Wm)(f,{type:"danger",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1})])),_:1})])),_:1},8,["data"])}}};function p(t){t.__source="src/views/gpumarket/myhosts/components/dockerlist.vue"}var f=n(83744);"function"===typeof p&&p(d);const m=(0,f.Z)(d,[["__scopeId","data-v-5fe92023"]]);var _=m},68715:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var a=n(4350),o=(n(3241),n(91103),n(73632)),r=(n(74965),n(22040)),l=(n(99426),n(27750)),u=n(7608),i=n(49927),s=n(20129),c=(n(69840),n(15659)),d=(n(10444),n(6589),n(57018)),p=(n(74367),n(47820)),f=(n(50986),n(61715),n(66252)),m=n(49963),_=n(2262),w=n(96545),y=n(7361),v=n(65781);const b={class:"task-management-container"};var g={__name:"index",setup(t){const e=(0,_.qj)({loading:!1,list:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{loading:n,queryForm:g,pagination:h}=(0,_.BK)(e),W=(0,f.Fl)((()=>e.list.map((t=>t))));async function k(){try{e.loading=!0;const{body:t}=await(0,w.Bb)(e.queryForm);e.list=t||[]}catch(t){console.log(t)}finally{e.loading=!1}}return(0,f.bv)((()=>{k()})),(t,e)=>{const w=p.BT,g=p.km,h=d.EZ,Z=s.nH,I=c.ElButton,S=s.ly,U=i.Z,x=u.Z,z=l.Z,D=r.Dv,B=o.dq,j=a.t;return(0,f.wg)(),(0,f.iD)("div",b,[(0,f.Wm)(x,{class:"page-header"},{default:(0,f.w5)((()=>[(0,f.Wm)(U,null,{default:(0,f.w5)((()=>[(0,f.Wm)(S,{inline:"",onSubmit:e[0]||(e[0]=(0,m.iM)((()=>{}),["prevent"]))},{default:(0,f.w5)((()=>[(0,f.Wm)(Z,null,{default:(0,f.w5)((()=>[(0,f.Wm)(h,{placeholder:"请输入内容",style:{width:"350px"}},{prepend:(0,f.w5)((()=>[(0,f.Wm)(g,{placeholder:"请选择"},{default:(0,f.w5)((()=>[(0,f.Wm)(w,{label:"主机ID",value:1}),(0,f.Wm)(w,{label:"实例名称",value:2})])),_:1})])),_:1})])),_:1}),(0,f.Wm)(Z,null,{default:(0,f.w5)((()=>[(0,f.Wm)(I,{icon:(0,_.SU)(v.Search),type:"primary",onClick:k},{default:(0,f.w5)((()=>[(0,f.Uk)(" 查询 ")])),_:1},8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,f.Wm)(B,{gutter:20,span:"24"},{default:(0,f.w5)((()=>[(0,f.Wm)(D,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,f.w5)((()=>[(0,f.Wm)(z,{shadow:"hover"},{default:(0,f.w5)((()=>[(0,f.wy)((0,f.Wm)((0,_.SU)(y["default"]),{"table-data":(0,_.SU)(W)},null,8,["table-data"]),[[j,(0,_.SU)(n)]])])),_:1})])),_:1})])),_:1})])}}};function h(t){t.__source="src/views/gpumarket/myhosts/index.vue"}var W=n(83744);"function"===typeof h&&h(g);const k=(0,W.Z)(g,[["__scopeId","data-v-0390d6ce"]]);var Z=k},27750:function(t,e,n){n.d(e,{Z:function(){return f}});var a=n(30032),o=(n(3241),n(91154),n(97830)),r=(n(13768),n(66252)),l=n(2262),u=n(3577),i=n(22201),s=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const n=(0,l.iH)(!0);return e=setTimeout((()=>{n.value=!1}),500),(0,i.iS)(((t,n,a)=>{clearInterval(e),a()})),(e,i)=>{const s=o.vk,c=a.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[t.skeleton?((0,r.wg)(),(0,r.j4)(s,{key:0,animated:"",loading:(0,l.SU)(n),rows:t.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r.Uk)((0,u.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(t){t.__source="library/components/VabCard/index.vue"}var d=n(83744);"function"===typeof c&&c(s);const p=(0,d.Z)(s,[["__scopeId","data-v-391150ea"]]);var f=p},49927:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(22040),o=(n(3241),n(99426),n(66252));const r={class:"top-panel"};function l(t,e){const n=a.Dv;return(0,o.wg)(),(0,o.j4)(n,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.WI)(t.$slots,"default")])])),_:3})}function u(t){t.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var i=n(83744);const s={};"function"===typeof u&&u(s);const c=(0,i.Z)(s,[["render",l]]);var d=c},7608:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(73632),o=(n(3241),n(74965),n(66252));function r(t,e){const n=a.dq;return(0,o.wg)(),(0,o.j4)(n,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{},void 0,!0)])),_:3})}function l(t){t.__source="library/components/VabQueryForm/index.vue"}var u=n(83744);const i={};"function"===typeof l&&l(i);const s=(0,u.Z)(i,[["render",r],["__scopeId","data-v-172989c8"]]);var c=s}}]);