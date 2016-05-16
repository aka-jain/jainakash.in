$(document).ready(function () {
      $(".loader-text").hide();
$("body").css({
  'background':'#fff',
  'visibility':'visible'
});
  $(".mainpage").hide();
  
    $(".loader").css({
        'visibility':'visible'
      });
     $("body").animate({
    scrollTop:"0"
  },100);
 
var check_time;
  $(window).load(function(){
      $("body").animate({
    scrollTop:"0"
  },100)
  $(".f-outer,.h-outer,.g-outer,.ym-outer,.ki-outer,.pmc-outer,.ec-outer,.po-outer").hide();
    $(".loader").delay(1200).fadeOut();
    $(".mainpage").css({
      'display':'block'
    });
    $("body").css({
  'background':'#000'
})
      $(".mainpage").show();
      $("body").css({
        'overflow-y':'scroll'
      })
      $(".load-dyn").html("Welcome").hide().fadeIn(1000);
    clearTimeout(check_time);
   
  })
// $(".loader").hide();
// $(".gmas").click(function(){
//   $(".loader").show();
//   $(".g-outer").load(function(){
//     $(".loader").fadeOut();
//   })
// })

// $(".load-dyn").delay(4000).html("Loading...");
// $(".load-dyn").delay(7000).html("Loading2...");
var sentences = ["Loading...", "Still loading...","Have patience, trying to load...",  "Don't worry just few seconds more...",
                  "Connection seems to be slow...","Trying loading again..."],
    iter = 0,
    itr_dot=0;

function changeText(){
   // $(".load-dyn").html(sentences[(iter%sentences.length)-1]).show().fadeOut() ;
   $(".load-dyn").html(sentences[iter%sentences.length]).hide().fadeIn() ;
    iter++;

    // function changedot(){

    //   var dots=[".","..","..."];
    
    //   $(".load-dyn").html(sentences[iter%sentences.length]).append(dots[itr_dot%dots.length]);
    //   itr_dot++;
    //   setTimeout(changedot,1000);
    // }
    // changedot();
  check_time=setTimeout(changeText,5500);
}
changeText();

    $(".nav-line").click(function () {
        $(".over-toggle").css({
            'display': 'block'
        });

        $(".side-mob-black").css({
            'width': '100%'
        })
        $(".side-mob-white").css({
            'margin-left': '0px'
        })

        $(".line-l").css({
            'display': 'none'
        })
        $(".line-s").css({
            '-webkit-transform': 'rotate(45deg)',
            '-webkit-transform-origin': 'top left',
            'width': '15px',
            'margin-top': '14px',
            'margin-left': '0px'


        })
        $(".line-s2").css({
            '-webkit-transform': 'rotate(-45deg)',
            '-webkit-transform-origin': 'top left',
            'width': '15px',
            'margin-top': '10px',
            'margin-left': '0px'

            //            'top': '10px',
            //            'right': '1px',

        });

    });
    $(".over-toggle , .side-mob-black,.side-mob-white").click(function () {
        $(".over-toggle").css({
            'display': 'none'
        });

        $(".line-l").css({
            'display': 'block',
            'margin-top': '4px'
        })
        $(".side-mob-black").css({
            'width': '0%'
        })
        $(".side-mob-white").css({
            'margin-left': '-200px'
        })

        $(".line-s").css({
            '-webkit-transform': 'rotate(0deg)',

            'width': '12px',
            'margin-top': '14px',
            'margin-left': '3px'


        })
        $(".line-s2").css({
            '-webkit-transform': 'rotate(0deg)',

            'width': '12px',
            'margin-top': '4px',
            'margin-left': '3px',


        })
    });


var fadeStart=0
    ,fadeUntil_m=$(".mainpage").outerHeight()
    ,fadeUntil_p=$(".project-outer").outerHeight() 
    ,fadeUntil_e=$(".experience-outer").outerHeight() 
    ,fadeUntil_s=$(".skills-outer").outerHeight() 
    ,fadeUntil_r=$(".recom-outer").outerHeight() 
     
    ,fading_m = $('.mainpage'),
    fading_p = $('.project-outer'),
    fading_e = $('.experience-outer'),
    fading_s = $('.skills-outer'),
    fading_r = $('.recom-outer'),

    s=0;
    
$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0;
        var f=0;
        

    if( offset<=fadeStart ){
        opacity=1;
        fading_m.css({
          'opacity':opacity

        });

    }else if( offset<=fadeUntil_m ){
        opacity=1-offset/fadeUntil_m;
        f=1.7-opacity;
        
        fading_m.css({
          'opacity':opacity
        });
      }

    // }


    // else if( offset<= $(window).height()+(10* $(window).height()/100) ){
    //     opacity=1;
    //     fading_p.css({
    //       'opacity':opacity,
    //       '-webkit-filter': 'blur(0px)'
    //     });

    // }
    // else if( offset<= $(window).outerHeight()*2 ){
    //     opacity=1-(offset/($(window).outerHeight()*2));
    //     f=1.7-opacity;
    //     fading_p.css({
    //       'opacity':opacity,
    //       '-webkit-filter': 'blur('+f+'px)'
    //     });
    //     fading_m.css('opacity',0);
        
    // }


    // else if( offset<= $(window).height()*2+(18* $(window).height()/100) ){
    //     opacity=1;
       
    //     fading_e.css({
    //       'opacity':opacity,
    //       '-webkit-filter': 'blur(0px)'
    //     });

    // }
    // else if( offset<= $(window).height()*3+(18* $(window).height()/100) ){
    //     opacity=1-(offset/( $(window).height()*3+(200* $(window).height()/100) ));
    //     f=1.7-opacity;
    //     fading_e.css({
    //       'opacity':opacity,
    //       '-webkit-filter': 'blur('+f+'px)'
    //     });
    //     fading_p.css('opacity',0);
    // }


    //  else if( offset<= $(window).height()*3+(30* $(window).height()/100) ){
    //     opacity=1;
    //     fading_s.css('opacity',opacity);
    // }
    //  else if( offset<= $(window).height()*4+(30* $(window).height()/100) ){
    //     opacity=1-(offset/( $(window).height()*4+(30* $(window).height()/100) ));
    //     fading_s.css('opacity',opacity);
    //     fading_e.css('opacity',0);
    // }


    //  else if( offset<= $(window).height()*4+(40* $(window).height()/100) ){
    //     opacity=1;
    //     fading_r.css('opacity',opacity);
    // }
    //  else if( offset<= $(window).height()*5+(30* $(window).height()/100) ){
    //     opacity=1-(offset/( $(window).height()*5+(50* $(window).height()/100) ));
    //     fading_r.css('opacity',opacity);
    //     fading_s.css('opacity',0);
    // }

});


