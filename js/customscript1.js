$(document).ready(function () {
    /* $(".wd-noticeboard-comments-panel").show(); */
});
function triggerCarousel() {
    $("#carousel-example-generic ul li").addClass('item');
    $("#CorporateNewsCarousel ul li").addClass('item');
}

// for title adjustment in middle content
var $pageinfo = $('#pageinfo_plc');
$pageinfo.hide();

var $title = $('.wt-page-title');
var $newsTitle = $('.wt-news-title');

$title.wrap('<div class="titleHolder"></div>');
$newsTitle.wrap('<div class="titleHolder"></div>');

var $titleHolder = $title.parent();
var $titleHolder2 = $newsTitle.parent();
$titleHolder.append($pageinfo);
$titleHolder2.append($pageinfo);

$pageinfo.show();

// move logo in notification bar
var img = document.createElement("img");
img.setAttribute("id", "wizMainLogo");
// img.src = "/sites/WizdomDemo/SiteAssets/wizdom-logo-black.png";
img.src = "/sites/WizdomDemo/RespDemo1/Publishingimages/logo.jpg";

$(document).ready(function () {
    $("#DeltaSPRibbon").prepend('<div id="mainlogo"></div>');
    $('#mainlogo').append(img);
    $("#wizMainLogo").click(function () {
        window.location.href = "https://cfcloud.sharepoint.com/sites/WizdomDemo";
    });
});

// replace margin in edit mode for 3 column layout
var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

if (inDesignMode == "1") {
    // page is in edit mode
    var contentBox = document.querySelector('.showLeftNavigation div#contentBox');
    contentBox.setAttribute('style', 'margin-left: 320px !important');

    var sideNavBox = document.querySelector('.wizdom-bootstrap-wrapper #sideNavBox');
    sideNavBox.setAttribute('style', 'margin-left: -10px !important');
}
else {
    // page is in browse mode
}



// graph explorer


/* ↓↓↓ */


/* ↑↑↑ */





