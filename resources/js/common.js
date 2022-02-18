//////////// Header ////////////
function gnbMenu(depth1, depth2, depth3) {

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
      //$moGnbWrap.find(".scroll").stop().animate({right:0}, 300);
      $moGnbWrap.find(".scroll").addClass("open");
      $moGnbBg.fadeIn();
      $("body").css({'height':$(window).height(), 'overflow':'hidden'});
    });

    // 메뉴닫기
    $moBtnClose.on("click", function(e) {
      e.preventDefault();
      
      $moBtnOpen.show();
      $moGnbWrap.fadeOut(200);
      //$moGnbWrap.find(".scroll").stop().animate({right:-100}, 300);
      $moGnbWrap.find(".scroll").removeClass("open");
      $moGnbBg.hide();
      $("body").css({'height':'auto', 'overflow':'auto'});
    });	

    $moGnbBg.on("click", function(e) {
      e.preventDefault();
      
      $moBtnOpen.show();
      $moGnbWrap.fadeOut(200);
      //$moGnbWrap.find(".scroll").animate({right:0}, 300);
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
            //$moGnb.find("li > a").removeClass("on");
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

    //모바일 - 페이지 인식
    if ($moGnbLi.length > depth1-1) {
        $moGnbLi.eq(depth1-1).find("> a").addClass("on");
        $moGnbLi.eq(depth1-1).find(".depth1 > li").eq(depth2-1).find("> a").addClass("on");
        $moGnbLi.eq(depth1-1).find(".depth1 > li").eq(depth2-1).find(".depth2 > li").eq(depth3-1).find("> a").addClass("on");
    }

    //모바일 - 2depth 오픈
    if ( depth1 >= 0 && depth2 >= 0 ) {
        $moGnbLi.eq(depth1-1).addClass("on").children(".depth1").show().children("li").eq(depth2-1).addClass("on").children(".depth2").show();
    }

}



$(function() {

    //////////// swiper 메인비주얼
    var mainvisual = new Swiper('.slider_visual', {
        effect: "fade",
        allowTouchMove : true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.slider_visual .swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, dot) {
              return '<span class="' + dot + '">' +'0' +  (index + 1) + '</span>';
            }
        },
        navigation: {
            nextEl: '.slider_visual .swiper-button-next',
            prevEl: '.slider_visual .swiper-button-prev',
        },
        on: {
            init: function () {
              $(".slider_visual .swiper-scrollbar .swiper-scrollbar-drag").removeClass("animate");
              $(".slider_visual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
            },
            slideChangeTransitionStart: function () {
              $(".slider_visual .swiper-scrollbar .swiper-scrollbar-drag").removeClass("animate");
            },
            slideChangeTransitionEnd: function () {
              $(".slider_visual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
            }
        },
    }); 
    $(".slider_visual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");

    //////////// swiper 매거진 

    // 썸네일 슬라이드
    new Swiper('.slider_magazine', {
        simulateTouch: true,
				slidesPerView: 1,
				loop: true,
				loopAdditionalSlides: 2,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				spaceBetween: 30,
				navigation: {
					nextEl: '.slider_magazine .swiper-button-next',
					prevEl: '.slider_magazine .swiper-button-prev',
				},
				pagination: {
					el: ".slider_magazine .swiper-pagination",
					type: "progressbar"
				},
				on: {
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".slider_magazine .swiper-container .swiper-slide").length;			
						$('.slider_magazine').find('.all_num').text(slideCnt);
					},
					activeIndexChange : function() {
						$('.magTabSwiper').find('.tab').removeClass('active');
						$('.magTabSwiper').find('.tab').eq(this.realIndex).addClass('active');
						magTabSwiper.slideToLoop(this.realIndex);
						$('.slider_magazine').find('.active_num').text(this.realIndex + 1);
					},
				}
    }); 
 
});