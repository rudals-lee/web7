// jQuery 준비 완료 시 실행
$(function() {
  // 모바일 메뉴 버튼 클릭 이벤트
  $(".mbmenu").click(function () {
    // 햄버거 메뉴와 네비게이션 토글
    $(this).toggleClass("active");
    $(".open_nav").toggleClass("active");
  });

  // 스크롤 시 aboutme 섹션 애니메이션 효과
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
    const aboutOffset = $(".aboutme").offset().top - 400; // aboutme 섹션 위치에서 400px 위

    // 스크롤이 특정 위치에 도달하면 애니메이션 클래스 추가
    if (scrollTop > aboutOffset) {
      $(".aboutme").addClass("on");
    }
  });

  // Top 버튼 노출/숨김 처리
  $(window).scroll(function () {
    // 스크롤이 300px 이상일 때 상단 이동 버튼 표시
    if ($(this).scrollTop() > 300) {
      $(".top_btn > a").fadeIn();
    } else {
      $(".top_btn > a").fadeOut();
    }
  });

  // 스킬 탭 전환 이벤트 (첫 번째 버전)
  $(".skill_list a").click(function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    $(".skill_list a").removeClass("active"); // 모든 탭에서 active 클래스 제거
    $(this).addClass("active"); // 클릭된 탭에 active 클래스 추가

    // 탭에 맞는 데이터 전환하려면 AJAX 또는 클래스에 따라 변경 가능
  });
});

// 스킬 탭 기능 구현 (두 번째 버전 - 중복)
$('.skill_tab').hide(); // 모든 스킬 탭 숨김
$('.skill_tab').eq(0).show(); // 첫 번째 탭만 표시

$('.skill_list > ul > li').click(function () {
  var i = $(this).index(); // 클릭된 탭의 인덱스 저장

  // 모든 탭에서 active 클래스 제거 후 현재 탭에 추가
  $('.skill_list > ul > li').find('a').removeClass('active'); 
  $(this).find('a').addClass('active'); 

  // 텍스트 컨테이너 애니메이션 효과
  $('.skill_txtcon').removeClass('on')
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  // 해당 인덱스의 탭 내용만 표시
  $('.skill_tab').hide();
  $('.skill_tab').eq(i).show();

  return false; // 기본 동작 방지
});

// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
    // Swiper 슬라이더 초기화
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto', // 자동으로 슬라이드 개수 조정
      spaceBetween: 30, // 슬라이드 간격
      loop: true, // 무한 루프
      autoplay: {
        delay: 0, // 자동재생 딜레이 없음
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
        loopedSlides: 1
      },
      speed: 3000, // 슬라이드 전환 속도
      navigation: {
        nextEl: ".swiper-button-next", // 다음 버튼
        prevEl: ".swiper-button-prev", // 이전 버튼
      },
    });
    
    // 슬라이더 호버 시 자동재생 정지/재시작
    $('.swiper').hover(function() {
        swiper.autoplay.stop(); // 마우스 오버 시 정지
    }, function(){
        swiper.autoplay.start(); // 마우스 아웃 시 재시작
    });

    // Top 버튼 스크롤 이벤트 (중복)
    $(window).scroll(function(){
        t=$(window).scrollTop();
        if(t>400)
            $('.top_btn>a').fadeIn();
        else{
            $('.top_btn>a').fadeOut();
        }
    })
    
    // 페이지 로드 시 스크롤 이벤트 트리거
    $(window).trigger('scroll');
    
    // Top 버튼 클릭 시 상단으로 부드럽게 이동
    $('.top_btn>a').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0})
    })

    // 스크롤 효과 - aboutme 섹션 애니메이션
    let top1 = $('.aboutme').offset().top; // aboutme 섹션의 위치 저장

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

    // 스킬 탭 기능 (세 번째 버전 - 중복)
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

    // 모바일 메뉴 토글 기능 (중복)
    $('.mbmenu').click(function(){
      $('.mbmenu').toggleClass('active')
      $('.open_nav').stop().toggleClass('active') // stop()으로 애니메이션 중첩 방지
    });

    // 모바일 메뉴의 마지막 링크 클릭 시 특별 처리
    $('.subnav_menu li:last-child a').click(function(e){
      e.preventDefault(); // 기본 링크 이동 막기
      $('.open_nav').hide(); // 네비게이션 숨김

      // 수동으로 이동 (같은 페이지 내 이동일 경우)
      const target = $(this).attr('href');
      window.location.href = target;
    });
});

// 또 다른 DOM 로드 이벤트 (중복)
document.addEventListener("DOMContentLoaded", function () {
    // 모든 메뉴 링크에 클릭 이벤트 추가
    const menuLinks = document.querySelectorAll(".subnav_menu li a");
    const openNav = document.querySelector(".open_nav");

    // 각 메뉴 링크 클릭 시 네비게이션 닫기
    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        openNav.classList.remove("active");
      });
    });
});