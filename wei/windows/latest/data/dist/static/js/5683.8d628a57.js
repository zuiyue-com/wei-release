/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-22 15:00:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5683],{55683:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(27750),s=n(91557),o=(n(3241),n(35635),n(32018)),i=(n(46160),n(66252)),l=n(2262),c=n(7674),r=n(19120),d=n(30301);const u=e=>((0,i.dD)("data-v-6999e5ef"),e=e(),(0,i.Cn)(),e),f={key:0},v=u((()=>(0,i._)("p",null,"初始化设备",-1)));var p={__name:"device_action_init",setup(e){(0,i.f3)("$pub");const t=(0,l.qj)({isInstalled:!1,isRunInit:!1,isUnInstall:!1,isStarted:!1,status:{},downloadPercent:0,downloadSpeed:"0 B",timer:0});async function n(){const{is_installed:e}=await(0,d.Ts)();t.isInstalled=e}(0,i.bv)((()=>{n()})),(0,i.Ah)((()=>{t.timer&&clearInterval(t.timer)})),(0,i.JJ)("deviceData",t);const u=(0,l.iH)(null);function p(){u.value.showDialog()}return(e,n)=>{const d=o.Xh,_=(0,i.up)("vab-icon"),w=s.dQ,y=a.Z;return(0,l.SU)(t).isInstalled?((0,i.wg)(),(0,i.j4)((0,l.SU)(c["default"]),{key:1})):((0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(y,{shadow:"hover",class:"icon-panel",onClick:n[0]||(n[0]=e=>p())},{default:(0,i.w5)((()=>[!(0,l.SU)(t).status.file_check&&(0,l.SU)(t).isRunInit?((0,i.wg)(),(0,i.j4)(d,{key:0,"text-inside":!0,"stroke-width":26,percentage:(0,l.SU)(t).downloadPercent,style:{height:"50px"}},null,8,["percentage"])):((0,i.wg)(),(0,i.j4)(w,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"intall-pc","is-custom-svg":"",style:{color:"green"}})])),_:1})),v])),_:1}),(0,i.Wm)(r["default"],{ref_key:"initDialogRef",ref:u},null,512)]))}}};function _(e){e.__source="src/views/gpumarket/mydevice/components/device_action_init.vue"}var w=n(83744);"function"===typeof _&&_(p);const y=(0,w.Z)(p,[["__scopeId","data-v-6999e5ef"]]);var m=y},7674:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(50591),s=(n(3241),n(89035),n(27750)),o=n(91557),i=(n(35635),n(57658),n(66252)),l=n(23471),c=n(22201);const r=e=>((0,i.dD)("data-v-3cb95db5"),e=e(),(0,i.Cn)(),e),d=r((()=>(0,i._)("p",null,"卸载重置",-1)));var u={__name:"device_action_reset",setup(e){const t=(0,c.yj)(),n=(0,c.tv)();async function r(){await(0,l.c1)(t.params.id);n.push("/gpumarket/mydevice")}return(e,t)=>{const n=(0,i.up)("vab-icon"),l=o.dQ,c=s.Z,u=a.i1;return(0,i.wg)(),(0,i.j4)(u,{title:"您确定要卸载重置吗?",onConfirm:r},{reference:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"icon-panel",shadow:"hover"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(n,{icon:"intall-pc","is-custom-svg":"",style:{color:"green"}})])),_:1}),d])),_:1})])),_:1})}}};function f(e){e.__source="src/views/gpumarket/mydevice/components/device_action_reset.vue"}var v=n(83744);"function"===typeof f&&f(u);const p=(0,v.Z)(u,[["__scopeId","data-v-3cb95db5"]]);var _=p},27750:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(30032),s=(n(3241),n(91154),n(97830)),o=(n(13768),n(66252)),i=n(2262),l=n(3577),c=n(22201),r=(0,o.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const n=(0,i.iH)(!0);return t=setTimeout((()=>{n.value=!1}),500),(0,c.iS)(((e,n,a)=>{clearInterval(t),a()})),(t,c)=>{const r=s.vk,d=a.Kf;return(0,o.wg)(),(0,o.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,o.Nv)({default:(0,o.w5)((()=>[e.skeleton?((0,o.wg)(),(0,o.j4)(r,{key:0,animated:"",loading:(0,i.SU)(n),rows:e.skeletonRows},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,o.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"header",{},(()=>[(0,o.Uk)((0,l.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var u=n(83744);"function"===typeof d&&d(r);const f=(0,u.Z)(r,[["__scopeId","data-v-391150ea"]]);var v=f}}]);