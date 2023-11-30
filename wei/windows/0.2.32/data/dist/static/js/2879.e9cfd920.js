/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-27 10:42:23
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2879,9884],{27962:function(e,t,o){o.d(t,{IM:function(){return n},g8:function(){return l},q1:function(){return d}});var a=o(92325);function n(e){return(0,a.Z)({url:"/menuManagement/getTree",method:"get",params:e})}function l(e){return(0,a.Z)({url:"/menuManagement/doEdit",method:"post",data:e})}function d(e){return(0,a.Z)({url:"/menuManagement/doDelete",method:"post",data:e})}},32879:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var a=o(4350),n=(o(3241),o(91103),o(73632)),l=(o(74965),o(3837)),d=(o(81010),o(76128)),r=(o(74828),o(57534)),s=(o(92471),o(50363),o(7608)),i=o(49927),u=o(15659),c=(o(10444),o(22040)),w=(o(99426),o(27750)),f=o(11513),m=(o(37008),o(66252)),p=o(3577);const h={class:"menu-management-container"};function v(e,t,o,v,b,y){const _=f.y,k=w.Z,g=c.Dv,W=u.ElButton,C=i.Z,Z=s.Z,x=l.$Y,I=(0,m.up)("vab-icon"),U=r.Ks,D=d.GT,j=l.eI,M=n.dq,$=(0,m.up)("edit"),q=a.t;return(0,m.wg)(),(0,m.iD)("div",h,[(0,m.Wm)(M,{gutter:20},{default:(0,m.w5)((()=>[(0,m.Wm)(g,{lg:4,md:8,sm:24,xl:4,xs:24},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{shadow:"hover"},{default:(0,m.w5)((()=>[(0,m.Wm)(_,{data:e.data,"default-expanded-keys":["root"],"node-key":"id",props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])),_:1})])),_:1}),(0,m.Wm)(g,{lg:20,md:16,sm:24,xl:20,xs:24},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{shadow:"hover"},{default:(0,m.w5)((()=>[(0,m.Wm)(Z,null,{default:(0,m.w5)((()=>[(0,m.Wm)(C,{span:12},{default:(0,m.w5)((()=>[(0,m.Wm)(W,{icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit())},{default:(0,m.w5)((()=>[(0,m.Uk)(" 添加 ")])),_:1},8,["icon"])])),_:1})])),_:1}),(0,m.wy)(((0,m.wg)(),(0,m.j4)(j,{border:"",data:e.list,"default-expand-all":"","row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{empty:(0,m.w5)((()=>[(0,m.Wm)(D,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,m.w5)((()=>[(0,m.Wm)(x,{label:"标题",prop:"meta.title","show-overflow-tooltip":""}),(0,m.Wm)(x,{label:"name",prop:"name","show-overflow-tooltip":""}),(0,m.Wm)(x,{label:"路径",prop:"path","show-overflow-tooltip":""}),(0,m.Wm)(x,{label:"是否隐藏","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.meta.hidden?"是":"否"),1)])),_:1}),(0,m.Wm)(x,{label:"是否隐藏当前节点","show-overflow-tooltip":"",width:"100"},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.meta.levelHidden?"是":"否"),1)])),_:1}),(0,m.Wm)(x,{label:"vue文件路径",prop:"component","show-overflow-tooltip":""}),(0,m.Wm)(x,{label:"重定向","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.redirect||"无"),1)])),_:1}),(0,m.Wm)(x,{label:"图标","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[e.meta.icon?((0,m.wg)(),(0,m.j4)(I,{key:0,icon:e.meta.icon},null,8,["icon"])):(0,m.kq)("",!0)])),_:1}),(0,m.Wm)(x,{label:"是否固定","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.meta.noClosable?"是":"否"),1)])),_:1}),(0,m.Wm)(x,{label:"是否无缓存","show-overflow-tooltip":"",width:"120"},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.meta.noKeepAlive?"是":"否"),1)])),_:1}),(0,m.Wm)(x,{label:"badge","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[e.meta.badge?((0,m.wg)(),(0,m.j4)(U,{key:0,effect:"dark",type:"danger"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,p.zw)(e.meta.badge),1)])),_:2},1024)):(0,m.kq)("",!0)])),_:1}),(0,m.Wm)(x,{label:"dot","show-overflow-tooltip":""},{default:(0,m.w5)((({row:e})=>[(0,m.Uk)((0,p.zw)(e.meta.dot?"是":"否"),1)])),_:1}),(0,m.Wm)(x,{label:"操作","show-overflow-tooltip":"",width:"200"},{default:(0,m.w5)((({row:t})=>[(0,m.Wm)(W,{text:"",type:"primary",onClick:o=>e.handleEdit(t)},{default:(0,m.w5)((()=>[(0,m.Uk)(" 编辑 ")])),_:2},1032,["onClick"]),(0,m.Wm)(W,{text:"",type:"primary",onClick:o=>e.handleDelete(t)},{default:(0,m.w5)((()=>[(0,m.Uk)(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[q,e.listLoading]])])),_:1})])),_:1})])),_:1}),(0,m.Wm)($,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}var b=o(79130),y=o(27962),_=o(65781),k=o(2262),g=(0,m.aZ)({name:"MenuManagement",components:{Edit:(0,m.RC)((()=>Promise.all([o.e(922),o.e(2044),o.e(1090),o.e(1287),o.e(8900),o.e(2999),o.e(4491),o.e(7914),o.e(6812),o.e(8099),o.e(5904),o.e(7155),o.e(2718),o.e(1142),o.e(5160),o.e(8463),o.e(2308),o.e(6968),o.e(3262)]).then(o.bind(o,32227))))},setup(){const e=(0,m.f3)("$baseConfirm"),t=(0,m.f3)("$baseMessage"),o=(0,k.qj)({editRef:null,data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0}),a=e=>{e&&e.path?o["editRef"].showEdit(e):o["editRef"].showEdit()},n=o=>{o.path&&e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,y.q1)({paths:o.path});t(e,"success","vab-hey-message-success"),await l()}))},l=async e=>{o.listLoading=!0;const{data:{list:t}}=await(0,b.g)({role:e});o.list=t,o.listLoading=!1},d=({role:e})=>{l(e)};return(0,y.IM)().then((({data:e})=>{const{list:t}=e;o.data=t})),(0,m.bv)((()=>{l()})),{...(0,k.BK)(o),handleEdit:a,handleDelete:n,fetchData:l,handleNodeClick:d,Plus:_.Plus}}});function W(e){e.__source="src/views/setting/menuManagement/index.vue"}var C=o(83744);"function"===typeof W&&W(g);const Z=(0,C.Z)(g,[["render",v],["__scopeId","data-v-d0644204"]]);var x=Z},27750:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(30032),n=(o(3241),o(91154),o(97830)),l=(o(13768),o(66252)),d=o(2262),r=o(3577),s=o(22201),i=(0,l.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const o=(0,d.iH)(!0);return t=setTimeout((()=>{o.value=!1}),500),(0,s.iS)(((e,o,a)=>{clearInterval(t),a()})),(t,s)=>{const i=n.vk,u=a.Kf;return(0,l.wg)(),(0,l.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.Nv)({default:(0,l.w5)((()=>[e.skeleton?((0,l.wg)(),(0,l.j4)(i,{key:0,animated:"",loading:(0,d.SU)(o),rows:e.skeletonRows},{default:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"header",{},(()=>[(0,l.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var c=o(83744);"function"===typeof u&&u(i);const w=(0,c.Z)(i,[["__scopeId","data-v-391150ea"]]);var f=w},49927:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(22040),n=(o(3241),o(99426),o(66252));const l={class:"top-panel"};function d(e,t){const o=a.Dv;return(0,n.wg)(),(0,n.j4)(o,{span:24},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.WI)(e.$slots,"default")])])),_:3})}function r(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var s=o(83744);const i={};"function"===typeof r&&r(i);const u=(0,s.Z)(i,[["render",d]]);var c=u},7608:function(e,t,o){o.d(t,{Z:function(){return u}});var a=o(73632),n=(o(3241),o(74965),o(66252));function l(e,t){const o=a.dq;return(0,n.wg)(),(0,n.j4)(o,{class:"vab-query-form",gutter:0},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function d(e){e.__source="library/components/VabQueryForm/index.vue"}var r=o(83744);const s={};"function"===typeof d&&d(s);const i=(0,r.Z)(s,[["render",l],["__scopeId","data-v-172989c8"]]);var u=i}}]);