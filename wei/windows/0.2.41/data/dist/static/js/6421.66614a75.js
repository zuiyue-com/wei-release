/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-15 16:38:55
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6421],{20210:function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var a=l(57018),n=(l(3241),l(74367),l(66252)),i=l(2262),o=l(3577),d=l(66443),u={__name:"index",props:{modelValue:{type:[Number,String],default:0},placeholder:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u=(0,i.iH)(parseInt(l.modelValue));function s(){const e=parseInt(u.value);isNaN(e)?u.value=defaultVal:(u.value<l.min&&(u.value=l.min),u.value>l.max&&(u.value=l.max),t("update:modelValue",u.value))}(0,n.YP)((()=>l.modelValue),(()=>{u.value=parseInt(l.modelValue)}));const m=(0,n.Fl)((()=>""===u.value||(0,d.yH)(u.value)));return(t,l)=>{const d=a.EZ;return(0,n.wg)(),(0,n.j4)(d,{modelValue:(0,i.SU)(u),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,i.dq)(u)?u.value=e:null),modelModifiers:{number:!0},placeholder:e.placeholder,class:(0,o.C_)({"error-value":!(0,i.SU)(m)}),disabled:e.disabled,onChange:s},(0,n.Nv)({_:2},[t.$slots.prepend?{name:"prepend",fn:(0,n.w5)((()=>[(0,n.WI)(t.$slots,"prepend")])),key:"0"}:void 0]),1032,["modelValue","placeholder","class","disabled"])}}};function s(e){e.__source="src/components/InputNumber/index.vue"}var m=l(83744);"function"===typeof s&&s(u);const c=(0,m.Z)(u,[["__scopeId","data-v-2685ef0d"]]);var r=c},30561:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(54717),n=(l(3241),l(50552),l(73632)),i=(l(74965),l(22040)),o=(l(99426),l(14181)),d=(l(33828),l(47820)),u=(l(50986),l(66252)),s=l(2262),m=l(3577),c=l(55059),r=l(36536),p=l(47720);const f={class:"checkpoint-container"},w=["id"];var _=(0,u.aZ)({__name:"checkpoint",setup(e){const t=(0,r.m)(),l=(0,s.iH)(!1),{basicFormTemp:_,basicOptions:v}=(0,p.Jk)(t),{setSdModel:g}=t;function h(e){g(e),l.value=!1}return(e,t)=>{const r=d.km,p=(0,u.up)("Close"),g=o.gn,U=i.Dv,S=n.dq,b=a.zd;return(0,u.wg)(),(0,u.iD)("div",f,[(0,u.Wm)(r,{modelValue:(0,s.SU)(_).sd_model_checkpoint_name,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.SU)(_).sd_model_checkpoint_name=e),clearable:"",placeholder:"选择模型",onClick:t[1]||(t[1]=e=>l.value=!0)},null,8,["modelValue"]),(0,u.Wm)(b,{modelValue:(0,s.SU)(l),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,s.dq)(l)?l.value=e:null),"show-close":!1,size:"60%"},{header:(0,u.w5)((({close:e,titleId:t,titleClass:l})=>[(0,u._)("h4",{id:t,class:(0,m.C_)(l)},"基础模型",10,w),(0,u.Wm)(g,{color:"red",class:"cursor-pointer",onClick:e},{default:(0,u.w5)((()=>[(0,u.Wm)(p)])),_:2},1032,["onClick"])])),default:(0,u.w5)((()=>[(0,u.Wm)(S,{gutter:16,span:"24"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,s.SU)(v).Checkpoints,(e=>((0,u.wg)(),(0,u.j4)(U,{key:e.key,lg:4,md:4,sm:4,xl:3,xs:24},{default:(0,u.w5)((()=>[(0,u.Wm)(c["default"],{item:e,"title-key":"name",onClick:t=>h(e)},null,8,["item","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])}}});function v(e){e.__source="src/views/stablediffusion/components/checkpoint.vue"}var g=l(83744);"function"===typeof v&&v(_);const h=(0,g.Z)(_,[["__scopeId","data-v-33dce036"]]);var U=h},21989:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var a=l(73632),n=(l(3241),l(74965),l(22040)),i=(l(99426),l(87692)),o=(l(45393),l(22411),l(66252)),d=l(2262),u=l(3577),s=l(20210);const m={key:0},c={key:1},r={class:"widthAndHeightInput"};var p={__name:"image_size",props:{imageSize:{type:Object,default:()=>{}},size:{type:[String,Number],default:""},width:{type:Number,default:0},height:{type:Number,default:0},imageSizeCustom:{type:Object,default:()=>{}},disabled:{type:Boolean,default:!1}},emits:["update:size","update:width","update:height"],setup(e,{emit:t}){const l=e,p=(0,d.iH)(l.size);async function f(e){t("update:width",e)}async function w(e){t("update:height",e)}function _(){const e=p.value;if("custom"===e.toLowerCase())t("update:width",l.imageSizeCustom.defaultWidth),t("update:height",l.imageSizeCustom.defaultHeight);else{const a=l.imageSize[e];t("update:width",a[0]),t("update:height",a[1])}t("update:size",e)}return(0,o.m0)((()=>{p.value=l.size})),(t,l)=>{const v=i.dn,g=i.KD,h=n.Dv,U=a.dq;return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o.Wm)(g,{modelValue:(0,d.SU)(p),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,d.dq)(p)?p.value=e:null),onChange:_},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.imageSize,((e,t)=>((0,o.wg)(),(0,o.j4)(v,{key:t,label:t},{default:(0,o.w5)((()=>[2===e.length?((0,o.wg)(),(0,o.iD)("div",m,(0,u.zw)(`${e[0]} * ${e[1]}`),1)):(0,o.kq)("",!0),e.length>2?((0,o.wg)(),(0,o.iD)("div",c,"自定义")):(0,o.kq)("",!0)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),(0,o._)("div",r,[(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)((0,d.SU)(s["default"]),{value:e.width,placeholder:"请输入生图的宽度",min:e.imageSizeCustom.minWidth,max:e.imageSizeCustom.maxWidth,disabled:e.disabled,"onUpdate:modelValue":f},{prepend:(0,o.w5)((()=>[(0,o.Uk)("宽度")])),_:1},8,["value","min","max","disabled"])])),_:1}),(0,o.Wm)(h,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)((0,d.SU)(s["default"]),{value:e.height,placeholder:"请输入生图的高度",min:e.imageSizeCustom.minHeight,max:e.imageSizeCustom.maxHeight,disabled:e.disabled,"onUpdate:modelValue":w},{prepend:(0,o.w5)((()=>[(0,o.Uk)("高度")])),_:1},8,["value","min","max","disabled"])])),_:1})])),_:1})])],64)}}};function f(e){e.__source="src/views/stablediffusion/components/image_size.vue"}"function"===typeof f&&f(p);const w=p;var _=w},86421:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var a=l(73632),n=(l(3241),l(74965),l(22040)),i=(l(99426),l(31452)),o=(l(68445),l(87692)),d=(l(45393),l(22411),l(57018)),u=(l(74367),l(20129)),s=(l(69840),l(47820)),m=(l(50986),l(61715),l(6589),l(10661)),c=(l(35095),l(66252)),r=l(49963),p=l(2262),f=l(3577),w=l(30561),_=l(2540),v=l(95625),g=l(84729),h=l(21989),U=l(20210),S=l(36536),b=l(61378);const W=(0,b.Z)();W.setOptions({nextLabel:"下一个",prevLabel:"上一个",doneLabel:"立即体验",hidePrev:!0,hideNext:!1,exitOnOverlayClick:!1,showStepNumbers:!1,disableInteraction:!0,showBullets:!1});var k=W,y=l(47720);const x=e=>((0,c.dD)("data-v-5538995e"),e=e(),(0,c.Cn)(),e),V={class:"txt2imgFrom"},z={class:"txt2imgFrom"},C={class:"tag-box"},I={class:"txt2imgFrom"},D=x((()=>(0,c._)("span",null,"临摹还是随意发挥（随机种子）",-1))),H=x((()=>(0,c._)("span",null,"绘图的逻辑（采样算法）",-1))),q=x((()=>(0,c._)("span",null,"采样次数",-1))),F=x((()=>(0,c._)("span",null,"创意词相关性",-1)));var N={__name:"txt2img",setup(e){const t=(0,S.m)(),{basicFormTemp:l,basicForm:b,basicOptions:W,isCustomImageSize:x}=(0,y.Jk)(t),{resetBaseFormSeed:N}=t;function Y(){if(localStorage.getItem("createImageHelp"))return!1;k.setOptions({steps:[{element:"#create-image-step1",intro:"先选择基础模型",position:"top"},{element:"#create-image-step2",intro:"设置关键词",position:"top"},{element:"#create-image-step3",intro:"设置出图数量",position:"top"},{element:"#create-image-step4",intro:"提交生图",position:"top"}]}),(0,c.Y3)((()=>{k.start()})),k.onexit((function(){localStorage.setItem("createImageHelp",1)}))}return(0,c.bv)((()=>{Y()})),(e,t)=>{const S=(0,c.up)("vab-icon"),k=m.Q0,y=u.nH,Y=s.BT,j=s.km,K=u.ly,O=d.EZ,Z=o.dn,L=o.KD,$=i.E2,B=n.Dv,M=a.dq;return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("div",V,[(0,c.Wm)(K,{"label-position":"top","label-width":"100px"},{default:(0,c.w5)((()=>[(0,c.Wm)(y,{id:"create-image-step1"},{label:(0,c.w5)((()=>[(0,c._)("div",{onClick:t[0]||(t[0]=(0,r.iM)((()=>{}),["prevent"]))},[(0,c.Uk)(" 选画家 "),(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">不同的画家擅长画不领域的画作，有画植物，动物，卡通，风景，美女，俊男，机甲等等，您先选一名专业画家，也就是AI绘图术语说的“基础模型”</div>',placement:"right","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])])),default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(w["default"]))])),_:1}),(0,c.Wm)(y,{label:""},{default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(_["default"]),{"lora-styles":(0,p.SU)(W).loraStyle,"form-styles":(0,p.SU)(b).lora_styles},null,8,["lora-styles","form-styles"])])),_:1}),(0,c.Wm)(y,null,{label:(0,c.w5)((()=>[(0,c.Uk)(" 滤镜工具 "),(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">用与不用有什么区别，举个例子，看图。<br>（注意，不是每一个画家都要额外使用滤镜，就像有的美女，就是自然美）</div>',placement:"right","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,c.w5)((()=>[(0,c.Wm)(j,{modelValue:(0,p.SU)(b).override_settings.sd_vae,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,p.SU)(b).override_settings.sd_vae=e),clearable:"",placeholder:"滤镜工具"},{default:(0,c.w5)((()=>[(0,c.Wm)(Y,{label:"无",value:""}),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(W).sdVae,((e,t)=>((0,c.wg)(),(0,c.j4)(Y,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})]),(0,c._)("div",z,[(0,c.Wm)(K,{"label-position":"top","label-width":"100px"},{default:(0,c.w5)((()=>[(0,c.Wm)(y,{id:"create-image-step2"},{label:(0,c.w5)((()=>[(0,c._)("div",null,[(0,c.Uk)(" 创意描述，图画里面有什么 "),(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">描述画面的事物，色彩，空间，动作，姿态，神情，气氛，等等，例如，您可以这样写：<br>“一对年轻的中国情侣，穿着夹克和牛仔裤，坐在屋顶上，背景是20世纪90年代的北京，可以看到对面的建筑”</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])])),default:(0,c.w5)((()=>[(0,c._)("div",C,[(0,c.Wm)((0,p.SU)(v["default"]))]),(0,c.Wm)(O,{modelValue:(0,p.SU)(b).prompt_words,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,p.SU)(b).prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,c.Wm)(y,null,{label:(0,c.w5)((()=>[(0,c.Uk)(" 排除词，图画里面不能有什么 "),(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">把您不想画里出现的事物，颜色等等写在这里，譬如不想出现红色，您可以这样写：红色</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,c.w5)((()=>[(0,c.Wm)(O,{modelValue:(0,p.SU)(b).negative_prompt_words,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,p.SU)(b).negative_prompt_words=e),type:"textarea",rows:"2"},null,8,["modelValue"])])),_:1}),(0,c.Wm)(y,null,{label:(0,c.w5)((()=>[(0,c._)("div",{onClick:t[4]||(t[4]=(0,r.iM)((()=>{}),["prevent"]))},[(0,c.Uk)(" 添加参考图 "),(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">即要求画家参照您提供的画作样品，画一幅相似的作品，您有任何个性化的要求可以通过上面的“创意描述”告诉画家</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])])),default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(g["default"]))])),_:1})])),_:1})]),(0,c._)("div",I,[(0,c.Wm)(K,{"label-position":"top","label-width":"100px"},{default:(0,c.w5)((()=>[(0,c.Wm)(y,{id:"create-image-step3",label:"出图数量"},{default:(0,c.w5)((()=>[(0,c.Wm)(L,{modelValue:(0,p.SU)(b).batch_size,"onUpdate:modelValue":t[5]||(t[5]=e=>(0,p.SU)(b).batch_size=e)},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(W).n_iter,(e=>((0,c.wg)(),(0,c.j4)(Z,{key:e,label:e},{default:(0,c.w5)((()=>[(0,c.Uk)((0,f.zw)(e)+" 张 ",1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,c.Wm)(y,{label:"图画大小"},{default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(h["default"]),{size:(0,p.SU)(l).size,"onUpdate:size":t[6]||(t[6]=e=>(0,p.SU)(l).size=e),width:(0,p.SU)(b).width,"onUpdate:width":t[7]||(t[7]=e=>(0,p.SU)(b).width=e),height:(0,p.SU)(b).height,"onUpdate:height":t[8]||(t[8]=e=>(0,p.SU)(b).height=e),"image-size":(0,p.SU)(W).imageSize,"image-size-custom":(0,p.SU)(W).imageSizeCustom,disabled:!(0,p.SU)(x)},null,8,["size","width","height","image-size","image-size-custom","disabled"])])),_:1}),(0,c.Wm)(y,null,{label:(0,c.w5)((()=>[D,(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">画家以往的作品，都有一个叫“随机种子-seed”的数字ID，当您把这个数字ID填写到这里，画家就会直接按ID找到这张图，重新画一遍。不过用墨轻重不一，画出的图和原图不一定完全一样</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1}),(0,c.Uk)("   "),(0,p.SU)(l).seed?((0,c.wg)(),(0,c.j4)(k,{key:0,effect:"dark",content:"点击使用此种子",placement:"top"},{default:(0,c.w5)((()=>[(0,c.Wm)($,{type:"primary",onClick:(0,p.SU)(N)},{default:(0,c.w5)((()=>[(0,c.Uk)((0,f.zw)((0,p.SU)(l).seed),1)])),_:1},8,["onClick"])])),_:1})):(0,c.kq)("",!0)])),default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(U["default"]),{modelValue:(0,p.SU)(b).seed,"onUpdate:modelValue":t[9]||(t[9]=e=>(0,p.SU)(b).seed=e),min:-1,max:9999999999},null,8,["modelValue"])])),_:1}),(0,c.Wm)(y,null,{label:(0,c.w5)((()=>[H,(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">表示画家在画画时，从构图比例，绘制逻辑，渲染等轻重、顺序、次数上的一套思考逻辑，直接影响图的细节程度</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,c.w5)((()=>[(0,c.Wm)(j,{modelValue:(0,p.SU)(b).sampler_index,"onUpdate:modelValue":t[10]||(t[10]=e=>(0,p.SU)(b).sampler_index=e),clearable:""},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(W).samplerMethod,((e,t)=>((0,c.wg)(),(0,c.j4)(Y,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,c.Wm)(y,{label:""},{default:(0,c.w5)((()=>[(0,c.Wm)(M,null,{default:(0,c.w5)((()=>[(0,c.Wm)(B,{span:12},{default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(U["default"]),{modelValue:(0,p.SU)(b).num_samples,"onUpdate:modelValue":t[11]||(t[11]=e=>(0,p.SU)(b).num_samples=e),min:(0,p.SU)(W).samplerStep.min,max:(0,p.SU)(W).samplerStep.max},{prepend:(0,c.w5)((()=>[q,(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">经过大量的实验，总结出让画家费30个细胞的脑力+体力+心机，出来的图在细节方面才能达到理想的状态</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1},8,["modelValue","min","max"])])),_:1}),(0,c.Wm)(B,{span:12},{default:(0,c.w5)((()=>[(0,c.Wm)((0,p.SU)(U["default"]),{modelValue:(0,p.SU)(b).cfg_scale,"onUpdate:modelValue":t[12]||(t[12]=e=>(0,p.SU)(b).cfg_scale=e),min:(0,p.SU)(W).CFGScale.min,max:(0,p.SU)(W).CFGScale.max},{prepend:(0,c.w5)((()=>[F,(0,c.Wm)(k,{effect:"dark",content:'<div style="width:250px;">尊重您写的“创意描述”的程度，一般是4-10之间最好。默认了7，比较合适了</div>',placement:"top","raw-content":""},{default:(0,c.w5)((()=>[(0,c.Wm)(S,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),_:1},8,["modelValue","min","max"])])),_:1})])),_:1})])),_:1})])),_:1})])],64)}}};function Y(e){e.__source="src/views/stablediffusion/components/txt2img.vue"}var j=l(83744);"function"===typeof Y&&Y(N);const K=(0,j.Z)(N,[["__scopeId","data-v-5538995e"]]);var O=K},84729:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(4350),n=(l(3241),l(91103),l(57122)),i=(l(69540),l(79329)),o=(l(68984),l(66252)),d=l(2262),u=l(49963),s=l(3577),m=l(36536),c=l(15806),r=l(31794),p=l(93457),f=l(47720);const w=(0,o._)("div",{class:"el-upload__text"},[(0,o.Uk)(" 把图片拖放到这里 / "),(0,o._)("em",null,"点击这里上传")],-1),_={key:0,class:"w-full"};var v={__name:"upload",setup(e){const t=(0,m.m)(),{basicFormTemp:l,basicForm:v,hasUploadedImage:g}=(0,f.Jk)(t),{setUploadImage:h}=t,U=(0,d.iH)(null),S=(0,d.iH)([]),b=(0,o.Fl)((()=>S.value.length));(0,o.YP)(b,(async()=>{S.value.map((async e=>{const{width:t,height:l,src:a}=await(0,r.I)(e.raw),n={url:a,picid:0,uid:e.uid,percent:0,title:`图片大小 ${t}x${l}`};e.meta=n,h([n])}))}));let W=null;function k(){W&&W.abort(),U.value.clearFiles(),h([])}async function y(e,t){if(!e.msg)return void k();const{body:{picid:l,bigimg:a},msg:n}=e,{width:i,height:o}=await(0,r.I)(t.raw),d={url:a,picid:l,uid:t.uid,percent:100,title:t.meta.title??""};h([d])}async function x(e,t){k()}async function V(e){return W=new AbortController,(0,p.Ix)(e,{signal:W.signal})}return(e,t)=>{const l=i.LW,m=n.F8,r=(0,o.up)("vab-icon"),p=a.t;return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o.Wm)(l,{ref_key:"uploadRef",ref:U,"file-list":(0,d.SU)(S),"onUpdate:fileList":t[0]||(t[0]=e=>(0,d.dq)(S)?S.value=e:null),action:"http://localhost:15000/api/wwwapi.php?to=sd&modac=upload","on-success":y,"on-error":x,"http-request":V,drag:"",limit:1,"auto-upload":!0,"show-file-list":!1,class:"upload-demo"},{default:(0,o.w5)((()=>[w])),_:1},8,["file-list"]),[[u.F8,!(0,d.SU)(g)]]),(0,d.SU)(g)?((0,o.wg)(),(0,o.iD)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,d.SU)(v).init_images,(e=>((0,o.wg)(),(0,o.j4)((0,d.SU)(c["default"]),{key:e},{image:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(m,{src:e.url,width:"48",class:"upload-image"},null,8,["src"]),[[p,0===e.picid]])])),header:(0,o.w5)((()=>[(0,o._)("span",null,(0,s.zw)(e.title),1)])),action:(0,o.w5)((()=>[(0,o.Wm)(r,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:k})])),_:2},1024)))),128))])):(0,o.kq)("",!0)],64)}}};function g(e){e.__source="src/views/stablediffusion/components/upload.vue"}"function"===typeof g&&g(v);const h=v;var U=h}}]);