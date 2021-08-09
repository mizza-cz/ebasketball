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
$(document).ready(function(){
  function updateText(event){
    var input=$(this);
    setTimeout(function(){
      var val=input.val();
      if(val!="")
        input.parent().addClass("label-active");
      else
        input.parent().removeClass("label-active");
    },1)
  }
  $(".label input").keydown(updateText);
  $(".label input").change(updateText);
});


document.getElementById("CategoryTrees")
    .onchange = function () {
        var b = {
            10: "block1",
            20: "block2",
            30: "block3",
            40: "block4",
            50: "block5",
            60: "block6",
            70: "block7",
            80: "block8",
           
        }, c = this.value,
            a;
        for (a in b) document.getElementById(b[a])
            .style.display = 0 == c || c == a ? "block" : "none"
};


'use strict';
document.addEventListener('DOMContentLoaded', function(){
  const regForm = document.getElementById('regForm');
  const searchForm = document.getElementById('searchForm');
  regForm.addEventListener('submit', formSend);
  searchForm.addEventListener('submit', formSend2)

  async function formSend(e){
    e.preventDefault();
    let error = formValidate(regForm);
    if(error === 0){
      smoke.alert ("Děkujeme!", function (result) {window.location = '';})
      
    }else{
      smoke.alert ("Vyplňte tento formulář, prosím!", function (result) {window.location = '';})
    }
  }
  async function formSend2(e){
    e.preventDefault();
    let error = formValidate2(searchForm);
    if(error === 0){
      smoke.alert ("Děkujeme!", function (result) {window.location = '';})
      
    }else{
      smoke.alert ("Vyplňte tento formulář, prosím!", function (result) {window.location = '';})
    }
  }
  function formValidate2(searchForm){
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for(let index = 0; index < formReq.length; index++){
      const input = formReq[index];
      input.classList.remove('_error');

      if(input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
      } else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
        formAddError(input);
        error++;
      } else{
        if(input.value === ''){
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formValidate(regForm){
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for(let index = 0; index < formReq.length; index++){
      const input = formReq[index];
      input.classList.remove('_error');

      if(input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
      } else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
        formAddError(input);
        error++;
      } else{
        if(input.value === ''){
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});






