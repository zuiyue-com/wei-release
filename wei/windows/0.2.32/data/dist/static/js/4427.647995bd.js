/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-27 10:42:23
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4427,7283],{94427:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(31452),r=(a(3241),a(68445),a(66252)),i=a(2262),l=a(3577),u=a(87283),n=a(20235);const o={key:0},c={key:1};var d={__name:"follower",props:{user:{type:Object,default:()=>{}},usernameKey:{type:String,default:""},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>{const e=t.user;return e.user_url=(0,n.gx)(e[t.userIdKey]),e}));return(t,n)=>{const d=s.E2,m=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(m,{to:(0,i.SU)(a).user_url},{default:(0,r.w5)((()=>[(0,r.Wm)((0,i.SU)(u["default"]),{user:(0,i.SU)(a),"avatar-key":e.avatarKey,"user-id-key":e.userIdKey},{title:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a)[e.usernameKey]),1)])),_:1})])),description:(0,r.w5)((()=>[(0,i.SU)(a).recentnote?((0,r.wg)(),(0,r.iD)("div",o," 最近动作："+(0,l.zw)((0,i.SU)(a).recentnote),1)):((0,r.wg)(),(0,r.iD)("div",c,"没有最近动作"))])),bottom:(0,r.w5)((()=>[(0,r.Uk)(" 粉丝 "),(0,r.Wm)(d,{type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a).follower),1)])),_:1}),(0,r.Uk)(" 关注 "),(0,r.Wm)(d,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a).following),1)])),_:1}),(0,r.Uk)(" 主题 "),(0,r.Wm)(d,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a).threads),1)])),_:1}),(0,r.Uk)(" 帖子 "),(0,r.Wm)(d,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a).posts),1)])),_:1}),(0,r.Uk)(" 喜欢 "),(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)((0,i.SU)(a).likes),1)])),_:1})])),action:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"action",{user:(0,i.SU)(a)})])),_:3},8,["user","avatar-key","user-id-key"])])),_:3},8,["to"])}}};function m(e){e.__source="src/components/UserRow/follower.vue"}"function"===typeof m&&m(d);const v=d;var f=v},87283:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=a(57122),r=(a(3241),a(69540),a(66252)),i=a(2262),l=a(20235);const u=e=>((0,r.dD)("data-v-1f34b258"),e=e(),(0,r.Cn)(),e),n={class:"list-item"},o={class:"list-item-meta"},c={key:0,class:"list-item-meta-avatar"},d={key:1,class:"list-item-meta-avatar"},m=u((()=>(0,r._)("div",{class:"system-avatar"},"系统",-1))),v={class:"list-item-meta-content"},f={class:"list-item-meta-title"},p={class:"list-item-meta-description"},y={class:"list-item-meta-bottom"},w={class:"list-item-meta-operate"};var _={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){const t=e,a=(0,r.Fl)((()=>t.user[t.avatarKey])),u=(0,r.Fl)((()=>parseInt(t.user[t.userIdKey]))),_=(0,r.Fl)((()=>(0,l.gx)(u.value)));return(e,t)=>{const l=s.F8,U=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",o,[(0,i.SU)(u)>0?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(U,{to:(0,i.SU)(_)},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{src:(0,i.SU)(a),class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])),_:1},8,["to"])])):((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(l,{class:"el-avatar el-avatar--big el-avatar--circle"},{error:(0,r.w5)((()=>[m])),_:1})])),(0,r._)("div",v,[(0,r._)("div",f,[(0,r.WI)(e.$slots,"title")]),(0,r._)("div",p,[(0,r.WI)(e.$slots,"description")]),(0,r._)("div",y,[(0,r.WI)(e.$slots,"bottom")])]),(0,r._)("div",w,[(0,r.WI)(e.$slots,"action")])])])}}};function U(e){e.__source="src/components/UserRow/index.vue"}var k=a(83744);"function"===typeof U&&U(_);const S=(0,k.Z)(_,[["__scopeId","data-v-1f34b258"]]);var g=S}}]);