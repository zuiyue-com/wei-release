/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-05 14:58:34
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9040],{39040:function(e,l,a){a.r(l),a.d(l,{default:function(){return R}});var t=a(27750),n=a(10475),o=(a(3241),a(29290),a(15659)),d=(a(10444),a(12694)),u=(a(85418),a(86398)),m=(a(69448),a(57534)),i=(a(92471),a(34545)),_=(a(8780),a(66252)),r=a(3577),s=a(2262),c=a(45216);const f=e=>((0,_.dD)("data-v-56509224"),e=e(),(0,_.Cn)(),e),p={class:"table"},w=f((()=>(0,_._)("td",null,"设备名称",-1))),U=f((()=>(0,_._)("td",null,"状态",-1))),h=f((()=>(0,_._)("td",null,"GPU",-1))),V=f((()=>(0,_._)("td",null,"CPU",-1))),v=f((()=>(0,_._)("td",null,"内存",-1))),W=f((()=>(0,_._)("td",null,"硬盘",-1))),y=f((()=>(0,_._)("tr",null,[(0,_._)("td",null,"其它"),(0,_._)("td",{colspan:"3"},"Windows 11，IB卡 * 4 ??????")],-1))),b=f((()=>(0,_._)("td",null,"网络",-1))),k={colspan:"3"},S=f((()=>(0,_._)("td",null,"租金设置",-1))),g=f((()=>(0,_._)("td",null,"方式",-1))),z=f((()=>(0,_._)("td",null,"下架时间",-1))),I=f((()=>(0,_._)("td",null,"评分",-1))),x=f((()=>(0,_._)("td",null,"操作",-1))),F={colspan:"3"};var C={__name:"VersionInformation",props:{deviceInfo:{type:Object,default:()=>{}}},setup(e){const l=e,a=(0,_.Fl)((()=>l.deviceInfo.client_hardware)),f=(0,s.qj)({shareFormRef:null}),{shareFormRef:C}=(0,s.BK)(f);async function D(){C.value.showDialog()}return(l,f)=>{const j=(0,_.up)("vab-icon"),B=i.$t,R=m.Ks,q=u.gi,E=d.xk,K=o.ElButton,Z=n.Mr,G=t.Z;return(0,_.wg)(),(0,_.iD)(_.HY,null,[(0,_.Wm)(G,{class:"version-information",shadow:"hover"},{header:(0,_.w5)((()=>[(0,_.Wm)(j,{icon:"information-line"}),(0,_.Uk)(" 设备编号："+(0,r.zw)(e.deviceInfo.host_uuid)+" ",1),(0,_.Wm)(R,{class:"card-header-tag"},{default:(0,_.w5)((()=>[(0,_.Uk)(" 当前版本：V"+(0,r.zw)(l.version)+"   部署时间："+(0,r.zw)(l.lastBuildTime)+" ",1),(0,_.Wm)(B,{content:"已升级至最新版本",placement:"top-start",trigger:"hover",width:200},{reference:(0,_.w5)((()=>[(0,_.Wm)(j,{icon:"arrow-up-line"})])),_:1})])),_:1})])),default:(0,_.w5)((()=>[(0,_.Wm)(Z,null,{default:(0,_.w5)((()=>[(0,_._)("table",p,[(0,_._)("tr",null,[w,(0,_._)("td",null,[(0,_.Uk)(" 爱国者1号 "),(0,_.Wm)(j,{icon:"file-copy-2-line"})]),U,(0,_._)("td",null,[(0,_.Wm)(q,{class:"mx-1",type:"success"},{default:(0,_.w5)((()=>[(0,_.Uk)("在线")])),_:1}),(0,_.Uk)("   "),(0,_.Wm)(q,{class:"mx-1",type:"success"},{default:(0,_.w5)((()=>[(0,_.Uk)("满租")])),_:1})])]),(0,_._)("tr",null,[h,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_gpu_name)+" * "+(0,r.zw)(e.deviceInfo.host_gpu_count),1),V,(0,_._)("td",null,(0,r.zw)((0,s.SU)(a).cpu),1)]),(0,_._)("tr",null,[v,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_memony)+"G",1),W,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_disk_type_str),1)]),y,(0,_._)("tr",null,[b,(0,_._)("td",k,(0,r.zw)(e.deviceInfo.host_net_type_str)+" - "+(0,r.zw)((0,s.SU)(a).ip_info.address)+" "+(0,r.zw)((0,s.SU)(a).ip_info.wan_ip)+" "+(0,r.zw)((0,s.SU)(a).lan_ip),1)]),(0,_._)("tr",null,[S,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_hour_fee)+"元/时 "+(0,r.zw)(e.deviceInfo.host_week_fee)+"元/周 "+(0,r.zw)(e.deviceInfo.host_month_fee)+"元/月 ",1),g,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_rent_method_str),1)]),(0,_._)("tr",null,[z,(0,_._)("td",null,(0,r.zw)(e.deviceInfo.host_off_time_str),1),I,(0,_._)("td",null,[(0,_.Wm)(E,{"model-value":e.deviceInfo.host_rate,disabled:"",size:"small","text-color":"#ff9900"},null,8,["model-value"])])]),(0,_._)("tr",null,[x,(0,_._)("td",F,[(0,_.Wm)(K,{type:"primary",onClick:f[0]||(f[0]=e=>D())},{default:(0,_.w5)((()=>[(0,_.Uk)(" 出租设置 ")])),_:1}),(0,_.Wm)(K,{type:"danger"},{default:(0,_.w5)((()=>[(0,_.Uk)("关机")])),_:1})])])])])),_:1})])),_:1}),(0,_.Wm)((0,s.SU)(c["default"]),{ref_key:"shareFormRef",ref:C},null,512)],64)}}};function D(e){e.__source="src/views/gpumarket/mydevice/components/VersionInformation.vue"}var j=a(83744);"function"===typeof D&&D(C);const B=(0,j.Z)(C,[["__scopeId","data-v-56509224"]]);var R=B},45216:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var t=a(73481),n=(a(3241),a(62029),a(20129)),o=(a(69840),a(15659)),d=(a(10444),a(63715)),u=(a(5508),a(24200)),m=(a(59739),a(57018)),i=(a(74367),a(6589),a(87692)),_=(a(45393),a(22411),a(66252)),r=a(2262);const s=e=>((0,_.dD)("data-v-58bdaa48"),e=e(),(0,_.Cn)(),e),c={class:"rentsetting-form-container"},f=s((()=>(0,_._)("label",null,"天",-1))),p=s((()=>(0,_._)("label",null,"周",-1))),w=s((()=>(0,_._)("label",null,"月",-1))),U=s((()=>(0,_._)("label",null,"小时",-1))),h=s((()=>(0,_._)("label",null,"天",-1))),V=s((()=>(0,_._)("label",null,"周",-1))),v=s((()=>(0,_._)("label",null,"月",-1))),W={class:"flex justify-center w-full"};var y={__name:"deviceRentSettingForm",setup(e,{expose:l}){const a=(0,r.qj)({dialogFormVisible:!1,form:{is_lend:1,lend_type:"machine",price_rule:"custom",machine:{day:"",week:"",month:"",year:""},container:{hour:"",day:"",week:"",month:""},on_date:"",off_date:"",agree:!0}}),s=(0,_.Fl)((()=>{const{lend_type:e,price_rule:l}=a.form;return["machine","both"].includes(e)&&"custom"===l})),y=(0,_.Fl)((()=>{const{lend_type:e,price_rule:l}=a.form;return["container","both"].includes(e)&&"custom"===l})),{dialogFormVisible:b,form:k}=(0,r.BK)(a);async function S(){a.dialogFormVisible=!0}return l({showDialog:S}),(e,l)=>{const a=i.dn,S=i.KD,g=n.nH,z=m.EZ,I=u.iJ,x=d.ElCheckbox,F=o.ElButton,C=n.ly,D=t.d0;return(0,_.wg)(),(0,_.iD)("div",c,[(0,_.Wm)(D,{modelValue:(0,r.SU)(b),"onUpdate:modelValue":l[14]||(l[14]=e=>(0,r.dq)(b)?b.value=e:null),title:"设备出租设置",width:"50%"},{default:(0,_.w5)((()=>[(0,_.Wm)(C,{ref:"formRef",model:(0,r.SU)(k),rules:e.rules,"label-width":"auto"},{default:(0,_.w5)((()=>[(0,_.Wm)(g,{label:"是否放租"},{default:(0,_.w5)((()=>[(0,_.Wm)(S,{modelValue:(0,r.SU)(k).is_lend,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,r.SU)(k).is_lend=e)},{default:(0,_.w5)((()=>[(0,_.Wm)(a,{label:"1"},{default:(0,_.w5)((()=>[(0,_.Uk)("放租")])),_:1}),(0,_.Wm)(a,{label:"2"},{default:(0,_.w5)((()=>[(0,_.Uk)("不放租")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(g,{label:"出租方式"},{default:(0,_.w5)((()=>[(0,_.Wm)(S,{modelValue:(0,r.SU)(k).lend_type,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,r.SU)(k).lend_type=e)},{default:(0,_.w5)((()=>[(0,_.Wm)(a,{label:"machine"},{default:(0,_.w5)((()=>[(0,_.Uk)("整机出租")])),_:1}),(0,_.Wm)(a,{label:"container"},{default:(0,_.w5)((()=>[(0,_.Uk)("容器出租")])),_:1}),(0,_.Wm)(a,{label:"both"},{default:(0,_.w5)((()=>[(0,_.Uk)("两者都可以")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(g,{label:"定价规则"},{default:(0,_.w5)((()=>[(0,_.Wm)(S,{modelValue:(0,r.SU)(k).price_rule,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,r.SU)(k).price_rule=e)},{default:(0,_.w5)((()=>[(0,_.Wm)(a,{label:"custom"},{default:(0,_.w5)((()=>[(0,_.Uk)("自主定价")])),_:1}),(0,_.Wm)(a,{label:"common"},{default:(0,_.w5)((()=>[(0,_.Uk)("统一由平台定价")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,r.SU)(s)?((0,_.wg)(),(0,_.j4)(g,{key:0,label:"整机价格"},{default:(0,_.w5)((()=>[(0,_.Wm)(z,{modelValue:(0,r.SU)(k).machine.day,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,r.SU)(k).machine.day=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[f])),_:1},8,["modelValue"]),(0,_.Wm)(z,{modelValue:(0,r.SU)(k).machine.week,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,r.SU)(k).machine.week=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[p])),_:1},8,["modelValue"]),(0,_.Wm)(z,{modelValue:(0,r.SU)(k).machine.month,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,r.SU)(k).machine.month=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[w])),_:1},8,["modelValue"])])),_:1})):(0,_.kq)("",!0),(0,r.SU)(y)?((0,_.wg)(),(0,_.j4)(g,{key:1,label:"容器出租"},{default:(0,_.w5)((()=>[(0,_.Wm)(z,{modelValue:(0,r.SU)(k).container.hour,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,r.SU)(k).container.hour=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[U])),_:1},8,["modelValue"]),(0,_.Wm)(z,{modelValue:(0,r.SU)(k).container.day,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,r.SU)(k).container.day=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[h])),_:1},8,["modelValue"]),(0,_.Wm)(z,{modelValue:(0,r.SU)(k).container.week,"onUpdate:modelValue":l[8]||(l[8]=e=>(0,r.SU)(k).container.week=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[V])),_:1},8,["modelValue"]),(0,_.Wm)(z,{modelValue:(0,r.SU)(k).container.month,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,r.SU)(k).container.month=e),placeholder:"",class:"input-day"},{suffix:(0,_.w5)((()=>[v])),_:1},8,["modelValue"])])),_:1})):(0,_.kq)("",!0),(0,_.Wm)(g,{label:"上架时间"},{default:(0,_.w5)((()=>[(0,_.Wm)(I,{modelValue:(0,r.SU)(k).on_date,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,r.SU)(k).on_date=e),type:"datetime",placeholder:"上架时间",size:e.size},null,8,["modelValue","size"])])),_:1}),(0,_.Wm)(g,{label:"下架时间"},{default:(0,_.w5)((()=>[(0,_.Wm)(I,{modelValue:(0,r.SU)(k).off_date,"onUpdate:modelValue":l[11]||(l[11]=e=>(0,r.SU)(k).off_date=e),type:"datetime",placeholder:"下架时间",size:e.size},null,8,["modelValue","size"])])),_:1}),(0,_.Wm)(g,{label:"出租协议"},{default:(0,_.w5)((()=>[(0,_.Wm)(x,{modelValue:(0,r.SU)(k).agree,"onUpdate:modelValue":l[12]||(l[12]=e=>(0,r.SU)(k).agree=e),label:"请详细阅读设备出租协议，在租赁期间共同遵守"},null,8,["modelValue"])])),_:1}),(0,_.Wm)(g,{label:""},{default:(0,_.w5)((()=>[(0,_._)("div",W,[(0,_.Wm)(F,{loading:e.postLoading,type:"primary"},{default:(0,_.w5)((()=>[(0,_.Uk)("保存")])),_:1},8,["loading"]),(0,_.Wm)(F,{onClick:l[13]||(l[13]=e=>b.value=!1)},{default:(0,_.w5)((()=>[(0,_.Uk)("取消")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}};function b(e){e.__source="src/views/gpumarket/mydevice/components/deviceRentSettingForm.vue"}var k=a(83744);"function"===typeof b&&b(y);const S=(0,k.Z)(y,[["__scopeId","data-v-58bdaa48"]]);var g=S}}]);