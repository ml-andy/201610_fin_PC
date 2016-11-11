<?
    //------------------------------------------------------------
    //include file, default value
    //------------------------------------------------------------
    include_once('include/application.php');


	//------------------------------------------------------------
	//設定資料庫連線
	//------------------------------------------------------------
	$db = new dbstuff;
	$db->connect(DB_HOST, DB_UID, DB_PWD, DB_NAME);


    //------------------------------------------------------------
    //獎項 月月抽
    //------------------------------------------------------------
	$sql = "select u.name, u.phone, l.source, l.gift, l.ldate, us.sn " . 
	       "from tbuser_q4 u, tbuser_sn_q4 us, tblottery l " . 
	       "where u.id = us.uid and us.lottery = l.id and u.lt1 > 0 and us.status = 1 and us.display = 1 " . 
	       "order by l.ldate desc, us.uid asc";
	$result_slt = $db->query($sql);

	$list = array();
	while($tmp = $db->fetch_array($result_slt))
		$list[] = $tmp;
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
      <a href="javascript:;" class="menua m6">登入/出帳號</a>
      <a href="javascript:;" class="menua m7">回首頁</a>
      <a href="javascript:;" class="menua m8">玩遊戲</a>
      <a href="javascript:;" class="menua m9">登錄序號</a>
    </div>
  </div>
  <div class="wrapper">
     <div class="page award_list">
       <div class="com_title"></div>
       <div class="com_main">
           <div class="content">
               <div class="searchbox">
                   <select class="list_style">
                       <option value="選擇欲查詢中獎名單">選擇欲查詢中獎名單</option>
                       <option value="好禮月月抽">好禮月月抽</option>
                       <option value="遊戲週週抽">遊戲週週抽</option>
                   </select>
                   <input type="text" class="phone" placeholder="輸入電話後3碼">
                   <div class="btn">
                       <div class="submit"></div>
                   </div>
               </div>
               <div class="list_month">
                   <div class="title"></div>


                   <div class="box">
                       <div class="st">SONY PS4+PS VR(豪華全配包)</div>
                       <div class="date">105/12/19(一)</div>
                       <ul>
                           <li class="t">
                               <div class="item">姓名</div>
                               <div class="item">連絡電話</div>
                               <div class="item">得獎序號</div>
                           </li>
                           <li>
                               <div class="item">周*輪</div>
                               <div class="item">0912******</div>
                               <div class="item">HG-*****678</div>
                           </li>
                           <li>
                               <div class="item">郭*呈</div>
                               <div class="item">0915******</div>
                               <div class="item">AG-*****638</div>
                           </li>
                       </ul>
                   </div>
                   <div class="box">
                       <div class="st">Garmin Forerunner®735XT運動手錶</div>
                       <div class="date">105/12/19(一)</div>
                       <ul>
                           <li class="t">
                               <div class="item">姓名</div>
                               <div class="item">連絡電話</div>
                               <div class="item">得獎序號</div>
                           </li>
                           <li>
                               <div class="item">周*輪</div>
                               <div class="item">0912******</div>
                               <div class="item">HG-*****678</div>
                           </li>
                           <li>
                               <div class="item">郭*呈</div>
                               <div class="item">0915******</div>
                               <div class="item">AG-*****638</div>
                           </li>
                       </ul>
                   </div>
                   <div class="box">
                       <div class="st">Garmin Vivofit3聯名健身手環</div>
                       <div class="date">105/12/19(一)</div>
                       <ul>
                           <li class="t">
                               <div class="item">姓名</div>
                               <div class="item">連絡電話</div>
                               <div class="item">得獎序號</div>
                           </li>
                           <li>
                               <div class="item">周*輪</div>
                               <div class="item">0912******</div>
                               <div class="item">HG-*****678</div>
                           </li>
                           <li>
                               <div class="item">郭*呈</div>
                               <div class="item">0915******</div>
                               <div class="item">AG-*****638</div>
                           </li>
                       </ul>
                   </div>
               </div>
               <!--<div class="list_week">
                   <div class="title"></div>
                   <div class="box">
                       <div class="st">FIN健康補給飲料580ml乙箱</div>
                       <div class="date">105/11/16(三)</div>
                       <ul>
                           <li class="t">
                               <div class="item">姓名</div>
                               <div class="item">連絡電話</div>
                               <div class="item">得獎序號</div>
                           </li>
                           <li>
                               <div class="item">周*輪</div>
                               <div class="item">0912******</div>
                               <div class="item">HG-*****678</div>
                           </li>
                           <li>
                               <div class="item">郭*呈</div>
                               <div class="item">0915******</div>
                               <div class="item">AG-*****638</div>
                           </li>
                       </ul>
                   </div>
                   <div class="box">
                       <div class="st">iPhone7 32GB</div>
                       <div class="date">105/11/16(三)</div>
                       <ul>
                           <li class="t">
                               <div class="item">姓名</div>
                               <div class="item">連絡電話</div>
                               <div class="item">得獎序號</div>
                           </li>
                           <li>
                               <div class="item">周*輪</div>
                               <div class="item">0912******</div>
                               <div class="item">HG-*****678</div>
                           </li>
                           <li>
                               <div class="item">郭*呈</div>
                               <div class="item">0915******</div>
                               <div class="item">AG-*****638</div>
                           </li>
                       </ul>
                   </div>
               </div>-->
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