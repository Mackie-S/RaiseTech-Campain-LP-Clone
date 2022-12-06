jQuery(function($){
    // クリックをした際のハンバーガーメニューの開閉
  $(".js-hamburger").on("click", function(){
    $(".p-header__menu__list").slideToggle("fast");
    $(".c-cover--menu").toggleClass("is-open");
    if ($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-expanded', true);
      $("body").css({"overflow":"hidden" , "touch-action":"none"});
    } else {
      $(this).attr('aria-expanded', false);
      $("body").css({"overflow":"" , "touch-action":""});
      $(window).off('.noScroll');
    }
  });
  // 幅のリサイズをした際のハンバーガーメニューの開閉
  $(window).resize(function(){
    const windowWidth = $(this).width();
    const bp = 1024;
    if(windowWidth > bp){
      $(".p-header__menu__list").addClass("u-dis-flex");
      $(".p-header__menu__list").css("display", ""); //勝手につくdisplay:noneやblockを外すため
      $(".c-cover--menu").removeClass("is-open");
      $("body").css({"overflow":"" , "touch-action":""});
      $(".js-hamburger").attr('aria-expanded', false);
    }else{
      $(".p-header__menu__list").removeClass("u-dis-flex"); 
      $(".p-header__menu__list").slideUp("fast");
      $(".c-cover--menu").removeClass("is-open");
      $("body").css({"overflow":"" , "touch-action":""});
      $(".js-hamburger").attr('aria-expanded', false);
    }
  });
  //黒半透明部分をクリックした際のハンバーガーメニューの開閉
  $(".c-cover--menu").on("click",function(){
    $(".p-header__menu__list").removeClass("u-dis-flex"); 
    $(".p-header__menu__list").slideUp("fast");
    $(".c-cover--menu").removeClass("is-open");
    $("body").css({"overflow":"" , "touch-action":""});
    $(".js-hamburger").attr('aria-expanded', false);
  });
  //tablet以下のサイズでp-header__menu__listをクリックした際にmenuを閉じる記述(pcサイズでは変化なし)
  $(".p-header__menu__list a").on("click", function(){
    const windowWidth = $(window).width()
    const pcBreakpoint = 1024;
    if(windowWidth > pcBreakpoint){
      $(".p-header__menu__list").addClass("u-dis-flex");
      $(".p-header__menu__list").css("display", ""); //勝手につくdisplay:noneやblockを外すため
      $(".c-cover--menu").removeClass("is-open");
      $("body").css({"overflow":"" , "touch-action":""});
      $(".js-hamburger").attr('aria-expanded', false);
    }else{
      $(".p-header__menu__list").removeClass("u-dis-flex"); 
      $(".p-header__menu__list").slideUp("fast");
      $(".c-cover--menu").removeClass("is-open");
      $("body").css({"overflow":"" , "touch-action":""});
      $(".js-hamburger").attr('aria-expanded', false);
    }
  });
  //下からフワッと来る記述
  $(window).scroll(function (){
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const windowWidth = $(window).width()
    const tabletBreakpoint = 600;
    if(windowWidth > tabletBreakpoint){ //tablet以上の大きさの挙動
      $('.p-course__card').each(function(i){
        const targetElement = $(this).offset().top;
        const target = this;
        if (scrollTop > targetElement - windowHeight +230){
          setTimeout(function(){
            $(target).css('opacity','1');
            $(target).css('transform','translateY(0)');
          },200*i);
        }
      });
      $('.c-fade-up').each(function(){
          const targetElement = $(this).offset().top;
          if (scrollTop > targetElement - windowHeight + 230){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
    }else{ //sp以下の大きさの挙動
      $('.p-course__card').each(function(i){
        const targetElement = $(this).offset().top;
        const target = this;
        if (scrollTop > targetElement - windowHeight +100){
          setTimeout(function(){
            $(target).css('opacity','1');
            $(target).css('transform','translateY(0)');
          },70*i);
        }
      });
      $('.c-fade-up').each(function(){
          const targetElement = $(this).offset().top;
          if (scrollTop > targetElement - windowHeight + 130){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
    }
  });
  // 各種モーダルの動き
  $(".js-modal-open").on("click",function(){
    const target = $(this).data('target');
    const modal = document.getElementById(target);
    $(modal).css({
      "opacity": "1",
      "visibility": "visible",
      "transition": "all 0.3s"
    });
    $(".c-cover--modal").addClass("is-open");
    $(".c-button--close").addClass("is-open");
    $("body").css({"overflow":"hidden" , "touch-action":"none"});
  });
  $(".js-modal-close").on("click",function(){
    $(".js-modal").css({
      "opacity": "0",
      "visibility": "hidden"
    });
    $(".c-cover--modal").removeClass("is-open");
    $(".c-button--close").removeClass("is-open");
        $("body").css({"overflow":"" , "touch-action":""});
  });
  // function bodyScrollPrevent(flag){
  //   let scrollPosition;
  //   const body = document.getElementsByTagName('body')[0];
  //   const ua = window.navigator.userAgent.toLowerCase();
  //   const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
  //   const scrollBarWidth = window.innerWidth - document.body.clientWidth;
  //   if(flag){
  //     body.style.paddingRight = scrollBarWidth + 'px';
  //     if(isiOS){
  //       scrollPosition = -window.pageYOffset;
  //       body.style.position = 'fixed';
  //       body.style.width = '100%';
  //       body.style.top = scrollPosition + 'px';
  //     } else {
  //       body.style.overflow = 'hidden';
  //     }
  //   } else if(!flag) {
  //     body.style.paddingRight = '';
  //     if(isiOS){
  //       scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g,''));
  //       body.style.position = '';
  //       body.style.width = '';
  //       body.style.top = '';
  //       window.scrollTo(0, scrollPosition);
  //     }else {
  //       body.style.overflow = '';
  //     }
  //   }
  // }

  // $(".js-modal-open").on("click",function(){
  //   const target = $(this).data('target');
  //   const modal = document.getElementById(target);
  //   $(modal).fadeIn(300);
  //   $(".c-cover--modal").addClass("is-open");
  //   $(".c-button--close").addClass("is-open");
  //   $("html,body").css("overflow","hidden");
  //   $(window).on('touchmove.noScroll', function(e) {
  //     e.preventDefault();
  //   });
  //   return false;
  // });
  // $(".js-modal-close").on("click",function(){
  //   $(".js-modal").fadeOut(300);
  //   $("html,body").css("overflow","");
  //   $(".c-cover--modal").removeClass("is-open");
  //   $(".c-button--close").removeClass("is-open");
  //   $(window).off('.noScroll');
  // });
  //Q&Aの開閉
  $(".js-answer-open").on("click",function(){
    $(this).next().slideToggle("fast");
    $(this).toggleClass("active");
  });
  //ヘッダーメニューのリンク先へスクロール
  // $('.p-header__menu__list a[href*="#"]').on("click", function () {
  //   const elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  //   const pos = $(elmHash).offset().top;  //idの上部の距離を取得
  //   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  //   return false;
  // });
  // $('.c-button').on("click", function () {
  //   const elmHash = $(this).attr('onclick'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  //   const pos = $(elmHash).offset().top;  //idの上部の距離を取得
  //   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  //   return false;
  // });
  //横スクロールヒント
  new ScrollHint(".js-scrollable",{
    i18n:{scrollable:"スクロールできます"}
  });
});