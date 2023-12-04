/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-04 15:22:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1945],{26192:function(e,a,t){t.d(a,{R0:function(){return r},ig:function(){return l},nm:function(){return u}});var n=t(92325),o=t(11555);function r(e){return(0,n.Z)({url:"/wwwapi.php?to=about",method:"get",params:{aid:e}})}function u(){return(0,n.Z)({url:"/wwwapi.php?to=faq",method:"get"})}async function l(e){const{body:{hash:a}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=faq&action=search",method:"post",data:{formhash:a,searchtype:"all",searchsubmit:"yes",keyword:e}})}},11945:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var n=t(73632),o=(t(3241),t(74965),t(22040)),r=(t(99426),t(76128)),u=(t(74828),t(27977)),l=(t(40355),t(96872),t(83396)),i=(t(48157),t(74741),t(7608)),c=t(20930),d=t(20129),s=(t(69840),t(15659)),f=(t(10444),t(57018)),m=(t(74367),t(6589),t(85381)),p=(t(68538),t(66252)),w=t(49963);const y={class:"faq-container"},v=["innerHTML"],q={key:1};function b(e,a,t,b,h,g){const _=m.OX,k=d.nH,F=f.EZ,W=s.ElButton,V=d.ly,Z=c.Z,C=i.Z,j=l.aE,N=l.PH,x=u.p8,A=u.Ub,D=r.GT,H=o.Dv,E=n.dq;return(0,p.wg)(),(0,p.iD)("div",y,[(0,p.Wm)(C,null,{default:(0,p.w5)((()=>[(0,p.Wm)(Z,{span:24},{default:(0,p.w5)((()=>[(0,p.Wm)(V,{ref:"form",inline:"",model:e.queryForm,onSubmit:a[2]||(a[2]=(0,w.iM)((()=>{}),["prevent"]))},{default:(0,p.w5)((()=>[(0,p.Wm)(k,null,{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:e.accordion,"onUpdate:modelValue":a[0]||(a[0]=a=>e.accordion=a),"inline-prompt":"",onChange:e.handleAccordion},null,8,["modelValue","onChange"])])),_:1}),(0,p.Wm)(k,null,{default:(0,p.w5)((()=>[(0,p.Wm)(F,{modelValue:e.queryForm.keyword,"onUpdate:modelValue":a[1]||(a[1]=a=>e.queryForm.keyword=a),placeholder:"请输入问题关键词"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(k,null,{default:(0,p.w5)((()=>[(0,p.Wm)(W,{icon:e.Search,"native-type":"submit",type:"primary",onClick:e.loadFaqsByKeyword},{default:(0,p.w5)((()=>[(0,p.Uk)(" 查询 ")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,p.Wm)(E,{gutter:20},{default:(0,p.w5)((()=>[(0,p.Wm)(H,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,p.w5)((()=>[e.faqCategories.length>0?((0,p.wg)(),(0,p.j4)(A,{key:0,"tab-position":"right",style:{height:"100%"},class:"demo-tabs"},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(e.faqCategories,(t=>((0,p.wg)(),(0,p.j4)(x,{key:t.id,label:t.title},{default:(0,p.w5)((()=>[(0,p.Wm)(N,{modelValue:e.activeName,"onUpdate:modelValue":a[3]||(a[3]=a=>e.activeName=a),accordion:!1},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(e.faqCategoryArticles[t.id],(e=>((0,p.wg)(),(0,p.j4)(j,{key:e.id,name:e.id,title:e.title},{default:(0,p.w5)((()=>[(0,p._)("div",{innerHTML:e.message},null,8,v)])),_:2},1032,["name","title"])))),128))])),_:2},1032,["modelValue"])])),_:2},1032,["label"])))),128))])),_:1})):((0,p.wg)(),(0,p.iD)("div",q,[(0,p.Wm)(D,{class:"vab-data-empty",description:"暂无数据"})]))])),_:1})])),_:1})])}var h=t(65781),g=t(26192),_=t(2262),k=(0,p.aZ)({name:"FAQ",setup(){const e=(0,_.qj)({queryForm:{keyword:""},size:"default",accordion:!0,activeName:[],faqparent:[],faqsub:[],faqlist:[]}),a=(0,p.Fl)((()=>e.faqsub.flat())),t=(0,p.Fl)((()=>a.value.map((e=>e.id))));async function n(){if(!e.queryForm.keyword)return r(),!1;const{body:{faqparent:a,faqsub:n,faqlist:o}}=await(0,g.ig)(e.queryForm.keyword),u={},l=new Set;o.forEach((e=>{const a=u[e.fpid]??[];u[e.fpid]=[...a,e],l.add(e.fpid)})),e.faqparent=a.filter((e=>l.has(e.id))),e.faqsub=Object.values(u),e.activeName=t.value}e.faqCategories=(0,p.Fl)((()=>e.faqparent)),e.faqCategoryArticles=(0,p.Fl)((()=>{const a={};return e.faqsub.forEach((e=>{a[e[0].fpid]=e})),a})),(0,p.bv)((()=>{r()}));const o=a=>{e.activeName=a?t.value:[]};async function r(){const{body:{faqparent:a,faqsub:n}}=await(0,g.nm)();e.faqparent=a,e.faqsub=n,e.activeName=t.value}return{...(0,_.BK)(e),faqArticleIds:t,Search:h.Search,handleAccordion:o,loadFaqsByKeyword:n}}});function F(e){e.__source="src/views/about/faq.vue"}var W=t(83744);"function"===typeof F&&F(k);const V=(0,W.Z)(k,[["render",b],["__scopeId","data-v-36bb9ce0"]]);var Z=V},20930:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(22040),o=(t(3241),t(99426),t(66252));const r={class:"right-panel"};var u=(0,o.aZ)({__name:"VabQueryFormRightPanel",props:{span:{type:Number,default:10}},setup(e){return(a,t)=>{const u=n.Dv;return(0,o.wg)(),(0,o.j4)(u,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.WI)(a.$slots,"default")])])),_:3},8,["lg","xl"])}}});function l(e){e.__source="library/components/VabQueryForm/components/VabQueryFormRightPanel.vue"}"function"===typeof l&&l(u);const i=u;var c=i},7608:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(73632),o=(t(3241),t(74965),t(66252));function r(e,a){const t=n.dq;return(0,o.wg)(),(0,o.j4)(t,{class:"vab-query-form",gutter:0},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function u(e){e.__source="library/components/VabQueryForm/index.vue"}var l=t(83744);const i={};"function"===typeof u&&u(i);const c=(0,l.Z)(i,[["render",r],["__scopeId","data-v-172989c8"]]);var d=c}}]);