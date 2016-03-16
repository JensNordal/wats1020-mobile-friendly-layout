//========================================/
//===========Main.js Scripts =============/
//========================================/
$(document).on('ready', function () {

    // Change navbar class to make transparent
    $(function () {
        var header = $(".navbar");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 5) {
                header.removeClass('navbar').addClass("onScroll");
            } else {
                header.removeClass("onScroll").addClass('navbar');
            }
        });
    });

    //Remove video in header from iOS devices
    var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
    if( iOS ) {
        var background_videos = document.querySelectorAll( '.video-container .video video' );
        for( i=0; i<background_videos.length; i++ ) {
            background_videos[i].parentNode.removeChild(background_videos[i]);
        }
    }

    // Validate contact form input data
    $('#contact-form').validate({
        submitHandler: function (form) {
            form.submit();
        },
        rules: {
            "first_name": {
                required: true,
                maxlength: 128,
                lettersonly: true
            },

            "your_email": {
                required: true,
                email: true
            },

            "phone_number": {
                digits: true
            },

            "your_message": {
                maxlength: 500
            },

            "InputReal": {
                required: true,
                maxlength: 1,
                digits: true,
                range: [007, 007]
            }
        },

        // Error messages to display
        messages: {
            "first_name": "This field is required. Please enter your first name.",
            "last_name": "This field is required. Please enter your last name.",
            "your_email": "This field is required. Please enter a valid email address.",
            "your_message": "500 character max.",
            "InputReal": "This field is required. Please answer spam checker question: What is 4+3?"
        }
    });

    // Scroll to top script
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.scrollTop-btn');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('scrollTop-is-visible'): $back_to_top.removeClass('scrollTop-is-visible scrollTop-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('scrollTop-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });

    // Script to display and hide .details text
    $('.view-details').on('click', function (event) {
        console.log(event);
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
        $(container).find('.details').each(function (index, el) {
            if ($(el).is(':visible')) {
                $(el).fadeOut();
                targetElement.innerText = "View Client List";
            } else {
                $(el).fadeIn();
                targetElement.innerText = "Hide Client List";
            }
        });
    });
});
