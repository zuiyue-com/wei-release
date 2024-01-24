/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4841],{54258:function(e,a,t){var s=t(42785),o=t(80129),l=t.n(o),r=t(66443),n=t(20345),u=t(81095),c=t(6154);let d;const m=(0,r.kJ)(s.successCode)?[...s.successCode]:[s.successCode],i={200:"服务器成功返回请求数据",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除数据成功",400:"发出信息有误",401:"用户没有权限(令牌失效、用户名、密码错误、登录过期)",402:"令牌过期",403:"用户得到授权，但是访问是被禁止的",404:"访问资源不存在",406:"请求格式不可得",410:"请求资源被永久删除，且不会被看到",500:"本地服务器还没开启，需要客户端支持",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},g=e=>(e.data&&"application/x-www-form-urlencoded;charset=UTF-8"===e.headers["Content-Type"]&&(e.data=l().stringify(e.data)),s.debounce.some((a=>e.url.includes(a)))&&(d=u.gp.$baseLoading()),e),f=async({config:e,data:a,status:t,statusText:o})=>{d&&d.close();let l=a&&a[s.statusName]?a[s.statusName]:t;switch(m.indexOf(a[s.statusName])+1&&(l=200),l){case 200:return a;case 401:break;case 402:break;case 403:break}const r=`${a&&a[s.messageName]?a[s.messageName]:i[l]?i[l]:"本地服务未开启，无法访问"}`;return u.gp.$baseMessage(r,"error","vab-hey-message-error",!1),(0,n.needErrorLog)()&&(0,n.addErrorLog)({message:r,stack:a,isRequest:!0}),Promise.reject(a)},p=sessionStorage.getItem("server_address")||"http://127.0.0.1:1115/",_=c.Z.create({baseURL:p,timeout:s.requestTimeout,headers:{"Content-Type":s.contentType}});_.interceptors.request.use(g,(e=>Promise.reject(e))),_.interceptors.response.use((e=>f(e)),(e=>{const{response:a,code:t}=e;switch(t){case"ERR_CANCELED":return{};case"ECONNABORTED":return u.gp.$baseMessage("请求超时","error","vab-hey-message-error",!1),{};default:break}return void 0===a?(d&&d.close(),u.gp.$baseMessage("连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ","error","vab-hey-message-error",!1),{}):f(a)})),a.Z=_},44841:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var s=t(15659),o=(t(3241),t(10444),t(7608)),l=t(20129),r=(t(69840),t(57018)),n=(t(74367),t(10661)),u=(t(35095),t(47820)),c=(t(50986),t(61715),t(6589),t(87692)),d=(t(45393),t(22411),t(66252)),m=t(2262),i=t(86136),g=t(54258);function f(){return(0,g.Z)({url:"/run",method:"post",data:["wei-docker","image_list_full"]})}const p={gpu_count:[{required:!0,message:"GPU数量必选",trigger:"change"}],host_fee:[{required:!0,message:"租赁时长必选",trigger:"change"}],image_id:[{required:!0,message:"镜像必选",trigger:"change"}],container_name:[{required:!0,message:"容器名称必填",trigger:"change"}]},_={class:"comprehensive-form-container"};var b={__name:"createDialog",setup(e,{expose:a}){const t={...p},g=(0,m.qj)({gpu_count:0,host_fee:"",image_id:"",container_name:""}),b=(0,m.qj)({dialogVisible:!1,images:[]}),{dialogVisible:w}=(0,m.BK)(b);async function v(){b.dialogVisible=!0;const{data:e}=await f();b.images=e}return a({showDialog:v}),(e,a)=>{const f=c.dn,p=c.KD,v=l.nH,h=u.BT,U=u.km,W=(0,d.up)("vab-icon"),V=n.Q0,k=r.EZ,y=l.ly,S=o.Z,q=s.ElButton;return(0,d.wg)(),(0,d.iD)("div",_,[(0,d.Wm)((0,m.SU)(i["default"]),{modelValue:(0,m.SU)(w),"onUpdate:modelValue":a[7]||(a[7]=e=>(0,m.dq)(w)?w.value=e:null),title:"创建容器",width:"600px"},{footer:(0,d.w5)((()=>[(0,d.Wm)(q,{onClick:a[5]||(a[5]=e=>w.value=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)("取 消")])),_:1}),(0,d.Wm)(q,{type:"primary",onClick:a[6]||(a[6]=e=>w.value=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 确 定 ")])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(S,null,{default:(0,d.w5)((()=>[(0,d.Wm)(y,{ref:"formRef",class:"demo-form",model:(0,m.SU)(g),rules:t},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{label:"GPU数量"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{modelValue:(0,m.SU)(g).gpu_count,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,m.SU)(g).gpu_count=e)},{default:(0,d.w5)((()=>[(0,d.Wm)(f,{label:"1"}),(0,d.Wm)(f,{label:"2"}),(0,d.Wm)(f,{label:"4"}),(0,d.Wm)(f,{label:"8"}),(0,d.Wm)(f,{label:"整租"})])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(v,{modelValue:(0,m.SU)(g).host_fee,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,m.SU)(g).host_fee=e),label:"租赁时长"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{modelValue:e.radio3,"onUpdate:modelValue":a[1]||(a[1]=a=>e.radio3=a)},{default:(0,d.w5)((()=>[(0,d.Wm)(f,{label:"20元/小时/卡"}),(0,d.Wm)(f,{label:"3300元/周/卡"}),(0,d.Wm)(f,{label:"46000元/月/卡"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,d.Wm)(v,{label:"选择镜像"},{default:(0,d.w5)((()=>[(0,d.Wm)(U,{modelValue:(0,m.SU)(g).image_id,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,m.SU)(g).image_id=e),filterable:"",placeholder:"选镜像",class:"container-name"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,m.SU)(b).images,(e=>((0,d.wg)(),(0,d.j4)(h,{key:e.ImageID,label:e.Repository,value:e.ImageID},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(V,{effect:"dark",content:"先在镜像市场中找到对应镜像，然后添加收藏，之后才可以在这里看到",placement:"top",class:"mx-1"},{default:(0,d.w5)((()=>[(0,d.Wm)(W,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(v,{label:"容器名称"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{modelValue:(0,m.SU)(g).container_name,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,m.SU)(g).container_name=e),placeholder:"创建完成后好在“我的容器”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["modelValue"])])}}};function w(e){e.__source="src/views/gpumarket/hosts/components/createDialog.vue"}var v=t(83744);"function"===typeof w&&w(b);const h=(0,v.Z)(b,[["__scopeId","data-v-5328c59a"]]);var U=h},7608:function(e,a,t){t.d(a,{Z:function(){return d}});var s=t(73632),o=(t(3241),t(74965),t(66252));function l(e,a){const t=s.dq;return(0,o.wg)(),(0,o.j4)(t,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var n=t(83744);const u={};"function"===typeof r&&r(u);const c=(0,n.Z)(u,[["render",l],["__scopeId","data-v-172989c8"]]);var d=c}}]);