/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 13:58:32
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9120],{30301:function(e,t,n){n.d(t,{Cw:function(){return a},Q2:function(){return l},Ts:function(){return o},hX:function(){return r},ob:function(){return i}});var s=n(54258);function a(){return(0,s.Z)({url:"/run",method:"post",data:["wei-docker","download_check"]})}function r(){return(0,s.Z)({url:"/run",method:"post",data:["wei-docker","one_click"],timeout:0})}function i(){return(0,s.Z)({url:"/run",method:"post",data:["wei-docker","check"]})}function o(){return(0,s.Z)({url:"/run",method:"post",data:["wei-docker","is_installed"]})}function l(){return(0,s.Z)({url:"/run",method:"post",data:["wei-docker","uninstall"]})}},54258:function(e,t,n){var s=n(42785),a=n(80129),r=n.n(a),i=n(66443),o=n(20345),l=n(81095),u=n(6154);let c;const d=(0,i.kJ)(s.successCode)?[...s.successCode]:[s.successCode],p={200:"服务器成功返回请求数据",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除数据成功",400:"发出信息有误",401:"用户没有权限(令牌失效、用户名、密码错误、登录过期)",402:"令牌过期",403:"用户得到授权，但是访问是被禁止的",404:"访问资源不存在",406:"请求格式不可得",410:"请求资源被永久删除，且不会被看到",500:"本地服务器还没开启，需要客户端支持",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},m=e=>(e.data&&"application/x-www-form-urlencoded;charset=UTF-8"===e.headers["Content-Type"]&&(e.data=r().stringify(e.data)),s.debounce.some((t=>e.url.includes(t)))&&(c=l.gp.$baseLoading()),e),f=async({config:e,data:t,status:n,statusText:a})=>{c&&c.close();let r=t&&t[s.statusName]?t[s.statusName]:n;switch(d.indexOf(t[s.statusName])+1&&(r=200),r){case 200:return t;case 401:break;case 402:break;case 403:break}const i=`${t&&t[s.messageName]?t[s.messageName]:p[r]?p[r]:"本地服务未开启，无法访问"}`;return l.gp.$baseMessage(i,"error","vab-hey-message-error",!1),(0,o.needErrorLog)()&&(0,o.addErrorLog)({message:i,stack:t,isRequest:!0}),Promise.reject(t)},w=sessionStorage.getItem("server_address")||"http://127.0.0.1:1115/",g=u.Z.create({baseURL:w,timeout:s.requestTimeout,headers:{"Content-Type":s.contentType}});g.interceptors.request.use(m,(e=>Promise.reject(e))),g.interceptors.response.use((e=>f(e)),(e=>{const{response:t,code:n}=e;switch(n){case"ERR_CANCELED":return{};case"ECONNABORTED":return l.gp.$baseMessage("请求超时","error","vab-hey-message-error",!1),{};default:break}return void 0===t?(c&&c.close(),l.gp.$baseMessage("连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ","error","vab-hey-message-error",!1),{}):f(t)})),t.Z=g},95965:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(23279),a=n.n(s);function r(){function e(e,t=3e3){return setInterval((()=>{e()}),t)}function t(e){e&&clearInterval(e)}function n(e,t=1e4){return setTimeout((()=>{e()}),t)}function s(e,t=3e3){a()((()=>{e()}),t)()}return{startIntervalTimer:e,stopIntervalTimer:t,startTimeoutTimer:n,startDebounce:s}}},19120:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var s=n(73481),a=(n(3241),n(62029),n(73632)),r=(n(74965),n(66263)),i=(n(33790),n(50591)),o=(n(89035),n(15659)),l=(n(10444),n(22040)),u=(n(99426),n(32018)),c=(n(46160),n(27682)),d=(n(98661),n(83495),n(66252)),p=n(2262),m=n(30301),f=n(54748);function w(e){return(0,f.Z)(parseFloat(e))}var g=n(95965);const h=e=>((0,d.dD)("data-v-469b5ba6"),e=e(),(0,d.Cn)(),e),_={class:"step-form-container"},v={key:0,class:"mt-2 mb-2"},k={class:"flex w-full justify-center mb-4"},b={key:0},y={key:1},I=h((()=>(0,d._)("p",null," 1/系统在第一次初始化的时候，会自动重启一次，请在执行初始化前先保存好电脑上的资料。 ",-1))),W=h((()=>(0,d._)("p",null," 2/如果系统重启后会自动的再次进入初始化设备操作，如果没有自动运行，请手动再点一次“初始化设备”，选择继续 ",-1))),S=h((()=>(0,d._)("p",null," 3/后端服务需要开启以后才可以设置设备出租和挂机。如果您手工开启关闭麻烦，请选择开机默认开启后端服务。 ",-1)));var U={__name:"init_dialog",setup(e,{expose:t}){const{startIntervalTimer:n,stopIntervalTimer:f}=(0,g.Z)(),h=(0,d.f3)("$pub"),U=(0,d.f3)("$sub"),C=(0,d.f3)("$unsub"),T=(0,d.f3)("deviceData"),L=(0,p.iH)(!1);(0,d.Ah)((()=>{C("watch-download-progress"),C("watch-install-progress")}));const R=(0,d.Fl)((()=>{if(!T.status.file_check)return 0;const e={hyper:1,wsl:2,wsl2:3,wsl_update:4,ubuntu:5};let t=0;for(const n in e)if(T.status[n]){const s=e[n]+1;t=s>t?s:t}return T.isInstalled&&(t=6),t}));function Z(){L.value=!0,N()}function D(e){return 100===e?"下载完毕":`正在下载文件 ${T.downloadSpeed??"0 B"}/s ${e}%`}async function $(){T.isRunInit=!0,localStorage.removeItem("cancel-init-device"),T.status.file_check?h("watch-install-progress"):h("watch-download-progress"),(0,m.hX)()}function x(){T.isRunInit=!1,L.value=!1,localStorage.setItem("cancel-init-device",!0),f(T.timer)}async function E(){const{data:e}=await(0,m.Cw)(),{download_speed:t,completed_length:n,total_length:s}=e;if(n>0&&s>0){const e=Math.round(n/s*100);T.downloadPercent=e}else T.downloadPercent=0;T.downloadSpeed=w(t)||"",parseInt(n)>=parseInt(s)&&h("watch-install-progress")}async function N(){const{progress:e}=await(0,m.ob)();T.status=e}async function j(){try{T.isUnInstall=!0,await(0,m.Q2)(),T.isRunInit=!1,T.isInstalled=!1;const{progress:e}=await(0,m.ob)();T.status=e}catch(e){}finally{T.isUnInstall=!1}}return U("watch-download-progress",(()=>{f(T.timer),T.timer=n((()=>{E()}))})),U("watch-install-progress",(()=>{f(T.timer),T.timer=n((async()=>{const{progress:e}=await(0,m.ob)();if(T.status=e,T.status.ubuntu&&!T.isInstalled){const{is_installed:e}=await(0,m.Ts)();T.isInstalled=e,e&&f(T.timer)}}))})),t({showDialog:Z}),(e,t)=>{const n=c.Gg,m=c.C4,f=u.Xh,w=l.Dv,g=o.ElButton,h=i.i1,U=r.v,C=a.dq,Z=s.d0;return(0,d.wg)(),(0,d.j4)(Z,{modelValue:(0,p.SU)(L),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,p.dq)(L)?L.value=e:null),title:"初始化设备",width:"50%","close-on-click-modal":!1,"close-on-press-escape":!1},{default:(0,d.w5)((()=>[(0,d._)("div",_,[(0,d.Wm)(C,{gutter:20},{default:(0,d.w5)((()=>[(0,d.Wm)(w,null,{default:(0,d.w5)((()=>[(0,d.Wm)(m,{active:(0,p.SU)(R),"align-center":"",class:"steps"},{default:(0,d.w5)((()=>[(0,d.Wm)(n,{description:"软件检测",title:"File_check"}),(0,d.Wm)(n,{description:"设置hyper",title:"Hyper setting"}),(0,d.Wm)(n,{description:"安装WSL",title:"WSL Install"}),(0,d.Wm)(n,{description:"设置WSL",title:"WSL setting"}),(0,d.Wm)(n,{description:"更新系统",title:"WSL update"}),(0,d.Wm)(n,{description:"安装Linux",title:"Install Linux"}),(0,d.Wm)(n,{description:"完成",title:"Finish"})])),_:1},8,["active"]),(0,p.SU)(T).isRunInit&&0==(0,p.SU)(R)?((0,d.wg)(),(0,d.iD)("div",v,[(0,d.Wm)(f,{"text-inside":!0,"stroke-width":26,percentage:(0,p.SU)(T).downloadPercent,format:D},null,8,["percentage"])])):(0,d.kq)("",!0)])),_:1}),(0,d.Wm)(w,null,{default:(0,d.w5)((()=>[(0,d._)("div",k,[(0,p.SU)(T).isInstalled?((0,d.wg)(),(0,d.iD)("div",y,[(0,d.Wm)(g,{loading:(0,p.SU)(T).isUnInstall,type:"primary",onClick:j},{default:(0,d.w5)((()=>[(0,d.Uk)(" 卸载 ")])),_:1},8,["loading"])])):((0,d.wg)(),(0,d.iD)("div",b,[(0,d._)("div",null,[(0,p.SU)(T).status.first_reboot?((0,d.wg)(),(0,d.j4)(g,{key:0,loading:(0,p.SU)(T).isRunInit,type:"primary",onClick:$},{default:(0,d.w5)((()=>[(0,d.Uk)(" 开始初始化 ")])),_:1},8,["loading"])):((0,d.wg)(),(0,d.j4)(h,{key:1,title:"安装过程会重启设备，确定安装吗？",onConfirm:$},{reference:(0,d.w5)((()=>[(0,d.Wm)(g,{loading:(0,p.SU)(T).isRunInit,type:"primary"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 开始初始化 ")])),_:1},8,["loading"])])),_:1})),(0,d.Wm)(g,{onClick:x},{default:(0,d.w5)((()=>[(0,d.Uk)("放弃")])),_:1})])]))])])),_:1}),(0,d.Wm)(w,null,{default:(0,d.w5)((()=>[(0,d.Wm)(U,{closable:!1},{default:(0,d.w5)((()=>[I,W,S])),_:1})])),_:1})])),_:1})])])),_:1},8,["modelValue"])}}};function C(e){e.__source="src/views/gpumarket/mydevice/components/init_dialog.vue"}var T=n(83744);"function"===typeof C&&C(U);const L=(0,T.Z)(U,[["__scopeId","data-v-469b5ba6"]]);var R=L}}]);