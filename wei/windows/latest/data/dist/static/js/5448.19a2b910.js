/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5448],{23471:function(t,e,a){a.d(e,{$u:function(){return x},AX:function(){return w},BX:function(){return b},Bs:function(){return D},ET:function(){return k},Ep:function(){return i},IF:function(){return B},KD:function(){return $},LN:function(){return S},Nq:function(){return F},Pb:function(){return j},QC:function(){return z},RS:function(){return v},SI:function(){return W},U$:function(){return Z},Vf:function(){return m},Wz:function(){return l},Xc:function(){return y},Zr:function(){return r},Zt:function(){return R},ak:function(){return V},an:function(){return p},c1:function(){return d},co:function(){return _},cu:function(){return U},dd:function(){return u},e$:function(){return H},m9:function(){return f},mL:function(){return c},oh:function(){return C},sw:function(){return g},t4:function(){return h},vQ:function(){return E},wW:function(){return T},zB:function(){return q},zw:function(){return s}});var n=a(92325),o=a(11555);function r(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:e})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function l(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function d(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function c(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function p(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function _(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function m(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:e}})}function w(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function g(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function y(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function v(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function k(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:e}})}function Z(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:e}})}function b(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:e}})}function U(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function W(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function C(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function z(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function D(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function S(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:e})}function x(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function H(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function j(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function V(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function T(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function q(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function B(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function $(t,e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:e})}function R(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function E(t){return(0,n.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function F(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}},5448:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var n=a(49676),o=(a(3241),a(73204),a(3837)),r=(a(81010),a(76128)),i=(a(74828),a(50591)),u=(a(89035),a(15659)),l=(a(10444),a(32018)),d=(a(46160),a(10661)),c=(a(35095),a(50363),a(66252)),s=a(3577),p=a(2262),_=a(48123),m=a(88540),w=a(70076),f=a(95965),h=a(23471);const g={m:"4"},y={m:"t-0 b-2"},v={m:"t-0 b-2"},k={m:"t-0 b-2"},Z={class:"el-progress-action"};var b={__name:"docker_list",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change-page","reload"],setup(t,{emit:e}){const a=(0,c.f3)("$baseMessage"),{startTimeoutTimer:b}=(0,f.Z)();function U(t){e("change-page",t)}const W=(0,p.iH)();function C(t){W.value.showDialog(t)}const z=(0,p.iH)();function D(t){z.value.showDialog(t)}async function S(t,n){await(0,h.ET)(t,n),a("开启容器成功","success","vab-hey-message-success"),b((()=>{e("reload")}))}async function x(t,n){await(0,h.U$)(t,n),a("停止容器成功","success","vab-hey-message-success"),b((()=>{e("reload")}))}async function H(t,n){await(0,h.BX)(t,n),a("删除容器成功","success","vab-hey-message-success"),b((()=>{e("reload")}))}return(e,a)=>{const f=o.$Y,h=d.Q0,b=l.Xh,j=u.ElButton,V=i.i1,T=r.GT,q=o.eI,B=n.R;return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(q,{fit:"",flexible:"",stripe:"","table-layout":"auto",data:t.tableData,"row-key":"ct_id",class:"data-list"},{empty:(0,c.w5)((()=>[(0,c.Wm)(T,{class:"vab-data-empty",description:"暂无容器，请到“算力市场”选择主机创建容器"})])),default:(0,c.w5)((()=>[(0,c.Wm)(f,{type:"expand",fixed:""},{default:(0,c.w5)((({row:t})=>[(0,c._)("div",g,[(0,c._)("p",y," GPU："+(0,s.zw)(t.ct_host_gpu_name)+" * "+(0,s.zw)(t.ct_gpu_count),1),(0,c._)("p",v,"CPU："+(0,s.zw)(t.ct_host_cpu_name)+" * 1",1),(0,c._)("p",k,"硬盘："+(0,s.zw)(t.ct_host_disk_type_str),1)])])),_:1}),(0,c.Wm)(f,{label:"主机UUID",prop:"ct_host_name",sortable:""},{default:(0,c.w5)((({row:t})=>[(0,c.Wm)(h,{effect:"dark",content:t.ct_host_name,placement:"top"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,s.zw)(t.format_ct_host_name),1)])),_:2},1032,["content"]),(0,c.Wm)((0,p.SU)(_["default"]),{text:t.ct_host_name},null,8,["text"])])),_:1}),(0,c.Wm)(f,{label:"容器名称",prop:"ct_name"},{default:(0,c.w5)((({row:t})=>[(0,c.Uk)((0,s.zw)(t.ct_name)+" ",1),(0,c.Wm)((0,p.SU)(_["default"]),{text:t.ct_name},null,8,["text"])])),_:1}),(0,c.Wm)(f,{label:"基于镜像",prop:"ct_image_ci_name",sortable:""},{default:(0,c.w5)((({row:t})=>[(0,c.Wm)(h,{effect:"dark",content:t.ct_image_ci_name,placement:"top"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,s.zw)(t.format_ct_image_ci_name),1)])),_:2},1032,["content"]),(0,c.Wm)((0,p.SU)(_["default"]),{text:t.ct_image_ci_name},null,8,["text"])])),_:1}),(0,c.Wm)(f,{label:"状态",prop:"ct_use_status_str"}),(0,c.Wm)(f,{label:"主机",prop:"ct_host_status_str"}),(0,c.Wm)(f,{label:"操作",prop:"truedata"},{default:(0,c.w5)((({row:t})=>[(0,c._)("div",Z,[t.ct_operation_array.showProcess?((0,c.wg)(),(0,c.j4)(b,{key:0,"text-inside":!0,"stroke-width":20,percentage:t.ct_operation_array.progress_num,striped:"",size:"small"},null,8,["percentage"])):((0,c.wg)(),(0,c.iD)(c.HY,{key:1},[t.ct_operation_array.download_model?((0,c.wg)(),(0,c.j4)(j,{key:0,type:"primary",size:"small",onClick:e=>C(t.ct_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 下载模型 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0),t.ct_operation_array.download_dataset?((0,c.wg)(),(0,c.j4)(j,{key:1,type:"primary",size:"small",onClick:e=>D(t.ct_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 下载数据集 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0),t.ct_operation_array.startContainer?((0,c.wg)(),(0,c.j4)(j,{key:2,type:"primary",size:"small",onClick:e=>S(t.ct_host_id,t.ct_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 开启 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0),t.ct_operation_array.stopContainer?((0,c.wg)(),(0,c.j4)(j,{key:3,type:"warning",size:"small",onClick:e=>x(t.ct_host_id,t.ct_id)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 停止 ")])),_:2},1032,["onClick"])):(0,c.kq)("",!0)],64)),t.ct_operation_array.delete?((0,c.wg)(),(0,c.j4)(V,{key:2,title:"确定删除此容器吗？",onConfirm:e=>H(t.ct_host_id,t.ct_id)},{reference:(0,c.w5)((()=>[(0,c.Wm)(j,{type:"danger",size:"small"},{default:(0,c.w5)((()=>[(0,c.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])):(0,c.kq)("",!0)])])),_:1})])),_:1},8,["data"]),(0,c.Wm)(m["default"],{ref_key:"downloadModelDialogRef",ref:W},null,512),(0,c.Wm)(w["default"],{ref_key:"downloadDatasetDialogRef",ref:z},null,512),(0,c.Wm)(B,{"current-page":t.page,layout:"prev, pager, next","page-size":t.pagination.pageSize,total:t.pagination.total,onCurrentChange:U},null,8,["current-page","page-size","total"])])}}};function U(t){t.__source="src/views/gpumarket/myhosts/components/docker_list.vue"}var W=a(83744);"function"===typeof U&&U(b);const C=(0,W.Z)(b,[["__scopeId","data-v-43d2eefa"]]);var z=C},70076:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(73481),o=(a(3241),a(62029),a(20129)),r=(a(69840),a(15659)),i=(a(10444),a(10661)),u=(a(35095),a(47820)),l=(a(50986),a(61715),a(6589),a(57018)),d=(a(74367),a(66252)),c=a(2262),s=a(71726),p=a(85026),_=a(68367),m=a(20681),w=a(95965),f={__name:"download_dataset_dialog",setup(t,{expose:e}){const{startTimeoutTimer:a}=(0,w.Z)(),{startLoadProgress:f,startReloadList:h,stopTimer:g}=(0,m.Z)(),y=(0,d.f3)("$pub"),v=(0,d.f3)("$baseMessage"),k=(0,c.iH)(!1),Z=(0,c.iH)({...p.f_}),b=(0,c.iH)(),U=()=>({container_id:"",create_from_where:"extra_path",model_thread_id:"0",persion_input_model_src:"",model_type:""}),W=(0,c.iH)({...U()});function C(t){k.value=!0,W.value.container_id=t,x(),j(t)}function z(){W.value={...U()},k.value=!1,H.value=[],b.value.resetFields(),g()}function D(){a((()=>{j(W.value.container_id)}))}const S=(0,c.iH)([]);async function x(){const{body:t}=await(0,s.wW)();S.value=t}const H=(0,c.iH)([]);async function j(t){const{body:e}=await(0,s.Hy)(t);H.value=e,f(e,"model_id","model_operation_array",H,s.AB,(()=>{j(t)})),h(e,"model_id","model_operation_array",H,(()=>(0,s.Hy)(t)))}async function V(){await b.value.validate((async(t,e)=>{if(!t)return!1;const a=await(0,s.t9)(W.value);v(a.msg,"success","vab-hey-message-success");const n=W.value.container_id;b.value.resetFields(),W.value.container_id=n,k.value=!1,y("reload-my-docker-list")}))}return e({showDialog:C}),(t,e)=>{const a=l.EZ,s=o.nH,p=u.BT,m=u.km,w=(0,d.up)("vab-icon"),f=i.Q0,h=r.ElButton,g=o.ly,y=n.d0;return(0,d.wg)(),(0,d.j4)(y,{modelValue:(0,c.SU)(k),"onUpdate:modelValue":e[2]||(e[2]=t=>(0,c.dq)(k)?k.value=t:null),title:"下载数据集",width:"80%",onClose:z},{default:(0,d.w5)((()=>[(0,d.Wm)(g,{ref_key:"formRef",ref:b,"label-width":"auto",model:(0,c.SU)(W),rules:(0,c.SU)(Z)},{default:(0,d.w5)((()=>[(0,d.Wm)(s,{label:"数据集地址",prop:"persion_input_model_src"},{default:(0,d.w5)((()=>[(0,d.Wm)(a,{modelValue:(0,c.SU)(W).persion_input_model_src,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,c.SU)(W).persion_input_model_src=t),placeholder:"数据集地址(数据集下载完成后，要点击“应用”才可以添加在容器里面)"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(s,{label:"数据集分类",prop:"model_type"},{default:(0,d.w5)((()=>[(0,d.Wm)(m,{modelValue:(0,c.SU)(W).model_type,"onUpdate:modelValue":e[1]||(e[1]=t=>(0,c.SU)(W).model_type=t),filterable:"",placeholder:"选择数据集保存到的分类",class:"contianer-name-helf"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,c.SU)(S),(t=>((0,d.wg)(),(0,d.j4)(p,{key:t.type_key,label:t.name,value:t.type_key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(f,{effect:"dark",content:"外部下载的数据集，请选择数据集的分类，不选择时默认保存在数据集的other路径下",placement:"top",class:"mx-1","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(w,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(s,null,{label:(0,d.w5)((()=>[])),default:(0,d.w5)((()=>[(0,d.Wm)(h,{type:"primary",onClick:V},{default:(0,d.w5)((()=>[(0,d.Uk)(" 下载 ")])),_:1}),(0,d.Wm)(h,{onClick:z},{default:(0,d.w5)((()=>[(0,d.Uk)("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,d.Wm)(_["default"],{list:(0,c.SU)(H),"container-id":(0,c.SU)(W).container_id,onReload:D},null,8,["list","container-id"])])),_:1},8,["modelValue"])}}};function h(t){t.__source="src/views/gpumarket/myhosts/components/download_dataset_dialog.vue"}var g=a(83744);"function"===typeof h&&h(f);const y=(0,g.Z)(f,[["__scopeId","data-v-415193ef"]]);var v=y}}]);