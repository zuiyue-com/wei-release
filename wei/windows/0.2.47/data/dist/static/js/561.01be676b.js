/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-27 12:10:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[561,5059],{93457:function(e,t,i){i.d(t,{Ix:function(){return o},Pc:function(){return l},R1:function(){return a},Wl:function(){return p},YU:function(){return c},_5:function(){return m},p$:function(){return r},rt:function(){return d},ss:function(){return n}});var s=i(92325);function a(){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function o(e,t){const i=new FormData;return i.append("Filedata",e.file),(0,s.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:i,...t})}function n(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e={}){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function m(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function c(e,t){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function l(){return(0,s.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,s.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,i){i.d(t,{m:function(){return u}});var s=i(93457),a=i(31794),r=i(96486),o=i.n(r),n=i(47720);function d(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function m(e){return e.map((e=>{const t=e.url;return t}))}function c(e){return e.url?e.url:""}function l(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function p(e,t){const i=t.map((t=>{const i=e.find((e=>e.name===t.name));if(!i)return{};const s={...i,min:i.weight.min,max:i.weight.max,weight:t.weight};return s}));return i.filter((e=>e.title))}const u=(0,n.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let i=0;switch(e.formType){case"hdrepaire":i=parseInt(t["1"]);break;case"adetailer":i=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(i=parseInt(t[e.basicForm.batch_size]));break}return i},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,i]=e,s=o().cloneDeep(i);s.name=t,s.checked=!1;const[a,r,n]=s.weight;return s.weight={min:a,max:r,value:n},s}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:i,n_iter:s,imageSize:a,samplerMethod:r,samplerStep:o,CFGScale:n,clipSkip:d,BatchsSizeScore:m}){const c=Object.entries(e).map((e=>{const[t,i]=e;return i.key=t,i})),l=this.formatLoraStyle(t),p={Checkpoints:c,loraStyle:l,sdVae:i,n_iter:s.slice(0,s.length-1),imageSize:a,imageSizeCustom:{...this.getCustomImageSizeParams(a)},samplerMethod:r,samplerStep:{min:o[0]??1,max:o[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12},txtCredits:m.credittxt2img,imageSredits:m.creditimg2img};this.basicOptions=p;const u=p.imageSize[this.basicFormTemp.size];this.setSdModel(c[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=i["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=s[s.length-1],this.basicForm.width=u[0],this.basicForm.height=u[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=o[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=d[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:i,denoisingStrength:s,BatchsSizeScore:a}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:i[0],max:i[1]},denoisingStrength:{min:s[0],max:s[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:a.creditHD};this.hdrepaireOptions=r;const o=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=o[0],this.hdrepaireForm.hr_resize_y=o[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=i[2],this.hdrepaireForm.denoising_strength=s[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:i,adMaskBlur:s,adDenoisingStrength:a,BatchsSizeScore:r}){const o=this.formatLoraStyle(t),n={adModel:e,loraStyle:o,adConfidence:{min:i[0],max:i[1]},adMaskBlur:{min:s[0],max:s[1]},adDenoisingStrength:{min:a[0],max:a[1]},credits:r.creditAD};this.adetailerOptions=n,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=i[2],this.adetailerForm.ad_dilate_erode=s[2],this.adetailerForm.ad_denoising_strength=a[2]},load(){return(0,s.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,s.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:i,src:s}=await(0,a.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${i}`),e.extra=r,e.url=s,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const i=t.override_settings.sd_model_checkpoint,s=this.basicOptions.Checkpoints.find((e=>e.key===i));s?this.setSdModel(s):this.setSdModel(this.basicOptions.Checkpoints[0]);const a=Object.entries(this.basicOptions.imageSize).find((e=>{const[i,s]=e;return s[0]==t.width&&s[1]==t.height}));this.basicFormTemp.size=a?a[0]:"Custom",t.lora_styles=p(this.basicOptions.loraStyle,t.lora_styles),t.init_images=l(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:i}}=await(0,s.YU)(e,t);this.setFormData(e,i)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=c(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=d(e.lora_styles),e.base_image=c(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=d(e.lora_styles),e.init_images=m(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,s.p$)(e)}}})},31794:function(e,t,i){function s(e){return new Promise(((t,i)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=function(){if(2==s.readyState){const e=new Image;e.src=s.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else i()}}))}function a(e){return e.replace(/data:.+?;base64,/,"")}i.d(t,{I:function(){return s},x:function(){return a}})},55059:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var s=i(27750),a=i(10661),r=(i(3241),i(35095),i(86398)),o=(i(69448),i(57122)),n=(i(69540),i(66252)),d=i(3577);const m={class:"model-draw-card-body"},c={class:"model-draw-image-group"},l={key:0,class:"model-draw-description-select"},p={key:1,class:"model-draw-description"};var u={__name:"mini",props:{item:{type:Object,default:()=>{}},zoom:{type:Boolean,default:!1},titleKey:{type:String,default:"title"}},setup(e){return(t,i)=>{const u=o.F8,h=r.gi,_=a.Q0,g=s.Z;return(0,n.wg)(),(0,n.j4)(g,{"body-style":{padding:"0px"},shadow:"hover",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n._)("div",c,[(0,n._)("div",{class:(0,d.C_)(["model-draw-image",{"image-zoom":e.zoom}])},[(0,n.Wm)(u,{src:e.item.pic},null,8,["src"])],2),e.item.checked?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(_,{class:"box-item",effect:"dark",content:e.item[e.titleKey],placement:"top"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{truncated:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(e.item[e.titleKey]),1)])),_:1})])),_:1},8,["content"])])):((0,n.wg)(),(0,n.iD)("div",p,[(0,n.Wm)(_,{class:"box-item",effect:"dark",content:e.item[e.titleKey],placement:"top"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{truncated:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(e.item[e.titleKey]),1)])),_:1})])),_:1},8,["content"])]))])])])),_:1})}}};function h(e){e.__source="src/components/CardItem/mini.vue"}var _=i(83744);"function"===typeof h&&h(u);const g=(0,_.Z)(u,[["__scopeId","data-v-731cabae"]]);var f=g},30561:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var s=i(54717),a=(i(3241),i(50552),i(73632)),r=(i(74965),i(22040)),o=(i(99426),i(14181)),n=(i(33828),i(47820)),d=(i(50986),i(66252)),m=i(2262),c=i(3577),l=i(55059),p=i(36536),u=i(47720);const h={class:"checkpoint-container"},_=["id"];var g=(0,d.aZ)({__name:"checkpoint",setup(e){const t=(0,p.m)(),i=(0,m.iH)(!1),{basicFormTemp:g,basicOptions:f}=(0,u.Jk)(t),{setSdModel:b}=t;function w(e){b(e),i.value=!1}return(e,t)=>{const p=n.km,u=(0,d.up)("Close"),b=o.gn,y=r.Dv,S=a.dq,k=s.zd;return(0,d.wg)(),(0,d.iD)("div",h,[(0,d.Wm)(p,{modelValue:(0,m.SU)(g).sd_model_checkpoint_name,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,m.SU)(g).sd_model_checkpoint_name=e),clearable:"",placeholder:"选择模型",onClick:t[1]||(t[1]=e=>i.value=!0)},null,8,["modelValue"]),(0,d.Wm)(k,{modelValue:(0,m.SU)(i),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,m.dq)(i)?i.value=e:null),"show-close":!1,size:"60%"},{header:(0,d.w5)((({close:e,titleId:t,titleClass:i})=>[(0,d._)("h4",{id:t,class:(0,c.C_)(i)},"基础模型",10,_),(0,d.Wm)(b,{color:"red",class:"cursor-pointer",onClick:e},{default:(0,d.w5)((()=>[(0,d.Wm)(u)])),_:2},1032,["onClick"])])),default:(0,d.w5)((()=>[(0,d.Wm)(S,{gutter:16,span:"24"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,m.SU)(f).Checkpoints,(e=>((0,d.wg)(),(0,d.j4)(y,{key:e.key,lg:4,md:4,sm:4,xl:3,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(l["default"],{item:e,"title-key":"name",onClick:t=>w(e)},null,8,["item","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])}}});function f(e){e.__source="src/views/stablediffusion/components/checkpoint.vue"}var b=i(83744);"function"===typeof f&&f(g);const w=(0,b.Z)(g,[["__scopeId","data-v-33dce036"]]);var y=w},27750:function(e,t,i){i.d(t,{Z:function(){return u}});var s=i(30032),a=(i(3241),i(91154),i(97830)),r=(i(13768),i(66252)),o=i(2262),n=i(3577),d=i(22201),m=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const i=(0,o.iH)(!0);return t=setTimeout((()=>{i.value=!1}),500),(0,d.iS)(((e,i,s)=>{clearInterval(t),s()})),(t,d)=>{const m=a.vk,c=s.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(m,{key:0,animated:"",loading:(0,o.SU)(i),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,n.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var l=i(83744);"function"===typeof c&&c(m);const p=(0,l.Z)(m,[["__scopeId","data-v-391150ea"]]);var u=p}}]);