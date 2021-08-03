$(function(){
   $('.navbar__menu').on('click', function () {
      $('.mobil-wrap').slideToggle();
    });
   // form style
   $('select, .shop__check').styler({});
 
   // scroll
   var $page = $('html, body');
   $('a[href*="#"]').click(function () {
     $page.animate(
       {
         scrollTop: $($.attr(this, 'href')).offset().top,
       },
       400,
     );
     return false;
   });


   // tabs
   $('.registrace__tab .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.registrace__tab').find('.tab__content').removeClass('tab-active').hide();
      $('.registrace__tab .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
    $('.slider__inner').slick({
      prevArrow: '<div class="slick-current"><button class="slider__btn slider__btnprev"><img src="images/svg/angle-down.svg" alt="" ></button></div> ',
      nextArrow: ' <button class="slider__btn slider__btnnext"><img src="images/svg/angle-down.svg" alt = "" ></button > ',
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [
      
       {
         breakpoint: 739,
         settings: {
          centerMode:true,
           arrows: false,
           dots:true,
           slidesToShow:1,
           centerPadding: '0px',
         }
       },
     
      ]
    });
});
var form = document.querySelector('form');
var inputs = document.querySelectorAll('input');

form.onsubmit = function(e) {
  var error = false;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      inputs[i].classList.add('error');
      error = true
    }
    else {
      inputs[i].classList.remove('error');
    }
  }
  if (error) {
    e.preventDefalt();
  }
}