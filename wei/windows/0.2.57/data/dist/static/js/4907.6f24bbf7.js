/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 10:34:17
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4907],{4907:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var l=t(15659),o=(t(3241),t(10444),t(7608)),s=t(20129),r=(t(69840),t(57018)),n=(t(74367),t(10661)),u=(t(35095),t(47820)),c=(t(50986),t(61715),t(6589),t(87692)),d=(t(45393),t(22411),t(66252)),m=t(2262),i=t(86136),g=t(42785),f=t(80129),p=t.n(f),_=t(66443),b=t(20345),w=t(81095),v=t(6154);let h;const U=(0,_.kJ)(g.successCode)?[...g.successCode]:[g.successCode],W={200:"服务器成功返回请求数据",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除数据成功",400:"发出信息有误",401:"用户没有权限(令牌失效、用户名、密码错误、登录过期)",402:"令牌过期",403:"用户得到授权，但是访问是被禁止的",404:"访问资源不存在",406:"请求格式不可得",410:"请求资源被永久删除，且不会被看到",500:"服务器发生错误",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},V=e=>(e.data&&"application/x-www-form-urlencoded;charset=UTF-8"===e.headers["Content-Type"]&&(e.data=p().stringify(e.data)),g.debounce.some((a=>e.url.includes(a)))&&(h=w.gp.$baseLoading()),e),k=async({config:e,data:a,status:t,statusText:l})=>{h&&h.close();let o=a&&a[g.statusName]?a[g.statusName]:t;switch(a[g.statusName]||(o=500),U.indexOf(a[g.statusName])+1&&(o=200),o){case 200:return a;case 401:break;case 402:break;case 403:break}const s=`${a&&a[g.messageName]?a[g.messageName]:W[o]?W[o]:l}`;return w.gp.$baseMessage(s,"error","vab-hey-message-error",!1),(0,b.needErrorLog)()&&(0,b.addErrorLog)({message:s,stack:a,isRequest:!0}),Promise.reject(a)},y=v.Z.create({baseURL:g.localURL,timeout:g.requestTimeout,headers:{"Content-Type":g.contentType}});y.interceptors.request.use(V,(e=>Promise.reject(e))),y.interceptors.response.use((e=>k(e)),(e=>{const{response:a,code:t}=e;switch(t){case"ERR_CANCELED":return{};case"ECONNABORTED":return w.gp.$baseMessage("请求超时","error","vab-hey-message-error",!1),{};default:break}return void 0===a?(h&&h.close(),w.gp.$baseMessage("连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ","error","vab-hey-message-error",!1),{}):k(a)}));var q=y;function C(){return q({url:"/run",method:"post",data:["wei-docker","image_list_full"]})}const S={gpu_count:[{required:!0,message:"GPU数量必选",trigger:"change"}],host_fee:[{required:!0,message:"租赁时长必选",trigger:"change"}],image_id:[{required:!0,message:"镜像必选",trigger:"change"}],container_name:[{required:!0,message:"实例名称必填",trigger:"change"}]},D={class:"comprehensive-form-container"};var E={__name:"createDialog",setup(e,{expose:a}){const t={...S},g=(0,m.qj)({gpu_count:0,host_fee:"",image_id:"",container_name:""}),f=(0,m.qj)({dialogVisible:!1,images:[]}),{dialogVisible:p}=(0,m.BK)(f);async function _(){f.dialogVisible=!0;const{data:e}=await C();f.images=e}return a({showDialog:_}),(e,a)=>{const _=c.dn,b=c.KD,w=s.nH,v=u.BT,h=u.km,U=(0,d.up)("vab-icon"),W=n.Q0,V=r.EZ,k=s.ly,y=o.Z,q=l.ElButton;return(0,d.wg)(),(0,d.iD)("div",D,[(0,d.Wm)((0,m.SU)(i["default"]),{modelValue:(0,m.SU)(p),"onUpdate:modelValue":a[7]||(a[7]=e=>(0,m.dq)(p)?p.value=e:null),title:"创建实例",width:"600px"},{footer:(0,d.w5)((()=>[(0,d.Wm)(q,{onClick:a[5]||(a[5]=e=>p.value=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)("取 消")])),_:1}),(0,d.Wm)(q,{type:"primary",onClick:a[6]||(a[6]=e=>p.value=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 确 定 ")])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(y,null,{default:(0,d.w5)((()=>[(0,d.Wm)(k,{ref:"formRef",class:"demo-form",model:(0,m.SU)(g),rules:t},{default:(0,d.w5)((()=>[(0,d.Wm)(w,{label:"GPU数量"},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{modelValue:(0,m.SU)(g).gpu_count,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,m.SU)(g).gpu_count=e)},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{label:"1"}),(0,d.Wm)(_,{label:"2"}),(0,d.Wm)(_,{label:"4"}),(0,d.Wm)(_,{label:"8"}),(0,d.Wm)(_,{label:"整租"})])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(w,{modelValue:(0,m.SU)(g).host_fee,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,m.SU)(g).host_fee=e),label:"租赁时长"},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{modelValue:e.radio3,"onUpdate:modelValue":a[1]||(a[1]=a=>e.radio3=a)},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{label:"20元/小时/卡"}),(0,d.Wm)(_,{label:"3300元/周/卡"}),(0,d.Wm)(_,{label:"46000元/月/卡"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,d.Wm)(w,{label:"选择镜像"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{modelValue:(0,m.SU)(g).image_id,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,m.SU)(g).image_id=e),filterable:"",placeholder:"选镜像",class:"container-name"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,m.SU)(f).images,(e=>((0,d.wg)(),(0,d.j4)(v,{key:e.ImageID,label:e.Repository,value:e.ImageID},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(W,{effect:"dark",content:"先在镜像市场中找到对应镜像，然后添加收藏，之后才可以在这里看到",placement:"top",class:"mx-1"},{default:(0,d.w5)((()=>[(0,d.Wm)(U,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(w,{label:"实例名称"},{default:(0,d.w5)((()=>[(0,d.Wm)(V,{modelValue:(0,m.SU)(g).container_name,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,m.SU)(g).container_name=e),placeholder:"创建完成后好在“我的实例”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["modelValue"])])}}};function N(e){e.__source="src/views/gpumarket/hosts/components/createDialog.vue"}var R=t(83744);"function"===typeof N&&N(E);const T=(0,R.Z)(E,[["__scopeId","data-v-006a7cf8"]]);var x=T},7608:function(e,a,t){t.d(a,{Z:function(){return d}});var l=t(73632),o=(t(3241),t(74965),t(66252));function s(e,a){const t=l.dq;return(0,o.wg)(),(0,o.j4)(t,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var n=t(83744);const u={};"function"===typeof r&&r(u);const c=(0,n.Z)(u,[["render",s],["__scopeId","data-v-172989c8"]]);var d=c}}]);