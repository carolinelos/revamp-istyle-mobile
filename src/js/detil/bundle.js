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

$(".i-UiIconButtonRoot").click(function (e) {
  
    // Remove any old one
    $(".i-UiTouchRippleRoot").remove();
  
    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();
    
    // Add the element
    $(this).prepend("<span class='i-UiTouchRippleRoot'></span>");
  
    
   // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight; 
    }
    
    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;
    
   
    // Add the ripples CSS and start the animation
    $(".i-UiTouchRippleRoot").css({
      width: buttonWidth,
      height: buttonHeight

    }).addClass("rippleEffect");
  });

  const swiperArticle = new Swiper('.i-UiArticle', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  
    // And if we need scrollbar
  });

jQuery('.i-UiNumberDecrement').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.input-number-increment'),
        btnDown = spinner.find('.input-number-decrement'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

const swiperSize = new Swiper('.i-UiSizeList', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 15,
    direction: 'horizontal',
    loop: false,
    freeMode: true,
     
    // And if we need scrollbar
});

function mySize1(elem) {
    var a = document.getElementsByClassName('sizeItem-1')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('checked')
    }
    elem.classList.add('checked');
}

function mySize2(elem) {
    var a = document.getElementsByClassName('sizeItem-2')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('checked')
    }
    elem.classList.add('checked');
}

function mySize3(elem) {
    var a = document.getElementsByClassName('sizeItem-3')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('checked')
    }
    elem.classList.add('checked');
}