/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 15:38:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6607,8123],{71726:function(e,t,o){o.d(t,{AB:function(){return w},Bb:function(){return r},C0:function(){return l},Hy:function(){return f},Is:function(){return y},KD:function(){return h},LN:function(){return u},Nq:function(){return g},Pb:function(){return m},S1:function(){return c},_S:function(){return i},e$:function(){return d},oh:function(){return s},t9:function(){return _},wW:function(){return p}});var n=o(92325),a=o(11555);function r(e,t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=container_list",method:"post",params:e,data:t})}function s(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"get"})}function i(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model_container",method:"post",data:e})}function l(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{container_id:e}})}function d(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:e}})}function u(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",data:e})}function c(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}async function m(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function p(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"get"})}function _(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model_container",method:"post",data:e})}function f(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{container_id:e}})}function w(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:e}})}function h(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",data:e})}function y(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}async function g(e){const{body:{hash:t}}=await(0,a.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},81464:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(81095),a=o(26593);function r(e){n.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function s(e){n.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function i(e){const{isSupported:t,copy:o}=(0,a.VPI)();t||(0,a.gIw)("clipboard-write"),o(e).then((()=>{r(e)})).catch((t=>{console.log(t),s(e)}))}},48123:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(66252),a=o(2262),r=o(81464),s={__name:"index",props:{text:{type:String,default:""}},setup(e){return(t,o)=>{const s=(0,n.up)("vab-icon");return(0,n.wg)(),(0,n.j4)(s,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:o[0]||(o[0]=t=>(0,a.SU)(r.Z)(e.text))})}}};function i(e){e.__source="src/components/ClipboardButton/index.vue"}"function"===typeof i&&i(s);const l=s;var d=l},96607:function(e,t,o){o.r(t),o.d(t,{default:function(){return k}});var n=o(3837),a=(o(3241),o(81010),o(50591)),r=(o(89035),o(15659)),s=(o(10444),o(32018)),i=(o(46160),o(10661)),l=(o(35095),o(50363),o(66252)),d=o(2262),u=o(3577),c=o(48123),m=o(96486),p=o(71726);const _=e=>((0,l.dD)("data-v-63da1196"),e=e(),(0,l.Cn)(),e),f=_((()=>(0,l._)("h3",null,"模型列表",-1))),w={class:"el-progress-action"},h=_((()=>(0,l._)("div",null," 没发现本机有容器，请到容器市场上收藏心仪的容器，然后就能在这里下载，并应用了 ",-1)));var y={__name:"model_list",props:{list:{type:Array,default:()=>[]},containerId:{type:[String,Number],default:0}},emits:["reload"],setup(e,{emit:t}){const o=e,_=(0,l.f3)("$baseMessage"),y=(0,l.Fl)((()=>o.list.map((e=>(e.format_model_file_name=(0,m.truncate)(e.model_file_name,{length:45,separator:"..."}),e)))));(0,d.iH)([]);async function g(e){if(!e)return void _("无法下载此模型","error","vab-hey-message-error");const n={container_id:o.containerId,create_from_where:"model_list",model_thread_id:e,persion_input_model_src:"",model_type:""},a=await(0,p._S)(n);_(a.msg,"success","vab-hey-message-success"),t("reload")}async function v(e){const n={container_id:o.containerId,host_model_id:e},a=await(0,p.LN)(n);_(a.msg,"success","vab-hey-message-success"),t("reload")}async function b(e){await(0,p.S1)(e),_("删除模型成功","success","vab-hey-message-success"),t("reload")}async function k(e){await(0,p.Pb)(e),_("取消收藏成功","success","vab-hey-message-success"),t("reload")}return(e,t)=>{const o=n.$Y,m=i.Q0,p=s.Xh,_=r.ElButton,Z=a.i1,C=n.eI;return(0,l.wg)(),(0,l.iD)("div",null,[f,(0,l.Wm)(C,{data:(0,d.SU)(y),class:"model-list"},{empty:(0,l.w5)((()=>[h])),default:(0,l.w5)((()=>[(0,l.Wm)(o,{label:"分类",prop:"model_type_str",sortable:""}),(0,l.Wm)(o,{label:"容器文件名",prop:"model_file_name"},{default:(0,l.w5)((({row:e})=>[(0,l.Wm)(m,{placement:"top",content:e.model_file_name},{default:(0,l.w5)((()=>[(0,l.Uk)((0,u.zw)(e.format_model_file_name),1)])),_:2},1032,["content"]),(0,l.Wm)((0,d.SU)(c["default"]),{text:e.model_file_name},null,8,["text"])])),_:1}),(0,l.Wm)(o,{label:"状态",prop:"model_status_str",sortable:""}),(0,l.Wm)(o,{label:"位置",prop:"model_where_str",sortable:""}),(0,l.Wm)(o,{label:"操作",prop:"truedata"},{default:(0,l.w5)((({row:e})=>[(0,l._)("div",w,[e.model_operation_array.showProcess?((0,l.wg)(),(0,l.j4)(p,{key:0,"text-inside":!0,"stroke-width":20,percentage:e.model_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[e.model_operation_array.showPullButtun?((0,l.wg)(),(0,l.j4)(_,{key:0,type:"primary",size:"small",onClick:t=>g(e.model_forum_id)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 下载 ")])),_:2},1032,["onClick"])):(0,l.kq)("",!0),e.model_operation_array.canApply?((0,l.wg)(),(0,l.j4)(_,{key:1,type:"primary",size:"small",onClick:t=>v(e.model_id)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 应用 ")])),_:2},1032,["onClick"])):(0,l.kq)("",!0)],64)),e.model_operation_array.delete?((0,l.wg)(),(0,l.j4)(Z,{key:2,title:"确定删除此模型吗？",onConfirm:t=>b(e.model_id)},{reference:(0,l.w5)((()=>[(0,l.Wm)(_,{type:"danger",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,l.kq)("",!0),e.model_operation_array.delete_fav&&e.model_favid?((0,l.wg)(),(0,l.j4)(Z,{key:3,title:"确定取消收藏此镜像？",onConfirm:t=>k(e.model_favid)},{reference:(0,l.w5)((()=>[(0,l.Wm)(_,{type:"warning",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("取消收藏")])),_:1})])),_:2},1032,["onConfirm"])):(0,l.kq)("",!0)])])),_:1})])),_:1},8,["data"])])}}};function g(e){e.__source="src/views/gpumarket/myhosts/components/model_list.vue"}var v=o(83744);"function"===typeof g&&g(y);const b=(0,v.Z)(y,[["__scopeId","data-v-63da1196"]]);var k=b}}]);