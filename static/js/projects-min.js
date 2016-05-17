$(document).ready(function  () {



	$(".leftar").click(function(){

		$(".outer-projects").animate({
			'scrollLeft':"-=150"
		})
	});
	$(".rightar").click(function(){
		
		$(".outer-projects").animate({
			'scrollLeft':"+=150"
		})
	})

	$(".outer-projects").scroll(function(){

		if($(this).scrollLeft()>0){
			$(".leftar").css({
				'opacity':'1',
				'cursor':'pointer'
			})
		}
	
		else{
			$(".leftar").css({
				'opacity':'0.4',
				'cursor':'default'
			});
			
		}

		 if($(this).scrollLeft()>450){
			$(".rightar").css({
				'opacity':'0.4',
				'cursor':'default'
			})
		}
		else{
			$(".rightar").css({
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
			$(".f-outer,.g-outer,.ym-outer,.ki-outer,.h-outer,.po-outer,.pmc-outer,ec-outer,.sc-outer,.re-outer,.ze-outer,.info-outer").css({
				'top':'0px'
			})
			$(".f-top,.g-top,.ym-top,.ki-top,.h-top,.po-top,.pmc-top,.ec-top,.sc-top,.re-top,.ze-top,.info-top").css({
				'width':'40px',
				'height':'40px'
			})
		}
		else{
			$(".pro-slider").css({
				'position':'absolute',
				'top':'0px'

				
			})
			$(".arrow").css({
				'top':'75px'
			})
			$(".f-outer,.g-outer,.ym-outer,.ki-outer,.h-outer,.po-outer,.pmc-outer.ec-outer,.sc-outer,.re-outer,.ze-outer,.info-outer").css({
				'top':'0px'
			})
			$(".f-top,.g-top,.ym-top,.ki-top,.h-top,.po-top,.pmc-top,.ec-top,.sc-top,.re-top,.ze-top,.info-top").css({
				'width':'0px',
				'height':'0px'
			})
		}
	})

	

$(".loader").hide();
// linkings
	$(".gmas-tab").click(function(){
		location.hash="getmeashop";
		$(".pro-content").load("../getmeashop")
		
	})

	$(".f-tab").click(function(){

		// $(".loader").fadeIn();

		location.hash="founch"
		$(".pro-content").load("../founch")
	})
	$(".info-tab").click(function(){
		location.hash="infoconnect";
		$(".pro-content").load("../infoconnect")
		
	})
	$(".zeal-tab").click(function(){
		location.hash="zealicon";
		$(".pro-content").load("../zealicon")
		
	})
	$(".coursera-tab").click(function(){
		location.hash="recoursera";
		$(".pro-content").load("../recoursera")
		
	})
	$(".data-tab").click(function(){
		location.hash="data-analysis";
		$(".pro-content").load("../data-analysis")
		
	})
	$(".yemmy-tab").click(function(){
		location.hash="yemmymaids"
		$(".pro-content").load("../yemmymaids")
	})
	$(".zeo-tab").click(function(){
		location.hash="zeometree";
		$(".pro-content").load("../zeometree")
		
	})
	$(".msgup-tab").click(function(){
		location.hash="messageup";
		$(".pro-content").load("../messageup")
		
	})
	$(".portfolio-tab").click(function(){
		location.hash="portfolio";
		$(".pro-content").load("../portfolio")
		
	})
	$(".pmc-tab").click(function(){
		location.hash="prepmycar";
		$(".pro-content").load("../prepmycar")
		
	})
	$(".ecommerce-tab").click(function(){
		location.hash="ecommerce";
		$(".pro-content").load("../ecommerce")
		
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
		else if(lastHash=="#recoursera"){
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
   

  	if(lastHash.substr(1)!="" && lastHash.substr(1)!=null){
		// $(".pro-content").load("../"+ lastHash.substr(1) +"")

	$(".loader").show();
			$("body").css({
				'overflow':'hidden'
			})
			$(".pro-content").hide();
      		$(".pro-content").load("../"+ lastHash.substr(1) +"",function(){
      			$(".loader").delay(1000).fadeOut();
      			$(".pro-content").fadeIn();
      			$("body").css({
				'overflow-y':'scroll'
			})
      			// $(".pro-content").fadeIn();
      			// $(".pro-content").load()
      		})
}

	else
		$(".pro-content").html("<div class='no-hash'>Please select one project to view it!</div>");


    $(window).bind('hashchange', function() {
        var newHash = location.hash;
      

      	var hash=newHash.substr(1);

      	if(newHash=="#founch"){

				$(".f-tab").addClass("active");
			}
		else if(newHash=="#getmeashop"){
			$(".gmas-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#infoconnect"){
			$(".info-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#zealicon"){
			$(".zeal-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#recoursera"){
			$(".coursera-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#data-analysis"){
			$(".data-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#yemmymaids"){
			$(".yemmy-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#zeometree"){
			$(".zeo-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#messageup"){
			$(".msgup-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#portfolio"){
			$(".portfolio-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#prepmycar"){
			$(".pmc-tab").addClass("active").siblings().removeClass("active");
		}
		else if(newHash=="#ecommerce"){
			$(".ecommerce-tab").addClass("active").siblings().removeClass("active");
		}



      	if(hash!="" || hash!=null){
			$(".loader").show();
			$("body").css({
				'overflow':'hidden'
			})
			$(".pro-content").hide();
      		$(".pro-content").load("../"+ hash +"",function(){
      			$(".loader").delay(1000).fadeOut();
      			$(".pro-content").fadeIn();
      			$("body").css({
				'overflow-y':'scroll'
			})
      			// $(".pro-content").fadeIn();
      			// $(".pro-content").load()
      		})
      		
      	}
      
      
        lastHash = newHash;
    });

 $(".inner-projects ul li").click(function(){
 	$(this).addClass("active").siblings().removeClass("active")
 })






})