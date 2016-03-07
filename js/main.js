// Change navbar class to make transparent
$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('navbar').addClass("onScroll");
        } else {
            header.removeClass("onScroll").addClass('navbar');
        }
    });
});




// SCROLLMAGIC CONTROLLER

 /*   jQuery(function ($) {
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.staggerFromTo("#parallax2", 2, {
        backgroundPosition: "0 0"
    }, {
        backgroundPosition: "0 150px"
    });
    var scene = new ScrollMagic.Scene({
        duration: 100
    })
    scene.setTween(tween);
    scene.addTo(controller);
    scene.addIndicators();
});

*/






/*

// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);
*/
