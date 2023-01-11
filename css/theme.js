/* Combined file last updated at 2018-02-02 07:06:27 */
 

$(document).ready(function () {
	
		alert('Welcome to our first wizdom demo');
	
	$(".Megamenu .TopItem").hover(
            function () {
				alert('hover me');
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).delay("400").slideDown("600");
                //$(this).toggleClass('open');        
            },
            function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).delay("100").slideUp("600");
                //$(this).toggleClass('open');       
            }
        );
	   
});