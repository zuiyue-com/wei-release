/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6818,9884,6682,3532],{48432:function(e,a,t){t.d(a,{Z:function(){return r}});t(57658);var n=t(2262),o=t(66252),l=t(26010);function r(e=!1){const a=(0,n.iH)({page:1}),t=(0,n.iH)([]),r=(0,n.qj)({pageSize:1,total:1,isFinished:!1,isLoading:!1});let u;const s=(0,o.Fl)((()=>r.isLoading?"loading":r.isFinished?"nomore":"loadmore"));function i(){return a.value.page=1,t.value=[],r.isFinished=!1,c(u)}function d(){if(!r.isFinished&&!r.isLoading)return a.value.page++,c(u)}function c(n){return u=n,r.isLoading=!0,n().then((({body:n})=>{const{list:o,page_perpage:u,page_allcount:s}=n;return e?t.value.push(...o||[]):t.value=o||[],r.pageSize=parseInt(u),r.total=parseInt(s),(0,l.Gc)(a.value.page,r.pageSize,r.total)?r.isFinished=!0:r.isFinished=!1,n})).finally((()=>{r.isLoading=!1}))}return{queryForm:a,dataList:t,pagination:r,loadMoreStatus:s,pullDownRefresh:i,reachBottom:d,loadData:c}}},38263:function(e,a,t){t.r(a),t.d(a,{default:function(){return I}});var n=t(4350),o=(t(3241),t(91103),t(73632)),l=(t(74965),t(22040)),r=(t(99426),t(27750)),u=t(7608),s=t(49927),i=t(20129),d=(t(69840),t(15659)),c=(t(10444),t(6589),t(57018)),p=(t(74367),t(47820)),f=(t(50986),t(61715),t(66252)),m=t(49963),_=t(2262),v=t(71726),y=t(23471),g=t(5448),w=t(65781),h=t(48432),b=t(26010),k=t(20681);const S={class:"task-management-container"};var W={__name:"index",setup(e){const a=(0,f.f3)("$sub"),t=(0,f.f3)("$unsub"),{startLoadProgress:W,stopTimer:U}=(0,k.Z)(),{queryForm:Z,dataList:F,pagination:I,loadData:V}=(0,h.Z)(),L=(0,f.Fl)((()=>F.value.map((e=>(e.format_ct_host_name=(0,b.fM)(e.ct_host_name,4,"***",4),e.format_ct_image_ci_name=(0,b.fM)(e.ct_image_ci_name,4,"***",4),e))))),x=(0,_.iH)({type:"uuid",keyword:""});async function $(){const e={[x.value.type]:x.value.keyword},{list:a}=await V((()=>(0,v.Bb)(Z.value,e)));W(a,"ct_id","ct_operation_array",F,y.cu,$)}function D(e){Z.value.page=e,$()}return a("reload-my-docker-list",(()=>{$()})),(0,f.bv)((()=>{$()})),(0,f.Ah)((()=>{U(),t("reload-my-docker-list")})),(e,a)=>{const t=p.BT,v=p.km,y=c.EZ,h=i.nH,b=d.ElButton,k=i.ly,W=s.Z,U=u.Z,F=r.Z,V=l.Dv,j=o.dq,q=n.t;return(0,f.wg)(),(0,f.iD)("div",S,[(0,f.Wm)(U,{class:"page-header"},{default:(0,f.w5)((()=>[(0,f.Wm)(W,null,{default:(0,f.w5)((()=>[(0,f.Wm)(k,{inline:"",onSubmit:a[2]||(a[2]=(0,m.iM)((()=>{}),["prevent"]))},{default:(0,f.w5)((()=>[(0,f.Wm)(h,null,{default:(0,f.w5)((()=>[(0,f.Wm)(y,{modelValue:(0,_.SU)(x).keyword,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,_.SU)(x).keyword=e),placeholder:"请输入内容",style:{width:"420px"},clearable:""},{prepend:(0,f.w5)((()=>[(0,f.Wm)(v,{modelValue:(0,_.SU)(x).type,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,_.SU)(x).type=e),placeholder:"请选择"},{default:(0,f.w5)((()=>[(0,f.Wm)(t,{label:"主机UUID",value:"uuid"}),(0,f.Wm)(t,{label:"容器名称",value:"container_name"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,f.Wm)(h,null,{default:(0,f.w5)((()=>[(0,f.Wm)(b,{icon:(0,_.SU)(w.Search),type:"primary",onClick:$},{default:(0,f.w5)((()=>[(0,f.Uk)(" 查询 ")])),_:1},8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,f.Wm)(j,{gutter:20,span:"24"},{default:(0,f.w5)((()=>[(0,f.Wm)(V,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,f.w5)((()=>[(0,f.Wm)(F,{shadow:"hover"},{default:(0,f.w5)((()=>[(0,f.wy)((0,f.Wm)((0,_.SU)(g["default"]),{page:(0,_.SU)(Z).page,"table-data":(0,_.SU)(L),pagination:(0,_.SU)(I),onChangePage:D,onReload:$},null,8,["page","table-data","pagination"]),[[q,(0,_.SU)(I).isLoading]])])),_:1})])),_:1})])),_:1})])}}};function U(e){e.__source="src/views/gpumarket/myhosts/index.vue"}var Z=t(83744);"function"===typeof U&&U(W);const F=(0,Z.Z)(W,[["__scopeId","data-v-521ec730"]]);var I=F},27750:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(30032),o=(t(3241),t(91154),t(97830)),l=(t(13768),t(66252)),r=t(2262),u=t(3577),s=t(22201),i=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,r.iH)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,s.iS)(((e,t,n)=>{clearInterval(a),n()})),(a,s)=>{const i=o.vk,d=n.Kf;return(0,l.wg)(),(0,l.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[e.skeleton?((0,l.wg)(),(0,l.j4)(i,{key:0,animated:"",loading:(0,r.SU)(t),rows:e.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(a.$slots,"header",{},(()=>[(0,l.Uk)((0,u.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var c=t(83744);"function"===typeof d&&d(i);const p=(0,c.Z)(i,[["__scopeId","data-v-391150ea"]]);var f=p},49927:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(22040),o=(t(3241),t(99426),t(66252));const l={class:"top-panel"};function r(e,a){const t=n.Dv;return(0,o.wg)(),(0,o.j4)(t,{span:24},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o.WI)(e.$slots,"default")])])),_:3})}function u(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var s=t(83744);const i={};"function"===typeof u&&u(i);const d=(0,s.Z)(i,[["render",r]]);var c=d},7608:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(73632),o=(t(3241),t(74965),t(66252));function l(e,a){const t=n.dq;return(0,o.wg)(),(0,o.j4)(t,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var u=t(83744);const s={};"function"===typeof r&&r(s);const i=(0,u.Z)(s,[["render",l],["__scopeId","data-v-172989c8"]]);var d=i}}]);