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


/// input value --> add class registiruj tym
var uiField = document.getElementsByClassName('team')[0];
var uiField2 = document.getElementsByClassName('name')[0];
var uiField3 = document.getElementsByClassName('surname')[0];
var uiField4 = document.getElementsByClassName('nickname')[0];
var uiField5 = document.getElementsByClassName('email')[0];
var uiField6 = document.getElementsByClassName('datum')[0];
var uiField7 = document.getElementsByClassName('id')[0];
uiField.addEventListener('keyup', function () {
    if (uiField.value.length >= 1) {
        uiField.classList.add('input-active');
    }else{   
        uiField.classList.remove('input-active');
    }
})
uiField2.addEventListener('keyup', function () {
    if (uiField2.value.length >= 1) {
        uiField2.classList.add('input-active');
    }else{   
        uiField2.classList.remove('input-active');
    }
})
uiField3.addEventListener('keyup', function () {
    if (uiField3.value.length >= 1) {
        uiField3.classList.add('input-active');
    }else{   
        uiField3.classList.remove('input-active');
    }
})
uiField4.addEventListener('keyup', function () {
    if (uiField4.value.length >= 1) {
        uiField4.classList.add('input-active');
    }else{   
        uiField4.classList.remove('input-active');
    }
})
uiField5.addEventListener('keyup', function () {
  if (uiField5.value.length >= 1) {
      uiField5.classList.add('input-active');
  }else{   
      uiField5.classList.remove('input-active');
  }
})
uiField6.addEventListener('keyup', function () {
  if (uiField6.value.length >= 1) {
      uiField6.classList.add('input-active');
  }else{   
      uiField6.classList.remove('input-active');
  }
})
uiField7.addEventListener('keyup', function () {
  if (uiField7.value.length >= 1) {
      uiField7.classList.add('input-active');
  }else{   
      uiField7.classList.remove('input-active');
  }
})

// input value --> add class search tym

var uiField9 = document.getElementsByClassName('name2')[0];
var uiField10 = document.getElementsByClassName('surname2')[0];
var uiField11 = document.getElementsByClassName('nickname2')[0];
var uiField12 = document.getElementsByClassName('email2')[0];
var uiField13 = document.getElementsByClassName('datum2')[0];
var uiField14 = document.getElementsByClassName('id2')[0];

uiField9.addEventListener('keyup', function () {
  if (uiField9.value.length >= 1) {
    uiField9.classList.add('input-active');
  }else{   
    uiField9.classList.remove('input-active');
  }
})
uiField10.addEventListener('keyup', function () {
  if (uiField10.value.length >= 1) {
    uiField10.classList.add('input-active');
  }else{   
    uiField10.classList.remove('input-active');
  }
})
uiField11.addEventListener('keyup', function () {
  if (uiField11.value.length >= 1) {
    uiField11.classList.add('input-active');
  }else{   
    uiField11.classList.remove('input-active');
  }
})
uiField12.addEventListener('keyup', function () {
  if (uiField12.value.length >= 1) {
    uiField12.classList.add('input-active');
  }else{   
    uiField12.classList.remove('input-active');
  }
})
uiField13.addEventListener('keyup', function () {
  if (uiField13.value.length >= 1) {
    uiField13.classList.add('input-active');
  }else{   
    uiField13.classList.remove('input-active');
  }
})
uiField14.addEventListener('keyup', function () {
  if (uiField14.value.length >= 1) {
    uiField14.classList.add('input-active');
  }else{   
    uiField14.classList.remove('input-active');
  }
})