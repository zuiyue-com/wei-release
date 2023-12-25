/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-25 17:57:10
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6476],{29859:function(e,r,t){t.d(r,{GP:function(){return d},I2:function(){return m},NT:function(){return n},Xh:function(){return l},l2:function(){return i},y_:function(){return s}});var a=t(92325),o=t(11555);function n(){return(0,a.Z)({url:"/wwwapi.php?to=usercp&ac=credit&op=exchange",method:"get"})}async function i(e){const{body:{hash:r}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=usercp&ac=credit&op=exchange",method:"post",data:{formhash:r,operation:"exchange",exchangesubmit:"true",outi:0,...e}})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=cash",method:"get",params:e})}function l(){return(0,a.Z)({url:"/wwwapi.php?to=cash&modac=formbase",method:"get"})}function m(e){return(0,a.Z)({url:"/wwwapi.php?to=cash&modac=cash",method:"post",data:e})}function s(e){return(0,a.Z)({url:"/wwwapi.php?to=cash&modac=cancel",method:"post",data:{log_id:e}})}},44598:function(e,r,t){var a=t(90482);function o(...e){let r=new a.Z(e[0]);for(let t=1;t<e.length;t++)r=r.add(new a.Z(e[t]));return r.toNumber()}function n(...e){let r=new a.Z(e[0]);for(let t=1;t<e.length;t++)r=r.sub(new a.Z(e[t]));return r.toNumber()}function i(...e){let r=new a.Z(e[0]);for(let t=1;t<e.length;t++)r=r.mul(new a.Z(e[t]));return r.toNumber()}function d(...e){let r=new a.Z(e[0]);for(let t=1;t<e.length;t++)r=r.div(new a.Z(e[t]));return r.toNumber()}r.Z={add:o,sub:n,mul:i,div:d}},23051:function(e,r,t){t.d(r,{NQ:function(){return n},UF:function(){return l},az:function(){return i},dw:function(){return d},oU:function(){return o}});var a=t(66443);const o={mobile:[{required:!0,trigger:"blur",validator:(e,r,t)=>{""===r?t(new Error("手机号码不能为空")):t()}},{trigger:"blur",validator(e,r,t){return(0,a.Mn)(r)},message:"手机号码格式错误"}],passwd:[{required:!0,trigger:"blur",validator:(e,r,t)=>{(0,a.L6)(r)?t():t(new Error("密码不能少于6位"))}}],seccodeverify:{required:!0,trigger:"blur",message:"验证码不能空"}},n={mobile:[{required:!0,message:"手机号码必填",trigger:"blur"},{trigger:"blur",validator(e,r,t){return(0,a.Mn)(r)},message:"手机号码格式错误"}],seccodeverify:{required:!0,trigger:"blur",message:"验证码不能空"},smscode:{required:!0,trigger:"blur",message:"手机验证码必填"}},i={realname:[{required:!0,message:"真实姓名必填",trigger:"change"},{validator(e,r,t){return(0,a.Ur)(r)},message:"姓名必须是中文",trigger:"change"}],idcard:[{required:!0,message:"身份证必填",trigger:"change"},{validator(e,r,t){return(0,a.tR)(r)},message:"身份证格式错误",trigger:"change"}]},d={newpassword:[{required:!0,trigger:"blur",message:"新密码不能少于6位",validator:(e,r,t)=>(0,a.L6)(r)}]},l={password:[{required:!0,trigger:"blur",message:"密码不能为空！"}]}},66476:function(e,r,t){t.r(r),t.d(r,{default:function(){return V}});var a=t(73481),o=(t(3241),t(62029),t(20129)),n=(t(69840),t(6589),t(57018)),i=(t(74367),t(66263)),d=(t(33790),t(3837)),l=(t(81010),t(15659)),m=(t(10444),t(47820)),s=(t(50986),t(61715),t(31040)),c=(t(86709),t(50363),t(66252)),u=t(3577),f=t(49963);const p={class:"dialog-footer"};function g(e,r,t,g,_,w){const h=d.$Y,b=s.d6,v=m.BT,y=m.km,D=l.ElButton,x=d.eI,V=i.v,C=n.EZ,Z=o.nH,k=o.ly,W=a.d0;return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(x,{data:e.formOptionList,style:{width:"100%","margin-bottom":"20px"},fit:"",flexible:""},{default:(0,c.w5)((()=>[(0,c.Wm)(h,{prop:"from_name",label:"兑出积分类型"}),(0,c.Wm)(h,{prop:"from_max_credits",label:"积分数量"}),(0,c.Wm)(h,{prop:"",label:"兑出数量"},{default:(0,c.w5)((({row:r})=>[(0,c.Wm)(b,{modelValue:r.from_credits,"onUpdate:modelValue":e=>r.from_credits=e,step:1,min:0,max:r.from_max_credits,onChange:t=>e.changeCreditRate(r)},null,8,["modelValue","onUpdate:modelValue","max","onChange"])])),_:1}),(0,c.Wm)(h,{prop:"",label:"兑入积分类型",width:"230"},{default:(0,c.w5)((({row:r})=>[(0,c.Wm)(y,{modelValue:r.to_credit_id,"onUpdate:modelValue":e=>r.to_credit_id=e,placeholder:"请选择",onChange:t=>e.changeCreditRate(r)},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.rates,(e=>((0,c.wg)(),(0,c.j4)(v,{key:e.credit_id,label:e.title,value:e.credit_id},{default:(0,c.w5)((()=>[(0,c.Uk)((0,u.zw)(e.title),1)])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,c.Wm)(h,{prop:"to_credits",label:"得到积分"}),(0,c.Wm)(h,{prop:"",label:"操作"},{default:(0,c.w5)((({row:r})=>[(0,c.Wm)(D,{size:"small",type:"primary",disabled:0==r.from_credits,onClick:t=>e.exchangeCreditPrompt(r)},{default:(0,c.w5)((()=>[(0,c.Uk)(" 兑换 ")])),_:2},1032,["disabled","onClick"])])),_:1})])),_:1},8,["data"]),(0,c.Wm)(V,{closable:!1,"show-icon":"",title:"积分兑换在兑换完成后，具有不可逆的性质，兑换前请慎重选择兑入的积分类型。如果选错兑入积分类型导致自身权益损失，平台将不会作出任何补偿或赔偿",type:"info"}),(0,c.Wm)(W,{modelValue:e.dialogVisible,"onUpdate:modelValue":r[1]||(r[1]=r=>e.dialogVisible=r),title:"操作提示",width:"30%","close-on-click-modal":!1},{footer:(0,c.w5)((()=>[(0,c._)("span",p,[(0,c.Wm)(D,{onClick:e.hiddenDialog},{default:(0,c.w5)((()=>[(0,c.Uk)("取消")])),_:1},8,["onClick"]),(0,c.Wm)(D,{loading:e.loading,type:"primary",onClick:e.exchangeCreditFormValid,onKeyup:(0,f.D2)(e.exchangeCreditFormValid,["enter"])},{default:(0,c.w5)((()=>[(0,c.Uk)(" 确定 ")])),_:1},8,["loading","onClick","onKeyup"])])])),default:(0,c.w5)((()=>[(0,c.Wm)(k,{ref:"formRef","label-position":"top",rules:e.rules,model:e.formData},{default:(0,c.w5)((()=>[(0,c._)("h3",null,(0,u.zw)(e.dialogTips),1),(0,c.Wm)(Z,{label:"积分兑换需要提供密码，请输入密码",prop:"password"},{default:(0,c.w5)((()=>[(0,c.Wm)(C,{modelValue:e.formData.password,"onUpdate:modelValue":r[0]||(r[0]=r=>e.formData.password=r),type:"password"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue"])],64)}var _=t(29859),w=t(23051),h=t(44598),b=t(2262),v=(0,c.aZ)({name:"Watermark",setup(){const e=(0,c.f3)("$baseMessage");(0,c.bv)((()=>{a()}));const r=(0,b.qj)({formData:{exchangeamount:0,tocredits:0,fromcredits:0,password:""},formTempData:{from_name:"",from_credits:0,to_name:"",to_credits:0},formOptionList:[],rules:w.UF,formRef:null,dialogVisible:!1,loading:!1});function t(e){return e.map((e=>{const r=e.t.map((e=>({credit_id:e.t,rate:parseFloat(e.rate),name:e.name,title:`${e.name}---兑率 ${e.rate}`}))),t=parseInt(e.score),a=e.to_credit_id??r[0].credit_id,o=r.find((e=>e.credit_id==a)),n=o?h.Z.mul(t,o.rate):0;return{from_credit_id:e.f,from_name:e.name,from_credits:t,from_max_credits:t,to_credit_id:a,to_name:o?o.name:"",to_credits:n,rates:r}}))}async function a(){const{body:e}=await(0,_.NT)();r.formOptionList=t(Object.values(e))}async function o(e){const r=e.rates.find((r=>r.credit_id==e.to_credit_id));let t=e.from_credits;t>e.from_max_credits&&(t=e.from_max_credits),e.to_credits=r?h.Z.mul(t,r.rate):0,e.to_name=r?r.name:""}async function n(){const{body:e}=await(0,_.NT)(),t=Object.values(e);r.formOptionList.map((e=>{const r=t.find((r=>r.f==e.from_credit_id));r&&(e.from_max_credits=parseInt(r.score),e.from_credits>e.from_max_credits&&(e.from_credits=e.from_max_credits,o(e)))}))}async function i(){try{r.loading=!0;const{res:t}=await(0,_.l2)(r.formData);e(msg,"success","vab-hey-message-success"),n()}catch(t){}finally{r.formData.password="",r.loading=!1,r.dialogVisible=!1}}async function d(e){r.dialogVisible=!0,r.formTempData.from_credits=e.from_credits,r.formTempData.from_name=e.from_name,r.formTempData.to_credits=e.to_credits,r.formTempData.to_name=e.to_name,r.formData.exchangeamount=e.to_credits,r.formData.tocredits=e.to_credit_id,r.formData.fromcredits=e.from_credit_id}function l(){r["formRef"].validate((async e=>{e&&i()}))}function m(){r.formData.password="",r.loading=!1,r.dialogVisible=!1}return r.dialogTips=(0,c.Fl)((()=>`${r.formTempData.from_name} ${r.formTempData.from_credits} 兑换 ${r.formTempData.to_name} ${r.formTempData.to_credits}`)),{...(0,b.BK)(r),changeCreditRate:o,exchangeCreditPrompt:d,exchangeCreditFormValid:l,hiddenDialog:m}}});function y(e){e.__source="src/views/setting/tixian/components/formDuihuan.vue"}var D=t(83744);"function"===typeof y&&y(v);const x=(0,D.Z)(v,[["render",g]]);var V=x}}]);