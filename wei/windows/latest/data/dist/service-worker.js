if(!self.define){let s,i={};const l=(l,c)=>(l=new URL(l+".js",c).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(c,n)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const t=s=>l(s,u),e={module:{uri:u},exports:r,require:t};i[u]=Promise.all(c.map((s=>e[s]||t(s)))).then((s=>(n(...s),r)))}}define(["./workbox-a4d99406"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"img/user.gif",revision:"be6f3fd5dca4672635bb584efb226219"},{url:"index.html",revision:"e76d72fe790f9ff313b5f393ec54def6"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"e76074b7022c3319f352880eecc58357"},{url:"static/css/1023.11c77a9f.css",revision:null},{url:"static/css/1209.a9548bdd.css",revision:null},{url:"static/css/1284.f28e7291.css",revision:null},{url:"static/css/1294.0e9c756d.css",revision:null},{url:"static/css/1304.7639749b.css",revision:null},{url:"static/css/1437.96ef8efe.css",revision:null},{url:"static/css/1455.d5ce804f.css",revision:null},{url:"static/css/1634.23ebc2b3.css",revision:null},{url:"static/css/1685.ebb62bde.css",revision:null},{url:"static/css/180.648479f5.css",revision:null},{url:"static/css/19.e495a542.css",revision:null},{url:"static/css/1921.68e2049b.css",revision:null},{url:"static/css/1945.163e910c.css",revision:null},{url:"static/css/1989.94e81bf3.css",revision:null},{url:"static/css/210.94e81bf3.css",revision:null},{url:"static/css/2123.1c678bbd.css",revision:null},{url:"static/css/2139.76fa04ea.css",revision:null},{url:"static/css/2275.b4bde06f.css",revision:null},{url:"static/css/2301.d81bcdf7.css",revision:null},{url:"static/css/2326.ade40937.css",revision:null},{url:"static/css/2340.b447c392.css",revision:null},{url:"static/css/2711.3b1882be.css",revision:null},{url:"static/css/280.00325683.css",revision:null},{url:"static/css/2815.27f1ac41.css",revision:null},{url:"static/css/2839.9b474062.css",revision:null},{url:"static/css/2974.a57204be.css",revision:null},{url:"static/css/3054.ccb575e0.css",revision:null},{url:"static/css/3262.ecfe03e8.css",revision:null},{url:"static/css/3274.1a6e0edb.css",revision:null},{url:"static/css/3415.d0482c35.css",revision:null},{url:"static/css/3426.baddaad8.css",revision:null},{url:"static/css/346.32977a80.css",revision:null},{url:"static/css/3580.04473315.css",revision:null},{url:"static/css/3688.570479f2.css",revision:null},{url:"static/css/372.824049f0.css",revision:null},{url:"static/css/3726.e8eff322.css",revision:null},{url:"static/css/3832.4bc58946.css",revision:null},{url:"static/css/3875.59adf636.css",revision:null},{url:"static/css/3876.438f0e52.css",revision:null},{url:"static/css/3923.5bd54198.css",revision:null},{url:"static/css/398.1b965b93.css",revision:null},{url:"static/css/408.41c64e24.css",revision:null},{url:"static/css/4098.4da154ae.css",revision:null},{url:"static/css/4149.d7b02499.css",revision:null},{url:"static/css/4156.bb519e91.css",revision:null},{url:"static/css/4217.0fb1520f.css",revision:null},{url:"static/css/4254.1a9b607b.css",revision:null},{url:"static/css/429.ade40937.css",revision:null},{url:"static/css/4324.28b8a550.css",revision:null},{url:"static/css/4376.20aa75b5.css",revision:null},{url:"static/css/4424.8f278431.css",revision:null},{url:"static/css/4427.746e3893.css",revision:null},{url:"static/css/4586.570479f2.css",revision:null},{url:"static/css/4587.68e2049b.css",revision:null},{url:"static/css/4671.68e8bcb3.css",revision:null},{url:"static/css/472.9ec66639.css",revision:null},{url:"static/css/4729.00cb1909.css",revision:null},{url:"static/css/4775.33a84e6b.css",revision:null},{url:"static/css/4824.81aab438.css",revision:null},{url:"static/css/5033.6efea096.css",revision:null},{url:"static/css/5059.8110af5f.css",revision:null},{url:"static/css/5113.7098ddaf.css",revision:null},{url:"static/css/5216.e9251db2.css",revision:null},{url:"static/css/5535.0fa440fb.css",revision:null},{url:"static/css/5594.cef5fbfe.css",revision:null},{url:"static/css/561.2b7a3195.css",revision:null},{url:"static/css/5705.95cf5df7.css",revision:null},{url:"static/css/5772.e1951d90.css",revision:null},{url:"static/css/5791.2d942ce3.css",revision:null},{url:"static/css/5806.00cb1909.css",revision:null},{url:"static/css/5850.c83f0396.css",revision:null},{url:"static/css/5931.6c5a45c3.css",revision:null},{url:"static/css/6029.5e76a99a.css",revision:null},{url:"static/css/6138.2c84a5b7.css",revision:null},{url:"static/css/6263.b6e4d610.css",revision:null},{url:"static/css/6362.975f0802.css",revision:null},{url:"static/css/6472.96ef8efe.css",revision:null},{url:"static/css/6520.16ea91eb.css",revision:null},{url:"static/css/6522.90a9a47e.css",revision:null},{url:"static/css/6561.b4fa0130.css",revision:null},{url:"static/css/6699.bc28ff0f.css",revision:null},{url:"static/css/6700.f21040fd.css",revision:null},{url:"static/css/677.b447c392.css",revision:null},{url:"static/css/6879.cb3f0d5f.css",revision:null},{url:"static/css/7058.59adf636.css",revision:null},{url:"static/css/7133.6241155f.css",revision:null},{url:"static/css/7150.163d2193.css",revision:null},{url:"static/css/7283.746e3893.css",revision:null},{url:"static/css/7286.eaeb50a5.css",revision:null},{url:"static/css/7310.59adf636.css",revision:null},{url:"static/css/7348.092fdc49.css",revision:null},{url:"static/css/7361.51879c4f.css",revision:null},{url:"static/css/7439.f55760d3.css",revision:null},{url:"static/css/7559.16ea91eb.css",revision:null},{url:"static/css/7624.b7d5dbf2.css",revision:null},{url:"static/css/7671.eaeb50a5.css",revision:null},{url:"static/css/7842.69bc5666.css",revision:null},{url:"static/css/7903.da55f6ad.css",revision:null},{url:"static/css/7965.4a82ec40.css",revision:null},{url:"static/css/8012.3bbd0502.css",revision:null},{url:"static/css/8229.cb3f0d5f.css",revision:null},{url:"static/css/8374.ff859e27.css",revision:null},{url:"static/css/8429.71ed3c95.css",revision:null},{url:"static/css/8512.e463973c.css",revision:null},{url:"static/css/8516.619b2413.css",revision:null},{url:"static/css/8633.e3fed50d.css",revision:null},{url:"static/css/8634.9c9b8477.css",revision:null},{url:"static/css/8715.303c075b.css",revision:null},{url:"static/css/8767.3f63c668.css",revision:null},{url:"static/css/8802.b0130403.css",revision:null},{url:"static/css/9057.81aab438.css",revision:null},{url:"static/css/9124.92234726.css",revision:null},{url:"static/css/9296.f6fa5919.css",revision:null},{url:"static/css/9327.ccb575e0.css",revision:null},{url:"static/css/935.d989a69e.css",revision:null},{url:"static/css/943.5bd54198.css",revision:null},{url:"static/css/9527.106a9897.css",revision:null},{url:"static/css/9565.81aab438.css",revision:null},{url:"static/css/9653.cb3f0d5f.css",revision:null},{url:"static/css/9678.cb3f0d5f.css",revision:null},{url:"static/css/9726.32d4938b.css",revision:null},{url:"static/css/9729.59adf636.css",revision:null},{url:"static/css/9884.81aab438.css",revision:null},{url:"static/css/9953.435077c3.css",revision:null},{url:"static/css/9995.7155dfb4.css",revision:null},{url:"static/css/app.ee2035d5.css",revision:null},{url:"static/css/element-plus.75cf933f.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.d6bd8853.png",revision:null},{url:"static/img/404.f02775f8.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.2f742bae.jpg",revision:null},{url:"static/img/login_form.242d2e10.png",revision:null},{url:"static/img/qrcode_zuiyue_com.a66c8926.jpg",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/weixinmingmngpian.32aa5ce8.jpg",revision:null},{url:"static/js/1023.fce92891.js",revision:null},{url:"static/js/1061.eaac6c72.js",revision:null},{url:"static/js/1209.752e0c3e.js",revision:null},{url:"static/js/1284.e0d87c6e.js",revision:null},{url:"static/js/1294.cd31b6f3.js",revision:null},{url:"static/js/1304.d3058b63.js",revision:null},{url:"static/js/1437.442077ba.js",revision:null},{url:"static/js/1455.4651cf1b.js",revision:null},{url:"static/js/1459.d0aa25f4.js",revision:null},{url:"static/js/1634.6251877f.js",revision:null},{url:"static/js/1685.85d90ce9.js",revision:null},{url:"static/js/1710.cd2a0f2c.js",revision:null},{url:"static/js/1791.99eb6b07.js",revision:null},{url:"static/js/180.5ef65f0d.js",revision:null},{url:"static/js/19.a6d88c52.js",revision:null},{url:"static/js/1917.67852dd5.js",revision:null},{url:"static/js/1921.a8d5fc73.js",revision:null},{url:"static/js/1945.17d4569a.js",revision:null},{url:"static/js/1989.5c11fb40.js",revision:null},{url:"static/js/210.1e96d8be.js",revision:null},{url:"static/js/2123.9bb7aee8.js",revision:null},{url:"static/js/2139.c5d04066.js",revision:null},{url:"static/js/220.b8c1e79f.js",revision:null},{url:"static/js/2275.ea240500.js",revision:null},{url:"static/js/2301.992e67fc.js",revision:null},{url:"static/js/2326.d248a713.js",revision:null},{url:"static/js/2340.056526ef.js",revision:null},{url:"static/js/2540.d8df68ef.js",revision:null},{url:"static/js/2573.e352ffcb.js",revision:null},{url:"static/js/2711.5b279b2b.js",revision:null},{url:"static/js/2815.40ecbbf8.js",revision:null},{url:"static/js/2839.385a9032.js",revision:null},{url:"static/js/2974.598234b7.js",revision:null},{url:"static/js/3054.d207b1dd.js",revision:null},{url:"static/js/3262.ac622109.js",revision:null},{url:"static/js/3415.b7fa9e86.js",revision:null},{url:"static/js/3426.18178731.js",revision:null},{url:"static/js/3451.66eca90c.js",revision:null},{url:"static/js/346.d30d2a61.js",revision:null},{url:"static/js/3688.a55a463f.js",revision:null},{url:"static/js/3699.d665a341.js",revision:null},{url:"static/js/372.a2f0ec30.js",revision:null},{url:"static/js/3726.52f95deb.js",revision:null},{url:"static/js/3788.49041d43.js",revision:null},{url:"static/js/3793.71020df6.js",revision:null},{url:"static/js/3832.2b3b81e2.js",revision:null},{url:"static/js/3875.cf9932f6.js",revision:null},{url:"static/js/3876.a0bdc795.js",revision:null},{url:"static/js/3923.ef74c893.js",revision:null},{url:"static/js/408.70deba13.js",revision:null},{url:"static/js/4098.8db4ba8b.js",revision:null},{url:"static/js/4149.e2307c44.js",revision:null},{url:"static/js/4156.66e0e7d5.js",revision:null},{url:"static/js/4217.fe36f43b.js",revision:null},{url:"static/js/424.891c8e27.js",revision:null},{url:"static/js/4324.fe4de5f8.js",revision:null},{url:"static/js/4376.4cc3e8ca.js",revision:null},{url:"static/js/4424.6cc09d2a.js",revision:null},{url:"static/js/4427.09a39a5e.js",revision:null},{url:"static/js/4586.f5f0f71c.js",revision:null},{url:"static/js/4587.5a95d555.js",revision:null},{url:"static/js/4614.1f3873db.js",revision:null},{url:"static/js/4671.fa138b54.js",revision:null},{url:"static/js/468.67552866.js",revision:null},{url:"static/js/472.8b4165c8.js",revision:null},{url:"static/js/4729.dc96c9f6.js",revision:null},{url:"static/js/4824.fd362246.js",revision:null},{url:"static/js/4907.6f24bbf7.js",revision:null},{url:"static/js/4931.123304fe.js",revision:null},{url:"static/js/50.62e31313.js",revision:null},{url:"static/js/5033.f05f60d6.js",revision:null},{url:"static/js/5059.84797172.js",revision:null},{url:"static/js/5216.49c8fc9a.js",revision:null},{url:"static/js/5569.82fe7fad.js",revision:null},{url:"static/js/5594.46124ed5.js",revision:null},{url:"static/js/561.01be676b.js",revision:null},{url:"static/js/5625.9d7f8c60.js",revision:null},{url:"static/js/5806.c64b8101.js",revision:null},{url:"static/js/5850.28da77eb.js",revision:null},{url:"static/js/6017.b6bcedf2.js",revision:null},{url:"static/js/6029.2a68c451.js",revision:null},{url:"static/js/6138.e93670a8.js",revision:null},{url:"static/js/6263.a0cdc915.js",revision:null},{url:"static/js/6421.66614a75.js",revision:null},{url:"static/js/6465.63d6e909.js",revision:null},{url:"static/js/6472.fe357fdf.js",revision:null},{url:"static/js/6476.5e2fddd5.js",revision:null},{url:"static/js/6520.e9f94b5f.js",revision:null},{url:"static/js/6522.90338c93.js",revision:null},{url:"static/js/6561.5d49d829.js",revision:null},{url:"static/js/6699.1a8e1d6b.js",revision:null},{url:"static/js/677.394dd471.js",revision:null},{url:"static/js/7020.d6bda950.js",revision:null},{url:"static/js/7058.812bf7fa.js",revision:null},{url:"static/js/7133.0c7cb426.js",revision:null},{url:"static/js/7150.6a23fcb0.js",revision:null},{url:"static/js/7283.5a5a6d39.js",revision:null},{url:"static/js/7286.0723c8dd.js",revision:null},{url:"static/js/7310.2ba62ae6.js",revision:null},{url:"static/js/7348.baec72db.js",revision:null},{url:"static/js/7361.18f2f59d.js",revision:null},{url:"static/js/7387.6e4f46c8.js",revision:null},{url:"static/js/74.c1ce6912.js",revision:null},{url:"static/js/7439.059e1473.js",revision:null},{url:"static/js/7463.fe3e9e61.js",revision:null},{url:"static/js/7511.cd1b677b.js",revision:null},{url:"static/js/7658.b715fea6.js",revision:null},{url:"static/js/7671.94e87d18.js",revision:null},{url:"static/js/7842.5fb9e8cf.js",revision:null},{url:"static/js/7903.7794da0f.js",revision:null},{url:"static/js/7948.e53d0c4f.js",revision:null},{url:"static/js/7965.1ba44f9b.js",revision:null},{url:"static/js/8012.656107f5.js",revision:null},{url:"static/js/8119.7dd465df.js",revision:null},{url:"static/js/8229.86cab291.js",revision:null},{url:"static/js/8374.1533f1de.js",revision:null},{url:"static/js/8429.c857c006.js",revision:null},{url:"static/js/8512.891fae61.js",revision:null},{url:"static/js/8516.ca3a7e87.js",revision:null},{url:"static/js/8633.b5a96f7d.js",revision:null},{url:"static/js/8634.5cadde02.js",revision:null},{url:"static/js/8715.627be9ea.js",revision:null},{url:"static/js/8802.3a303fc1.js",revision:null},{url:"static/js/8826.cb11cd05.js",revision:null},{url:"static/js/8891.34c870a3.js",revision:null},{url:"static/js/9040.cfce9330.js",revision:null},{url:"static/js/9057.9cb045d6.js",revision:null},{url:"static/js/9124.2088a03c.js",revision:null},{url:"static/js/9136.80f12b14.js",revision:null},{url:"static/js/9179.9d37afa3.js",revision:null},{url:"static/js/9266.90c4e084.js",revision:null},{url:"static/js/9296.4073565f.js",revision:null},{url:"static/js/930.9d6e20f0.js",revision:null},{url:"static/js/9327.1a4cd63c.js",revision:null},{url:"static/js/935.7ff0ed26.js",revision:null},{url:"static/js/943.bb6e1f21.js",revision:null},{url:"static/js/9479.82c0cf6f.js",revision:null},{url:"static/js/9527.45543a54.js",revision:null},{url:"static/js/9561.d740e63f.js",revision:null},{url:"static/js/9565.7db1d3c1.js",revision:null},{url:"static/js/9653.6180c26b.js",revision:null},{url:"static/js/9678.0061845c.js",revision:null},{url:"static/js/9726.0e7bfef3.js",revision:null},{url:"static/js/9729.f9d8c62a.js",revision:null},{url:"static/js/9823.4efdc4f4.js",revision:null},{url:"static/js/9884.d738bffd.js",revision:null},{url:"static/js/9953.fb15514c.js",revision:null},{url:"static/js/9995.8bdee095.js",revision:null},{url:"static/js/app.18242b57.js",revision:null},{url:"static/js/element-plus.a2153fdf.js",revision:null},{url:"static/js/vab-chunk-00833fa6.88570e28.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.3c40fa04.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.ba679065.js",revision:null},{url:"static/js/vab-chunk-1d54e4e8.dfe22e5a.js",revision:null},{url:"static/js/vab-chunk-2aa31019.6689ea1d.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.fe1655e4.js",revision:null},{url:"static/js/vab-chunk-47257c03.ce8d3616.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.fcf71be0.js",revision:null},{url:"static/js/vab-chunk-5add3539.b5ce509c.js",revision:null},{url:"static/js/vab-chunk-637fdb70.056f41d7.js",revision:null},{url:"static/js/vab-chunk-69403744.8f8a62f6.js",revision:null},{url:"static/js/vab-chunk-9386b7e9.ff90781e.js",revision:null},{url:"static/js/vab-chunk-a9a8c684.d5a4892f.js",revision:null},{url:"static/js/vab-chunk-acef12d3.a9bbc3c4.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.654f9fe7.js",revision:null},{url:"static/js/vab-chunk-e7065af3.2c0cfdd4.js",revision:null},{url:"static/js/vab-plugins.0f1490dc.js",revision:null},{url:"static/js/vue.66ec7ba1.js",revision:null},{url:"wei.ico",revision:"18d87b5bd21c2c83f5c1e74f5a80c67b"},{url:"wei.svg",revision:"1df3c2551ee842d2e67cdaa8794d3e37"}],{})}));
