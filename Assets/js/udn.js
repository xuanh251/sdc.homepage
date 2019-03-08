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
        $('[data-toggle="tooltip"]').tooltip(); 
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
        //toggle top link
        $('#btn-toplink-toggle').off('click').on('click', function () {
            if($(this).data('tg')==1){//close-->open
                $(this).data('tg',0);
                $('#js-toggle-class').removeClass('col-12').addClass('col-1');
                $('.udn-top-menu').each(function(i,item) {
                    $(item).removeClass('udn-hide-menu');
                    setTimeout(function () {
                        $(item).removeClass('visuallyhidden');
                        $(item).addClass('udn-show-menu');
                      }, 20);
                });
                $('.udn-top-menu').slideDown('slow');
                $('.udn-header div:first-child').removeClass('udn-toggle-margin');
            }else{//open-->close
                $(this).data('tg',1);
                $('#js-toggle-class').removeClass('col-1').addClass('col-12');
                $('.udn-top-menu').each(function(i,item) {
                    $(item).addClass('visuallyhidden');
                    $(item).one('transitionend', function(e) {
                        $(item).removeClass('udn-show-menu').addClass('udn-hide-menu');
                      });
                });
                $('.udn-header div:first-child').addClass('udn-toggle-margin');
            }
        })

    },
    checkResize: function () {
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

