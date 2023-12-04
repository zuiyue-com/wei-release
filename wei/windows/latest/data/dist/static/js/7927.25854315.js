/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-12-04 16:59:46
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7927,6149,7511,1898],{93457:function(e,t,a){a.d(t,{Ix:function(){return n},Pc:function(){return c},R1:function(){return s},Wl:function(){return u},YU:function(){return m},_5:function(){return l},p$:function(){return r},rt:function(){return d},ss:function(){return o}});var i=a(92325);function s(){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const a=new FormData;return a.append("Filedata",e.file),(0,i.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...t})}function o(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e={}){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"post",data:e})}function l(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}function c(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/alltags.json",method:"get"})}function u(){return(0,i.Z)({url:"/source/plugin/stable_diffusion/template/js/magic.json",method:"get"})}},36536:function(e,t,a){a.d(t,{m:function(){return p}});var i=a(93457),s=a(31794),r=a(96486),n=a.n(r),o=a(47720);function d(e){return e.map((e=>{const t={name:e.name,weight:e.weight};return t}))}function l(e){return e.map((e=>{const t=e.url;return t}))}function m(e){return e.url?e.url:""}function c(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){const a=t.map((t=>{const a=e.find((e=>e.name===t.name));if(!a)return{};const i={...a,min:a.weight.min,max:a.weight.max,weight:t.weight};return i}));return a.filter((e=>e.title))}const p=(0,o.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait",seed:""},userExtcredits:0,basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},lora_styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},n_iter:[],txtCredits:{},imgCredits:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{},credits:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{},credits:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0},getImageCreditsMap(e){switch(e.formType){case"hdrepaire":return e.hdrepaireOptions.credits;case"adetailer":return e.adetailerOptions.credits;default:return 0===e.basicForm.init_images.length?e.basicOptions.txtCredits:e.basicOptions.imgCredits}},getImageCredit(e){const t=this.getImageCreditsMap;let a=0;switch(e.formType){case"hdrepaire":a=parseInt(t["1"]);break;case"adetailer":a=parseInt(t["1"]);break;default:t[e.basicForm.batch_size]&&(a=parseInt(t[e.basicForm.batch_size]));break}return a},getUerExtcredits(e){return e.userExtcredits}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,a]=e,i=n().cloneDeep(a);i.name=t,i.checked=!1;const[s,r,o]=i.weight;return i.weight={min:s,max:r,value:o},i}))},initCommon({userExtcredits:e}){this.userExtcredits=e},initBasic({Checkpoints:e,loraStyle:t,sdVae:a,n_iter:i,imageSize:s,samplerMethod:r,samplerStep:n,CFGScale:o,clipSkip:d,BatchsSizeScore:l}){const m=Object.entries(e).map((e=>{const[t,a]=e;return a.key=t,a})),c=this.formatLoraStyle(t),u={Checkpoints:m,loraStyle:c,sdVae:a,n_iter:i.slice(0,i.length-1),imageSize:s,imageSizeCustom:{...this.getCustomImageSizeParams(s)},samplerMethod:r,samplerStep:{min:n[0]??1,max:n[1]??60},CFGScale:{min:o[0]??1,max:o[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12},txtCredits:l.credittxt2img,imageSredits:l.creditimg2img};this.basicOptions=u;const p=u.imageSize[this.basicFormTemp.size];this.setSdModel(m[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=a["default"],this.basicForm.lora_styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.batch_size=i[i.length-1],this.basicForm.width=p[0],this.basicForm.height=p[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=n[2]??1,this.basicForm.cfg_scale=o[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=d[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:a,denoisingStrength:i,BatchsSizeScore:s}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:a[0],max:a[1]},denoisingStrength:{min:i[0],max:i[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)},credits:s.creditHD};this.hdrepaireOptions=r;const n=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=n[0],this.hdrepaireForm.hr_resize_y=n[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=a[2],this.hdrepaireForm.denoising_strength=i[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:a,adMaskBlur:i,adDenoisingStrength:s,BatchsSizeScore:r}){const n=this.formatLoraStyle(t),o={adModel:e,loraStyle:n,adConfidence:{min:a[0],max:a[1]},adMaskBlur:{min:i[0],max:i[1]},adDenoisingStrength:{min:s[0],max:s[1]},credits:r.creditAD};this.adetailerOptions=o,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.lora_styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=a[2],this.adetailerForm.ad_dilate_erode=i[2],this.adetailerForm.ad_denoising_strength=s[2]},load(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),this.initBasic(t),this.initHdrepaire(t),this.initAdetailer(t),!0}))},loadCommon(){return(0,i.R1)().then((e=>{const{body:t}=e;return this.initCommon(t),!0}))},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.url,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:a,src:i}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${a}`),e.extra=r,e.url=i,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.url,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const a=t.override_settings.sd_model_checkpoint,i=this.basicOptions.Checkpoints.find((e=>e.key===a));i?this.setSdModel(i):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[a,i]=e;return i[0]==t.width&&i[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.lora_styles=u(this.basicOptions.loraStyle,t.lora_styles),t.init_images=c(e,t.init_images),t.taskType="txt2img",this.basicFormTemp.seed=t.seed,t.seed=-1,this.basicForm={...t},this.formType="basic"},resetBaseFormSeed(){this.basicForm.seed=this.basicFormTemp.seed,this.basicFormTemp.seed=""},addBaseFormPromptWords(e){e&&(this.basicForm.prompt_words=e)},async getImageDetailResetParams(e,t=void 0){const{body:{detail:a}}=await(0,i.YU)(e,t);this.setFormData(e,a)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=m(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.lora_styles=d(e.lora_styles),e.base_image=m(e.base_image);break;case"basic":default:e={...this.basicForm},e.lora_styles=d(e.lora_styles),e.init_images=l(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,i.p$)(e)}}})},20863:function(e,t,a){a.d(t,{If:function(){return d},sP:function(){return l}});var i=a(93457),s=a(61653),r=a(26010),n=a(47720);const o=e=>{const t={"-3":"失败","-2":"任务创建中","-1":"任务等待",100:"完成 "};return t[e]??"进行中"},d=e=>e.map((e=>{const t=e,a=e.imagelist.map((e=>(e.checked=!!e.checked&&e.checked,e)));t.imagelist=a;const i=e.imagelist.map((e=>e.bigimg));t.images=i,t.collapse=e.collapse&&e.collapse.length>0?e.collapse:[],t.expired_at=t.ms_deleteTime??"任务进行中",t.created_at=(0,s.p)(1e3*t.ms_createTime);const r=parseInt(t.ms_state);return t.percentage=r<=0?0:r,t.ms_state_msg=o(t.ms_state),e.logup=parseInt(e.logup),t.log=t.log?t.log:"",t})),l=(0,n.Q_)("imageResult",{state:()=>({tasks:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),getters:{getTasks(){return d(this.tasks)},getTasksImages(){return this.getTasks.map((e=>e.imagelist)).flat()},getTasksCheckedImages(){return this.getTasksImages.filter((e=>e.checked))},getProcessingTasks(){return this.getTasks.filter((e=>-3!==e.ms_state&&(e.ms_state<100||0===e.logup)))},hasNoMoreData(){return(0,r.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total)}},actions:{async load(){return(0,i.ss)(this.queryForm).then((e=>{const{body:{list:t,page_perpage:a,page_allcount:i}}=e;return 1===this.queryForm.page?this.tasks=[...t]:this.tasks=[...this.tasks,...t],this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(i),!0}))},async loadData(){return this.queryForm.page=1,this.load()},async loadMore(){return this.queryForm.page++,this.load()},resetImagesCheck(){this.getTasksCheckedImages.forEach((e=>e.checked=!1))},async loadTasksProcess(){if(0===this.getProcessingTasks.length)return;const e=this.getProcessingTasks.map((e=>e.ms_id)),{body:{list:t}}=await(0,i.rt)({ms_ids:e});t.forEach((e=>{const t=this.getProcessingTasks.find((t=>t.ms_id==e.ms_id));t&&(t.ms_state=parseInt(e.ms_state),t.ms_deleteTime=e.ms_deleteTime,t.log=e.log,t.logup=e.logup,e.imagelist.forEach(((e,a)=>{const i=t.imagelist[a];i.pic=e.pic,i.bigimg=e.bigimg})))}))}}})},61653:function(e,t,a){a.d(t,{E:function(){return o},p:function(){return d}});var i=a(27484),s=a.n(i),r=(a(33852),a(84110)),n=a.n(r);function o(e){return s().locale("zh-cn"),s()(e).fromNow()}function d(e,t="YYYY-MM-DD HH:mm:ss"){return s()(e).format(t)}s().extend(n())},31794:function(e,t,a){function i(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(){if(2==i.readyState){const e=new Image;e.src=i.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return i},x:function(){return s}})},47511:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var i=a(45496),s=(a(3241),a(34462),a(2262)),r=a(66252),n={__name:"index",setup(e,{expose:t}){const a=(0,s.iH)(""),n=(0,s.iH)(0),o=(0,s.iH)(!1);function d(e,t){a.value=e,n.value=t,o.value=!0}function l(){o.value=!1}return t({previewImages:d}),(e,t)=>{const d=i.WZ;return(0,s.SU)(o)?((0,r.wg)(),(0,r.j4)(d,{key:0,"initial-index":(0,s.SU)(n),"url-list":(0,s.SU)(a),"hide-on-click-modal":!0,onClose:l},null,8,["initial-index","url-list"])):(0,r.kq)("",!0)}}};function o(e){e.__source="src/components/ImageViewer/index.vue"}"function"===typeof o&&o(n);const d=n;var l=d},53715:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var i=a(4350),s=(a(3241),a(91103),a(49676)),r=(a(73204),a(76128)),n=(a(74828),a(19889)),o=(a(51738),a(73632)),d=(a(74965),a(22040)),l=(a(99426),a(63176)),m=(a(40463),a(27977)),c=(a(40355),a(15659)),u=(a(79987),a(10661)),p=(a(35095),a(10444),a(14181)),g=(a(33828),a(96872),a(66252)),h=a(2262),_=a(15608),f=a(90468),w=a(47511),b=a(93457),y=a(20863),S=a(26010);function k(e){const t=(0,h.qj)({dataList:[],loadingStatus:"",loaded:!1,queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:a,loadingStatus:i,loaded:s,queryForm:r,pagination:n}=(0,h.BK)(t);async function o(){try{t.loadingStatus="loading";const{body:{list:a,page_perpage:i,page_allcount:s}}=await e();t.dataList=[...a],n.pageSize=parseInt(i),n.total=parseInt(s);const{page:r}=t.queryForm,{pageSize:o,total:d}=t.pagination;t.loadingStatus=(0,S.Gc)(r,o,d),t.loaded=!0}catch(a){t.loadingStatus=""}}return{dataList:a,loaded:s,loadingStatus:i,queryForm:r,pagination:n,loadData:o}}var F=a(33729),v=a.n(F);const x={class:"create-list-container"},C={key:0},I={key:1},U={key:1};var z={__name:"list",setup(e){const{dataList:t,loaded:a,loadingStatus:S,queryForm:F,pagination:z,loadData:T}=k(B),D=(0,h.qj)({imageType:"images",shareFormRef:null,imageViewerRef:null}),{imageType:W,shareFormRef:P,imageViewerRef:M}=(0,h.BK)(D);(0,g.wF)((()=>{T()}));const q=(0,g.Fl)((()=>j.value.map((e=>e.imagelist)).flat())),O=(0,g.Fl)((()=>q.value.map((e=>e.bigimg)).filter((e=>""!==e)))),j=(0,g.Fl)((()=>(0,y.If)(t.value))),H=(0,g.Fl)((()=>q.value.filter((e=>e.checked))));function R(){q.value.forEach((e=>e.checked=!1))}function B(){const e={...F.value,onlyfinish:1};return(0,b.ss)(e)}function Z(){H.value.forEach((e=>{v()(e.bigimg)})),R()}function E(){const e=H.value.map((e=>e.bigimg));P.value.showDialog(e)}function V(e){P.value.showDialog([e])}function L(e,t){M.value.previewImages(e,t)}return(e,t)=>{const b=m.p8,y=(0,g.up)("Download"),k=p.gn,v=c.ElButton,D=u.Q0,R=(0,g.up)("Share"),B=c.MO,Y=m.Ub,$=l.zi,G=d.Dv,K=o.dq,A=n.os,N=(0,g.up)("router-link"),Q=r.GT,J=s.R,X=i.t;return(0,g.wy)(((0,g.wg)(),(0,g.iD)("div",x,[(0,g.Wm)(G,{span:24},{default:(0,g.w5)((()=>[(0,g.Wm)($,{offset:110},{default:(0,g.w5)((()=>[(0,g.Wm)(Y,{modelValue:(0,h.SU)(W),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,h.dq)(W)?W.value=e:null)},{default:(0,g.w5)((()=>[(0,g.Wm)(b,{label:"默认平铺",name:"images"}),(0,g.Wm)(b,{label:"列表显示",name:"tasks"}),(0,g.Wm)(b,{name:"action",disabled:!0},{label:(0,g.w5)((()=>[(0,g.Wm)(B,{class:"task-actions"},{default:(0,g.w5)((()=>[(0,g.Wm)(D,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可批量下载",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(v,{type:"default",text:"",disabled:0===(0,h.SU)(H).length,onClick:Z},{default:(0,g.w5)((()=>[(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(y)])),_:1}),(0,g.Uk)(" 下载 ")])),_:1},8,["disabled"])])),_:1}),(0,g.Wm)(D,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可把选择的图片发帖，分享出去",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(v,{text:"",disabled:0===(0,h.SU)(H).length,onClick:E},{default:(0,g.w5)((()=>[(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(R)])),_:1}),(0,g.Uk)(" 分享 ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),!(0,h.SU)(a)||(0,h.SU)(q).length>0?((0,g.wg)(),(0,g.iD)("div",C,["images"===(0,h.SU)(W)?((0,g.wg)(),(0,g.j4)(K,{key:0,gutter:20},{default:(0,g.w5)((()=>[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)((0,h.SU)(q),((e,t)=>((0,g.wg)(),(0,g.j4)(G,{key:e.picid,xs:12,sm:6,md:4,lg:4,xl:3},{default:(0,g.w5)((()=>[(0,g.Wm)((0,h.SU)(f["default"]),{"image-item":e,redirect:!0,onTopic:V,onPreview:e=>L((0,h.SU)(O),t)},null,8,["image-item","onPreview"])])),_:2},1024)))),128))])),_:1})):(0,g.kq)("",!0),"tasks"===(0,h.SU)(W)?((0,g.wg)(),(0,g.iD)("div",I,[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)((0,h.SU)(j),(e=>((0,g.wg)(),(0,g.iD)("div",{key:e.ms_id},[(0,g.Wm)(K,{gutter:16,span:"24",justify:"start"},{default:(0,g.w5)((()=>[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(e.imagelist,((t,a)=>((0,g.wg)(),(0,g.j4)(G,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,g.w5)((()=>[(0,g.Wm)((0,h.SU)(f["default"]),{"image-item":t,redirect:!0,onTopic:V,onPreview:t=>L(e.images,a)},null,8,["image-item","onPreview"])])),_:2},1024)))),128))])),_:2},1024),(0,g.Wm)(A)])))),128))])):(0,g.kq)("",!0)])):((0,g.wg)(),(0,g.iD)("div",U,[(0,g.Wm)(Q,{class:"vab-data-empty"},{description:(0,g.w5)((()=>[(0,g.Uk)(" 空空如也，开始 "),(0,g.Wm)(N,{to:"/sd/create"},{default:(0,g.w5)((()=>[(0,g.Uk)("绘图")])),_:1}),(0,g.Uk)(" 吧 ")])),_:1})]))])),_:1}),(0,h.SU)(j).length>0?((0,g.wg)(),(0,g.j4)(J,{key:0,"current-page":(0,h.SU)(F).page,"onUpdate:currentPage":t[1]||(t[1]=e=>(0,h.SU)(F).page=e),layout:"prev, pager, next","page-size":(0,h.SU)(z).pageSize,total:(0,h.SU)(z).total,onCurrentChange:(0,h.SU)(T)},null,8,["current-page","page-size","total","onCurrentChange"])):(0,g.kq)("",!0),(0,g.Wm)((0,h.SU)(_["default"]),{ref_key:"shareFormRef",ref:P},null,512),(0,g.Wm)((0,h.SU)(w["default"]),{ref_key:"imageViewerRef",ref:M},null,512)])),[[X,"loading"===(0,h.SU)(S)]])}}};function T(e){e.__source="src/views/stablediffusion/list.vue"}var D=a(83744);"function"===typeof T&&T(z);const W=(0,D.Z)(z,[["__scopeId","data-v-0c967f13"]]);var P=W},27750:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(30032),s=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),n=a(2262),o=a(3577),d=a(22201),l=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,n.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,d.iS)(((e,a,i)=>{clearInterval(t),i()})),(t,d)=>{const l=s.vk,m=i.Kf;return(0,r.wg)(),(0,r.j4)(m,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(l,{key:0,animated:"",loading:(0,n.SU)(a),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function m(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof m&&m(l);const u=(0,c.Z)(l,[["__scopeId","data-v-391150ea"]]);var p=u}}]);