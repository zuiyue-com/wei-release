/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 18:46:50
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4614],{6696:function(t,e,o){o.d(e,{S_:function(){return l},h:function(){return r},lX:function(){return p},lx:function(){return a},yv:function(){return u}});var n=o(92325);function r(){return(0,n.Z)({url:"/wwwapi.php?to=group",method:"get"})}function a(t){return(0,n.Z)({url:"/wwwapi.php?to=group&p=my",method:"get",params:t})}function p(t){return(0,n.Z)({url:"/wwwapi.php?to=groupPay",method:"get",params:t})}function u(t){return(0,n.Z)({url:"/wwwapi.php?to=group&p=checkorder",method:"get",params:t})}function l(){return(0,n.Z)({url:"/wwwapi.php?to=group&p=sw",method:"get"})}},54614:function(t,e,o){o.r(e),o.d(e,{default:function(){return c}});var n=o(49676),r=(o(3241),o(73204),o(3837)),a=(o(81010),o(76128)),p=(o(74828),o(50363),o(66252)),u=o(2262),l=o(6696),i={__name:"logs",setup(t){const e=(0,p.f3)("$sub"),o=(0,p.f3)("$unsub"),i=(0,u.qj)({list:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{queryForm:g,pagination:s}=(0,u.BK)(i);(0,p.bv)((()=>{m()}));const c=(0,p.Fl)((()=>i.list.map((t=>t))));async function m(){const{body:{list:t,page_perpage:e,page_allcount:o}}=await(0,l.lx)(i.queryForm);i.list=t,i.pagination.pageSize=parseInt(e),i.pagination.total=parseInt(o)}return e("load-payment-group-logs",(()=>{i.queryForm.page=1,m()})),(0,p.Ah)((()=>{o("load-payment-group-logs")})),(t,e)=>{const o=r.$Y,l=a.GT,i=r.eI,w=n.R;return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p.Wm)(i,{border:!0,data:(0,u.SU)(c)},{empty:(0,p.w5)((()=>[(0,p.Wm)(l,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,p.w5)((()=>[(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"orderid",label:"充值单号"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"money",label:"金额 (CNY)"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"groupname",label:"描述"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"zftime",label:"充值日期"})])),_:1},8,["data"]),(0,p.Wm)(w,{"current-page":(0,u.SU)(g).page,"onUpdate:currentPage":e[0]||(e[0]=t=>(0,u.SU)(g).page=t),layout:"prev, pager, next","page-size":(0,u.SU)(s).pageSize,total:(0,u.SU)(s).total,onCurrentChange:m},null,8,["current-page","page-size","total"])],64)}}};function g(t){t.__source="src/views/setting/group/components/logs.vue"}"function"===typeof g&&g(i);const s=i;var c=s}}]);