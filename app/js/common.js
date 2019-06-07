$(document).ready(function () {


    //slider home
    $(".home-slider, .deals-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    //date home
    $( ".home-search-input" ).datepicker();


    //form in a slider
    $(".home-slider-btn").click(function () {
        $('.form-slider').addClass('active').siblings().removeClass('active');
        checkHeight();
        $(".slick-arrow").css("z-index", "-1");
    });

    //burger menu
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu').addClass('active');
        if (!$(this).hasClass('btn-active')) {
            $('.header-menu').removeClass('active');
        }
    });

    //overlay
    function checkHeight(){
        var thisHeight = $('.popup-form.active, .form-slider.active').outerHeight();
        var thisValue = 50%
        $('.form-header, .form-slider > .form').height(thisHeight - thisValue);
    }
    //popup (btn in a header)
    $('.header-btn').click( function (e) {
        $('.popup-form').addClass('active').siblings().removeClass('active');
        checkHeight();
        e.preventDefault();
    });

    $(document).mouseup(function (e) {
        var container = $(".form-header, .form-slider > .form");
        if (container.has(e.target).length === 0){
            $(".popup-form, .form-slider", this).removeClass('active').siblings().addClass('active');
            checkHeight();
        }

    });

});





