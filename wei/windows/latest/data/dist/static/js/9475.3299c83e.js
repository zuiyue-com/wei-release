/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9475,7280,9502,6507],{97280:function(e,l,a){a.r(l),a.d(l,{default:function(){return f}});var t=a(66252);const o={class:"el-card el-upload-dragger list-item"},n={class:"list-item-meta"},i={class:"list-item-meta-avatar"},d={class:"list-item-meta-content"},s={class:"card-header"},r={class:"list-item-meta-action"};function u(e,l){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",n,[(0,t._)("div",i,[(0,t.WI)(e.$slots,"image",{},void 0,!0)]),(0,t._)("div",d,[(0,t._)("div",s,[(0,t.WI)(e.$slots,"header",{},void 0,!0)]),(0,t.WI)(e.$slots,"content",{},void 0,!0)]),(0,t._)("div",r,[(0,t.WI)(e.$slots,"action",{},void 0,!0)])])])}function m(e){e.__source="src/components/CardItem/index.vue"}var c=a(83744);const _={};"function"===typeof m&&m(_);const p=(0,c.Z)(_,[["render",u],["__scopeId","data-v-4186fb5a"]]);var f=p},33221:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var t=a(47223),o=(a(3241),a(96624),a(57018)),n=(a(74367),a(14132)),i=(a(50986),a(61715),a(20129)),d=(a(69840),a(6589),a(35756)),s=(a(19414),a(66252)),r=a(2262),u=a(3577),m=a(97280),c=a(29819),_=a(91222),p=a(47720);const f=e=>((0,s.dD)("data-v-06e00ad0"),e=e(),(0,s.Cn)(),e),v={class:"ADtailerFrom"},w={key:1,class:"el-card el-upload-dragger list-item"},g=f((()=>(0,s._)("div",{class:"list-item-meta"},[(0,s._)("div",{class:"list-item-meta-content-left"},[(0,s._)("ul",null,[(0,s._)("li",null,"请从任务列表选择想要操作的图片"),(0,s._)("li",null,"点击图片上的 (ADtailer修复) 按钮")])])],-1))),U=[g],y={class:"txt2imgFrom"};var S={__name:"adetailer",setup(e){const l=(0,_.m)(),{adetailerForm:a,adetailerOptions:f}=(0,p.Jk)(l),{adSetUploadImage:g}=l;return(e,l)=>{const _=d.F8,p=(0,s.up)("vab-icon"),S=i.nH,k=i.ly,b=n.BT,W=n.ElSelect,h=o.EZ,V=t.BM;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",v,[(0,s.Wm)(k,{"label-position":"top","label-width":"100px"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{label:"基础图片"},{default:(0,s.w5)((()=>[(0,r.SU)(a).base_image.url?((0,s.wg)(),(0,s.j4)((0,r.SU)(m["default"]),{key:0},{image:(0,s.w5)((()=>[(0,s.Wm)(_,{src:(0,r.SU)(a).base_image.url,width:"48"},null,8,["src"])])),header:(0,s.w5)((()=>[(0,s._)("span",null,(0,u.zw)((0,r.SU)(a).base_image.title),1)])),action:(0,s.w5)((()=>[(0,s.Wm)(p,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)"},onClick:l[0]||(l[0]=e=>(0,r.SU)(g)({}))})])),_:1})):((0,s.wg)(),(0,s.iD)("div",w,U))])),_:1})])),_:1})]),(0,s._)("div",y,[(0,s.Wm)(k,{"label-position":"top","label-width":"100px"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{label:"ADetailer 模型"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{modelValue:(0,r.SU)(a).ad_model,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,r.SU)(a).ad_model=e),clearable:"",placeholder:"Select"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(f).adModel,(e=>((0,s.wg)(),(0,s.j4)(b,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(S,{label:""},{default:(0,s.w5)((()=>[(0,s.Wm)((0,r.SU)(c["default"]),{"lora-styles":(0,r.SU)(f).loraStyle,"form-styles":(0,r.SU)(a).lora_styles},null,8,["lora-styles","form-styles"])])),_:1}),(0,s.Wm)(S,{label:"创意描述"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:(0,r.SU)(a).ad_prompt_words,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,r.SU)(a).ad_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(S,{label:"排除词"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:(0,r.SU)(a).ad_negative_prompt_words,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,r.SU)(a).ad_negative_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(S,{label:"置信度"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:(0,r.SU)(a).ad_confidence,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,r.SU)(a).ad_confidence=e),min:(0,r.SU)(f).adConfidence.min,max:(0,r.SU)(f).adConfidence.max,step:.1},null,8,["modelValue","min","max"])])),_:1}),(0,s.Wm)(S,{label:"重绘蒙版模糊"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:(0,r.SU)(a).ad_dilate_erode,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,r.SU)(a).ad_dilate_erode=e),min:(0,r.SU)(f).adMaskBlur.min,max:(0,r.SU)(f).adMaskBlur.max},null,8,["modelValue","min","max"])])),_:1}),(0,s.Wm)(S,{label:"重绘噪声强度"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:(0,r.SU)(a).ad_denoising_strength,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,r.SU)(a).ad_denoising_strength=e),min:(0,r.SU)(f).adDenoisingStrength.min,max:(0,r.SU)(f).adDenoisingStrength.max,step:.1},null,8,["modelValue","min","max"])])),_:1})])),_:1})])],64)}}};function k(e){e.__source="src/views/stablediffusion/components/adetailer.vue"}var b=a(83744);"function"===typeof k&&k(S);const W=(0,b.Z)(S,[["__scopeId","data-v-06e00ad0"]]);var h=W},29819:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var t=a(47223),o=(a(3241),a(96624),a(35756)),n=(a(19414),a(54717)),i=(a(50552),a(73632)),d=(a(74965),a(22040)),s=(a(99426),a(14181)),r=(a(33828),a(15659)),u=(a(10444),a(57658),a(66252)),m=a(2262),c=a(3577),_=a(97280),p=a(41208),f=a(23279),v=a.n(f);const w={class:"lora-container"},g=["id"],U={key:0,class:"action"};var y=(0,u.aZ)({__name:"lora",props:{loraStyles:{type:Array,default:()=>[]},formStyles:{type:Array,default:()=>[]}},setup(e){const l=e,a=(0,u.f3)("$baseMessage"),f=(0,m.iH)(!1),y=(0,u.Fl)((()=>l.loraStyles.filter((e=>e.checked)))),S=(0,u.Fl)((()=>l.formStyles));function k(e){const l=S.value.findIndex((l=>l.key===e.key));return!(l>=0)&&(S.value.push({pic:e.pic,title:e.title,key:e.key,weight:e.weight.value,min:e.weight.min,max:e.weight.max}),!0)}function b(e){const l=S.value.findIndex((l=>l.key===e));return l>=0&&(S.value.splice(l,1),!0)}function W(e){const l=k(e);l?(f.value=!1,h()):a("该 Lora 风格已经添加","error","vab-hey-message-error")}function h(){y.value.filter((e=>e.checked=!1))}const V=v()((e=>{f.value&&(e.checked=!e.checked)}),200);function x(e){const l=b(e);l||a("删除 Lora 风格失败","error","vab-hey-message-error")}function C(){y.value.map((e=>k(e))),h(),f.value=!1}function D(){f.value=!1,h()}return(l,a)=>{const v=r.ElButton,k=(0,u.up)("Close"),b=s.gn,I=d.Dv,A=i.dq,F=n.zd,B=o.F8,H=(0,u.up)("vab-icon"),M=t.BM;return(0,u.wg)(),(0,u.iD)("div",w,[(0,u.Wm)(v,{class:"lora-button",onClick:a[0]||(a[0]=e=>f.value=!0)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 添加LoRA(风格) ")])),_:1}),(0,u.Wm)(F,{modelValue:(0,m.SU)(f),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,m.dq)(f)?f.value=e:null),"show-close":!1,size:"60%"},{header:(0,u.w5)((({titleId:e,titleClass:l})=>[(0,u._)("h4",{id:e,class:(0,c.C_)(l)},"选择LoRA(风格)，可多选",10,g),(0,m.SU)(y).length>0?((0,u.wg)(),(0,u.iD)("div",U,[(0,u.Wm)(v,{type:"primary",plain:"",onClick:h},{default:(0,u.w5)((()=>[(0,u.Uk)(" 取消 ")])),_:1}),(0,u.Wm)(v,{type:"primary",onClick:C},{default:(0,u.w5)((()=>[(0,u.Uk)(" 选择 ")])),_:1})])):(0,u.kq)("",!0),(0,u.Wm)(b,{color:"red",class:"cursor-pointer",onClick:D},{default:(0,u.w5)((()=>[(0,u.Wm)(k)])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)(A,{gutter:16,span:"24"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.loraStyles,(e=>((0,u.wg)(),(0,u.j4)(I,{key:e.key,lg:4,md:4,sm:4,xl:3,xs:24},{default:(0,u.w5)((()=>[(0,u.Wm)(p["default"],{item:e,zoom:"",onClick:l=>(0,m.SU)(V)(e),onDblclick:l=>W(e)},null,8,["item","onClick","onDblclick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,m.SU)(S),(e=>((0,u.wg)(),(0,u.j4)(_["default"],{key:e.title},{image:(0,u.w5)((()=>[(0,u.Wm)(B,{src:e.pic,width:"48",class:"upload-image"},null,8,["src"])])),header:(0,u.w5)((()=>[(0,u._)("span",null,(0,c.zw)(e.title),1),(0,u.Wm)(H,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:l=>x(e.key)},null,8,["onClick"])])),content:(0,u.w5)((()=>[(0,u.Wm)(M,{modelValue:e.weight,"onUpdate:modelValue":l=>e.weight=l,min:e.min,max:e.max,step:.1},null,8,["modelValue","onUpdate:modelValue","min","max"])])),_:2},1024)))),128))])}}});function S(e){e.__source="src/views/stablediffusion/components/lora.vue"}var k=a(83744);"function"===typeof S&&S(y);const b=(0,k.Z)(y,[["__scopeId","data-v-61bcde84"]]);var W=b}}]);