c=0;
// Method
// =============================================
$(".nav-home .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(45deg)'
    })
$(".side-mob-nav  .nav-home").css({
  'color':'#252525'
})

function fix() {
  var scroll_top = $(window).scrollTop();

  if(scroll_top>=2 && scroll_top<$(window).height()*5+(35 * $(window).height()/100) ){
    $(".links li i,.links h4").hide();
  }
  else if(scroll_top>=$(window).height()*5+(35 * $(window).height()/100)){
     $(".links h4").css({
      'color':'#000'
     })
     $(".links li i,.links h4").show();
  }
  else if(scroll_top<5){
    $(".links h4").css({
      'color':'#A01111'
     })
     $(".links li i,.links h4").show();
  }

// if($(window).width()>=800)

  if (scroll_top >= $(window).height() && c===0) { // detection!
    $(".project-outer").css({
                'margin-top':'0px',
                'position':'fixed'
            });
    $(".nav-out li .diamond, .line").css({
      'background':'#545454'
     });
    $(".nav-out .nav-name").css({
      'color':'#545454'
     })
     $("#diamond").css({
      'border':'2px solid #545454'
     })
    $(".nav-home .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
     $(".nav-projects .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".page-num").hide().show().html("2");
     $(".page-name").hide().show().html("Projects");

     $(".side-mob-nav  .nav-projects").css({
  'color':'#252525'
})
      $(".side-mob-nav  .nav-home").css({
  'color':'#9a9a9a'
})

    c=1;
  } else if(scroll_top < $(window).height() && c===1){
     $(".project-outer").css({
                 'margin-top':'100vh',
                'position':'absolute'
            });
     
    $(".nav-out li .diamond, .line").css({
      'background':'#9E0D0D'
     });
    $(".nav-out .nav-name").css({
      'color':'#9E0D0D'
     })
     $("#diamond").css({
      'border':'2px solid #9E0D0D'
     })
     $(".nav-home .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-projects .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
    $(".page-num").hide().show().html("1");
     $(".page-name").hide().show().html("Home");
      $(".side-mob-nav  .nav-projects").css({
  'color':'#9a9a9a'
})
      $(".side-mob-nav  .nav-home").css({
  'color':'#252525'
})


     c=0;
  }
  else if(scroll_top >=$(window).height()*2+(5* $(window).height()/100) && c===1){
     $(".experience-outer").css({
                 'margin-top':'0px',
                'position':'fixed'
            })
     $(".nav-out li .diamond, .line").css({
      'background':'rgb(253, 179, 78)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(253, 179, 78)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(253, 179, 78)'
     })
     $(".nav-exp .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-projects .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("3");
       $(".page-name").hide().show().html("Experience");
        $(".side-mob-nav  .nav-exp").css({
  'color':'#252525'
})
      $(".side-mob-nav  .nav-projects").css({
  'color':'#9a9a9a'
})
     c=2;
      
  }
  else if(scroll_top <$(window).height()*2+(5* $(window).height()/100) && c===2){
     $(".experience-outer").css({
                 'margin-top':'205vh',
                'position':'absolute',

            })
     $(".nav-out li .diamond, .line").css({
      'background':'#545454'
     });
    $(".nav-out .nav-name").css({
      'color':'#545454'
     })
     $("#diamond").css({
      'border':'2px solid #545454'
     })
     $(".nav-projects .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-exp .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("2");
       $(".page-name").hide().show().html("Projects");
        $(".side-mob-nav  .nav-exp").css({
  'color':'#9a9a9a'
})
      $(".side-mob-nav  .nav-projects").css({
  'color':'#252525'
})
     c=1;
    }
    else if(scroll_top >=$(window).height()*3+(18* $(window).height()/100) && c===2){
     $(".skills-outer").css({
                 'margin-top':'0',
                'position':'fixed',

            })
     $(".nav-out li .diamond, .line").css({
      'background':' rgb(10, 35, 86)'
     });
    $(".nav-out .nav-name").css({
      'color':' rgb(10, 35, 86)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(10, 35, 86)'
     })
     $(".nav-skills .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-exp .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("4");
       $(".page-name").hide().show().html("Skills");
        $(".side-mob-nav  .nav-skills").css({
  'color':'#252525'
})
      $(".side-mob-nav  .nav-exp").css({
  'color':'#9a9a9a'
})
     c=3;
    }
     else if(scroll_top <$(window).height()*3+(18 * $(window).height()/100) && c===3){
     $(".skills-outer").css({
                 'margin-top':'318vh',
                'position':'absolute',

            })
     $(".nav-out li .diamond, .line").css({
      'background':'rgb(253, 179, 78)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(253, 179, 78)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(253, 179, 78)'
     })
     $(".nav-exp .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-skills .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("3");
       $(".page-name").hide().show().html("Experience");
        $(".side-mob-nav  .nav-skills").css({
  'color':'#9a9a9a'
})
      $(".side-mob-nav  .nav-exp").css({
  'color':'#252525'
})
     c=2;
    }
    else if(scroll_top >=$(window).height()*4+(30* $(window).height()/100) && c===3){
     $(".recom-outer").css({
                 'margin-top':'0',
                'position':'fixed',

            })
     $(".nav-out li .diamond, .line").css({
      'background':'rgb(69, 117, 21)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(69, 117, 21)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(69, 117, 21)'
     })
     $(".nav-more .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-skills .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("5");
       $(".page-name").hide().show().html("More");
        $(".side-mob-nav  .nav-more").css({
  'color':'#252525'
})
      $(".side-mob-nav  .nav-skills").css({
  'color':'#9a9a9a'
})
     c=4;
    }
    else if(scroll_top <$(window).height()*4+(30 * $(window).height()/100) && c===4){
     $(".recom-outer").css({
                 'margin-top':'430vh',
                'position':'absolute',

            })
     $(".nav-out li .diamond, .line").css({
      'background':'rgb(10, 35, 86)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(10, 35, 86)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(10, 35, 86)'
     })
     $(".nav-skills .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-more .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("4");
       $(".page-name").hide().show().html("Skills");
        $(".side-mob-nav  .nav-more").css({
  'color':'#9a9a9a'
})
      $(".side-mob-nav  .nav-skills").css({
  'color':'#252525'
})
     c=3;
    }
    else if(scroll_top >=$(window).height()*5+(35 * $(window).height()/100) && c===4){
      $(".nav-out li .diamond, .line").css({
      'background':'rgb(0,0,0)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(0,0,0)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(0,0,0)'
     })
     $(".nav-contact .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-more .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-num").hide().show().html("6");
       $(".page-name").hide().show().html("Contact");
        $(".side-mob-nav  .nav-contact").css({
  'color':'#252525'
})
      $(".side-mob-nav  .nav-more").css({
  'color':'#9a9a9a'
})
     c=5;
    }
    else if(scroll_top <$(window).height()*5+(35 * $(window).height()/100) && c===5){
      $(".nav-out li .diamond, .line").css({
      'background':'rgb(69, 117, 21)'
     });
    $(".nav-out .nav-name").css({
      'color':'rgb(69, 117, 21)'
     })
     $("#diamond").css({
      'border':'2px solid rgb(69, 117, 21)'
     })
     $(".nav-more .dot-menu").css({
      'border-radius':'0px 0px',
      'transform':'rotate(135deg)'
    })
     $(".nav-contact .dot-menu").css({
      'border-radius':'50% 50%',
      'transform':'rotate(0deg)'
    })
      $(".page-name").hide().show().html("More");
      $(".page-num").hide().show().html("5");
       $(".side-mob-nav  .nav-contact").css({
  'color':'#9a9a9a'
})
      $(".side-mob-nav  .nav-more").css({
  'color':'#252525'
})
     c=4;
    }
  
}

// Handler
// =================================================

$(window).scroll(fix);
   
$(".but").click(function () {


        $(".pro-outer").animate({

            scrollLeft: "+=205"
        }, 400);
    })
    $(".but2").click(function () {


        $(".pro-outer").animate({

            scrollLeft: "-=205"
        }, 400);
    })

    $(".founch-div").hide();

    $(".pro-outer ul li .founch").click(function () {
              
               $(".founch-div").fadeIn("slow");
    })
    $(".cut").click(function () {
              
               $(".founch-div").fadeOut("slow");
    })


// experience-outer

$(".arrow-up").click(function(){

    $(".left-exp").animate({
        scrollTop:"-=80"
    },200);
})
$(".arrow-down").click(function(){

    $(".left-exp").animate({
        scrollTop:"+=80"
    },200);
})



var width_check=$(window).width();

if(width_check>990){
    $(".skills-up").click(function(){

    $(".skills-out").animate({
        scrollTop:"-=110"
    },200);
})
$(".skills-down").click(function(){

    $(".skills-out").animate({
        scrollTop:"+=110"
    },200);
})
}
else{
    $(".skills-up").click(function(){

    $(".skills-out").animate({
        scrollTop:"-=90"
    },200);
})
$(".skills-down").click(function(){

    $(".skills-out").animate({
        scrollTop:"+=90"
    },200);
})

$(".skills-in").css({
    'height':'450px'
})
}


 $(".warn-msg").hide();


$(".nav-home,.logo").click(function(){

  $("html,body").animate({
    scrollTop:"0"
  },700)
});

$(".nav-projects").click(function(){

  $("html,body").animate({
    scrollTop:$(window).height()
  },700)
});

$(".nav-exp").click(function(){

  $("html,body").animate({
    scrollTop:$(window).height()*2+(10* $(window).height()/100)
  },700)
});

$(".nav-skills").click(function(){

  $("html,body").animate({
    scrollTop:$(window).height()*3+(20* $(window).height()/100)
  },700)
});

$(".nav-more").click(function(){

  $("html,body").animate({
    scrollTop:$(window).height()*4+(32* $(window).height()/100)
  },700)
});

$(".nav-contact").click(function(){

  $("html,body").animate({
    scrollTop:$(window).height()*5+(50* $(window).height()/100)
  },700)
});


// project-parts-js
setInterval(function(){


var  check_f=$(".f-outer").scrollTop(),
     check_h=$(".h-outer").scrollTop(),
     check_g=$(".g-outer").scrollTop(),
     check_ym=$(".ym-outer").scrollTop(),
     check_ki=$(".ki-outer").scrollTop(),
     check_pmc=$(".pmc-outer").scrollTop(),
     check_ec=$(".ec-outer").scrollTop(),
     check_po=$(".po-outer").scrollTop()


if(check_f>=300){
  $(".f-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".f-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_h>=300){
  $(".h-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".h-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_g>=300){
  $(".g-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".g-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_ym>=300){
  $(".ym-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".ym-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_ki>=300){
  $(".ki-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".ki-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_pmc>=300){
  $(".pmc-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".pmc-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_ec>=300){
  $(".ec-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".ec-top").css({
    'width':'0px',
    'height':'0px'
  })
}
if(check_po>=300){
  $(".po-top").css({
    'width':'50px',
    'height':'50px'
  })
}
else{
   $(".po-top").css({
    'width':'0px',
    'height':'0px'
  })
}

})

$(".f-top").click(function(){
$(".f-outer").animate({
    scrollTop:"0"
  },500)
})
$(".h-top").click(function(){
$(".h-outer").animate({
    scrollTop:"0"
  },500)
})
$(".g-top").click(function(){
$(".g-outer").animate({
    scrollTop:"0"
  },500)
})
$(".ym-top").click(function(){
$(".ym-outer").animate({
    scrollTop:"0"
  },500)
})
$(".ki-top").click(function(){
$(".ki-outer").animate({
    scrollTop:"0"
  },500)
})
$(".pmc-top").click(function(){
$(".pmc-outer").animate({
    scrollTop:"0"
  },500)
})
$(".ec-top").click(function(){
$(".ec-outer").animate({
    scrollTop:"0"
  },500)
})
$(".po-top").click(function(){
$(".po-outer").animate({
    scrollTop:"0"
  },500)
})

 $(".f-outer").fadeOut();

$(".founch,.zoom1").click(function(){
  $(".f-outer").hide().fadeIn();
  $("body").css({
    'overflow':'hidden'
  })
})

$(".f-cross").click(function(){
  $("body").css({
    'overflow-y':'scroll'
  })
  $(".f-outer,.ms-outer,.po-outer,.ec-outer, .ym-outer, .g-outer, .ki-outer, .h-outer,.pmc-outer").fadeOut();
  player.pauseVideo();
})

// call hititproject====

$(".h-outer").hide();

$(".hitit,.zoom2").click(function(){
  $(".h-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})



// call getmeashop project==========
$(".g-outer").hide();

$(".gmas,.zoom3").click(function(){
  $(".g-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})


// call yemmy made project==========
$(".ym-outer").hide();

$(".ym,.zoom4").click(function(){
  $(".ym-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})

// call kilig project
$(".ki-outer").hide();

$(".ki,.zoom5").click(function(){
  $(".ki-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})

// call prepmycar project
$(".pmc-outer").hide();

$(".pmc,.zoom6").click(function(){
  $(".pmc-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})

// call ecommerce project
$(".ec-outer").fadeOut();

$(".tap,.zoom7").click(function(){
  $(".ec-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})

// call ecommerce project
$(".po-outer").hide();

$(".portfolio,.zoom8").click(function(){
  $(".po-outer").hide().fadeIn();
   $("body").css({
    'overflow':'hidden'
  })
})





// video===



$(".vid-over").click(function(){
  player.playVideo();
  $(".vid-over").fadeOut();
})


});
