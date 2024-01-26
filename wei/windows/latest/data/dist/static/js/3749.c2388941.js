/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-26 16:22:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3749,9726,6879],{15904:function(t,a,e){e.d(a,{l:function(){return u},x:function(){return i}});var o=e(20235),n=e(96486),r=e.n(n);function i(t){const a=r().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return a.author_route=(0,o.gx)(a.authorid),a}function u(t,a){return t.map((t=>{const e=r().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);e.link={path:`/topic/${t.tid}`,query:{}},e.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,e.images=t.attachmentPic.map((t=>t.img)),e.author_route=(0,o.gx)(t.authorid);const n=parseInt(t.authorid)!==a;return e.like={can:n&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},e}))}},79726:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var o=e(4350),n=(e(3241),e(91103),e(31452)),r=(e(68445),e(66252)),i=e(3577),u=e(2262);const s={class:"wrap aligin-center"},c={key:0,class:"loading"},d={key:2};var l={__name:"index",props:{status:{type:String,default:"loadmore"}},emits:["loadmore"],setup(t,{emit:a}){const e=t,l=(0,r.Fl)((()=>{let t="";switch(e.status){case"loadmore":t="更多";break;case"loading":t="加载中";break;case"nomore":t="没有数据了";break}return t}));function p(){a("loadmore")}return(a,e)=>{const m=n.E2,g=o.t;return(0,r.wg)(),(0,r.iD)("div",s,["loading"==t.status?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",c,null,512)),[[g,!0]]):(0,r.kq)("",!0),"loadmore"==t.status?((0,r.wg)(),(0,r.j4)(m,{key:1,type:"primary",onClick:p},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)((0,u.SU)(l)),1)])),_:1})):((0,r.wg)(),(0,r.iD)("span",d,(0,i.zw)((0,u.SU)(l)),1))])}}};function p(t){t.__source="src/components/LoadMore/index.vue"}var m=e(83744);"function"===typeof p&&p(l);const g=(0,m.Z)(l,[["__scopeId","data-v-300dc6ea"]]);var f=g},30930:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var o=e(65450),n=(e(3241),e(69998),e(66252)),r=e(2262),i=(e(96486),e(53580)),u=e(83793),s=e(79726),c=e(15790),d=e(15904),l=e(26010);function p(){const t=(0,r.iH)("loadmore"),a=(0,n.Fl)((()=>"loading"===t.value||"nomore"===t.value)),e=(0,n.Fl)((()=>"nomore"===t.value));function o(){t.value="loading"}function i(){t.value="loadmore"}function u(a,e,o){const n=(0,l.Gc)(a,e,o);t.value=n?"nomore":"loadmore"}return{loadMoreStatus:t,disabledLoadMore:a,noMoreData:e,setLoadingStatus:o,resetLoadMoreStatus:i,setLoadMoreStatus:u}}var m=e(22201);const g=["infinite-scroll-disabled"];var f={__name:"posts",setup(t){const a=(0,c.L)(),e=(0,m.yj)(),{loadMoreStatus:l,disabledLoadMore:f,noMoreData:v,setLoadingStatus:h,resetLoadMoreStatus:y,setLoadMoreStatus:w}=p(),_=(0,r.qj)({topics:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{topics:k,queryForm:S,pagination:b}=(0,r.BK)(_);function M(t){if(t.tag){const a={name:t.tag,page:S.value.page};return(0,i.Wx)(a)}{const a=(0,i.iw)(t.filter);return a.page=S.value.page,(0,i.BB)(a)}}function L(){if(v.value)return!1;S.value.page++,q(e.query)}async function q(t){try{h();const{body:{list:e,page_perpage:o,page_allcount:n}}=await M(t),r=(0,d.l)(e,a.getUserId).filter((t=>t.coverpath));1==S.value.page?_.topics=r:_.topics=[..._.topics,...r];const i=parseInt(o),u=parseInt(n);_.pagination.pageSize=i,_.pagination.total=u,w(_.queryForm.page,i,u)}catch(e){y()}}return(0,n.wF)((()=>{q(e.query)})),(0,m.ao)((t=>{S.value.page=1,q(t.query)})),(t,a)=>{const e=(0,n.up)("masonry-wall"),i=o.n;return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{"infinite-scroll-disabled":(0,r.SU)(f),class:"home-topics"},[(0,n.Wm)(e,{items:(0,r.SU)(k),col:"7",gap:16,"column-width":230,"key-mapper":t=>t.tid},{default:(0,n.w5)((({item:t,index:a})=>[(0,n.Wm)((0,r.SU)(u["default"]),{item:t,"show-user-bar":!1},null,8,["item"])])),_:1},8,["items","key-mapper"]),(0,n.Wm)((0,r.SU)(s["default"]),{status:(0,r.SU)(l)},null,8,["status"])],8,g)),[[i,L]])}}};function v(t){t.__source="src/views/index/components/posts.vue"}var h=e(83744);"function"===typeof v&&v(f);const y=(0,h.Z)(f,[["__scopeId","data-v-a949d202"]]);var w=y}}]);