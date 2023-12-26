/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-26 16:51:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[468],{93457:function(e,t,i){i.d(t,{Ix:function(){return o},Pc:function(){return l},R1:function(){return s},Wl:function(){return u},YU:function(){return m},_5:function(){return c},p$:function(){return r},rt:function(){return d},ss:function(){return n}});var a=i(92325);function s(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function o(e,t){const i=new FormData;return i.append("Filedata",e.file),(0,a.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:i,...t})}function n(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e={}){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function c(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function l(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function u(){return(0,a.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,i){i.d(t,{m:function(){return p}});var a=i(93457),s=i(31794),r=i(96486),o=i.n(r),n=i(47720);function d(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function c(e){return e.map((e=>{const t=e.url;return t}))}function m(e){return e.url?e.url:""}function l(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const i=t.map((t=>{const i=e.find((e=>e.name===t.name));if(!i)return{};const a={...i,min:i.weight.min,max:i.weight.max,weight:t.weight};return a}));return i.filter((e=>e.title))}const p=(0,n.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let i=0;switch(e.formType){case"hdrepaire":i=parseInt(t["1"]);break;case"adetailer":i=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(i=parseInt(t[e.basicForm.batch_size]));break}return i},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,i]=e,a=o().cloneDeep(i);a.name=t,a.checked=!1;const[s,r,n]=a.weight;return a.weight={min:s,max:r,value:n},a}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:i,n_iter:a,imageSize:s,samplerMethod:r,samplerStep:o,CFGScale:n,clipSkip:d,BatchsSizeScore:c}){const m=Object.entries(e).map((e=>{const[t,i]=e;return i.key=t,i})),l=this.formatLoraStyle(t),u={Checkpoints:m,loraStyle:l,sdVae:i,n_iter:a.slice(0,a.length-1),imageSize:s,imageSizeCustom:{...this.getCustomImageSizeParams(s)},samplerMethod:r,samplerStep:{min:o[0]??1,max:o[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12},txtCredits:c.credittxt2img,imageSredits:c.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(m[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=i["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=a[a.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=o[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=d[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:i,denoisingStrength:a,BatchsSizeScore:s}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:i[0],max:i[1]},denoisingStrength:{min:a[0],max:a[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:s.creditHD};this.hdrepaireOptions=r;const o=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=o[0],this.hdrepaireForm.hr_resize_y=o[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=i[2],this.hdrepaireForm.denoising_strength=a[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:i,adMaskBlur:a,adDenoisingStrength:s,BatchsSizeScore:r}){const o=this.formatLoraStyle(t),n={adModel:e,loraStyle:o,adConfidence:{min:i[0],max:i[1]},adMaskBlur:{min:a[0],max:a[1]},adDenoisingStrength:{min:s[0],max:s[1]},credits:r.creditAD};this.adetailerOptions=n,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=i[2],this.adetailerForm.ad_dilate_erode=a[2],this.adetailerForm.ad_denoising_strength=s[2]},load(){return(0,a.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,a.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:i,src:a}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${i}`),e.extra=r,e.url=a,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const i=t.override_settings.sd_model_checkpoint,a=this.basicOptions.Checkpoints.find((e=>e.key===i));a?this.setSdModel(a):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[i,a]=e;return a[0]==t.width&&a[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=l(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:i}}=await(0,a.YU)(e,t);this.setFormData(e,i)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=m(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=d(e.lora_styles),e.base_image=m(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=d(e.lora_styles),e.init_images=c(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,a.p$)(e)}}})},31794:function(e,t,i){function a(e){return new Promise(((t,i)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=function(){if(2==a.readyState){const e=new Image;e.src=a.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else i()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}i.d(t,{I:function(){return a},x:function(){return s}})},26010:function(e,t,i){i.d(t,{Gc:function(){return s},Vj:function(){return a},wV:function(){return r},xV:function(){return n}});i(57658);function a(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let i="";for(let a=0;a<e;a++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}function s(e,t,i){const a=Math.ceil(i/t);return e>=a}function r(e=0){document.getElementById("image-form-scroll").scrollTo({top:e,left:0,behavior:"smooth"})}function o(e=0){document.getElementById("task-queue-scroll").scrollTo({top:e,left:0,behavior:"smooth"})}function n(e=0){r(e),o(e)}},72974:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=i(14181),s=(i(3241),i(33828),i(66252)),r=i(2262),o=i(65781);const n=e=>((0,s.dD)("data-v-0a167360"),e=e(),(0,s.Cn)(),e),d=["src"],c={key:1,class:"image-slot"},m=n((()=>(0,s._)("div",null,"加载中",-1)));var l={__name:"index",props:{item:{type:Object,default:()=>{}}},setup(e){const t=(0,r.iH)(!1);let i=!1;function n(e){i||(t.value=!0,i=!0,setTimeout((()=>{e.pic+=`&${Date.now()}`,t.value=!1}),4e3))}return(i,l)=>{const u=a.gn;return(0,r.SU)(t)?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",null,[m,(0,s.Wm)(u,{class:"icon"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,r.SU)(o.Picture))])),_:1})])])):((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.item.pic,loading:"lazy",class:"block w-full",onError:l[0]||(l[0]=t=>n(e.item))},null,40,d))}}};function u(e){e.__source="src/components/ImageImage/index.vue"}var p=i(83744);"function"===typeof u&&u(l);const h=(0,p.Z)(l,[["__scopeId","data-v-0a167360"]]);var g=h},90468:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var a=i(27750),s=i(63715),r=(i(3241),i(5508),i(91194)),o=(i(2993),i(32590),i(10661)),n=(i(35095),i(14181)),d=(i(33828),i(57658),i(66252)),c=i(2262),m=i(49124),l=i(72974),u=i(36536),p=i(26010),h=i(33729),g=i.n(h),f=i(22201);const _={class:"taskqueue-tag-group"},b={class:"taskqueue-folow"},w={class:"taskqueue-image-group"},y={class:"taskqueue-image"};var k={__name:"index",props:{imageItem:{type:Object,default:()=>{}},redirect:{type:Boolean,default:!1}},emits:["topic","preview"],setup(e,{emit:t}){const i=e,h=(0,d.f3)("$sub"),k=(0,d.f3)("$unsub"),S=(0,f.tv)(),F=(0,d.Fl)((()=>i.imageItem)),v=(0,u.m)(),{getImageDetailResetParams:I,setFormType:x,setUploadImage:C,hdSetUploadImage:W,adSetUploadImage:z}=v;async function T(e){i.redirect?(h("image-form-loaded",(()=>{I(e.picid),x("basic"),(0,p.xV)(),k("image-form-loaded")})),S.push("/sd/create")):(I(e.picid),x("basic"),(0,p.wV)())}async function U(e){const t={picid:e.picid,url:e.bigimg,title:e.title};i.redirect?(h("image-form-loaded",(()=>{C([{...t}]),x("basic"),(0,p.xV)(),k("image-form-loaded")})),S.push("/sd/create")):(C([{...t}]),x("basic"),(0,p.wV)())}async function M(e){const t={picid:e.picid,url:e.bigimg,title:e.title};i.redirect?(h("image-form-loaded",(()=>{W(t),x("hdrepaire"),(0,p.xV)(),k("image-form-loaded")})),S.push("/sd/create")):(W(t),x("hdrepaire"),(0,p.wV)())}async function D(e){const t={picid:e.picid,url:e.bigimg,title:e.title};i.redirect?(h("image-form-loaded",(()=>{z(t),x("adetailer"),(0,p.xV)(),k("image-form-loaded")})),S.push("/sd/create")):(z(t),x("adetailer"),(0,p.wV)())}function O(e){t("topic",e)}function V(e){e.replace(/(.*\/)*([^.]+\.\w+).*/gi,"$2");g()(e)}function B(){t("preview")}return(t,i)=>{const u=(0,d.up)("PictureRounded"),p=n.gn,h=o.Q0,g=(0,d.up)("Picture"),f=(0,d.up)("Edit"),k=(0,d.up)("EditPen"),S=r.QQ,v=r.Lf,I=(0,d.up)("Share"),x=(0,d.up)("Download"),C=s.ElCheckbox,W=a.Z;return(0,d.wg)(),(0,d.j4)(W,{"body-style":{padding:"0px"},shadow:"hover",class:"taskqueue-card-body"},{default:(0,d.w5)((()=>[(0,d.Wm)((0,c.SU)(m["default"]),{show:e.imageItem.checked},{mask:(0,d.w5)((()=>[(0,d._)("div",_,[(0,d.Wm)(v,{style:{width:"100%"}},{default:(0,d.w5)((()=>[(0,d.Wm)(S,null,{default:(0,d.w5)((()=>[(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"重绘",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[0]||(i[0]=t=>T(e.imageItem))},{default:(0,d.w5)((()=>[(0,d.Wm)(u)])),_:1})])),_:1}),(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"图生图",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[1]||(i[1]=t=>U(e.imageItem))},{default:(0,d.w5)((()=>[(0,d.Wm)(g)])),_:1})])),_:1}),(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"高清修复",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[2]||(i[2]=t=>M(e.imageItem))},{default:(0,d.w5)((()=>[(0,d.Wm)(f)])),_:1})])),_:1}),(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"脸部修复",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[3]||(i[3]=t=>D(e.imageItem))},{default:(0,d.w5)((()=>[(0,d.Wm)(k)])),_:1})])),_:1})])),_:1})])),_:1})]),(0,d._)("div",b,[(0,d.Wm)(v,{style:{width:"100%"}},{default:(0,d.w5)((()=>[(0,d.Wm)(S,null,{default:(0,d.w5)((()=>[(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"分享",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[4]||(i[4]=t=>O(e.imageItem.bigimg))},{default:(0,d.w5)((()=>[(0,d.Wm)(I)])),_:1})])),_:1}),(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"下载",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{onClick:i[5]||(i[5]=t=>V(e.imageItem.bigimg))},{default:(0,d.w5)((()=>[(0,d.Wm)(x)])),_:1})])),_:1}),(0,d.Wm)(h,{class:"box-item",effect:"dark",content:"选中批量下载和分享",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(C,{modelValue:(0,c.SU)(F).checked,"onUpdate:modelValue":i[6]||(i[6]=e=>(0,c.SU)(F).checked=e),label:"",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])])),default:(0,d.w5)((()=>[(0,d._)("div",w,[(0,d._)("div",y,[(0,d.Wm)((0,c.SU)(l["default"]),{item:e.imageItem,onClick:B},null,8,["item"])])])])),_:1},8,["show"])])),_:1})}}};function S(e){e.__source="src/components/ImageItem/index.vue"}var F=i(83744);"function"===typeof S&&S(k);const v=(0,F.Z)(k,[["__scopeId","data-v-413c2c1a"]]);var I=v},49124:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var a=i(66252),s=i(3577);const r={class:"image-box"};var o={__name:"index",props:{show:{type:Boolean,default:!1},useMask:{type:Boolean,default:!0}},setup(e){return(t,i)=>((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",{class:(0,s.C_)(["image-mask",{"image-show":e.show,"mask-bg-color":e.useMask}])},[(0,a.WI)(t.$slots,"mask")],2),(0,a.WI)(t.$slots,"default")]))}};function n(e){e.__source="src/components/ImageMask/index.vue"}var d=i(83744);"function"===typeof n&&n(o);const c=(0,d.Z)(o,[["__scopeId","data-v-7e91c37a"]]);var m=c},27750:function(e,t,i){i.d(t,{Z:function(){return p}});var a=i(30032),s=(i(3241),i(91154),i(97830)),r=(i(13768),i(66252)),o=i(2262),n=i(3577),d=i(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const i=(0,o.iH)(!0);return t=setTimeout((()=>{i.value=!1}),500),(0,d.iS)(((e,i,a)=>{clearInterval(t),a()})),(t,d)=>{const c=s.vk,m=a.Kf;return(0,r.wg)(),(0,r.j4)(m,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,o.SU)(i),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,n.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function m(e){e.__source="library/components/VabCard/index.vue"}var l=i(83744);"function"===typeof m&&m(c);const u=(0,l.Z)(c,[["__scopeId","data-v-391150ea"]]);var p=u}}]);