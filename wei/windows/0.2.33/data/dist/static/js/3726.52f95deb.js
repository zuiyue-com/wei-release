/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-04 15:22:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3726,5806,210,1989],{93457:function(e,t,i){i.d(t,{Ix:function(){return n},Pc:function(){return c},R1:function(){return s},Wl:function(){return u},YU:function(){return m},_5:function(){return l},p$:function(){return r},rt:function(){return d},ss:function(){return o}});var a=i(92325);function s(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const i=new FormData;return i.append("Filedata",e.file),(0,a.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:i,...t})}function o(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e={}){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function l(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function c(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function u(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,i){i.d(t,{m:function(){return p}});var a=i(93457),s=i(31794),r=i(96486),n=i.n(r),o=i(47720);function d(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function l(e){return e.map((e=>{const t=e.url;return t}))}function m(e){return e.url?e.url:""}function c(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const i=t.map((t=>{const i=e.find((e=>e.name===t.name));if(!i)return{};const a={...i,min:i.weight.min,max:i.weight.max,weight:t.weight};return a}));return i.filter((e=>e.title))}const p=(0,o.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let i=0;switch(e.formType){case"hdrepaire":i=parseInt(t["1"]);break;case"adetailer":i=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(i=parseInt(t[e.basicForm.batch_size]));break}return i},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,i]=e,a=n().cloneDeep(i);a.name=t,a.checked=!1;const[s,r,o]=a.weight;return a.weight={min:s,max:r,value:o},a}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:i,n_iter:a,imageSize:s,samplerMethod:r,samplerStep:n,CFGScale:o,clipSkip:d,BatchsSizeScore:l}){const m=Object.entries(e).map((e=>{const[t,i]=e;return i.key=t,i})),c=this.formatLoraStyle(t),u={Checkpoints:m,loraStyle:c,sdVae:i,n_iter:a.slice(0,a.length-1),imageSize:s,imageSizeCustom:{...this.getCustomImageSizeParams(s)},samplerMethod:r,samplerStep:{min:n[0]??1,max:n[1]??60},CFGScale:{min:o[0]??1,max:o[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12},txtCredits:l.credittxt2img,imageSredits:l.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(m[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=i["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=a[a.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=n[2]??1,this.basicForm.cfg_scale=o[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=d[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:i,denoisingStrength:a,BatchsSizeScore:s}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:i[0],max:i[1]},denoisingStrength:{min:a[0],max:a[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:s.creditHD};this.hdrepaireOptions=r;const n=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=n[0],this.hdrepaireForm.hr_resize_y=n[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=i[2],this.hdrepaireForm.denoising_strength=a[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:i,adMaskBlur:a,adDenoisingStrength:s,BatchsSizeScore:r}){const n=this.formatLoraStyle(t),o={adModel:e,loraStyle:n,adConfidence:{min:i[0],max:i[1]},adMaskBlur:{min:a[0],max:a[1]},adDenoisingStrength:{min:s[0],max:s[1]},credits:r.creditAD};this.adetailerOptions=o,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=i[2],this.adetailerForm.ad_dilate_erode=a[2],this.adetailerForm.ad_denoising_strength=s[2]},load(){return(0,a.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,a.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:i,src:a}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${i}`),e.extra=r,e.url=a,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const i=t.override_settings.sd_model_checkpoint,a=this.basicOptions.Checkpoints.find((e=>e.key===i));a?this.setSdModel(a):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[i,a]=e;return a[0]==t.width&&a[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=c(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:i}}=await(0,a.YU)(e,t);this.setFormData(e,i)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=m(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=d(e.lora_styles),e.base_image=m(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=d(e.lora_styles),e.init_images=l(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,a.p$)(e)}}})},31794:function(e,t,i){function a(e){return new Promise(((t,i)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=function(){if(2==a.readyState){const e=new Image;e.src=a.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else i()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}i.d(t,{I:function(){return a},x:function(){return s}})},15806:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var a=i(66252);const s={class:"el-card el-upload-dragger list-item"},r={class:"list-item-meta"},n={class:"list-item-meta-avatar"},o={class:"list-item-meta-content"},d={class:"card-header"},l={class:"list-item-meta-action"};function m(e,t){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",r,[(0,a._)("div",n,[(0,a.WI)(e.$slots,"image",{},void 0,!0)]),(0,a._)("div",o,[(0,a._)("div",d,[(0,a.WI)(e.$slots,"header",{},void 0,!0)]),(0,a.WI)(e.$slots,"content",{},void 0,!0)]),(0,a._)("div",l,[(0,a.WI)(e.$slots,"action",{},void 0,!0)])])])}function c(e){e.__source="src/components/CardItem/index.vue"}var u=i(83744);const p={};"function"===typeof c&&c(p);const h=(0,u.Z)(p,[["render",m],["__scopeId","data-v-4186fb5a"]]);var _=h},20210:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var a=i(57018),s=(i(3241),i(74367),i(66252)),r=i(2262),n=i(3577),o=i(66443),d={__name:"index",props:{modelValue:{type:[Number,String],default:0},placeholder:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const i=e,d=(0,r.iH)(parseInt(i.modelValue));function l(){const e=parseInt(d.value);isNaN(e)?d.value=defaultVal:(d.value<i.min&&(d.value=i.min),d.value>i.max&&(d.value=i.max),t("update:modelValue",d.value))}(0,s.YP)((()=>i.modelValue),(()=>{d.value=parseInt(i.modelValue)}));const m=(0,s.Fl)((()=>""===d.value||(0,o.yH)(d.value)));return(t,i)=>{const o=a.EZ;return(0,s.wg)(),(0,s.j4)(o,{modelValue:(0,r.SU)(d),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,r.dq)(d)?d.value=e:null),modelModifiers:{number:!0},placeholder:e.placeholder,class:(0,n.C_)({"error-value":!(0,r.SU)(m)}),disabled:e.disabled,onChange:l},(0,s.Nv)({_:2},[t.$slots.prepend?{name:"prepend",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"prepend")])),key:"0"}:void 0]),1032,["modelValue","placeholder","class","disabled"])}}};function l(e){e.__source="src/components/InputNumber/index.vue"}var m=i(83744);"function"===typeof l&&l(d);const c=(0,m.Z)(d,[["__scopeId","data-v-2685ef0d"]]);var u=c},43726:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var a=i(47223),s=(i(3241),i(96624),i(47820)),r=(i(50986),i(61715),i(10661)),n=(i(35095),i(20129)),o=(i(69840),i(6589),i(57122)),d=(i(69540),i(66252)),l=i(2262),m=i(3577),c=i(15806),u=i(21989),p=i(36536),h=i(47720);const _=e=>((0,d.dD)("data-v-7a348908"),e=e(),(0,d.Cn)(),e),g={class:"HDRepaireFrom"},f={key:1,class:"el-card el-upload-dragger list-item"},b=_((()=>(0,d._)("div",{class:"list-item-meta"},[(0,d._)("div",{class:"list-item-meta-content-left"},[(0,d._)("ul",null,[(0,d._)("li",null,"请从任务列表选择想要操作的图片"),(0,d._)("li",null,"点击图片上的 (高清修复) 按钮")])])],-1))),w=[b],S={class:"txt2imgFrom"},v=_((()=>(0,d._)("span",null,"高清算法",-1))),y=_((()=>(0,d._)("span",null,"高清采样次数",-1))),F=_((()=>(0,d._)("span",null,"重绘幅度",-1)));var z={__name:"hdrepaire",setup(e){const t=(0,p.m)(),{hdrepaireForm:i,hdrepaireOptions:_,isHdrepaireCustomImageSize:b}=(0,h.Jk)(t),{hdSetUploadImage:z}=t;return(e,t)=>{const p=o.F8,h=(0,d.up)("vab-icon"),k=n.nH,x=n.ly,U=r.Q0,C=s.BT,I=s.km,W=a.BM;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",g,[(0,d.Wm)(x,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{label:"基础图片"},{default:(0,d.w5)((()=>[(0,l.SU)(i).base_image.url?((0,d.wg)(),(0,d.j4)((0,l.SU)(c["default"]),{key:0},{image:(0,d.w5)((()=>[(0,d.Wm)(p,{src:(0,l.SU)(i).base_image.url,width:"48"},null,8,["src"])])),header:(0,d.w5)((()=>[(0,d._)("span",null,(0,m.zw)((0,l.SU)(i).base_image.title),1)])),action:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)"},onClick:t[0]||(t[0]=e=>(0,l.SU)(z)({}))})])),_:1})):((0,d.wg)(),(0,d.iD)("div",f,w))])),_:1})])),_:1})]),(0,d._)("div",S,[(0,d.Wm)(x,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{label:"放大倍数"},{default:(0,d.w5)((()=>[(0,d.Wm)((0,l.SU)(u["default"]),{size:(0,l.SU)(i).hr_scale,"onUpdate:size":t[1]||(t[1]=e=>(0,l.SU)(i).hr_scale=e),width:(0,l.SU)(i).hr_resize_x,"onUpdate:width":t[2]||(t[2]=e=>(0,l.SU)(i).hr_resize_x=e),height:(0,l.SU)(i).hr_resize_y,"onUpdate:height":t[3]||(t[3]=e=>(0,l.SU)(i).hr_resize_y=e),"image-size":(0,l.SU)(_).hrImageSize,"image-size-custom":(0,l.SU)(_).imageSizeCustom,disabled:!(0,l.SU)(b)},null,8,["size","width","height","image-size","image-size-custom","disabled"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[v,(0,d.Wm)(U,{effect:"dark",content:"使用何种图形算法实现高清化",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(I,{modelValue:(0,l.SU)(i).hr_upscaler,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,l.SU)(i).hr_upscaler=e),clearable:""},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,l.SU)(_).hrUpscaler,(e=>((0,d.wg)(),(0,d.j4)(C,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[y,(0,d.Wm)(U,{effect:"dark",content:'<div style="width:250px;">采样次数越多，图像的清晰度越高，但同时计算量也会越大</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(W,{modelValue:(0,l.SU)(i).hr_second_pass_steps,"onUpdate:modelValue":t[5]||(t[5]=e=>(0,l.SU)(i).hr_second_pass_steps=e),min:(0,l.SU)(_).hrSecondPassSteps.min,max:(0,l.SU)(_).hrSecondPassSteps.max},null,8,["modelValue","min","max"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[F,(0,d.Wm)(U,{effect:"dark",content:'<div style="width:250px;">放飞程度，在修复的时候和原图的相似关系，越小表示越相似，越大最后的图就和原图没啥关系了。</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(W,{modelValue:(0,l.SU)(i).denoising_strength,"onUpdate:modelValue":t[6]||(t[6]=e=>(0,l.SU)(i).denoising_strength=e),min:(0,l.SU)(_).denoisingStrength.min,max:(0,l.SU)(_).denoisingStrength.max,step:.1},null,8,["modelValue","min","max"])])),_:1})])),_:1})])],64)}}};function k(e){e.__source="src/views/stablediffusion/components/hdrepaire.vue"}var x=i(83744);"function"===typeof k&&k(z);const U=(0,x.Z)(z,[["__scopeId","data-v-7a348908"]]);var C=U},21989:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=i(73632),s=(i(3241),i(74965),i(22040)),r=(i(99426),i(87692)),n=(i(45393),i(22411),i(66252)),o=i(2262),d=i(3577),l=i(20210);const m={key:0},c={key:1},u={class:"widthAndHeightInput"};var p={__name:"image_size",props:{imageSize:{type:Object,default:()=>{}},size:{type:[String,Number],default:""},width:{type:Number,default:0},height:{type:Number,default:0},imageSizeCustom:{type:Object,default:()=>{}},disabled:{type:Boolean,default:!1}},emits:["update:size","update:width","update:height"],setup(e,{emit:t}){const i=e,p=(0,o.iH)(i.size);async function h(e){t("update:width",e)}async function _(e){t("update:height",e)}function g(){const e=p.value;if("custom"===e.toLowerCase())t("update:width",i.imageSizeCustom.defaultWidth),t("update:height",i.imageSizeCustom.defaultHeight);else{const a=i.imageSize[e];t("update:width",a[0]),t("update:height",a[1])}t("update:size",e)}return(0,n.m0)((()=>{p.value=i.size})),(t,i)=>{const f=r.dn,b=r.KD,w=s.Dv,S=a.dq;return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n.Wm)(b,{modelValue:(0,o.SU)(p),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,o.dq)(p)?p.value=e:null),onChange:g},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.imageSize,((e,t)=>((0,n.wg)(),(0,n.j4)(f,{key:t,label:t},{default:(0,n.w5)((()=>[2===e.length?((0,n.wg)(),(0,n.iD)("div",m,(0,d.zw)(`${e[0]} * ${e[1]}`),1)):(0,n.kq)("",!0),e.length>2?((0,n.wg)(),(0,n.iD)("div",c,"自定义")):(0,n.kq)("",!0)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),(0,n._)("div",u,[(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{span:12},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(l["default"]),{value:e.width,placeholder:"请输入生图的宽度",min:e.imageSizeCustom.minWidth,max:e.imageSizeCustom.maxWidth,disabled:e.disabled,"onUpdate:modelValue":h},{prepend:(0,n.w5)((()=>[(0,n.Uk)("宽度")])),_:1},8,["value","min","max","disabled"])])),_:1}),(0,n.Wm)(w,{span:12},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(l["default"]),{value:e.height,placeholder:"请输入生图的高度",min:e.imageSizeCustom.minHeight,max:e.imageSizeCustom.maxHeight,disabled:e.disabled,"onUpdate:modelValue":_},{prepend:(0,n.w5)((()=>[(0,n.Uk)("高度")])),_:1},8,["value","min","max","disabled"])])),_:1})])),_:1})])],64)}}};function h(e){e.__source="src/views/stablediffusion/components/image_size.vue"}"function"===typeof h&&h(p);const _=p;var g=_}}]);