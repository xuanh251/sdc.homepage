var udn = {
    init: function () {
        udn.registerEvent();
        udn.checkResize();
        if ($(window).width() <= 500) {
            $('.udn-accordion').addClass('collapsed');
            $('.udn-accordion-content').removeClass('show');
        }
    },
    registerEvent: function () {
        //swipe menu from left and right
        $(".btn-nav-onleft").on("click", function () {
            $(".mobileMenuLeft").toggleClass("open");
            $('.mobileMenuLeft').toggleClass("fixHeight");
        });
        $(window).resize(function () {
            udn.checkResize();
        });
        
        $('#carouselExample').carousel({ 
            interval: 2000
        });

    },
    checkResize: function () {
        if ($(window).width() <= 991) {
            $('#first-search-form').hide();
            $('#second-search-form').show();
        } else {
            $('#first-search-form').show();
            $('#second-search-form').hide();
        }
        if ($(window).width() <= 767) {
            $('#udn-map-info').hide();
        } else {
            $('#udn-map-info').show();
        }
        $('#carouselExample').on('slide.bs.carousel', function (e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var windowsWidth=$(window).width();
            if (windowsWidth>=768) {
                var itemsPerSlide = 6;    
            }else {
                var itemsPerSlide = 4;    
            }
            var totalItems = $('#carouselExample .carousel-item').length;
            
            if (idx >= totalItems-(itemsPerSlide-1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i=0; i<it; i++) {
                    // append slides to end
                    if (e.direction=="left") {
                        $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
                    }
                    else {
                        $(' #carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
                    }
                }
            }
        });
    },
}
udn.init();

