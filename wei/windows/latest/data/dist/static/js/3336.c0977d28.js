/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3336,8123],{23471:function(t,e,n){n.d(e,{$u:function(){return D},AX:function(){return w},BX:function(){return k},Bs:function(){return j},ET:function(){return b},Ep:function(){return i},IF:function(){return P},KD:function(){return B},LN:function(){return x},Nq:function(){return N},Pb:function(){return $},QC:function(){return C},RS:function(){return v},SI:function(){return W},U$:function(){return Z},Vf:function(){return _},Wz:function(){return p},Xc:function(){return y},Zr:function(){return r},Zt:function(){return F},ak:function(){return q},an:function(){return s},c1:function(){return d},co:function(){return m},cu:function(){return z},dd:function(){return u},e$:function(){return I},m9:function(){return f},mL:function(){return c},oh:function(){return U},sw:function(){return g},t4:function(){return h},vQ:function(){return E},wW:function(){return S},zB:function(){return G},zw:function(){return l}});var o=n(92325),a=n(11555);function r(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:e})}function i(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function p(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function d(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function l(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function s(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function m(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function _(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:e}})}function w(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function g(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function y(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function v(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function b(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:e}})}function Z(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:e}})}function k(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:e}})}function z(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function W(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function U(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function C(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function j(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function x(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:e})}function D(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function I(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function $(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function q(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function S(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function G(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function P(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function B(t,e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:e})}function F(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function E(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function N(t){const{body:{hash:e}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}},81464:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(81095),a=n(26593);function r(t){o.gp.$baseMessage(`拷贝${t}成功`,"success","vab-hey-message-success",!1)}function i(t){o.gp.$baseMessage(`拷贝${t}失败`,"error","vab-hey-message-success",!1)}function u(t){const{isSupported:e,copy:n}=(0,a.VPI)();e||(0,a.gIw)("clipboard-write"),n(t).then((()=>{r(t)})).catch((e=>{console.log(e),i(t)}))}},48123:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var o=n(66252),a=n(2262),r=n(81464),i={__name:"index",props:{text:{type:String,default:""}},setup(t){return(e,n)=>{const i=(0,o.up)("vab-icon");return(0,o.wg)(),(0,o.j4)(i,{icon:"file-copy-2-line",class:"cursor-pointer",onClick:n[0]||(n[0]=e=>(0,a.SU)(r.Z)(t.text))})}}};function u(t){t.__source="src/components/ClipboardButton/index.vue"}"function"===typeof u&&u(i);const p=i;var d=p},23336:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var o=n(49676),a=(n(3241),n(73204),n(3837)),r=(n(81010),n(76128)),i=(n(74828),n(50591)),u=(n(89035),n(15659)),p=(n(10444),n(86398)),d=(n(69448),n(10661)),c=(n(35095),n(50363),n(66252)),l=n(3577),s=n(2262),m=n(48123),_=n(23471);const w={m:"4"},f={m:"t-0 b-2"},h={m:"t-0 b-2"},g={m:"t-0 b-2"},y={m:"t-0 b-2"},v={m:"t-0 b-2"};var b={__name:"device_list",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change-page","reload"],setup(t,{emit:e}){function n(t){e("change-page",t)}async function b(t){await(0,_.an)(t),e("reload")}async function Z(t){await(0,_.zw)(t),e("reload")}return(e,_)=>{const k=a.$Y,z=(0,c.up)("vab-icon"),W=d.Q0,U=p.gi,C=u.ElButton,j=(0,c.up)("router-link"),x=i.i1,D=r.GT,I=a.eI,$=o.R;return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(I,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:t.tableData,"row-key":"host_id",class:"data-list"},{empty:(0,c.w5)((()=>[(0,c.Wm)(D,{class:"vab-data-empty",description:"暂无容器，请到“算力市场”选择主机创建容器"})])),default:(0,c.w5)((()=>[(0,c.Wm)(k,{type:"expand",fixed:""},{default:(0,c.w5)((({row:t})=>[(0,c._)("div",w,[(0,c._)("p",f," GPU："+(0,l.zw)(t.host_gpu_name)+" * "+(0,l.zw)(t.host_gpu_count),1),(0,c._)("p",h,"CPU："+(0,l.zw)(t.host_cpu_name),1),(0,c._)("p",g,"内存："+(0,l.zw)(t.host_memony),1),(0,c._)("p",y,"硬盘："+(0,l.zw)(t.host_disk_type_str),1),(0,c._)("p",v," 网络："+(0,l.zw)(t.host_wan_ip)+" "+(0,l.zw)(t.host_lan_ip)+" "+(0,l.zw)(t.host_net_type_str),1)])])),_:1}),(0,c.Wm)(k,{label:"主机UUID",prop:"host_uuid",sortable:""},{default:(0,c.w5)((({row:t})=>[t.is_local_device?((0,c.wg)(),(0,c.j4)(z,{key:0,icon:"map-pin-line",style:{color:"rgb(54, 203, 203)"}})):((0,c.wg)(),(0,c.j4)(z,{key:1,icon:"cloud-line",style:{color:"rgb(54, 203, 203)"}})),(0,c.Wm)(W,{effect:"dark",content:t.host_uuid,placement:"top"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,l.zw)(t.format_host_uuid),1)])),_:2},1032,["content"]),(0,c.Wm)((0,s.SU)(m["default"]),{text:t.host_uuid},null,8,["text"])])),_:1}),(0,c.Wm)(k,{label:"主机名",prop:"host_name",sortable:""}),(0,c.Wm)(k,{label:"GPU",prop:"name",sortable:""},{default:(0,c.w5)((({row:t})=>[(0,c.Uk)((0,l.zw)(t.host_gpu_name)+" * "+(0,l.zw)(t.host_cpu_count),1)])),_:1}),(0,c.Wm)(k,{label:"IP",prop:"host_lan_ip",sortable:""}),(0,c.Wm)(k,{label:"状态",prop:"host_online_status",sortable:""},{default:(0,c.w5)((({row:t})=>["离线"==t.host_online_status?((0,c.wg)(),(0,c.j4)(U,{key:0,class:"mx-1",type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 离线 ")])),_:1})):(0,c.kq)("",!0),"在线"==t.host_online_status?((0,c.wg)(),(0,c.j4)(U,{key:1,class:"card-header-tag",type:"success"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 在线 ")])),_:1})):(0,c.kq)("",!0)])),_:1}),(0,c.Wm)(k,{label:"操作",prop:"city"},{default:(0,c.w5)((({row:t})=>[t.host_operation_array.seeDetail?((0,c.wg)(),(0,c.j4)(j,{key:0,to:t.link},{default:(0,c.w5)((()=>[(0,c.Wm)(C,{type:"primary",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("设置")])),_:1})])),_:2},1032,["to"])):(0,c.kq)("",!0),t.host_operation_array.turnoff?((0,c.wg)(),(0,c.j4)(x,{key:1,title:"是否关闭此设备？",onConfirm:e=>b(t.host_id)},{reference:(0,c.w5)((()=>[t.host_operation_array.turnoff?((0,c.wg)(),(0,c.j4)(C,{key:0,type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)(" 关机 ")])),_:1})):(0,c.kq)("",!0)])),_:2},1032,["onConfirm"])):(0,c.kq)("",!0),t.host_operation_array.delete?((0,c.wg)(),(0,c.j4)(x,{key:2,title:"是否删除此设备？",onConfirm:e=>Z(t.host_id)},{reference:(0,c.w5)((()=>[(0,c.Wm)(C,{type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,c.kq)("",!0)])),_:1})])),_:1},8,["data"]),(0,c.Wm)($,{"current-page":t.page,layout:"prev, pager, next","page-size":t.pagination.pageSize,total:t.pagination.total,onCurrentChange:n},null,8,["current-page","page-size","total"])])}}};function Z(t){t.__source="src/views/gpumarket/mydevice/components/device_list.vue"}var k=n(83744);"function"===typeof Z&&Z(b);const z=(0,k.Z)(b,[["__scopeId","data-v-0fbe705d"]]);var W=z}}]);