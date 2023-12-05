/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 12:36:58
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9296,7283],{74987:function(t,e,a){a.d(e,{_U:function(){return r},lc:function(){return i},qm:function(){return o},r7:function(){return s}});var n=a(92325);function r(t){return(0,n.Z)({url:"/wwwapi.php?to=user&mod=space&do=pm",method:"get",params:t})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=user&do=notice",method:"get",params:t})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=usercp&ac=common&op=ignore&handlekey=noticeignore",method:"post",data:{authorid:t,type:"system"}})}function o(t){return(0,n.Z)({url:"/wwwapi.php?to=announcement",method:"get",params:t})}},61653:function(t,e,a){a.d(e,{E:function(){return o},p:function(){return u}});var n=a(27484),r=a.n(n),s=(a(33852),a(84110)),i=a.n(s);function o(t){return r().locale("zh-cn"),r()(t).fromNow()}function u(t,e="YYYY-MM-DD HH:mm:ss"){return r()(t).format(e)}r().extend(i())},87283:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var n=a(57122),r=(a(3241),a(69540),a(66252)),s=a(2262),i=a(20235);const o=t=>((0,r.dD)("data-v-1f34b258"),t=t(),(0,r.Cn)(),t),u={class:"list-item"},l={class:"list-item-meta"},c={key:0,class:"list-item-meta-avatar"},p={key:1,class:"list-item-meta-avatar"},d=o((()=>(0,r._)("div",{class:"system-avatar"},"系统",-1))),m={class:"list-item-meta-content"},g={class:"list-item-meta-title"},f={class:"list-item-meta-description"},v={class:"list-item-meta-bottom"},w={class:"list-item-meta-operate"};var _={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(t){const e=t,a=(0,r.Fl)((()=>e.user[e.avatarKey])),o=(0,r.Fl)((()=>parseInt(e.user[e.userIdKey]))),_=(0,r.Fl)((()=>(0,i.gx)(o.value)));return(t,e)=>{const i=n.F8,y=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",l,[(0,s.SU)(o)>0?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(y,{to:(0,s.SU)(_)},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{src:(0,s.SU)(a),class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])),_:1},8,["to"])])):((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(i,{class:"el-avatar el-avatar--big el-avatar--circle"},{error:(0,r.w5)((()=>[d])),_:1})])),(0,r._)("div",m,[(0,r._)("div",g,[(0,r.WI)(t.$slots,"title")]),(0,r._)("div",f,[(0,r.WI)(t.$slots,"description")]),(0,r._)("div",v,[(0,r.WI)(t.$slots,"bottom")])]),(0,r._)("div",w,[(0,r.WI)(t.$slots,"action")])])])}}};function y(t){t.__source="src/components/UserRow/index.vue"}var h=a(83744);"function"===typeof y&&y(_);const k=(0,h.Z)(_,[["__scopeId","data-v-1f34b258"]]);var D=k},69296:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(4350),r=(a(3241),a(91103),a(73632)),s=(a(74965),a(49676)),i=(a(73204),a(22040)),o=(a(99426),a(76128)),u=(a(74828),a(66252)),l=a(3577);const c=t=>((0,u.dD)("data-v-ffe7d620"),t=t(),(0,u.Cn)(),t),p={class:"list-container"},d=c((()=>(0,u._)("span",{class:"msg-text"},"对",-1))),m=c((()=>(0,u._)("span",{class:"msg-text"},"说",-1))),g=["innerHTML"],f=["innerHTML"],v=["innerHTML"];function w(t,e,a,c,w,_){const y=o.GT,h=i.Dv,k=(0,u.up)("router-link"),D=(0,u.up)("UserRow"),b=s.R,W=r.dq,L=n.t;return(0,u.wg)(),(0,u.iD)("div",p,[(0,u.Wm)(W,{gutter:20},{default:(0,u.w5)((()=>[t.emptyShow?((0,u.wg)(),(0,u.j4)(h,{key:0,span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(y,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,u.kq)("",!0),(0,u.Wm)(h,{span:24},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.iD)("ul",null,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(t.listData,(t=>((0,u.wg)(),(0,u.iD)("li",{key:t.id},[(0,u.Wm)(D,{user:t,"avatar-key":"lastauthoridAvatar","user-id-key":"lastauthorid"},{title:(0,u.w5)((()=>[(0,u.Wm)(k,{to:t.user_url},{default:(0,u.w5)((()=>[(0,u.Uk)((0,l.zw)(t.tousername),1)])),_:2},1032,["to"]),d,(0,u.Wm)(k,{to:t.my_url},{default:(0,u.w5)((()=>[(0,u.Uk)("您")])),_:2},1032,["to"]),m,(0,u._)("span",{innerHTML:t.subject},null,8,g)])),description:(0,u.w5)((()=>[(0,u._)("div",{innerHTML:t.message},null,8,f)])),bottom:(0,u.w5)((()=>[(0,u._)("div",{innerHTML:t.diff_date},null,8,v)])),_:2},1032,["user"])])))),128))])),[[L,t.listLoading]])])),_:1}),(0,u.Wm)(h,{span:24},{default:(0,u.w5)((()=>[(0,u.Wm)(b,{"current-page":t.queryForm.page,"onUpdate:currentPage":e[0]||(e[0]=e=>t.queryForm.page=e),layout:"prev, pager, next","page-size":t.pagination.pageSize,total:t.pagination.total,onCurrentChange:t.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])])),_:1})])),_:1})])}var _=a(74987),y=a(87283),h=a(15790),k=a(20235),D=a(61653),b=a(2262),W=a(47720),L=(0,u.aZ)({name:"List",components:{UserRow:y["default"]},setup(){const t=(0,h.L)(),{getUserId:e}=(0,W.Jk)(t),a=(0,b.qj)({list:[],queryForm:{page:1},pagination:{pageSize:1,total:1},listLoading:!0,emptyShow:!0});a.listData=(0,u.Fl)((()=>a.list.map((t=>(t.user_url=(0,k.gx)(t.lastauthorid),t.my_url=(0,k.gx)(e.value),t.diff_date=(0,D.E)(1e3*t.dateline),t)))));const n=async()=>{a.listLoading=!0;const{body:{list:t,page_perpage:e,page_allcount:n}}=await(0,_._U)(a.queryForm);a.list=t,a.pagination.pageSize=parseInt(e),a.pagination.total=parseInt(n),a.listLoading=!1,a.emptyShow=!1};return(0,u.bv)((()=>{n()})),{...(0,b.BK)(a),fetchData:n,getUserCenterRouter:k.gx}}});function U(t){t.__source="src/views/setting/message/components/followMessageList.vue"}var I=a(83744);"function"===typeof U&&U(L);const S=(0,I.Z)(L,[["render",w],["__scopeId","data-v-ffe7d620"]]);var x=S}}]);