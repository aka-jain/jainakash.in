	$(document).ready(function() {
	    function a() {
	        $(".load-dyn").html(e[f % e.length]).hide().fadeIn(), f++, d = setTimeout(a, 5500)
	    }

	    function b() {
	        var a = $(window).scrollTop();
	        a >= 2 && a < 5 * $(window).height() + 35 * $(window).height() / 100 ? $(".links li i,.links h4").hide() : a >= 5 * $(window).height() + 35 * $(window).height() / 100 && $(window).height() >= 680 ? ($(".links h4").css({
	            color: "#000"
	        }), $(".links li i,.links h4").show()) : 5 > a && ($(".links h4").css({
	            color: "#A01111"
	        }), $(".links li i,.links h4").show()), a >= $(window).height() && 0 === c ? ($(".project-outer").css({
	            "margin-top": "0px",
	            position: "fixed"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "#545454"
	        }), $(".nav-out .nav-name").css({
	            color: "#545454"
	        }), $("#diamond").css({
	            border: "2px solid #545454"
	        }), $(".nav-home .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".nav-projects .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".page-num").hide().show().html("2"), $(".page-name").hide().show().html("Projects"), $(".side-mob-nav  .nav-projects").css({
	            color: "#252525"
	        }), $(".side-mob-nav  .nav-home").css({
	            color: "#9a9a9a"
	        }), c = 1) : a < $(window).height() && 1 === c ? ($(".project-outer").css({
	            "margin-top": "100vh",
	            position: "absolute"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "#9E0D0D"
	        }), $(".nav-out .nav-name").css({
	            color: "#9E0D0D"
	        }), $("#diamond").css({
	            border: "2px solid #9E0D0D"
	        }), $(".nav-home .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-projects .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("1"), $(".page-name").hide().show().html("Home"), $(".side-mob-nav  .nav-projects").css({
	            color: "#9a9a9a"
	        }), $(".side-mob-nav  .nav-home").css({
	            color: "#252525"
	        }), c = 0) : a >= 2 * $(window).height() + 5 * $(window).height() / 100 && 1 === c ? ($(".experience-outer").css({
	            "margin-top": "0px",
	            position: "fixed"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "rgb(253, 179, 78)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(253, 179, 78)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(253, 179, 78)"
	        }), $(".nav-exp .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-projects .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("3"), $(".page-name").hide().show().html("Experience"), $(".side-mob-nav  .nav-exp").css({
	            color: "#252525"
	        }), $(".side-mob-nav  .nav-projects").css({
	            color: "#9a9a9a"
	        }), c = 2) : a < 2 * $(window).height() + 5 * $(window).height() / 100 && 2 === c ? ($(".experience-outer").css({
	            "margin-top": "205vh",
	            position: "absolute"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "#545454"
	        }), $(".nav-out .nav-name").css({
	            color: "#545454"
	        }), $("#diamond").css({
	            border: "2px solid #545454"
	        }), $(".nav-projects .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-exp .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("2"), $(".page-name").hide().show().html("Projects"), $(".side-mob-nav  .nav-exp").css({
	            color: "#9a9a9a"
	        }), $(".side-mob-nav  .nav-projects").css({
	            color: "#252525"
	        }), c = 1) : a >= 3 * $(window).height() + 18 * $(window).height() / 100 && 2 === c ? ($(".skills-outer").css({
	            "margin-top": "0",
	            position: "fixed"
	        }), $(".nav-out li .diamond, .line").css({
	            background: " rgb(10, 35, 86)"
	        }), $(".nav-out .nav-name").css({
	            color: " rgb(10, 35, 86)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(10, 35, 86)"
	        }), $(".nav-skills .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-exp .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("4"), $(".page-name").hide().show().html("Skills"), $(".side-mob-nav  .nav-skills").css({
	            color: "#252525"
	        }), $(".side-mob-nav  .nav-exp").css({
	            color: "#9a9a9a"
	        }), c = 3) : a < 3 * $(window).height() + 18 * $(window).height() / 100 && 3 === c ? ($(".skills-outer").css({
	            "margin-top": "318vh",
	            position: "absolute"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "rgb(253, 179, 78)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(253, 179, 78)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(253, 179, 78)"
	        }), $(".nav-exp .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-skills .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("3"), $(".page-name").hide().show().html("Experience"), $(".side-mob-nav  .nav-skills").css({
	            color: "#9a9a9a"
	        }), $(".side-mob-nav  .nav-exp").css({
	            color: "#252525"
	        }), c = 2) : a >= 4 * $(window).height() + 30 * $(window).height() / 100 && 3 === c ? ($(".recom-outer").css({
	            "margin-top": "0",
	            position: "fixed"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "rgb(69, 117, 21)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(69, 117, 21)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(69, 117, 21)"
	        }), $(".nav-more .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-skills .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("5"), $(".page-name").hide().show().html("More"), $(".side-mob-nav  .nav-more").css({
	            color: "#252525"
	        }), $(".side-mob-nav  .nav-skills").css({
	            color: "#9a9a9a"
	        }), c = 4) : a < 4 * $(window).height() + 30 * $(window).height() / 100 && 4 === c ? ($(".recom-outer").css({
	            "margin-top": "430vh",
	            position: "absolute"
	        }), $(".nav-out li .diamond, .line").css({
	            background: "rgb(10, 35, 86)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(10, 35, 86)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(10, 35, 86)"
	        }), $(".nav-skills .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-more .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("4"), $(".page-name").hide().show().html("Skills"), $(".side-mob-nav  .nav-more").css({
	            color: "#9a9a9a"
	        }), $(".side-mob-nav  .nav-skills").css({
	            color: "#252525"
	        }), c = 3) : a >= 5 * $(window).height() + 35 * $(window).height() / 100 && 4 === c ? ($(".nav-out li .diamond, .line").css({
	            background: "rgb(0,0,0)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(0,0,0)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(0,0,0)"
	        }), $(".nav-contact .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-more .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-num").hide().show().html("6"), $(".page-name").hide().show().html("Contact"), $(".side-mob-nav  .nav-contact").css({
	            color: "#252525"
	        }), $(".side-mob-nav  .nav-more").css({
	            color: "#9a9a9a"
	        }), c = 5) : a < 5 * $(window).height() + 35 * $(window).height() / 100 && 5 === c && ($(".nav-out li .diamond, .line").css({
	            background: "rgb(69, 117, 21)"
	        }), $(".nav-out .nav-name").css({
	            color: "rgb(69, 117, 21)"
	        }), $("#diamond").css({
	            border: "2px solid rgb(69, 117, 21)"
	        }), $(".nav-more .dot-menu").css({
	            "border-radius": "0px 0px",
	            transform: "rotate(135deg)"
	        }), $(".nav-contact .dot-menu").css({
	            "border-radius": "50% 50%",
	            transform: "rotate(0deg)"
	        }), $(".page-name").hide().show().html("More"), $(".page-num").hide().show().html("5"), $(".side-mob-nav  .nav-contact").css({
	            color: "#9a9a9a"
	        }), $(".side-mob-nav  .nav-more").css({
	            color: "#252525"
	        }), c = 4)
	    }
	    $(".loader-text").hide(), $("body").css({
	        background: "#fff",
	        visibility: "visible"
	    }), $(".mainpage").hide(), $(".loader").css({
	        visibility: "visible"
	    }), $("body").animate({
	        scrollTop: "0"
	    }, 100);
	    var d;
	    $(window).load(function() {
	        $("body").animate({
	            scrollTop: "0"
	        }, 100), $(".f-outer,.h-outer,.g-outer,.ym-outer,.ki-outer,.pmc-outer,.ec-outer,.po-outer").hide(), $(".loader").delay(1200).fadeOut(), $(".mainpage").css({
	            display: "block"
	        }), $("body").css({
	            background: "#000"
	        }), $(".mainpage").show(), $("body").css({
	            "overflow-y": "scroll"
	        }), $(".load-dyn").html("Welcome").hide().fadeIn(1e3), clearTimeout(d)
	    });
	    var e = ["Loading...", "Still loading...", "Have patience, trying to load...", "Don't worry just a few seconds more...", "Connection seems to be slow..."],
	        f = 0;
	    a(), $(".nav-line").click(function() {
	        $(".over-toggle").css({
	            display: "block"
	        }), $(".side-mob-black").css({
	            width: "100%"
	        }), $(".side-mob-white").css({
	            "margin-left": "0px"
	        }), $(".line-l").css({
	            display: "none"
	        }), $(".line-s").css({
	            "-webkit-transform": "rotate(45deg)",
	            "-webkit-transform-origin": "top left",
	            width: "15px",
	            "margin-top": "14px",
	            "margin-left": "0px"
	        }), $(".line-s2").css({
	            "-webkit-transform": "rotate(-45deg)",
	            "-webkit-transform-origin": "top left",
	            width: "15px",
	            "margin-top": "10px",
	            "margin-left": "0px"
	        })
	    }), $(".over-toggle , .side-mob-black,.side-mob-white").click(function() {
	        $(".over-toggle").css({
	            display: "none"
	        }), $(".line-l").css({
	            display: "block",
	            "margin-top": "4px"
	        }), $(".side-mob-black").css({
	            width: "0%"
	        }), $(".side-mob-white").css({
	            "margin-left": "-200px"
	        }), $(".line-s").css({
	            "-webkit-transform": "rotate(0deg)",
	            width: "12px",
	            "margin-top": "14px",
	            "margin-left": "3px"
	        }), $(".line-s2").css({
	            "-webkit-transform": "rotate(0deg)",
	            width: "12px",
	            "margin-top": "4px",
	            "margin-left": "3px"
	        })
	    });
	    var g = 0,
	        h = $(".mainpage").outerHeight(),
	        i = ($(".project-outer").outerHeight(), $(".experience-outer").outerHeight(), $(".skills-outer").outerHeight(), $(".recom-outer").outerHeight(), $(".mainpage"));
	    $(".project-outer"), $(".experience-outer"), $(".skills-outer"), $(".recom-outer"), $(window).bind("scroll", function() {
	        var a = $(document).scrollTop(),
	            b = 0,
	            c = 0;
	        g >= a ? (b = 1, i.css({
	            opacity: b
	        })) : h >= a && (b = 1 - a / h, c = 1.7 - b, i.css({
	            opacity: b
	        }))
	    }), c = 0, $(".nav-home .dot-menu").css({
	        "border-radius": "0px 0px",
	        transform: "rotate(45deg)"
	    }), $(".side-mob-nav  .nav-home").css({
	        color: "#252525"
	    }), $(window).scroll(b), $(".but").click(function() {
	        $(".pro-outer").animate({
	            scrollLeft: "+=220"
	        }, 400)
	    }), $(".but2").click(function() {
	        $(".pro-outer").animate({
	            scrollLeft: "-=220"
	        }, 400)
	    }), $(".founch-div").hide(), $(".pro-outer ul li .founch").click(function() {
	        $(".founch-div").fadeIn("slow")
	    }), $(".cut").click(function() {
	        $(".founch-div").fadeOut("slow")
	    }), $(".arrow-up").click(function() {
	        $(".left-exp").animate({
	            scrollTop: "-=80"
	        }, 200)
	    }), $(".arrow-down").click(function() {
	        $(".left-exp").animate({
	            scrollTop: "+=80"
	        }, 200)
	    });
	    var j = $(window).width();
	    j > 990 ? ($(".skills-up").click(function() {
	        $(".skills-out").animate({
	            scrollTop: "-=110"
	        }, 200)
	    }), $(".skills-down").click(function() {
	        $(".skills-out").animate({
	            scrollTop: "+=110"
	        }, 200)
	    })) : ($(".skills-up").click(function() {
	        $(".skills-out").animate({
	            scrollTop: "-=90"
	        }, 200)
	    }), $(".skills-down").click(function() {
	        $(".skills-out").animate({
	            scrollTop: "+=90"
	        }, 200)
	    }), $(".skills-in").css({
	        height: "450px"
	    })), $(".warn-msg").hide(), $(".nav-home,.logo").click(function() {
	        $("body").animate({
	            scrollTop: "0"
	        }, 700)
	    }), $(".nav-projects").click(function() {
	        $("body").animate({
	            scrollTop: $(window).height()
	        }, 700)
	    }), $(".nav-exp").click(function() {
	        $("body").animate({
	            scrollTop: 2 * $(window).height() + 10 * $(window).height() / 100
	        }, 700)
	    }), $(".nav-skills").click(function() {
	        $("body").animate({
	            scrollTop: 3 * $(window).height() + 20 * $(window).height() / 100
	        }, 700)
	    }), $(".nav-more").click(function() {
	        $("body").animate({
	            scrollTop: 4 * $(window).height() + 32 * $(window).height() / 100
	        }, 700)
	    }), $(".nav-contact").click(function() {
	        $("body").animate({
	            scrollTop: 5 * $(window).height() + 50 * $(window).height() / 100
	        }, 700)
	    }), setInterval(function() {
	        var a = $(".f-outer").scrollTop(),
	            b = $(".h-outer").scrollTop(),
	            c = $(".g-outer").scrollTop(),
	            d = $(".ym-outer").scrollTop(),
	            e = $(".ki-outer").scrollTop(),
	            f = $(".pmc-outer").scrollTop(),
	            g = $(".ec-outer").scrollTop(),
	            h = $(".po-outer").scrollTop(),
	            i = $(".z-outer").scrollTop(),
	            j = $(".msg-outer").scrollTop();
	        a >= 300 ? $(".f-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".f-top").css({
	            width: "0px",
	            height: "0px"
	        }), b >= 300 ? $(".h-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".h-top").css({
	            width: "0px",
	            height: "0px"
	        }), c >= 300 ? $(".g-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".g-top").css({
	            width: "0px",
	            height: "0px"
	        }), d >= 300 ? $(".ym-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".ym-top").css({
	            width: "0px",
	            height: "0px"
	        }), e >= 300 ? $(".ki-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".ki-top").css({
	            width: "0px",
	            height: "0px"
	        }), f >= 300 ? $(".pmc-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".pmc-top").css({
	            width: "0px",
	            height: "0px"
	        }), g >= 300 ? $(".ec-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".ec-top").css({
	            width: "0px",
	            height: "0px"
	        }), h >= 300 ? $(".po-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".po-top").css({
	            width: "0px",
	            height: "0px"
	        }), i >= 300 ? $(".z-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".z-top").css({
	            width: "0px",
	            height: "0px"
	        }), j >= 300 ? $(".msg-top").css({
	            width: "50px",
	            height: "50px"
	        }) : $(".msg-top").css({
	            width: "0px",
	            height: "0px"
	        })
	    }), $(".f-top").click(function() {
	        $(".f-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".h-top").click(function() {
	        $(".h-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".g-top").click(function() {
	        $(".g-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".ym-top").click(function() {
	        $(".ym-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".ki-top").click(function() {
	        $(".ki-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".pmc-top").click(function() {
	        $(".pmc-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".ec-top").click(function() {
	        $(".ec-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".po-top").click(function() {
	        $(".po-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".z-top").click(function() {
	        $(".z-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".msg-top").click(function() {
	        $(".msg-outer").animate({
	            scrollTop: "0"
	        }, 500)
	    }), $(".f-outer").fadeOut(), $(".founch,.zoom1").click(function() {
	        $(".f-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".f-cross").click(function() {
	        $("body").css({
	            "overflow-y": "scroll"
	        }), $(".z-outer,.msg-outer,.f-outer,.ms-outer,.po-outer,.ec-outer, .ym-outer, .g-outer, .ki-outer, .h-outer,.pmc-outer").fadeOut()
	    }), $(".h-outer").hide(), $(".hitit,.zoom2").click(function() {
	        $(".h-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".g-outer").hide(), $(".gmas,.zoom3").click(function() {
	        $(".g-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".ym-outer").hide(), $(".ym,.zoom4").click(function() {
	        $(".ym-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".ki-outer").hide(), $(".ki,.zoom5").click(function() {
	        $(".ki-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".pmc-outer").hide(), $(".pmc,.zoom6").click(function() {
	        $(".pmc-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".ec-outer").fadeOut(), $(".tap,.zoom7").click(function() {
	        $(".ec-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    }), $(".po-outer").hide(), $(".portfolio,.zoom8").click(function() {
	        $(".po-outer").hide().fadeIn(), $("body").css({
	            overflow: "hidden"
	        })
	    })
	});