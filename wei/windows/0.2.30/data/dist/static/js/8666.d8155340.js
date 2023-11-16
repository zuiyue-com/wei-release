/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-06 12:25:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8666],{7977:function(e,l,a){a.d(l,{gp:function(){return t}});var r=a(13517);function t(e){return(0,r.Z)({url:"/area/getList",method:"get",params:e})}},78666:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var r=a(66263),t=(a(3241),a(33790),a(20129)),o=(a(69840),a(15659)),n=(a(10444),a(57018)),m=(a(74367),a(6589),a(87692)),u=(a(45393),a(22411),a(66252));const d=e=>((0,u.dD)("data-v-0bc74adc"),e=e(),(0,u.Cn)(),e),i=d((()=>(0,u._)("div",{class:"content clearfix"},[(0,u._)("span",{class:"nowcredit"},[(0,u._)("b",{class:"czred"},"30000"),(0,u.Uk)(" 元 ")]),(0,u._)("span",{class:"nowcredit"},"最低需要100元才提现")],-1))),s=d((()=>(0,u._)("div",null,[(0,u.Uk)(" 转账支持：支付转账，银行卡转账，微信手机号收款转账，请务必填正确收款的户名和账号。如果是银行卡收款的，必须填写收款的银行名称。 "),(0,u._)("br"),(0,u.Uk)(" 出于安全的考虑，只要第一笔提现成功，以后的提现都使用同一个收款方式和收款账号，不可以修改，请慎重考虑使用账号类型和提现账号。 ")],-1)));function f(e,l,a,d,f,c){const p=m.dn,b=m.KD,w=t.nH,_=n.EZ,g=o.ElButton,W=t.ly,v=r.v;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(W,{ref:"formRef",class:"demo-form","label-width":"100px",model:e.form,rules:e.rules},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{label:"账号类型"},{default:(0,u.w5)((()=>[(0,u.Wm)(b,{modelValue:e.form.tixianmethod,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.tixianmethod=l)},{default:(0,u.w5)((()=>[(0,u.Wm)(p,{label:"left"},{default:(0,u.w5)((()=>[(0,u.Uk)("支付宝")])),_:1}),(0,u.Wm)(p,{label:"middle"},{default:(0,u.w5)((()=>[(0,u.Uk)("微信")])),_:1}),(0,u.Wm)(p,{label:"right"},{default:(0,u.w5)((()=>[(0,u.Uk)("银行卡")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,u.Wm)(w,{label:"收款方户名",prop:"name"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l),class:"money-input-width"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(w,{label:"收款方账号",prop:"region"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{modelValue:e.form.region,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.region=l),class:"money-input-width"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(w,{label:"收款方银行"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{modelValue:e.form.bank,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.bank=l),class:"money-input-width"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(w,{label:"可提现金额"},{default:(0,u.w5)((()=>[i])),_:1}),(0,u.Wm)(w,{label:"提现金额",prop:"rate"},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{modelValue:e.form.rate,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.rate=l),oninput:"value=value.replace(/^\\.+|[^\\d.]/g,'')",class:"money-input-width"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(w,{label:" "},{default:(0,u.w5)((()=>[(0,u.Wm)(g,{type:"primary",onClick:l[5]||(l[5]=l=>e.submitForm("formRef"))},{default:(0,u.w5)((()=>[(0,u.Uk)(" 申请提现 ")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,u.Wm)(v,{closable:!1,"show-icon":"",type:"info"},{default:(0,u.w5)((()=>[s])),_:1})],64)}a(7977);var c=a(2262),p=(0,u.aZ)({name:"ComprehensiveForm",setup(){const e=(0,c.qj)({formRef:null,form:{tixianmethod:"left",name:"姓名/企业名",region:"支付宝邮箱/银行卡账号/微信绑定的手机号",bank:"银行卡账号收款必须填银行名称",rate:100},areaOptions:[],rules:{name:[{required:!0,message:"收款方的姓名必须填写，企业用户请填写公账开户名",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],region:[{required:!0,message:"支付宝账号，银行卡账号，微信收款的请填写微信绑定的手机号",trigger:"blur"}],rate:[{required:!0,message:"兑换金额必须符合最低提现金额的要求",trigger:"blur"}]}}),l=l=>{e[l].validate((e=>{e?alert("submit!"):console.log("error submit!!")}))},a=l=>{e[l].resetFields()};return{...(0,c.BK)(e),submitForm:l,resetForm:a}}});function b(e){e.__source="src/views/setting/tixian/components/formTixian.vue"}var w=a(83744);"function"===typeof b&&b(p);const _=(0,w.Z)(p,[["render",f],["__scopeId","data-v-0bc74adc"]]);var g=_}}]);