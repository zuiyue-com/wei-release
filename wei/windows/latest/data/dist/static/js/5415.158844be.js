/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-23 18:42:13
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5415],{45415:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});var a=o(15659),l=(o(3241),o(10444),o(66252));const n={class:"wang-editor-container"},r={class:"wang-editor-footer"};function i(e,t,o,i,s,d){const u=(0,l.up)("Toolbar"),c=(0,l.up)("Editor"),p=a.ElButton;return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(u,{editor:e.editorRef,style:{"border-bottom":"1px solid #e8e8e8"}},null,8,["editor"]),(0,l.Wm)(c,{modelValue:e.html,"onUpdate:modelValue":t[0]||(t[0]=t=>e.html=t),class:"wang-editor-content","default-config":e.editorConfig,style:{height:"300px"},onOnCreated:e.handleCreated},null,8,["modelValue","default-config","onOnCreated"]),(0,l._)("div",r,[(0,l.Wm)(p,{type:"primary",onClick:e.onSubmit},{default:(0,l.w5)((()=>[(0,l.Uk)("保存")])),_:1},8,["onClick"])])])}var s=o(95660),d=o(2262),u=(0,l.aZ)({name:"WangEditor",components:{Editor:s.M,Toolbar:s.o},setup(){const e=(0,l.f3)("$baseMessage"),t=(0,l.f3)("$baseAlert"),o=(0,d.XI)(void 0),a=(0,d.iH)('<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><p>hello world ~~~ </p><blockquote>blockquote</blockquote><pre><code class="language-javascript">const a = 100;</code></pre><p><img src="https://fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg" alt="" data-href="" style=""/></p>'),n=(0,d.iH)({placeholder:"请输入内容...",MENU_CONF:{uploadImage:{server:"",fieldName:"vab-file-name",allowedFileTypes:["image/*"],headers:{}}}}),r=e=>{o.value=e};(0,l.Jd)((()=>{const e=o.value;null!=e&&e.destroy()}));const i=()=>{t(a.value),e("模拟保存成功","success","vab-hey-message-success")};return{editorRef:o,html:a,editorConfig:n,handleCreated:r,onSubmit:i}}});function c(e){e.__source="src/views/vab/editor/wangEditor.vue"}var p=o(83744);"function"===typeof c&&c(u);const f=(0,p.Z)(u,[["render",i]]);var h=f}}]);