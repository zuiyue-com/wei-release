/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-21 18:47:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1860,3617,2977],{63617:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(31452),r=(a(3241),a(68445),a(66252)),n=a(2262),o=a(3577),l=a(32977),i=a(19635);const u={key:0},c={key:1};var p={__name:"follower",props:{user:{type:Object,default:()=>{}},usernameKey:{type:String,default:""},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>{const e=t.user;return e.user_url=(0,i.gx)(e[t.userIdKey]),e}));return(t,i)=>{const p=s.E2,d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(d,{to:(0,n.SU)(a).user_url},{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(l["default"]),{user:(0,n.SU)(a),"avatar-key":e.avatarKey},{title:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a)[e.usernameKey]),1)])),_:1})])),description:(0,r.w5)((()=>[(0,n.SU)(a).recentnote?((0,r.wg)(),(0,r.iD)("div",u," 最近动作："+(0,o.zw)((0,n.SU)(a).recentnote),1)):((0,r.wg)(),(0,r.iD)("div",c,"没有最近动作"))])),bottom:(0,r.w5)((()=>[(0,r.Uk)(" 粉丝 "),(0,r.Wm)(p,{type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).follower),1)])),_:1}),(0,r.Uk)(" 关注 "),(0,r.Wm)(p,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).following),1)])),_:1}),(0,r.Uk)(" 主题 "),(0,r.Wm)(p,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).threads),1)])),_:1}),(0,r.Uk)(" 帖子 "),(0,r.Wm)(p,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).posts),1)])),_:1}),(0,r.Uk)(" 喜欢 "),(0,r.Wm)(p,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)((0,n.SU)(a).likes),1)])),_:1})])),action:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"action",{user:(0,n.SU)(a)})])),_:3},8,["user","avatar-key"])])),_:3},8,["to"])}}};function d(e){e.__source="src/components/UserRow/follower.vue"}"function"===typeof d&&d(p);const f=p;var w=f},32977:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var s=a(35756),r=(a(3241),a(19414),a(66252));const n={class:"list-item"},o={class:"list-item-meta"},l={key:0,class:"list-item-meta-avatar"},i={class:"list-item-meta-content"},u={class:"list-item-meta-title"},c={class:"list-item-meta-description"},p={class:"list-item-meta-bottom"},d={class:"list-item-meta-operate"};var f={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(e){return(t,a)=>{const f=s.F8;return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",o,[e.avatarKey?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(f,{src:e.user[e.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,r.kq)("",!0),(0,r._)("div",i,[(0,r._)("div",u,[(0,r.WI)(t.$slots,"title")]),(0,r._)("div",c,[(0,r.WI)(t.$slots,"description")]),(0,r._)("div",p,[(0,r.WI)(t.$slots,"bottom")])]),(0,r._)("div",d,[(0,r.WI)(t.$slots,"action")])])])}}};function w(e){e.__source="src/components/UserRow/index.vue"}var m=a(83744);"function"===typeof w&&w(f);const g=(0,m.Z)(f,[["__scopeId","data-v-4159f3f2"]]);var v=g},1860:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(4350),r=(a(3241),a(91103),a(73632)),n=(a(74965),a(49676)),o=(a(73204),a(15659)),l=(a(10444),a(22040)),i=(a(99426),a(76128)),u=(a(74828),a(66252)),c=a(49963);const p={class:"list-container"};function d(e,t,a,d,f,w){const m=i.GT,g=l.Dv,v=o.ElButton,y=(0,u.up)("UserRowFollower"),_=n.R,k=r.dq,U=s.t;return(0,u.wg)(),(0,u.iD)("div",p,[(0,u.Wm)(k,{gutter:20},{default:(0,u.w5)((()=>[e.emptyShow?((0,u.wg)(),(0,u.j4)(g,{key:0,span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,u.kq)("",!0),(0,u.Wm)(g,{span:24},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.iD)("ul",null,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.list,(t=>((0,u.wg)(),(0,u.iD)("li",{key:t.followuid,class:"list-item"},[(0,u.Wm)(y,{user:t,"username-key":"fusername","avatar-key":"followAvator","user-id-key":"followuid"},{action:(0,u.w5)((({user:t})=>[(0,u.Wm)(v,{plain:"",type:"danger",onClick:(0,c.iM)((a=>e.handleDelete(t.followuid)),["prevent"])},{default:(0,u.w5)((()=>[(0,u.Uk)(" 取消关注 ")])),_:2},1032,["onClick"])])),_:2},1032,["user"])])))),128))])),[[U,e.listLoading]])])),_:1}),(0,u.Wm)(g,{span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{"current-page":e.page,"onUpdate:currentPage":t[0]||(t[0]=t=>e.page=t),layout:"prev, pager, next","page-size":e.pageSize,total:e.total,onCurrentChange:e.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])])),_:1})])),_:1})])}var f=a(12688),w=a(63617),m=a(2262),g=(0,u.aZ)({name:"List",components:{UserRowFollower:w["default"]},setup(){const e=(0,m.qj)({list:[],page:1,pageSize:1,total:1,listLoading:!0,emptyShow:!0}),t=async()=>{e.listLoading=!0;const{body:{list:t,page_perpage:a,page_allcount:s}}=await(0,f.lQ)({page:e.page});e.list=t,e.pageSize=parseInt(a),e.total=parseInt(s),e.listLoading=!1,e.emptyShow=!1},a=(0,u.f3)("$baseConfirm"),s=(0,u.f3)("$baseMessage"),r=e=>{a("您确定取消关注这个好友吗？","取关提示",(async()=>{try{await(0,f.Ie)(e),t(),s("已经取消关注","success","vab-hey-message-success")}catch(a){s("取消失败","error","vab-hey-message-error")}}),(()=>{}),"确定","取消")};return(0,u.bv)((()=>{t()})),{...(0,m.BK)(e),fetchData:t,handleDelete:r}}});function v(e){e.__source="src/views/setting/follow/follows.vue"}var y=a(83744);"function"===typeof v&&v(g);const _=(0,y.Z)(g,[["render",d],["__scopeId","data-v-72a949d9"]]);var k=_}}]);