/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-11 15:49:07
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8826],{68826:function(e,a,l){l.r(a),l.d(a,{default:function(){return w}});var t=l(73481),r=(l(3241),l(62029),l(15659)),o=(l(10444),l(20129)),n=(l(69840),l(57018)),d=(l(74367),l(6589),l(47820)),m=(l(50986),l(61715),l(11513)),i=(l(37008),l(66252));function s(e,a,l,s,u,f){const p=m.y,c=d.BT,g=d.km,b=o.nH,w=n.EZ,V=o.ly,h=r.ElButton,k=t.d0;return(0,i.wg)(),(0,i.j4)(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=a=>e.dialogFormVisible=a),title:e.title,width:"500px",onClose:e.close},{footer:(0,i.w5)((()=>[(0,i.Wm)(h,{onClick:e.close},{default:(0,i.w5)((()=>[(0,i.Uk)("取 消")])),_:1},8,["onClick"]),(0,i.Wm)(h,{type:"primary",onClick:e.save},{default:(0,i.w5)((()=>[(0,i.Uk)("确 定")])),_:1},8,["onClick"])])),default:(0,i.w5)((()=>[(0,i.Wm)(V,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{label:"父节点",prop:"parentName"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{modelValue:e.form.parentId,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.parentId=a),placeholder:"请选择父节点"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{label:e.form.parentName,style:{height:"auto",padding:"0"},value:e.form.parentId},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{ref:"treeRef",data:e.treeData,"default-expand-all":"",props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])),_:1},8,["label","value"])])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(b,{label:"名称",prop:"name"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.form.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.name=a)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(b,{label:"排序",prop:"order"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.form.order,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.order=a)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var u=l(73360),f=l(2262),p=(0,i.aZ)({name:"DepartmentManagementEdit",emits:["fetch-data"],setup(e,{emit:a}){const l=(0,i.f3)("$baseMessage"),t=(0,f.qj)({formRef:null,treeData:[],defaultProps:{children:"children",label:"name"},form:{parentName:"",parentId:""},rules:{parentName:[{required:!0,trigger:"blur",message:"请选择父节点"}],name:[{required:!0,trigger:"blur",message:"请输入名称"}],order:[{required:!0,trigger:"blur",message:"请输入排序"}]},title:"",dialogFormVisible:!1}),r=async()=>{const{data:{list:e}}=await(0,u.gp)();t.treeData=e},o=e=>{t.form.parentName=e.name,t.form.parentId=e.id},n=e=>{e?(t.title="编辑",t.form=JSON.parse(JSON.stringify(e))):t.title="添加",t.dialogFormVisible=!0},d=()=>{t["formRef"].resetFields(),t.form={parentName:"",parentId:""},t.dialogFormVisible=!1},m=()=>{t["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,u.g8)(t.form);l(e,"success","vab-hey-message-success"),a("fetch-data"),d()}}))};return r(),{...(0,f.BK)(t),handleNodeClick:o,showEdit:n,close:d,save:m}}});function c(e){e.__source="src/views/setting/departmentManagement/components/DepartmentManagementEdit.vue"}var g=l(83744);"function"===typeof c&&c(p);const b=(0,g.Z)(p,[["render",s]]);var w=b}}]);