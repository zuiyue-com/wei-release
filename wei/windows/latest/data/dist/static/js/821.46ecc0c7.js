/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:58:23
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[821,6700],{44904:function(e,t,a){a.d(t,{GT:function(){return d},Nl:function(){return r},Pb:function(){return m},_S:function(){return c},_c:function(){return s},fZ:function(){return i},nD:function(){return u}});var n=a(96486),o=a(92325),l=a(11555);function i(e){const t=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=typeid",method:"get",params:t})}async function u(e,t){return(0,l.Gv)().then((({body:{hash:a}})=>{const l={formhash:a,searchoption:{[t.inputId]:{value:t.keyword}},searchsortsubmit:""},i=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=sortid",method:"post",params:i,data:l})}))}function r(e){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_model",method:"get",params:e})}function d(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=model_down_form",method:"get"})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=download_model",method:"post",data:e})}async function s(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function m(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},91906:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(15659),o=(a(3241),a(10444),a(20129)),l=(a(69840),a(6589),a(10661)),i=(a(35095),a(47820)),u=(a(50986),a(61715),a(57658),a(66252)),r=a(2262),d=a(86136),c=a(44904);const s={client_id:[{required:!0,message:"请选择设备",trigger:"change"}]};var m=a(22201);const f={class:"comprehensive-form-container"};var p={__name:"create_dialog",setup(e,{expose:t}){const a=(0,m.tv)(),p=(0,r.iH)(!1),_=(0,r.iH)([]),h=(0,r.iH)([]),w=(0,r.iH)(),v=()=>({client_id:"",to_device_to_container:"to_host",container_id:"",model_thread_id:""}),k=(0,r.iH)({...v()}),y=(0,r.iH)({...s});function b(e){p.value=!0,k.value={...v(),model_thread_id:e},g(),(0,u.Y3)((()=>{w.value.clearValidate()}))}async function g(){const{body:{hosts:e}}=await(0,c.GT)();_.value=e||[],h.value=[]}function U(e){const t=_.value.find((t=>t.host_id===e));h.value=t?t.containers:[]}function S(e){k.value.to_device_to_container=e>0?"to_container":"to_host"}async function W(){await w.value.validate((async(e,t)=>{if(!e)return!1;await(0,c._S)(k.value),p.value=!1,a.push({name:"DeviceDetail",params:{id:k.value.client_id},query:{tab:"model-list"}})}))}return t({showDialog:b}),(e,t)=>{const a=i.BT,c=i.km,s=(0,u.up)("vab-icon"),m=l.Q0,v=o.nH,b=o.ly,g=n.ElButton;return(0,u.wg)(),(0,u.iD)("div",f,[(0,u.Wm)((0,r.SU)(d["default"]),{modelValue:(0,r.SU)(p),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,r.dq)(p)?p.value=e:null),title:"模型下载",width:"600px"},{footer:(0,u.w5)((()=>[(0,u.Wm)(g,{onClick:t[2]||(t[2]=e=>p.value=!1)},{default:(0,u.w5)((()=>[(0,u.Uk)("取 消")])),_:1}),(0,u.Wm)(g,{type:"primary",onClick:W},{default:(0,u.w5)((()=>[(0,u.Uk)(" 确 定 ")])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)(b,{ref_key:"formRef",ref:w,class:"demo-form",model:(0,r.SU)(k),rules:(0,r.SU)(y),"label-width":"auto"},{default:(0,u.w5)((()=>[(0,u.Wm)(v,{label:"下载到设备",prop:"client_id",class:"flex"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{modelValue:(0,r.SU)(k).client_id,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.SU)(k).client_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name flex-1",onChange:U},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,r.SU)(_),(e=>((0,u.wg)(),(0,u.j4)(a,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(m,{effect:"dark",content:"模型将下载到选中设备中，统一保存在本软件安装目录的model路径下",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1}),(0,u.Wm)(v,{label:"应用到容器",class:"flex"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{modelValue:(0,r.SU)(k).container_id,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.SU)(k).container_id=e),filterable:"",placeholder:"从“我的容器”里选择",class:"contianer-name flex-1",onChange:S},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,r.SU)(h),(e=>((0,u.wg)(),(0,u.j4)(a,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(m,{effect:"dark",content:"模型将下载到选中容器中，统一保存在容器的/root/model/目录下",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function _(e){e.__source="src/views/gpumarket/models/components/create_dialog.vue"}var h=a(83744);"function"===typeof _&&_(p);const w=(0,h.Z)(p,[["__scopeId","data-v-359fa42a"]]);var v=w}}]);