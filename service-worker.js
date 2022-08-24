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
    "revision": "0f8a2cee1276c281294c7595cf303b62"
  },
  {
    "url": "assets/css/0.styles.25923a73.css",
    "revision": "a2cca49007ef7fcbf52cfa4e3f94ac18"
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
    "url": "assets/js/10.28dcde62.js",
    "revision": "a158de13fceb3b0f095ca10838b6d730"
  },
  {
    "url": "assets/js/11.3bfde4ca.js",
    "revision": "297ab6fae1f8a1f8a51924513151c223"
  },
  {
    "url": "assets/js/12.bc289c37.js",
    "revision": "bbce3fb9eda945095263113b8ec2572a"
  },
  {
    "url": "assets/js/13.8d2f3fd1.js",
    "revision": "7a4def7f6effd84a14e843c6d037cd0c"
  },
  {
    "url": "assets/js/14.5db58073.js",
    "revision": "5038aad832d98c48a24f6ef28ab44c69"
  },
  {
    "url": "assets/js/15.bb2cb3e7.js",
    "revision": "4e1ee00a4d3fe029bb9e97f6fbb94aa3"
  },
  {
    "url": "assets/js/16.2686c78b.js",
    "revision": "cd25084594fc64b14832fddbfbc92bb8"
  },
  {
    "url": "assets/js/17.cefab4bb.js",
    "revision": "b519457427c3b3d57efa7d5229b4f4ec"
  },
  {
    "url": "assets/js/18.e6e62e49.js",
    "revision": "c9aa3bad120e49a06ff3777dd3923a82"
  },
  {
    "url": "assets/js/19.744be164.js",
    "revision": "50ee299c0c43dc0e59e11ab75e6ac8ec"
  },
  {
    "url": "assets/js/2.0b03438c.js",
    "revision": "65d1973d06a7dcd9ca60fc8a7df2b8a7"
  },
  {
    "url": "assets/js/20.f32875f5.js",
    "revision": "39f862527ecc92ee3f27e697921e1a07"
  },
  {
    "url": "assets/js/21.8146c598.js",
    "revision": "3b5b2176a82bdca48c6ceea2d1ba7b76"
  },
  {
    "url": "assets/js/22.989c232d.js",
    "revision": "797a2e9936bbf5303d744635b53111c9"
  },
  {
    "url": "assets/js/23.c611f32e.js",
    "revision": "1c26c3478473d23b4fc13517640b4aaa"
  },
  {
    "url": "assets/js/24.174153d2.js",
    "revision": "e15643340be41f82b3c87ecb002db0df"
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
    "url": "assets/js/28.19e16c00.js",
    "revision": "f154c71ff2c60f155594c4cd8dfa793c"
  },
  {
    "url": "assets/js/29.6f400493.js",
    "revision": "9859577075b3f10154a60a6ab881fa45"
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
    "url": "assets/js/34.b6ab0a6f.js",
    "revision": "3b0686490f2b803ce1cfc79c10ff56b8"
  },
  {
    "url": "assets/js/35.da85dfaa.js",
    "revision": "22d0224d72752ad36cd0f347dfa196fb"
  },
  {
    "url": "assets/js/36.f82c5ebb.js",
    "revision": "74fa239e752a282d523c8baca652182e"
  },
  {
    "url": "assets/js/37.4025ebfb.js",
    "revision": "da48165a060f19e7d4144106cc4b7af5"
  },
  {
    "url": "assets/js/38.42abbe78.js",
    "revision": "2a35025307bbde2c45c109930f20e46e"
  },
  {
    "url": "assets/js/39.c3581c06.js",
    "revision": "b4aa787abe0b036b24278ca280075bf7"
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
    "url": "assets/js/app.ae98c2f9.js",
    "revision": "53da78d12a5760d62f4bbaa04f66591e"
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
    "revision": "7f75af5d2fb1580e450ac4397ae43bdc"
  },
  {
    "url": "notes/11-一、设备注册/设备注册.html",
    "revision": "ca47290df2767d6b67f4d1f78ae82225"
  },
  {
    "url": "notes/20-二、协议整体介绍/协议整体结构.html",
    "revision": "5b6f1610c3dd9242ecd639bf15c0f803"
  },
  {
    "url": "notes/30-三、设备控制/00-设备控制.html",
    "revision": "f2bcecedf1c0440f3d7f5f1b0a1aa1d9"
  },
  {
    "url": "notes/30-三、设备控制/10-3.1 设备属性控制.html",
    "revision": "320bf694e9d2b89ccdae7615941da686"
  },
  {
    "url": "notes/30-三、设备控制/20-3.2 获取期望属性值.html",
    "revision": "c7244366400ec117b36db8cb0845fd7b"
  },
  {
    "url": "notes/30-三、设备控制/30-3.3 设备编组下发.html",
    "revision": "bf4bd2bb7ebe49c921851beac53f1d61"
  },
  {
    "url": "notes/30-三、设备控制/40-3.4 透传协议API.html",
    "revision": "2dab95fedfd4f9c8117907c72dca3749"
  },
  {
    "url": "notes/30-三、设备控制/50-3.5 透传协议下发.html",
    "revision": "fb8a2f05b6ece59326d713caf626a5f9"
  },
  {
    "url": "notes/30-三、设备控制/60-3.6 透传协议上报.html",
    "revision": "6bc3e926e3ceabe944432891d21b3a00"
  },
  {
    "url": "notes/30-三、设备控制/70-3.7 网关重置.html",
    "revision": "e4f3acbfd876fe9407f6fc672cb01bd1"
  },
  {
    "url": "notes/30-三、设备控制/80-3.8 网关组网.html",
    "revision": "f6a6ed40a4dda3bf671ba4c84e18ebd1"
  },
  {
    "url": "notes/40-四、设备影子/00-设备影子.html",
    "revision": "59d532115eb67090bba422d497b718d8"
  },
  {
    "url": "notes/40-四、设备影子/10-4.1 设备影子属性上报.html",
    "revision": "7a34e16d5e17c58563c63a50ed41ed3c"
  },
  {
    "url": "notes/40-四、设备影子/20-4.2 设备事件上报.html",
    "revision": "da93fde2d03a1f3fde5d0189c342e586"
  },
  {
    "url": "notes/40-四、设备影子/30-4.3 发现设备.html",
    "revision": "16dd6a058202f5d7d3bcb2679fcf6000"
  },
  {
    "url": "notes/40-四、设备影子/40-4.4 设备信息上报.html",
    "revision": "fe6f24e7ed787712873c30ad376fe293"
  },
  {
    "url": "notes/40-四、设备影子/50-4.5 解绑设备.html",
    "revision": "c3dd75d28ed6be791133c34c00255553"
  },
  {
    "url": "notes/40-四、设备影子/60-4.6 绑定设备.html",
    "revision": "5c4f9387ac66dcadddaa7d78fd09d0bc"
  },
  {
    "url": "notes/50-五、设备监控/00-设备监控.html",
    "revision": "5c32ce7a87c583d93de11a50a43614cd"
  },
  {
    "url": "notes/50-五、设备监控/10-5.1 设备日志上报通知.html",
    "revision": "028186f9403dddb3c0cd28678e2787bb"
  },
  {
    "url": "notes/50-五、设备监控/20-5.2 设备日志内容上报.html",
    "revision": "40b3739f60a6602de752d49e655775ff"
  },
  {
    "url": "notes/50-五、设备监控/30-5.3 心跳上报.html",
    "revision": "a446164bf8409c6d6fd813d915b8f1c1"
  },
  {
    "url": "notes/50-五、设备监控/40-5.4 截屏上报.html",
    "revision": "738e0751d7dc257aef0b31544022c9ad"
  },
  {
    "url": "notes/50-五、设备监控/50-5.5 日志上报消息 answerReport.html",
    "revision": "98e693f8646db597457af367436dbd5f"
  },
  {
    "url": "notes/60-六、OTA升级/00-6.1 OTA 消息推送.html",
    "revision": "e19be75561dbaaee9cbdd5bc8905ac5d"
  },
  {
    "url": "notes/60-六、OTA升级/10-6.2 OTA 包拉取接口.html",
    "revision": "8c328d6acf7c38579045d22980ac3340"
  },
  {
    "url": "notes/60-六、OTA升级/20-6.3 OTA 设备固件升级成功或失败通知.html",
    "revision": "c5db72848d9619547a0e95748c510b80"
  },
  {
    "url": "notes/70-七、策略/00-策略交互流程.html",
    "revision": "ac8b6a14f1ecf19137e2a35c744ee3fb"
  },
  {
    "url": "notes/70-七、策略/10-7.1 策略下发.html",
    "revision": "0245785e886eff0e05c8d2f3f6b07e0c"
  },
  {
    "url": "notes/70-七、策略/20-7.2 策略删除.html",
    "revision": "ef0dce8f2cb5025f462d3584535933ba"
  },
  {
    "url": "notes/70-七、策略/30-7.3 策略下发回调.html",
    "revision": "8c03b84ce7cdae4a9019a063f6bd3935"
  },
  {
    "url": "notes/70-七、策略/40-7.4 策略控制.html",
    "revision": "f553aefacf8f6fc17352dc376d92e4e7"
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
