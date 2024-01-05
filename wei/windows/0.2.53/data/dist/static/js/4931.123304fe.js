/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-01-05 15:16:32
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4931,9561],{19347:function(e,t,n){n.d(t,{ci:function(){return r},h:function(){return l},lX:function(){return i},lx:function(){return a},yv:function(){return u}});var o=n(92325);function l(){return(0,o.Z)({url:"/wwwapi.php?to=chongzhi",method:"get"})}function a(e){return(0,o.Z)({url:"/wwwapi.php?to=chongzhi&p=my",method:"get",params:e})}function r(e){return(0,o.Z)({url:"/wwwapi.php?to=usercp&ac=credit&op=log",method:"get",params:e})}function i(e){return(0,o.Z)({url:"/wwwapi.php?to=chongzhiPay",method:"get",params:e})}function u(e){return(0,o.Z)({url:"/wwwapi.php?to=chongzhi&p=checkorder",method:"get",params:e})}},89561:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var o=n(87692),l=(n(3241),n(45393),n(22411),n(66252)),a=n(2262),r={__name:"index",props:{zftype:{type:Number,default:2}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=(0,a.iH)(n.zftype);function i(e){t("update:modelValue",e)}return(e,t)=>{const n=(0,l.up)("vab-icon"),u=o.dn,c=o.KD;return(0,l.wg)(),(0,l.j4)(c,{modelValue:(0,a.SU)(r),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.dq)(r)?r.value=e:null),modelModifiers:{number:!0},onChange:i},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:2},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{icon:"wechat-pay-line",style:{color:"green"}}),(0,l.Uk)(" 微信扫码 ")])),_:1}),(0,l.Wm)(u,{label:3},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{icon:"alipay-line",style:{color:"#47ade7"}}),(0,l.Uk)(" 支付宝扫码 ")])),_:1})])),_:1},8,["modelValue"])}}};function i(e){e.__source="src/components/PaymentMethod/index.vue"}"function"===typeof i&&i(r);const u=r;var c=u},21634:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(73481),l=(n(3241),n(62029),n(66252)),a=n(2262),r=n(3577),i=n(227);const u={class:"qrcode-box"},c={class:"desc"},d={class:"text"},s={class:"money"};var y={__name:"index",props:{zftype:{type:Number,default:2},orderMoneyQuantity:{type:Number,default:0}},setup(e,{expose:t}){const n=e,y={2:{text:"微信",icon:"wechat-fill",color:"#1AAD19"},3:{text:"支付宝",icon:"alipay-fill",color:"#1678ff"}},p=(0,l.Fl)((()=>y[n.zftype])),m=(0,a.qj)({show:!1,qrcode:""});function f(e){m.qrcode=e,m.show=!0}function w(){m.qrcode="",m.show=!1}return t({showDialog:f,hideDialog:w}),(t,n)=>{const y=(0,l.up)("vab-icon"),f=o.d0;return(0,l.wg)(),(0,l.j4)(f,{modelValue:(0,a.SU)(m).show,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.SU)(m).show=e),title:(0,a.SU)(p).text+"支付",width:"400","close-on-click-modal":!1,"close-on-press-escape":!1},{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.Wm)((0,a.SU)(i.Z),{text:(0,a.SU)(m).qrcode},null,8,["text"]),(0,l._)("div",c,[(0,l._)("div",d,[(0,l.Uk)(" 请使用 "),(0,l._)("div",null,[(0,l.Wm)(y,{class:"icon",icon:(0,a.SU)(p).icon,style:(0,r.j5)({color:(0,a.SU)(p).color})},null,8,["icon","style"]),(0,l.Uk)(" "+(0,r.zw)((0,a.SU)(p).text),1)]),(0,l.Uk)(" 扫码支付 ")]),(0,l._)("div",s,"￥"+(0,r.zw)(e.orderMoneyQuantity),1)])])])),_:1},8,["modelValue","title"])}}};function p(e){e.__source="src/components/QrcodeDialog/index.vue"}var m=n(83744);"function"===typeof p&&p(y);const f=(0,m.Z)(y,[["__scopeId","data-v-0a88a13c"]]);var w=f},74931:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var o=n(66263),l=(n(3241),n(33790),n(20129)),a=(n(69840),n(15659)),r=(n(10444),n(57018)),i=(n(74367),n(87692)),u=(n(45393),n(22411),n(6589),n(57658),n(66252)),c=n(2262),d=n(3577),s=n(19347);const y={moneyQuantity:[{required:!0,message:"金额必填",trigger:"change"},{validator(e,t,n){return parseFloat(t)>0},message:"金额必须大于0",trigger:"change"}]};var p=n(21634),m=n(89561),f=n(81095),w=n(15790);const h={class:"content clearfix"},v={class:"czred"};var _={__name:"form",setup(e){const t=(0,w.L)(),n=(0,u.f3)("$pub");(0,u.bv)((()=>{z()}));const _=(0,c.iH)(null),g=(0,c.iH)(null),U=(0,c.qj)({...y}),b=(0,c.qj)({zftype:2,selectMoneyQuantity:.01,moneyQuantity:0,credittype:"1"}),S=(0,c.qj)({desc:"",options:[],orderid:""});async function z(){const{body:{shuoming:e,chongzhi_jifen_leixing:t}}=await(0,s.h)();b.credittype=Object.keys(t)[0],S.desc=e,S.options=k(t),b.credittype=parseInt(S.options[0].creditid)}function k(e){const t=Object.values(e),n=t.map((e=>{const t=e.cards.map((t=>{let n="充值金额";return t.monery=parseFloat(t.monery),t.monery>0&&(n=`￥${t.monery}`),{value_text:n,value:t.monery,text:`${t.cardCredit}${e.credittitle}`}}));t.push({value_text:"充值金额",value:0,text:"自定义"});const n={creditid:e.creditid,credittitle:e.credittitle,cards:t};return n}));return n}const x=(0,u.Fl)((()=>S.options.map((e=>{const n={id:e.creditid,name:e.credittitle,value:t.credits[e.creditid].credits};return n})))),Q=(0,u.Fl)((()=>{const e=S.options.find((e=>e.creditid==b.credittype));return e?(b.selectMoneyQuantity=e.cards[0].value,e.cards):[]})),V=(0,u.Fl)((()=>`${b.selectMoneyQuantity}元`)),W=(0,u.Fl)((()=>b.selectMoneyQuantity>0?b.selectMoneyQuantity:b.moneyQuantity));let j=0;async function q(e){try{const o={order_serial_number:e},{body:{result:l}}=await(0,s.yv)(o);parseInt(l)>0&&(clearInterval(j),f.gp.$baseNotify(`订单 ${e} 支付成功`),t.getUserInfo(),g.value.hideDialog(),n("load-payment-logs"))}catch(o){}}async function D(){try{const e={zftype:b.zftype,credittype:b.credittype,moneyQuantity:W.value},{body:{ewmurl:t,orderid:n}}=await(0,s.lX)(e);g.value.showDialog(t),S.orderid=n,j&&clearInterval(j),j=setInterval((()=>{q(S.orderid)}),5e3)}catch(e){}}async function M(e){e&&(0===b.selectMoneyQuantity?U.moneyQuantity=[...y.moneyQuantity]:U.moneyQuantity=[],await e.validate(((e,t)=>{e&&D()})))}return(e,t)=>{const n=l.nH,s=i.dn,y=i.KD,f=r.EZ,w=a.ElButton,z=l.ly,k=o.v;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(z,{ref_key:"formRef",ref:_,class:"demo-form","label-width":"100px",model:(0,c.SU)(b),rules:(0,c.SU)(U)},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{label:"当前余额",placeholder:"当前余额"},{default:(0,u.w5)((()=>[(0,u._)("div",h,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(x),(e=>((0,u.wg)(),(0,u.iD)("span",{key:e.id,class:"nowcredit"},[(0,u._)("b",v,(0,d.zw)(e.value),1),(0,u.Uk)(" "+(0,d.zw)(e.name),1)])))),128))])])),_:1}),(0,u.Wm)(n,{label:"充值积分类型"},{default:(0,u.w5)((()=>[(0,u.Wm)(y,{modelValue:(0,c.SU)(b).credittype,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,c.SU)(b).credittype=e)},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(S).options,(e=>((0,u.wg)(),(0,u.j4)(s,{key:e.creditid,label:e.creditid},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.credittitle),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.Wm)(n,{label:"充值数量",class:"demo-form-chongzhishuliang"},{default:(0,u.w5)((()=>[(0,u.Wm)(y,{modelValue:(0,c.SU)(b).selectMoneyQuantity,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,c.SU)(b).selectMoneyQuantity=e)},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(Q),(e=>((0,u.wg)(),(0,u.j4)(s,{key:e.value,label:e.value},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.text)+(0,d.zw)(e.value_text),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),0===(0,c.SU)(b).selectMoneyQuantity?((0,u.wg)(),(0,u.j4)(n,{key:0,label:"请输入充值金额",prop:"moneyQuantity"},{default:(0,u.w5)((()=>[(0,u.Wm)(f,{modelValue:(0,c.SU)(b).moneyQuantity,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,c.SU)(b).moneyQuantity=e),modelModifiers:{number:!0},placeholder:"请输入充值金额",oninput:"value=value.replace(/^\\.+|[^\\d.]/g,'')",class:"money-input-width"},null,8,["modelValue"])])),_:1})):((0,u.wg)(),(0,u.j4)(n,{key:1,label:"应付金额"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)((0,c.SU)(V)),1)])),_:1})),(0,u.Wm)(n,{label:"支付方式："},{default:(0,u.w5)((()=>[(0,u.Wm)((0,c.SU)(m["default"]),{modelValue:(0,c.SU)(b).zftype,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,c.SU)(b).zftype=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(n,{label:" "},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{type:"primary",onClick:t[4]||(t[4]=e=>M((0,c.SU)(_)))},{default:(0,u.w5)((()=>[(0,u.Uk)(" 立即充值 ")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,u.Wm)(k,{closable:!1,"show-icon":"",title:"",type:"info"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)((0,c.SU)(S).desc),1)])),_:1}),(0,u.Wm)((0,c.SU)(p["default"]),{ref_key:"qrcodeDialogRef",ref:g,zftype:(0,c.SU)(b).zftype,"order-money-quantity":(0,c.SU)(W)},null,8,["zftype","order-money-quantity"])],64)}}};function g(e){e.__source="src/views/setting/chongzhi/components/form.vue"}var U=n(83744);"function"===typeof g&&g(_);const b=(0,U.Z)(_,[["__scopeId","data-v-3f8465a4"]]);var S=b}}]);