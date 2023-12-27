/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:38:19
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3262],{49434:function(e,l,a){a.d(l,{f:function(){return m}});var o=a(92325);function m(e){return(0,o.Z)({url:"/remixIcon/getList",method:"get",params:e})}},32227:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var o=a(73481),m=(a(3241),a(62029),a(15659)),t=(a(10444),a(20129)),d=(a(69840),a(85381)),n=(a(68538),a(34545)),u=(a(8780),a(6589),a(57018)),r=(a(74367),a(66252));function i(e,l,a,i,f,s){const p=u.EZ,c=t.nH,V=(0,r.up)("vab-icon-selector"),b=n.$t,g=d.OX,W=t.ly,w=m.ElButton,v=o.d0;return(0,r.wg)(),(0,r.j4)(v,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[15]||(l[15]=l=>e.dialogFormVisible=l),title:e.title,width:"60%",onClose:e.close},{footer:(0,r.w5)((()=>[(0,r.Wm)(w,{onClick:e.close},{default:(0,r.w5)((()=>[(0,r.Uk)("取 消")])),_:1},8,["onClick"]),(0,r.Wm)(w,{type:"primary",onClick:e.save},{default:(0,r.w5)((()=>[(0,r.Uk)("确 定")])),_:1},8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(W,{ref:"formRef",inline:"","label-width":"140px",model:e.form,rules:e.rules},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{label:"父级Id",prop:"parentId"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.parentId,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.parentId=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"name",prop:"name"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"路径",prop:"path"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.path,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.path=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"vue文件路径",prop:"component"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.component,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.component=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"重定向",prop:"redirect"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.redirect,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.redirect=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"标题",prop:"meta.title"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.meta.title,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.meta.title=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"图标"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{"popper-class":"icon-selector-popper",trigger:"hover",width:292},{reference:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.meta.icon,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.meta.icon=l)},null,8,["modelValue"])])),default:(0,r.w5)((()=>[(0,r.Wm)(V,{onHandleIcon:e.handleIcon},null,8,["onHandleIcon"])])),_:1})])),_:1}),(0,r.Wm)(c,{label:"badge"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:e.form.meta.badge,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.meta.badge=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"dot"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.dot,"onUpdate:modelValue":l[8]||(l[8]=l=>e.form.meta.dot=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"隐藏"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.hidden,"onUpdate:modelValue":l[9]||(l[9]=l=>e.form.meta.hidden=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"始终显示当前节点"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.levelHidden,"onUpdate:modelValue":l[10]||(l[10]=l=>e.form.meta.levelHidden=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"自定义svg图标"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.isCustomSvg,"onUpdate:modelValue":l[11]||(l[11]=l=>e.form.meta.isCustomSvg=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"固定"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.noClosable,"onUpdate:modelValue":l[12]||(l[12]=l=>e.form.meta.noClosable=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"无缓存"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.noKeepAlive,"onUpdate:modelValue":l[13]||(l[13]=l=>e.form.meta.noKeepAlive=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{label:"不显示当前标签页"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{modelValue:e.form.meta.tabHidden,"onUpdate:modelValue":l[14]||(l[14]=l=>e.form.meta.tabHidden=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var f=a(52454),s=a(27962),p=a(2262),c=(0,r.aZ)({name:"MenuManagementEdit",components:{VabIconSelector:f["default"]},emits:["fetch-data"],setup(e,{emit:l}){const a=(0,r.f3)("$baseMessage"),o=(0,p.qj)({formRef:null,form:{meta:{title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1}},rules:{parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]},title:"",dialogFormVisible:!1}),m=e=>{o.form.meta.icon=e},t=e=>{e?(o.title="编辑",o.form=JSON.parse(JSON.stringify(e))):o.title="添加",o.dialogFormVisible=!0},d=()=>{o["formRef"].resetFields(),o.form={meta:{icon:""}},o.dialogFormVisible=!1},n=()=>{o["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,s.g8)(o.form);a(e,"success","vab-hey-message-success"),l("fetch-data"),d()}}))};return{...(0,p.BK)(o),handleIcon:m,showEdit:t,close:d,save:n}}});function V(e){e.__source="src/views/setting/menuManagement/components/MenuManagementEdit.vue"}var b=a(83744);"function"===typeof V&&V(c);const g=(0,b.Z)(c,[["render",i]]);var W=g}}]);