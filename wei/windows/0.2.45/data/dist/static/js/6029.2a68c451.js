/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-26 18:49:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6029,9527,3274],{36536:function(e,t,a){a.d(t,{m:function(){return p}});var i=a(93457),s=a(31794),r=a(96486),o=a.n(r),n=a(47720);function l(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function c(e){return e.map((e=>{const t=e.url;return t}))}function d(e){return e.url?e.url:""}function m(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const a=t.map((t=>{const a=e.find((e=>e.name===t.name));if(!a)return{};const i={...a,min:a.weight.min,max:a.weight.max,weight:t.weight};return i}));return a.filter((e=>e.title))}const p=(0,n.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let a=0;switch(e.formType){case"hdrepaire":a=parseInt(t["1"]);break;case"adetailer":a=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(a=parseInt(t[e.basicForm.batch_size]));break}return a},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,a]=e,i=o().cloneDeep(a);i.name=t,i.checked=!1;const[s,r,n]=i.weight;return i.weight={min:s,max:r,value:n},i}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:a,n_iter:i,imageSize:s,samplerMethod:r,samplerStep:o,CFGScale:n,clipSkip:l,BatchsSizeScore:c}){const d=Object.entries(e).map((e=>{const[t,a]=e;return a.key=t,a})),m=this.formatLoraStyle(t),u={Checkpoints:d,loraStyle:m,sdVae:a,n_iter:i.slice(0,i.length-1),imageSize:s,imageSizeCustom:{...this.getCustomImageSizeParams(s)},samplerMethod:r,samplerStep:{min:o[0]??1,max:o[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:l[0]??1,max:l[1]??12},txtCredits:c.credittxt2img,imageSredits:c.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(d[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=a["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=i[i.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=o[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=l[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:a,denoisingStrength:i,BatchsSizeScore:s}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:a[0],max:a[1]},denoisingStrength:{min:i[0],max:i[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:s.creditHD};this.hdrepaireOptions=r;const o=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=o[0],this.hdrepaireForm.hr_resize_y=o[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=a[2],this.hdrepaireForm.denoising_strength=i[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:a,adMaskBlur:i,adDenoisingStrength:s,BatchsSizeScore:r}){const o=this.formatLoraStyle(t),n={adModel:e,loraStyle:o,adConfidence:{min:a[0],max:a[1]},adMaskBlur:{min:i[0],max:i[1]},adDenoisingStrength:{min:s[0],max:s[1]},credits:r.creditAD};this.adetailerOptions=n,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=a[2],this.adetailerForm.ad_dilate_erode=i[2],this.adetailerForm.ad_denoising_strength=s[2]},load(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:a,src:i}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${a}`),e.extra=r,e.url=i,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const a=t.override_settings.sd_model_checkpoint,i=this.basicOptions.Checkpoints.find((e=>e.key===a));i?this.setSdModel(i):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[a,i]=e;return i[0]==t.width&&i[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=m(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:a}}=await(0,i.YU)(e,t);this.setFormData(e,a)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=d(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=l(e.lora_styles),e.base_image=d(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=l(e.lora_styles),e.init_images=c(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,i.p$)(e)}}})},31794:function(e,t,a){function i(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(){if(2==i.readyState){const e=new Image;e.src=i.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return i},x:function(){return s}})},63877:function(e,t,a){a.d(t,{Nb:function(){return r},jQ:function(){return i},jl:function(){return s}});const i={message:[{required:!0,message:"评论内容必填",trigger:"blur"}]},s={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},r={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},49527:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=a(66252),s=a(3577),r=a(2262);const o={class:"box"};var n={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(e){const t=e,a=(0,i.Fl)((()=>{const e={fontSize:t.size};return t.color&&(e.color=t.color),e}));return(t,n)=>{const l=(0,i.up)("vab-icon");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(l,{icon:e.icon,style:(0,s.j5)((0,r.SU)(a)),class:"icon"},null,8,["icon","style"]),(0,i._)("span",{style:(0,s.j5)((0,r.SU)(a))},(0,s.zw)(e.text),5)])}}};function l(e){e.__source="src/components/IconText/index.vue"}var c=a(83744);"function"===typeof l&&l(n);const d=(0,c.Z)(n,[["__scopeId","data-v-55dcc2f6"]]);var m=d},64424:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var i=a(14181),s=(a(3241),a(33828),a(10661)),r=(a(35095),a(66252)),o=a(2262),n=a(3577),l=a(49527),c=a(34339),d=a(47720);const m={class:"info-box"};var u={__name:"actions",emits:["reply","report"],setup(e,{emit:t}){const a=(0,c.o)(),{extraInfo:u,favId:p,likeId:f,canAction:g,getPid:_}=(0,d.Jk)(a),{handleDelFavTopic:h,handleAddFavTopic:v,handleAddLikeTopic:w}=a;async function y(){t("report",_.value,u.value.fid)}return(e,t)=>{const a=s.Q0,c=(0,r.up)("Bell"),d=i.gn;return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(a,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,o.SU)(p)>0?((0,r.wg)(),(0,r.j4)((0,o.SU)(l["default"]),{key:0,icon:"star-fill",text:(0,o.SU)(u).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,o.SU)(h)},null,8,["text","onClick"])):((0,r.wg)(),(0,r.j4)((0,o.SU)(l["default"]),{key:1,icon:"star-line",text:(0,o.SU)(u).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,o.SU)(v)},null,8,["text","onClick"]))])])),_:1}),(0,r.Wm)(a,{class:"box-item",effect:"dark",content:(0,o.SU)(g)?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,o.SU)(f)>0?((0,r.wg)(),(0,r.j4)((0,o.SU)(l["default"]),{key:0,icon:"heart-3-fill",text:(0,o.SU)(u).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,r.wg)(),(0,r.j4)((0,o.SU)(l["default"]),{key:1,icon:"heart-3-line",text:(0,o.SU)(u).recommend_add,class:(0,n.C_)(["icon",(0,o.SU)(g)?"cursor-pointer":"cursor-not-allowed"]),onClick:(0,o.SU)(w)},null,8,["text","class","onClick"]))])])),_:1},8,["content"]),(0,r.Wm)(a,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l["default"]),{icon:"chat-2-line",text:(0,o.SU)(u).replies,class:"icon"},null,8,["text"])])),_:1}),(0,r.Wm)(a,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:y},{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})])}}};function p(e){e.__source="src/views/topic/components/actions.vue"}var f=a(83744);"function"===typeof p&&p(u);const g=(0,f.Z)(u,[["__scopeId","data-v-586c818c"]]);var _=g},30372:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=a(20129),s=(a(3241),a(69840),a(15659)),r=(a(10444),a(6589),a(57018)),o=(a(74367),a(66252)),n=a(2262),l=a(49963),c=a(63877),d=a(53580),m=a(34339),u=a(22201);const p={class:"form"};var f={__name:"form",setup(e,{expose:t}){const a=(0,o.f3)("$baseMessage"),f=(0,m.o)(),g=(0,u.yj)(),_=(0,n.qj)({queryForm:{tid:g.params.id,pid:0,message:""},showTextarea:!1,rules:{...c.jQ},topicFormRef:null,inputCommentRef:null}),{queryForm:h,topicFormRef:v,inputCommentRef:w}=(0,n.BK)(_);function y(){_.showTextarea=!0,b()}function b(){_["topicFormRef"].clearValidate(),(0,o.Y3)((()=>{w.value.focus()}))}async function S(){const e=/@\w+ /g;e.test(_.queryForm.message)?await(0,d.kA)(_.queryForm):await(0,d.NY)(_.queryForm),_.queryForm.message="",f.loadAddedTopic(),a("回复成功","success","vab-hey-message-success")}async function k(){_["topicFormRef"].validate((e=>{e&&S()}))}function F(e,t){_.showTextarea=!0,_.queryForm.pid=e,_.queryForm.message+=`@${t} `,b()}return t({bindReplyAuthor:F}),(e,t)=>{const a=r.EZ,c=i.nH,d=s.ElButton,m=i.ly;return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(m,{ref_key:"topicFormRef",ref:v,model:(0,n.SU)(h),rules:(0,n.SU)(_).rules},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(c,{prop:"message"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{ref_key:"inputCommentRef",ref:w,modelValue:(0,n.SU)(h).message,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.SU)(h).message=e),placeholder:"在这里输入评论内容",type:"textarea",maxlength:"256",rows:3,"show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(d,{type:"primary",class:"button",disabled:""===(0,n.SU)(h).message,onClick:k},{default:(0,o.w5)((()=>[(0,o.Uk)(" 评论 ")])),_:1},8,["disabled"])],512),[[l.F8,(0,n.SU)(_).showTextarea]]),(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(a,{placeholder:"在这里输入评论内容",onFocus:y})],512),[[l.F8,!(0,n.SU)(_).showTextarea]])])),_:1},8,["model","rules"])])}}};function g(e){e.__source="src/views/topic/components/form.vue"}var _=a(83744);"function"===typeof g&&g(f);const h=(0,_.Z)(f,[["__scopeId","data-v-6579f080"]]);var v=h},48634:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var i=a(69950),s=(a(3241),a(82123),a(19615),a(57658),a(66252)),r=a(2262),o=a(3577),n=a(65781),l=a(34339),c=a(47720);const d={class:"timeline-container"};var m=(0,s.aZ)({__name:"generate",setup(e){const t=(0,l.o)(),{imageDetail:a}=(0,c.Jk)(t),m=(0,s.Fl)((()=>{const e=a.value.override_settings&&a.value.override_settings.sd_model_checkpoint?a.value.override_settings.sd_model_checkpoint:"",t=[{content:"基础模型",timestamp:e,size:"large",type:"primary",icon:n.MoreFilled}];if(a.value.lora_styles&&a.value.lora_styles.length>0){const e=a.value.lora_styles.map((e=>e.name));t.push({content:"LoRA",timestamp:e.join(","),color:"#2f9bff"})}a.value.prompt_words&&t.push({content:"创意描述",timestamp:a.value.prompt_words,color:"#46a6ff"}),a.value.negative_prompt_words&&t.push({content:"排除词",timestamp:a.value.negative_prompt_words,type:"primary",hollow:!0,color:"#5db1ff"});const i=[{content:"采样算法(Sampler)",timestamp:a.value.sampler_index,color:"#74bcff"},{content:"迭代步数(Steps)",timestamp:`${a.value.num_samples}`,color:"#8cc8ff"},{content:"创意描述词相关性(CFG Scale)",timestamp:`${a.value.cfg_scale}`,color:"#a3d3ff"},{content:"随机种子(Seed)",timestamp:`${a.value.seed}`,color:"#badeff "},{content:"尺寸",timestamp:`${a.value.width}x${a.value.height}`,color:"#d1e9ff"},{content:"Clip Skip",timestamp:`${a.value.clip_skip}`,color:"#e8f4ff"}];return t.push(...i),t}));return(e,t)=>{const a=i._T,n=i.rJ;return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(m),((e,t)=>((0,s.wg)(),(0,s.j4)(a,{key:t,icon:e.icon,type:e.type,color:e.color,size:e.size,hollow:e.hollow,timestamp:e.timestamp},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.content),1)])),_:2},1032,["icon","type","color","size","hollow","timestamp"])))),128))])),_:1})])}}});function u(e){e.__source="src/views/topic/components/generate.vue"}var p=a(83744);"function"===typeof u&&u(m);const f=(0,p.Z)(m,[["__scopeId","data-v-e538816c"]]);var g=f},52308:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var i=a(27750),s=a(25917),r=(a(3241),a(27109),a(61684),a(57122)),o=(a(69540),a(66252)),n=a(2262),l=a(34339),c=a(47720);const d={class:"image-box"};var m={__name:"images",setup(e){const t=(0,l.o)(),{imageIndex:a,imageId:m,getTopicImages:u,getTopicImagesMaxHeight:p}=(0,c.Jk)(t),f=(0,o.Fl)((()=>u.value.length<=1?"never":"always"));async function g(e,a){m.value=u.value[e].id,t.loadImageDetail()}return(e,t)=>{const l=r.F8,c=s.B6,m=s.$J,_=i.Z;return(0,o.wg)(),(0,o.j4)(_,{shadow:"hover"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{height:(0,n.SU)(p)+"px",autoplay:!1,"initial-index":(0,n.SU)(a),arrow:(0,n.SU)(f),"indicator-position":(0,n.SU)(u).length>1?"":"none",onChange:g},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(u),(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id},{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(l,{src:e.image},null,8,["src"])])])),_:2},1024)))),128))])),_:1},8,["height","initial-index","arrow","indicator-position"])])),_:1})}}};function u(e){e.__source="src/views/topic/components/images.vue"}var p=a(83744);"function"===typeof u&&u(m);const f=(0,p.Z)(m,[["__scopeId","data-v-f95dd8da"]]);var g=f},1917:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var i=a(73481),s=(a(3241),a(62029),a(15659)),r=(a(10444),a(20129)),o=(a(69840),a(57018)),n=(a(74367),a(6589),a(47820)),l=(a(50986),a(61715),a(66252)),c=a(2262),d=a(53580),m=a(63877);const u={class:"dialog-footer"};var p={__name:"report",setup(e,{expose:t}){const a=(0,l.f3)("$baseMessage"),p=["垃圾广告","攻击骚扰","违法违规","色情低俗","不实信息","抄袭侵权","其它"],f={report_select:"",message:"",rid:0,fid:0},g=(0,c.qj)({queryForm:{...f},rules:{...m.jl},dialogVisible:!1,formRef:null}),{queryForm:_,rules:h,dialogVisible:v,formRef:w}=(0,c.BK)(g);function y(e,t){g.dialogVisible=!0,_.value.rid=e,_.value.fid=t}function b(){g["formRef"].validate((async e=>{if(e){const e=await(0,d.yo)(_.value);a(e.msg,"success","vab-hey-message-success"),g.queryForm={...f},g.dialogVisible=!1}}))}return t({showDialog:y}),(e,t)=>{const a=n.BT,d=n.km,m=r.nH,f=o.EZ,g=r.ly,y=s.ElButton,S=i.d0;return(0,l.wg)(),(0,l.j4)(S,{modelValue:(0,c.SU)(v),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,c.dq)(v)?v.value=e:null),title:"举报帖子",width:"30%"},{footer:(0,l.w5)((()=>[(0,l._)("span",u,[(0,l.Wm)(y,{onClick:t[2]||(t[2]=e=>v.value=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(y,{type:"primary",onClick:b},{default:(0,l.w5)((()=>[(0,l.Uk)("确认")])),_:1})])])),default:(0,l.w5)((()=>[(0,l.Wm)(g,{ref_key:"formRef",ref:w,model:(0,c.SU)(_),rules:(0,c.SU)(h)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{prop:"report_select"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:(0,c.SU)(_).report_select,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(_).report_select=e),placeholder:"举报类型"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(p,(e=>(0,l.Wm)(a,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(m,{prop:"message"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:(0,c.SU)(_).message,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(_).message=e),rows:3,type:"textarea",placeholder:"举报内容"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};function f(e){e.__source="src/views/topic/components/report.vue"}"function"===typeof f&&f(p);const g=p;var _=g},60180:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var i=a(57534),s=(a(3241),a(92471),a(15659)),r=(a(10444),a(77669)),o=(a(95774),a(66252)),n=a(2262),l=a(3577),c=a(15904),d=a(34339),m=a(15790),u=a(47720);const p={key:0,class:"item"},f={class:"row"},g={class:"name"},_={class:"author"},h=["innerHTML"],v={key:0},w={class:"content"},y={class:"tags-box"};var b={__name:"topic",setup(e){const t=(0,d.o)(),a=(0,m.L)(),{canAction:b,getTopicUserId:S,getTopicTags:k}=(0,u.Jk)(t),F=(0,o.Fl)((()=>(0,c.x)(t.detail))),U=(0,o.Fl)((()=>parseInt(t.extraInfo.follow_record)>0));async function x(){await a.handleAddFollowUser(S.value),t.extraInfo.follow_record=1}async function C(){await a.handleDelFollowUser(S.value),t.extraInfo.follow_record=0}return(e,t)=>{const a=r.vs,c=(0,o.up)("router-link"),d=(0,o.up)("vab-icon"),m=s.ElButton,u=i.Ks;return(0,n.SU)(F)?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",f,[(0,o.Wm)(c,{to:(0,n.SU)(F).author_route},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{src:(0,n.SU)(F).avatar},null,8,["src"])])),_:1},8,["to"]),(0,o._)("div",g,[(0,o.Wm)(c,{to:(0,n.SU)(F).author_route},{default:(0,o.w5)((()=>[(0,o._)("div",_,(0,l.zw)((0,n.SU)(F).author),1)])),_:1},8,["to"]),(0,o._)("div",{innerHTML:(0,n.SU)(F).dateline},null,8,h)]),(0,n.SU)(b)?((0,o.wg)(),(0,o.iD)("div",v,[(0,n.SU)(U)?((0,o.wg)(),(0,o.j4)(m,{key:1,round:"",type:"warning",size:"small",onClick:C},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{icon:"group-line"}),(0,o.Uk)(" 取消关注 ")])),_:1})):((0,o.wg)(),(0,o.j4)(m,{key:0,round:"",type:"primary",size:"small",onClick:x},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{icon:"group-line"}),(0,o.Uk)(" 关注 ")])),_:1}))])):(0,o.kq)("",!0)]),(0,o._)("div",w,(0,l.zw)((0,n.SU)(F).subject),1),(0,o._)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,n.SU)(k),(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,to:{path:"/index",query:{id:e.id}}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{type:"info"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])])):(0,o.kq)("",!0)}}};function S(e){e.__source="src/views/topic/components/topic.vue"}var k=a(83744);"function"===typeof S&&S(b);const F=(0,k.Z)(b,[["__scopeId","data-v-56191dbb"]]);var U=F},73933:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var i=a(27750),s=a(73632),r=(a(3241),a(74965),a(10661)),o=(a(35095),a(15659)),n=(a(10444),a(14181)),l=(a(33828),a(77669)),c=(a(95774),a(22040)),d=(a(99426),a(57658),a(66252)),m=a(2262),u=a(60180),p=a(52308),f=a(64424),g=a(30372),_=a(22573),h=a(1917),v=a(48634),w=a(36536),y=a(15790),b=a(34339),S=a(47720),k=a(22201);const F={class:"post-detail-container"},U={class:"topic"},x={class:"comment-form"},C={class:"avatar"};var W={__name:"detail",setup(e){const t=(0,y.L)(),a=(0,b.o)(),{getAvatar:W}=(0,S.Jk)(t),{imageId:I,imageLog:z}=(0,S.Jk)(a),T=(0,w.m)(),{getImageDetailResetParams:D}=T,j=(0,d.f3)("$sub"),R=(0,d.f3)("$unsub"),q=(0,d.f3)("$baseMessage"),B=(0,k.yj)(),M=(0,k.tv)();(0,d.bv)((()=>{a.setTopic(B.params.id),a.loadTopic(B.query.image_id)})),(0,d.Ah)((()=>{a.$reset()}));const H=(0,m.iH)(null),V=(0,m.iH)(null),$=(0,m.iH)(null),A=(0,m.iH)(!1);function O(e,t){H.value.bindReplyAuthor(e,t)}async function Z(e,t){V.value.showDialog(e,t)}async function P(){const e=a.getTid,t=a.getImageId;e&&t?(j("image-form-loaded",(()=>{D(t,e),R("image-form-loaded")})),M.push({path:"/sd/create"})):q("找不到生图参数！","error","vab-hey-message-error")}async function E(){await navigator.clipboard.writeText(z.value),A.value=!0,setTimeout((()=>{A.value=!1}),2e3)}return(e,t)=>{const a=c.Dv,w=l.vs,y=(0,d.up)("ArrowDownBold"),b=n.gn,S=o.ElButton,k=(0,d.up)("Position"),I=(0,d.up)("CopyDocument"),z=r.Q0,T=s.dq,D=i.Z;return(0,d.wg)(),(0,d.iD)("div",F,[(0,d.Wm)(T,{gutter:20},{default:(0,d.w5)((()=>[(0,d.Wm)(a,{lg:16,md:12,sm:24,xl:16,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(p["default"]))])),_:1}),(0,d.Wm)(a,{lg:8,md:12,sm:24,xl:8,xs:24},{default:(0,d.w5)((()=>[(0,d.Wm)(D,{shadow:"hover"},{default:(0,d.w5)((()=>[(0,d._)("div",U,[(0,d.Wm)((0,m.SU)(u["default"])),(0,d.Wm)((0,m.SU)(f["default"]),{onReport:Z}),(0,d._)("div",x,[(0,d._)("div",C,[(0,d.Wm)(w,{src:(0,m.SU)(W)},null,8,["src"])]),(0,d.Wm)((0,m.SU)(g["default"]),{ref_key:"topicFormRef",ref:H},null,512)]),(0,d.Wm)((0,m.SU)(_["default"]),{onReply:O,onReport:Z}),(0,d.Wm)(T,{class:"mb-4"},{default:(0,d.w5)((()=>[(0,d.Wm)(S,{type:"primary"},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{class:"el-icon--right",size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(y)])),_:1}),(0,d.Uk)(" 生图信息 ")])),_:1}),(0,d.Wm)(S,{type:"success",onClick:P},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{class:"el-icon--right",style:{color:"white"},size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(k)])),_:1}),(0,d.Uk)(" 做同款 ")])),_:1}),(0,d.Wm)(z,{ref_key:"copyTooltipRef",ref:$,visible:(0,m.SU)(A),effect:"dark",content:"已复制",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(S,{type:"info",onClick:E},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{class:"el-icon--right",size:"large"},{default:(0,d.w5)((()=>[(0,d.Wm)(I)])),_:1}),(0,d.Uk)(" 复制 ")])),_:1})])),_:1},8,["visible"])])),_:1})]),(0,d.Wm)((0,m.SU)(v["default"])),(0,d.Wm)((0,m.SU)(h["default"]),{ref_key:"reportDialogRef",ref:V},null,512)])),_:1})])),_:1})])),_:1})])}}};function I(e){e.__source="src/views/topic/detail.vue"}var z=a(83744);"function"===typeof I&&I(W);const T=(0,z.Z)(W,[["__scopeId","data-v-389b400c"]]);var D=T},27750:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(30032),s=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),o=a(2262),n=a(3577),l=a(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,o.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,i)=>{clearInterval(t),i()})),(t,l)=>{const c=s.vk,d=i.Kf;return(0,r.wg)(),(0,r.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,o.SU)(a),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,n.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var m=a(83744);"function"===typeof d&&d(c);const u=(0,m.Z)(c,[["__scopeId","data-v-391150ea"]]);var p=u}}]);