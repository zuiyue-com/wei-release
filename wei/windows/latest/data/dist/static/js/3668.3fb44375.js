/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 18:46:50
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3668],{23471:function(e,t,n){n.d(t,{$u:function(){return D},AX:function(){return w},BX:function(){return y},Bs:function(){return q},ET:function(){return U},Ep:function(){return i},IF:function(){return z},KD:function(){return B},LN:function(){return H},Nq:function(){return X},Pb:function(){return x},QC:function(){return S},RS:function(){return Z},SI:function(){return V},U$:function(){return b},Vf:function(){return _},Wz:function(){return d},Xc:function(){return v},Zr:function(){return r},Zt:function(){return E},ak:function(){return C},an:function(){return s},c1:function(){return c},co:function(){return m},cu:function(){return k},dd:function(){return u},e$:function(){return $},m9:function(){return f},mL:function(){return l},oh:function(){return W},sw:function(){return g},t4:function(){return h},vQ:function(){return G},wW:function(){return F},zB:function(){return j},zw:function(){return p}});var a=n(92325),o=n(11555);function r(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:e,data:t})}function i(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:e}})}function u(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:e})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:e})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:e}})}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:e})}function p(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_evice",method:"get",params:{client_id:e}})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:e}})}function m(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:e}})}function _(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:e,image_id:t}})}function w(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:e})}function f(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:e})}function h(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:e})}function g(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:e}})}async function v(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function Z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:e}})}function U(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:e,container_id:t}})}function b(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:e,container_id:t}})}function y(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:e,container_id:t}})}function k(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:e}})}function V(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:e}})}function W(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function S(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:e})}function q(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:e}})}function H(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:e,data:t})}function D(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:e}})}function $(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:e}})}async function x(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}function C(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:e}})}function F(){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function j(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:e})}function z(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:e}})}function B(e,t){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:e,data:t})}function E(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:e}})}function G(e){return(0,a.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:e}})}async function X(e){const{body:{hash:t}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},85026:function(e,t,n){n.d(t,{$j:function(){return i},MH:function(){return r},U$:function(){return c},Y2:function(){return a},bT:function(){return o},f_:function(){return d},wH:function(){return u}});const a={agree:[{validator(e,t,n){return t},message:"请同意挂机协议",trigger:"change"}]},o={container_name:[{required:!0,message:"容器名称必填",trigger:"change"}],persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},r={persion_input_image_src:[{required:!0,message:"镜像地址必填",trigger:"change"}]},i={persion_input_model_src:[{required:!0,message:"模型地址必填",trigger:"change"}],model_type:[{required:!0,message:"模型类型必选",trigger:"change"}]},u={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"模型不能为空",trigger:"change"}]},d={persion_input_model_src:[{required:!0,message:"数据集地址必填",trigger:"change"}],model_type:[{required:!0,message:"数据集类型必选",trigger:"change"}]},c={container_id:[{required:!0,message:"应用容器必选",trigger:"change"}],host_model_id:[{required:!0,message:"数据集不能为空",trigger:"change"}]}},63668:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(15659),o=(n(3241),n(10444),n(20129)),r=(n(69840),n(10661)),i=(n(35095),n(63715)),u=(n(76252),n(72319),n(6589),n(57018)),d=(n(74367),n(66252)),c=n(2262),l=n(86136),p=n(23471),s=n(85026);const m={class:"comprehensive-form-container"};var _={__name:"create_container_dialog",setup(e,{expose:t}){const n=(0,d.f3)("$baseMessage"),_=(0,d.f3)("$pub"),w=(0,c.iH)(!1),f=(0,c.iH)(),h=()=>({client_id:"",create_from_where:"image_list",device_image_id:0,persion_input_image_src:"",container_name:"",container_ports:"",container_paths:"",host_gpu_select:[]}),g=(0,c.iH)([]),v=(0,c.iH)({...h()}),Z=(0,c.iH)({...s.bT}),U=(0,d.Fl)((()=>0==v.value.device_image_id));function b(e,t=0){k(e,t),w.value=!0,v.value={...h(),client_id:e,create_from_where:t>0?"image_list":"extra_path",device_image_id:t,persion_input_image_src:""}}function y(){w.value=!1,f.value.resetFields()}async function k(e,t){let n;n=t>0?{client_id:e,create_from_where:"image_list",device_image_id:t}:{client_id:e,create_from_where:"extra_path",device_image_id:0};const{body:a}=await(0,p.AX)(n);g.value=a.host_gpu_digital_ids}async function V(){await f.value.validate((async(e,t)=>{if(!e)return!1;await(0,p.m9)(v.value),w.value=!1,n("拉取镜像成功","success","vab-hey-message-success"),_("active-device-tab",{name:"docker-list",callback:()=>{_("reload-docker-list")}})}))}return t({showDialog:b}),(e,t)=>{const n=u.EZ,p=o.nH,s=i.lm,_=i.z5,h=(0,d.up)("vab-icon"),b=r.Q0,k=o.ly,W=a.ElButton;return(0,d.wg)(),(0,d.iD)("div",m,[(0,d.Wm)((0,c.SU)(l["default"]),{modelValue:(0,c.SU)(w),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,c.dq)(w)?w.value=e:null),title:"创建容器",width:"600px",onClose:y},{footer:(0,d.w5)((()=>[(0,d.Wm)(W,{onClick:y},{default:(0,d.w5)((()=>[(0,d.Uk)("取 消")])),_:1}),(0,d.Wm)(W,{type:"primary",onClick:V},{default:(0,d.w5)((()=>[(0,d.Uk)(" 确 定 ")])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(k,{ref_key:"formRef",ref:f,class:"demo-form",model:(0,c.SU)(v),rules:(0,c.SU)(Z),"label-width":"auto"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{label:"容器名称",prop:"container_name"},{default:(0,d.w5)((()=>[(0,d.Wm)(n,{modelValue:(0,c.SU)(v).container_name,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(v).container_name=e),placeholder:"创建完成后好在对应设备的“我的容器”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(p,{label:"GPU编号"},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{modelValue:(0,c.SU)(v).host_gpu_select,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(v).host_gpu_select=e)},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,c.SU)(g),(e=>((0,d.wg)(),(0,d.j4)(s,{key:e.gpu_digital_id,label:e.gpu_digital_id},null,8,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,c.SU)(U)?((0,d.wg)(),(0,d.j4)(p,{key:0,label:"设定镜像",prop:"persion_input_image_src"},{default:(0,d.w5)((()=>[(0,d.Wm)(n,{modelValue:(0,c.SU)(v).persion_input_image_src,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.SU)(v).persion_input_image_src=e),placeholder:"镜像不在本地和镜像市场收藏夹，手动输入镜像地址",class:"contianer-name"},null,8,["modelValue"])])),_:1})):(0,d.kq)("",!0),(0,d.Wm)(p,{label:"映射端口"},{default:(0,d.w5)((()=>[(0,d.Wm)(n,{modelValue:(0,c.SU)(v).container_ports,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,c.SU)(v).container_ports=e),placeholder:"例如：7680|80|3306，多个用英文“|”隔开",class:"contianer-name-helf"},null,8,["modelValue"]),(0,d.Wm)(b,{effect:"dark",content:"容器要映射的出来的内部端口，仅需填写镜像内的端口，最多4个，或者不填",placement:"top",class:"mx-1","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(p,{label:"映射路径"},{default:(0,d.w5)((()=>[(0,d.Wm)(n,{modelValue:(0,c.SU)(v).container_paths,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,c.SU)(v).container_paths=e),placeholder:"例如：/root/sd/models|/root/data，多个路径用英文“|”隔开",class:"contianer-name-helf"},null,8,["modelValue"]),(0,d.Wm)(b,{effect:"dark",content:"系统按顺序提供宿主机的模型公用目录/root/model和用户私有数据目录/root/data映射。<br>仅需写镜像内映射的路径，请对照好顺序填入镜像内对应的目录，或者不填",placement:"top",class:"mx-1","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function w(e){e.__source="src/views/gpumarket/mydevice/components/create_container_dialog.vue"}var f=n(83744);"function"===typeof w&&w(_);const h=(0,f.Z)(_,[["__scopeId","data-v-11dfbffc"]]);var g=h}}]);