/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-21 18:47:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7357,4556],{74571:function(a,t,n){n.d(t,{Z:function(){return o}});var e=n(2262);function o(a){const t=(0,e.qj)({dataList:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:n,queryForm:o,pagination:i}=(0,e.BK)(t);async function u(){const{body:{list:n,page_perpage:e,page_allcount:o}}=await a();t.dataList=[...n],i.pageSize=parseInt(e),i.total=parseInt(o)}return{dataList:n,queryForm:o,pagination:i,loadData:u}}},92735:function(a,t,n){n.r(t),n.d(t,{default:function(){return d}});var e=n(66252),o=n(2262),i=n(69473),u=n(24025),r=n(74571),s=n(22201),p={__name:"posts",setup(a){const t=(0,s.yj)(),{dataList:n,queryForm:p,pagination:c,loadData:l}=(0,r.Z)(d);function d(){return(0,u.wR)(p.value)}function f(a){p.value.page=a,l()}return(0,e.bv)((()=>{p.value.uid=parseInt(t.params.id),l()})),(a,t)=>((0,e.wg)(),(0,e.j4)((0,o.SU)(i["default"]),{list:(0,o.SU)(n),"query-form":(0,o.SU)(p),pagination:(0,o.SU)(c),onLoad:f},null,8,["list","query-form","pagination"]))}};function c(a){a.__source="src/views/setting/personalCenter/components/posts.vue"}"function"===typeof c&&c(p);const l=p;var d=l}}]);