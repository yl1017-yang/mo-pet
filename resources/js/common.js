$(function() {

    //mobile var
    var $moGnbWrap = $(".moGnbWrap"),
    $moGnb = $(".moGnb", $moGnbWrap),
    $moGnbLi = $(".moGnb > li", $moGnbWrap),
    $moBtnOpen = $(".moBtnOpen"),
    $moBtnClose = $(".moBtnClose"),
    $moGnbBg = $(".moGnbBg");

    //////////// 전체 햄버거 메뉴 ////////////
    // 메뉴열기
    $moGnbWrap.hide();
    $moBtnOpen.on("click", function(e) {
      e.preventDefault();

      $(this).hide();
      $moGnbWrap.fadeIn(200);
      $moGnbWrap.find(".scroll").addClass("open");
      $moGnbBg.fadeIn();
      $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });

    // 메뉴닫기
    $moBtnClose.on("click", function(e) {
      e.preventDefault();
      
      $moBtnOpen.show();
      $moGnbWrap.fadeOut(200);
      $moGnbWrap.find(".scroll").removeClass("open");
      $moGnbBg.hide();
      $("body").css({'height':'auto', 'overflow':'auto'});
    });	

    $moGnbBg.on("click", function(e) {
      e.preventDefault();
      
      $moBtnOpen.show();
      $moGnbWrap.fadeOut(200);
      $moGnbWrap.find(".scroll").removeClass("open");
    });

    // 모바일 - 1,2DEPTH 오픈
    $moGnbLi.children("a").on("click", function(e) {
    //$moGnbLi.find('> a').on('click', function(e) { //2차뎁스만 사용시
      e.preventDefault();
        
        var $depth = $(this).next("ul");
        if($depth.is(":visible")){
            $(this).removeClass("on");
            $depth.slideUp(300);
        } else {
            $moGnbLi.children("a").removeClass("on");
            $(this).parent().siblings().find("ul").slideUp(300);
            $(this).addClass("on");
            $depth.slideDown(300);
        }
    });

    $(".moGnb .depth1 > li").children("a").on('click', function() {
        var $depth = $(this).next("ul");
        if($depth.is(":visible")){
            $(this).removeClass("on");
            $depth.slideUp(300);
        } else {
            $(".moGnb .depth1 > li").children("a").removeClass("on");
            $(this).parent().siblings().find("ul").slideUp(300);
            $(this).addClass("on");
            $depth.slideDown(300);
        }
    });

    // 메인비주얼
    new Swiper('.slider_visual', {
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
    new Swiper('.slider_store', {
				slidesPerView: 2.5,
        spaceBetween: 12,
        nested :true,
    }); 

    // 프리미엄샵 
    new Swiper('.slider_premium', {
        slidesPerView: 1.25,
				spaceBetween: 24,
				//loop: true,			
			  watchOverflow: true,
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
    new Swiper('.slider_banner', {
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

    // 내주변 매장 포트폴리오
    $(".portfolio_wrap .portfolio_tab li").click(function() {
        $(".portfolio_wrap .portfolio_tab li").removeClass('on');
        $(".portfolio_wrap .conBox").removeClass('on');
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
            $('.header').addClass("fixed");
            $('.main_section_quickmenu').addClass("fixed");
        } else {
            $('.header').removeClass("fixed");
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