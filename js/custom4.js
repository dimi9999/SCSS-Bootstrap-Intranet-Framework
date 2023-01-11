// WINDOW LOAD FUNCTIONS
$(window).load(function () {
    setTimeout(function () {
        getBreakpointMatches();
        menuappends();
        addGoogleFont("Montserrat");
    });
});
// WINDOW RESIZE FUNCTIONS
var winW = $(window).width();
$(window).resize(function() {
    setTimeout(function () {
        // ADD THESE PROPERTIES
        $('body').css('marginLeft', '0');
        //document.body.style.backgroundColor = "white";

        if ($(window).width() != winW) { // Check window width has actually changed and it's not just iOS triggering a resize event on scroll        
            winW = $(window).width(); // Update the window width for next time      
            getBreakpointMatches();
            menuappends();
            closemenu();
            resetMenu();
        }
    });
});


// JQUERY
$(document).ready(function () {

    setTimeout(function () {
        $("<div id='mobilemenu'></div>").insertBefore("header");

        // ADVANCED SEARCH TOGGLE
        $('.advanced-search-cont').css('display','none');
        $(".btn-search").click(function (e) {
            e.preventDefault();
            $('.advanced-search-cont').slideToggle('slow');
        });
        // COUNT MEGACOLUMNS
       // $(".navdropcontainer").each(function () {
       //     if ($(".navdropcontainer .inner > .megamenu-column").length > 5) {
       //         $(this).css('background', '#e5eef3');
       //     }
       //     else {
       //         $(this).css('background', '#fff');
       //     }
       // });

        // APPEND THE LOGOS
        var img = document.createElement("img");
        img.setAttribute("id", "wizMainLogo");
        img.src = "images/logo.jpg";
        $("#DeltaSPRibbon").prepend('<div class="ms-header"></div>');
        $("#DeltaSPRibbon .ms-header").append('<div id="mainlogo"></div>');
        $("#DeltaSPRibbon .ms-header").append('<div id="DeltaSPNavigation"></div><div class="clearfix"></div>');
        $("#DeltaSPRibbon .ms-header").append('<div class="hidden-md hidden-lg mobile-search-button"><i class="fa fa-search"></i></div>');
        $('#mainlogo').append(img);
        $('<div class="search-container hidden-md hidden-lg"><div id="search-mobile"><form class="search-mobile-form" method="post" action="search.html"><input class="search_input" type="text" value="" placeholder="Search"><button class="search_button fa fa-search"></button></form></div></div>').insertAfter("#DeltaSPRibbon");
        $("#wizMainLogo").click(function () {
            window.location.href = "https://cfcloud.sharepoint.com/sites/WizdomDemo";
        });

        // APPEND STATISTICS (HARD CODED) MUST BE DYNAMIC
        var statistics = "";
        statistics += "<div class='statisticsCont'>";
        statistics += "<div class='statistics'>";
        statistics += "<span class='statisticsTxt'>";
        statistics += "ACM <strong>432p</strong><span class='arrow-up' aria-hidden='true'></span>";
        statistics += "</span>";
        statistics += "<span class='statisticsStatus positive'>";
        statistics += "<span class='value1'>+14.95</span>";
        statistics += "<span>/</span>";
        statistics += "<span class='value2'>+3.88%</span>";
        statistics += "</span>";
        statistics += "</div>";
        statistics += "<div class='statistics'>";
        statistics += "<span class='statisticsTxt'>";
        statistics += "ACM <strong>432p</strong><span class='arrow-down' aria-hidden='true'></span>";
        statistics += "</span>";
        statistics += "<span class='statisticsStatus negative'>";
        statistics += "<span class='value1'>-14.95</span>";
        statistics += "<span class='value2'>-3.88%</span>";
        statistics += "</span>";
        statistics += "</div>";
        statistics += "</div>";
        $("#DeltaSPNavigation").html(statistics);

        // SEARCH BUTTON CLICK AND DISPLAY SEARCH CONTAINER
        $(".mobile-search-button").on("click", function () {
            if ($(window).scrollTop() !== 0) {
                $("#search-mobile").css({
                    "position": "fixed",
                    "z-index": "9999"
                });
                $("#search-mobile").slideToggle();
            } else if ($(window).scrollTop() == 0) {
                $("#search-mobile").css({
                    "position": "relative"
                });
                $("#search-mobile").slideToggle();
            }
        })
        $(window).scroll(function (event) {
            if ($(window).scrollTop() !== 0) {
                $("#search-container-mobile").css({
                    "position": "fixed",
                    "z-index": "9999"
                });
            } else if ($(window).scrollTop() == 0) {
                $("#search-container-mobile").css({
                    "position": "relative"
                });
            }
        });
 
        // TRIGGER MENU
        $('#togglemenu').click(function () {
            mobileOpenMenu();
        });

        $(".closebtn").click(function () {
            mobileCloseMenu();
        });
        // MOBILE OPEN MENU
        function mobileOpenMenu() {
            $('#mobilemenu').css('width', '250px');
            $('body').css('marginLeft', '250px');
            //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

        }
        // MOBILE CLOSE MENU
        function mobileCloseMenu() {
            $('#mobilemenu').css('width', '0');
            $('body').css('marginLeft', '0');
            // document.body.style.backgroundColor = "white";
        }

        var touchScreen = $('html').hasClass('touchevents');
        // MEGAMENU MOBILE
        $('.navarea > ul > li > a').click(function (event) {
            var thisSubmenu = $(this).next('.navdropcontainer');
            if (!breakpointH2 && !breakpointH1 && thisSubmenu.css('display') != 'block') {
                event.preventDefault();
                $('.navarea > ul > li > a').not($(this)).removeClass('current');
                $('.navdropcontainer').not(thisSubmenu).slideUp();
                thisSubmenu.slideDown();
            }
        });

        // MEGAMENU TABLET 
        // - 1st click shows menu, 2nd click links to category - 
        $('.navarea > ul > li > a').click(function (event) {
            var thisSubmenu = $(this).next('.navdropcontainer');
            if (!breakpointH2 && breakpointH1 && thisSubmenu.css('display') != 'block') {
                event.preventDefault();
                $('.navarea > ul > li > a').not($(this)).removeClass('current');
                $('.navdropcontainer').not(thisSubmenu).hide();
                thisSubmenu.slideDown();
                addClass('current');
            }
        });

        // - close megamenu - 
        $('.closebtn').click(function () {
            $('.navdropcontainer').slideUp(function () {
                $('.navarea > ul > li > a').removeClass('current');
            });
        });
        // MEGAMENU DESKTOP
        $('.navarea > ul > li').hover(
            function (e) { //ONMOUSEOVER

                if (breakpointH2) {
                    if (typeof menuTimeout != 'undefined') {
                        clearTimeout(menuTimeout);
                    }
                    var menuItem = $(this);
                    menuTimeout = setTimeout(function () {

                        $('.navarea ul li a.current').removeClass('current');
                        // menuItem.children('.navdropcontainer').css('display','block');
                        menuItem.children('.navdropcontainer').slideDown('slow');
                        $('#overlay-menu').stop(true, false);
                    }, 500);
                }
            },
            function (e) { //ONMOUSEOUT
                if (breakpointH2) {
                    if (typeof menuTimeout != 'undefined') {
                        clearTimeout(menuTimeout);
                    }
                    var menuItem = $(this);
                    // menuItem.children('.navdropcontainer').css('display', 'none');
                    menuItem.children('.navdropcontainer').slideUp('slow');

                }
            }
        );
 
        // RIGHT SIDEBAR ACCORDIONS
        $(document).on("click", ".accordionlink", function (e) {
            e.preventDefault();
            $(this).toggleClass('minus');
            $(this).next(".tab").slideToggle("slow");
        });
        // FOOTER ACCORDIONS
        $(document).on("click", "#footer h4", function () {
            $(this).parent(".nav").toggleClass("open");
            $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500);
        });

        // FOOTER NAV
        $("#footer .nav:nth-child(1)").addClass('col-md-2');
        $("#footer .nav:nth-child(2)").addClass('col-md-2');
        $("#footer .nav:nth-child(3)").addClass('col-md-3');
        $("#footer .nav:nth-child(4)").addClass('col-md-4 col-md-offset-1');
 

        // POPUP
        $(document).on("click", ".wizdom-ResultsContent", function (e) {
            $('.wizdomPopupCont').fadeIn('slow');
        });
        $(document).on("click", ".wizdomPopupCloseBtn", function (e) {
            $(".wizdomPopup").fadeOut('slow');
        });
 
    });
});

