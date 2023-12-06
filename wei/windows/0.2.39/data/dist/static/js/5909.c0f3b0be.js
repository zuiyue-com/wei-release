/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-06 17:28:37
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5909,5806,3717],{15806:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(66252);const n={class:"el-card el-upload-dragger list-item"},o={class:"list-item-meta"},i={class:"list-item-meta-avatar"},s={class:"list-item-meta-content"},c={class:"card-header"},r={class:"list-item-meta-action"};function u(e,t){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[(0,a._)("div",i,[(0,a.WI)(e.$slots,"image",{},void 0,!0)]),(0,a._)("div",s,[(0,a._)("div",c,[(0,a.WI)(e.$slots,"header",{},void 0,!0)]),(0,a.WI)(e.$slots,"content",{},void 0,!0)]),(0,a._)("div",r,[(0,a.WI)(e.$slots,"action",{},void 0,!0)])])])}function d(e){e.__source="src/components/CardItem/index.vue"}var m=l(83744);const f={};"function"===typeof d&&d(f);const v=(0,m.Z)(f,[["render",u],["__scopeId","data-v-4186fb5a"]]);var p=v},52735:function(e,t,l){l.r(t),l.d(t,{default:function(){return x}});var a=l(47223),n=(l(3241),l(96624),l(57122)),o=(l(69540),l(54717)),i=(l(50552),l(73632)),s=(l(74965),l(22040)),c=(l(99426),l(14181)),r=(l(33828),l(15659)),u=(l(10444),l(10661)),d=(l(35095),l(57658),l(66252)),m=l(2262),f=l(3577),v=l(15806),p=l(47730),w=l(23279),_=l.n(w);const g={class:"lora-container"},k=["id"],h={key:0,class:"action"};var y=(0,d.aZ)({__name:"lora",props:{loraStyles:{type:Array,default:()=>[]},formStyles:{type:Array,default:()=>[]}},setup(e){const t=e,l=(0,d.f3)("$baseMessage"),w=(0,m.iH)(!1),y=(0,d.Fl)((()=>t.loraStyles.filter((e=>e.checked)))),W=(0,d.Fl)((()=>t.formStyles));function C(e){const t=W.value.findIndex((t=>t.name===e.name));return!(t>=0)&&(W.value.push({pic:e.pic,title:e.title,name:e.name,weight:e.weight.value,min:e.weight.min,max:e.weight.max}),!0)}function b(e){const t=W.value.findIndex((t=>t.name===e));return t>=0&&(W.value.splice(t,1),!0)}function x(e){const t=C(e);t?(w.value=!1,I()):l("该 Lora 风格已经添加","error","vab-hey-message-error")}function I(){y.value.filter((e=>e.checked=!1))}const U=_()((e=>{w.value&&(e.checked=!e.checked)}),200);function S(e){const t=b(e);t||l("删除 Lora 风格失败","error","vab-hey-message-error")}function D(){y.value.map((e=>C(e))),I(),w.value=!1}function V(){w.value=!1,I()}return(t,l)=>{const _=(0,d.up)("vab-icon"),C=u.Q0,b=r.ElButton,$=(0,d.up)("Close"),q=c.gn,z=s.Dv,A=i.dq,F=o.zd,H=n.F8,L=a.BM;return(0,d.wg)(),(0,d.iD)("div",g,[(0,d.Wm)(b,{class:"lora-button",onClick:l[0]||(l[0]=e=>w.value=!0)},{default:(0,d.w5)((()=>[(0,d.Uk)(" 画作风格 "),(0,d.Wm)(C,{effect:"dark",content:"写实派，抽象派，素描，油画，中国国画，漫画，大头贴等等",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1}),(0,d.Wm)(F,{modelValue:(0,m.SU)(w),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,m.dq)(w)?w.value=e:null),"show-close":!1,size:"60%"},{header:(0,d.w5)((({titleId:e,titleClass:t})=>[(0,d._)("h4",{id:e,class:(0,f.C_)(t)},"选择LoRA(风格)，可多选",10,k),(0,m.SU)(y).length>0?((0,d.wg)(),(0,d.iD)("div",h,[(0,d.Wm)(b,{type:"primary",plain:"",onClick:I},{default:(0,d.w5)((()=>[(0,d.Uk)(" 取消 ")])),_:1}),(0,d.Wm)(b,{type:"primary",onClick:D},{default:(0,d.w5)((()=>[(0,d.Uk)(" 选择 ")])),_:1})])):(0,d.kq)("",!0),(0,d.Wm)(q,{color:"red",class:"cursor-pointer",onClick:V},{default:(0,d.w5)((()=>[(0,d.Wm)($)])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(A,{gutter:16,span:"24"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.loraStyles,(e=>((0,d.wg)(),(0,d.j4)(z,{key:e.name,lg:4,md:4,sm:4,xl:3,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(p["default"],{item:e,zoom:"",onClick:t=>(0,m.SU)(U)(e),onDblclick:t=>x(e)},null,8,["item","onClick","onDblclick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,m.SU)(W),(e=>((0,d.wg)(),(0,d.j4)(v["default"],{key:e.title},{image:(0,d.w5)((()=>[(0,d.Wm)(H,{src:e.pic,width:"48",class:"upload-image"},null,8,["src"])])),header:(0,d.w5)((()=>[(0,d._)("span",null,(0,f.zw)(e.title),1),(0,d.Wm)(_,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:t=>S(e.name)},null,8,["onClick"])])),content:(0,d.w5)((()=>[(0,d.Wm)(L,{modelValue:e.weight,"onUpdate:modelValue":t=>e.weight=t,min:e.min,max:e.max,step:.1},null,8,["modelValue","onUpdate:modelValue","min","max"])])),_:2},1024)))),128))])}}});function W(e){e.__source="src/views/stablediffusion/components/lora.vue"}var C=l(83744);"function"===typeof W&&W(y);const b=(0,C.Z)(y,[["__scopeId","data-v-23710086"]]);var x=b}}]);