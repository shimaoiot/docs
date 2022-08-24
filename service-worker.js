/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5c4fb6385de08011e106d1322213348b"
  },
  {
    "url": "assets/css/0.styles.202ad6b5.css",
    "revision": "c256df2ec54eb98a3ecfec0a78de851f"
  },
  {
    "url": "assets/img/back_top.92f72e0e.svg",
    "revision": "92f72e0e45b5ffbefbdac94fa1485815"
  },
  {
    "url": "assets/img/clock.ffb2d0be.svg",
    "revision": "ffb2d0be6522ddd61cb4d4c9c4208e65"
  },
  {
    "url": "assets/img/eye.e9087eed.svg",
    "revision": "e9087eed8e3a70f0ec6de1b8c54e6435"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/tag.f21efeeb.svg",
    "revision": "f21efeebf6677175d61f117cb8f6f116"
  },
  {
    "url": "assets/js/10.699518d0.js",
    "revision": "f8c7cb5a66725d6222711e6ce8339073"
  },
  {
    "url": "assets/js/11.3bfde4ca.js",
    "revision": "297ab6fae1f8a1f8a51924513151c223"
  },
  {
    "url": "assets/js/12.667addff.js",
    "revision": "fe71f13ee6755a862d36468808d045ce"
  },
  {
    "url": "assets/js/13.cb319bd3.js",
    "revision": "1275c4ba959002d78514bc7c0ae121ea"
  },
  {
    "url": "assets/js/14.b9b2f272.js",
    "revision": "b462886e046508da9c0f6bd4f8967cec"
  },
  {
    "url": "assets/js/15.7b25cec6.js",
    "revision": "dda11670af6d8b9cb7e07fc200ab4a70"
  },
  {
    "url": "assets/js/16.d92eee26.js",
    "revision": "235988c21cc4060bee802e405740d079"
  },
  {
    "url": "assets/js/17.d8e275f4.js",
    "revision": "18262d4e034c6c1b82f4af17cfbe8e4c"
  },
  {
    "url": "assets/js/18.4a1155ce.js",
    "revision": "5f45d0a7fc9efb10777d4a4855e1fe8d"
  },
  {
    "url": "assets/js/19.dd6cb377.js",
    "revision": "5bce7634569685c8bfad51fdad7e353a"
  },
  {
    "url": "assets/js/2.0b03438c.js",
    "revision": "65d1973d06a7dcd9ca60fc8a7df2b8a7"
  },
  {
    "url": "assets/js/20.bd6a1837.js",
    "revision": "12bf701911f36d26223195b0c0ec91b6"
  },
  {
    "url": "assets/js/21.80b40192.js",
    "revision": "4206e6c8c3fabd7d10719e872ece3155"
  },
  {
    "url": "assets/js/22.51631bc4.js",
    "revision": "eb4282c0568f20ae68feaab494abf40c"
  },
  {
    "url": "assets/js/23.29284401.js",
    "revision": "3fc84993866a9abbf35f2cfc58c12f1e"
  },
  {
    "url": "assets/js/24.8f8efd33.js",
    "revision": "d396fdbd3f14381ed07f8b046fe634d7"
  },
  {
    "url": "assets/js/25.83708301.js",
    "revision": "5080129f74953adf18dd1df654d4210c"
  },
  {
    "url": "assets/js/26.0b4763dc.js",
    "revision": "f7213ba98d455717568f773104bc35ec"
  },
  {
    "url": "assets/js/27.b6f2b9e0.js",
    "revision": "acda134edb52662991f736151522071e"
  },
  {
    "url": "assets/js/28.d6711f4e.js",
    "revision": "32bf78d16ddb06d9baaaa19da342c243"
  },
  {
    "url": "assets/js/29.4022bdb3.js",
    "revision": "3ea6f1bc9bfc1ee22e01eea39c23c8f8"
  },
  {
    "url": "assets/js/3.fa97b423.js",
    "revision": "31fce0212a53cedb1ce7c95f4ffbd293"
  },
  {
    "url": "assets/js/30.ffc17b44.js",
    "revision": "d090f1226eefedb421d0758abccf7ee8"
  },
  {
    "url": "assets/js/31.bd7f69a6.js",
    "revision": "c66437e6364fb8e0573cfa33ba17a712"
  },
  {
    "url": "assets/js/32.21b4cea5.js",
    "revision": "ba95a5d27c18bbc287268638e71a6217"
  },
  {
    "url": "assets/js/33.ad7fb2fb.js",
    "revision": "8fc4eba5efe1bf90bc1e218dc5229d5d"
  },
  {
    "url": "assets/js/34.c54321d3.js",
    "revision": "38cbfcd402cd0e0550c8577a7c985e45"
  },
  {
    "url": "assets/js/35.762631b2.js",
    "revision": "6e3daa5048c59c9f951fa2a4fc46496d"
  },
  {
    "url": "assets/js/36.f82c5ebb.js",
    "revision": "74fa239e752a282d523c8baca652182e"
  },
  {
    "url": "assets/js/37.e418d391.js",
    "revision": "dcabbea7062b3aad41ea0060fca5e790"
  },
  {
    "url": "assets/js/38.7a224bc7.js",
    "revision": "321e8bb2c35a68d2c420b0aa5614ed7e"
  },
  {
    "url": "assets/js/39.30fead2d.js",
    "revision": "87b6469e0ce2b51f149d9f98f5b6a318"
  },
  {
    "url": "assets/js/4.1bf9b9af.js",
    "revision": "34d16ecda4002af2f169587f66b483dc"
  },
  {
    "url": "assets/js/40.0a8d1eac.js",
    "revision": "1093216c39395be0838feb4d9e213cee"
  },
  {
    "url": "assets/js/41.0db8d9af.js",
    "revision": "143f759106c0f795884b723cf8da967e"
  },
  {
    "url": "assets/js/42.73ae455b.js",
    "revision": "7ca8a62825709598887702f6555a67c5"
  },
  {
    "url": "assets/js/43.29433fd4.js",
    "revision": "4df1e506dde623e117ea176fbe0613e6"
  },
  {
    "url": "assets/js/5.35615721.js",
    "revision": "2f80b0d0ec5da344c9ccf552cad420fb"
  },
  {
    "url": "assets/js/6.e6f4625e.js",
    "revision": "9e75cf14b6eadd52ba66ea67daa62d12"
  },
  {
    "url": "assets/js/7.7936645b.js",
    "revision": "32a022b2feaab3deff164ab8f9191469"
  },
  {
    "url": "assets/js/8.447355b6.js",
    "revision": "a3ea44bb89108b5fb756d9b47eaf97bc"
  },
  {
    "url": "assets/js/9.beb50e32.js",
    "revision": "f4103e1619ff18afd3ce00e85833b51a"
  },
  {
    "url": "assets/js/app.3fb84f13.js",
    "revision": "c5f99a7c4a8c02f4317236eaca1f0df4"
  },
  {
    "url": "assets/logo/back_top.svg",
    "revision": "92f72e0e45b5ffbefbdac94fa1485815"
  },
  {
    "url": "assets/logo/catalog.svg",
    "revision": "2815a6ff6aa68d2f73dc731a81acdaa8"
  },
  {
    "url": "assets/logo/clock.svg",
    "revision": "ffb2d0be6522ddd61cb4d4c9c4208e65"
  },
  {
    "url": "assets/logo/eye.svg",
    "revision": "e9087eed8e3a70f0ec6de1b8c54e6435"
  },
  {
    "url": "assets/logo/head.svg",
    "revision": "3fd0b1d0a50bcee51ec61e7aa92fd539"
  },
  {
    "url": "assets/logo/smiot.jpg",
    "revision": "af2bdeb919f437df77f4336439a4c599"
  },
  {
    "url": "assets/logo/tag.svg",
    "revision": "f21efeebf6677175d61f117cb8f6f116"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_01.png",
    "revision": "538100ec714b133b3684fdb552462e4d"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_02.png",
    "revision": "4f19a738b022630804c5f223b12a8b90"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_03.png",
    "revision": "e789705f38b89b8f3e4fd4b9bff06cc3"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04_1.png",
    "revision": "ec21bb048b1e372847606b834c5270eb"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04_2.png",
    "revision": "7f2a75d90f10d73bda45db627ce7208a"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04_3.png",
    "revision": "666f6438738a188bb45dbcaf75f90d88"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04.png",
    "revision": "16d3b45c872e56a08305149c7f608e17"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_05.png",
    "revision": "b702e62efd4a810ce183c6d3d3913fe0"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_06.png",
    "revision": "7f23729a6789ab72f48d8ed4a415e8b3"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_07.png",
    "revision": "28cf0b17e1330c1fd1875c926ab569d8"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_08.png",
    "revision": "2aab5451260c1d5e40b3053f312fdaec"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_09.png",
    "revision": "93f05dba153a947b2a1f18cc6c6f40cb"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10_1.png",
    "revision": "035c0b0cab3855e4574af5faff2d9825"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10_2.png",
    "revision": "2d699cbab13fbbd10d3fc9a9dce92646"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10.png",
    "revision": "a63cf443a42eefe08c95d91d14e332dd"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_11_1.png",
    "revision": "7be1b0b5247ff7d56dd7a02e3e5fd99f"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_11.png",
    "revision": "69489df4083e92e161de51494e435c5e"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_12.png",
    "revision": "377a30317ca3411d44f681fb34f48e8d"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_13.png",
    "revision": "bfbd79f23303f4cf84b633193c6e9086"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_14.png",
    "revision": "59a92144d8157c0fb72d30aedcfcb136"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_15.png",
    "revision": "bf6ff9b0fe6d34b8eb22296bdbb5f86f"
  },
  {
    "url": "assets/md-imgs/build_date.png",
    "revision": "289cf0e388c8fb5851e18f7f706ad51e"
  },
  {
    "url": "assets/md-imgs/canvas-01.png",
    "revision": "cf34b7d3359b8ccd534ac800f4204238"
  },
  {
    "url": "assets/md-imgs/error_boundaries_01.png",
    "revision": "8c7d3fb630b6e1d7bec4cb23d3d7b8f3"
  },
  {
    "url": "assets/md-imgs/error_boundaries_02.png",
    "revision": "5489fab8a2189d7a8b43777de261f051"
  },
  {
    "url": "assets/md-imgs/follow.png",
    "revision": "483a0299f1ffeac6e4015a7096a04a39"
  },
  {
    "url": "assets/md-imgs/fulltext-search-01.png",
    "revision": "866db35f32e0d1a6b66104f818062c24"
  },
  {
    "url": "assets/md-imgs/fulltext-search-02.png",
    "revision": "e79435b9dcfec453130d7467fcebcc74"
  },
  {
    "url": "assets/md-imgs/github_slow_01.png",
    "revision": "9834d765e6618c4bf016df202da7c1cb"
  },
  {
    "url": "assets/md-imgs/github_slow_02.png",
    "revision": "df81baaaa4fd0261907be5ca3e0d224c"
  },
  {
    "url": "assets/md-imgs/github_slow_03.png",
    "revision": "0caeda038900daab3c1c76cbaf19ec9a"
  },
  {
    "url": "assets/md-imgs/github_slow_04.png",
    "revision": "b01f9e9687ff5657adadb42ea86ca55c"
  },
  {
    "url": "assets/md-imgs/num_sound.png",
    "revision": "e4cb18d6014ad9bdab0363a5643d39ff"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_01.png",
    "revision": "0db7b8cf6d1b5df1cd8eaac378a454a9"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02_1.png",
    "revision": "dee0150672ee6a2b4d97a40edb4b342d"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02_2.png",
    "revision": "4f30d2d2a7880ead18009ffb6eded4e9"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02.png",
    "revision": "d2bb8d81f646b90f497793bcd0481465"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_03.png",
    "revision": "2eb678ffae18d9f866e48b890b84691e"
  },
  {
    "url": "assets/md-imgs/styles-change-01.png",
    "revision": "0fee56f662f8f8ed6daf72c54206cb46"
  },
  {
    "url": "assets/md-imgs/styles-change-02.png",
    "revision": "309dac2575b6dd73ff1ae635be717061"
  },
  {
    "url": "assets/md-imgs/styles-change-03.png",
    "revision": "5d6c0d875d4d02f9ed2f00902046344e"
  },
  {
    "url": "assets/md-imgs/svg/a-link.svg",
    "revision": "d5285c6ce16aa5c736585b2a38dc5b53"
  },
  {
    "url": "assets/md-imgs/taro_h5_01.png",
    "revision": "57bc91e3aaf867b127b1a32398d0b0ff"
  },
  {
    "url": "assets/md-imgs/taro_h5_02.png.png",
    "revision": "6888131d91bab378b17196bba8e83dd8"
  },
  {
    "url": "assets/md-imgs/taro-error-01.png",
    "revision": "33d291d665dbf603763a4b5b68d0aa7e"
  },
  {
    "url": "assets/md-imgs/unicode.png",
    "revision": "00166a609207bf360cd42d31f5cba1c2"
  },
  {
    "url": "assets/md-imgs/upload_many.png",
    "revision": "5e78b6f5e8815b8857c05f8bf27ed0b1"
  },
  {
    "url": "assets/md-imgs/upload_one.png",
    "revision": "96bc441f7ecc7f31762bcc721417fcd5"
  },
  {
    "url": "assets/simolink/1642062331692.png",
    "revision": "adfbd9e3911155da8a3bd6f747222fd3"
  },
  {
    "url": "assets/simolink/1642062614716.png",
    "revision": "40cf85caef92ea18a39821e40fac9c55"
  },
  {
    "url": "assets/simolink/1642062848672.png",
    "revision": "4c5fd678861b675929d39a226ed76da9"
  },
  {
    "url": "assets/simolink/1642062862790.png",
    "revision": "cf9e51941583d7e567cb6016271de104"
  },
  {
    "url": "assets/simolink/1642062879195.png",
    "revision": "37ffeb1ff97671137e2d60fb54075183"
  },
  {
    "url": "assets/simolink/1642066100806.png",
    "revision": "c6c28bd7b395601f30c6b54ffd512e71"
  },
  {
    "url": "assets/simolink/1642066165893.png",
    "revision": "99d6be70712e8fa134fb57673f362977"
  },
  {
    "url": "assets/simolink/1642066211241.png",
    "revision": "93031e163aceb9e295fe43090d5ad14b"
  },
  {
    "url": "assets/simolink/1642066645194.png",
    "revision": "5246cde70567bffeb1cc22c16897cd16"
  },
  {
    "url": "assets/simolink/1642066654262.png",
    "revision": "4dc38596c5c524c97f711f6423f31952"
  },
  {
    "url": "assets/simolink/1642066776629.png",
    "revision": "b62eb03a2691b99fc2e35070e0485de0"
  },
  {
    "url": "assets/simolink/1642066786982.png",
    "revision": "5a4dbef6f4d34a4dcc02886cc36f69d1"
  },
  {
    "url": "assets/simolink/1642084909348.png",
    "revision": "643469fb610785d32d0c819ae75a9c64"
  },
  {
    "url": "assets/simolink/b10acb192cee1d4d7acd3ed910953036.png",
    "revision": "3728dc831a59b839dfd4c251075f3cfd"
  },
  {
    "url": "assets/simolink/celue-donw.png",
    "revision": "f69772ada00f2ad41932708f14419457"
  },
  {
    "url": "assets/simolink/celue-liucheng.png",
    "revision": "706fe2f292d03d2a3d57c92b883303c7"
  },
  {
    "url": "assets/simolink/device-shadow.png",
    "revision": "1cf3ece2211bdedc6c7921a5cb93b228"
  },
  {
    "url": "assets/simolink/e0293f02f4943f943df6edbb5334b51a.png",
    "revision": "706fe2f292d03d2a3d57c92b883303c7"
  },
  {
    "url": "assets/simolink/Simolink设备日志上报.png",
    "revision": "239db148d2224b6c9f4b379a468db91f"
  },
  {
    "url": "index.html",
    "revision": "540466f12dd443d0ec0c1d13fd5c3142"
  },
  {
    "url": "notes/11-一、设备注册/设备注册.html",
    "revision": "071730a9e13b1a203c7e7ab1636b4b94"
  },
  {
    "url": "notes/20-二、协议整体介绍/协议整体结构.html",
    "revision": "2c5d19916fbdcec98bd6a43e6f6f7142"
  },
  {
    "url": "notes/30-三、设备控制/00-设备控制.html",
    "revision": "a29b552c51bc1bf3d8083882839b0e7e"
  },
  {
    "url": "notes/30-三、设备控制/10-3.1 设备属性控制.html",
    "revision": "37d45fbfa13d643098db0cf8189a8692"
  },
  {
    "url": "notes/30-三、设备控制/20-3.2 获取期望属性值.html",
    "revision": "3f090249fe6bce2a95dee3acabe9b970"
  },
  {
    "url": "notes/30-三、设备控制/30-3.3 设备编组下发.html",
    "revision": "62f48b28a133206347bc9012fad4c385"
  },
  {
    "url": "notes/30-三、设备控制/40-3.4 透传协议API.html",
    "revision": "bba8fdeb161c8cb587bc919d617d785d"
  },
  {
    "url": "notes/30-三、设备控制/50-3.5 透传协议下发.html",
    "revision": "fbc0dd6b877c954ea1983c49060fe9b8"
  },
  {
    "url": "notes/30-三、设备控制/60-3.6 透传协议上报.html",
    "revision": "58c65b79d7d3ccf095fe9ad36c85d6c1"
  },
  {
    "url": "notes/30-三、设备控制/70-3.7 网关重置.html",
    "revision": "4384efda2f35fe9c0c1738b34a263b63"
  },
  {
    "url": "notes/30-三、设备控制/80-3.8 网关组网.html",
    "revision": "fd7f37120355dc158384b6b0c12f2f49"
  },
  {
    "url": "notes/40-四、设备影子/00-设备影子.html",
    "revision": "df63e23b8791c5db8b9b428bd0d7388c"
  },
  {
    "url": "notes/40-四、设备影子/10-4.1 设备影子属性上报.html",
    "revision": "c5db801de4a1ed5212070d5a64b6ec5e"
  },
  {
    "url": "notes/40-四、设备影子/20-4.2 设备事件上报.html",
    "revision": "2ff6bf493dc4b2e5034024d5e29667f4"
  },
  {
    "url": "notes/40-四、设备影子/30-4.3 发现设备.html",
    "revision": "f53496b6fddba3ba3056c57c50abdf56"
  },
  {
    "url": "notes/40-四、设备影子/40-4.4 设备信息上报.html",
    "revision": "bb34fd1af4c52fc8e2cf41731eb82683"
  },
  {
    "url": "notes/40-四、设备影子/50-4.5 解绑设备.html",
    "revision": "9d5a2c2f1563e0be4cd212525afcd73a"
  },
  {
    "url": "notes/40-四、设备影子/60-4.6 绑定设备.html",
    "revision": "52ff75a1310f444d6fc504c5ef8aa360"
  },
  {
    "url": "notes/50-五、设备监控/00-设备监控.html",
    "revision": "44396113b8a775536b10471f1af1c7a2"
  },
  {
    "url": "notes/50-五、设备监控/10-5.1 设备日志上报通知.html",
    "revision": "7b41f1ed8e90902224a05f8e30aeb9f1"
  },
  {
    "url": "notes/50-五、设备监控/20-5.2 设备日志内容上报.html",
    "revision": "e64b95c8721cc4bf55af9c476eae3d8c"
  },
  {
    "url": "notes/50-五、设备监控/30-5.3 心跳上报.html",
    "revision": "31a607b62ecfd40128a99c6e9a693142"
  },
  {
    "url": "notes/50-五、设备监控/40-5.4 截屏上报.html",
    "revision": "8cb7e54aba2c6b478fafd76bea4450de"
  },
  {
    "url": "notes/50-五、设备监控/50-5.5 日志上报消息 answerReport.html",
    "revision": "d04c0263407e5e0f2589f9e0fa1d7637"
  },
  {
    "url": "notes/60-六、OTA升级/00-6.1 OTA 消息推送.html",
    "revision": "9d24af3fdf067c6ef6b7dd8a938399f1"
  },
  {
    "url": "notes/60-六、OTA升级/10-6.2 OTA 包拉取接口.html",
    "revision": "ba40790d9e8ea322681874f82d5ae935"
  },
  {
    "url": "notes/60-六、OTA升级/20-6.3 OTA 设备固件升级成功或失败通知.html",
    "revision": "c385b08a1b34fdd95c13b62a7ce8e0f0"
  },
  {
    "url": "notes/70-七、策略/00-策略交互流程.html",
    "revision": "98d7a333af9b334946864d25ea262831"
  },
  {
    "url": "notes/70-七、策略/10-7.1 策略下发.html",
    "revision": "e0cb4f8e3cc1c24a85c3631ee8b0f71b"
  },
  {
    "url": "notes/70-七、策略/20-7.2 策略删除.html",
    "revision": "2f1e0fc1e8f0452b6729ce88ec636168"
  },
  {
    "url": "notes/70-七、策略/30-7.3 策略下发回调.html",
    "revision": "cd238ace41fe85565106a75773e2baab"
  },
  {
    "url": "notes/70-七、策略/40-7.4 策略控制.html",
    "revision": "862a235023ded48491d5d558ad504598"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
