/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[702,126,1243],{90126:function(e,l,t){t.r(l),t.d(l,{default:function(){return i}});var o=t(20129),a=(t(3241),t(69840),t(15659)),n=(t(10444),t(6589),t(57018)),r=(t(74367),t(66252));function d(e,l,t,d,m,u){const s=n.EZ,f=o.nH,i=a.ElButton,p=o.ly;return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(p,{"label-width":"80px",model:e.formData},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{label:"名称"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{modelValue:e.formData.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.formData.name=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(f,{label:"活动区域"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{modelValue:e.formData.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.formData.region=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(f,{label:"活动形式"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{modelValue:e.formData.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.formData.type=l)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{type:"primary",onClick:e.onSubmit},{default:(0,r.w5)((()=>[(0,r.Uk)("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var m=(0,r.aZ)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{formData:{name:"",region:"",type:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.formData=Object.assign({},this.$data.formData,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.formData),this.$emit("onClose")}}});function u(e){e.__source="src/views/other/workflow/components/propertySetting/CommonProperty.vue"}var s=t(83744);"function"===typeof u&&u(m);const f=(0,s.Z)(m,[["render",d]]);var i=f},70702:function(e,l,t){t.r(l),t.d(l,{default:function(){return i}});var o=t(66252);const a={class:"property-dialog"};function n(e,l,t,n,r,d){const m=(0,o.up)("User"),u=(0,o.up)("CommonProperty");return(0,o.wg)(),(0,o.iD)("div",a,["user"===e.nodeData.type?((0,o.wg)(),(0,o.j4)(m,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):((0,o.wg)(),(0,o.j4)(u,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}var r=t(90126),d=t(31243),m=(0,o.aZ)({name:"PropertyDialog",components:{CommonProperty:r["default"],User:d["default"]},props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}});function u(e){e.__source="src/views/other/workflow/components/propertySetting/PropertyDialog.vue"}var s=t(83744);"function"===typeof u&&u(m);const f=(0,s.Z)(m,[["render",n]]);var i=f},31243:function(e,l,t){t.r(l),t.d(l,{default:function(){return W}});var o=t(20129),a=(t(3241),t(69840),t(15659)),n=(t(10444),t(87692)),r=(t(45393),t(81691),t(63715)),d=(t(76252),t(5508),t(85381)),m=(t(68538),t(85492)),u=(t(98285),t(22040)),s=(t(99426),t(39644)),f=(t(59739),t(14132)),i=(t(50986),t(61715),t(6589),t(57018)),p=(t(74367),t(66252));function c(e,l,t,c,y,w){const h=i.EZ,b=o.nH,W=f.BT,V=f.ElSelect,_=s.iJ,D=u.Dv,v=m.ah,g=d.OX,C=r.ElCheckbox,k=r.z5,U=n.rh,$=n.KD,O=a.ElButton,j=o.ly;return(0,p.wg)(),(0,p.iD)("div",null,[(0,p.Wm)(j,{ref:"form","label-width":"80px",model:e.form},{default:(0,p.w5)((()=>[(0,p.Wm)(b,{label:"活动名称"},{default:(0,p.w5)((()=>[(0,p.Wm)(h,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,p.Wm)(b,{label:"活动区域"},{default:(0,p.w5)((()=>[(0,p.Wm)(V,{modelValue:e.form.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.region=l),placeholder:"请选择活动区域"},{default:(0,p.w5)((()=>[(0,p.Wm)(W,{label:"区域一",value:"shanghai"}),(0,p.Wm)(W,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),(0,p.Wm)(b,{label:"活动时间"},{default:(0,p.w5)((()=>[(0,p.Wm)(D,{span:11},{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:e.form.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.date1=l),placeholder:"选择日期",style:{width:"100%"},type:"date"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(D,{class:"line",span:2},{default:(0,p.w5)((()=>[(0,p.Uk)("-")])),_:1}),(0,p.Wm)(D,{span:11},{default:(0,p.w5)((()=>[(0,p.Wm)(v,{modelValue:e.form.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,p.Wm)(b,{label:"即时配送"},{default:(0,p.w5)((()=>[(0,p.Wm)(g,{modelValue:e.form.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.delivery=l)},null,8,["modelValue"])])),_:1}),(0,p.Wm)(b,{label:"活动性质"},{default:(0,p.w5)((()=>[(0,p.Wm)(k,{modelValue:e.form.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.type=l)},{default:(0,p.w5)((()=>[(0,p.Wm)(C,{label:"美食/餐厅线上活动",name:"type"}),(0,p.Wm)(C,{label:"地推活动",name:"type"}),(0,p.Wm)(C,{label:"线下主题活动",name:"type"}),(0,p.Wm)(C,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),(0,p.Wm)(b,{label:"特殊资源"},{default:(0,p.w5)((()=>[(0,p.Wm)($,{modelValue:e.form.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.resource=l)},{default:(0,p.w5)((()=>[(0,p.Wm)(U,{label:"线上品牌商赞助"}),(0,p.Wm)(U,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),(0,p.Wm)(b,{label:"活动形式"},{default:(0,p.w5)((()=>[(0,p.Wm)(h,{modelValue:e.form.desc,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.desc=l),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(b,null,{default:(0,p.w5)((()=>[(0,p.Wm)(O,{type:"primary",onClick:e.onSubmit},{default:(0,p.w5)((()=>[(0,p.Uk)("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var y=(0,p.aZ)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.form),this.$emit("onClose")}}});function w(e){e.__source="src/views/other/workflow/components/propertySetting/User.vue"}var h=t(83744);"function"===typeof w&&w(y);const b=(0,h.Z)(y,[["render",c]]);var W=b}}]);