/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-11-16 19:03:35
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7150,6879,5931],{81457:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var l=a(73632),n=(a(3241),a(74965),a(22040)),s=(a(99426),a(27977)),i=(a(40355),a(96872),a(57658),a(66252)),u=a(2262),d=a(3577),o=a(30930),c=a(53580),m=a(22201);const r={class:"posts-container"},p={class:"list-item"},f={class:"list-item-meta"},_={class:"list-item-meta-content-left"},v={class:"list-item-meta-content"},w={class:"link"},g=(0,i.aZ)({name:"Index"});var y=Object.assign(g,{setup(e){const t=(0,m.tv)(),a=(0,m.yj)();(0,i.bv)((()=>{h()}));const g=(0,u.qj)({tags:[],listFilter:a.query.filter??"heat",listTag:a.query.tag??""}),{listFilter:y,listTag:b}=(0,u.BK)(g);async function h(){const{body:e}=await(0,c.yX)();g.tags=e}async function W(e){g.listTag="",t.push({path:"/index",query:{filter:e.props.name}})}async function k(e){g.listFilter="",t.push({path:"/index",query:{tag:e.props.name}})}return(e,t)=>{const a=s.p8,c=s.Ub,m=n.Dv,h=l.dq;return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{span:24},{default:(0,i.w5)((()=>[(0,i._)("ul",null,[(0,i._)("li",p,[(0,i._)("div",f,[(0,i._)("div",_,[(0,i.Wm)(c,{modelValue:(0,u.SU)(y),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,u.dq)(y)?y.value=e:null),onTabClick:W},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{label:"热门",name:"heat"}),(0,i.Wm)(a,{label:"新贴",name:"lastpost"})])),_:1},8,["modelValue"])]),(0,i._)("div",v,[(0,i.Wm)(c,{modelValue:(0,u.SU)(b),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,u.dq)(b)?b.value=e:null),underline:!0,onTabClick:k},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,u.SU)(g).tags,(e=>((0,i.wg)(),(0,i.j4)(a,{key:e,name:e},{label:(0,i.w5)((()=>[(0,i._)("div",w,(0,d.zw)(e),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])])])])),_:1})])),_:1}),(0,i.Wm)(h,{gutter:20},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)((0,u.SU)(o["default"]))])),_:1})])),_:1})])}}});function b(e){e.__source="src/views/index/index.vue"}var h=a(83744);"function"===typeof b&&b(y);const W=(0,h.Z)(y,[["__scopeId","data-v-04711ed0"]]);var k=W}}]);