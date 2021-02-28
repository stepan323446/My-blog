/* $(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger, .header-nav').toggleClass('active');
        $('html').toggleClass('lock');
    })
    size();
    $(window).resize(function () {
        size();
    });
    function size() {
        var w = $(window).width();
        if (w <= 590) {
            $(".title-section__decoration > img").attr('src', 'img/phone-decoration-mobile.svg');
        }
        else
        {
            $(".title-section__decoration > img").attr('src', 'img/phone-decoration.svg');
        }
    };
}); */
$(function()
{
    var pxShow = 300; //height on which the button will show
		var fadeInTime = 400; //how slow/fast you want the button to show
		var fadeOutTime = 400; //how slow/fast you want the button to hide
		var scrollSpeed = 300; //how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

        // Show or hide the sticky footer button
	    jQuery(window).scroll(function() {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}


            if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("header").removeClass("header-scrolled");
			} else {
                jQuery("header").addClass("header-scrolled");
				
			}

		});

        // Animate the scroll to top
		jQuery("#go-top a").click(function() {
			jQuery("html, body").animate({scrollTop:0}, scrollSpeed);
			return false;
		});

        $('.header__burger').click(function (e) {
            $('.header__burger, #nav').toggleClass('active');
            $('html').toggleClass('lock');
        })
});
