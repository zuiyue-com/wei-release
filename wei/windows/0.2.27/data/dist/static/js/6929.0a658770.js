/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6929],{4917:function(e,t,o){o.d(t,{h:function(){return r},lX:function(){return p},lx:function(){return a},yv:function(){return u}});var n=o(52806);function r(){return(0,n.Z)({url:"/wwwapi.php?to=group",method:"get"})}function a(e){return(0,n.Z)({url:"/wwwapi.php?to=group&p=my",method:"get",params:e})}function p(e){return(0,n.Z)({url:"/wwwapi.php?to=groupPay",method:"get",params:e})}function u(e){return(0,n.Z)({url:"/wwwapi.php?to=group&p=checkorder",method:"get",params:e})}},26929:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var n=o(49676),r=(o(3241),o(73204),o(3837)),a=(o(81010),o(76128)),p=(o(74828),o(50363),o(66252)),u=o(2262),l=o(4917),i={__name:"logs",setup(e){const t=(0,p.f3)("$sub"),o=(0,p.f3)("$unsub"),i=(0,u.qj)({list:[],page:1,pageSize:1,total:1});(0,p.bv)((()=>{g()}));const s=(0,p.Fl)((()=>i.list.map((e=>e))));async function g(){const{body:{list:e,page_perpage:t,page_allcount:o}}=await(0,l.lx)({page:i.page});i.list=e,i.pageSize=parseInt(t),i.total=parseInt(o)}return t("load-payment-group-logs",(()=>{g()})),(0,p.Ah)((()=>{o("load-payment-group-logs")})),(e,t)=>{const o=r.$Y,l=a.GT,c=r.eI,w=n.R;return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p.Wm)(c,{border:!0,data:(0,u.SU)(s)},{empty:(0,p.w5)((()=>[(0,p.Wm)(l,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,p.w5)((()=>[(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"orderid",label:"充值单号"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"money",label:"金额 (CNY)"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"groupname",label:"描述"}),(0,p.Wm)(o,{align:"center","show-overflow-tooltip":"",prop:"zftime",label:"充值日期"})])),_:1},8,["data"]),(0,u.SU)(s).length>0?((0,p.wg)(),(0,p.j4)(w,{key:0,"current-page":(0,u.SU)(i).page,"onUpdate:currentPage":t[0]||(t[0]=e=>(0,u.SU)(i).page=e),layout:"prev, pager, next","page-size":(0,u.SU)(i).pageSize,total:(0,u.SU)(i).total,onCurrentChange:g},null,8,["current-page","page-size","total"])):(0,p.kq)("",!0)],64)}}};function s(e){e.__source="src/views/setting/group/components/logs.vue"}"function"===typeof s&&s(i);const g=i;var c=g}}]);