// ADD FONTS

function addGoogleFont(FontType1) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontType1 + ":300,400,700,500,600' rel='stylesheet' type='text/css'>");
}

// MOBILE MENU TO BE TURNED OFF WHEN SWITCHING SCREENS
var mobileMenuOn = false;
var mobileMenuWidth = 220;
function closemenu() {
    setTimeout(function () {
        if (breakpointH1 && breakpointH2) { //mobile portrait; menu closed
            $('body').removeClass("fixed").addClass("relative").css('left', '0');
        } else {
            $('body').removeClass("relative").css('left', '0');
        }
    });
}

$(document).ready(function () {
    function effect1On(ep) { ep.find('.navdropcontainer').fadeIn(effectDuration); }
    function effect1Off(ep) { ep.find('.navdropcontainer').fadeOut(effectDuration); }
    var touchScreen = $('html').hasClass('touchevents');

    setTimeout(function () {
    $('.navarea ul li').hover(
           function () {
               if (breakpointH1 && breakpointH2) {
                   if (!touchScreen) {
                       var ep = $(this);
                       timerEffect1On = setTimeout(function () {
                           effect1On(ep);
                       }, effectDelay);

                   }
               }
           },
           function () {
               if (breakpointH1 && breakpointH2) {
                   if (!touchScreen) {
                       if (typeof timerEffect1On != 'undefined') {
                           clearTimeout(timerEffect1On);
                       }
                       effect1Off($(this));

                   }
               }
           }
    );
    });
});
function menuappends() {
    $(document).ready(function () {
        setTimeout(function () {
            // DETECT MEDIA QUERIES
            if (!breakpointH1 && !breakpointH2) {
                $(".navarea").appendTo("#mobilemenu");
                //alert('this is mobile');
            } else if (breakpointH1) {
                //alert('this is tablet');
                $(".navarea").appendTo("#topnav");
            }
        });
    });
}
// RESET MENU IF BREAKPOINTS CHANGE
function resetMenu() {
    mobileCloseMenu(0);
    //nonMobileCloseMenu(0);
}

 