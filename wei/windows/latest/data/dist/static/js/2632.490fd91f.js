/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 18:46:50
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2632,3377,6700,635],{45986:function(e,a,t){t.d(a,{AX:function(){return d},KG:function(){return i},X4:function(){return c},Xc:function(){return m},bh:function(){return r},m9:function(){return s},rK:function(){return u}});var o=t(96486),n=t(92325),l=t(11555);function i(e){const a=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"get",params:a})}async function u(e,a){return(0,l.Gv)().then((({body:{hash:t}})=>{const l={formhash:t,searchoption:{[a.inputId]:{value:a.keyword}},searchsortsubmit:""},i=(0,o.pickBy)(e,(e=>""!==e));return(0,n.Z)({url:"/wwwapi.php?to=suanli_market_image&searchsort=1",method:"post",params:i,data:l})}))}function r(e){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_image",method:"get",params:e})}function d(){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_container_form",method:"get"})}function s(e){return(0,n.Z)({url:"/wwwapi.php?to=suanli_market&modac=image_create_download",method:"post",data:e})}async function c(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:a}})}async function m(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:a}})}},26731:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var o=t(15659),n=(t(3241),t(10444),t(20129)),l=(t(69840),t(57018)),i=(t(74367),t(63715)),u=(t(76252),t(72319),t(6589),t(10661)),r=(t(35095),t(47820)),d=(t(50986),t(61715),t(57658),t(66252)),s=t(2262),c=t(96486),m=t(86136),p=t(45986);const _={host_id:[{required:!0,message:"请选择设备",trigger:"change"}],container_name:[{required:!0,message:"容器名称必填",trigger:"change"}]};var f=t(22201);const h={class:"comprehensive-form-container"};var g={__name:"create_dialog",setup(e,{expose:a}){const t=(0,f.tv)(),g=(0,s.iH)(!1),w=(0,s.iH)([]),v=(0,s.iH)(),U=()=>({host_id:"",image_thread_id:"",host_gpu_select:[],do_what:"create",container_name:""}),S=(0,s.iH)({...U()}),k=(0,s.iH)({..._});function y(e){g.value=!0,S.value={...U(),image_thread_id:e},D()}function W(){g.value=!1,v.value.resetFields()}function b(e){""===e[e.length-1]?(S.value.host_gpu_select=[""],S.value.do_what="onlypull"):(S.value.host_gpu_select=e.filter((e=>""!==e)),S.value.do_what="create")}async function D(){const{body:e}=await(0,p.AX)();w.value=e||[]}const H=(0,d.Fl)((()=>{const e=w.value.find((e=>e.host_id==S.value.host_id));return e?.host_gpu_digital_ids||[]}));async function F(){await v.value.validate((async(e,a)=>{if(!e)return!1;const o=(0,c.cloneDeep)(S.value);"onlypull"===o.do_what&&(o.host_gpu_select=[]),await(0,p.m9)(o),g.value=!1,t.push({name:"DeviceDetail",params:{id:S.value.host_id},query:{tab:"docker-list"}})}))}return a({showDialog:y}),(e,a)=>{const t=r.BT,c=r.km,p=(0,d.up)("vab-icon"),_=u.Q0,f=n.nH,U=i.lm,y=i.z5,D=l.EZ,Z=n.ly,R=o.ElButton;return(0,d.wg)(),(0,d.iD)("div",h,[(0,d.Wm)((0,s.SU)(m["default"]),{modelValue:(0,s.SU)(g),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,s.dq)(g)?g.value=e:null),title:"创建容器",width:"600px",onClose:W},{footer:(0,d.w5)((()=>[(0,d.Wm)(R,{onClick:W},{default:(0,d.w5)((()=>[(0,d.Uk)("取 消")])),_:1}),(0,d.Wm)(R,{type:"primary",onClick:F},{default:(0,d.w5)((()=>[(0,d.Uk)(" 确 定 ")])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(Z,{ref_key:"formRef",ref:v,class:"demo-form",model:(0,s.SU)(S),rules:(0,s.SU)(k),"label-width":"auto"},{default:(0,d.w5)((()=>[(0,d.Wm)(f,{label:"选择设备",prop:"host_id"},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{modelValue:(0,s.SU)(S).host_id,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,s.SU)(S).host_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,s.SU)(w),(e=>((0,d.wg)(),(0,d.j4)(t,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(_,{effect:"dark",content:"从“我的设备”里选择非出租状态的设备<br>镜像将拉取到对应设备上<br>如需同时创建容器，请选择使用的显卡数量",placement:"top",class:"mx-1","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(f,{label:"GPU编号"},{default:(0,d.w5)((()=>[(0,d.Wm)(y,{modelValue:(0,s.SU)(S).host_gpu_select,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(S).host_gpu_select=e),onChange:b},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,s.SU)(H),(e=>((0,d.wg)(),(0,d.j4)(U,{key:e.gpu_digital_id,label:e.gpu_digital_id},null,8,["label"])))),128)),(0,d.Wm)(U,{label:""},{default:(0,d.w5)((()=>[(0,d.Uk)("仅拉取，不创建容器")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"create"===(0,s.SU)(S).do_what?((0,d.wg)(),(0,d.j4)(f,{key:0,label:"容器名称",prop:"container_name"},{default:(0,d.w5)((()=>[(0,d.Wm)(D,{modelValue:(0,s.SU)(S).container_name,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,s.SU)(S).container_name=e),placeholder:"创建完成后好在“我的容器”中找它",class:"contianer-name"},null,8,["modelValue"])])),_:1})):(0,d.kq)("",!0)])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function w(e){e.__source="src/views/gpumarket/images/components/create_dialog.vue"}var v=t(83744);"function"===typeof w&&w(g);const U=(0,v.Z)(g,[["__scopeId","data-v-708e2358"]]);var S=U},88194:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var o=t(73632),n=(t(3241),t(74965),t(77669)),l=(t(95774),t(15659)),i=(t(10444),t(22040)),u=(t(99426),t(27750)),r=t(31452),d=(t(68445),t(66252)),s=t(3577),c=t(2262),m=t(1479),p=t(16299),_=t(91131),f=t(57506),h=t(63099),g=t(16693),w=t(64039),v=t(15790),U=t(76191),S=t(27324),k=t(81464),y=t(26731),W=t(47720);const b={class:"post-detail-container"},D={key:0,class:"mb-4"},H=["innerHTML"],F={class:"topic"},Z={class:"comment-form"},R={class:"avatar"};var V={__name:"detail",setup(e){const a=(0,v.L)(),{getAvatar:t}=(0,W.Jk)(a),V=(0,c.iH)(null),x=(0,c.iH)(null),{topicInfo:A,imageTimeline:C,images:T,getTid:q,getPid:I,getFid:L,canAction:B,getTopicTags:G,hasNoMoreData:M,loadTopic:j,loadAddedTopic:z,loadMoreComments:E,handleDelFavTopic:K,handleAddFavTopic:X,interceptLinkHref:Y,imageInfo:P}=(0,S.Z)(),J=(0,U.Y)();function N(e,a){V.value.bindReplyAuthor(e,a)}function Q(e){P.imageIndex=e,P.imageId=T.value[e].id}function O(e,a){x.value.showDialog(e,a)}(0,d.bv)((()=>{J.changeActiveMenu("/gpumarket/images")}));const $=(0,c.iH)(null);function ee(e){$.value.showDialog(e)}return(e,a)=>{const v=r.E2,U=u.Z,S=i.Dv,W=l.ElButton,J=n.vs,ae=o.dq;return(0,d.wg)(),(0,d.iD)("div",b,[(0,d.Wm)(ae,{gutter:20},{default:(0,d.w5)((()=>[(0,d.Wm)(S,{lg:16,md:12,sm:24,xl:16,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(U,{shadow:"hover"},{default:(0,d.w5)((()=>[(0,d._)("h3",null,(0,s.zw)((0,c.SU)(A).detail.subject),1),(0,c.SU)(C).author?((0,d.wg)(),(0,d.iD)("div",D,[(0,d.Uk)(" 作者："+(0,s.zw)((0,c.SU)(C).author.value)+" 网址： ",1),(0,d.Wm)(v,{onClick:a[0]||(a[0]=e=>(0,c.SU)(k.Z)((0,c.SU)(C).homepage.value))},{default:(0,d.w5)((()=>[(0,d.Uk)((0,s.zw)((0,c.SU)(C).homepage.value),1)])),_:1})])):(0,d.kq)("",!0),(0,d._)("div",{class:"description",onClick:a[1]||(a[1]=(...e)=>(0,c.SU)(Y)&&(0,c.SU)(Y)(...e)),innerHTML:(0,c.SU)(A).detail.message},null,8,H),(0,d.Wm)((0,c.SU)(p["default"]),{images:(0,c.SU)(T),"image-index":(0,c.SU)(P).imageIndex,onChange:Q},null,8,["images","image-index"])])),_:1})])),_:1}),(0,d.Wm)(S,{lg:8,md:12,sm:24,xl:8,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(U,{shadow:"hover"},{default:(0,d.w5)((()=>[(0,d._)("div",F,[(0,d.Wm)((0,c.SU)(m["default"]),{topic:(0,c.SU)(A),"can-action":(0,c.SU)(B),tags:(0,c.SU)(G)},null,8,["topic","can-action","tags"]),(0,d.Wm)((0,c.SU)(_["default"]),{topic:(0,c.SU)(A),"image-timeline":(0,c.SU)(C),"can-action":(0,c.SU)(B),onDelFav:(0,c.SU)(K),onAddFav:(0,c.SU)(X),onReport:a[2]||(a[2]=e=>O((0,c.SU)(I),(0,c.SU)(L)))},null,8,["topic","image-timeline","can-action","onDelFav","onAddFav"]),(0,d.Wm)((0,c.SU)(w["default"]),{detail:(0,c.SU)(C)},{default:(0,d.w5)((()=>[(0,d.Wm)(W,{type:"primary",onClick:a[3]||(a[3]=e=>ee((0,c.SU)(q)))},{default:(0,d.w5)((()=>[(0,d.Uk)(" 下载镜像 ")])),_:1})])),_:1},8,["detail"]),(0,d.Wm)((0,c.SU)(y["default"]),{ref_key:"createDialogRef",ref:$},null,512),(0,d._)("div",Z,[(0,d._)("div",R,[(0,d.Wm)(J,{src:(0,c.SU)(t)},null,8,["src"])]),(0,d.Wm)((0,c.SU)(f["default"]),{ref_key:"topicFormRef",ref:V,tid:(0,c.SU)(q),onReload:(0,c.SU)(z)},null,8,["tid","onReload"])]),(0,d.Wm)((0,c.SU)(h["default"]),{comments:(0,c.SU)(A).comments,"no-more":(0,c.SU)(M),onReply:N,onReport:O,onReload:(0,c.SU)(j),onLoadmore:(0,c.SU)(E)},null,8,["comments","no-more","onReload","onLoadmore"])]),(0,d.Wm)((0,c.SU)(g["default"]),{ref_key:"reportDialogRef",ref:x},null,512)])),_:1})])),_:1})])),_:1})])}}};function x(e){e.__source="src/views/gpumarket/images/detail.vue"}var A=t(83744);"function"===typeof x&&x(V);const C=(0,A.Z)(V,[["__scopeId","data-v-468fc2b2"]]);var T=C}}]);