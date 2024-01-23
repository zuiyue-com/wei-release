/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-23 10:23:14
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4002,9527,8784,3377,5969,6299],{93457:function(e,t,a){a.d(t,{Ix:function(){return n},Pc:function(){return m},R1:function(){return o},Wl:function(){return u},YU:function(){return d},_5:function(){return c},p$:function(){return s},rt:function(){return l},ss:function(){return r}});var i=a(92325);function o(){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function s(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const a=new FormData;return a.append("Filedata",e.file),(0,i.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...t})}function r(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function l(e={}){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function c(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function d(e,t){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function m(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function u(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,a){a.d(t,{m:function(){return p}});var i=a(93457),o=a(31794),s=a(96486),n=a.n(s),r=a(47720);function l(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function c(e){return e.map((e=>{const t=e.url;return t}))}function d(e){return e.url?e.url:""}function m(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const a=t.map((t=>{const a=e.find((e=>e.name===t.name));if(!a)return{};const i={...a,min:a.weight.min,max:a.weight.max,weight:t.weight};return i}));return a.filter((e=>e.title))}const p=(0,r.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let a=0;switch(e.formType){case"hdrepaire":a=parseInt(t["1"]);break;case"adetailer":a=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(a=parseInt(t[e.basicForm.batch_size]));break}return a},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,a]=e,i=n().cloneDeep(a);i.name=t,i.checked=!1;const[o,s,r]=i.weight;return i.weight={min:o,max:s,value:r},i}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:a,n_iter:i,imageSize:o,samplerMethod:s,samplerStep:n,CFGScale:r,clipSkip:l,BatchsSizeScore:c}){const d=Object.entries(e).map((e=>{const[t,a]=e;return a.key=t,a})),m=this.formatLoraStyle(t),u={Checkpoints:d,loraStyle:m,sdVae:a,n_iter:i.slice(0,i.length-1),imageSize:o,imageSizeCustom:{...this.getCustomImageSizeParams(o)},samplerMethod:s,samplerStep:{min:n[0]??1,max:n[1]??60},CFGScale:{min:r[0]??1,max:r[1]??30},clipSkip:{min:l[0]??1,max:l[1]??12},txtCredits:c.credittxt2img,imageSredits:c.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(d[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=a["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=i[i.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=s[0]??"",this.basicForm.num_samples=n[2]??1,this.basicForm.cfg_scale=r[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=l[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:a,denoisingStrength:i,BatchsSizeScore:o}){const s={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:a[0],max:a[1]},denoisingStrength:{min:i[0],max:i[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:o.creditHD};this.hdrepaireOptions=s;const n=s.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=n[0],this.hdrepaireForm.hr_resize_y=n[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=a[2],this.hdrepaireForm.denoising_strength=i[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:a,adMaskBlur:i,adDenoisingStrength:o,BatchsSizeScore:s}){const n=this.formatLoraStyle(t),r={adModel:e,loraStyle:n,adConfidence:{min:a[0],max:a[1]},adMaskBlur:{min:i[0],max:i[1]},adDenoisingStrength:{min:o[0],max:o[1]},credits:s.creditAD};this.adetailerOptions=r,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=a[2],this.adetailerForm.ad_dilate_erode=i[2],this.adetailerForm.ad_denoising_strength=o[2]},load(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:a,src:i}=await(0,o.I)(e.raw);let s="";return t&&(s=`图片大小 ${t}x${a}`),e.extra=s,e.url=i,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const a=t.override_settings.sd_model_checkpoint,i=this.basicOptions.Checkpoints.find((e=>e.key===a));i?this.setSdModel(i):this.setSdModel(this.basicOptions.Checkpoints[0]);const o=Object.entries(this.basicOptions.imageSize).find((e=>{const[a,i]=e;return i[0]==t.width&&i[1]==t.height}));this.basicFormTemp.size=o?o[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=m(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:a}}=await(0,i.YU)(e,t);this.setFormData(e,a)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=d(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=l(e.lora_styles),e.base_image=d(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=l(e.lora_styles),e.init_images=c(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,i.p$)(e)}}})},31794:function(e,t,a){function i(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(){if(2==i.readyState){const e=new Image;e.src=i.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function o(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return i},x:function(){return o}})},63877:function(e,t,a){a.d(t,{Nb:function(){return s},jQ:function(){return i},jl:function(){return o}});const i={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},o={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},s={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},49527:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=a(66252),o=a(3577),s=a(2262);const n={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(e){const t=e,a=(0,i.Fl)((()=>{const e={fontSize:t.size};return t.color&&(e.color=t.color),e}));return(t,r)=>{const l=(0,i.up)("vab-icon");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l,{icon:e.icon,style:(0,o.j5)((0,s.SU)(a)),class:"icon"},null,8,["icon","style"]),(0,i._)("span",{style:(0,o.j5)((0,s.SU)(a))},(0,o.zw)(e.text),5)])}}};function l(e){e.__source="src/components/IconText/index.vue"}var c=a(83744);"function"===typeof l&&l(r);const d=(0,c.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var m=d},88784:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var i=a(14181),o=(a(3241),a(33828),a(10661)),s=(a(35095),a(66252)),n=a(2262),r=a(3577),l=a(49527);const c={class:"info-box"};var d={__name:"actions",props:{topic:{type:Object,default:()=>{}},canAction:{type:Boolean,default:!1}},emits:["delFav","addFav","addLike","report"],setup(e,{emit:t}){const a=e,{extraInfo:d,favId:m,likeId:u}=(0,n.BK)(a.topic);function p(){t("delFav")}function g(){t("addFav")}function f(){t("addLike")}function h(){t("report")}return(t,a)=>{const _=o.Q0,w=(0,s.up)("Bell"),v=i.gn;return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(_,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,n.SU)(m)>0?((0,s.wg)(),(0,s.j4)((0,n.SU)(l["default"]),{key:0,icon:"star-fill",text:(0,n.SU)(d).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:p},null,8,["text"])):((0,s.wg)(),(0,s.j4)((0,n.SU)(l["default"]),{key:1,icon:"star-line",text:(0,n.SU)(d).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:g},null,8,["text"]))])])),_:1}),(0,s.Wm)(_,{class:"box-item",effect:"dark",content:e.canAction?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,n.SU)(u)>0?((0,s.wg)(),(0,s.j4)((0,n.SU)(l["default"]),{key:0,icon:"heart-3-fill",text:(0,n.SU)(d).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,s.wg)(),(0,s.j4)((0,n.SU)(l["default"]),{key:1,icon:"heart-3-line",text:(0,n.SU)(d).recommend_add,class:(0,r.C_)(["icon",e.canAction?"cursor-pointer":"cursor-not-allowed"]),onClick:f},null,8,["text","class"]))])])),_:1},8,["content"]),(0,s.Wm)(_,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,n.SU)(l["default"]),{icon:"chat-2-line",text:(0,n.SU)(d).replies,class:"icon"},null,8,["text"])])),_:1}),(0,s.Wm)(_,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:h},{default:(0,s.w5)((()=>[(0,s.Wm)(w)])),_:1})])),_:1})])}}};function m(e){e.__source="src/components/Topic/actions.vue"}var u=a(83744);"function"===typeof m&&m(d);const p=(0,u.Z)(d,[["__scopeId","data-v-2bd0a91e"]]);var g=p},57506:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var i=a(20129),o=(a(3241),a(69840),a(15659)),s=(a(10444),a(6589),a(57018)),n=(a(74367),a(66252)),r=a(2262),l=a(49963),c=a(63877),d=a(53580);const m={class:"form"};var u={__name:"form",props:{tid:{type:String,default:"0"}},emits:["reload"],setup(e,{expose:t,emit:a}){const u=e,p=(0,n.f3)("$baseMessage"),g=(0,r.qj)({showTextarea:!1,rules:{...c.jQ},topicFormRef:null,inputCommentRef:null,loading:!1}),f=(0,r.qj)({tid:u.tid,pid:0,message:""});(0,n.YP)((()=>u.tid),(()=>{f.tid=u.tid}));const{topicFormRef:h,inputCommentRef:_}=(0,r.BK)(g);function w(){g.showTextarea=!0,v()}function v(){g["topicFormRef"].clearValidate(),(0,n.Y3)((()=>{_.value.focus()}))}async function y(){try{g.loading=!0;const e=/@\w+ /g;e.test(f.message)?await(0,d.kA)(f):await(0,d.NY)(f),f.message="",a("reload"),p("回复成功","success","vab-hey-message-success")}catch(e){console.log(e)}finally{g.loading=!1}}async function b(){g["topicFormRef"].validate((e=>{e&&y()}))}function S(e,t){g.showTextarea=!0,f.pid=e,f.message+=`@${t} `,v()}return t({bindReplyAuthor:S}),(e,t)=>{const a=s.EZ,c=i.nH,d=o.ElButton,u=i.ly;return(0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(u,{ref_key:"topicFormRef",ref:h,model:(0,r.SU)(f),rules:(0,r.SU)(g).rules},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(c,{prop:"message"},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{ref_key:"inputCommentRef",ref:_,modelValue:(0,r.SU)(f).message,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.SU)(f).message=e),placeholder:"在这里输入评论内容",type:"textarea",maxlength:"256",rows:3,"show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,{type:"primary",class:"button",disabled:""===(0,r.SU)(f).message,loading:(0,r.SU)(g).loading,onClick:b},{default:(0,n.w5)((()=>[(0,n.Uk)(" 评论 ")])),_:1},8,["disabled","loading"])],512),[[l.F8,(0,r.SU)(g).showTextarea]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(a,{placeholder:"在这里输入评论内容",onFocus:w})],512),[[l.F8,!(0,r.SU)(g).showTextarea]])])),_:1},8,["model","rules"])])}}};function p(e){e.__source="src/components/Topic/form.vue"}var g=a(83744);"function"===typeof p&&p(u);const f=(0,g.Z)(u,[["__scopeId","data-v-75d0045b"]]);var h=f},65969:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(69950),o=(a(3241),a(82123),a(19615),a(57658),a(66252)),s=a(2262),n=a(3577),r=a(65781);const l={class:"timeline-container"};var c=(0,o.aZ)({__name:"generate",props:{detail:{type:Object,default:()=>{}}},setup(e){const t=e,a=(0,o.Fl)((()=>t.detail)),c=(0,o.Fl)((()=>{const e=a.value.override_settings&&a.value.override_settings.sd_model_checkpoint?a.value.override_settings.sd_model_checkpoint:"",t=[{content:"基础模型",timestamp:e,size:"large",type:"primary",icon:r.MoreFilled}];if(a.value.lora_styles&&a.value.lora_styles.length>0){const e=a.value.lora_styles.map((e=>e.name));t.push({content:"LoRA",timestamp:e.join(","),color:"#2f9bff"})}a.value.prompt_words&&t.push({content:"创意描述",timestamp:a.value.prompt_words,color:"#46a6ff"}),a.value.negative_prompt_words&&t.push({content:"排除词",timestamp:a.value.negative_prompt_words,type:"primary",hollow:!0,color:"#5db1ff"});const i=[{content:"采样算法(Sampler)",timestamp:a.value.sampler_index,color:"#74bcff"},{content:"迭代步数(Steps)",timestamp:`${a.value.num_samples}`,color:"#8cc8ff"},{content:"创意描述词相关性(CFG Scale)",timestamp:`${a.value.cfg_scale}`,color:"#a3d3ff"},{content:"随机种子(Seed)",timestamp:`${a.value.seed}`,color:"#badeff "},{content:"尺寸",timestamp:`${a.value.width}x${a.value.height}`,color:"#d1e9ff"},{content:"Clip Skip",timestamp:`${a.value.clip_skip}`,color:"#e8f4ff"}];return t.push(...i),t}));return(e,t)=>{const a=i._T,r=i.rJ;return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(c),((e,t)=>((0,o.wg)(),(0,o.j4)(a,{key:t,icon:e.icon,type:e.type,color:e.color,size:e.size,hollow:e.hollow,timestamp:e.timestamp},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.content),1)])),_:2},1032,["icon","type","color","size","hollow","timestamp"])))),128))])),_:1})])}}});function d(e){e.__source="src/components/Topic/generate.vue"}var m=a(83744);"function"===typeof d&&d(c);const u=(0,m.Z)(c,[["__scopeId","data-v-625a29a1"]]);var p=u},16299:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=a(25917),o=(a(3241),a(27109),a(61684),a(57122)),s=(a(69540),a(66252)),n=a(2262);const r={class:"image-box"};var l={__name:"images",props:{images:{type:Array,default:()=>[]},imageIndex:{type:Number,default:0}},emits:["change"],setup(e,{emit:t}){const a=e,l=(0,s.Fl)((()=>a.images.length<=1?"never":"always")),c=(0,s.Fl)((()=>{const e=a.images.map((e=>e.height))||[];return Math.max(...e)}));function d(e){t("change",e)}return(t,a)=>{const m=o.F8,u=i.B6,p=i.$J;return(0,s.wg)(),(0,s.j4)(p,{height:(0,n.SU)(c)+"px",autoplay:!1,"initial-index":e.imageIndex,arrow:(0,n.SU)(l),"indicator-position":e.images.length>1?"":"none",onChange:d},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.images,(e=>((0,s.wg)(),(0,s.j4)(u,{key:e.id},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.Wm)(m,{src:e.image},null,8,["src"])])])),_:2},1024)))),128))])),_:1},8,["height","initial-index","arrow","indicator-position"])}}};function c(e){e.__source="src/components/Topic/images.vue"}var d=a(83744);"function"===typeof c&&c(l);const m=(0,d.Z)(l,[["__scopeId","data-v-6c37c3bc"]]);var u=m},16693:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var i=a(73481),o=(a(3241),a(62029),a(15659)),s=(a(10444),a(20129)),n=(a(69840),a(57018)),r=(a(74367),a(6589),a(47820)),l=(a(50986),a(61715),a(66252)),c=a(2262),d=a(53580),m=a(63877);const u={class:"dialog-footer"};var p={__name:"report",setup(e,{expose:t}){const a=(0,l.f3)("$baseMessage"),p=["垃圾广告","攻击骚扰","违法违规","色情低俗","不实信息","抄袭侵权","其它"],g={report_select:"",message:"",rid:0,fid:0},f=(0,c.qj)({queryForm:{...g},rules:{...m.jl},dialogVisible:!1,formRef:null}),{queryForm:h,rules:_,dialogVisible:w,formRef:v}=(0,c.BK)(f);function y(e,t){f.dialogVisible=!0,h.value.rid=e,h.value.fid=t}function b(){f["formRef"].validate((async e=>{if(e){const e=await(0,d.yo)(h.value);a(e.msg,"success","vab-hey-message-success"),f.queryForm={...g},f.dialogVisible=!1}}))}return t({showDialog:y}),(e,t)=>{const a=r.BT,d=r.km,m=s.nH,g=n.EZ,f=s.ly,y=o.ElButton,S=i.d0;return(0,l.wg)(),(0,l.j4)(S,{modelValue:(0,c.SU)(w),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,c.dq)(w)?w.value=e:null),title:"举报帖子",width:"30%"},{footer:(0,l.w5)((()=>[(0,l._)("span",u,[(0,l.Wm)(y,{onClick:t[2]||(t[2]=e=>w.value=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(y,{type:"primary",onClick:b},{default:(0,l.w5)((()=>[(0,l.Uk)("确认")])),_:1})])])),default:(0,l.w5)((()=>[(0,l.Wm)(f,{ref_key:"formRef",ref:v,model:(0,c.SU)(h),rules:(0,c.SU)(_)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{prop:"report_select"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:(0,c.SU)(h).report_select,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(h).report_select=e),placeholder:"举报类型"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(p,(e=>(0,l.Wm)(a,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(m,{prop:"message"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:(0,c.SU)(h).message,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(h).message=e),rows:3,type:"textarea",placeholder:"举报内容"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function g(e){e.__source="src/components/Topic/report.vue"}"function"===typeof g&&g(p);const f=p;var h=f},1479:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var i=a(57534),o=(a(3241),a(92471),a(15659)),s=(a(10444),a(77669)),n=(a(95774),a(66252)),r=a(2262),l=a(3577),c=a(15904),d=a(15790);const m={key:0,class:"item"},u={class:"row"},p={class:"name"},g={class:"author"},f=["innerHTML"],h={key:0},_={class:"content"},w={class:"tags-box"};var v={__name:"topic",props:{topic:{type:Object,default:()=>{}},canAction:{type:Boolean,default:!1},tags:{type:Array,default:()=>[]}},setup(e){const t=e,a=(0,d.L)(),v=(0,n.Fl)((()=>t.topic)),y=(0,n.Fl)((()=>(0,c.x)(t.topic.detail))),b=(0,n.Fl)((()=>parseInt(v.value.extraInfo.follow_record)>0)),S=(0,n.Fl)((()=>v.value.detail.authorid));async function F(){await a.handleAddFollowUser(S.value),v.value.extraInfo.follow_record=1}async function k(){await a.handleDelFollowUser(S.value),v.value.extraInfo.follow_record=0}return(t,a)=>{const c=s.vs,d=(0,n.up)("router-link"),v=(0,n.up)("vab-icon"),S=o.ElButton,x=i.Ks;return(0,r.SU)(y)?((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",u,[(0,n.Wm)(d,{to:(0,r.SU)(y).author_route},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{src:(0,r.SU)(y).avatar},null,8,["src"])])),_:1},8,["to"]),(0,n._)("div",p,[(0,n.Wm)(d,{to:(0,r.SU)(y).author_route},{default:(0,n.w5)((()=>[(0,n._)("div",g,(0,l.zw)((0,r.SU)(y).author),1)])),_:1},8,["to"]),(0,n._)("div",{innerHTML:(0,r.SU)(y).dateline},null,8,f)]),e.canAction?((0,n.wg)(),(0,n.iD)("div",h,[(0,r.SU)(b)?((0,n.wg)(),(0,n.j4)(S,{key:1,round:"",type:"warning",size:"small",onClick:k},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{icon:"group-line"}),(0,n.Uk)(" 取消关注 ")])),_:1})):((0,n.wg)(),(0,n.j4)(S,{key:0,round:"",type:"primary",size:"small",onClick:F},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{icon:"group-line"}),(0,n.Uk)(" 关注 ")])),_:1}))])):(0,n.kq)("",!0)]),(0,n._)("div",_,(0,l.zw)((0,r.SU)(y).subject),1),(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.tags,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,to:{path:"/index",query:{tag:e.name}}},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{type:"info"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])])):(0,n.kq)("",!0)}}};function y(e){e.__source="src/components/Topic/topic.vue"}var b=a(83744);"function"===typeof y&&y(v);const S=(0,b.Z)(v,[["__scopeId","data-v-b6ea1fbc"]]);var F=S},48881:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var i=a(73632),o=(a(3241),a(74965),a(10661)),s=(a(35095),a(15659)),n=(a(10444),a(14181)),r=(a(33828),a(77669)),l=(a(95774),a(22040)),c=(a(99426),a(27750)),d=(a(57658),a(66252)),m=a(2262),u=a(1479),p=a(16299),g=a(88784),f=a(57506),h=a(63099),_=a(16693),w=a(65969),v=a(36536),y=a(15790),b=a(81095),S=a(53580),F=a(93457),k=a(26010),x=a(22201);const U=(0,y.L)();function I(){const e=(0,x.yj)();(0,d.bv)((()=>{g()}));const t={tid:e.params.id,page:1},a={pageSize:1,total:1},i=(0,m.qj)({detail:{},images:[],comments:[],extraInfo:{},favId:0,likeId:0});function o(e){return e?Object.values(e).map((e=>({id:e.aid,image:`${e.url}${e.attachment}`,height:e.height}))):[]}const s=(0,d.Fl)((()=>o(i.detail.attachments))),n=(0,d.Fl)((()=>i.detail.tid)),r=(0,d.Fl)((()=>i.detail.pid)),l=(0,d.Fl)((()=>i.detail.fid)),c=(0,d.Fl)((()=>U.canAction(i.detail.authorid))),u=(0,d.Fl)((()=>i.detail.tags?i.detail.tags.map((e=>({id:e[0],name:e[1]}))):[])),p=(0,d.Fl)((()=>(0,k.Gc)(t.page,a.pageSize,a.total-1)));async function g(){const o=e.query.image_id,{body:{list:s,forum_thread:n,page_perpage:r,page_allcount:l}}=await(0,S.BN)(t),c=s;i.detail=c[0]??{},i.comments=c.slice(1),i.extraInfo=n,i.favId=i.detail.threadHasFavorite?.favid??0,i.likeId=i.detail.threadHasRecommend?.tid??0,a.pageSize=parseInt(r),a.total=parseInt(l),I(i.detail.attachments,o),C()}async function f(){const{body:{list:e,forum_thread:o,page_perpage:s,page_allcount:n}}=await(0,S.BN)(t);i.comments=[e[1],...i.comments],i.extraInfo=o,a.pageSize=parseInt(s),a.total=parseInt(n)}async function h(){if(p.value)return;t.page++;const{body:{list:e,page_perpage:o,page_allcount:s}}=await(0,S.BN)(t);i.comments.push(...e),a.pageSize=parseInt(o),a.total=parseInt(s)}async function _(){await(0,S.Xq)(i.favId),i.favId=0,i.extraInfo.favtimes--,b.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")}async function w(){const{body:{favid:e}}=await(0,S.l0)(t.tid);e>0?(i.favId=e,i.extraInfo.favtimes++,b.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):b.gp.$baseMessage("收藏失败","error","vab-hey-message-error")}async function v(){if(!c.value)return;const{body:{recommendv:e}}=await(0,S.mE)(t.tid);i.likeId=e,i.extraInfo.recommend_add++}const y=(0,m.qj)({imageIndex:0,imageId:0,imageDetail:{},imageLog:{}});function I(e,t){const a=o(e),i=a.findIndex((e=>e.id==t));i>=0?(y.imageIndex=parseInt(i),y.imageId=parseInt(t)):(y.imageIndex=0,y.imageId=a[0]?a[0].id:0)}async function C(){const{body:{detail:e,log:a}}=await(0,F.YU)(y.imageId,t.tid);y.imageDetail=e,y.imageLog=a}return{topicInfo:i,images:s,getTid:n,getPid:r,getFid:l,canAction:c,getTopicTags:u,hasNoMoreData:p,loadTopic:g,loadAddedTopic:f,loadMoreComments:h,handleDelFavTopic:_,handleAddFavTopic:w,handleAddLikeTopic:v,imageInfo:y,loadImageDetail:C}}var C=a(47720);const W={class:"post-detail-container"},T={class:"topic"},z={class:"comment-form"},D={class:"avatar"};var j={__name:"detail",setup(e){const t=(0,y.L)(),{getAvatar:a}=(0,C.Jk)(t),b=(0,v.m)(),{getImageDetailResetParams:S}=b,F=(0,d.f3)("$sub"),k=(0,d.f3)("$unsub"),U=(0,d.f3)("$baseMessage"),j=(0,x.tv)(),R=(0,m.iH)(null),A=(0,m.iH)(null),B=(0,m.iH)(null),M=(0,m.iH)(!1),{topicInfo:$,images:H,getTid:Z,getPid:O,getFid:q,canAction:L,getTopicTags:V,hasNoMoreData:P,loadTopic:E,loadAddedTopic:N,loadMoreComments:Y,handleDelFavTopic:K,handleAddFavTopic:G,handleAddLikeTopic:Q,imageInfo:J,loadImageDetail:X}=I();function ee(e,t){R.value.bindReplyAuthor(e,t)}async function te(){const e=Z.value,t=J.imageId;e&&t?(F("image-form-loaded",(()=>{S(t,e),k("image-form-loaded")})),j.push({path:"/sd/create"})):U("找不到生图参数！","error","vab-hey-message-error")}async function ae(){await navigator.clipboard.writeText(J.imageLog),M.value=!0,setTimeout((()=>{M.value=!1}),2e3)}function ie(e){J.imageIndex=e,J.imageId=H.value[e].id,X()}function oe(e,t){A.value.showDialog(e,t)}return(e,t)=>{const v=c.Z,y=l.Dv,b=r.vs,S=(0,d.up)("ArrowDownBold"),F=n.gn,k=s.ElButton,x=(0,d.up)("Position"),U=(0,d.up)("CopyDocument"),I=o.Q0,C=i.dq;return(0,d.wg)(),(0,d.iD)("div",W,[(0,d.Wm)(C,{gutter:20},{default:(0,d.w5)((()=>[(0,d.Wm)(y,{lg:16,md:12,sm:24,xl:16,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{shadow:"hover"},{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(p["default"]),{images:(0,m.SU)(H),"image-index":(0,m.SU)(J).imageIndex,onChange:ie},null,8,["images","image-index"])])),_:1})])),_:1}),(0,d.Wm)(y,{lg:8,md:12,sm:24,xl:8,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{shadow:"hover"},{default:(0,d.w5)((()=>[(0,d._)("div",T,[(0,d.Wm)((0,m.SU)(u["default"]),{topic:(0,m.SU)($),"can-action":(0,m.SU)(L),tags:(0,m.SU)(V)},null,8,["topic","can-action","tags"]),(0,d.Wm)((0,m.SU)(g["default"]),{topic:(0,m.SU)($),"can-action":(0,m.SU)(L),onDelFav:(0,m.SU)(K),onAddFav:(0,m.SU)(G),onAddLike:(0,m.SU)(Q),onReport:t[0]||(t[0]=e=>oe((0,m.SU)(O),(0,m.SU)(q)))},null,8,["topic","can-action","onDelFav","onAddFav","onAddLike"]),(0,d._)("div",z,[(0,d._)("div",D,[(0,d.Wm)(b,{src:(0,m.SU)(a)},null,8,["src"])]),(0,d.Wm)((0,m.SU)(f["default"]),{ref_key:"topicFormRef",ref:R,tid:(0,m.SU)(Z),onReload:(0,m.SU)(N)},null,8,["tid","onReload"])]),(0,d.Wm)((0,m.SU)(h["default"]),{comments:(0,m.SU)($).comments,"no-more":(0,m.SU)(P),onReply:ee,onReport:oe,onReload:(0,m.SU)(E),onLoadmore:(0,m.SU)(Y)},null,8,["comments","no-more","onReload","onLoadmore"]),(0,d.Wm)(C,{class:"mb-4"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{type:"primary"},{default:(0,d.w5)((()=>[(0,d.Wm)(F,{class:"el-icon--right",size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(S)])),_:1}),(0,d.Uk)(" 生图信息 ")])),_:1}),(0,d.Wm)(k,{type:"success",onClick:te},{default:(0,d.w5)((()=>[(0,d.Wm)(F,{class:"el-icon--right",style:{color:"white"},size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(x)])),_:1}),(0,d.Uk)(" 做同款 ")])),_:1}),(0,d.Wm)(I,{ref_key:"copyTooltipRef",ref:B,visible:(0,m.SU)(M),effect:"dark",content:"已复制",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{type:"info",onClick:ae},{default:(0,d.w5)((()=>[(0,d.Wm)(F,{class:"el-icon--right",size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(U)])),_:1}),(0,d.Uk)(" 复制 ")])),_:1})])),_:1},8,["visible"])])),_:1})]),(0,d.Wm)((0,m.SU)(w["default"]),{detail:(0,m.SU)(J).imageDetail},null,8,["detail"]),(0,d.Wm)((0,m.SU)(_["default"]),{ref_key:"reportDialogRef",ref:A},null,512)])),_:1})])),_:1})])),_:1})])}}};function R(e){e.__source="src/views/topic/detail.vue"}var A=a(83744);"function"===typeof R&&R(j);const B=(0,A.Z)(j,[["__scopeId","data-v-5173cf04"]]);var M=B},27750:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(30032),o=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),n=a(2262),r=a(3577),l=a(22201),c=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,n.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,i)=>{clearInterval(t),i()})),(t,l)=>{const c=o.vk,d=i.Kf;return(0,s.wg)(),(0,s.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(c,{key:0,animated:"",loading:(0,n.SU)(a),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,r.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var m=a(83744);"function"===typeof d&&d(c);const u=(0,m.Z)(c,[["__scopeId","data-v-391150ea"]]);var p=u}}]);