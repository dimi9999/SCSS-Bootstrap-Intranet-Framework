// move logo in notification bar
var img = document.createElement("img");
img.setAttribute("id", "wizMainLogo");
img.src = "https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Publishingimages/logo.jpg";


function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

// DYNAMIC GOOGLE FONTS
function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + ":400,500,600,700' rel='stylesheet' type='text/css'>");
}
addGoogleFont("Montserrat");

function addCustomStyles() {
    // FONT AWESOME & METERIAL ICONS
    $("head").prepend("<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'>");
    $("head").prepend("<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' type='text/css'>");
}
addCustomStyles();

$(document).ready(function () {
    setTimeout(function () {
        $("<div id='mobilemenu'></div>").insertBefore("header");

        $("#DeltaSPRibbon").prepend('<div class="ms-header"></div>');
        $("#DeltaSPRibbon .ms-header").append('<div id="mainlogo"></div>');
        $("#DeltaSPRibbon .ms-header").append('<div class="hidden-md hidden-lg mobile-search-button"><i class="fa fa-search"></i></div>');
        $("#DeltaSPRibbon .ms-header").append('<div id="DeltaSPNavigation"></div><div class="clearfix"></div>');
        // $("#DeltaSPRibbon .ms-header").append('<button type="button" class="toggle-button" onclick="openNav()"><em class="fa fa-bars"></em></button>');
        $('<div class="search-container hidden-md hidden-lg"><div id="search-mobile"><form class="search-mobile-form" method="post" action="search.html"><input class="search_input" type="text" value="" placeholder="Search"><button class="search_button fa fa-search"></button></form></div></div>').insertAfter("#DeltaSPRibbon");

        $('#mainlogo').append(img);
        $("#DeltaSPRibbon").prepend('<div id="mainlogo"></div>');
        $('#mainlogo').append(img);
        $("#wizMainLogo").click(function () {
            window.location.href = "https://cfwizdemo.sharepoint.com/sites/WizdomDemo";
        });

        // STATISTICS HARD CODED
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



        // FOOTER ACCORDIONS
        $(document).on("click", "#footer h4", function () {
            $(this).parent(".nav").toggleClass("open");
            $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500);
        });
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
        // POPUP
        $(document).on("click", ".wizdom-ResultsContent", function (e) {
            $('.wizdomPopupCont').fadeIn('slow');
        });
        $(document).on("click", ".wizdomPopupCloseBtn", function (e) {
            $(".wizdomPopup").fadeOut('slow');
        });

    });
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/matchMedia.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/eliteResponsive.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/eliteNonResponsive.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/matchMedia.addListener.js", "js");
});


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
$(window).resize(function () {
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
