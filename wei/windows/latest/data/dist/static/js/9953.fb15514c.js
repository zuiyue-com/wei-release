/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:58:23
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9953,7283],{74987:function(t,e,a){a.d(e,{_U:function(){return r},lc:function(){return s},qm:function(){return o},r7:function(){return i}});var n=a(92325);function r(t){return(0,n.Z)({url:"/wwwapi.php?to=user&mod=space&do=pm",method:"get",params:t})}function i(t){return(0,n.Z)({url:"/wwwapi.php?to=user&do=notice",method:"get",params:t})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=usercp&ac=common&op=ignore&handlekey=noticeignore",method:"post",data:{authorid:t,type:"system"}})}function o(t){return(0,n.Z)({url:"/wwwapi.php?to=announcement",method:"get",params:t})}},61653:function(t,e,a){a.d(e,{E:function(){return o},p:function(){return u}});var n=a(27484),r=a.n(n),i=(a(33852),a(84110)),s=a.n(i);function o(t){return r().locale("zh-cn"),r()(t).fromNow()}function u(t,e="YYYY-MM-DD HH:mm:ss"){return r()(t).format(e)}r().extend(s())},87283:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var n=a(57122),r=(a(3241),a(69540),a(66252)),i=a(2262),s=a(20235);const o=t=>((0,r.dD)("data-v-1f34b258"),t=t(),(0,r.Cn)(),t),u={class:"list-item"},l={class:"list-item-meta"},c={key:0,class:"list-item-meta-avatar"},p={key:1,class:"list-item-meta-avatar"},d=o((()=>(0,r._)("div",{class:"system-avatar"},"系统",-1))),m={class:"list-item-meta-content"},f={class:"list-item-meta-title"},g={class:"list-item-meta-description"},v={class:"list-item-meta-bottom"},w={class:"list-item-meta-operate"};var y={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(t){const e=t,a=(0,r.Fl)((()=>e.user[e.avatarKey])),o=(0,r.Fl)((()=>parseInt(e.user[e.userIdKey]))),y=(0,r.Fl)((()=>(0,s.gx)(o.value)));return(t,e)=>{const s=n.F8,_=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",l,[(0,i.SU)(o)>0?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(_,{to:(0,i.SU)(y)},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{src:(0,i.SU)(a),class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])),_:1},8,["to"])])):((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(s,{class:"el-avatar el-avatar--big el-avatar--circle"},{error:(0,r.w5)((()=>[d])),_:1})])),(0,r._)("div",m,[(0,r._)("div",f,[(0,r.WI)(t.$slots,"title")]),(0,r._)("div",g,[(0,r.WI)(t.$slots,"description")]),(0,r._)("div",v,[(0,r.WI)(t.$slots,"bottom")])]),(0,r._)("div",w,[(0,r.WI)(t.$slots,"action")])])])}}};function _(t){t.__source="src/components/UserRow/index.vue"}var h=a(83744);"function"===typeof _&&_(y);const k=(0,h.Z)(y,[["__scopeId","data-v-1f34b258"]]);var b=k},39953:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var n=a(4350),r=(a(3241),a(91103),a(73632)),i=(a(74965),a(49676)),s=(a(73204),a(15659)),o=(a(10444),a(22040)),u=(a(99426),a(76128)),l=(a(74828),a(66252)),c=a(3577);const p={class:"list-container"},d=["innerHTML"];function m(t,e,a,m,f,g){const v=u.GT,w=o.Dv,y=(0,l.up)("router-link"),_=s.ElButton,h=(0,l.up)("UserRow"),k=i.R,b=r.dq,W=n.t;return(0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(b,{gutter:20},{default:(0,l.w5)((()=>[t.emptyShow?((0,l.wg)(),(0,l.j4)(w,{key:0,span:24},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(w,{span:24},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.dataList,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id},[(0,l.Wm)(h,{user:e,"avatar-key":"avator","user-id-key":"authorid"},{title:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e.diff_date),1)])),description:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("span",{innerHTML:e.note},null,8,d),(0,l.Wm)(y,{to:e.to},{default:(0,l.w5)((()=>[(0,l.Uk)("查看")])),_:2},1032,["to"])])])),action:(0,l.w5)((()=>[(0,l.Wm)(_,{plain:"",type:"danger",onClick:a=>t.handleNoticeIgnore(e.authorid)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 屏蔽 ")])),_:2},1032,["onClick"])])),_:2},1032,["user"])])))),128))])),[[W,t.listLoading]])])),_:1}),(0,l.Wm)(w,{span:24},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{"current-page":t.queryForm.page,"onUpdate:currentPage":e[0]||(e[0]=e=>t.queryForm.page=e),layout:"prev, pager, next","page-size":t.pagination.pageSize,total:t.pagination.total,onCurrentChange:t.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])])),_:1})])),_:1})])}var f=a(74987),g=a(87283),v=a(61653),w=a(2262),y=(0,l.aZ)({name:"List",components:{UserRow:g["default"]},setup(){const t=(0,l.f3)("$baseMessage"),e=(0,l.f3)("$baseConfirm"),a=(0,w.qj)({list:[],queryForm:{page:1},pagination:{pageSize:1,total:1},listLoading:!0,emptyShow:!0});a.dataList=(0,l.Fl)((()=>a.list.map((t=>(t.diff_date=(0,v.E)(1e3*t.dateline),t)))));const n=async()=>{try{a.listLoading=!0;const{body:{list:t,page_perpage:e,page_allcount:n}}=await(0,f.r7)(a.queryForm);a.list=t,a.pagination.pageSize=parseInt(e),a.pagination.total=parseInt(n)}catch(t){console.log(t)}finally{a.listLoading=!1,a.emptyShow=!1}};async function r(a){e("你确定要屏蔽当前用户的消息提醒吗？",null,(async()=>{try{await(0,f.lc)(a),t("已经屏蔽，以后的相关信息将不在出现。","success","vab-hey-message-success")}catch(e){}}))}return(0,l.bv)((()=>{n()})),{...(0,w.BK)(a),fetchData:n,handleNoticeIgnore:r}}});function _(t){t.__source="src/views/setting/message/components/noticeList.vue"}var h=a(83744);"function"===typeof _&&_(y);const k=(0,h.Z)(y,[["render",m],["__scopeId","data-v-5af9798a"]]);var b=k}}]);