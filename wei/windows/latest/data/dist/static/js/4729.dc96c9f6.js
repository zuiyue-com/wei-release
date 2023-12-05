/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-05 12:36:58
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4729,5806],{93457:function(e,t,i){i.d(t,{Ix:function(){return o},Pc:function(){return l},R1:function(){return a},Wl:function(){return p},YU:function(){return m},_5:function(){return c},p$:function(){return r},rt:function(){return d},ss:function(){return n}});var s=i(92325);function a(){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function o(e,t){const i=new FormData;return i.append("Filedata",e.file),(0,s.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:i,...t})}function n(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e={}){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function c(e){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function l(){return(0,s.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function p(){return(0,s.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,i){i.d(t,{m:function(){return h}});var s=i(93457),a=i(31794),r=i(96486),o=i.n(r),n=i(47720);function d(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function c(e){return e.map((e=>{const t=e.url;return t}))}function m(e){return e.url?e.url:""}function l(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function p(e,t){const i=t.map((t=>{const i=e.find((e=>e.name===t.name));if(!i)return{};const s={...i,min:i.weight.min,max:i.weight.max,weight:t.weight};return s}));return i.filter((e=>e.title))}const h=(0,n.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let i=0;switch(e.formType){case"hdrepaire":i=parseInt(t["1"]);break;case"adetailer":i=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(i=parseInt(t[e.basicForm.batch_size]));break}return i},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,i]=e,s=o().cloneDeep(i);s.name=t,s.checked=!1;const[a,r,n]=s.weight;return s.weight={min:a,max:r,value:n},s}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:i,n_iter:s,imageSize:a,samplerMethod:r,samplerStep:o,CFGScale:n,clipSkip:d,BatchsSizeScore:c}){const m=Object.entries(e).map((e=>{const[t,i]=e;return i.key=t,i})),l=this.formatLoraStyle(t),p={Checkpoints:m,loraStyle:l,sdVae:i,n_iter:s.slice(0,s.length-1),imageSize:a,imageSizeCustom:{...this.getCustomImageSizeParams(a)},samplerMethod:r,samplerStep:{min:o[0]??1,max:o[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12},txtCredits:c.credittxt2img,imageSredits:c.creditimg2img};this.basicOptions=p;const h=p.imageSize[this.basicFormTemp.size];this.setSdModel(m[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=i["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=s[s.length-1],this.basicForm.width=h[0],this.basicForm.height=h[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=o[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=d[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:i,denoisingStrength:s,BatchsSizeScore:a}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:i[0],max:i[1]},denoisingStrength:{min:s[0],max:s[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:a.creditHD};this.hdrepaireOptions=r;const o=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=o[0],this.hdrepaireForm.hr_resize_y=o[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=i[2],this.hdrepaireForm.denoising_strength=s[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:i,adMaskBlur:s,adDenoisingStrength:a,BatchsSizeScore:r}){const o=this.formatLoraStyle(t),n={adModel:e,loraStyle:o,adConfidence:{min:i[0],max:i[1]},adMaskBlur:{min:s[0],max:s[1]},adDenoisingStrength:{min:a[0],max:a[1]},credits:r.creditAD};this.adetailerOptions=n,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=i[2],this.adetailerForm.ad_dilate_erode=s[2],this.adetailerForm.ad_denoising_strength=a[2]},load(){return(0,s.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,s.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:i,src:s}=await(0,a.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${i}`),e.extra=r,e.url=s,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const i=t.override_settings.sd_model_checkpoint,s=this.basicOptions.Checkpoints.find((e=>e.key===i));s?this.setSdModel(s):this.setSdModel(this.basicOptions.Checkpoints[0]);const a=Object.entries(this.basicOptions.imageSize).find((e=>{const[i,s]=e;return s[0]==t.width&&s[1]==t.height}));this.basicFormTemp.size=a?a[0]:"Custom",t.lora_styles=p(this.basicOptions.loraStyle,t.lora_styles),t.init_images=l(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:i}}=await(0,s.YU)(e,t);this.setFormData(e,i)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=m(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=d(e.lora_styles),e.base_image=m(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=d(e.lora_styles),e.init_images=c(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,s.p$)(e)}}})},31794:function(e,t,i){function s(e){return new Promise(((t,i)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=function(){if(2==s.readyState){const e=new Image;e.src=s.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else i()}}))}function a(e){return e.replace(/data:.+?;base64,/,"")}i.d(t,{I:function(){return s},x:function(){return a}})},15806:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var s=i(66252);const a={class:"el-card el-upload-dragger list-item"},r={class:"list-item-meta"},o={class:"list-item-meta-avatar"},n={class:"list-item-meta-content"},d={class:"card-header"},c={class:"list-item-meta-action"};function m(e,t){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s.WI)(e.$slots,"image",{},void 0,!0)]),(0,s._)("div",n,[(0,s._)("div",d,[(0,s.WI)(e.$slots,"header",{},void 0,!0)]),(0,s.WI)(e.$slots,"content",{},void 0,!0)]),(0,s._)("div",c,[(0,s.WI)(e.$slots,"action",{},void 0,!0)])])])}function l(e){e.__source="src/components/CardItem/index.vue"}var p=i(83744);const h={};"function"===typeof l&&l(h);const u=(0,p.Z)(h,[["render",m],["__scopeId","data-v-4186fb5a"]]);var g=u},84729:function(e,t,i){i.r(t),i.d(t,{default:function(){return F}});var s=i(4350),a=(i(3241),i(91103),i(57122)),r=(i(69540),i(79329)),o=(i(68984),i(66252)),n=i(2262),d=i(49963),c=i(3577),m=i(36536),l=i(15806),p=i(31794),h=i(93457),u=i(47720);const g=(0,o._)("div",{class:"el-upload__text"},[(0,o.Uk)(" 把图片拖放到这里 / "),(0,o._)("em",null,"点击这里上传")],-1),_={key:0,class:"w-full"};var f={__name:"upload",setup(e){const t=(0,m.m)(),{basicFormTemp:i,basicForm:f,hasUploadedImage:b}=(0,u.Jk)(t),{setUploadImage:w}=t,F=(0,n.iH)(null),S=(0,n.iH)([]),y=(0,o.Fl)((()=>S.value.length));(0,o.YP)(y,(async()=>{S.value.map((async e=>{const{width:t,height:i,src:s}=await(0,p.I)(e.raw),a={url:s,picid:0,uid:e.uid,percent:0,title:`图片大小 ${t}x${i}`};e.meta=a,w([a])}))}));let k=null;function v(){k&&k.abort(),F.value.clearFiles(),w([])}async function C(e,t){if(!e.msg)return void v();const{body:{picid:i,bigimg:s},msg:a}=e,{width:r,height:o}=await(0,p.I)(t.raw),n={url:s,picid:i,uid:t.uid,percent:100,title:t.meta.title??""};w([n])}async function x(e,t){v()}async function I(e){return k=new AbortController,(0,h.Ix)(e,{signal:k.signal})}return(e,t)=>{const i=r.LW,m=a.F8,p=(0,o.up)("vab-icon"),h=s.t;return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o.Wm)(i,{ref_key:"uploadRef",ref:F,"file-list":(0,n.SU)(S),"onUpdate:fileList":t[0]||(t[0]=e=>(0,n.dq)(S)?S.value=e:null),action:"http://localhost:15000/api/wwwapi.php?to=sd&modac=upload","on-success":C,"on-error":x,"http-request":I,drag:"",limit:1,"auto-upload":!0,"show-file-list":!1,class:"upload-demo"},{default:(0,o.w5)((()=>[g])),_:1},8,["file-list"]),[[d.F8,!(0,n.SU)(b)]]),(0,n.SU)(b)?((0,o.wg)(),(0,o.iD)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(f).init_images,(e=>((0,o.wg)(),(0,o.j4)((0,n.SU)(l["default"]),{key:e},{image:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(m,{src:e.url,width:"48",class:"upload-image"},null,8,["src"]),[[h,0===e.picid]])])),header:(0,o.w5)((()=>[(0,o._)("span",null,(0,c.zw)(e.title),1)])),action:(0,o.w5)((()=>[(0,o.Wm)(p,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:v})])),_:2},1024)))),128))])):(0,o.kq)("",!0)],64)}}};function b(e){e.__source="src/views/stablediffusion/components/upload.vue"}"function"===typeof b&&b(f);const w=f;var F=w}}]);