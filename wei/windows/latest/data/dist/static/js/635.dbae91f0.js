/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 15:38:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[635,6700],{45986:function(e,a,t){t.d(a,{AX:function(){return s},KG:function(){return u},X4:function(){return d},Xc:function(){return m},bh:function(){return i},m9:function(){return c},rK:function(){return r}});var o=t(96486),n=t(92325),l=t(11555);function u(e){const a=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:a})}async function r(e,a){return(0,l.Gv)().then((({body:{hash:t}})=>{const l={formhash:t,searchoption:{[a.inputId]:{value:a.keyword}},searchsortsubmit:""},u=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"post",params:u,data:l})}))}function i(e){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_image",method:"get",params:e})}function s(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_container_form",method:"get"})}function c(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_download",method:"post",data:e})}async function d(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:a}})}async function m(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:a}})}},26731:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var o=t(15659),n=(t(3241),t(10444),t(20129)),l=(t(69840),t(57018)),u=(t(74367),t(63715)),r=(t(76252),t(72319),t(6589),t(10661)),i=(t(35095),t(47820)),s=(t(50986),t(61715),t(57658),t(66252)),c=t(2262),d=t(96486),m=t(86136),_=t(45986);const p={host_id:[{required:!0,message:"请选择设备",trigger:"change"}],container_name:[{required:!0,message:"容器名称必填",trigger:"change"}]};var h=t(22201);const f={class:"comprehensive-form-container"};var w={__name:"create_dialog",setup(e,{expose:a}){const t=(0,h.tv)(),w=(0,c.iH)(!1),g=(0,c.iH)([]),v=(0,c.iH)(),k=()=>({host_id:"",image_thread_id:"",host_gpu_select:[],do_what:"create",container_name:""}),y=(0,c.iH)({...k()}),b=(0,c.iH)({...p});function U(e){w.value=!0,y.value={...k(),image_thread_id:e},W()}function S(){w.value=!1,v.value.resetFields()}function V(e){""===e[e.length-1]?(y.value.host_gpu_select=[""],y.value.do_what="onlypull"):(y.value.host_gpu_select=e.filter((e=>""!==e)),y.value.do_what="create")}async function W(){const{body:e}=await(0,_.AX)();g.value=e||[]}const Z=(0,s.Fl)((()=>{const e=g.value.find((e=>e.host_id==y.value.host_id));return e?.host_gpu_digital_ids||[]}));async function D(){await v.value.validate((async(e,a)=>{if(!e)return!1;const o=(0,d.cloneDeep)(y.value);"onlypull"===o.do_what&&(o.host_gpu_select=[]),await(0,_.m9)(o),w.value=!1,t.push({name:"DeviceDetail",params:{id:y.value.host_id},query:{tab:"docker-list"}})}))}return a({showDialog:U}),(e,a)=>{const t=i.BT,d=i.km,_=(0,s.up)("vab-icon"),p=r.Q0,h=n.nH,k=u.lm,U=u.z5,W=l.EZ,H=n.ly,q=o.ElButton;return(0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)((0,c.SU)(m["default"]),{modelValue:(0,c.SU)(w),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,c.dq)(w)?w.value=e:null),title:"创建容器",width:"600px",onClose:S},{footer:(0,s.w5)((()=>[(0,s.Wm)(q,{onClick:S},{default:(0,s.w5)((()=>[(0,s.Uk)("取 消")])),_:1}),(0,s.Wm)(q,{type:"primary",onClick:D},{default:(0,s.w5)((()=>[(0,s.Uk)(" 确 定 ")])),_:1})])),default:(0,s.w5)((()=>[(0,s.Wm)(H,{ref_key:"formRef",ref:v,class:"demo-form",model:(0,c.SU)(y),rules:(0,c.SU)(b),"label-width":"auto"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{label:"选择设备",prop:"host_id"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{modelValue:(0,c.SU)(y).host_id,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,c.SU)(y).host_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,c.SU)(g),(e=>((0,s.wg)(),(0,s.j4)(t,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,s.Wm)(p,{effect:"dark",content:"从“我的设备”里选择非出租状态的设备<br>镜像将拉取到对应设备上<br>如需同时创建容器，请选择使用的显卡数量",placement:"top",class:"mx-1","raw-content":""},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,s.Wm)(h,{label:"GPU编号"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{modelValue:(0,c.SU)(y).host_gpu_select,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,c.SU)(y).host_gpu_select=e),onChange:V},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,c.SU)(Z),(e=>((0,s.wg)(),(0,s.j4)(k,{key:e.gpu_digital_id,label:e.gpu_digital_id},null,8,["label"])))),128)),(0,s.Wm)(k,{label:""},{default:(0,s.w5)((()=>[(0,s.Uk)("仅拉取，不创建容器")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"create"===(0,c.SU)(y).do_what?((0,s.wg)(),(0,s.j4)(h,{key:0,label:"容器名称",prop:"container_name"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{modelValue:(0,c.SU)(y).container_name,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,c.SU)(y).container_name=e),placeholder:"创建完成后好在“我的容器”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1})):(0,s.kq)("",!0)])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function g(e){e.__source="src/views/gpumarket/images/components/create_dialog.vue"}var v=t(83744);"function"===typeof g&&g(w);const k=(0,v.Z)(w,[["__scopeId","data-v-708e2358"]]);var y=k}}]);