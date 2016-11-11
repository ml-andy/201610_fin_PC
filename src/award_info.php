<?
    //------------------------------------------------------------
    //include file, default value
    //------------------------------------------------------------
    include_once('include/application.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>標題</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 <meta name="viewport" content="width=device-width,user-scalable=no"> 
<meta name="description" content="你也有機會成為奧拚的潛力新星嗎？快參加FIN的《全民拚動會》，完成拙戲就有機會最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
<meta name="keywords" content="FIN x GARMIN 全民運動會"/>
<meta property="og:title" content="原來只要做點輕拚動，就能獲得iPhone7？"/>
<meta property="og:type" content="website"/>    
<meta property="og:url" content="http://www.heysong-fin.com.tw/fin2016_q4"/>
 <meta property="og:image" content="http://fin2016-q4.homakimi-digital.com/images/fb.jpg"/> 
<meta property="og:site_name" content="FIN x GARMIN 全民運動會"/>
<meta property="og:description" content="你也有機會成為奧拚的潛力新星嗎？快參加FIN的《全民拚動會》，完成拙戲就有機會最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<!---->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<!--css-->
<link rel="stylesheet" href="css/common.css"/>
<!--js-->
<script type="text/javascript" src="//connect.facebook.net/zh_TW/all.js"></script>
<script src="lib/device.min.js"></script>
<script src="js/google_ga.js"></script>
<script src="js/app.js"></script>
<script src="//d17m68fovwmgxj.cloudfront.net/js/appier-track-v1.7.js"></script>
<script>Appier.appierPVTrack("Km0z0x46tdS3hxS",0,"false","1UGfQf0j71WmU68");</script>
<script>
(function(){
if (typeof window.APPIER_RETARGET == 'undefined') {
    (function(w, d, s, m) {
        var f = d.getElementsByTagName('script')[0],
            j = d.createElement('script'),
            ns = 'APPIER_RETARGET';
        w._appierSendQueue = w._appierSendQueue || [];
        w['appierRetargetJson'] = { id: s, site: m};
        j.async = true;
        j.src = '//jscdn.appier.net/aa.js?id='+m;
        f.parentNode.insertBefore(j, f);
        !w[ns] && (w[ns] = {});
        (!w[ns].send) && (w[ns].send = function(j){
            w._appierSendQueue.push(j);
        });
     })(window, document, 'JiOf', 'heysong-fin.com.tw');
}
})();
</script>

</head>
<body>
  <div class="loading">
    <div class="main">
      Loading...
    </div>
  </div>
  <div class="header">
    <div class="logo"></div>
  </div>
  <div class="menu">
    <div class="menua_box">
      <a href="javascript:;" class="menua m1">查詢紀錄</a>
      <a href="javascript:;" class="menua m2">活動辦法</a>
      <a href="javascript:;" class="menua m3">獎項介紹</a>
      <a href="javascript:;" class="menua m4">得獎名單</a>
      <a href="javascript:;" class="menua m5">FB分享</a>
      <a href="javascript:;" class="menua m6 <?=($uid != "" ? "on" : "")?>">登入/出帳號</a>
      <a href="javascript:;" class="menua m7">回首頁</a>
      <a href="javascript:;" class="menua m8">玩遊戲</a>
      <a href="javascript:;" class="menua m9">登錄序號</a>
    </div>
  </div>
  <div class="wrapper">
     <div class="page award_info">
       <div class="com_title"></div>
       <div class="com_main">
           <div class="content">
               <div class="st1"></div>
               <div class="word">
                   <span class="red">一、SONY PlayStation 4 +PlayStation VR<br>豪華全配包(每月抽出5名/共10名)</span><br>
                   <img src="images/award_info_prize1.png" class="prize1">
                   1.內含PlayStation 4 x1、DUALSHOCK™4無線控制器x1、VR頭戴裝置x1、PlayStation Camera x1、PlayStation Move x2 <br><br><br><br>
                   <span class="red martop">二、Garmin Forerunner®735XT運動手錶<br>(每月抽出4名/共8名)</span><br>
                   <img src="images/award_info_prize2.png" class="prize2">
                   1.全天候手腕式心率監測，跑步時不用戴心跳帶也能測得正確心率。<br>
                   2.進階跑步動態與騎乘動態資訊：如步幅、觸地時間平衡、移動參數、功率分佈、踩踏施力偏移等多項指標。<br>
                   3.提供最大攝氧量、乳酸閾值、完賽預估和體能恢復建議。<br>
                   4.豐富藍牙連結3應用：智慧提示、自動上傳資料至 Garmin Connect™、即時位置追蹤等功能。<br>
                   5.在Connect IQ™ 商店下載專屬個人的資料頁面、錶面、小工具與<br>應用程式。<br><br>
                   <img src="images/award_info_prize3.png" class="prize3">
                   <span class="red">三、Garmin Vivofit3聯名運動手環<br>(每月抽出80名/共160名)</span><br>
                   1.長達1年的待機時間。<br>
                   2.追蹤並顯示步數、距離、消耗熱量與高強度活動時間等資訊。<br>
                   3.在Garmin Connect™觀看Move IQ™所自動分辨的活動類型。<br>
                   4.久坐聲音提示提醒您隨時保持活躍且積極的每個時刻。<br>
                   5.儲存的活動資料、訓練計畫及分享的活動會自動同步到Garmin Connect。<br>
               </div>
               <div class="st2"></div>
               <div class="word">
                   <span class="red">
                       <img src="images/award_info_prize4.png" class="prize4">
                       一、FIN健康補給飲料580ml乙箱(每週抽10名/共120名)<br><br>
                       二、iPhone7 32GB(最後一週加碼抽2名/共2名)<br>
                   </span>
                   <span class="s">
                       *贈品價值請依各贈品販售商之官網建議售價為準<br>
                       *活動贈品以實際寄出之實物為準
                    </span>
               </div>
           </div>
       </div>
     </div>
  </div>

  <!-- popup -->
  <div class="qrcode_popup">
    <div class="closebtn close"></div>
    <div class="main"></div>
    <div class="cover close"></div>
  </div>
</body>
</html>