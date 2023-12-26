/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-26 18:49:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5625],{95625:function(e,t,l){l.r(t),l.d(t,{default:function(){return D}});var a=l(4350),n=(l(3241),l(91103),l(54717)),o=(l(50552),l(73632)),i=(l(74965),l(27750)),s=l(27977),c=(l(40355),l(96872),l(83396)),u=(l(48157),l(74741),l(57534)),d=(l(92471),l(22040)),r=(l(99426),l(20129)),m=(l(69840),l(87692)),f=(l(45393),l(22411),l(15659)),p=(l(10444),l(85381)),g=(l(68538),l(6589),l(57018)),h=(l(74367),l(14181)),w=(l(33828),l(31452)),b=(l(68445),l(10661)),y=(l(35095),l(57658),l(66252)),x=l(2262),_=l(3577),k=l(65781),W=l(93457),v=l(36536);const U={class:"tagselector-container"},V=["id"],S={key:0},C={key:1},$="‪,‪";var Z=(0,y.aZ)({__name:"tagselector",setup(e){const t=(0,v.m)();(0,y.bv)((()=>{F()}));const l=(0,x.qj)({tags:[],content:"",isZh:!0,weight:"()",copyTipVisible:!1,dialogVisible:!1,textAreaRef:null,tagActiveName:1,loading:!0}),{tags:Z,textAreaRef:A}=(0,x.BK)(l);let E=[],N=[];const D=(0,y.Fl)((()=>Z.value.map((e=>e.tags.flat())).flat())),R=(0,y.Fl)((()=>Z.value.map((e=>(e.groups=[],e.tags.map((t=>{const l=e.groups.find((e=>e.name===t.spellLabel));t.checked=!1,l?l.tags.push(t):e.groups.push({name:t.spellLabel,tags:[t]})})),e.collapses=e.groups.map((e=>e.name)),e)))));async function F(){const{body:e}=await(0,W.Wl)();E=e.map((e=>e.tags.flat())).flat()}async function T(){try{l.loading=!0,l.dialogVisible=!0;const{body:e}=await(0,W.Pc)();Z.value=e}catch(e){console.log(e)}finally{l.loading=!1}}function j(){let e=l.content.trim();e=e.replace(/([^\u202a])(,)([^\u202a])?/g,`$1${$}$3`),l.content=e;const t=e.split($).filter((e=>e)),a=[],n=[];t.forEach((e=>{const t=e.trim().match(/^([{(]*)(.+?)([)}]*)$/),o=t&&t[1]&&t[3],i=o?t[2]:e;n.push(i);const s=D.value.find((e=>{const t=l.isZh?e.name:e.englishName;return t===i}));s?(s.checked=!0,s.before=o?t[1]:"",s.after=o?t[3]:"",a.push(s)):a.push({id:e,englishName:e,name:e,spellLabel:"",before:o?t[1]:"",after:o?t[3]:""})})),N.forEach((e=>{const t=l.isZh?e.name:e.englishName;n.includes(t)||(e.checked=!1)})),N=a}function K(){l.content=H(l.isZh)}function H(e){return N.map((t=>e?t.before+t.name+t.after:t.before+t.englishName+t.after)).join($)}function P(e){const t=N.findIndex((t=>t.id===e.id));t>=0?(N.splice(t,1),e.checked=!1):(e.before="",e.after="",N.push(e),e.checked=!0),K()}function Y(e){return e.replace(/[\u200b-\u200f\uFEFF\u202a-\u202e]/g,"")}async function z(){if(!l.content)return!1;const e=Y(l.content);await navigator.clipboard.writeText(e),l.copyTipVisible=!0,setTimeout((()=>{l.copyTipVisible=!1}),3e3)}function B(){const e=Y(H(!1));t.addBaseFormPromptWords(e),I()}function I(){l.content="",l.isZh=!0,l.weight="()",l.dialogVisible=!1,l.tagActiveName=1,N.forEach((e=>{e.checked=!1})),N=[]}function L(){const e=l.textAreaRef.textarea,t=e.selectionStart,a=e.selectionEnd,n=`${l.content.substring(0,t)}`,o=`${l.weight[0]}${l.content.substring(t,a)}${l.weight[1]}`,i=`${l.content.substring(a,l.content.length)}`;l.content=`${n}${o}${i}`,(0,y.Y3)((()=>{e.focus(),e.setSelectionRange(t,a+2)})),j()}function M(){const e=l.textAreaRef.textarea,t=e.selectionStart,a=e.selectionEnd;let n=l.content.substring(t,a);const o=n.replace(l.weight[0],"").replace(l.weight[1],"");let i=a;o!==n&&(i=a-2,n=o);const s=`${l.content.substring(0,t)}`,c=`${l.content.substring(a,l.content.length)}`;l.content=`${s}${n}${c}`,(0,y.Y3)((()=>{e.focus(),e.setSelectionRange(t,i)})),j()}function q(){const e=Math.floor(Math.random()*E.length),l=E[e];t.addBaseFormPromptWords(l.englishName)}function O(e){const t=Y(e.target.value);navigator.clipboard.writeText(t)}return(e,t)=>{const W=(0,y.up)("vab-icon"),v=b.Q0,$=w.E2,Z=(0,y.up)("Close"),E=h.gn,N=g.EZ,D=r.nH,F=p.OX,H=f.ElButton,Y=m.dn,Q=m.KD,X=(0,y.up)("ArrowRight"),G=r.ly,J=d.Dv,ee=u.Ks,te=c.aE,le=c.PH,ae=s.p8,ne=s.Ub,oe=i.Z,ie=o.dq,se=n.zd,ce=a.t;return(0,y.wg)(),(0,y.iD)("div",U,[(0,y.Wm)(v,{effect:"dark",content:"玛尼玛尼哄，大师天马行空的给您画一张",placement:"top","raw-content":""},{default:(0,y.w5)((()=>[(0,y.Wm)(W,{icon:"hexagon-dice",class:"cursor-pointer","is-custom-svg":"",onClick:q})])),_:1}),(0,y.Wm)($,{onClick:T},{default:(0,y.w5)((()=>[(0,y.Uk)("不会写，我帮你")])),_:1}),(0,y.Wm)(se,{modelValue:(0,x.SU)(l).dialogVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,x.SU)(l).dialogVisible=e),"show-close":!1,size:"60%","before-close":I},{header:(0,y.w5)((({close:e,titleId:t,titleClass:l})=>[(0,y._)("h4",{id:t,class:(0,_.C_)(l)},"创意咒语发生器",10,V),(0,y.Wm)(E,{color:"red",class:"cursor-pointer",onClick:e},{default:(0,y.w5)((()=>[(0,y.Wm)(Z)])),_:2},1032,["onClick"])])),default:(0,y.w5)((()=>[(0,y.Wm)(ie,{gutter:20,span:"24",style:{"text-align":"left",display:"flex"}},{default:(0,y.w5)((()=>[(0,y.Wm)(J,{lg:24,md:24,sm:24,xl:24,xs:24,style:{"margin-bottom":"8px"}},{default:(0,y.w5)((()=>[(0,y.Wm)(G,{"label-width":"120px"},{default:(0,y.w5)((()=>[(0,y.Wm)(D,{label:""},{default:(0,y.w5)((()=>[(0,y.Wm)(N,{id:"tag-content",ref_key:"textAreaRef",ref:A,modelValue:(0,x.SU)(l).content,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,x.SU)(l).content=e),placeholder:"狂点下面的分类里面的标签，即可输入对应的词汇",rows:4,type:"textarea",style:{"margin-bottom":"8px"},onInput:j,onCopy:O},null,8,["modelValue"])])),_:1}),(0,y.Wm)(D,null,{default:(0,y.w5)((()=>[(0,y.Wm)(F,{modelValue:(0,x.SU)(l).isZh,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,x.SU)(l).isZh=e),"active-text":"中文","inactive-text":"英文",style:{"margin-left":"8px",display:"flex",float:"left"},onChange:K},null,8,["modelValue"]),(0,y.Wm)(H,{type:"primary",icon:(0,x.SU)(k.Minus),plain:"",style:{"margin-left":"8px",display:"flex",float:"left"},disabled:!(0,x.SU)(l).content,onClick:M},null,8,["icon","disabled"]),(0,y.Wm)(Q,{modelValue:(0,x.SU)(l).weight,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,x.SU)(l).weight=e),label:"权重标签",style:{display:"flex",float:"left"}},{default:(0,y.w5)((()=>[(0,y.Wm)(Y,{label:"{}"}),(0,y.Wm)(Y,{label:"()"})])),_:1},8,["modelValue"]),(0,y.Wm)(H,{plain:"",type:"primary",icon:(0,x.SU)(k.Plus),style:{display:"flex",float:"left"},disabled:!(0,x.SU)(l).content,onClick:L},null,8,["icon","disabled"]),(0,y.Wm)(v,{visible:(0,x.SU)(l).copyTipVisible,content:"已复制！",effect:"dark",placement:"top",trigger:"click"},{default:(0,y.w5)((()=>[(0,y.Wm)(H,{style:{"margin-left":"8px"},plain:"",type:"primary",onClick:z},{default:(0,y.w5)((()=>[(0,y.Uk)(" 复制 ")])),_:1})])),_:1},8,["visible"]),(0,y.Wm)(H,{type:"success",style:{"margin-left":"8px"},onClick:B},{default:(0,y.w5)((()=>[(0,y.Uk)(" 传送到创意输入框，开始创作 "),(0,y.Wm)(E,{class:"el-icon--right"},{default:(0,y.w5)((()=>[(0,y.Wm)(X)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,y.Wm)(J,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,y.w5)((()=>[(0,y.wy)(((0,y.wg)(),(0,y.j4)(oe,{shadow:"never",gutter:0,class:"tag-box"},{default:(0,y.w5)((()=>[(0,y.Wm)(ne,{modelValue:(0,x.SU)(l).tagActiveName,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,x.SU)(l).tagActiveName=e)},{default:(0,y.w5)((()=>[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)((0,x.SU)(R),(e=>((0,y.wg)(),(0,y.j4)(ae,{key:e.id,label:e.name,name:e.id},{default:(0,y.w5)((()=>[(0,y.Wm)(J,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,y.w5)((()=>[(0,y.Wm)(le,{modelValue:e.collapses,"onUpdate:modelValue":t=>e.collapses=t},{default:(0,y.w5)((()=>[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(e.groups,(e=>((0,y.wg)(),(0,y.j4)(te,{key:e.name,name:e.name,title:e.name},{default:(0,y.w5)((()=>[(0,y._)("div",null,[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(e.tags,(e=>((0,y.wg)(),(0,y.j4)(ee,{key:e.id,class:"cursor-pointer",type:e.checked?"info":"",onClick:t=>P(e)},{default:(0,y.w5)((()=>[(0,x.SU)(l).isZh?((0,y.wg)(),(0,y.iD)("span",S,(0,_.zw)(e.name),1)):((0,y.wg)(),(0,y.iD)("span",C,(0,_.zw)(e.englishName),1))])),_:2},1032,["type","onClick"])))),128))])])),_:2},1032,["name","title"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})),[[ce,(0,x.SU)(l).loading]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}});function A(e){e.__source="src/views/stablediffusion/components/tagselector.vue"}var E=l(83744);"function"===typeof A&&A(Z);const N=(0,E.Z)(Z,[["__scopeId","data-v-af540d60"]]);var D=N}}]);