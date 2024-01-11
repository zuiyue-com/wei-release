/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-11 19:56:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7020,8826],{73360:function(e,a,t){t.d(a,{g8:function(){return n},gp:function(){return l},q1:function(){return o}});var r=t(92325);function l(e){return(0,r.Z)({url:"/departmentManagement/getList",method:"get",params:e})}function n(e){return(0,r.Z)({url:"/departmentManagement/doEdit",method:"post",data:e})}function o(e){return(0,r.Z)({url:"/departmentManagement/doDelete",method:"post",data:e})}},68826:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var r=t(73481),l=(t(3241),t(62029),t(15659)),n=(t(10444),t(20129)),o=(t(69840),t(57018)),d=(t(74367),t(6589),t(47820)),m=(t(50986),t(61715),t(11513)),u=(t(37008),t(66252));function i(e,a,t,i,s,f){const p=m.y,c=d.BT,g=d.km,b=n.nH,h=o.EZ,w=n.ly,V=l.ElButton,k=r.d0;return(0,u.wg)(),(0,u.j4)(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=a=>e.dialogFormVisible=a),title:e.title,width:"500px",onClose:e.close},{footer:(0,u.w5)((()=>[(0,u.Wm)(V,{onClick:e.close},{default:(0,u.w5)((()=>[(0,u.Uk)("取 消")])),_:1},8,["onClick"]),(0,u.Wm)(V,{type:"primary",onClick:e.save},{default:(0,u.w5)((()=>[(0,u.Uk)("确 定")])),_:1},8,["onClick"])])),default:(0,u.w5)((()=>[(0,u.Wm)(w,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,u.w5)((()=>[(0,u.Wm)(b,{label:"父节点",prop:"parentName"},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{modelValue:e.form.parentId,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.parentId=a),placeholder:"请选择父节点"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{label:e.form.parentName,style:{height:"auto",padding:"0"},value:e.form.parentId},{default:(0,u.w5)((()=>[(0,u.Wm)(p,{ref:"treeRef",data:e.treeData,"default-expand-all":"",props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])),_:1},8,["label","value"])])),_:1},8,["modelValue"])])),_:1}),(0,u.Wm)(b,{label:"名称",prop:"name"},{default:(0,u.w5)((()=>[(0,u.Wm)(h,{modelValue:e.form.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.name=a)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(b,{label:"排序",prop:"order"},{default:(0,u.w5)((()=>[(0,u.Wm)(h,{modelValue:e.form.order,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.order=a)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var s=t(73360),f=t(2262),p=(0,u.aZ)({name:"DepartmentManagementEdit",emits:["fetch-data"],setup(e,{emit:a}){const t=(0,u.f3)("$baseMessage"),r=(0,f.qj)({formRef:null,treeData:[],defaultProps:{children:"children",label:"name"},form:{parentName:"",parentId:""},rules:{parentName:[{required:!0,trigger:"blur",message:"请选择父节点"}],name:[{required:!0,trigger:"blur",message:"请输入名称"}],order:[{required:!0,trigger:"blur",message:"请输入排序"}]},title:"",dialogFormVisible:!1}),l=async()=>{const{data:{list:e}}=await(0,s.gp)();r.treeData=e},n=e=>{r.form.parentName=e.name,r.form.parentId=e.id},o=e=>{e?(r.title="编辑",r.form=JSON.parse(JSON.stringify(e))):r.title="添加",r.dialogFormVisible=!0},d=()=>{r["formRef"].resetFields(),r.form={parentName:"",parentId:""},r.dialogFormVisible=!1},m=()=>{r["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,s.g8)(r.form);t(e,"success","vab-hey-message-success"),a("fetch-data"),d()}}))};return l(),{...(0,f.BK)(r),handleNodeClick:n,showEdit:o,close:d,save:m}}});function c(e){e.__source="src/views/setting/departmentManagement/components/DepartmentManagementEdit.vue"}var g=t(83744);"function"===typeof c&&c(p);const b=(0,g.Z)(p,[["render",i]]);var h=b}}]);