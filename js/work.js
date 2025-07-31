$(function () {
  $(".main_tab button").click(function (e) {
    e.preventDefault();
    var tg = $(this);
    var i = tg.index();

    var section = $("section .item").eq(i);
    var tt = section.offset().top;
    $(".main_tab button").removeClass("on");
    $(this).addClass("on");
    $("html,body").stop().animate({ scrollTop: tt }, 600);
  });

  //top_btn
  $(window).scroll(function () {
    t = $(window).scrollTop();
    if (t > 400) $(".top_btn>a").fadeIn();
    else {
      $(".top_btn>a").fadeOut();
    }
  });
  $(window).trigger("scroll");
  $(".top_btn>a").click(function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 });
  });

  //content_design
  $(".content_design .content_img_area").hide(); // 전부 숨기고
  $(".content_design .content_img_area").eq(0).show(); 
  $(".content_txt>ul>li").click(function () {
    var i = $(this).index();
    $(".content_img_area").hide();
    $(".content_img_area").eq(i).show();
    return false;
  });

  $(".mbmenu").click(function () {
    $(".mbmenu").toggleClass("active");
    $(".open_nav").stop().toggleClass("active");
  });

  $(".content_img_area>.pop_list>li").click(function (e) {
    e.preventDefault();

    let i = $(this).index(".pop_list>li");
    $(".popup").eq(i).show();
  });
  $(".close").click(function (e) {
    e.preventDefault();

    $(".popup").hide();
  });
});

//모바일 메뉴
$('.mbmenu').click(function(){
  $('.mbmenu').toggleClass('active')
    $('.open_nav').stop().toggleClass('active')

});

$('.subnav_menu li:last-child a').click(function(e){
  e.preventDefault(); // 기본 링크 이동 막기
  $('.open_nav').hide();

  // 수동으로 이동 (같은 페이지 내 이동일 경우)
  const target = $(this).attr('href');
  window.location.href = target;
});


  document.addEventListener("DOMContentLoaded", function () {
    // 모든 메뉴 링크에 이벤트 부여
    const menuLinks = document.querySelectorAll(".subnav_menu li a");
    const openNav = document.querySelector(".open_nav");

    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        openNav.classList.remove("active");
      });
    });
  });