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

  // selected checkbox data
var selected = [],
totalCheckboxes = $('.cbx-group').length;

// select all
$('#cbx-select-all').on('click', function() {
$('.checkbox').prop('checked', $(this).prop('checked'));
selected = getSelectedCheckbox();
showSelected();
})

// select group
$('.cbx-select-group').on('click', function() {
var selectedGroup = $(this).val();
$('.cbx-group-'+selectedGroup).prop('checked', $(this).prop('checked'));
selected = getSelectedCheckbox();
showSelected();
checkAllState();
})

// select item
$('[id^=cbx-group-]').on('click', function() {
$(this).prop('checked', $(this).prop('checked'));
selected = getSelectedCheckbox();
showSelected();
checkAllState();

// update group selector check state
var group = $(this).data('group')
  totalGroupCheckbox = $('.cbx-group-'+group).length,
  totalGroupSelected = $('.cbx-group-'+group+':checked').length;
if (totalGroupSelected == totalGroupCheckbox) {
$('#cbx-select-group-'+group).prop('checked', true)
} else {
$('#cbx-select-group-'+group).prop('checked', false)
}
})

// update select-all check state
function checkAllState() {
console.log('check all state')
if ($('.cbx-group:checked').length == totalCheckboxes) {
$('#cbx-select-all').prop('checked', true)
} else {
$('#cbx-select-all').prop('checked', false)
}
}

// get all selected checkboxes data
function getSelectedCheckbox() {
var s = []
$('.cbx-group:checked').each(function() {
s.push($(this).data('id'));
})
return s;
}

function showSelected() {
$('.output').text('')
$(selected).each(function(i, v) {
$('.output').append(v + ', ')
})
}


 $(document).ready(function () {
   $(".i-UiInputRoot").each(function () {
     if ($(this).val() != "") {
       $(this).parent().addClass("animation");
     }
   });
 });
 //Add animation when input is focused
 $(".i-UiInputRoot").focus(function () {
   $(this).parent().addClass("animation animation-color");
 });
 //Remove animation(s) when input is no longer focused
 $(".i-UiInputRoot").focusout(function () {
   if ($(this).val() === "")
     $(this).parent().removeClass("animation");
   $(this).parent().removeClass("animation-color");
 })

$('#identityType').on("click", "li", function(e) {
  e.preventDefault();
  $("#input-identity").val($(this).text());
  $('#identity').addClass('animation');
});

$('#insurance').on("click", "li", function(e) {
  e.preventDefault();
  $("#input-insurance").val($(this).text());
  $('#insuranceSelect').addClass('animation');
});

$('#kelurahan').on("click", "li", function(e) {
  e.preventDefault();
  $("#input-kelurahan").val($(this).text());
  $('#select_kelurahan').addClass('animation');
});

 function popup_Layer(el){	
   var temp = $('#' + el);
   var el_dimmed = $('.i-UiMainLayout').prepend('<div class="i-UiLadim"></div>');
   $('.i-UiLadim').css("height", $(document).height());
   $(temp).slideDown();
   $('body').addClass('noScroll');
   $(document).on('click','body.noScroll .i-UiLadim',function() {
       $('.i-UiLadim').remove();
       $('html,body').removeClass('noScroll');
       if ($('.i-UiPopLayer').length) {
           popup_Layer_close3(el);
       }
   });
 }

 function popup_Layer_close3(el){
   var temp = $('#' + el);
   $(temp).slideUp();
   $('.i-UiLadim').remove();
   $('body').removeClass('noScroll');
 }

const swiperPrd = new Swiper('.i-UiListPrdSwiper', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  freeMode: true,
   
  // And if we need scrollbar
});

function addAddress(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiSelectBox')
  }
  elem.classList.add('i-UiSelectBox');
}
function voucher(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiChecked')
  }
  elem.classList.add('i-UiChecked');
}
function courier(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiChecked')
  }
  elem.classList.add('i-UiChecked');
}

/*olin*/
function verifMet(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiChecked')
  }
  elem.classList.add('i-UiChecked');
}

function language(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiChecked')
  }
  elem.classList.add('i-UiChecked');
}
/*end*/

function timePick(elem) {
  var a = document.getElementsByClassName('i-UiBox')
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('i-UiChecked')
  }
  elem.classList.add('i-UiChecked');
}

const openModalBtn = document.querySelectorAll('[data-btn]')
const modal = document.querySelectorAll('[data-modal]')
const closeModalBtn = document.querySelectorAll('[data-close="true"]')
const btnLength = openModalBtn.length
const closeBtnLength = closeModalBtn.length

function openModal() {
  for (let i = 0; i < btnLength; i++) {
    openModalBtn[i].addEventListener('click', function() {
      modal[i].classList.add('open')
      $('.body').addClass('noScroll');
    })
    closeModal(i)
  }
}

function closeModal(i) {
  for (let j = 0; j < closeBtnLength; j++) {
    closeModalBtn[j].addEventListener('click', function(event) {
      if (event.target.dataset.close) {
        modal[i].classList.remove('open')
        $('.body').removeClass('noScroll');
      }
    })
  }
}

openModal()

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
