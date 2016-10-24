<?
    //------------------------------------------------------------
    //include file, default value
    //------------------------------------------------------------
    include_once('include/application.php');


	//------------------------------------------------------------
	//檢查是否已登入
	//------------------------------------------------------------
	if (isset($_COOKIE['uid'])) {
		if ($_COOKIE['uid'] == "") header("Location: login_member.php");
		else {
			setcookie("uid", '', time()-3600, "/");
			msgReport("index.html", "您已成功登出");
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
<title>FIN x GARMIN 全民運動會</title>
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
<script src="/js/jquery.ajaxform.js"></script>
<script src="/js/index.js"></script>
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
      <a href="javascript:;" class="menua m6">登入/出帳號</a>
      <a href="javascript:;" class="menua m7">回首頁</a>
      <a href="javascript:;" class="menua m8">玩遊戲</a>
      <a href="javascript:;" class="menua m9">登錄序號</a>
    </div>
  </div>
  <div class="wrapper">
     <div class="page login_member">
       <div class="com_title"></div>
       <div class="com_main">
           <form class="form-login">
           <div class="content">
               <div class="btn">
                   <div class="nodata_btn">
                       <a href="login_member_nodata.php"></a>
                   </div>
                   <div class="hasdata_btn on">
                       <a href="javascript:;"></a>
                   </div>
               </div>
               <div class="des"></div>
               <ul class="data">
                   <li><input type="text" name="ident" class="idcard" placeholder="請填寫身分證字號 (英文字母請大寫)"></li>
                   <li><input type="text" name="phone" class="phone" placeholder="請輸入您的聯絡手機號碼"></li>
                   <li>
                       <input type="text" name="auth" class="vercode" placeholder="請輸入4碼半形數字">
                       <img src="/include/imgfile.php" alt="" class="vercode_img">
                   </li>
                   <li>
                       <div class="submitbtn">確認送出</div>
                   </li>
               </ul>
           </div>
           </form>
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