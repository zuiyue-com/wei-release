/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 11:44:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1304,4427,7283],{94427:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(31452),r=(a(3241),a(68445),a(66252)),n=a(2262),l=a(3577),o=a(87283),i=a(20235);const u={key:0},c={key:1};var d={__name:"follower",props:{user:{type:Object,default:()=>{}},usernameKey:{type:String,default:""},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>{const e=t.user;return e.user_url=(0,i.gx)(e[t.userIdKey]),e}));return(t,i)=>{const d=s.E2,p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(p,{to:(0,n.SU)(a).user_url},{default:(0,r.w5)((()=>[(0,r.Wm)((0,n.SU)(o["default"]),{user:(0,n.SU)(a),"avatar-key":e.avatarKey,"user-id-key":e.userIdKey},{title:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a)[e.usernameKey]),1)])),_:1})])),description:(0,r.w5)((()=>[(0,n.SU)(a).recentnote?((0,r.wg)(),(0,r.iD)("div",u," 最近动作："+(0,l.zw)((0,n.SU)(a).recentnote),1)):((0,r.wg)(),(0,r.iD)("div",c,"没有最近动作"))])),bottom:(0,r.w5)((()=>[(0,r.Uk)(" 粉丝 "),(0,r.Wm)(d,{type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a).follower),1)])),_:1}),(0,r.Uk)(" 关注 "),(0,r.Wm)(d,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a).following),1)])),_:1}),(0,r.Uk)(" 主题 "),(0,r.Wm)(d,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a).threads),1)])),_:1}),(0,r.Uk)(" 帖子 "),(0,r.Wm)(d,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a).posts),1)])),_:1}),(0,r.Uk)(" 喜欢 "),(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,n.SU)(a).likes),1)])),_:1})])),action:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"action",{user:(0,n.SU)(a)})])),_:3},8,["user","avatar-key","user-id-key"])])),_:3},8,["to"])}}};function p(e){e.__source="src/components/UserRow/follower.vue"}"function"===typeof p&&p(d);const m=d;var f=m},87283:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=a(57122),r=(a(3241),a(69540),a(66252)),n=a(2262),l=a(20235);const o=e=>((0,r.dD)("data-v-1f34b258"),e=e(),(0,r.Cn)(),e),i={class:"list-item"},u={class:"list-item-meta"},c={key:0,class:"list-item-meta-avatar"},d={key:1,class:"list-item-meta-avatar"},p=o((()=>(0,r._)("div",{class:"system-avatar"},"系统",-1))),m={class:"list-item-meta-content"},f={class:"list-item-meta-title"},w={class:"list-item-meta-description"},y={class:"list-item-meta-bottom"},v={class:"list-item-meta-operate"};var g={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>t.user[t.avatarKey])),o=(0,r.Fl)((()=>parseInt(t.user[t.userIdKey]))),g=(0,r.Fl)((()=>(0,l.gx)(o.value)));return(e,t)=>{const l=s.F8,_=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",u,[(0,n.SU)(o)>0?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(_,{to:(0,n.SU)(g)},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{src:(0,n.SU)(a),class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])),_:1},8,["to"])])):((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(l,{class:"el-avatar el-avatar--big el-avatar--circle"},{error:(0,r.w5)((()=>[p])),_:1})])),(0,r._)("div",m,[(0,r._)("div",f,[(0,r.WI)(e.$slots,"title")]),(0,r._)("div",w,[(0,r.WI)(e.$slots,"description")]),(0,r._)("div",y,[(0,r.WI)(e.$slots,"bottom")])]),(0,r._)("div",v,[(0,r.WI)(e.$slots,"action")])])])}}};function _(e){e.__source="src/components/UserRow/index.vue"}var k=a(83744);"function"===typeof _&&_(g);const U=(0,k.Z)(g,[["__scopeId","data-v-1f34b258"]]);var S=U},81304:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(4350),r=(a(3241),a(91103),a(73632)),n=(a(74965),a(49676)),l=(a(73204),a(15659)),o=(a(10444),a(22040)),i=(a(99426),a(76128)),u=(a(74828),a(66252)),c=a(49963);const d={class:"list-container"};function p(e,t,a,p,m,f){const w=i.GT,y=o.Dv,v=l.ElButton,g=(0,u.up)("UserRowFollower"),_=n.R,k=r.dq,U=s.t;return(0,u.wg)(),(0,u.iD)("div",d,[(0,u.Wm)(k,{gutter:20},{default:(0,u.w5)((()=>[e.emptyShow?((0,u.wg)(),(0,u.j4)(y,{key:0,span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{class:"vab-data-empty",description:"还没有关注"})])),_:1})):(0,u.kq)("",!0),(0,u.Wm)(y,{span:24},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.iD)("ul",null,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.list,(t=>((0,u.wg)(),(0,u.iD)("li",{key:t.followuid,class:"list-item"},[(0,u.Wm)(g,{user:t,"username-key":"fusername","avatar-key":"followAvator","user-id-key":"followuid"},{action:(0,u.w5)((({user:t})=>[(0,u.Wm)(v,{plain:"",type:"danger",onClick:(0,c.iM)((a=>e.handleDelete(t.followuid)),["prevent"])},{default:(0,u.w5)((()=>[(0,u.Uk)(" 取消关注 ")])),_:2},1032,["onClick"])])),_:2},1032,["user"])])))),128))])),[[U,e.listLoading]])])),_:1}),(0,u.Wm)(y,{span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{"current-page":e.queryForm.page,"onUpdate:currentPage":t[0]||(t[0]=t=>e.queryForm.page=t),layout:"prev, pager, next","page-size":e.pagination.pageSize,total:e.pagination.total,onCurrentChange:e.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])])),_:1})])),_:1})])}var m=a(11555),f=a(94427),w=a(2262),y=(0,u.aZ)({name:"List",components:{UserRowFollower:f["default"]},setup(){const e=(0,w.qj)({list:[],queryForm:{page:1},pagination:{pageSize:1,total:1},listLoading:!0,emptyShow:!0}),t=async()=>{e.listLoading=!0;const{body:{list:t,page_perpage:a,page_allcount:s}}=await(0,m.lQ)(e.queryForm);e.list=t,e.pagination.pageSize=parseInt(a),e.pagination.total=parseInt(s),e.listLoading=!1,e.emptyShow=!1},a=(0,u.f3)("$baseConfirm"),s=(0,u.f3)("$baseMessage"),r=e=>{a("您确定取消关注这个好友吗？","取关提示",(async()=>{try{await(0,m.Ie)(e),t(),s("已经取消关注","success","vab-hey-message-success")}catch(a){s("取消失败","error","vab-hey-message-error")}}),(()=>{}),"确定","取消")};return(0,u.bv)((()=>{t()})),{...(0,w.BK)(e),fetchData:t,handleDelete:r}}});function v(e){e.__source="src/views/setting/follow/follows.vue"}var g=a(83744);"function"===typeof v&&v(y);const _=(0,g.Z)(y,[["render",p],["__scopeId","data-v-6bb58f34"]]);var k=_}}]);