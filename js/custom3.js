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

    // LOAD CUSTOM CSS
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/css/bootstrap-select.min.css", "css");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/css/material-icons.css", "css");
    // LOAD CUSTOM JAVASCRIPT
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/matchMedia.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/eliteResponsive.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/eliteNonResponsive.js", "js");
    loadjscssfile("https://cfwizdemo.sharepoint.com/sites/WizdomDemo/Style%20Library/WizdomDemo/js/matchMedia.addListener.js", "js");

    setTimeout(function () {
        $("body").prepend('<div id="mobilemenu"></div>');
        $("#DeltaSPRibbon").prepend('<div class="ms-header"></div>');
        $("#DeltaSPRibbon .ms-header").prepend('<div class="inner"></div>');
        $("#DeltaSPRibbon .ms-header .inner").append('<div id="mainlogo"></div>');
        // REMOVE AND ADD THESE BUTTONS ON THE TEMPLATE
        // $("#DeltaSPRibbon .ms-header .inner").append('<div class="hidden-md hidden-lg mobile-search-button"><i class="fa fa-search"></i></div>');
        // $("#DeltaSPRibbon .ms-header .inner").append('<div><button type="button" class="toggle-button" id="togglemenu"><em class="fa fa-bars"></em></button></div>');
        $("#s4-titlerow #DeltaPlaceHolderSearchArea.v2 #searchInputBox .ms-srch-sb-searchLink").append('<i class="search_button fa fa-search"></i>');
        $("#DeltaSPRibbon .ms-header .inner").append('<div id="DeltaSPNavigation"></div><div class="clearfix"></div>');
        $('#mainlogo').append(img);
        // $("#DeltaSPRibbon").prepend('<div id="mainlogo"></div>');
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
        // FOOTER NAV
        $("#footer .nav:nth-child(1)").addClass('col-md-2');
        $("#footer .nav:nth-child(2)").addClass('col-md-2');
        $("#footer .nav:nth-child(3)").addClass('col-md-3');
        $("#footer .nav:nth-child(4)").addClass('col-md-4 col-md-offset-1');

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

        $(document).on("click", ".navarea > ul > li.topElement div", function (event) {
        // $('.navarea > ul > li.topElement > a').click(function (event) {
            var thisSubmenu = $(this).next('.navdropcontainer');
            if (!breakpointH2 && !breakpointH1 && thisSubmenu.css('display') != 'block') {
                event.preventDefault();
                $('.navarea > ul > li.topElement > a').not($(this)).removeClass('current');
                $('.navdropcontainer').not(thisSubmenu).slideUp();
                thisSubmenu.slideDown();
            }
        });

        // MEGAMENU TABLET 
        // - 1st click shows menu, 2nd click links to category - 
        // $('.navarea > ul > li.topElement > a').click(function (event) {
        $(document).on("click", ".navarea > ul > li.topElement div", function (event) {
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
                $('.navarea > ul > li.topElement > a').removeClass('current');
            });
        });
        // MEGAMENU DESKTOP
        $(".navarea > ul").on('mouseenter mouseleave', 'li.topElement', function (event) {
                if (event.type == 'mouseenter') {
                    if (breakpointH2) {
                        if (typeof menuTimeout != 'undefined') {
                            clearTimeout(menuTimeout);
                        }
                        var menuItem = $(this);
                        menuTimeout = setTimeout(function () {

                        $('.navarea ul li.topElement a.current').removeClass('current');
                            
                            menuItem.children('.navdropcontainer').slideDown('slow');
                        $('#overlay-menu').stop(true, false);
                    }, 500);
                }
               
                } else {
                if (breakpointH2) {
                    if (typeof menuTimeout != 'undefined') {
                    clearTimeout(menuTimeout);
                    }
                    var menuItem = $(this);
                    // menuItem.children('.navdropcontainer').css('display', 'none');
                    menuItem.children('.navdropcontainer').slideUp('slow');
              }
            }
        });

        // RIGHT SIDEBAR ACCORDIONS
        $(document).on("click", ".accordionlink", function (e) {
            e.preventDefault();
            $(this).toggleClass('minus');
            $(this).next(".tab").slideToggle("slow");
        });
    });

});

//
// WINDOW LOAD FUNCTIONS
$(window).load(function () {
    getBreakpointMatches();
    menuappends();
    addGoogleFont("Montserrat");

});
// WINDOW RESIZE FUNCTIONS
var winW = $(window).width();
$(window).resize(function () {

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
//
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
