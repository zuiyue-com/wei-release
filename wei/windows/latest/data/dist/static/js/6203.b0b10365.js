/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-21 18:47:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6203],{56203:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(3837),n=(t(3241),t(81010),t(76128)),d=(t(74828),t(50363),t(15659)),o=(t(10444),t(66252));const r={class:"vab-form-table"};function s(e,a,t,s,u,c){const i=d.ElButton,p=l.$Y,m=n.GT,f=l.eI;return(0,o.wg)(),(0,o.iD)("div",r,[((0,o.wg)(),(0,o.j4)(f,{key:e.toggleIndex,ref:"tableRef",border:"",data:e.data},{empty:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default"),(0,o.Wm)(p,{align:"center",label:"操作",width:"200"},{default:(0,o.w5)((({$index:a,row:t})=>[t.progress>=1?((0,o.wg)(),(0,o.j4)(i,{key:0,type:"primary",onClick:e.run},{default:(0,o.w5)((()=>[(0,o.Uk)(" 运行 ")])),_:1},8,["onClick"])):((0,o.wg)(),(0,o.j4)(i,{key:1,type:"primary",disabled:!0},{default:(0,o.w5)((()=>[(0,o.Uk)("运行")])),_:1})),(0,o.Wm)(i,{icon:e.Delete,plain:"",type:"danger",onClick:l=>e.handleDelete(t,a)},{default:(0,o.w5)((()=>[(0,o.Uk)(" 删除 ")])),_:2},1032,["icon","onClick"])])),_:1})])),_:3},8,["data"]))])}t(57658);var u=t(52806),c=t(2262),i=(0,o.aZ)({name:"VabFormTable",props:{modelValue:{type:Array,default:()=>[]},rowTemplate:{type:Object,default:()=>{}},drag:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=(0,o.f3)("$baseConfirm"),l=(0,o.f3)("$baseMessage"),n=(0,c.qj)({tableRef:null,data:[],toggleIndex:0}),d=()=>{const e=n.tableRef.$el.querySelector(".el-table__body-wrapper tbody");Sortable.create(e,{handle:".vab-rank",animation:300,onEnd({newIndex:e,oldIndex:a}){const t=n.data,l=t.splice(a,1)[0];t.splice(e,0,l),n.toggleIndex+=1,(0,o.Y3)((()=>{d()}))}})},r=()=>{n.data.push(JSON.parse(JSON.stringify(e.rowTemplate)))},s=async(e,a)=>{t("!!!您将会删除所有安装文件!!!您确定要删除当前项吗?",null,(async()=>{await(0,u.Z)({url:`/image/delete/${e.hash}`,method:"get",params:{}}),l("成功","success","vab-hey-message-success"),n.data.splice(a,1)}))};return(0,o.bv)((()=>{n.data=e.modelValue,e.drag&&d()})),(0,o.YP)((()=>e.modelValue),(()=>n.data=e.modelValue)),(0,o.YP)((()=>n.data),(()=>a("update:modelValue",n.data))),{...(0,c.BK)(n),rowDrop:d,handleAdd:r,handleDelete:s}}});function p(e){e.__source="src/views/image/components/TableManage.vue"}var m=t(83744);"function"===typeof p&&p(i);const f=(0,m.Z)(i,[["render",s]]);var b=f}}]);