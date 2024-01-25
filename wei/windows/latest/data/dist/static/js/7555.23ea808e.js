/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7555,6840,9884,1673],{60020:function(e,a,t){t.d(a,{F:function(){return s}});var n=t(54258),o=t(26010);function s(){return(0,o.Oo)()?(0,n.Z)({url:"/setting/data_read",method:"post",data:["uuid"]}):{code:200,data:"AAAAA",message:"success"}}},50232:function(e,a,t){t.d(a,{q:function(){return u}});var n=t(60020),o=t(23471),s=t(47720);const u=(0,s.Q_)("myDevice",{state:()=>({uuid:"",deviceInfo:{}}),getters:{getUUID(){return this.uuid},getClientId(){return this.deviceInfo.host_id},getDeviceInfo(){return this.deviceInfo}},actions:{isLocalDevice(e){return this.uuid===e},async loadUUID(){const{data:e}=await(0,n.F)();this.uuid=e},async loadDeviceInfo(){const{body:e}=await(0,o.Ep)(this.uuid);this.deviceInfo=e},resetDeviceInfo(){this.deviceInfo={}}}})},54258:function(e,a,t){var n=t(42785),o=t(80129),s=t.n(o),u=t(66443),i=t(20345),d=t(81095),r=t(6154);let l;const c=(0,u.kJ)(n.successCode)?[...n.successCode]:[n.successCode],v={200:"服务器成功返回请求数据",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除数据成功",400:"发出信息有误",401:"用户没有权限(令牌失效、用户名、密码错误、登录过期)",402:"令牌过期",403:"用户得到授权，但是访问是被禁止的",404:"访问资源不存在",406:"请求格式不可得",410:"请求资源被永久删除，且不会被看到",500:"本地服务器还没开启，需要客户端支持",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},f=e=>(e.data&&"application/x-www-form-urlencoded;charset=UTF-8"===e.headers["Content-Type"]&&(e.data=s().stringify(e.data)),n.debounce.some((a=>e.url.includes(a)))&&(l=d.gp.$baseLoading()),e),p=async({config:e,data:a,status:t,statusText:o})=>{l&&l.close();let s=a&&a[n.statusName]?a[n.statusName]:t;switch(c.indexOf(a[n.statusName])+1&&(s=200),s){case 200:return a;case 401:break;case 402:break;case 403:break}const u=`${a&&a[n.messageName]?a[n.messageName]:v[s]?v[s]:"本地服务未开启，无法访问"}`;return d.gp.$baseMessage(u,"error","vab-hey-message-error",!1),(0,i.needErrorLog)()&&(0,i.addErrorLog)({message:u,stack:a,isRequest:!0}),Promise.reject(a)},m=sessionStorage.getItem("server_address")||"http://127.0.0.1:1115/",_=r.Z.create({baseURL:m,timeout:n.requestTimeout,headers:{"Content-Type":n.contentType}});_.interceptors.request.use(f,(e=>Promise.reject(e))),_.interceptors.response.use((e=>p(e)),(e=>{const{response:a,code:t}=e;switch(t){case"ERR_CANCELED":return{};case"ECONNABORTED":return d.gp.$baseMessage("请求超时","error","vab-hey-message-error",!1),{};default:break}return void 0===a?(l&&l.close(),d.gp.$baseMessage("连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ","error","vab-hey-message-error",!1),{}):p(a)})),a.Z=_},48432:function(e,a,t){t.d(a,{Z:function(){return u}});t(57658);var n=t(2262),o=t(66252),s=t(26010);function u(e=!1){const a=(0,n.iH)({page:1}),t=(0,n.iH)([]),u=(0,n.qj)({pageSize:1,total:1,isFinished:!1,isLoading:!1});let i;const d=(0,o.Fl)((()=>u.isLoading?"loading":u.isFinished?"nomore":"loadmore"));function r(){return a.value.page=1,t.value=[],u.isFinished=!1,c(i)}function l(){if(!u.isFinished&&!u.isLoading)return a.value.page++,c(i)}function c(n){return i=n,u.isLoading=!0,n().then((({body:n})=>{const{list:o,page_perpage:i,page_allcount:d}=n;return e?t.value.push(...o||[]):t.value=o||[],u.pageSize=parseInt(i),u.total=parseInt(d),(0,s.Gc)(a.value.page,u.pageSize,u.total)?u.isFinished=!0:u.isFinished=!1,n})).finally((()=>{u.isLoading=!1}))}return{queryForm:a,dataList:t,pagination:u,loadMoreStatus:d,pullDownRefresh:r,reachBottom:l,loadData:c}}},96840:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var n=t(31452),o=(t(3241),t(68445),t(66252)),s={__name:"index",props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e;function s(){a("update:modelValue",t.value)}return(a,t)=>{const u=n.E2;return(0,o.wg)(),(0,o.j4)(u,{type:e.value===e.modelValue?"primary":"info",onClick:s},{default:(0,o.w5)((()=>[(0,o.WI)(a.$slots,"default")])),_:3},8,["type"])}}};function u(e){e.__source="src/components/LinkRadio/index.vue"}var i=t(83744);"function"===typeof u&&u(s);const d=(0,i.Z)(s,[["__scopeId","data-v-177f751c"]]);var r=d},75075:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var n=t(4350),o=(t(3241),t(91103),t(73632)),s=(t(74965),t(22040)),u=(t(99426),t(27750)),i=t(7608),d=t(49927),r=t(20129),l=(t(69840),t(86398)),c=(t(69448),t(15659)),v=(t(10444),t(6589),t(57018)),f=(t(74367),t(47820)),p=(t(50986),t(61715),t(66252)),m=t(2262),_=t(3577),g=t(23471),y=t(65781),h=t(23336),w=t(96840),k=t(48432),b=t(26010),U=t(50232);const S={class:"task-management-container"};var I={__name:"index",setup(e){const a=(0,U.q)(),{queryForm:t,dataList:I,pagination:W,loadData:V}=(0,k.Z)(),D=()=>({device_kind:"",key_value:""}),Z=(0,m.iH)({...D(),device_kind:"host_uuid"}),C=(0,m.iH)({...D()}),F=(0,p.Fl)((()=>I.value.map((e=>(e.format_host_uuid=(0,b.fM)(e.host_uuid,4,"***",4),e.is_local_device=a.uuid===e.host_uuid,e.is_local_device?e.link={name:"Hostsdetail"}:e.link={name:"DeviceDetail",params:{id:e.host_id}},e)))));(0,p.bv)((()=>{a.loadUUID(),N()}));const L=(0,m.iH)({}),x=(0,m.iH)({});async function N(){let e={};C.value.device_kind?e={deviceKind:C.value.device_kind,key_value:C.value.key_value}:Z.value.key_value&&(e={deviceKind:Z.value.device_kind,key_value:Z.value.key_value});const a=await V((()=>(0,g.Zr)(t.value,e)));L.value=a.statistics,x.value=a.search}function $(){C.value={...D()},t.value.page=1,N()}function q(e){e?(C.value.device_kind=e,t.value.page=1,N()):$()}function E(e){t.value.page=e,N()}return(e,a)=>{const g=f.BT,k=f.km,b=v.EZ,U=r.nH,I=c.ElButton,V=l.gi,D=r.ly,R=d.Z,j=i.Z,H=u.Z,T=s.Dv,A=o.dq,O=n.t;return(0,p.wg)(),(0,p.iD)("div",S,[(0,p.Wm)(j,{class:"page-header"},{default:(0,p.w5)((()=>[(0,p.Wm)(R,null,{default:(0,p.w5)((()=>[(0,p.Wm)(D,{inline:""},{default:(0,p.w5)((()=>[(0,p.Wm)(U,null,{default:(0,p.w5)((()=>[(0,p.Wm)(b,{modelValue:(0,m.SU)(Z).key_value,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,m.SU)(Z).key_value=e),placeholder:"请输入内容",style:{width:"420px"},clearable:""},{prepend:(0,p.w5)((()=>[(0,p.Wm)(k,{modelValue:(0,m.SU)(Z).device_kind,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,m.SU)(Z).device_kind=e),placeholder:"请选择"},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)((0,m.SU)(x),((e,a)=>((0,p.wg)(),(0,p.j4)(g,{key:a,label:e,value:a,"fit-input-width":""},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,p.Wm)(U,null,{default:(0,p.w5)((()=>[(0,p.Wm)(I,{icon:(0,m.SU)(y.Search),type:"primary",onClick:$},{default:(0,p.w5)((()=>[(0,p.Uk)(" 查询 ")])),_:1},8,["icon"]),(0,p.Wm)((0,m.SU)(w["default"]),{modelValue:(0,m.SU)(C).device_kind,"onUpdate:modelValue":[a[2]||(a[2]=e=>(0,m.SU)(C).device_kind=e),q],value:""},{default:(0,p.w5)((()=>[(0,p.Uk)(" 所有 ")])),_:1},8,["modelValue"]),(0,p.Wm)((0,m.SU)(w["default"]),{modelValue:(0,m.SU)(C).device_kind,"onUpdate:modelValue":[a[3]||(a[3]=e=>(0,m.SU)(C).device_kind=e),q],value:"offline"},{default:(0,p.w5)((()=>[(0,p.Uk)(" 离线 "),(0,p.Wm)(V,{class:"mx-1",type:"danger"},{default:(0,p.w5)((()=>[(0,p.Uk)((0,_.zw)((0,m.SU)(L).offline),1)])),_:1}),(0,p.Uk)(" 台 ")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,p.Wm)(A,{gutter:20,span:"24"},{default:(0,p.w5)((()=>[(0,p.Wm)(T,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,p.w5)((()=>[(0,p.Wm)(H,{shadow:"hover"},{default:(0,p.w5)((()=>[(0,p.wy)((0,p.Wm)((0,m.SU)(h["default"]),{page:(0,m.SU)(t).page,"table-data":(0,m.SU)(F),pagination:(0,m.SU)(W),onChangePage:E,onReload:N},null,8,["page","table-data","pagination"]),[[O,(0,m.SU)(W).isLoading]])])),_:1})])),_:1})])),_:1})])}}};function W(e){e.__source="src/views/gpumarket/mydevice/index.vue"}var V=t(83744);"function"===typeof W&&W(I);const D=(0,V.Z)(I,[["__scopeId","data-v-2be39c38"]]);var Z=D},27750:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(30032),o=(t(3241),t(91154),t(97830)),s=(t(13768),t(66252)),u=t(2262),i=t(3577),d=t(22201),r=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,u.iH)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,d.iS)(((e,t,n)=>{clearInterval(a),n()})),(a,d)=>{const r=o.vk,l=n.Kf;return(0,s.wg)(),(0,s.j4)(l,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(r,{key:0,animated:"",loading:(0,u.SU)(t),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(a.$slots,"header",{},(()=>[(0,s.Uk)((0,i.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function l(e){e.__source="library/components/VabCard/index.vue"}var c=t(83744);"function"===typeof l&&l(r);const v=(0,c.Z)(r,[["__scopeId","data-v-391150ea"]]);var f=v},49927:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(22040),o=(t(3241),t(99426),t(66252));const s={class:"top-panel"};function u(e,a){const t=n.Dv;return(0,o.wg)(),(0,o.j4)(t,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.WI)(e.$slots,"default")])])),_:3})}function i(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var d=t(83744);const r={};"function"===typeof i&&i(r);const l=(0,d.Z)(r,[["render",u]]);var c=l},7608:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(73632),o=(t(3241),t(74965),t(66252));function s(e,a){const t=n.dq;return(0,o.wg)(),(0,o.j4)(t,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function u(e){e.__source="library/components/VabQueryForm/index.vue"}var i=t(83744);const d={};"function"===typeof u&&u(d);const r=(0,i.Z)(d,[["render",s],["__scopeId","data-v-172989c8"]]);var l=r}}]);