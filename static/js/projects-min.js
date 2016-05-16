$(document).ready(function  () {

	// alert("gfcbgfct")

	$(".leftar").click(function(){
		// alert("");
		$(".outer-projects").animate({
			'scrollLeft':"+=150"
		})
	});
	$(".rightar").click(function(){
		// alert("");
		$(".outer-projects").animate({
			'scrollLeft':"-=150"
		})
	})

	$(".outer-projects").scroll(function(){

		if($(this).scrollLeft()>0){
			$(".rightar").css({
				'opacity':'1',
				'cursor':'pointer'
			})
		}
	
		else{
			$(".rightar").css({
				'opacity':'0.4',
				'cursor':'default'
			});
			
		}

		 if($(this).scrollLeft()>450){
			$(".leftar").css({
				'opacity':'0.4',
				'cursor':'default'
			})
		}
		else{
			$(".leftar").css({
				'opacity':'1',
				'cursor':'pointer'
			})
		}

	});

	$(window).scroll(function(){
		if($(window).scrollTop()>99){
			$(".pro-slider").css({
				'position':'fixed',
				'top':'-99px'
			})
			$(".arrow").css({
				'top':'115px'
			})
			$(".f-outer").css({
				'margin-top':'160px'
			})
			$(".f-top").css({
				'width':'40px',
				'height':'40px'
			})
		}
		else{
			$(".pro-slider").css({
				'position':'relative',
				'top':'0px'
				
			})
			$(".arrow").css({
				'top':'75px'
			})
			$(".f-outer").css({
				'margin-top':'0px'
			})
			$(".f-top").css({
				'width':'0px',
				'height':'0px'
			})
		}
	})

	


// linkings
	$(".gmas-tab").click(function(){
		location.hash="getmeashop"
		
	})

	$(".f-tab").click(function(){
		location.hash="founch"
		
	})
	$(".info-tab").click(function(){
		location.hash="infoconnect"
		
	})
	$(".zeal-tab").click(function(){
		location.hash="zealicon"
		
	})
	$(".coursera-tab").click(function(){
		location.hash="recoursera"
		
	})
	$(".data-tab").click(function(){
		location.hash="data-analysis"
		
	})
	$(".yemmy-tab").click(function(){
		location.hash="yemmymaids"
		
	})
	$(".zeo-tab").click(function(){
		location.hash="zeometree"
		
	})
	$(".msgup-tab").click(function(){
		location.hash="messageup"
		
	})
	$(".portfolio-tab").click(function(){
		location.hash="portfolio"
		
	})
	$(".pmc-tab").click(function(){
		location.hash="prepmycar"
		
	})
	$(".ecommerce-tab").click(function(){
		location.hash="ecommerce"
		
	})


// history for hash projects



    var lastHash = location.hash;
		if(lastHash=="#founch"){

				$(".f-tab").addClass("active");
			}
		else if(lastHash=="#getmeashop"){
			$(".gmas-tab").addClass("active");
		}
		else if(lastHash=="#infoconnect"){
			$(".info-tab").addClass("active");
		}
		else if(lastHash=="#zealicon"){
			$(".zeal-tab").addClass("active");
		}
		else if(lastHash=="#recourera"){
			$(".coursera-tab").addClass("active");
		}
		else if(lastHash=="#data-analysis"){
			$(".data-tab").addClass("active");
		}
		else if(lastHash=="#yemmymaids"){
			$(".yemmy-tab").addClass("active");
		}
		else if(lastHash=="#zeometree"){
			$(".zeo-tab").addClass("active");
		}
		else if(lastHash=="#messageup"){
			$(".msgup-tab").addClass("active");
		}
		else if(lastHash=="#portfolio"){
			$(".portfolio-tab").addClass("active");
		}
		else if(lastHash=="#prepmycar"){
			$(".pmc-tab").addClass("active");
		}
		else if(lastHash=="#ecommerce"){
			$(".ecommerce-tab").addClass("active");
		}
   

  	if(lastHash.substr(1)!="" && lastHash.substr(1)!=null)
		$(".pro-content").load("../"+ lastHash.substr(1) +"")
	else
		$(".pro-content").html("<div class='no-hash'>Please select any project to view it!</div>");


    $(window).bind('hashchange', function() {
        var newHash = location.hash;
      

      	var hash=newHash.substr(1);

      	if(hash!="" || hash!=null)
      	$(".pro-content").load("../"+ hash +"")
      
        lastHash = newHash;
    });

 $(".inner-projects ul li").click(function(){
 	$(this).addClass("active").siblings().removeClass("active")
 })






})