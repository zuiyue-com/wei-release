/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9004,3377,6700,7279],{44904:function(e,a,t){t.d(a,{GT:function(){return r},Nl:function(){return d},Pb:function(){return m},_S:function(){return c},_c:function(){return s},fZ:function(){return i},nD:function(){return u}});var n=t(96486),o=t(92325),l=t(11555);function i(e){const a=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=typeid",method:"get",params:a})}async function u(e,a){return(0,l.Gv)().then((({body:{hash:t}})=>{const l={formhash:t,searchoption:{[a.inputId]:{value:a.keyword}},searchsortsubmit:""},i=(0,n.pickBy)(e,(e=>""!==e));return(0,o.Z)({url:"/wwwapi.php?to=suanli_market_model&filter=sortid",method:"post",params:i,data:l})}))}function d(e){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist&thread_forum=suanli_model",method:"get",params:e})}function r(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=model_down_form",method:"get"})}function c(e){return(0,o.Z)({url:"/wwwapi.php?to=suanli_market&modac=download_model",method:"post",data:e})}async function s(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:e,formhash:a}})}async function m(e){const{body:{hash:a}}=await(0,l.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:e,formhash:a}})}},99789:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var n=t(15659),o=(t(3241),t(10444),t(20129)),l=(t(69840),t(6589),t(10661)),i=(t(35095),t(47820)),u=(t(50986),t(61715),t(57658),t(66252)),d=t(2262),r=t(86136),c=t(44904);const s={client_id:[{required:!0,message:"请选择设备",trigger:"change"}]};var m=t(22201);const f={class:"comprehensive-form-container"};var p={__name:"create_dialog",setup(e,{expose:a}){const t=(0,m.tv)(),p=(0,d.iH)(!1),_=(0,d.iH)([]),v=(0,d.iH)([]),h=(0,d.iH)(),w=()=>({client_id:"",to_device_to_container:"to_host",container_id:"",model_thread_id:""}),U=(0,d.iH)({...w()}),g=(0,d.iH)({...s});function S(e){p.value=!0,U.value={...w(),model_thread_id:e},k(),(0,u.Y3)((()=>{h.value.clearValidate()}))}async function k(){const{body:{hosts:e}}=await(0,c.GT)();_.value=e||[],v.value=[]}function y(e){const a=_.value.find((a=>a.host_id===e));v.value=a?a.containers:[],b.value=a?a.host_jump:""}function W(e){U.value.to_device_to_container=e>0?"to_container":"to_host";const a=_.value.find((e=>e.host_id==U.value.client_id));if(a){const t=a.containers.find((a=>a.ct_id===e));t&&(b.value=t.ct_jump)}}const b=(0,d.iH)("");async function D(){await h.value.validate((async(e,a)=>{if(!e)return!1;await(0,c._S)(U.value),p.value=!1,"device_detail"===b.value?t.push({name:"DeviceDetail",params:{id:U.value.client_id},query:{tab:"model-list"}}):t.push({name:"Myhosts"})}))}return a({showDialog:S}),(e,a)=>{const t=i.BT,c=i.km,s=(0,u.up)("vab-icon"),m=l.Q0,w=o.nH,S=o.ly,k=n.ElButton;return(0,u.wg)(),(0,u.iD)("div",f,[(0,u.Wm)((0,d.SU)(r["default"]),{modelValue:(0,d.SU)(p),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,d.dq)(p)?p.value=e:null),title:"模型下载",width:"600px"},{footer:(0,u.w5)((()=>[(0,u.Wm)(k,{onClick:a[2]||(a[2]=e=>p.value=!1)},{default:(0,u.w5)((()=>[(0,u.Uk)("取 消")])),_:1}),(0,u.Wm)(k,{type:"primary",onClick:D},{default:(0,u.w5)((()=>[(0,u.Uk)(" 确 定 ")])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)(S,{ref_key:"formRef",ref:h,class:"demo-form",model:(0,d.SU)(U),rules:(0,d.SU)(g),"label-width":"auto"},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{label:"下载到设备",prop:"client_id",class:"flex"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{modelValue:(0,d.SU)(U).client_id,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,d.SU)(U).client_id=e),filterable:"",placeholder:"从“我的设备”里选择",class:"contianer-name flex-1",onChange:y},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(_),(e=>((0,u.wg)(),(0,u.j4)(t,{key:e.host_id,label:e.host_name||"未命名",value:e.host_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(m,{effect:"dark",content:"模型将下载到选中设备中，统一保存在本软件安装目录的model路径下",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1}),(0,u.Wm)(w,{label:"应用到容器",class:"flex"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{modelValue:(0,d.SU)(U).container_id,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,d.SU)(U).container_id=e),filterable:"",placeholder:"从“我的容器”里选择",class:"contianer-name flex-1",onChange:W},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(v),(e=>((0,u.wg)(),(0,u.j4)(t,{key:e.ct_id,label:e.ct_name,value:e.ct_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,u.Wm)(m,{effect:"dark",content:"模型将下载到选中容器中，统一保存在容器的/root/model/目录下",placement:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"question-line",class:"cursor-pointer ml-2"})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function _(e){e.__source="src/views/gpumarket/models/components/create_dialog.vue"}var v=t(83744);"function"===typeof _&&_(p);const h=(0,v.Z)(p,[["__scopeId","data-v-1ff8427b"]]);var w=h},50628:function(e,a,t){t.r(a),t.d(a,{default:function(){return A}});var n=t(73632),o=(t(3241),t(74965),t(77669)),l=(t(95774),t(15659)),i=(t(10444),t(22040)),u=(t(99426),t(27750)),d=t(31452),r=(t(68445),t(66252)),c=t(3577),s=t(2262),m=t(1479),f=t(16299),p=t(6737),_=t(57506),v=t(63099),h=t(16693),w=t(93595),U=t(15790),g=t(76191),S=t(27324),k=t(81464),y=t(99789),W=t(47720);const b={class:"post-detail-container"},D={key:0,class:"mb-4"},H=["innerHTML"],x={class:"topic"},T={class:"comment-form"},Z={class:"avatar"};var R={__name:"detail",setup(e){const a=(0,U.L)(),{getAvatar:t}=(0,W.Jk)(a),R=(0,s.iH)(null),C=(0,s.iH)(null),{topicInfo:F,imageTimeline:V,images:A,getTid:I,getPid:q,getFid:L,canAction:M,getTopicTags:j,hasNoMoreData:B,loadTopic:G,loadAddedTopic:Y,loadMoreComments:z,handleDelFavTopic:E,handleAddFavTopic:K,interceptLinkHref:N,imageInfo:P}=(0,S.Z)(),J=(0,g.Y)();function Q(e,a){R.value.bindReplyAuthor(e,a)}function O(e){P.imageIndex=e,P.imageId=A.value[e].id}function X(e,a){C.value.showDialog(e,a)}(0,r.bv)((()=>{J.changeActiveMenu("/gpumarket/models")}));const $=(0,s.iH)(null);async function ee(e){$.value.showDialog(e)}return(e,a)=>{const U=d.E2,g=u.Z,S=i.Dv,W=l.ElButton,J=o.vs,ae=n.dq;return(0,r.wg)(),(0,r.iD)("div",b,[(0,r.Wm)(ae,{gutter:20},{default:(0,r.w5)((()=>[(0,r.Wm)(S,{lg:16,md:12,sm:24,xl:16,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{shadow:"hover"},{default:(0,r.w5)((()=>[(0,r._)("h3",null,(0,c.zw)((0,s.SU)(F).detail.subject),1),(0,s.SU)(V).author?((0,r.wg)(),(0,r.iD)("div",D,[(0,r.Uk)(" 作者："+(0,c.zw)((0,s.SU)(V).author.value)+" 网址： ",1),(0,r.Wm)(U,{onClick:a[0]||(a[0]=e=>(0,s.SU)(k.Z)((0,s.SU)(V).homepage.value))},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)((0,s.SU)(V).homepage.value),1)])),_:1})])):(0,r.kq)("",!0),(0,r._)("div",{class:"description",onClick:a[1]||(a[1]=(...e)=>(0,s.SU)(N)&&(0,s.SU)(N)(...e)),innerHTML:(0,s.SU)(F).detail.message},null,8,H),(0,r.Wm)((0,s.SU)(f["default"]),{images:(0,s.SU)(A),"image-index":(0,s.SU)(P).imageIndex,onChange:O},null,8,["images","image-index"])])),_:1})])),_:1}),(0,r.Wm)(S,{lg:8,md:12,sm:24,xl:8,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{shadow:"hover"},{default:(0,r.w5)((()=>[(0,r._)("div",x,[(0,r.Wm)((0,s.SU)(m["default"]),{topic:(0,s.SU)(F),"can-action":(0,s.SU)(M),tags:(0,s.SU)(j)},null,8,["topic","can-action","tags"]),(0,r.Wm)((0,s.SU)(p["default"]),{topic:(0,s.SU)(F),"image-timeline":(0,s.SU)(V),"can-action":(0,s.SU)(M),onDelFav:(0,s.SU)(E),onAddFav:(0,s.SU)(K),onReport:a[2]||(a[2]=e=>X((0,s.SU)(q),(0,s.SU)(L)))},null,8,["topic","image-timeline","can-action","onDelFav","onAddFav"]),(0,r.Wm)((0,s.SU)(w["default"]),{detail:(0,s.SU)(V)},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{type:"primary",onClick:a[3]||(a[3]=e=>ee((0,s.SU)(I)))},{default:(0,r.w5)((()=>[(0,r.Uk)(" 下载模型 ")])),_:1})])),_:1},8,["detail"]),(0,r.Wm)((0,s.SU)(y["default"]),{ref_key:"createDialogRef",ref:$},null,512),(0,r._)("div",T,[(0,r._)("div",Z,[(0,r.Wm)(J,{src:(0,s.SU)(t)},null,8,["src"])]),(0,r.Wm)((0,s.SU)(_["default"]),{ref_key:"topicFormRef",ref:R,tid:(0,s.SU)(I),onReload:(0,s.SU)(Y)},null,8,["tid","onReload"])]),(0,r.Wm)((0,s.SU)(v["default"]),{comments:(0,s.SU)(F).comments,"no-more":(0,s.SU)(B),onReply:Q,onReport:X,onReload:(0,s.SU)(G),onLoadmore:(0,s.SU)(z)},null,8,["comments","no-more","onReload","onLoadmore"])]),(0,r.Wm)((0,s.SU)(h["default"]),{ref_key:"reportDialogRef",ref:C},null,512)])),_:1})])),_:1})])),_:1})])}}};function C(e){e.__source="src/views/gpumarket/models/detail.vue"}var F=t(83744);"function"===typeof C&&C(R);const V=(0,F.Z)(R,[["__scopeId","data-v-40a27c61"]]);var A=V}}]);