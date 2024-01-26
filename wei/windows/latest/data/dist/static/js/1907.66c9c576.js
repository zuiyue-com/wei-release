/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 15:38:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1907,9726,6879,3749],{47045:function(e,t,a){var n=a(56339),o=a(3070);e.exports=function(e,t,a){return a.get&&n(a.get,t,{getter:!0}),a.set&&n(a.set,t,{setter:!0}),o.f(e,t,a)}},48053:function(e){var t=TypeError;e.exports=function(e,a){if(e<a)throw t("Not enough arguments");return e}},46229:function(e,t,a){var n=a(98052),o=a(1702),r=a(41340),i=a(48053),s=URLSearchParams,u=s.prototype,l=o(u.append),c=o(u["delete"]),d=o(u.forEach),p=o([].push),m=new s("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&n(u,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=[];d(this,(function(e,t){p(n,{key:t,value:e})})),i(t,1);var o,s=r(e),u=r(a),m=0,f=0,v=!1,g=n.length;while(m<g)o=n[m++],v||o.key===s?(v=!0,c(this,o.key)):f++;while(f<g)o=n[f++],o.key===s&&o.value===u||l(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},17330:function(e,t,a){var n=a(98052),o=a(1702),r=a(41340),i=a(48053),s=URLSearchParams,u=s.prototype,l=o(u.getAll),c=o(u.has),d=new s("a=1");!d.has("a",2)&&d.has("a",void 0)||n(u,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=l(this,e);i(t,1);var o=r(a),s=0;while(s<n.length)if(n[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},62062:function(e,t,a){var n=a(19781),o=a(1702),r=a(47045),i=URLSearchParams.prototype,s=o(i.forEach);n&&!("size"in i)&&r(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},15904:function(e,t,a){a.d(t,{l:function(){return s},x:function(){return i}});var n=a(20235),o=a(96486),r=a.n(o);function i(e){const t=r().pick(e,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return t.author_route=(0,n.gx)(t.authorid),t}function s(e,t){return e.map((e=>{const a=r().pick(e,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);a.link={path:`/topic/${e.tid}`,query:{}},a.image_id=e.attachmentPic.length>0?e.attachmentPic[0].aid:0,a.images=e.attachmentPic.map((e=>e.img)),a.author_route=(0,n.gx)(e.authorid);const o=parseInt(e.authorid)!==t;return a.like={can:o&&0==e.threadHasRecommend,number:parseInt(e.recommend_add),liked:!!e.threadHasRecommend},a}))}},79726:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(4350),o=(a(3241),a(91103),a(31452)),r=(a(68445),a(66252)),i=a(3577),s=a(2262);const u={class:"wrap aligin-center"},l={key:0,class:"loading"},c={key:2};var d={__name:"index",props:{status:{type:String,default:"loadmore"}},emits:["loadmore"],setup(e,{emit:t}){const a=e,d=(0,r.Fl)((()=>{let e="";switch(a.status){case"loadmore":e="更多";break;case"loading":e="加载中";break;case"nomore":e="没有数据了";break}return e}));function p(){t("loadmore")}return(t,a)=>{const m=o.E2,f=n.t;return(0,r.wg)(),(0,r.iD)("div",u,["loading"==e.status?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",l,null,512)),[[f,!0]]):(0,r.kq)("",!0),"loadmore"==e.status?((0,r.wg)(),(0,r.j4)(m,{key:1,type:"primary",onClick:p},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)((0,s.SU)(d)),1)])),_:1})):((0,r.wg)(),(0,r.iD)("span",c,(0,i.zw)((0,s.SU)(d)),1))])}}};function p(e){e.__source="src/components/LoadMore/index.vue"}var m=a(83744);"function"===typeof p&&p(d);const f=(0,m.Z)(d,[["__scopeId","data-v-300dc6ea"]]);var v=f},30930:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(65450),o=(a(3241),a(69998),a(66252)),r=a(2262),i=(a(96486),a(53580)),s=a(83793),u=a(79726),l=a(15790),c=a(15904),d=a(26010);function p(){const e=(0,r.iH)("loadmore"),t=(0,o.Fl)((()=>"loading"===e.value||"nomore"===e.value)),a=(0,o.Fl)((()=>"nomore"===e.value));function n(){e.value="loading"}function i(){e.value="loadmore"}function s(t,a,n){const o=(0,d.Gc)(t,a,n);e.value=o?"nomore":"loadmore"}return{loadMoreStatus:e,disabledLoadMore:t,noMoreData:a,setLoadingStatus:n,resetLoadMoreStatus:i,setLoadMoreStatus:s}}var m=a(22201);const f=["infinite-scroll-disabled"];var v={__name:"posts",setup(e){const t=(0,l.L)(),a=(0,m.yj)(),{loadMoreStatus:d,disabledLoadMore:v,noMoreData:g,setLoadingStatus:h,resetLoadMoreStatus:y,setLoadMoreStatus:w}=p(),_=(0,r.qj)({topics:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{topics:b,queryForm:k,pagination:S}=(0,r.BK)(_);function U(e){if(e.tag){const t={name:e.tag,page:k.value.page};return(0,i.Wx)(t)}{const t=(0,i.iw)(e.filter);return t.page=k.value.page,(0,i.BB)(t)}}function q(){if(g.value)return!1;k.value.page++,x(a.query)}async function x(e){try{h();const{body:{list:a,page_perpage:n,page_allcount:o}}=await U(e),r=(0,c.l)(a,t.getUserId).filter((e=>e.coverpath));1==k.value.page?_.topics=r:_.topics=[..._.topics,...r];const i=parseInt(n),s=parseInt(o);_.pagination.pageSize=i,_.pagination.total=s,w(_.queryForm.page,i,s)}catch(a){y()}}return(0,o.wF)((()=>{x(a.query)})),(0,m.ao)((e=>{k.value.page=1,x(e.query)})),(e,t)=>{const a=(0,o.up)("masonry-wall"),i=n.n;return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{"infinite-scroll-disabled":(0,r.SU)(v),class:"home-topics"},[(0,o.Wm)(a,{items:(0,r.SU)(b),col:"7",gap:16,"column-width":230,"key-mapper":e=>e.tid},{default:(0,o.w5)((({item:e,index:t})=>[(0,o.Wm)((0,r.SU)(s["default"]),{item:e,"show-user-bar":!1},null,8,["item"])])),_:1},8,["items","key-mapper"]),(0,o.Wm)((0,r.SU)(u["default"]),{status:(0,r.SU)(d)},null,8,["status"])],8,f)),[[i,q]])}}};function g(e){e.__source="src/views/index/components/posts.vue"}var h=a(83744);"function"===typeof g&&g(v);const y=(0,h.Z)(v,[["__scopeId","data-v-a949d202"]]);var w=y},67041:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(73632),o=(a(3241),a(74965),a(22040)),r=(a(99426),a(27977)),i=(a(40355),a(96872),a(57658),a(46229),a(17330),a(62062),a(66252)),s=a(2262),u=a(3577),l=a(30930),c=a(53580),d=a(22201);const p={class:"posts-container"},m={class:"list-item"},f={class:"list-item-meta"},v={class:"list-item-meta-content-left"},g={class:"list-item-meta-content"},h={class:"link"},y=(0,i.aZ)({name:"Index"});var w=Object.assign(y,{setup(e){const t=(0,d.tv)(),a=(0,d.yj)();(0,i.bv)((()=>{b(),U()}));const y=(0,s.qj)({tags:[],listFilter:a.query.filter??"heat",listTag:a.query.tag??""}),{listFilter:w,listTag:_}=(0,s.BK)(y);async function b(){const{body:e}=await(0,c.yX)();y.tags=e}async function k(e){y.listTag="",t.push({path:"/index",query:{filter:e.props.name}})}async function S(e){y.listFilter="",t.push({path:"/index",query:{tag:e.props.name}})}function U(){const e=new URLSearchParams(location.search);let t="http://127.0.0.1:1115/";e.get("server_address")&&(t=`http://${e.get("server_address")}`),sessionStorage.setItem("serverAddress",t)}return(e,t)=>{const a=r.p8,c=r.Ub,d=o.Dv,b=n.dq;return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{span:24},{default:(0,i.w5)((()=>[(0,i._)("ul",null,[(0,i._)("li",m,[(0,i._)("div",f,[(0,i._)("div",v,[(0,i.Wm)(c,{modelValue:(0,s.SU)(w),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(w)?w.value=e:null),onTabClick:k},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{label:"热门",name:"heat"}),(0,i.Wm)(a,{label:"新贴",name:"lastpost"})])),_:1},8,["modelValue"])]),(0,i._)("div",g,[(0,i.Wm)(c,{modelValue:(0,s.SU)(_),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,s.dq)(_)?_.value=e:null),underline:!0,onTabClick:S},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,s.SU)(y).tags,(e=>((0,i.wg)(),(0,i.j4)(a,{key:e,name:e},{label:(0,i.w5)((()=>[(0,i._)("div",h,(0,u.zw)(e),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])])])])),_:1})])),_:1}),(0,i.Wm)(b,{gutter:20},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(l["default"]))])),_:1})])),_:1})])}}});function _(e){e.__source="src/views/index/index.vue"}var b=a(83744);"function"===typeof _&&_(w);const k=(0,b.Z)(w,[["__scopeId","data-v-7b35e936"]]);var S=k}}]);