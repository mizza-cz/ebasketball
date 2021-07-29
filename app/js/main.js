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
      prevArrow: '<button class="slider__btn slider__btnprev"><img src="images/svg/angle-down.svg" alt="" ></button> ',
      nextArrow: ' <button class="slider__btn slider__btnnext"><img src="images/svg/angle-down.svg" alt = "" ></button > ',
      centerMode: true,
      // infinite: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      variableWidth: true,
      responsive: [
        {
         breakpoint: 899,
         settings: {
         
           arrows: true,
           slidesToShow: true,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 739,
         settings: {
            variableWidth: true,
            centerMode:true,
           arrows: false,
           dots:true,
           slidesToShow: true,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 439,
         settings: {
            variableWidth: true,
            centerMode:true,
           arrows: false,
           dots:true,
           slidesToShow: true,
           slidesToScroll: 1,
         }
       }
      ]
    });
});