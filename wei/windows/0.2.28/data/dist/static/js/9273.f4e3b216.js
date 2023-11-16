/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-21 18:47:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9273,3617,2977],{63617:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(31452),r=(a(3241),a(68445),a(66252)),n=a(2262),o=a(3577),l=a(32977),i=a(19635);const u={key:0},c={key:1};var p={__name:"follower",props:{user:{type:Object,default:()=>{}},usernameKey:{type:String,default:""},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>{const e=t.user;return e.user_url=(0,i.gx)(e[t.userIdKey]),e}));return(t,i)=>{const p=s.E2,d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(d,{to:(0,n.SU)(a).user_url},{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(l["default"]),{user:(0,n.SU)(a),"avatar-key":e.avatarKey},{title:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a)[e.usernameKey]),1)])),_:1})])),description:(0,r.w5)((()=>[(0,n.SU)(a).recentnote?((0,r.wg)(),(0,r.iD)("div",u," 最近动作："+(0,o.zw)((0,n.SU)(a).recentnote),1)):((0,r.wg)(),(0,r.iD)("div",c,"没有最近动作"))])),bottom:(0,r.w5)((()=>[(0,r.Uk)(" 粉丝 "),(0,r.Wm)(p,{type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).follower),1)])),_:1}),(0,r.Uk)(" 关注 "),(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).following),1)])),_:1}),(0,r.Uk)(" 主题 "),(0,r.Wm)(p,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).threads),1)])),_:1}),(0,r.Uk)(" 帖子 "),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).posts),1)])),_:1}),(0,r.Uk)(" 喜欢 "),(0,r.Wm)(p,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).likes),1)])),_:1})])),action:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"action",{user:(0,n.SU)(a)})])),_:3},8,["user","avatar-key"])])),_:3},8,["to"])}}};function d(e){e.__source="src/components/UserRow/follower.vue"}"function"===typeof d&&d(p);const w=p;var f=w},32977:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var s=a(35756),r=(a(3241),a(19414),a(66252));const n={class:"list-item"},o={class:"list-item-meta"},l={key:0,class:"list-item-meta-avatar"},i={class:"list-item-meta-content"},u={class:"list-item-meta-title"},c={class:"list-item-meta-description"},p={class:"list-item-meta-bottom"},d={class:"list-item-meta-operate"};var w={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(e){return(t,a)=>{const w=s.F8;return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",o,[e.avatarKey?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(w,{src:e.user[e.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,r.kq)("",!0),(0,r._)("div",i,[(0,r._)("div",u,[(0,r.WI)(t.$slots,"title")]),(0,r._)("div",c,[(0,r.WI)(t.$slots,"description")]),(0,r._)("div",p,[(0,r.WI)(t.$slots,"bottom")])]),(0,r._)("div",d,[(0,r.WI)(t.$slots,"action")])])])}}};function f(e){e.__source="src/components/UserRow/index.vue"}var m=a(83744);"function"===typeof f&&f(w);const g=(0,m.Z)(w,[["__scopeId","data-v-4159f3f2"]]);var v=g},59273:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var s=a(4350),r=(a(3241),a(91103),a(73632)),n=(a(74965),a(49676)),o=(a(73204),a(22040)),l=(a(99426),a(76128)),i=(a(74828),a(66252));const u={class:"list-container"};function c(e,t,a,c,p,d){const w=l.GT,f=o.Dv,m=(0,i.up)("UserRowFollower"),g=n.R,v=r.dq,y=s.t;return(0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(v,{gutter:20},{default:(0,i.w5)((()=>[e.emptyShow?((0,i.wg)(),(0,i.j4)(f,{key:0,span:24},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(f,{span:24},{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.iD)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:e.followuid,class:"list-item"},[(0,i.Wm)(m,{user:e,"username-key":"username","avatar-key":"uAvator","user-id-key":"uid"},null,8,["user"])])))),128))])),[[y,e.listLoading]])])),_:1}),(0,i.Wm)(f,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{"current-page":e.page,"onUpdate:currentPage":t[0]||(t[0]=t=>e.page=t),layout:"prev, pager, next","page-size":e.pageSize,total:e.total,onCurrentChange:e.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])])),_:1})])),_:1})])}var p=a(12688),d=a(63617),w=a(2262),f=(0,i.aZ)({name:"List",components:{UserRowFollower:d["default"]},setup(){const e=(0,w.qj)({list:[],page:1,pageSize:1,total:1,listLoading:!0,emptyShow:!0}),t=async()=>{e.listLoading=!0;const{body:{list:t,page_perpage:a,page_allcount:s}}=await(0,p.dX)({page:e.page});e.list=t,e.pageSize=parseInt(a),e.total=parseInt(s),e.listLoading=!1,e.emptyShow=!1};return(0,i.bv)((()=>{t()})),{...(0,w.BK)(e),fetchData:t}}});function m(e){e.__source="src/views/setting/follow/following.vue"}var g=a(83744);"function"===typeof m&&m(f);const v=(0,g.Z)(f,[["render",c],["__scopeId","data-v-6be0e668"]]);var y=v}}]);