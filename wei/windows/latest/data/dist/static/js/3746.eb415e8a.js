/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-25 10:24:11
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3746,398,6362],{2505:function(e,l,a){a.r(l),a.d(l,{default:function(){return q}});var t=a(47223),n=(a(3241),a(96624),a(57018)),o=(a(74367),a(47820)),i=(a(50986),a(61715),a(20129)),s=(a(69840),a(6589),a(57122)),d=(a(69540),a(10661)),r=(a(35095),a(66252)),m=a(2262),u=a(3577),c=a(15806),p=a(2540),_=a(36536),f=a(47720);const w=e=>((0,r.dD)("data-v-3b14078c"),e=e(),(0,r.Cn)(),e),g={class:"ADtailerFrom"},b=w((()=>(0,r._)("span",null,"基础图片",-1))),h={key:1,class:"el-card el-upload-dragger list-item"},U=w((()=>(0,r._)("div",{class:"list-item-meta"},[(0,r._)("div",{class:"list-item-meta-content-left"},[(0,r._)("ul",null,[(0,r._)("li",null,"请从任务列表选择想要操作的图片"),(0,r._)("li",null,"点击图片上的 (ADtailer修复) 按钮")])])],-1))),v=[U],S={class:"txt2imgFrom"},W=w((()=>(0,r._)("span",null,"ADetailer 模型",-1))),y=w((()=>(0,r._)("span",null,"创意描述，修复提示",-1))),k=w((()=>(0,r._)("span",null,"排除词，修复提示",-1))),x=w((()=>(0,r._)("span",null,"置信度",-1))),V=w((()=>(0,r._)("span",null,"重绘蒙版模糊",-1))),C=w((()=>(0,r._)("span",null,"重绘噪声强度",-1)));var T={__name:"adetailer",setup(e){const l=(0,_.m)(),{adetailerForm:a,adetailerOptions:w}=(0,f.Jk)(l),{adSetUploadImage:U}=l;return(e,l)=>{const _=(0,r.up)("vab-icon"),f=d.Q0,T=s.F8,D=i.nH,z=i.ly,F=o.BT,q=o.km,I=n.EZ,j=t.BM;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",g,[(0,r.Wm)(z,{"label-position":"top","label-width":"100px"},{default:(0,r.w5)((()=>[(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[b,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">ADetailer俗称“细节修复”，一般引用与对人物脸部，手型，手指，眼睛，脚等局部的修复，譬如去除“多指”，歪嘴，多眼睛的问题</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,m.SU)(a).base_image.url?((0,r.wg)(),(0,r.j4)((0,m.SU)(c["default"]),{key:0},{image:(0,r.w5)((()=>[(0,r.Wm)(T,{src:(0,m.SU)(a).base_image.url,width:"48"},null,8,["src"])])),header:(0,r.w5)((()=>[(0,r._)("span",null,(0,u.zw)((0,m.SU)(a).base_image.title),1)])),action:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)"},onClick:l[0]||(l[0]=e=>(0,m.SU)(U)({}))})])),_:1})):((0,r.wg)(),(0,r.iD)("div",h,v))])),_:1})])),_:1})]),(0,r._)("div",S,[(0,r.Wm)(z,{"label-position":"top","label-width":"100px"},{default:(0,r.w5)((()=>[(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[W,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">实现修复的算法模型，要好多大神实现了各具特色的修复模型，针对修复的位置专业度不一样，有的修复手指很好，有的修复眼睛很好。各位试试就能掌握。</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(q,{modelValue:(0,m.SU)(a).ad_model,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,m.SU)(a).ad_model=e),clearable:"",placeholder:"Select"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,m.SU)(w).adModel,(e=>((0,r.wg)(),(0,r.j4)(F,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,r.Wm)(D,{label:""},{default:(0,r.w5)((()=>[(0,r.Wm)((0,m.SU)(p["default"]),{"lora-styles":(0,m.SU)(w).loraStyle,"form-styles":(0,m.SU)(a).lora_styles},null,8,["lora-styles","form-styles"])])),_:1}),(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[y,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">与其说是创意，更不如说是修复提示，在这里可以输入修复的提示，譬如：衣服盖住手部</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(I,{modelValue:(0,m.SU)(a).ad_prompt_words,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,m.SU)(a).ad_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[k,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">输入您不想图片中出现的词，譬如原来的漫图中带了帽子挡住了半个脸部，直接输入：帽子</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(I,{modelValue:(0,m.SU)(a).ad_negative_prompt_words,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,m.SU)(a).ad_negative_prompt_words=e),type:"textarea",rows:"3"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[x,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">控制模型在细节修复时的自我肯定的程度，设置越低，表示：模型，你小心点，别乱改。设置越高：模型，你大胆的改，拼命的造吧。</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(j,{modelValue:(0,m.SU)(a).ad_confidence,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,m.SU)(a).ad_confidence=e),min:(0,m.SU)(w).adConfidence.min,max:(0,m.SU)(w).adConfidence.max,step:.1},null,8,["modelValue","min","max"])])),_:1}),(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[V,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">对图像边缘进行羽化处理，使图像的边缘更加平滑、柔和，需要根据实际情况选择合适的模糊度，没有标准答案</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(j,{modelValue:(0,m.SU)(a).ad_dilate_erode,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,m.SU)(a).ad_dilate_erode=e),min:(0,m.SU)(w).adMaskBlur.min,max:(0,m.SU)(w).adMaskBlur.max},null,8,["modelValue","min","max"])])),_:1}),(0,r.Wm)(D,null,{label:(0,r.w5)((()=>[C,(0,r.Wm)(f,{effect:"dark",content:'<div style="width:250px;">对图像进行更加逼真的处理，需要根据实际情况选择合适的重绘噪声强度，以达到最佳的图像效果，多试才有出到好图</div>',placement:"top","raw-content":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(j,{modelValue:(0,m.SU)(a).ad_denoising_strength,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,m.SU)(a).ad_denoising_strength=e),min:(0,m.SU)(w).adDenoisingStrength.min,max:(0,m.SU)(w).adDenoisingStrength.max,step:.1},null,8,["modelValue","min","max"])])),_:1})])),_:1})])],64)}}};function D(e){e.__source="src/views/stablediffusion/components/adetailer.vue"}var z=a(83744);"function"===typeof D&&D(T);const F=(0,z.Z)(T,[["__scopeId","data-v-3b14078c"]]);var q=F},43726:function(e,l,a){a.r(l),a.d(l,{default:function(){return C}});var t=a(47223),n=(a(3241),a(96624),a(47820)),o=(a(50986),a(61715),a(10661)),i=(a(35095),a(20129)),s=(a(69840),a(6589),a(57122)),d=(a(69540),a(66252)),r=a(2262),m=a(3577),u=a(15806),c=a(21989),p=a(36536),_=a(47720);const f=e=>((0,d.dD)("data-v-7a348908"),e=e(),(0,d.Cn)(),e),w={class:"HDRepaireFrom"},g={key:1,class:"el-card el-upload-dragger list-item"},b=f((()=>(0,d._)("div",{class:"list-item-meta"},[(0,d._)("div",{class:"list-item-meta-content-left"},[(0,d._)("ul",null,[(0,d._)("li",null,"请从任务列表选择想要操作的图片"),(0,d._)("li",null,"点击图片上的 (高清修复) 按钮")])])],-1))),h=[b],U={class:"txt2imgFrom"},v=f((()=>(0,d._)("span",null,"高清算法",-1))),S=f((()=>(0,d._)("span",null,"高清采样次数",-1))),W=f((()=>(0,d._)("span",null,"重绘幅度",-1)));var y={__name:"hdrepaire",setup(e){const l=(0,p.m)(),{hdrepaireForm:a,hdrepaireOptions:f,isHdrepaireCustomImageSize:b}=(0,_.Jk)(l),{hdSetUploadImage:y}=l;return(e,l)=>{const p=s.F8,_=(0,d.up)("vab-icon"),k=i.nH,x=i.ly,V=o.Q0,C=n.BT,T=n.km,D=t.BM;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",w,[(0,d.Wm)(x,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{label:"基础图片"},{default:(0,d.w5)((()=>[(0,r.SU)(a).base_image.url?((0,d.wg)(),(0,d.j4)((0,r.SU)(u["default"]),{key:0},{image:(0,d.w5)((()=>[(0,d.Wm)(p,{src:(0,r.SU)(a).base_image.url,width:"48"},null,8,["src"])])),header:(0,d.w5)((()=>[(0,d._)("span",null,(0,m.zw)((0,r.SU)(a).base_image.title),1)])),action:(0,d.w5)((()=>[(0,d.Wm)(_,{icon:"delete-bin-6-line",class:"cursor-pointer",style:{color:"var(--el-color-danger)"},onClick:l[0]||(l[0]=e=>(0,r.SU)(y)({}))})])),_:1})):((0,d.wg)(),(0,d.iD)("div",g,h))])),_:1})])),_:1})]),(0,d._)("div",U,[(0,d.Wm)(x,{"label-position":"top","label-width":"100px"},{default:(0,d.w5)((()=>[(0,d.Wm)(k,{label:"放大倍数"},{default:(0,d.w5)((()=>[(0,d.Wm)((0,r.SU)(c["default"]),{size:(0,r.SU)(a).hr_scale,"onUpdate:size":l[1]||(l[1]=e=>(0,r.SU)(a).hr_scale=e),width:(0,r.SU)(a).hr_resize_x,"onUpdate:width":l[2]||(l[2]=e=>(0,r.SU)(a).hr_resize_x=e),height:(0,r.SU)(a).hr_resize_y,"onUpdate:height":l[3]||(l[3]=e=>(0,r.SU)(a).hr_resize_y=e),"image-size":(0,r.SU)(f).hrImageSize,"image-size-custom":(0,r.SU)(f).imageSizeCustom,disabled:!(0,r.SU)(b)},null,8,["size","width","height","image-size","image-size-custom","disabled"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[v,(0,d.Wm)(V,{effect:"dark",content:"使用何种图形算法实现高清化",placement:"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(T,{modelValue:(0,r.SU)(a).hr_upscaler,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,r.SU)(a).hr_upscaler=e),clearable:""},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)((0,r.SU)(f).hrUpscaler,(e=>((0,d.wg)(),(0,d.j4)(C,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[S,(0,d.Wm)(V,{effect:"dark",content:'<div style="width:250px;">采样次数越多，图像的清晰度越高，但同时计算量也会越大</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(D,{modelValue:(0,r.SU)(a).hr_second_pass_steps,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,r.SU)(a).hr_second_pass_steps=e),min:(0,r.SU)(f).hrSecondPassSteps.min,max:(0,r.SU)(f).hrSecondPassSteps.max},null,8,["modelValue","min","max"])])),_:1}),(0,d.Wm)(k,null,{label:(0,d.w5)((()=>[W,(0,d.Wm)(V,{effect:"dark",content:'<div style="width:250px;">放飞程度，在修复的时候和原图的相似关系，越小表示越相似，越大最后的图就和原图没啥关系了。</div>',placement:"top","raw-content":""},{default:(0,d.w5)((()=>[(0,d.Wm)(_,{icon:"question-line",class:"cursor-pointer"})])),_:1})])),default:(0,d.w5)((()=>[(0,d.Wm)(D,{modelValue:(0,r.SU)(a).denoising_strength,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,r.SU)(a).denoising_strength=e),min:(0,r.SU)(f).denoisingStrength.min,max:(0,r.SU)(f).denoisingStrength.max,step:.1},null,8,["modelValue","min","max"])])),_:1})])),_:1})])],64)}}};function k(e){e.__source="src/views/stablediffusion/components/hdrepaire.vue"}var x=a(83744);"function"===typeof k&&k(y);const V=(0,x.Z)(y,[["__scopeId","data-v-7a348908"]]);var C=V},58030:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var t=a(73632),n=(a(3241),a(74965),a(22040)),o=(a(99426),a(27750)),i=a(15659),s=(a(10444),a(10661)),d=(a(35095),a(86398)),r=(a(69448),a(27977)),m=(a(40355),a(96872),a(66252)),u=a(3577),c=a(49963);const p=e=>((0,m.dD)("data-v-d77bb22e"),e=e(),(0,m.Cn)(),e),_={class:"sd-creater-container"},f={class:"hidden-sm-and-up"},w={class:"image-form"},g={class:"list-item-meta"},b={id:"image-form-scroll",class:"scrollbar"},h={class:"actions"},U={class:"desc"},v=p((()=>(0,m._)("span",{class:"ml-2 mr-2"},"当前算力",-1))),S={class:"mr-2"},W=p((()=>(0,m._)("span",{class:"ml-2 mr-2"},"此次消耗",-1))),y=p((()=>(0,m._)("span",null,"算力",-1)));function k(e,l,a,p,k,x){const V=r.p8,C=r.Ub,T=(0,m.up)("txt2imgFrom"),D=(0,m.up)("hdrepaireFrom"),z=(0,m.up)("ADtailerFrom"),F=d.gi,q=(0,m.up)("vab-icon"),I=(0,m.up)("router-link"),j=s.Q0,B=i.ElButton,H=o.Z,P=n.Dv,A=(0,m.up)("Taskqueue"),M=t.dq;return(0,m.wg)(),(0,m.iD)("div",_,[(0,m._)("div",f,[(0,m.Wm)(C,{modelValue:e.topTab,"onUpdate:modelValue":l[0]||(l[0]=l=>e.topTab=l),onTabClick:e.handleTopClick},{default:(0,m.w5)((()=>[(0,m.Wm)(V,{label:"工作台",name:"form"}),(0,m.Wm)(V,{label:"生成列表",name:"result"})])),_:1},8,["modelValue","onTabClick"])]),(0,m.Wm)(M,{gutter:20,class:"sd-row"},{default:(0,m.w5)((()=>[(0,m.wy)((0,m.Wm)(P,{xs:24,sm:12,md:10,lg:10,xl:8,class:"sd-col"},{default:(0,m.w5)((()=>[(0,m.Wm)(H,{shadow:"hover",class:"sd-card"},{default:(0,m.w5)((()=>[(0,m._)("div",w,[(0,m._)("div",g,[(0,m.Wm)(C,{modelValue:e.formType,"onUpdate:modelValue":l[1]||(l[1]=l=>e.formType=l),class:"list-item-meta-tab1"},{default:(0,m.w5)((()=>[(0,m.Wm)(V,{label:"文/图生图",name:"basic"}),(0,m.Wm)(V,{label:"高清修复",name:"hdrepaire"}),(0,m.Wm)(V,{label:"细节修复",name:"adetailer"})])),_:1},8,["modelValue"])]),(0,m._)("div",b,["basic"===e.formType?((0,m.wg)(),(0,m.j4)(T,{key:0})):(0,m.kq)("",!0),"hdrepaire"===e.formType?((0,m.wg)(),(0,m.j4)(D,{key:1})):(0,m.kq)("",!0),"adetailer"===e.formType?((0,m.wg)(),(0,m.j4)(z,{key:2})):(0,m.kq)("",!0)]),(0,m._)("div",h,[(0,m._)("div",U,[v,(0,m._)("span",S,[(0,m.Wm)(F,{type:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,u.zw)(e.getUerExtcredits),1)])),_:1})]),(0,m.Wm)(j,{effect:"dark",content:"购买算力",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(I,{to:{name:"Chongzhi"}},{default:(0,m.w5)((()=>[(0,m.Wm)(q,{style:{color:"var(--el-color-danger)","padding-left":"5px"},icon:"shopping-cart-fill",class:"cursor-pointer"})])),_:1})])),_:1}),W,(0,m._)("span",null,[(0,m.Wm)(F,{type:"primary"},{default:(0,m.w5)((()=>[(0,m.Uk)((0,u.zw)(e.getImageCredit),1)])),_:1})]),y]),(0,m.Wm)(B,{id:"create-image-step4",type:"success",loading:e.loading,disabled:0===e.getImageCredit,onClick:e.handleSubmit},{default:(0,m.w5)((()=>[(0,m.wy)((0,m.Wm)(q,{icon:"bubble-chart-line",style:{fontSize:"16px"}},null,512),[[c.F8,!e.loading]]),(0,m.Uk)(" 点击生图 ")])),_:1},8,["loading","disabled","onClick"])])])])),_:1})])),_:1},512),[[c.F8,e.showTopTabPane("form")]]),(0,m.wy)((0,m.Wm)(P,{xs:24,sm:12,md:14,lg:14,xl:16,class:"sd-col"},{default:(0,m.w5)((()=>[(0,m.Wm)(H,{shadow:"hover",class:"sd-card"},{default:(0,m.w5)((()=>[(0,m.Wm)(A)])),_:1})])),_:1},512),[[c.F8,e.showTopTabPane("result")]])])),_:1})])}var x=a(28149),V=a(43726),C=a(2505),T=a(424),D=a(36536),z=a(20863),F=a(15790),q=a(26010),I=a(2262),j=a(47720),B=a(22201),H=(0,m.aZ)({name:"SdCreaterCenter",components:{txt2imgFrom:x["default"],hdrepaireFrom:V["default"],ADtailerFrom:C["default"],Taskqueue:T["default"]},setup(){const e=(0,m.f3)("$pub"),l=(0,m.f3)("$baseMessage"),a=(0,F.L)(),t=(0,z.sP)(),n=(0,D.m)(),{formType:o,getImageCredit:i,getUerExtcredits:s}=(0,j.Jk)(n),{createImage:d,getImageDetailResetParams:r}=n;(0,B.yj)();async function u(){await n.load(),e("image-form-loaded")}(0,m.wF)((()=>{u()}));const c=(0,I.qj)({loading:!1,topTab:"form",topTabClicked:!0});function p(){c.topTabClicked=!1}function _(e){return c.topTabClicked||c.topTab==e}async function f(){try{c.loading=!0;const e=await d();e.body.missinId;l(e.msg,"success","vab-hey-message-success"),t.loadData(),n.loadCommon(),a.getUserInfo(),(0,q.xV)()}catch(e){}finally{c.loading=!1}}return{...(0,I.BK)(c),formType:o,getImageCredit:i,getUerExtcredits:s,handleTopClick:p,showTopTabPane:_,handleSubmit:f}}});function P(e){e.__source="src/views/stablediffusion/create.vue"}var A=a(83744);"function"===typeof P&&P(H);const M=(0,A.Z)(H,[["render",k],["__scopeId","data-v-d77bb22e"]]);var Z=M}}]);