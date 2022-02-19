$(function() {

    $(window).on('load', function(){
        sliderVisual();
        sliderStore();
        sliderPremium();
        sliderBanner();
    });

    $(window).on('resize', function(){
        $(".swiper-wrapper").css("width", $(window).width());
        //$(".swiper-wrapper").css("height", $(window).height());
    });

    // 메인비주얼
    var sliderVisual = new Swiper('.slider_visual', {
        effect: "fade",
        allowTouchMove : true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_visual .swiper-pagination',
            type: 'fraction',
            clickable : true,
        },
    });

    // 최근본매장 
    var sliderStore = new Swiper('.slider_store', {
				slidesPerView: 2.5,
        spaceBetween: 12,
        nested :true,
    }); 

    // 프리미엄샵 
    var sliderPremium = new Swiper('.slider_premium', {
				spaceBetween: 24,
				loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_premium .swiper-pagination',
            type: 'fraction',
            clickable : true,
        },
    }); 
    

    // 롤링배너 
    var sliderBanner = new Swiper('.slider_banner', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_banner .swiper-pagination',
            clickable : true,
        },
    }); 
});


$(function() {
    var winST = window.pageYOffset;
    $(window).on('resize', function(){
      winST = window.pageYOffset;
    });

    // 내주변 매장 포트폴리오
    $(".portfolio_wrap .portfolio_tab li").click(function() {
        $(".portfolio_wrap .portfolio_tab li").removeClass('on');
        $(".portfolio_wrap .content").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });

    // 하단 정보 출력
    $('.ft_info .info_text').on('click',function(e){
      e.preventDefault();
      
      if($(this).parent().hasClass('on')){
          $(this).parent().removeClass('on').find('.info_con').slideUp(400);
      }else{
          $(this).parent().addClass('on').find('.info_con').slideDown(400);
      }
    });

    // top버튼
    $('.btn_top_wrap a').on("click", function (e) {
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, 400);
    });

    // 삭제 레이어팝업
    $('.btn_del').on('click',function(e){
        e.preventDefault();
        $('.pop_wrap').addClass('active');
        $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });
    $('.pop_wrap .btn_confirm').on('click', function(e){
        e.preventDefault();
        $(this).closest('.pop_wrap').removeClass('active');
        $("body").css({'height':'auto', 'overflow':'auto'});
    });

    
    $(window).on('load scroll', function(){
        //top 버튼
        //var btnOffset = $(".footer").offset().top;
        // if (scrollTop + $(window).height() < $(document).height()) {
        //     $('.btn_top').addClass("bg");
        // } else {
        //     $('.btn_top').removeClass("bg");
        // }

        //상단 / 메인퀵메뉴 fixed
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 300) {
            $('.main_header').addClass("fixed");
            $('.main_section_quickmenu').addClass("fixed");
        } else {
            $('.main_header').removeClass("fixed");
            $('.main_section_quickmenu').removeClass("fixed");
        }

        /* 툴바 스크롤 */
        //var winST = window.pageYOffset;
        var winST = $(window).height();
        var lastPos = $(window).scrollTop();
        if (lastPos <= 0) {
            $('.toolbar').removeClass('down');
            lastPos = winST
            return;
        }       

        if (lastPos < winST) {
            $('.toolbar').addClass('down');
            $(".compair_floating").css("padding-bottom",0);
        } else {
            $('.toolbar').removeClass('down');
            $(".compair_floating").css("padding-bottom", "51px");
        }

        if (winST + $(window).height() >= $(document).height())	{
            $('.toolbar').removeClass('down');
            $(".compair_floating").css("padding-bottom", "51px");
        }
        lastPos = winST

        
        // var didScroll;
        // var lastScrollTop = 0;
        // var delta = 10;
        // var navbarHeight = $('.toolbar').outerHeight();

        // $(window).scroll(function(event){
        //     didScroll = true;
        // });

        // setInterval(function() {
        //     if (didScroll) {
        //         hasScrolled();
        //         didScroll = false;
        //     }
        // }, 250);

        // function hasScrolled() {
        //     var scrollTop = $(this).scrollTop();
            
        //     if(Math.abs(lastScrollTop - scrollTop) <= delta)
        //         return;
            
        //     if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
        //         $('.toolbar').addClass('down');
        //     } else {
        //         if(scrollTop + $(window).height() < $(document).height()) {
        //             $('.toolbar').removeClass('down');
        //         }
        //     }
        //     lastScrollTop = scrollTop;
        // }

    });
});