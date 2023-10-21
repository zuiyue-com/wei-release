/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-21 18:47:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5325,7280,7108],{97280:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});var t=a(66252);const n={class:"el-card el-upload-dragger list-item"},o={class:"list-item-meta"},i={class:"list-item-meta-avatar"},s={class:"list-item-meta-content"},c={class:"card-header"},r={class:"list-item-meta-action"};function u(e,l){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",o,[(0,t._)("div",i,[(0,t.WI)(e.$slots,"image",{},void 0,!0)]),(0,t._)("div",s,[(0,t._)("div",c,[(0,t.WI)(e.$slots,"header",{},void 0,!0)]),(0,t.WI)(e.$slots,"content",{},void 0,!0)]),(0,t._)("div",r,[(0,t.WI)(e.$slots,"action",{},void 0,!0)])])])}function d(e){e.__source="src/components/CardItem/index.vue"}var m=a(83744);const f={};"function"===typeof d&&d(f);const v=(0,m.Z)(f,[["render",u],["__scopeId","data-v-4186fb5a"]]);var p=v},93893:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var t=a(47223),n=(a(3241),a(96624),a(35756)),o=(a(19414),a(54717)),i=(a(50552),a(73632)),s=(a(74965),a(22040)),c=(a(99426),a(14181)),r=(a(33828),a(15659)),u=(a(10444),a(57658),a(66252)),d=a(2262),m=a(3577),f=a(97280),v=a(49296),p=a(23279),k=a.n(p);const w={class:"lora-container"},y=["id"],_={key:0,class:"action"};var g=(0,u.aZ)({__name:"lora",props:{loraStyles:{type:Array,default:()=>[]},formStyles:{type:Array,default:()=>[]}},setup(e){const l=e,a=(0,u.f3)("$baseMessage"),p=(0,d.iH)(!1),g=(0,u.Fl)((()=>l.loraStyles.filter((e=>e.checked)))),h=(0,u.Fl)((()=>l.formStyles));function W(e){const l=h.value.findIndex((l=>l.key===e.key));return!(l>=0)&&(h.value.push({pic:e.pic,name:e.name,key:e.key,weight:e.weight.value,min:e.weight.min,max:e.weight.max}),!0)}function C(e){const l=h.value.findIndex((l=>l.key===e));return l>=0&&(h.value.splice(l,1),!0)}function b(e){const l=W(e);l?(p.value=!1,x()):a("该 Lora 风格已经添加","error","vab-hey-message-error")}function x(){g.value.filter((e=>e.checked=!1))}const I=k()((e=>{p.value&&(e.checked=!e.checked)}),200);function U(e){const l=C(e);l||a("删除 Lora 风格失败","error","vab-hey-message-error")}function S(){g.value.map((e=>W(e))),x(),p.value=!1}function D(){p.value=!1,x()}return(l,a)=>{const k=r.ElButton,W=(0,u.up)("Close"),C=c.gn,V=s.Dv,$=i.dq,z=o.zd,A=n.F8,L=(0,u.up)("vab-icon"),q=t.BM;return(0,u.wg)(),(0,u.iD)("div",w,[(0,u.Wm)(k,{class:"lora-button",onClick:a[0]||(a[0]=e=>p.value=!0)},{default:(0,u.w5)((()=>[(0,u.Uk)(" 添加LoRA(风格) ")])),_:1}),(0,u.Wm)(z,{modelValue:(0,d.SU)(p),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,d.dq)(p)?p.value=e:null),"show-close":!1,size:"60%"},{header:(0,u.w5)((({titleId:e,titleClass:l})=>[(0,u._)("h4",{id:e,class:(0,m.C_)(l)},"选择LoRA(风格)，可多选",10,y),(0,d.SU)(g).length>0?((0,u.wg)(),(0,u.iD)("div",_,[(0,u.Wm)(k,{type:"primary",plain:"",onClick:x},{default:(0,u.w5)((()=>[(0,u.Uk)(" 取消 ")])),_:1}),(0,u.Wm)(k,{type:"primary",onClick:S},{default:(0,u.w5)((()=>[(0,u.Uk)(" 选择 ")])),_:1})])):(0,u.kq)("",!0),(0,u.Wm)(C,{color:"red",class:"cursor-pointer",onClick:D},{default:(0,u.w5)((()=>[(0,u.Wm)(W)])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)($,{gutter:16,span:"24"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.loraStyles,(e=>((0,u.wg)(),(0,u.j4)(V,{key:e.key,lg:4,md:4,sm:4,xl:3,xs:24},{default:(0,u.w5)((()=>[(0,u.Wm)(v["default"],{item:e,zoom:"",onClick:l=>(0,d.SU)(I)(e),onDblclick:l=>b(e)},null,8,["item","onClick","onDblclick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(h),(e=>((0,u.wg)(),(0,u.j4)(f["default"],{key:e.name},{image:(0,u.w5)((()=>[(0,u.Wm)(A,{src:e.pic,width:"48",class:"upload-image"},null,8,["src"])])),header:(0,u.w5)((()=>[(0,u._)("span",null,(0,m.zw)(e.name),1),(0,u.Wm)(L,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:l=>U(e.key)},null,8,["onClick"])])),content:(0,u.w5)((()=>[(0,u.Wm)(q,{modelValue:e.weight,"onUpdate:modelValue":l=>e.weight=l,min:e.min,max:e.max,step:.1},null,8,["modelValue","onUpdate:modelValue","min","max"])])),_:2},1024)))),128))])}}});function h(e){e.__source="src/views/stablediffusion/components/lora.vue"}var W=a(83744);"function"===typeof h&&h(g);const C=(0,W.Z)(g,[["__scopeId","data-v-e6388018"]]);var b=C}}]);