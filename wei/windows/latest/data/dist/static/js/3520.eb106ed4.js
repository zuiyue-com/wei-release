/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3520],{33520:function(e,t,n){n.r(t),n.d(t,{export_json_to_excel:function(){return i},export_table_to_excel:function(){return h}});n(57658),n(1439),n(87585),n(55315),n(30541);var r=n(93162),o=n(84105);function l(e){const t=[],n=e.querySelectorAll("tr"),r=[];for(let o=0;o<n.length;++o){const e=[],l=n[o],c=l.querySelectorAll("td");for(const t of c){let n=t.getAttribute("colspan"),l=t.getAttribute("rowspan"),c=t.innerText;if(""!==c&&c===+c&&(c=+c),r.forEach((t=>{if(o>=t.s.r&&o<=t.e.r&&e.length>=t.s.c&&e.length<=t.e.c)for(let n=0;n<=t.e.c-t.s.c;++n)e.push(null)})),(l||n)&&(l=l||1,n=n||1,r.push({s:{r:o,c:e.length},e:{r:o+l-1,c:e.length+n-1}})),e.push(""!==c?c:null),n)for(let t=0;t<n-1;++t)e.push(null)}t.push(e)}return[t,r]}function c(e,t=null){t&&(e+=1462);const n=Date.parse(e);return(n-new Date(Date.UTC(1899,11,30)))/864e5}function s(e){const t={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let r=0;r!==e.length;++r)for(let l=0;l!==e[r].length;++l){n.s.r>r&&(n.s.r=r),n.s.c>l&&(n.s.c=l),n.e.r<r&&(n.e.r=r),n.e.c<l&&(n.e.c=l);const s={v:e[r][l]};if(null===s.v)continue;const a=o.P6.encode_cell({c:l,r:r});"number"===typeof s.v?s.t="n":"boolean"===typeof s.v?s.t="b":s.v instanceof Date?(s.t="n",s.z=o.kS._table[14],s.v=c(s.v)):s.t="s",t[a]=s}return n.s.c<1e7&&(t["!ref"]=o.P6.encode_range(n)),t}class a{constructor(){Object.defineProperty(this,"SheetNames",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"Sheets",{enumerable:!0,configurable:!0,writable:!0,value:{}})}}function u(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r!==e.length;++r)n[r]=255&e.charCodeAt(r);return t}function h(e){const t=document.getElementById(e),n=l(t),c=n[1],h=n[0],i="SheetJS",f=new a,p=s(h);p["!merges"]=c,f.SheetNames.push(i),f.Sheets[i]=p;const g=(0,o.cW)(f,{bookType:"xlsx",bookSST:!1,type:"binary"});(0,r.saveAs)(new Blob([u(g)],{type:"application/octet-stream"}),"test.xlsx")}function i({multiHeader:e=[],header:t,data:n,filename:l,merges:c=[],autoWidth:h=!0,bookType:i="xlsx"}={header:{},data:[],filename:""}){l=l||"excel-list",n=[...n],n.unshift(t);for(let r=e.length-1;r>-1;r--)n.unshift(e[r]);const f="SheetJS",p=new a,g=s(n);if(c.length>0&&(g["!merges"]||(g["!merges"]=[]),c.forEach((e=>{g["!merges"].push(o.P6.decode_range(e))}))),h){const e=n.map((e=>e.map((e=>null===e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length})))),t=e[0];for(let n=1;n<e.length;n++)for(let r=0;r<e[n].length;r++)t[r]["wch"]<e[n][r]["wch"]&&(t[r]["wch"]=e[n][r]["wch"]);g["!cols"]=t}p.SheetNames.push(f),p.Sheets[f]=g;const b=(0,o.cW)(p,{bookType:i,bookSST:!1,type:"binary"});(0,r.saveAs)(new Blob([u(b)],{type:"application/octet-stream"}),`${l}.${i}`)}}}]);