/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[918],{45986:function(e,t,a){a.d(t,{AX:function(){return u},KG:function(){return i},X4:function(){return d},Xc:function(){return p},bh:function(){return s},m9:function(){return c},rK:function(){return r}});var n=a(96486),o=a(92325),l=a(11555);function i(e){const t=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:t})}async function r(e,t){return(0,l.Gv)().then((({body:{hash:a}})=>{const l={formhash:a,searchoption:{[t.inputId]:{value:t.keyword}},searchsortsubmit:""},i=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"post",params:i,data:l})}))}function s(e){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_image",method:"get",params:e})}function u(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_container_form",method:"get"})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_download",method:"post",data:e})}async function d(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:t}})}async function p(e){const{body:{hash:t}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:t}})}},49527:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(66252),o=a(3577),l=a(2262);const i={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(e){const t=e,a=(0,n.Fl)((()=>{const e={fontSize:t.size};return t.color&&(e.color=t.color),e}));return(t,r)=>{const s=(0,n.up)("vab-icon");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(s,{icon:e.icon,style:(0,o.j5)((0,l.SU)(a)),class:"icon"},null,8,["icon","style"]),(0,n._)("span",{style:(0,o.j5)((0,l.SU)(a))},(0,o.zw)(e.text),5)])}}};function s(e){e.__source="src/components/IconText/index.vue"}var u=a(83744);"function"===typeof s&&s(r);const c=(0,u.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var d=c},50668:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(10661),o=(a(3241),a(35095),a(66252)),l=a(2262),i=a(49527),r={__name:"tooltip",props:{tip:{type:String,default:""}},emits:["icon-click"],setup(e,{emit:t}){return(t,a)=>{const r=n.Q0;return(0,o.wg)(),(0,o.j4)(r,{effect:"dark",content:e.tip,placement:"top"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(i["default"]),(0,o.dG)(t.$attrs,{onClick:a[0]||(a[0]=e=>t.$emit("icon-click"))}),null,16)])),_:1},8,["content"])}}};function s(e){e.__source="src/components/IconText/tooltip.vue"}"function"===typeof s&&s(r);const u=r;var c=u},26731:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(15659),o=(a(3241),a(10444),a(20129)),l=(a(69840),a(57018)),i=(a(74367),a(63715)),r=(a(76252),a(72319),a(6589),a(10661)),s=(a(35095),a(47820)),u=(a(50986),a(61715),a(57658),a(66252)),c=a(2262),d=a(96486),p=a(86136),m=a(45986);const f={host_id:[{required:!0,message:"请选择设备",trigger:"change"}],container_name:[{required:!0,message:"容器名称必填",trigger:"change"}]};var _=a(22201);const w={class:"comprehensive-form-container"};var h={__name:"create_dialog",setup(e,{expose:t}){const a=(0,_.tv)(),h=(0,c.iH)(!1),g=(0,c.iH)([]),v=(0,c.iH)(),y=()=>({host_id:"",image_thread_id:"",host_gpu_select:[],do_what:"create",container_name:""}),k=(0,c.iH)({...y()}),b=(0,c.iH)({...f});function W(e){h.value=!0,k.value={...y(),image_thread_id:e},x()}function U(){h.value=!1,v.value.resetFields()}function S(e){""===e[e.length-1]?(k.value.host_gpu_select=[""],k.value.do_what="onlypull"):(k.value.host_gpu_select=e.filter((e=>""!==e)),k.value.do_what="create")}async function x(){const{body:e}=await(0,m.AX)();g.value=e||[]}const z=(0,u.Fl)((()=>{const e=g.value.find((e=>e.host_id==k.value.host_id));return e?.host_gpu_digital_ids||[]}));async function j(){await v.value.validate((async(e,t)=>{if(!e)return!1;const n=(0,d.cloneDeep)(k.value);"onlypull"===n.do_what&&(n.host_gpu_select=[]),await(0,m.m9)(n),h.value=!1,a.push({name:"DeviceDetail",params:{id:k.value.host_id},query:{tab:"docker-list"}})}))}return t({showDialog:W}),(e,t)=>{const a=s.BT,d=s.km,m=(0,u.up)("vab-icon"),f=r.Q0,_=o.nH,y=i.lm,W=i.z5,x=l.EZ,C=o.ly,D=n.ElButton;return(0,u.wg)(),(0,u.iD)("div",w,[(0,u.Wm)((0,c.SU)(p["default"]),{modelValue:(0,c.SU)(h),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,c.dq)(h)?h.value=e:null),title:"创建容器",width:"600px",onClose:U},{footer:(0,u.w5)((()=>[(0,u.Wm)(D,{onClick:U},{default:(0,u.w5)((()=>[(0,u.Uk)("取 消")])),_:1}),(0,u.Wm)(D,{type:"primary",onClick:j},{default:(0,u.w5)((()=>[(0,u.Uk)(" 确 定 ")])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)(C,{ref_key:"formRef",ref:v,class:"demo-form",model:(0,c.SU)(k),rules:(0,c.SU)(b),"label-width":"auto"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{label:"选择设备",prop:"host_id"},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{modelValue:(0,c.SU)(k).host_id,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(k).host_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(g),(e=>((0,u.wg)(),(0,u.j4)(a,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(f,{effect:"dark",content:"从“我的设备”里选择非出租状态的设备<br>镜像将拉取到对应设备上<br>如需同时创建容器，请选择使用的显卡数量",placement:"top",class:"mx-1","raw-content":""},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,u.Wm)(_,{label:"GPU编号"},{default:(0,u.w5)((()=>[(0,u.Wm)(W,{modelValue:(0,c.SU)(k).host_gpu_select,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(k).host_gpu_select=e),onChange:S},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(z),(e=>((0,u.wg)(),(0,u.j4)(y,{key:e.gpu_digital_id,label:e.gpu_digital_id},null,8,["label"])))),128)),(0,u.Wm)(y,{label:""},{default:(0,u.w5)((()=>[(0,u.Uk)("仅拉取，不创建容器")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"create"===(0,c.SU)(k).do_what?((0,u.wg)(),(0,u.j4)(_,{key:0,label:"容器名称",prop:"container_name"},{default:(0,u.w5)((()=>[(0,u.Wm)(x,{modelValue:(0,c.SU)(k).container_name,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.SU)(k).container_name=e),placeholder:"创建完成后好在“我的容器”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1})):(0,u.kq)("",!0)])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function g(e){e.__source="src/views/gpumarket/images/components/create_dialog.vue"}var v=a(83744);"function"===typeof g&&g(h);const y=(0,v.Z)(h,[["__scopeId","data-v-708e2358"]]);var k=y},50918:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(27750),o=a(49676),l=(a(3241),a(73204),a(91194)),i=(a(2993),a(32590),a(77669)),r=(a(95774),a(15659)),s=(a(10444),a(86398)),u=(a(69448),a(66252)),c=a(3577),d=a(2262),p=a(50668),m=a(26731),f=a(45986);const _={class:"description-container"},w={class:"icon-wrapper"},h={class:"icon-wrapper"},g={class:"icon-wrapper"},v={class:"icon-wrapper"},y={class:"icon-wrapper"},k={class:"icon-wrapper"};var b={__name:"host_table",props:{tableData:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},page:{type:Number,default:1}},emits:["change-page","reload"],setup(e,{emit:t}){const a=(0,d.iH)(null),b=e=>{a.value.showDialog(e)};function W(e){t("change-page",e)}async function U(e){await(0,f.X4)(e),t("reload")}async function S(e){await(0,f.Xc)(e),t("reload")}return(t,f)=>{const x=(0,u.up)("router-link"),z=(0,u.up)("vab-icon"),j=s.gi,C=r.ElButton,D=i.vs,Z=l.QQ,V=l.Lf,H=o.R,I=n.Z;return(0,u.wg)(),(0,u.iD)("div",_,[e.tableData.length?((0,u.wg)(),(0,u.j4)(I,{key:0,shadow:"hover"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.tableData,(e=>((0,u.wg)(),(0,u.j4)(V,{key:e.tid,column:1,size:"small",class:"custom-descriptions"},{title:(0,u.w5)((()=>[(0,u.Wm)(x,{to:`/gpumarket/image/${e.tid}`,class:"marginright"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e.subject),1)])),_:2},1032,["to"]),(0,u.Wm)(z,{icon:"github-line"}),(0,u.Wm)(j,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e.threadsortshow.optionlist.image_star.value),1)])),_:2},1024)])),extra:(0,u.w5)((()=>[(0,u.Wm)(C,{type:"primary",onClick:t=>b(e.tid)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 创建容器 ")])),_:2},1032,["onClick"])])),default:(0,u.w5)((()=>[(0,u.Wm)(Z,null,{default:(0,u.w5)((()=>[(0,u._)("div",w,[(0,u.Wm)(x,{to:e.author_route,class:"flex"},{default:(0,u.w5)((()=>[(0,u.Wm)(D,{size:"small",src:e.authoravatar,class:"marginright"},null,8,["src"]),(0,u.Wm)(j,{class:"marginright"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e.author),1)])),_:2},1024)])),_:2},1032,["to"]),(0,u.Wm)(j,{class:"marginright"},{default:(0,u.w5)((()=>[(0,u.Uk)("| "+(0,c.zw)(e.diff_date),1)])),_:2},1024)])])),_:2},1024),(0,u.Wm)(Z,null,{default:(0,u.w5)((()=>[(0,u.Wm)(j,{class:"mx-1"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e.message),1)])),_:2},1024)])),_:2},1024),(0,u.Wm)(Z,null,{default:(0,u.w5)((()=>[(0,u._)("div",h,[e.favid?((0,u.wg)(),(0,u.j4)(p["default"],{key:0,icon:"star-fill",color:"var(--has-collected-color)",text:e.favtimes,tip:"取消收藏",class:"cursor-pointer",onClick:t=>S(e.favid)},null,8,["text","onClick"])):((0,u.wg)(),(0,u.j4)(p["default"],{key:1,icon:"star-line",text:e.favtimes,tip:"收藏",class:"cursor-pointer",onClick:t=>U(e.tid)},null,8,["text","onClick"]))]),(0,u._)("div",g,[(0,u.Wm)(p["default"],{icon:"download-2-line",text:e.threadsortshow.optionlist.image_download.value,tip:"下载"},null,8,["text"])]),(0,u._)("div",v,[(0,u.Wm)(p["default"],{icon:"install-line",text:e.threadsortshow.optionlist.image_use.value,tip:"使用"},null,8,["text"])]),(0,u._)("div",y,[(0,u.Wm)(p["default"],{icon:"chat-poll-line",text:e.replies,tip:"评论"},null,8,["text"])]),(0,u._)("div",k,[(0,u.Wm)(p["default"],{icon:"database-2-line",text:e.threadsortshow.optionlist.image_size.value,tip:"大小"},null,8,["text"])])])),_:2},1024)])),_:2},1024)))),128)),(0,u.Wm)(H,{"current-page":e.page,layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:W},null,8,["current-page","page-size","total"])])),_:1})):((0,u.wg)(),(0,u.j4)(I,{key:1,shadow:"hover"},{default:(0,u.w5)((()=>[(0,u.Uk)("暂无镜像记录")])),_:1})),(0,u.Wm)((0,d.SU)(m["default"]),{ref_key:"createDialogRef",ref:a},null,512)])}}};function W(e){e.__source="src/views/gpumarket/images/components/host_table.vue"}var U=a(83744);"function"===typeof W&&W(b);const S=(0,U.Z)(b,[["__scopeId","data-v-3ee78f2d"]]);var x=S},27750:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(30032),o=(a(3241),a(91154),a(97830)),l=(a(13768),a(66252)),i=a(2262),r=a(3577),s=a(22201),u=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,i.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,s.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,s)=>{const u=o.vk,c=n.Kf;return(0,l.wg)(),(0,l.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[e.skeleton?((0,l.wg)(),(0,l.j4)(u,{key:0,animated:"",loading:(0,i.SU)(a),rows:e.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"header",{},(()=>[(0,l.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof c&&c(u);const p=(0,d.Z)(u,[["__scopeId","data-v-391150ea"]]);var m=p}}]);