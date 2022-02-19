//////////// Header ////////////
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
});

$(function() {

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
        slidesPerView: 1.5,
        spaceBetween: 24,
        //loop: true,
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
 
});