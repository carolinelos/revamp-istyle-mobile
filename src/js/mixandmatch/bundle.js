$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
    if ((st > lastScrollTop) && (lastScrollTop>0)) {
       // downscroll code
      $(".i-UiSearchField-root").css({"display":"none","opacity":0});
    } else {
      // upscroll code
      $(".i-UiSearchField-root").css({"display":"flex","opacity":1});
    }
       lastScrollTop = st;
    });    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 10) {
            $('.i-UiHeader-root').addClass('i-UiScrollHeader');
        }
        else {
            $('.i-UiHeader-root').removeClass('i-UiScrollHeader');
        }
    });
});

const swiperMix = new Swiper('.i-UiMixContainer', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  
    // And if we need scrollbar
  });

  document.querySelectorAll(".i-UiMixImg").forEach(element => {
    element.onclick = (e) => {
      const elm = document.getElementsByClassName(e.target.getAttribute("anchor"));
      elm[0].classList.toggle("active");
      
    };
  });

  const swiperPrd = new Swiper('.i-UiListPrdSwiper', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
     
    // And if we need scrollbar
  });