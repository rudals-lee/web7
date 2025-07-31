$(function() {
  // 모바일 메뉴 버튼
  $(".mbmenu").click(function () {
    $(this).toggleClass("active");
    $(".open_nav").toggleClass("active");
  });

  // 스크롤 시 aboutme 애니메이션
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const aboutOffset = $(".aboutme").offset().top - 400;

    if (scrollTop > aboutOffset) {
      $(".aboutme").addClass("on");
    }
  });

  // Top 버튼 노출
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".top_btn > a").fadeIn();
    } else {
      $(".top_btn > a").fadeOut();
    }
  });

  // 탭 전환
  $(".skill_list a").click(function (e) {
    e.preventDefault();
    $(".skill_list a").removeClass("active");
    $(this).addClass("active");

    // 탭에 맞는 데이터 전환하려면 AJAX 또는 클래스에 따라 변경 가능
  });
});

//skill 탭
$('.skill_tab').hide();
$('.skill_tab').eq(0).show();
$('.skill_list > ul > li').click(function () {
  var i = $(this).index();

  $('.skill_list > ul > li').find('a').removeClass('active'); 
  $(this).find('a').addClass('active'); 

  $('.skill_txtcon').removeClass('on')
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  $('.skill_tab').hide();
  $('.skill_tab').eq(i).show();


  return false;
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        loopedSlides: 1
      },
      speed: 3000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    $('.swiper').hover(function() {
        swiper.autoplay.stop();
    }, function(){
        swiper.autoplay.start();
    });

    $(window).scroll(function(){
        t=$(window).scrollTop();
        if(t>400)
            $('.top_btn>a').fadeIn();
        else{
            $('.top_btn>a').fadeOut();
        }
    })
    $(window).trigger('scroll');
    $('.top_btn>a').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0})
    })

//스크롤 효과
    let top1 = $('.aboutme').offset().top;

$(window).on('scroll', function () {
  let h = $(window).scrollTop();       // 현재 스크롤 위치
  let windowH = $(window).height();    // 브라우저 창 높이

  // 요소가 화면에 보이기 시작하면 on 클래스 추가
  if (h > top1 - windowH) {
    $('.aboutme').addClass('on');
  } else {
    $('.aboutme').removeClass('on');  // 화면 위로 다시 올라가면 사라짐
  }
});


//skill 탭
$('.skill_tab').hide();
$('.skill_tab').eq(0).show();
$('.skill_list > ul > li').click(function () {
  var i = $(this).index();

  $('.skill_list > ul > li').find('a').removeClass('active'); 
  $(this).find('a').addClass('active'); 

  $('.skill_txtcon').removeClass('on')
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  $('.skill_tab').hide();
  $('.skill_tab').eq(i).show();


  return false;
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