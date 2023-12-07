/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 18:56:48
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6515],{87902:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var o=a(15659),t=(a(3241),a(10444),a(7608)),r=a(20129),n=(a(69840),a(57018)),u=(a(74367),a(10661)),i=(a(35095),a(47820)),m=(a(50986),a(61715),a(6589),a(87692)),d=(a(45393),a(22411),a(66252));const s={class:"comprehensive-form-container"};function c(e,l,a,c,p,f){const b=m.dn,_=m.KD,w=r.nH,g=i.BT,W=i.km,v=(0,d.up)("vab-icon"),k=u.Q0,V=n.EZ,h=r.ly,y=t.Z,U=o.ElButton,D=(0,d.up)("vab-dialog");return(0,d.wg)(),(0,d.iD)("div",s,[(0,d.Wm)(D,{modelValue:e.dialogVisible,"onUpdate:modelValue":l[6]||(l[6]=l=>e.dialogVisible=l),title:"创建实例",width:"600px"},{footer:(0,d.w5)((()=>[(0,d.Wm)(U,{onClick:l[4]||(l[4]=l=>e.dialogVisible=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)("取 消")])),_:1}),(0,d.Wm)(U,{type:"primary",onClick:l[5]||(l[5]=l=>e.dialogVisible=!1)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 确 定 ")])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(y,null,{default:(0,d.w5)((()=>[(0,d.Wm)(h,{ref:"formRef",class:"demo-form","label-position":e.labelPosition,model:e.form,rules:e.rules},{default:(0,d.w5)((()=>[(0,d.Wm)(w,{label:"GPU数量"},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{modelValue:e.radio4,"onUpdate:modelValue":l[0]||(l[0]=l=>e.radio4=l)},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{label:"1"}),(0,d.Wm)(b,{label:"2"}),(0,d.Wm)(b,{label:"4"}),(0,d.Wm)(b,{label:"8"}),(0,d.Wm)(b,{label:"整租"})])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(w,{modelValue:e.radio3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.radio3=l),label:"租赁时长"},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{modelValue:e.radio3,"onUpdate:modelValue":l[1]||(l[1]=l=>e.radio3=l)},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{label:"20元/小时/卡"}),(0,d.Wm)(b,{label:"3300元/周/卡"}),(0,d.Wm)(b,{label:"46000元/月/卡"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,d.Wm)(w,{label:"选择镜像"},{default:(0,d.w5)((()=>[(0,d.Wm)(W,{modelValue:e.value1,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value1=l),filterable:"",placeholder:"选镜像",class:"contianer-name"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.options1,(e=>((0,d.wg)(),(0,d.j4)(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,d.Wm)(k,{effect:"dark",content:"先在镜像市场中找到对应镜像，然后添加收藏，之后才可以在这里看到",placement:"top",class:"mx-1"},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(w,{label:"实例名称"},{default:(0,d.w5)((()=>[(0,d.Wm)(V,{placeholder:"创建完成后好在“我的实例”中找它",class:"contianer-name"})])),_:1})])),_:1},8,["label-position","model","rules"])])),_:1})])),_:1},8,["modelValue"])])}var p=a(86136),f=a(2262),b=(0,d.aZ)({name:"DialogDemo",components:{VabDialog:p["default"]},setup(){const e=(0,f.qj)({dialogVisible:!1,radio4:"1",radio3:"20元/小时/卡",options1:[{value:"选项1",label:"Akegarasu/lora-scripts/lora-train"},{value:"选项2",label:"Akegarasu/lora-scripts/lora-train/aaaaa"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:""});return{...(0,f.BK)(e)}}});function _(e){e.__source="src/views/gpumarket/hosts/components/createDialog.vue"}var w=a(83744);"function"===typeof _&&_(b);const g=(0,w.Z)(b,[["render",c],["__scopeId","data-v-35faed98"]]);var W=g},16515:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var o=a(30032),t=(a(3241),a(91154),a(49676)),r=(a(73204),a(3837)),n=(a(81010),a(15659)),u=(a(10444),a(10661)),i=(a(35095),a(12694)),m=(a(85418),a(50363),a(66252)),d=a(3577),s=a(2262),c=a(87902);const p=e=>((0,m.dD)("data-v-71f664cc"),e=e(),(0,m.Cn)(),e),f={class:"custom-table-container"},b=p((()=>(0,m._)("span",null,"数量",-1))),_=10,w=100;var g=(0,m.aZ)({__name:"hostTable",setup(e){const l=(0,s.iH)(null),a=()=>{l.value.dialogVisible=!0},p=(0,s.iH)(),g=[{hostid:1,belong:"机房",gpu:"RTX 4090",cpu:"AMD 2068V * 2",memory:32,disk:2,rent_h:"20",rent_w:"3300",rent_m:"41000",offline:"5个月",offlineTime:1522e4,rate:1,gpuNum:2,rentbrick:1},{hostid:2,belong:"个人",gpu:"RTX 4090",cpu:"AMD 2068V",memory:128,disk:2,rent_h:23,rent_w:"-",rent_m:"-",offline:"3天",offlineTime:259200,rate:3,gpuNum:2,rentbrick:0},{hostid:3,belong:"个人",gpu:"RTX 4090",cpu:"AMD 2068V",memory:64,disk:2,rent_h:24,rent_w:3306,rent_m:4e4,offline:"6个月",offlineTime:15228e3,rate:3,gpuNum:1,rentbrick:0},{hostid:4,belong:"机房",gpu:"RTX 4090",cpu:"AMD 2068V",memory:256,disk:2,rent_h:25,rent_w:3333,rent_m:"-",offline:"3周",offlineTime:1814400,rate:4,gpuNum:2,rentbrick:1}];return(e,W)=>{const v=r.$Y,k=i.xk,V=u.Q0,h=(0,m.up)("vab-icon"),y=n.ElButton,U=r.eI,D=t.R,T=o.Kf;return(0,m.wg)(),(0,m.iD)("div",f,[(0,m.Wm)(T,{shadow:"hover"},{default:(0,m.w5)((()=>[(0,m.Wm)(U,{ref_key:"tableRef",ref:p,fit:"",flexible:"",stripe:"","table-layout":"auto","row-key":"hostid",data:g,style:{width:"100%"}},{default:(0,m.w5)((()=>[(0,m.Wm)(v,{fixed:"",sortable:"",prop:"belong",label:"所属"}),(0,m.Wm)(v,{prop:"gpu",label:"GPU型号"}),(0,m.Wm)(v,{prop:"cpu",label:"CPU"}),(0,m.Wm)(v,{prop:"memory",label:"内存G",sortable:""}),(0,m.Wm)(v,{prop:"disk",label:"硬盘T",sortable:""}),(0,m.Wm)(v,{label:"租金(元/卡)",size:"small"},{default:(0,m.w5)((()=>[(0,m.Wm)(v,{prop:"rent_h",label:"小时",size:"small",sortable:""}),(0,m.Wm)(v,{prop:"rent_w",label:"周",size:"small",sortable:""}),(0,m.Wm)(v,{prop:"rent_m",label:"月",size:"small",sortable:""})])),_:1}),(0,m.Wm)(v,{label:"评分",sortable:"",prop:"rate"},{default:(0,m.w5)((e=>[(0,m.Wm)(k,{modelValue:e.row.rate,"onUpdate:modelValue":l=>e.row.rate=l,disabled:"",size:"small","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,m.Wm)(v,{prop:"offline",label:"可租",sortable:""}),(0,m.Wm)(v,{prop:"gpuNum",width:"100"},{header:(0,m.w5)((e=>[(0,m.Wm)(V,{content:"可用GPU数量",placement:"top"},{default:(0,m.w5)((()=>[b])),_:1})])),default:(0,m.w5)((e=>[0===e.row.rentbrick?((0,m.wg)(),(0,m.j4)(V,{key:0,content:"整租",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(h,{icon:"databricks","is-custom-svg":""})])),_:1})):((0,m.wg)(),(0,m.j4)(V,{key:1,content:"可切分出租",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(h,{icon:"slice-line"})])),_:1})),(0,m.Uk)(" "+(0,d.zw)(e.row.gpuNum),1)])),_:1}),(0,m.Wm)(v,{fixed:"right",label:"操作"},{default:(0,m.w5)((e=>[(0,m.Wm)(y,{type:"primary",onClick:a},{default:(0,m.w5)((()=>[(0,m.Uk)("租赁")])),_:1})])),_:1})])),_:1},512),(0,m.Wm)(D,{"current-page":e.currentpage,"onUpdate:currentPage":W[0]||(W[0]=l=>e.currentpage=l),layout:"prev, pager, next","page-size":_,total:w},null,8,["current-page"])])),_:1}),(0,m.Wm)((0,s.SU)(c["default"]),{ref_key:"dialogRef",ref:l},null,512)])}}});function W(e){e.__source="src/views/gpumarket/hosts/components/hostTable.vue"}var v=a(83744);"function"===typeof W&&W(g);const k=(0,v.Z)(g,[["__scopeId","data-v-71f664cc"]]);var V=k},7608:function(e,l,a){a.d(l,{Z:function(){return d}});var o=a(73632),t=(a(3241),a(74965),a(66252));function r(e,l){const a=o.dq;return(0,t.wg)(),(0,t.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function n(e){e.__source="library/components/VabQueryForm/index.vue"}var u=a(83744);const i={};"function"===typeof n&&n(i);const m=(0,u.Z)(i,[["render",r],["__scopeId","data-v-172989c8"]]);var d=m}}]);