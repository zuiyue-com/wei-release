/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 10:08:45
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8012,9884],{28012:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(73632),l=(a(3241),a(74965),a(22040)),s=(a(99426),a(27750)),r=a(50591),o=(a(89035),a(57122)),d=(a(69540),a(57534)),u=(a(92471),a(7608)),i=a(49927),c=a(20129),m=(a(69840),a(15659)),V=(a(10444),a(24200)),p=(a(59739),a(6589),a(57018)),f=(a(74367),a(66252)),F=a(49963),w=a(3577);const v=e=>((0,f.dD)("data-v-5d999d3d"),e=e(),(0,f.Cn)(),e),k={class:"task-management-container"},y={class:"task-item-bottom"},S=v((()=>(0,f._)("p",null,"添加任务",-1)));function U(e,t,v,U,R,b){const Q=p.EZ,W=c.nH,h=V.iJ,N=m.ElButton,x=c.ly,D=i.Z,g=u.Z,H=(0,f.up)("vab-icon"),A=d.Ks,E=o.F8,G=r.i1,z=s.Z,q=l.Dv,T=n.dq;return(0,f.wg)(),(0,f.iD)("div",k,[(0,f.Wm)(g,{class:"page-header"},{default:(0,f.w5)((()=>[(0,f.Wm)(D,null,{default:(0,f.w5)((()=>[(0,f.Wm)(x,{inline:"","label-width":"60px",model:e.queryForm,onSubmit:t[2]||(t[2]=(0,F.iM)((()=>{}),["prevent"]))},{default:(0,f.w5)((()=>[(0,f.Wm)(W,{label:"任务名"},{default:(0,f.w5)((()=>[(0,f.Wm)(Q,{modelValue:e.queryForm.taskName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.queryForm.taskName=t),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),(0,f.Wm)(W,{label:"周期"},{default:(0,f.w5)((()=>[(0,f.Wm)(h,{modelValue:e.queryForm.date,"onUpdate:modelValue":t[1]||(t[1]=t=>e.queryForm.date=t),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])])),_:1}),(0,f.Wm)(W,null,{default:(0,f.w5)((()=>[(0,f.Wm)(N,{icon:e.Search,type:"primary",onClick:e.queryData},{default:(0,f.w5)((()=>[(0,f.Uk)(" 查询 ")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,f.Wm)(T,{gutter:15},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.list,(t=>((0,f.wg)(),(0,f.j4)(q,{key:t.id,lg:6,md:8,sm:12,xl:6,xs:24},{default:(0,f.w5)((()=>[(0,f.Wm)(z,{class:"task-item",shadow:"hover"},{header:(0,f.w5)((()=>[(0,f.Wm)(H,{icon:"task-line"}),(0,f.Uk)(" 任务编号 - "+(0,w.zw)(t.id)+" ",1),1==t.status?((0,f.wg)(),(0,f.j4)(A,{key:0,class:"card-header-tag",type:"success"},{default:(0,f.w5)((()=>[(0,f.Uk)(" 已开启 ")])),_:1})):((0,f.wg)(),(0,f.j4)(A,{key:1,class:"card-header-tag",type:"danger"},{default:(0,f.w5)((()=>[(0,f.Uk)("已停用")])),_:1}))])),default:(0,f.w5)((()=>[(0,f.Wm)(E,{class:"task-item-image",src:a(69578)},null,8,["src"]),(0,f._)("div",y,[(0,f._)("span",null,"Ip: "+(0,w.zw)(t.ip),1),(0,f.Wm)(G,{title:"您确定要执行吗?",onConfirm:a=>e.handlePlay(t.status)},{reference:(0,f.w5)((()=>[1==t.status?((0,f.wg)(),(0,f.j4)(N,{key:0,circle:"",type:"warning"},{default:(0,f.w5)((()=>[(0,f.Wm)(H,{icon:"pause-line"})])),_:1})):((0,f.wg)(),(0,f.j4)(N,{key:1,circle:"",type:"primary"},{default:(0,f.w5)((()=>[(0,f.Wm)(H,{icon:"play-line"})])),_:1}))])),_:2},1032,["onConfirm"])])])),_:2},1024)])),_:2},1024)))),128)),(0,f.Wm)(q,{lg:6,md:8,sm:12,xl:6,xs:24},{default:(0,f.w5)((()=>[(0,f.Wm)(z,{class:"task-add",shadow:"hover",onClick:e.handleAdd},{default:(0,f.w5)((()=>[(0,f.Wm)(H,{icon:"add-circle-line"}),S])),_:1},8,["onClick"])])),_:1})])),_:1})])}var R=a(92325);function b(e){return(0,R.Z)({url:"/taskManagement/getList",method:"get",params:e})}var Q=a(65781),W=a(2262),h=(0,f.aZ)({name:"TaskManagement",setup(){const e=(0,f.f3)("$baseMessage"),t=(0,W.qj)({list:[],listLoading:!0,queryForm:{taskName:"",date:"",pageNo:1,pageSize:5}}),a=async()=>{t.listLoading=!0;const{data:{list:e}}=await b(t.queryForm);t.list=e,t.listLoading=!1},n=()=>{t.queryForm.pageNo=1,a()},l=t=>{e(t?"模拟停用成功":"模拟开启成功","success","vab-hey-message-success")},s=()=>{e("模拟添加成功","success","vab-hey-message-success")};return(0,f.bv)((()=>{a()})),{...(0,W.BK)(t),fetchData:a,queryData:n,handlePlay:l,handleAdd:s,Search:Q.Search}}});function N(e){e.__source="src/views/setting/taskManagement/index.vue"}var x=a(83744);"function"===typeof N&&N(h);const D=(0,x.Z)(h,[["render",U],["__scopeId","data-v-5d999d3d"]]);var g=D},27750:function(e,t,a){a.d(t,{Z:function(){return V}});var n=a(30032),l=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),r=a(2262),o=a(3577),d=a(22201),u=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,r.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,d.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,d)=>{const u=l.vk,i=n.Kf;return(0,s.wg)(),(0,s.j4)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(u,{key:0,animated:"",loading:(0,r.SU)(a),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof i&&i(u);const m=(0,c.Z)(u,[["__scopeId","data-v-391150ea"]]);var V=m},49927:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(22040),l=(a(3241),a(99426),a(66252));const s={class:"top-panel"};function r(e,t){const a=n.Dv;return(0,l.wg)(),(0,l.j4)(a,{span:24},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.WI)(e.$slots,"default")])])),_:3})}function o(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var d=a(83744);const u={};"function"===typeof o&&o(u);const i=(0,d.Z)(u,[["render",r]]);var c=i},7608:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(73632),l=(a(3241),a(74965),a(66252));function s(e,t){const a=n.dq;return(0,l.wg)(),(0,l.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var o=a(83744);const d={};"function"===typeof r&&r(d);const u=(0,o.Z)(d,[["render",s],["__scopeId","data-v-172989c8"]]);var i=u},69578:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAB9CAMAAAAGJAYPAAADAFBMVEVHcExSVGNNT11DRFNDRFFDRFFDRFFSVGNAQk9obXxSVGNCQ1A3OEZTVWRQUmFCQ1BSVGNHSFZSVGNSVGNSVGNNT11QUmFCQ1BDRFEtLz1QUmJKTFpDRFFSVGNSVGNSVGNDRFFSVGNSVGNSVGNSVGNDRFFDRFFDRFFKTFpDRFFDRFEqLDpQUmEvMT9pbn01OEVDRFFDRFFLTFtgZHNDRFFSVGNDRFFSVGNSVGM+P01eYnJlankpKzkuMD5YWmktLz1DRFBpbn1ISVdYW2pSVGMvMT9DRFFTVWRobXxCQ1AtLz1UVmUuMD5QUmFpbn1RUmFFRlNLTFs5O0lERVIsLjxOtVb6wk1dYG9qb35pb35UV2ZlaXgqKzlNUWArLTtBQ1JSVGJGSFVSVGRRU2JAQlBVV2ZERlVISllRU2NDRVNKTFtMTl07PUtST2QyNEI+QE9TVWUwMkBOtFY9P05FR1U6PElSUWNBQ1FRU2H5wU1OUF9PUWBMUGRJTmQ6PEo1N0VOwFQxM0FSUGNWWGdTVGNFR1ZSUmNLTVxPUmNCRFI3OUc8Pkz/zEv/0EpLT2RJS1o/QU9OuFZSTmT7wk1OuVVNUWRHSVdOulVRZ2D8w00tLzxOwVROUWNITWQ0NkQvMT5Ou1VQjVtSXmLwvU5UVmZSW2JOsVZOvVVPplj+xUz/yUxJT2QsLjtPm1n/y0xOv1X/x0xfXGH/zksvMUBOUF3LpFRrZWDXrVJPnllRYWJSWGNQiVxQkVt9cF5aWWLQp1KhiVlZXGxSVWRRcV9WV2L/xkxma3pOwlRTW2R0al+njFiJeFxHSVhkaHdPmFpSY2FgZHNRamBPqVi4mFVPrldPo1loYmB5bl5kX2HjtFBxaF8sLj1RdV9RbmBMUGNQf17OpVJQhV2vkVdSV2ReYnH3w07zwU5wZ1+SfltXWGKylFfyvk7+yEz/1EpKTFxQl1pDQ1DUqlJqcH9Pslf2wU6sj1i7nFXBnlW9m1XEn1RPUV+bhFqDdVxQeV9bWmFpbXwjvEJIAAAARHRSTlMAiBou69uP6+vr3d8866Oi7QKKP+cP7cDWJesIi2G5zrl09sBwcXT5fJXz/oj1iBQgSuzr5dRgvZapmoj09Yj06+vr68cYZfwAAAl5SURB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"}}]);