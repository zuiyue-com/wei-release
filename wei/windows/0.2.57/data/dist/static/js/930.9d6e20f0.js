/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 10:34:17
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[930],{26010:function(t,e,a){a.d(e,{Gc:function(){return n},Vj:function(){return o},wV:function(){return r},xV:function(){return u}});a(57658);function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let o=0;o<t;o++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function n(t,e,a){const o=Math.ceil(a/e);return t>=o}function r(t=0){document.getElementById("image-form-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function i(t=0){document.getElementById("task-queue-scroll").scrollTo({top:t,left:0,behavior:"smooth"})}function u(t=0){r(t),i(t)}},15904:function(t,e,a){a.d(e,{l:function(){return u},x:function(){return i}});var o=a(20235),n=a(96486),r=a.n(n);function i(t){const e=r().pick(t,["tid","fid","pid","authorid","avatar","author","subject","message","dateline"]);return e.author_route=(0,o.gx)(e.authorid),e}function u(t,e){return t.map((t=>{const a=r().pick(t,["tid","fid","pid","favid","authorid","authoravatar","avatar","author","subject","coverpath","attachmentPic","replies"]);a.link={path:`/topic/${t.tid}`,query:{}},a.image_id=t.attachmentPic.length>0?t.attachmentPic[0].aid:0,a.images=t.attachmentPic.map((t=>t.img)),a.author_route=(0,o.gx)(t.authorid);const n=parseInt(t.authorid)!==e;return a.like={can:n&&0==t.threadHasRecommend,number:parseInt(t.recommend_add),liked:!!t.threadHasRecommend},a}))}},79726:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var o=a(4350),n=(a(3241),a(91103),a(31452)),r=(a(68445),a(66252)),i=a(3577),u=a(2262);const s={class:"wrap aligin-center"},c={key:0,class:"loading"},l={key:2};var d={__name:"index",props:{status:{type:String,default:"loadmore"}},emits:["loadmore"],setup(t,{emit:e}){const a=t,d=(0,r.Fl)((()=>{let t="";switch(a.status){case"loadmore":t="更多";break;case"loading":t="加载中";break;case"nomore":t="没有数据了";break}return t}));function p(){e("loadmore")}return(e,a)=>{const m=n.E2,f=o.t;return(0,r.wg)(),(0,r.iD)("div",s,["loading"==t.status?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",c,null,512)),[[f,!0]]):(0,r.kq)("",!0),"loadmore"==t.status?((0,r.wg)(),(0,r.j4)(m,{key:1,type:"primary",onClick:p},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)((0,u.SU)(d)),1)])),_:1})):((0,r.wg)(),(0,r.iD)("span",l,(0,i.zw)((0,u.SU)(d)),1))])}}};function p(t){t.__source="src/components/LoadMore/index.vue"}var m=a(83744);"function"===typeof p&&p(d);const f=(0,m.Z)(d,[["__scopeId","data-v-300dc6ea"]]);var g=f},30930:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var o=a(65450),n=(a(3241),a(69998),a(66252)),r=a(2262),i=(a(96486),a(53580)),u=a(83793),s=a(79726),c=a(15790),l=a(15904),d=a(26010);function p(){const t=(0,r.iH)("loadmore"),e=(0,n.Fl)((()=>"loading"===t.value||"nomore"===t.value)),a=(0,n.Fl)((()=>"nomore"===t.value));function o(){t.value="loading"}function i(){t.value="loadmore"}function u(e,a,o){const n=(0,d.Gc)(e,a,o);t.value=n?"nomore":"loadmore"}return{loadMoreStatus:t,disabledLoadMore:e,noMoreData:a,setLoadingStatus:o,resetLoadMoreStatus:i,setLoadMoreStatus:u}}var m=a(22201);const f=["infinite-scroll-disabled"];var g={__name:"posts",setup(t){const e=(0,c.L)(),a=(0,m.yj)(),{loadMoreStatus:d,disabledLoadMore:g,noMoreData:v,setLoadingStatus:h,resetLoadMoreStatus:y,setLoadMoreStatus:w}=p(),k=(0,r.qj)({topics:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{topics:_,queryForm:S,pagination:b}=(0,r.BK)(k);function M(t){if(t.tag){const e={name:t.tag,page:S.value.page};return(0,i.Wx)(e)}{const e=(0,i.iw)(t.filter);return e.page=S.value.page,(0,i.BB)(e)}}function q(){if(v.value)return!1;S.value.page++,L(a.query)}async function L(t){try{h();const{body:{list:a,page_perpage:o,page_allcount:n}}=await M(t),r=(0,l.l)(a,e.getUserId).filter((t=>t.coverpath));1==S.value.page?k.topics=r:k.topics=[...k.topics,...r];const i=parseInt(o),u=parseInt(n);k.pagination.pageSize=i,k.pagination.total=u,w(k.queryForm.page,i,u)}catch(a){y()}}return(0,n.wF)((()=>{L(a.query)})),(0,m.ao)((t=>{S.value.page=1,L(t.query)})),(t,e)=>{const a=(0,n.up)("masonry-wall"),i=o.n;return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{"infinite-scroll-disabled":(0,r.SU)(g),class:"home-topics"},[(0,n.Wm)(a,{items:(0,r.SU)(_),col:"7",gap:16,"column-width":230,"key-mapper":t=>t.tid},{default:(0,n.w5)((({item:t,index:e})=>[(0,n.Wm)((0,r.SU)(u["default"]),{item:t,"show-user-bar":!1},null,8,["item"])])),_:1},8,["items","key-mapper"]),(0,n.Wm)((0,r.SU)(s["default"]),{status:(0,r.SU)(d)},null,8,["status"])],8,f)),[[i,q]])}}};function v(t){t.__source="src/views/index/components/posts.vue"}var h=a(83744);"function"===typeof v&&v(g);const y=(0,h.Z)(g,[["__scopeId","data-v-a949d202"]]);var w=y}}]);