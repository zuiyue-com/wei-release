/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3976,2977],{32977:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=a(35756),n=(a(3241),a(19414),a(66252));const i={class:"list-item"},l={class:"list-item-meta"},r={key:0,class:"list-item-meta-avatar"},o={class:"list-item-meta-content"},u={class:"list-item-meta-title"},c={class:"list-item-meta-description"},p={class:"list-item-meta-bottom"},d={class:"list-item-meta-operate"};var g={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(t){return(e,a)=>{const g=s.F8;return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[t.avatarKey?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(g,{src:t.user[t.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,n.kq)("",!0),(0,n._)("div",o,[(0,n._)("div",u,[(0,n.WI)(e.$slots,"title")]),(0,n._)("div",c,[(0,n.WI)(e.$slots,"description")]),(0,n._)("div",p,[(0,n.WI)(e.$slots,"bottom")])]),(0,n._)("div",d,[(0,n.WI)(e.$slots,"action")])])])}}};function m(t){t.__source="src/components/UserRow/index.vue"}var v=a(83744);"function"===typeof m&&m(g);const _=(0,v.Z)(g,[["__scopeId","data-v-4159f3f2"]]);var f=_},83976:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var s=a(4350),n=(a(3241),a(91103),a(73632)),i=(a(74965),a(49676)),l=(a(73204),a(22040)),r=(a(99426),a(76128)),o=(a(74828),a(66252)),u=a(3577);const c={class:"list-container"},p=["innerHTML"],d=["innerHTML"];function g(t,e,a,g,m,v){const _=r.GT,f=l.Dv,w=(0,o.up)("router-link"),y=(0,o.up)("UserRow"),k=i.R,U=n.dq,W=s.t;return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(U,{gutter:20},{default:(0,o.w5)((()=>[t.emptyShow?((0,o.wg)(),(0,o.j4)(f,{key:0,span:24},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(f,{span:24},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.iD)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.listData,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Wm)(y,{user:t,"avatar-key":"uAvator"},{title:(0,o.w5)((()=>[(0,o.Wm)(w,{to:t.user_url},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.username),1)])),_:2},1032,["to"]),(0,o.Uk)(" 对 "),(0,o.Wm)(w,{to:t.my_url},{default:(0,o.w5)((()=>[(0,o.Uk)("您")])),_:2},1032,["to"]),(0,o.Uk)(" 说 ")])),description:(0,o.w5)((()=>[(0,o._)("div",{innerHTML:t.content},null,8,p)])),bottom:(0,o.w5)((()=>[(0,o._)("div",{innerHTML:t.dateline},null,8,d)])),_:2},1032,["user"])])))),128))])),[[W,t.listLoading]])])),_:1}),(0,o.Wm)(f,{span:24},{default:(0,o.w5)((()=>[t.list.length>0?((0,o.wg)(),(0,o.j4)(k,{key:0,"current-page":t.page,"onUpdate:currentPage":e[0]||(e[0]=e=>t.page=e),"page-size":t.pageSize,total:t.total,layout:"prev, pager, next",onCurrentChange:t.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])):(0,o.kq)("",!0)])),_:1})])),_:1})])}var m=a(56890),v=a(32977),_=a(30582),f=a(19635),w=a(2262),y=a(47720),k=(0,o.aZ)({name:"List",components:{UserRow:v["default"]},setup(){const t=(0,_.L)(),{getUserId:e}=(0,y.Jk)(t),a=(0,w.qj)({list:[],page:1,pageSize:1,total:1,listLoading:!0,emptyShow:!0});a.listData=(0,o.Fl)((()=>a.list.map((t=>(t.user_url=(0,f.gx)(t.uid),t.my_url=(0,f.gx)(e.value),t)))));const s=async()=>{a.listLoading=!0;const t={page:a.page},{body:{list:e,page_perpage:s,page_allcount:n}}=await(0,m._U)(t);a.list=e,a.pageSize=parseInt(s),a.total=parseInt(n),a.listLoading=!1,a.emptyShow=!1};return(0,o.bv)((()=>{s()})),{...(0,w.BK)(a),fetchData:s,getUserId:e,getUserCenterRouter:f.gx}}});function U(t){t.__source="src/views/setting/message/components/followMessageList.vue"}var W=a(83744);"function"===typeof U&&U(k);const h=(0,W.Z)(k,[["render",g],["__scopeId","data-v-3f6e8303"]]);var D=h}}]);