/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-09 10:08:45
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4098,7965],{93457:function(e,t,a){a.d(t,{Ix:function(){return n},Pc:function(){return c},R1:function(){return s},Wl:function(){return u},YU:function(){return m},_5:function(){return d},p$:function(){return r},rt:function(){return l},ss:function(){return o}});var i=a(92325);function s(){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const a=new FormData;return a.append("Filedata",e.file),(0,i.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...t})}function o(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function l(e={}){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function d(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function c(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function u(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,a){a.d(t,{m:function(){return p}});var i=a(93457),s=a(31794),r=a(96486),n=a.n(r),o=a(47720);function l(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function d(e){return e.map((e=>{const t=e.url;return t}))}function m(e){return e.url?e.url:""}function c(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const a=t.map((t=>{const a=e.find((e=>e.name===t.name));if(!a)return{};const i={...a,min:a.weight.min,max:a.weight.max,weight:t.weight};return i}));return a.filter((e=>e.title))}const p=(0,o.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let a=0;switch(e.formType){case"hdrepaire":a=parseInt(t["1"]);break;case"adetailer":a=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(a=parseInt(t[e.basicForm.batch_size]));break}return a},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,a]=e,i=n().cloneDeep(a);i.name=t,i.checked=!1;const[s,r,o]=i.weight;return i.weight={min:s,max:r,value:o},i}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:a,n_iter:i,imageSize:s,samplerMethod:r,samplerStep:n,CFGScale:o,clipSkip:l,BatchsSizeScore:d}){const m=Object.entries(e).map((e=>{const[t,a]=e;return a.key=t,a})),c=this.formatLoraStyle(t),u={Checkpoints:m,loraStyle:c,sdVae:a,n_iter:i.slice(0,i.length-1),imageSize:s,imageSizeCustom:{...this.getCustomImageSizeParams(s)},samplerMethod:r,samplerStep:{min:n[0]??1,max:n[1]??60},CFGScale:{min:o[0]??1,max:o[1]??30},clipSkip:{min:l[0]??1,max:l[1]??12},txtCredits:d.credittxt2img,imageSredits:d.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(m[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=a["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=i[i.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=n[2]??1,this.basicForm.cfg_scale=o[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=l[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:a,denoisingStrength:i,BatchsSizeScore:s}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:a[0],max:a[1]},denoisingStrength:{min:i[0],max:i[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:s.creditHD};this.hdrepaireOptions=r;const n=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=n[0],this.hdrepaireForm.hr_resize_y=n[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=a[2],this.hdrepaireForm.denoising_strength=i[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:a,adMaskBlur:i,adDenoisingStrength:s,BatchsSizeScore:r}){const n=this.formatLoraStyle(t),o={adModel:e,loraStyle:n,adConfidence:{min:a[0],max:a[1]},adMaskBlur:{min:i[0],max:i[1]},adDenoisingStrength:{min:s[0],max:s[1]},credits:r.creditAD};this.adetailerOptions=o,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=a[2],this.adetailerForm.ad_dilate_erode=i[2],this.adetailerForm.ad_denoising_strength=s[2]},load(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:a,src:i}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${a}`),e.extra=r,e.url=i,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const a=t.override_settings.sd_model_checkpoint,i=this.basicOptions.Checkpoints.find((e=>e.key===a));i?this.setSdModel(i):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[a,i]=e;return i[0]==t.width&&i[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=c(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:a}}=await(0,i.YU)(e,t);this.setFormData(e,a)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=m(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=l(e.lora_styles),e.base_image=m(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=l(e.lora_styles),e.init_images=d(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,i.p$)(e)}}})},31794:function(e,t,a){function i(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(){if(2==i.readyState){const e=new Image;e.src=i.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return i},x:function(){return s}})},2505:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var i=a(47223),s=(a(3241),a(96624),a(57018)),r=(a(74367),a(47820)),n=(a(50986),a(61715),a(20129)),o=(a(69840),a(6589),a(57122)),l=(a(69540),a(10661)),d=(a(35095),a(66252)),m=a(2262),c=a(3577),u=a(15806),p=a(2540),h=a(36536),_=a(47720);const g=e=>((0,d.dD)("data-v-3b14078c"),e=e(),(0,d.Cn)(),e),f={class:"ADtailerFrom"},w=g((()=>(0,d._)("span",null,"基础图片",-1))),b={key:1,class:"el-card el-upload-dragger list-item"},S=g((()=>(0,d._)("div",{class:"list-item-meta"},[(0,d._)("div",{class:"list-item-meta-content-left"},[(0,d._)("ul",null,[(0,d._)("li",null,"请从任务列表选择想要操作的图片"),(0,d._)("li",null,"点击图片上的 (ADtailer修复) 按钮")])])],-1))),y=[S],F={class:"txt2imgFrom"},k=g((()=>(0,d._)("span",null,"ADetailer 模型",-1))),v=g((()=>(0,d._)("span",null,"创意描述，修复提示",-1))),x=g((()=>(0,d._)("span",null,"排除词，修复提示",-1))),U=g((()=>(0,d._)("span",null,"置信度",-1))),C=g((()=>(0,d._)("span",null,"重绘蒙版模糊",-1))),W=g((()=>(0,d._)("span",null,"重绘噪声强度",-1)));var z={__name:"adetailer",setup(e){const t=(0,h.m)(),{adetailerForm:a,adetailerOptions:g}=(0,_.Jk)(t),{adSetUploadImage:S}=t;return(e,t)=>{const h=(0,d.up)("vab-icon"),_=l.Q0,z=o.F8,I=n.nH,T=n.ly,D=r.BT,V=r.km,M=s.EZ,O=i.BM;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",f,[(0,d.Wm)(T,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[w,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">ADetailer俗称“细节修复”，一般引用与对人物脸部，手型，手指，眼睛，脚等局部的修复，譬如去除“多指”，歪嘴，多眼睛的问题</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,m.SU)(a).base_image.url?((0,d.wg)(),(0,d.j4)((0,m.SU)(u["default"]),{key:0},{image:(0,d.w5)((()=>[(0,d.Wm)(z,{src:(0,m.SU)(a).base_image.url,width:"48"},null,8,["src"])])),header:(0,d.w5)((()=>[(0,d._)("span",null,(0,c.zw)((0,m.SU)(a).base_image.title),1)])),action:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)"},onClick:t[0]||(t[0]=e=>(0,m.SU)(S)({}))})])),_:1})):((0,d.wg)(),(0,d.iD)("div",b,y))])),_:1})])),_:1})]),(0,d._)("div",F,[(0,d.Wm)(T,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[k,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">实现修复的算法模型，要好多大神实现了各具特色的修复模型，针对修复的位置专业度不一样，有的修复手指很好，有的修复眼睛很好。各位试试就能掌握。</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(V,{modelValue:(0,m.SU)(a).ad_model,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,m.SU)(a).ad_model=e),clearable:"",placeholder:"Select"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,m.SU)(g).adModel,(e=>((0,d.wg)(),(0,d.j4)(D,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(I,{label:""},{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(p["default"]),{"lora-styles":(0,m.SU)(g).loraStyle,"form-styles":(0,m.SU)(a).lora_styles},null,8,["lora-styles","form-styles"])])),_:1}),(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[v,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">与其说是创意，更不如说是修复提示，在这里可以输入修复的提示，譬如：衣服盖住手部</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(M,{modelValue:(0,m.SU)(a).ad_prompt_words,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,m.SU)(a).ad_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[x,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">输入您不想图片中出现的词，譬如原来的漫图中带了帽子挡住了半个脸部，直接输入：帽子</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(M,{modelValue:(0,m.SU)(a).ad_negative_prompt_words,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,m.SU)(a).ad_negative_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[U,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">控制模型在细节修复时的自我肯定的程度，设置越低，表示：模型，你小心点，别乱改。设置越高：模型，你大胆的改，拼命的造吧。</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(O,{modelValue:(0,m.SU)(a).ad_confidence,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,m.SU)(a).ad_confidence=e),min:(0,m.SU)(g).adConfidence.min,max:(0,m.SU)(g).adConfidence.max,step:.1},null,8,["modelValue","min","max"])])),_:1}),(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[C,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">对图像边缘进行羽化处理，使图像的边缘更加平滑、柔和，需要根据实际情况选择合适的模糊度，没有标准答案</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(O,{modelValue:(0,m.SU)(a).ad_dilate_erode,"onUpdate:modelValue":t[5]||(t[5]=e=>(0,m.SU)(a).ad_dilate_erode=e),min:(0,m.SU)(g).adMaskBlur.min,max:(0,m.SU)(g).adMaskBlur.max},null,8,["modelValue","min","max"])])),_:1}),(0,d.Wm)(I,null,{label:(0,d.w5)((()=>[W,(0,d.Wm)(_,{effect:"dark",content:'<div style="width:250px;">对图像进行更加逼真的处理，需要根据实际情况选择合适的重绘噪声强度，以达到最佳的图像效果，多试才有出到好图</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(O,{modelValue:(0,m.SU)(a).ad_denoising_strength,"onUpdate:modelValue":t[6]||(t[6]=e=>(0,m.SU)(a).ad_denoising_strength=e),min:(0,m.SU)(g).adDenoisingStrength.min,max:(0,m.SU)(g).adDenoisingStrength.max,step:.1},null,8,["modelValue","min","max"])])),_:1})])),_:1})])],64)}}};function I(e){e.__source="src/views/stablediffusion/components/adetailer.vue"}var T=a(83744);"function"===typeof I&&I(z);const D=(0,T.Z)(z,[["__scopeId","data-v-3b14078c"]]);var V=D},27750:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(30032),s=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),n=a(2262),o=a(3577),l=a(22201),d=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,n.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,i)=>{clearInterval(t),i()})),(t,l)=>{const d=s.vk,m=i.Kf;return(0,r.wg)(),(0,r.j4)(m,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(d,{key:0,animated:"",loading:(0,n.SU)(a),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function m(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof m&&m(d);const u=(0,c.Z)(d,[["__scopeId","data-v-391150ea"]]);var p=u}}]);