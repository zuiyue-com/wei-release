/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3454],{16273:function(e,a,t){t.d(a,{Z:function(){return p}});var o=t(30032),s=(t(3241),t(91154),t(97830)),n=(t(13768),t(66252)),l=t(2262),r=t(3577),d=t(22201),i=(0,n.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,l.iH)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,d.iS)(((e,t,o)=>{clearInterval(a),o()})),(a,d)=>{const i=s.vk,u=o.Kf;return(0,n.wg)(),(0,n.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,n.Nv)({default:(0,n.w5)((()=>[e.skeleton?((0,n.wg)(),(0,n.j4)(i,{key:0,animated:"",loading:(0,l.SU)(t),rows:e.skeletonRows},{default:(0,n.w5)((()=>[(0,n.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,n.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,n.w5)((()=>[(0,n.WI)(a.$slots,"header",{},(()=>[(0,n.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var c=t(83744);"function"===typeof u&&u(i);const g=(0,c.Z)(i,[["__scopeId","data-v-391150ea"]]);var p=g},23454:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});var o=t(49676),s=(t(3241),t(73204),t(73632)),n=(t(74965),t(22040)),l=(t(99426),t(16273)),r=t(15659),d=(t(10444),t(35756)),i=(t(19414),t(57534)),u=(t(92471),t(66252)),c=t(3577);const g={class:"goods-container"},p={class:"goods-card-body"},y={class:"goods-tag-group"},w={class:"goods-image-group"},v={class:"goods-image"},m={class:"goods-title"},f={class:"goods-price"},h={class:"goods-description"},_={class:"goods-detail"},k=["onClick"];function b(e,a,t,b,C,z){const S=i.Ks,q=(0,u.up)("vab-icon"),j=d.F8,x=r.ElButton,W=l.Z,F=n.Dv,N=s.dq,Z=o.R;return(0,u.wg)(),(0,u.iD)("div",g,[(0,u.Wm)(N,{gutter:20},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.list,((a,t)=>((0,u.wg)(),(0,u.j4)(F,{key:t,lg:8,md:8,sm:8,xl:6,xs:24},{default:(0,u.w5)((()=>[(0,u.Wm)(W,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,u.w5)((()=>[(0,u._)("div",p,[(0,u._)("div",y,[(0,u.Wm)(S,{hit:""},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(a.company),1)])),_:2},1024)]),(0,u._)("div",w,[(0,u._)("div",v,[a.icon?((0,u.wg)(),(0,u.j4)(q,{key:0,icon:a.icon},null,8,["icon"])):(0,u.kq)("",!0),a.image||a.svg?((0,u.wg)(),(0,u.j4)(j,{key:1,class:(0,c.C_)({isSvg:a.svg}),src:a.image||a.svg},null,8,["class","src"])):(0,u.kq)("",!0)])]),(0,u._)("div",m,(0,c.zw)(a.title),1),(0,u._)("div",f,[(0,u.Wm)(S,{hit:"",type:"warning"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(a.price),1)])),_:2},1024),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.label,(e=>((0,u.wg)(),(0,u.j4)(S,{key:e,hit:""},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e),1)])),_:2},1024)))),128))]),(0,u._)("div",h,(0,c.zw)(a.description),1),(0,u._)("div",_,[(0,u._)("a",{onClick:t=>e.download(a.id)},[(0,u.Wm)(x,{text:"",type:"primary"},{default:(0,u.w5)((()=>[(0,u.Uk)("安装镜像")])),_:1})],8,k)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,u.Wm)(Z,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"])])}var C=t(65781),z=t(52806),S=t(2262),q=(0,u.aZ)({name:"Goods",setup(){const e=(0,S.qj)({list:[],total:0,queryForm:{pageNo:1,pageSize:10,title:""},layout:"total, sizes, prev, pager, next, jumper"}),a=(0,u.f3)("$baseNotify"),t=async e=>{const t=await(0,z.Z)({url:"/index/download",method:"get",params:{id:e}});200===t.code?(console.log(t.data),a(`开始安装'${t.data}'，请稍后在'镜像'中查看'`,"成功","success","bottom-right")):a(t.msg,"失败","error","bottom-right")},o=async()=>{e.list=[],e.total=0},s=a=>{e.queryForm.pageSize=a,o()},n=a=>{e.queryForm.pageNo=a,o()},l=()=>{e.queryForm.pageNo=1,o()};return(0,u.bv)((()=>{o()})),{...(0,S.BK)(e),handleSizeChange:s,handleCurrentChange:n,queryData:l,download:t,Search:C.Search}}});function j(e){e.__source="src/views/index/components/image.vue"}var x=t(83744);"function"===typeof j&&j(q);const W=(0,x.Z)(q,[["render",b],["__scopeId","data-v-6bbc31f7"]]);var F=W}}]);