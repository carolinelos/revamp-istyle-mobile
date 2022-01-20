$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});


//  function preloader(){
//  document.getElementById("body").classList.add('noScroll');
//  document.getElementById("screen").classList.add('intro-active');
//  document.getElementById("menuMall").classList.add('i-UIScaleLogo');
//   }preloader
//   //remove/comment this one to check the website in loading state
//   window.onload = preloader;

var input = document.getElementById("searchtext");
var btnClose = document.getElementById("closeSearch");

  input.onclick = function(){
    $(".i-UiHeader-root").addClass("i-UiResultsActive");
    $("body").addClass("noScroll");
  };
  btnClose.onclick = function(){
    $(".i-UiHeader-root").removeClass("i-UiResultsActive");
    $("body").removeClass("noScroll");
  };



$('.js-clearSearchBox').css('opacity', '0');

$('.js-searchBox-input').keyup(function() {
  if ($(this).val() !='' ) {
    $('.js-clearSearchBox').css('opacity', '1');
  } else {
    $('.js-clearSearchBox').css('opacity', '0');
  };
  
  $(window).bind('keydown', function(e)  {
    if(e.keyCode === 27) {
      $('.js-searchBox-input').val('');
    };
  });
});
// click the button 
$('.js-clearSearchBox').click(function() {
  $('.js-searchBox-input').val('');
  $('.js-searchBox-input').focus();
  $('.js-clearSearchBox').css('opacity', '0');
});

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


// $(".i-UiIconButtonRoot").click(function (e) {
  
//     // Remove any old one
//     $(".i-UiTouchRippleRoot").remove();
  
//     // Setup
//     var posX = $(this).offset().left,
//         posY = $(this).offset().top,
//         buttonWidth = $(this).width(),
//         buttonHeight =  $(this).height();
    
//     // Add the element
//     $(this).prepend("<span class='i-UiTouchRippleRoot'></span>");
  
    
//    // Make it round!
//     if(buttonWidth >= buttonHeight) {
//       buttonHeight = buttonWidth;
//     } else {
//       buttonWidth = buttonHeight; 
//     }
    
//     // Get the center of the element
//     var x = e.pageX - posX - buttonWidth / 2;
//     var y = e.pageY - posY - buttonHeight / 2;
    
   
//     // Add the ripples CSS and start the animation
//     $(".i-UiTouchRippleRoot").css({
//       width: buttonWidth,
//       height: buttonHeight

//     }).addClass("rippleEffect");
//   });

   // init Swiper:
 const swiper = new Swiper('.i-UiMainBanner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
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
  const swiperPrd = new Swiper('.i-UiListPrdSwiper', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
     
    // And if we need scrollbar
  }); new Swiper('.i-UiSingleListPrd', {
    direction: 'horizontal',
    effect: "fade",
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  document.querySelectorAll(".i-UiMixImg").forEach(element => {
    element.onclick = (e) => {
      const elm = document.getElementsByClassName(e.target.getAttribute("anchor"));
      elm[0].classList.toggle("active");
      
    };
  });

  // Set the date we're counting down to
  var countDownDate = new Date("July 31, 2021 23:00:00").getTime();
       
  // Update the count down every 1 second
  var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (hours < 10) {
          hours = "0" + hours
      }
      if (minutes < 10) {
          minutes = "0" + minutes
      }

      if (seconds < 10) {
          seconds = "0" + seconds
      }

      // Display the result in the element with id="demo"
      // document.getElementById("countdown_days").innerHTML = days;
      document.getElementById("countdown_hours").innerHTML = hours;
      document.getElementById("countdown_minutes").innerHTML = minutes;
      document.getElementById("countdown_seconds").innerHTML = seconds;


      // If the count down is finished, write some text
      // if (distance < 0) {
      // 	clearInterval(x);
      // 	document.getElementById("demo").innerHTML = "EXPIRED";
      // }
  }, 1000);

  window.CI360 = { notInitOnLoad: true };


function toggleClass(targetElement, addedClass) {
  if (targetElement.classList.contains(addedClass)) {
    targetElement.classList.remove(addedClass);
  }
  else {
    targetElement.classList.add(addedClass);
  }
};

// This is the function we add to our menu button to enable its click functionality
document.querySelector('.i-UiMallBtn').addEventListener('click', function() {
  
  // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
  toggleClass(document.querySelector('.i-UiDrawerBottom'), 'menu--open');
  toggleClass(document.querySelector('.body'), 'noScroll');
  toggleClass(document.querySelector('.i-UiMainLayout'), 'active-overlay');
  
  // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
  toggleClass(document.querySelector('.i-UiMallBtn'), 'menu-btn--on');
});
document.querySelector('.i-UiMallClose').addEventListener('click', function() {
  
  // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
  toggleClass(document.querySelector('.i-UiDrawerBottom'), 'menu--open');
  toggleClass(document.querySelector('.body'), 'noScroll');
  toggleClass(document.querySelector('.i-UiMainLayout'), 'active-overlay');
  // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
  toggleClass(document.querySelector('.i-UiMallBtn'), 'menu-btn--on');
  toggleClass(document.querySelector('.btnIntro'), 'menu-btn--on');
});
document.querySelector('.btnIntro').addEventListener('click', function() {
  
  // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
  toggleClass(document.querySelector('.i-UiDrawerBottom'), 'menu--open');
  toggleClass(document.querySelector('.i-UiMainLayout'), 'active-overlay');
  
  // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
  toggleClass(document.querySelector('.btnIntro'), 'menu-btn--on');
  toggleClass(document.querySelector('.i-UiScreenIntro'), 'intro-active');
});

