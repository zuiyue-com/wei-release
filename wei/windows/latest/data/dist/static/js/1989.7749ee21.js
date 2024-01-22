/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:00:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1989,210],{20210:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var l=t(57018),u=(t(3241),t(74367),t(66252)),d=t(2262),i=t(3577),n=t(66443),o={__name:"index",props:{modelValue:{type:[Number,String],default:0},placeholder:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,o=(0,d.iH)(parseInt(t.modelValue));function s(){const e=parseInt(o.value);isNaN(e)?o.value=defaultVal:(o.value<t.min&&(o.value=t.min),o.value>t.max&&(o.value=t.max),a("update:modelValue",o.value))}(0,u.YP)((()=>t.modelValue),(()=>{o.value=parseInt(t.modelValue)}));const m=(0,u.Fl)((()=>""===o.value||(0,n.yH)(o.value)));return(a,t)=>{const n=l.EZ;return(0,u.wg)(),(0,u.j4)(n,{modelValue:(0,d.SU)(o),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,d.dq)(o)?o.value=e:null),modelModifiers:{number:!0},placeholder:e.placeholder,class:(0,i.C_)({"error-value":!(0,d.SU)(m)}),disabled:e.disabled,onChange:s},(0,u.Nv)({_:2},[a.$slots.prepend?{name:"prepend",fn:(0,u.w5)((()=>[(0,u.WI)(a.$slots,"prepend")])),key:"0"}:void 0]),1032,["modelValue","placeholder","class","disabled"])}}};function s(e){e.__source="src/components/InputNumber/index.vue"}var m=t(83744);"function"===typeof s&&s(o);const p=(0,m.Z)(o,[["__scopeId","data-v-2685ef0d"]]);var r=p},21989:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(73632),u=(t(3241),t(74965),t(22040)),d=(t(99426),t(87692)),i=(t(45393),t(22411),t(66252)),n=t(2262),o=t(3577),s=t(20210);const m={key:0},p={key:1},r={class:"widthAndHeightInput"};var c={__name:"image_size",props:{imageSize:{type:Object,default:()=>{}},size:{type:[String,Number],default:""},width:{type:Number,default:0},height:{type:Number,default:0},imageSizeCustom:{type:Object,default:()=>{}},disabled:{type:Boolean,default:!1}},emits:["update:size","update:width","update:height"],setup(e,{emit:a}){const t=e,c=(0,n.iH)(t.size);async function f(e){a("update:width",e)}async function h(e){a("update:height",e)}function v(){const e=c.value;if("custom"===e.toLowerCase())a("update:width",t.imageSizeCustom.defaultWidth),a("update:height",t.imageSizeCustom.defaultHeight);else{const l=t.imageSize[e];a("update:width",l[0]),a("update:height",l[1])}a("update:size",e)}return(0,i.m0)((()=>{c.value=t.size})),(a,t)=>{const g=d.dn,b=d.KD,w=u.Dv,_=l.dq;return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i.Wm)(b,{modelValue:(0,n.SU)(c),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(c)?c.value=e:null),onChange:v},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.imageSize,((e,a)=>((0,i.wg)(),(0,i.j4)(g,{key:a,label:a},{default:(0,i.w5)((()=>[2===e.length?((0,i.wg)(),(0,i.iD)("div",m,(0,o.zw)(`${e[0]} * ${e[1]}`),1)):(0,i.kq)("",!0),e.length>2?((0,i.wg)(),(0,i.iD)("div",p,"自定义")):(0,i.kq)("",!0)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),(0,i._)("div",r,[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{span:12},{default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(s["default"]),{value:e.width,placeholder:"请输入生图的宽度",min:e.imageSizeCustom.minWidth,max:e.imageSizeCustom.maxWidth,disabled:e.disabled,"onUpdate:modelValue":f},{prepend:(0,i.w5)((()=>[(0,i.Uk)("宽度")])),_:1},8,["value","min","max","disabled"])])),_:1}),(0,i.Wm)(w,{span:12},{default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(s["default"]),{value:e.height,placeholder:"请输入生图的高度",min:e.imageSizeCustom.minHeight,max:e.imageSizeCustom.maxHeight,disabled:e.disabled,"onUpdate:modelValue":h},{prepend:(0,i.w5)((()=>[(0,i.Uk)("高度")])),_:1},8,["value","min","max","disabled"])])),_:1})])),_:1})])],64)}}};function f(e){e.__source="src/views/stablediffusion/components/image_size.vue"}"function"===typeof f&&f(c);const h=c;var v=h}}]);