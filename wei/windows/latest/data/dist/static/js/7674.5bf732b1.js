/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-24 17:41:57
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7674],{23471:function(t,n,e){e.d(n,{$u:function(){return D},AX:function(){return _},BX:function(){return k},Bs:function(){return j},ET:function(){return y},Ep:function(){return i},IF:function(){return Q},KD:function(){return R},LN:function(){return C},Nq:function(){return x},Pb:function(){return B},QC:function(){return $},RS:function(){return g},SI:function(){return S},U$:function(){return b},Vf:function(){return m},Wz:function(){return d},Xc:function(){return Z},Zr:function(){return r},Zt:function(){return U},ak:function(){return F},an:function(){return s},c1:function(){return c},co:function(){return w},cu:function(){return I},dd:function(){return u},e$:function(){return z},m9:function(){return f},mL:function(){return p},oh:function(){return W},sw:function(){return v},t4:function(){return h},vQ:function(){return X},wW:function(){return N},zB:function(){return G},zw:function(){return l}});var o=e(92325),a=e(11555);function r(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device",method:"post",params:t,data:n})}function i(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=detail",method:"get",params:{client_id:t}})}function u(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=guanji",method:"post",data:t})}function d(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=advance_setting",method:"post",data:t})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=uninstall",method:"post",data:{client_id:t}})}function p(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=reboot",method:"post",data:t})}function l(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=delete_ddevice",method:"get",params:{client_id:t}})}function s(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_device&modac=shutdown",method:"post",data:{client_id:t}})}function w(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=device_image",method:"get",params:{client_id:t}})}function m(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=delete_image",method:"post",data:{client_id:t,image_id:n}})}function _(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container_form",method:"post",data:t})}function f(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=create_container",method:"post",data:t})}function h(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=pull_image",method:"post",data:t})}function v(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_image&modac=get_pull_progres",method:"post",data:{image_id:t}})}async function Z(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function g(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=device_container",method:"get",params:{client_id:t}})}function y(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_restart",method:"post",data:{client_id:t,container_id:n}})}function b(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=container_stop",method:"post",data:{client_id:t,container_id:n}})}function k(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=delete_container",method:"post",data:{client_id:t,container_id:n}})}function I(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_container&modac=get_create_progres",method:"post",data:{container_id:t}})}function S(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=device_model",method:"get",params:{client_id:t}})}function W(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_form",method:"post"})}function $(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=download_model",method:"post",data:t})}function j(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply_form",method:"get",params:{client_id:t}})}function C(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_apply",method:"post",params:t,data:n})}function D(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=model_delete",method:"get",params:{host_model_id:t}})}function z(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_model&modac=get_download_progres",method:"get",data:{model_id:t}})}async function B(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}function F(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=device_model",method:"get",params:{client_id:t}})}function N(){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_form",method:"post"})}function G(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=download_model",method:"post",data:t})}function Q(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply_form",method:"get",params:{client_id:t}})}function R(t,n){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_apply",method:"post",params:t,data:n})}function U(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=model_delete",method:"get",params:{host_model_id:t}})}function X(t){return(0,o.Z)({url:"/wwwapi.php?to=suanli_dataset&modac=get_download_progres",method:"get",data:{model_id:t}})}async function x(t){const{body:{hash:n}}=await(0,a.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:n}})}},7674:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var o=e(50591),a=(e(3241),e(89035),e(27750)),r=e(91557),i=(e(35635),e(57658),e(66252)),u=e(23471),d=e(22201);const c=t=>((0,i.dD)("data-v-3cb95db5"),t=t(),(0,i.Cn)(),t),p=c((()=>(0,i._)("p",null,"卸载重置",-1)));var l={__name:"device_action_reset",setup(t){const n=(0,d.yj)(),e=(0,d.tv)();async function c(){await(0,u.c1)(n.params.id);e.push("/gpumarket/mydevice")}return(t,n)=>{const e=(0,i.up)("vab-icon"),u=r.dQ,d=a.Z,l=o.i1;return(0,i.wg)(),(0,i.j4)(l,{title:"您确定要卸载重置吗?",onConfirm:c},{reference:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"icon-panel",shadow:"hover"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(e,{icon:"intall-pc","is-custom-svg":"",style:{color:"green"}})])),_:1}),p])),_:1})])),_:1})}}};function s(t){t.__source="src/views/gpumarket/mydevice/components/device_action_reset.vue"}var w=e(83744);"function"===typeof s&&s(l);const m=(0,w.Z)(l,[["__scopeId","data-v-3cb95db5"]]);var _=m},27750:function(t,n,e){e.d(n,{Z:function(){return w}});var o=e(30032),a=(e(3241),e(91154),e(97830)),r=(e(13768),e(66252)),i=e(2262),u=e(3577),d=e(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let n=null;const e=(0,i.iH)(!0);return n=setTimeout((()=>{e.value=!1}),500),(0,d.iS)(((t,e,o)=>{clearInterval(n),o()})),(n,d)=>{const c=a.vk,p=o.Kf;return(0,r.wg)(),(0,r.j4)(p,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[t.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,i.SU)(e),rows:t.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(n.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(n.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[n.$slots.header||t.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(n.$slots,"header",{},(()=>[(0,r.Uk)((0,u.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function p(t){t.__source="library/components/VabCard/index.vue"}var l=e(83744);"function"===typeof p&&p(c);const s=(0,l.Z)(c,[["__scopeId","data-v-391150ea"]]);var w=s}}]);