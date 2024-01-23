/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 10:23:14
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2007],{44904:function(e,t,a){a.d(t,{GT:function(){return s},Nl:function(){return u},Pb:function(){return p},_S:function(){return c},_c:function(){return d},fZ:function(){return i},nD:function(){return r}});var n=a(96486),o=a(92325),l=a(11555);function i(e){const t=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=typeid",method:"get",params:t})}async function r(e,t){return(0,l.Gv)().then((({body:{hash:a}})=>{const l={formhash:a,searchoption:{[t.inputId]:{value:t.keyword}},searchsortsubmit:""},i=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=sortid",method:"post",params:i,data:l})}))}function u(e){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_model",method:"get",params:e})}function s(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=model_down_form",method:"get"})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=download_model",method:"post",data:e})}async function d(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function p(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},49527:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(66252),o=a(3577),l=a(2262);const i={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(e){const t=e,a=(0,n.Fl)((()=>{const e={fontSize:t.size};return t.color&&(e.color=t.color),e}));return(t,r)=>{const u=(0,n.up)("vab-icon");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(u,{icon:e.icon,style:(0,o.j5)((0,l.SU)(a)),class:"icon"},null,8,["icon","style"]),(0,n._)("span",{style:(0,o.j5)((0,l.SU)(a))},(0,o.zw)(e.text),5)])}}};function u(e){e.__source="src/components/IconText/index.vue"}var s=a(83744);"function"===typeof u&&u(r);const c=(0,s.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var d=c},50668:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(10661),o=(a(3241),a(35095),a(66252)),l=a(2262),i=a(49527),r={__name:"tooltip",props:{tip:{type:String,default:""}},emits:["icon-click"],setup(e,{emit:t}){return(t,a)=>{const r=n.Q0;return(0,o.wg)(),(0,o.j4)(r,{effect:"dark",content:e.tip,placement:"top"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(i["default"]),(0,o.dG)(t.$attrs,{onClick:a[0]||(a[0]=e=>t.$emit("icon-click"))}),null,16)])),_:1},8,["content"])}}};function u(e){e.__source="src/components/IconText/tooltip.vue"}"function"===typeof u&&u(r);const s=r;var c=s},99789:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(15659),o=(a(3241),a(10444),a(20129)),l=(a(69840),a(6589),a(10661)),i=(a(35095),a(47820)),r=(a(50986),a(61715),a(57658),a(66252)),u=a(2262),s=a(86136),c=a(44904);const d={client_id:[{required:!0,message:"请选择设备",trigger:"change"}]};var p=a(22201);const f={class:"comprehensive-form-container"};var m={__name:"create_dialog",setup(e,{expose:t}){const a=(0,p.tv)(),m=(0,u.iH)(!1),_=(0,u.iH)([]),w=(0,u.iH)([]),v=(0,u.iH)(),h=()=>({client_id:"",to_device_to_container:"to_host",container_id:"",model_thread_id:""}),g=(0,u.iH)({...h()}),y=(0,u.iH)({...d});function k(e){m.value=!0,g.value={...h(),model_thread_id:e},b(),(0,r.Y3)((()=>{v.value.clearValidate()}))}async function b(){const{body:{hosts:e}}=await(0,c.GT)();_.value=e||[],w.value=[]}function W(e){const t=_.value.find((t=>t.host_id===e));w.value=t?t.containers:[],S.value=t?t.host_jump:""}function x(e){g.value.to_device_to_container=e>0?"to_container":"to_host";const t=_.value.find((e=>e.host_id==g.value.client_id));if(t){const a=t.containers.find((t=>t.ct_id===e));a&&(S.value=a.ct_jump)}}const S=(0,u.iH)("");async function U(){await v.value.validate((async(e,t)=>{if(!e)return!1;await(0,c._S)(g.value),m.value=!1,"device_detail"===S.value?a.push({name:"DeviceDetail",params:{id:g.value.client_id},query:{tab:"model-list"}}):a.push({name:"Myhosts"})}))}return t({showDialog:k}),(e,t)=>{const a=i.BT,c=i.km,d=(0,r.up)("vab-icon"),p=l.Q0,h=o.nH,k=o.ly,b=n.ElButton;return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)((0,u.SU)(s["default"]),{modelValue:(0,u.SU)(m),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,u.dq)(m)?m.value=e:null),title:"模型下载",width:"600px"},{footer:(0,r.w5)((()=>[(0,r.Wm)(b,{onClick:t[2]||(t[2]=e=>m.value=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("取 消")])),_:1}),(0,r.Wm)(b,{type:"primary",onClick:U},{default:(0,r.w5)((()=>[(0,r.Uk)(" 确 定 ")])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(k,{ref_key:"formRef",ref:v,class:"demo-form",model:(0,u.SU)(g),rules:(0,u.SU)(y),"label-width":"auto"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{label:"下载到设备",prop:"client_id",class:"flex"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:(0,u.SU)(g).client_id,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,u.SU)(g).client_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name flex-1",onChange:W},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,u.SU)(_),(e=>((0,r.wg)(),(0,r.j4)(a,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(p,{effect:"dark",content:"模型将下载到选中设备中，统一保存在本软件安装目录的model路径下",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1}),(0,r.Wm)(h,{label:"应用到容器",class:"flex"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:(0,u.SU)(g).container_id,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,u.SU)(g).container_id=e),filterable:"",placeholder:"从“我的容器”里选择",class:"contianer-name flex-1",onChange:x},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,u.SU)(w),(e=>((0,r.wg)(),(0,r.j4)(a,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(p,{effect:"dark",content:"模型将下载到选中容器中，统一保存在容器的/root/model/目录下",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function _(e){e.__source="src/views/gpumarket/models/components/create_dialog.vue"}var w=a(83744);"function"===typeof _&&_(m);const v=(0,w.Z)(m,[["__scopeId","data-v-1ff8427b"]]);var h=v},32007:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(27750),o=a(49676),l=(a(3241),a(73204),a(91194)),i=(a(2993),a(32590),a(77669)),r=(a(95774),a(15659)),u=(a(10444),a(86398)),s=(a(69448),a(66252)),c=a(3577),d=a(2262),p=a(50668),f=a(99789),m=a(44904);const _={class:"description-container"},w={class:"icon-wrapper"},v={class:"icon-wrapper"},h={class:"icon-wrapper"},g={class:"icon-wrapper"},y={class:"icon-wrapper"};var k={__name:"host_table",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change-page","reload"],setup(e,{emit:t}){const a=(0,d.iH)(null),k=e=>{a.value.showDialog(e)};function b(e){t("change-page",e)}async function W(e){await(0,m._c)(e),t("reload")}async function x(e){await(0,m.Pb)(e),t("reload")}return(t,m)=>{const S=(0,s.up)("router-link"),U=u.gi,j=r.ElButton,z=i.vs,C=l.QQ,D=l.Lf,Z=o.R,H=n.Z;return(0,s.wg)(),(0,s.iD)("div",_,[e.tableData.length?((0,s.wg)(),(0,s.j4)(H,{key:0,shadow:"hover"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.tableData,(e=>((0,s.wg)(),(0,s.j4)(D,{key:e.tid,column:1,size:"small",class:"custom-descriptions"},{title:(0,s.w5)((()=>[(0,s.Wm)(S,{to:`/gpumarket/model/${e.tid}`,class:"marginright"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.subject),1)])),_:2},1032,["to"]),(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.threadsortshow.optionlist.model_star.value),1)])),_:2},1024)])),extra:(0,s.w5)((()=>[(0,s.Wm)(j,{type:"primary",onClick:t=>k(e.tid)},{default:(0,s.w5)((()=>[(0,s.Uk)(" 下载 ")])),_:2},1032,["onClick"])])),default:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s._)("div",w,[(0,s.Wm)(S,{to:e.author_route,class:"flex"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{size:"small",src:e.authoravatar,class:"marginright"},null,8,["src"]),(0,s.Wm)(U,{class:"marginright"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.author),1)])),_:2},1024)])),_:2},1032,["to"]),(0,s.Wm)(U,{class:"marginright"},{default:(0,s.w5)((()=>[(0,s.Uk)("| "+(0,c.zw)(e.diff_date)+"更新",1)])),_:2},1024)])])),_:2},1024),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"mx-1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.message),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s._)("div",v,[e.favid?((0,s.wg)(),(0,s.j4)(p["default"],{key:0,icon:"star-fill",color:"var(--has-collected-color)",text:e.favtimes,tip:"取消收藏",class:"cursor-pointer",onClick:t=>x(e.favid)},null,8,["text","onClick"])):((0,s.wg)(),(0,s.j4)(p["default"],{key:1,icon:"star-line",text:e.favtimes,tip:"收藏",class:"cursor-pointer",onClick:t=>W(e.tid)},null,8,["text","onClick"]))]),(0,s._)("div",h,[(0,s.Wm)(p["default"],{icon:"download-2-line",text:e.threadsortshow.optionlist.model_download.value,tip:"下载"},null,8,["text"])]),(0,s._)("div",g,[(0,s.Wm)(p["default"],{icon:"database-2-line",text:e.replies,tip:"评论"},null,8,["text"])]),(0,s._)("div",y,[(0,s.Wm)(p["default"],{icon:"database-2-line",text:e.threadsortshow.optionlist.model_size.value,tip:"大小"},null,8,["text"])])])),_:2},1024)])),_:2},1024)))),128)),(0,s.Wm)(Z,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:b},null,8,["current-page","page-size","total"])])),_:1})):((0,s.wg)(),(0,s.j4)(H,{key:1,shadow:"hover"},{default:(0,s.w5)((()=>[(0,s.Uk)("暂无模型记录")])),_:1})),(0,s.Wm)((0,d.SU)(f["default"]),{ref_key:"createDialogRef",ref:a},null,512)])}}};function b(e){e.__source="src/views/gpumarket/models/components/host_table.vue"}var W=a(83744);"function"===typeof b&&b(k);const x=(0,W.Z)(k,[["__scopeId","data-v-b55143b0"]]);var S=x},27750:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(30032),o=(a(3241),a(91154),a(97830)),l=(a(13768),a(66252)),i=a(2262),r=a(3577),u=a(22201),s=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,i.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,u.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,u)=>{const s=o.vk,c=n.Kf;return(0,l.wg)(),(0,l.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[e.skeleton?((0,l.wg)(),(0,l.j4)(s,{key:0,animated:"",loading:(0,i.SU)(a),rows:e.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"header",{},(()=>[(0,l.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof c&&c(s);const p=(0,d.Z)(s,[["__scopeId","data-v-391150ea"]]);var f=p}}]);