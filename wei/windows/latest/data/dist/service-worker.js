if(!self.define){let s,i={};const l=(l,c)=>(l=new URL(l+".js",c).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(c,n)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const t=s=>l(s,u),e={module:{uri:u},exports:r,require:t};i[u]=Promise.all(c.map((s=>e[s]||t(s)))).then((s=>(n(...s),r)))}}define(["./workbox-a4d99406"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"img/user.gif",revision:"be6f3fd5dca4672635bb584efb226219"},{url:"index.html",revision:"e2932ccc0a9e1feb7cf97568033aab5b"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"e76074b7022c3319f352880eecc58357"},{url:"static/css/1209.a9548bdd.css",revision:null},{url:"static/css/1284.f28e7291.css",revision:null},{url:"static/css/1294.0e9c756d.css",revision:null},{url:"static/css/1304.7639749b.css",revision:null},{url:"static/css/1437.96ef8efe.css",revision:null},{url:"static/css/1455.d5ce804f.css",revision:null},{url:"static/css/1479.aecb760b.css",revision:null},{url:"static/css/1634.23ebc2b3.css",revision:null},{url:"static/css/1673.216e9268.css",revision:null},{url:"static/css/1686.2a3e168c.css",revision:null},{url:"static/css/1907.ad103faf.css",revision:null},{url:"static/css/1921.68e2049b.css",revision:null},{url:"static/css/1924.e4b0f0f7.css",revision:null},{url:"static/css/1945.163e910c.css",revision:null},{url:"static/css/1989.94e81bf3.css",revision:null},{url:"static/css/2005.78c7106d.css",revision:null},{url:"static/css/2016.4468d2c7.css",revision:null},{url:"static/css/210.94e81bf3.css",revision:null},{url:"static/css/2275.b4bde06f.css",revision:null},{url:"static/css/2301.d81bcdf7.css",revision:null},{url:"static/css/2303.8d37d3ad.css",revision:null},{url:"static/css/2326.ade40937.css",revision:null},{url:"static/css/2340.b447c392.css",revision:null},{url:"static/css/2716.162eae75.css",revision:null},{url:"static/css/280.00325683.css",revision:null},{url:"static/css/2904.8d78acf1.css",revision:null},{url:"static/css/2974.a57204be.css",revision:null},{url:"static/css/2975.fb0cb583.css",revision:null},{url:"static/css/3054.ccb575e0.css",revision:null},{url:"static/css/3097.bc1dbd84.css",revision:null},{url:"static/css/3254.3a2de11d.css",revision:null},{url:"static/css/3262.ecfe03e8.css",revision:null},{url:"static/css/3377.8cf44b66.css",revision:null},{url:"static/css/3399.cec54fcb.css",revision:null},{url:"static/css/3415.d0482c35.css",revision:null},{url:"static/css/346.32977a80.css",revision:null},{url:"static/css/3532.c2ab8d23.css",revision:null},{url:"static/css/3595.b8e989c4.css",revision:null},{url:"static/css/3613.0b1a6cb4.css",revision:null},{url:"static/css/3667.381718d9.css",revision:null},{url:"static/css/3688.570479f2.css",revision:null},{url:"static/css/3726.e8eff322.css",revision:null},{url:"static/css/3749.6c5a45c3.css",revision:null},{url:"static/css/3750.1b35baf6.css",revision:null},{url:"static/css/3875.59adf636.css",revision:null},{url:"static/css/3923.5bd54198.css",revision:null},{url:"static/css/398.1b965b93.css",revision:null},{url:"static/css/4002.ba326ca2.css",revision:null},{url:"static/css/408.41c64e24.css",revision:null},{url:"static/css/4098.4da154ae.css",revision:null},{url:"static/css/4149.d7b02499.css",revision:null},{url:"static/css/4217.0fb1520f.css",revision:null},{url:"static/css/429.ade40937.css",revision:null},{url:"static/css/4324.28b8a550.css",revision:null},{url:"static/css/4427.746e3893.css",revision:null},{url:"static/css/4586.570479f2.css",revision:null},{url:"static/css/4587.68e2049b.css",revision:null},{url:"static/css/4671.68e8bcb3.css",revision:null},{url:"static/css/4729.00cb1909.css",revision:null},{url:"static/css/4775.33a84e6b.css",revision:null},{url:"static/css/481.0b7eb481.css",revision:null},{url:"static/css/4824.81aab438.css",revision:null},{url:"static/css/5033.6efea096.css",revision:null},{url:"static/css/5059.8110af5f.css",revision:null},{url:"static/css/5535.0fa440fb.css",revision:null},{url:"static/css/561.2b7a3195.css",revision:null},{url:"static/css/5740.8bef2ff3.css",revision:null},{url:"static/css/5772.e1951d90.css",revision:null},{url:"static/css/5791.2d942ce3.css",revision:null},{url:"static/css/5806.00cb1909.css",revision:null},{url:"static/css/5822.b7c7279b.css",revision:null},{url:"static/css/5850.c83f0396.css",revision:null},{url:"static/css/5969.51b59810.css",revision:null},{url:"static/css/603.c4629f75.css",revision:null},{url:"static/css/6086.418baf95.css",revision:null},{url:"static/css/6138.2c84a5b7.css",revision:null},{url:"static/css/6299.a6489bb2.css",revision:null},{url:"static/css/635.4e77961f.css",revision:null},{url:"static/css/6362.975f0802.css",revision:null},{url:"static/css/6472.96ef8efe.css",revision:null},{url:"static/css/6520.16ea91eb.css",revision:null},{url:"static/css/6522.90a9a47e.css",revision:null},{url:"static/css/6561.b4fa0130.css",revision:null},{url:"static/css/6563.295c7dd6.css",revision:null},{url:"static/css/6607.4f89bbf5.css",revision:null},{url:"static/css/668.106a9897.css",revision:null},{url:"static/css/6682.53d545c6.css",revision:null},{url:"static/css/6699.bc28ff0f.css",revision:null},{url:"static/css/6700.f21040fd.css",revision:null},{url:"static/css/6737.3b5e3d41.css",revision:null},{url:"static/css/677.b447c392.css",revision:null},{url:"static/css/6818.c24edf4d.css",revision:null},{url:"static/css/6840.d0ee1474.css",revision:null},{url:"static/css/6879.cb3f0d5f.css",revision:null},{url:"static/css/6959.eb45aee7.css",revision:null},{url:"static/css/7058.59adf636.css",revision:null},{url:"static/css/7133.6241155f.css",revision:null},{url:"static/css/7190.8a66b0bd.css",revision:null},{url:"static/css/7229.7af04096.css",revision:null},{url:"static/css/7261.f4abde91.css",revision:null},{url:"static/css/7279.339d3e75.css",revision:null},{url:"static/css/7283.746e3893.css",revision:null},{url:"static/css/7286.eaeb50a5.css",revision:null},{url:"static/css/7310.59adf636.css",revision:null},{url:"static/css/7348.092fdc49.css",revision:null},{url:"static/css/7439.f55760d3.css",revision:null},{url:"static/css/748.4322b524.css",revision:null},{url:"static/css/7506.e7c3f879.css",revision:null},{url:"static/css/7555.0b30fa51.css",revision:null},{url:"static/css/7559.16ea91eb.css",revision:null},{url:"static/css/7624.b7d5dbf2.css",revision:null},{url:"static/css/7647.c31a2dc2.css",revision:null},{url:"static/css/7671.eaeb50a5.css",revision:null},{url:"static/css/7674.2818f0e8.css",revision:null},{url:"static/css/7801.c9641ac2.css",revision:null},{url:"static/css/7828.5cc908e7.css",revision:null},{url:"static/css/7965.4a82ec40.css",revision:null},{url:"static/css/8012.3bbd0502.css",revision:null},{url:"static/css/8183.8888c031.css",revision:null},{url:"static/css/8229.cb3f0d5f.css",revision:null},{url:"static/css/8374.ff859e27.css",revision:null},{url:"static/css/8413.3b1882be.css",revision:null},{url:"static/css/8422.d2678819.css",revision:null},{url:"static/css/8429.71ed3c95.css",revision:null},{url:"static/css/8512.e463973c.css",revision:null},{url:"static/css/8516.619b2413.css",revision:null},{url:"static/css/8633.e3fed50d.css",revision:null},{url:"static/css/8728.51c08201.css",revision:null},{url:"static/css/8767.3f63c668.css",revision:null},{url:"static/css/8784.8fa44e60.css",revision:null},{url:"static/css/8813.413a72c8.css",revision:null},{url:"static/css/8919.419bfbb5.css",revision:null},{url:"static/css/9004.dca2ca21.css",revision:null},{url:"static/css/9057.81aab438.css",revision:null},{url:"static/css/9124.92234726.css",revision:null},{url:"static/css/9161.2d381c54.css",revision:null},{url:"static/css/9296.f6fa5919.css",revision:null},{url:"static/css/9327.ccb575e0.css",revision:null},{url:"static/css/943.5bd54198.css",revision:null},{url:"static/css/9527.106a9897.css",revision:null},{url:"static/css/9565.81aab438.css",revision:null},{url:"static/css/9653.cb3f0d5f.css",revision:null},{url:"static/css/9678.cb3f0d5f.css",revision:null},{url:"static/css/9726.32d4938b.css",revision:null},{url:"static/css/9729.59adf636.css",revision:null},{url:"static/css/9884.81aab438.css",revision:null},{url:"static/css/9953.435077c3.css",revision:null},{url:"static/css/9995.7155dfb4.css",revision:null},{url:"static/css/app.334307c6.css",revision:null},{url:"static/css/element-plus.9ca2a2ed.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.d6bd8853.png",revision:null},{url:"static/img/404.f02775f8.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.2f742bae.jpg",revision:null},{url:"static/img/login_form.242d2e10.png",revision:null},{url:"static/img/qrcode_zuiyue_com.a66c8926.jpg",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/weixinmingmngpian.32aa5ce8.jpg",revision:null},{url:"static/js/1209.752e0c3e.js",revision:null},{url:"static/js/1284.a69e5a3f.js",revision:null},{url:"static/js/1294.fc400799.js",revision:null},{url:"static/js/1304.9e0108b4.js",revision:null},{url:"static/js/1437.3f5f3f8c.js",revision:null},{url:"static/js/1455.79521941.js",revision:null},{url:"static/js/1459.c7403d97.js",revision:null},{url:"static/js/1479.3ade3676.js",revision:null},{url:"static/js/1634.6251877f.js",revision:null},{url:"static/js/1686.2649e87e.js",revision:null},{url:"static/js/1710.c9f8f961.js",revision:null},{url:"static/js/1791.99eb6b07.js",revision:null},{url:"static/js/1907.66c9c576.js",revision:null},{url:"static/js/1921.a8d5fc73.js",revision:null},{url:"static/js/1924.2e29fc89.js",revision:null},{url:"static/js/1945.31223271.js",revision:null},{url:"static/js/1989.7749ee21.js",revision:null},{url:"static/js/2005.84164938.js",revision:null},{url:"static/js/2007.9e9dfe92.js",revision:null},{url:"static/js/2016.2bec0614.js",revision:null},{url:"static/js/210.1e96d8be.js",revision:null},{url:"static/js/220.119f71fa.js",revision:null},{url:"static/js/2275.ea240500.js",revision:null},{url:"static/js/2301.992e67fc.js",revision:null},{url:"static/js/2303.8ca7a292.js",revision:null},{url:"static/js/2326.d248a713.js",revision:null},{url:"static/js/2340.451e539b.js",revision:null},{url:"static/js/2540.d8df68ef.js",revision:null},{url:"static/js/2716.5c9495fd.js",revision:null},{url:"static/js/2762.a3268d4e.js",revision:null},{url:"static/js/2904.fe8de77d.js",revision:null},{url:"static/js/2974.598234b7.js",revision:null},{url:"static/js/2975.b6036c93.js",revision:null},{url:"static/js/3054.d207b1dd.js",revision:null},{url:"static/js/3097.b98fc34c.js",revision:null},{url:"static/js/3099.9791ce2e.js",revision:null},{url:"static/js/3254.d2422b39.js",revision:null},{url:"static/js/3262.ac622109.js",revision:null},{url:"static/js/3336.c0977d28.js",revision:null},{url:"static/js/3399.c3934f18.js",revision:null},{url:"static/js/3415.67b0a811.js",revision:null},{url:"static/js/3451.66eca90c.js",revision:null},{url:"static/js/346.d30d2a61.js",revision:null},{url:"static/js/355.8151d3e3.js",revision:null},{url:"static/js/3595.8f366bbf.js",revision:null},{url:"static/js/3613.b8487502.js",revision:null},{url:"static/js/3668.d2dd1b5c.js",revision:null},{url:"static/js/3688.a55a463f.js",revision:null},{url:"static/js/3699.94c13970.js",revision:null},{url:"static/js/3726.f8dfec67.js",revision:null},{url:"static/js/3749.c2388941.js",revision:null},{url:"static/js/3750.406cbe78.js",revision:null},{url:"static/js/3788.83e016b6.js",revision:null},{url:"static/js/3793.55836739.js",revision:null},{url:"static/js/3875.6aa327c6.js",revision:null},{url:"static/js/3923.ef74c893.js",revision:null},{url:"static/js/4002.cd59a0a5.js",revision:null},{url:"static/js/408.70deba13.js",revision:null},{url:"static/js/4098.8db4ba8b.js",revision:null},{url:"static/js/4149.e2307c44.js",revision:null},{url:"static/js/4217.df3adab0.js",revision:null},{url:"static/js/424.50cbb2bc.js",revision:null},{url:"static/js/4324.fe4de5f8.js",revision:null},{url:"static/js/4427.09a39a5e.js",revision:null},{url:"static/js/4586.f5f0f71c.js",revision:null},{url:"static/js/4587.5a95d555.js",revision:null},{url:"static/js/4614.1f3873db.js",revision:null},{url:"static/js/4671.fa138b54.js",revision:null},{url:"static/js/468.13832945.js",revision:null},{url:"static/js/4729.dc96c9f6.js",revision:null},{url:"static/js/481.d54cfd49.js",revision:null},{url:"static/js/4824.fd362246.js",revision:null},{url:"static/js/4841.ce0b5388.js",revision:null},{url:"static/js/4931.82cee250.js",revision:null},{url:"static/js/50.fb88baa7.js",revision:null},{url:"static/js/5033.6ee352b6.js",revision:null},{url:"static/js/5059.84797172.js",revision:null},{url:"static/js/5448.19a2b910.js",revision:null},{url:"static/js/5530.23f197a0.js",revision:null},{url:"static/js/5569.4ad11ad2.js",revision:null},{url:"static/js/560.041933cd.js",revision:null},{url:"static/js/561.01be676b.js",revision:null},{url:"static/js/5625.10b0dbe7.js",revision:null},{url:"static/js/5683.8d628a57.js",revision:null},{url:"static/js/5740.3ec42940.js",revision:null},{url:"static/js/5806.c64b8101.js",revision:null},{url:"static/js/5817.04c11776.js",revision:null},{url:"static/js/5822.ac106650.js",revision:null},{url:"static/js/5824.8ed96fcd.js",revision:null},{url:"static/js/5850.28da77eb.js",revision:null},{url:"static/js/5969.0716fe1f.js",revision:null},{url:"static/js/6017.2a2e06c2.js",revision:null},{url:"static/js/6138.e93670a8.js",revision:null},{url:"static/js/6232.a794d4ef.js",revision:null},{url:"static/js/6299.00647831.js",revision:null},{url:"static/js/635.dbae91f0.js",revision:null},{url:"static/js/6450.df1de348.js",revision:null},{url:"static/js/6465.0fdf12d8.js",revision:null},{url:"static/js/6472.36cf0ecc.js",revision:null},{url:"static/js/6476.8f6ccf53.js",revision:null},{url:"static/js/6520.e9f94b5f.js",revision:null},{url:"static/js/6522.bce457b9.js",revision:null},{url:"static/js/6561.5d49d829.js",revision:null},{url:"static/js/6563.f53b4db4.js",revision:null},{url:"static/js/6607.096d851c.js",revision:null},{url:"static/js/668.baacd2fe.js",revision:null},{url:"static/js/6693.7b260aba.js",revision:null},{url:"static/js/6699.1a8e1d6b.js",revision:null},{url:"static/js/6737.582b3b9b.js",revision:null},{url:"static/js/677.9dc2f76c.js",revision:null},{url:"static/js/6818.19d1a23d.js",revision:null},{url:"static/js/6840.2a1e03c3.js",revision:null},{url:"static/js/7020.d6bda950.js",revision:null},{url:"static/js/7058.a44cd7f3.js",revision:null},{url:"static/js/7133.04594e72.js",revision:null},{url:"static/js/7190.84a08c10.js",revision:null},{url:"static/js/7229.aad806cc.js",revision:null},{url:"static/js/7261.4e594abe.js",revision:null},{url:"static/js/7279.5f308b74.js",revision:null},{url:"static/js/7283.5a5a6d39.js",revision:null},{url:"static/js/7286.0723c8dd.js",revision:null},{url:"static/js/7310.5c29c394.js",revision:null},{url:"static/js/7348.baec72db.js",revision:null},{url:"static/js/7387.5f4ca766.js",revision:null},{url:"static/js/7439.b7ea2eca.js",revision:null},{url:"static/js/7463.a8983fdb.js",revision:null},{url:"static/js/748.fb7ee9c5.js",revision:null},{url:"static/js/749.89ba6e2b.js",revision:null},{url:"static/js/7506.24d158b5.js",revision:null},{url:"static/js/7511.cd1b677b.js",revision:null},{url:"static/js/7555.23ea808e.js",revision:null},{url:"static/js/7647.57442ac7.js",revision:null},{url:"static/js/7671.94e87d18.js",revision:null},{url:"static/js/7674.5bf732b1.js",revision:null},{url:"static/js/7828.e2cd3e3c.js",revision:null},{url:"static/js/7948.bc3253b9.js",revision:null},{url:"static/js/7965.1ba44f9b.js",revision:null},{url:"static/js/8012.656107f5.js",revision:null},{url:"static/js/8119.7fc58b12.js",revision:null},{url:"static/js/8123.e386f50b.js",revision:null},{url:"static/js/8229.ce9b4572.js",revision:null},{url:"static/js/8367.6ba514a9.js",revision:null},{url:"static/js/8374.9c32f6fd.js",revision:null},{url:"static/js/8413.6cd19757.js",revision:null},{url:"static/js/8422.d838dd9a.js",revision:null},{url:"static/js/8429.c857c006.js",revision:null},{url:"static/js/8512.891fae61.js",revision:null},{url:"static/js/8516.5fcfbd34.js",revision:null},{url:"static/js/8531.afcc5945.js",revision:null},{url:"static/js/8540.ff18fdd5.js",revision:null},{url:"static/js/8633.ed57740e.js",revision:null},{url:"static/js/8728.ad08f011.js",revision:null},{url:"static/js/8784.4a7691a5.js",revision:null},{url:"static/js/8813.0b9f1b12.js",revision:null},{url:"static/js/8826.cb11cd05.js",revision:null},{url:"static/js/8907.b352b4ab.js",revision:null},{url:"static/js/9004.f5931974.js",revision:null},{url:"static/js/9057.9cb045d6.js",revision:null},{url:"static/js/9120.f8249fdc.js",revision:null},{url:"static/js/9124.2088a03c.js",revision:null},{url:"static/js/9136.80f12b14.js",revision:null},{url:"static/js/9161.78ec099a.js",revision:null},{url:"static/js/9179.417e1151.js",revision:null},{url:"static/js/918.f2d4762e.js",revision:null},{url:"static/js/9266.90c4e084.js",revision:null},{url:"static/js/9296.4073565f.js",revision:null},{url:"static/js/9327.a6210bd5.js",revision:null},{url:"static/js/943.bb6e1f21.js",revision:null},{url:"static/js/9479.51ed5087.js",revision:null},{url:"static/js/9527.45543a54.js",revision:null},{url:"static/js/9561.1e1a16fc.js",revision:null},{url:"static/js/9565.7db1d3c1.js",revision:null},{url:"static/js/9653.6180c26b.js",revision:null},{url:"static/js/9678.0061845c.js",revision:null},{url:"static/js/9726.0e7bfef3.js",revision:null},{url:"static/js/9729.d0df8b03.js",revision:null},{url:"static/js/9823.01fd59f2.js",revision:null},{url:"static/js/9884.d738bffd.js",revision:null},{url:"static/js/9953.fb15514c.js",revision:null},{url:"static/js/9995.c82f5340.js",revision:null},{url:"static/js/app.20f872e7.js",revision:null},{url:"static/js/element-plus.3f7249cb.js",revision:null},{url:"static/js/vab-chunk-00833fa6.50601017.js",revision:null},{url:"static/js/vab-chunk-02ec2db9.3c40fa04.js",revision:null},{url:"static/js/vab-chunk-06b9cdb9.ba679065.js",revision:null},{url:"static/js/vab-chunk-1d54e4e8.dfe22e5a.js",revision:null},{url:"static/js/vab-chunk-2aa31019.6689ea1d.js",revision:null},{url:"static/js/vab-chunk-3e2fe043.fe1655e4.js",revision:null},{url:"static/js/vab-chunk-47257c03.ce8d3616.js",revision:null},{url:"static/js/vab-chunk-4e2fb6b0.fcf71be0.js",revision:null},{url:"static/js/vab-chunk-5add3539.b5ce509c.js",revision:null},{url:"static/js/vab-chunk-637fdb70.056f41d7.js",revision:null},{url:"static/js/vab-chunk-69403744.8f8a62f6.js",revision:null},{url:"static/js/vab-chunk-9386b7e9.ff90781e.js",revision:null},{url:"static/js/vab-chunk-a9a8c684.d5a4892f.js",revision:null},{url:"static/js/vab-chunk-acef12d3.a9bbc3c4.js",revision:null},{url:"static/js/vab-chunk-b886e5fb.654f9fe7.js",revision:null},{url:"static/js/vab-chunk-e7065af3.2c0cfdd4.js",revision:null},{url:"static/js/vab-plugins.5b5bc0f0.js",revision:null},{url:"static/js/vue.5fbb15da.js",revision:null},{url:"wei.ico",revision:"18d87b5bd21c2c83f5c1e74f5a80c67b"},{url:"wei.svg",revision:"1df3c2551ee842d2e67cdaa8794d3e37"}],{})}));
