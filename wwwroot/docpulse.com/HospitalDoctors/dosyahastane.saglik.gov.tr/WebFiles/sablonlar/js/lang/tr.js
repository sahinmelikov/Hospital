$(document).ready(function(){ 
	  
	// Language Settings TR

	var sb = "T.C. Sağlık Bakanlığı";
	var sb_url = "https://saglik.gov.tr";
	
	$(".sb_link").attr({
		href: ""+sb_url+"",
		target: "_blank"
	});
	
	
	$(".lang-homepage").html("Anasayfa"); 
	$("#search-result").html("Ara"); 
	// $(".lang-engelliler-icin").html('<a href="/erisilebilirlikik">  <span > Erişebilirlilik </span> </a>'); 
	// $(".lang-engelliler-icin-mobiles").html('<a href="/erisilebilirlikik"> <i class="fa fa-eye"> </i>  <span>  </span> </a> '); 
	// $(".lang-engelliler-icin-icon").html('<a href="/erisilebilirlikik"> <i class="fa fa-eye"> </i>  <span>  </span> </a> '); 
	$(".lang-site-map").html('Site Ağacı'); 
	$(".lang-site-map-mobile").html('<a href="/siteagaci"> <i class="fa fa-sitemap"> </i> <span> </span>  </a>   '); 
	$(".lang-search").html("Arama Yap"); 
	$("#typeahead").attr("placeholder","Aranacak Kelimeyi Giriniz");
	$(".lang-search-results").html("Arama Sonuçları");
	

	$(".update-date-text").html("Güncellenme Tarihi"); 
	$(".add-date-text").html("Eklenme Tarihi"); 
	$(".menu-lang-read-more").html("Daha Fazlası"); 
	$(".lang-read-more").html("Daha Fazlası"); 
	
	$(".buradasiniz").html("Buradasınız");
 
	 

	$(".lang-copy").html('Copyright ©'); 
	$(".lang-copyright").html('<a href="'+sb_url+'" target="_blank" title="'+sb+'">  <strong> '+sb+' </strong>  </a> Tüm hakları saklıdır.'); 

	var form_title  = $("#form_title").attr("title"); 
	$(".form_title").html(""+form_title+"");

	$(".close_modals").html('Kapat'); 

	// doktorlar

	$(".dr_name").html("Ad Soyad:"); 
	$(".dr_unvan").html("Ünvan:"); 
	$(".dr_bolum").html("Bölüm:"); 
	$(".dr_iletisim").html("İletişim:"); 
	
	$(".footer_addres_title").html("Bize Ulaşın"); 
	$(".footer_addres").html("Adres:"); 
	$(".footer_phone").html("Telefon:"); 
	$(".footer_email").html("E-Posta:"); 
	
	
	$(".hizli_baglantilar").html("Hızlı Bağlantılar"); 
	
	
	
	$(".cerez_title").html("Çerez Politikası"); 
	$(".cerez_text").html("Sitemizde sizlere daha iyi hizmet verebilmek için gizliliğe uygun şekilde çerezler kullanmaktayız. Çerez politikamızı inceleyebilirsiniz."); 
	$(".cerez_button_text").html("Tamam"); 
	  
	  
});


$(document).ready(function() {
	
	
    var titles 		= "COVID-19 Aşısı Bilgilendirme Platformu";
    var site_path 	= "https://dosyamerkez.saglik.gov.tr/WebFiles/Banner/Covid19/banner-site-asi.jpg";
    var mobile_path = "https://dosyamerkez.saglik.gov.tr/WebFiles/Banner/Covid19/banner-mobil-asi.jpg";
	var banner_link = "https://covid19asi.saglik.gov.tr/";
 
    // Şablon 1
    // $('<div class="container banner_sablon_1" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-1");
   
    // Şablon 2
    // $('<div class="container banner_sablon_2" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-2");
   
    // Şablon 3
    // $('<div class="container banner_sablon_3" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-3");
   
    // Şablon 4
    // $('<div class="container banner_sablon_4" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-4");
 
	 
    // Medical Tourism Banner
     //$('<div class="container medical_toursim_banner" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".medical_tourism_banner");
 
    
    // Şablon 5
    // $('<div class="container banner_sablon_5" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-5");
    
    // Şablon 6
    // $('<div class="container banner_sablon_6" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-6");
    
	// Şablon 7
     //$('<div class="container banner_sablon_7" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-7");

    // Şablon 8
    //$('<div class="container banner_sablon_8" id="auto_banner">  <a class="alert_banner" href="'+banner_link+'" target="_blank" title="' + titles + '"> <img class="site_banner shadow" src="' + site_path + '" /> <img class="mobile_banner shadow" src="' + mobile_path + '" /> </a>   </div>  <br />').insertAfter(".fixed-banner-8");
  	
 
});




	