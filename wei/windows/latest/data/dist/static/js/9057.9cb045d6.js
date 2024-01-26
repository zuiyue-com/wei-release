/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 15:38:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9057],{73360:function(e,t,n){n.d(t,{g8:function(){return r},gp:function(){return o},q1:function(){return l}});var a=n(92325);function o(e){return(0,a.Z)({url:"/departmentManagement/getList",method:"get",params:e})}function r(e){return(0,a.Z)({url:"/departmentManagement/doEdit",method:"post",data:e})}function l(e){return(0,a.Z)({url:"/departmentManagement/doDelete",method:"post",data:e})}},69057:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(4350),o=(n(3241),n(91103),n(49676)),r=(n(73204),n(3837)),l=(n(81010),n(76128)),s=(n(74828),n(50363),n(7608)),u=n(20930),i=n(20129),d=(n(69840),n(6589),n(57018)),c=(n(74367),n(43092)),m=n(15659),p=(n(10444),n(66252)),f=n(49963);const g={class:"department-management-container"};function y(e,t,n,y,w,h){const v=m.ElButton,b=c.Z,_=d.EZ,C=i.nH,W=i.ly,k=u.Z,F=s.Z,q=r.$Y,D=l.GT,S=r.eI,Z=o.R,R=(0,p.up)("edit"),x=a.t;return(0,p.wg)(),(0,p.iD)("div",g,[(0,p.Wm)(F,null,{default:(0,p.w5)((()=>[(0,p.Wm)(b,{span:12},{default:(0,p.w5)((()=>[(0,p.Wm)(v,{icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit(t))},{default:(0,p.w5)((()=>[(0,p.Uk)(" 添加 ")])),_:1},8,["icon"]),(0,p.Wm)(v,{icon:e.Delete,type:"danger",onClick:t[1]||(t[1]=t=>e.handleDelete(t))},{default:(0,p.w5)((()=>[(0,p.Uk)(" 批量删除 ")])),_:1},8,["icon"])])),_:1}),(0,p.Wm)(k,{span:12},{default:(0,p.w5)((()=>[(0,p.Wm)(W,{inline:"",model:e.queryForm,onSubmit:t[3]||(t[3]=(0,f.iM)((()=>{}),["prevent"]))},{default:(0,p.w5)((()=>[(0,p.Wm)(C,null,{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:e.queryForm.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.queryForm.name=t),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(C,null,{default:(0,p.w5)((()=>[(0,p.Wm)(v,{icon:e.Search,type:"primary",onClick:e.queryData},{default:(0,p.w5)((()=>[(0,p.Uk)(" 查询 ")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,p.wy)(((0,p.wg)(),(0,p.j4)(S,{border:"",data:e.list,"default-expand-all":"","row-key":"id","tree-props":{children:"children"},onSelectionChange:e.setSelectRows},{empty:(0,p.w5)((()=>[(0,p.Wm)(D,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,p.w5)((()=>[(0,p.Wm)(q,{"show-overflow-tooltip":"",type:"selection"}),(0,p.Wm)(q,{label:"名称",prop:"name","show-overflow-tooltip":""}),(0,p.Wm)(q,{label:"父节点Id",prop:"parentId","show-overflow-tooltip":""}),(0,p.Wm)(q,{label:"排序",prop:"order","show-overflow-tooltip":""}),(0,p.Wm)(q,{label:"创建时间",prop:"createTime","show-overflow-tooltip":""}),(0,p.Wm)(q,{label:"操作",width:"200"},{default:(0,p.w5)((({row:t})=>[(0,p.Wm)(v,{text:"",type:"primary",onClick:n=>e.handleEdit(t)},{default:(0,p.w5)((()=>[(0,p.Uk)(" 编辑 ")])),_:2},1032,["onClick"]),(0,p.Wm)(v,{disabled:!t.parentId,text:"",type:"primary",onClick:n=>e.handleDelete({row:t})},{default:(0,p.w5)((()=>[(0,p.Uk)(" 删除 ")])),_:2},1032,["disabled","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[x,e.listLoading]]),(0,p.Wm)(Z,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"]),(0,p.Wm)(R,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}var w=n(73360),h=n(65781),v=n(2262),b=(0,p.aZ)({name:"DepartmentManagement",components:{Edit:(0,p.RC)((()=>Promise.all([n.e(2044),n.e(8826)]).then(n.bind(n,68826))))},setup(){const e=(0,p.f3)("$baseConfirm"),t=(0,p.f3)("$baseMessage"),n=(0,v.qj)({editRef:null,list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10,title:""}}),a=e=>{n.selectRows=e},o=e=>{e.id?n.editRef.showEdit(e):n.editRef.showEdit()},r=a=>{if(a.id)e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,w.q1)({ids:a.id});t(e,"success","vab-hey-message-success"),await i()}));else if(n.selectRows.length>0){const a=n.selectRows.map((e=>e.id)).join();e("你确定要删除选中项吗",null,(async()=>{const{msg:e}=await(0,w.q1)({ids:a});t(e,"success","vab-hey-message-success"),await i()}))}else t("未选中任何行","error","vab-hey-message-error")},l=e=>{n.queryForm.pageSize=e,i()},s=e=>{n.queryForm.pageNo=e,i()},u=()=>{n.queryForm.pageNo=1,i()},i=async()=>{n.listLoading=!0;const{data:{list:e,total:t}}=await(0,w.gp)(n.queryForm);n.list=e,n.total=t,n.listLoading=!1};return(0,p.bv)((()=>{i()})),{...(0,v.BK)(n),setSelectRows:a,handleEdit:o,handleDelete:r,handleSizeChange:l,handleCurrentChange:s,queryData:u,fetchData:i,Delete:h.Delete,Plus:h.Plus,Search:h.Search}}});function _(e){e.__source="src/views/setting/departmentManagement/index.vue"}var C=n(83744);"function"===typeof _&&_(b);const W=(0,C.Z)(b,[["render",y]]);var k=W},43092:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(22040),o=(n(3241),n(99426),n(66252));const r={class:"left-panel"};var l=(0,o.aZ)({__name:"VabQueryFormLeftPanel",props:{span:{type:Number,default:14}},setup(e){return(t,n)=>{const l=a.Dv;return(0,o.wg)(),(0,o.j4)(l,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.WI)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function s(e){e.__source="library/components/VabQueryForm/components/VabQueryFormLeftPanel.vue"}"function"===typeof s&&s(l);const u=l;var i=u},20930:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(22040),o=(n(3241),n(99426),n(66252));const r={class:"right-panel"};var l=(0,o.aZ)({__name:"VabQueryFormRightPanel",props:{span:{type:Number,default:10}},setup(e){return(t,n)=>{const l=a.Dv;return(0,o.wg)(),(0,o.j4)(l,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.WI)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function s(e){e.__source="library/components/VabQueryForm/components/VabQueryFormRightPanel.vue"}"function"===typeof s&&s(l);const u=l;var i=u},7608:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(73632),o=(n(3241),n(74965),n(66252));function r(e,t){const n=a.dq;return(0,o.wg)(),(0,o.j4)(n,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function l(e){e.__source="library/components/VabQueryForm/index.vue"}var s=n(83744);const u={};"function"===typeof l&&l(u);const i=(0,s.Z)(u,[["render",r],["__scopeId","data-v-172989c8"]]);var d=i}}]);