$(function(){
  // $('#formular div').css('display','none');		   //Скрываем все блоки

  // $("#test").change(function(){						 //При смене 
  //   $('#container div').css('display','none');  //Скрываем все открытые блоки
  //   id = $('#test option:selected').val();	   //Вытаскиваем value
  //   $('#'+id).show();								  //Показываем блок c таким же id как наш value
  // });
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

var uiField2 = document.getElementsByClassName('name')[0];
var uiField3 = document.getElementsByClassName('surname')[0];
var uiField4 = document.getElementsByClassName('nickname')[0];
var uiField5 = document.getElementsByClassName('email')[0];
var uiField6 = document.getElementsByClassName('datum')[0];
var uiField7 = document.getElementsByClassName('id')[0];


var uiField = document.getElementsByClassName('team')[0];
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
var uiField15 = document.getElementsByClassName('build2')[0];

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

uiField15.addEventListener('keyup', function () {
  if (uiField15.value.length >= 1) {
    uiField15.classList.add('input-active');
  }else{   
    uiField15.classList.remove('input-active');
  }
})

/// *** 1 hrac
var uiField16 = document.getElementsByClassName('name3')[0];
var uiField17 = document.getElementsByClassName('surname3')[0];
var uiField18 = document.getElementsByClassName('nickname3')[0];
var uiField19 = document.getElementsByClassName('datum3')[0];
var uiField20 = document.getElementsByClassName('id3')[0];
var uiField21 = document.getElementsByClassName('build3')[0];



uiField16.addEventListener('keyup', function () {
  if (uiField16.value.length >= 1) {
    uiField16.classList.add('input-active');
  }else{   
    uiField16.classList.remove('input-active');
  }
})
uiField17.addEventListener('keyup', function () {
  if (uiField17.value.length >= 1) {
    uiField17.classList.add('input-active');
  }else{   
    uiField17.classList.remove('input-active');
  }
})
uiField18.addEventListener('keyup', function () {
  if (uiField18.value.length >= 1) {
    uiField18.classList.add('input-active');
  }else{   
    uiField18.classList.remove('input-active');
  }
})
uiField19.addEventListener('keyup', function () {
  if (uiField19.value.length >= 1) {
    uiField19.classList.add('input-active');
  }else{   
    uiField19.classList.remove('input-active');
  }
})
uiField20.addEventListener('keyup', function () {
  if (uiField20.value.length >= 1) {
    uiField20.classList.add('input-active');
  }else{   
    uiField20.classList.remove('input-active');
  }
})
uiField21.addEventListener('keyup', function () {
  if (uiField21.value.length >= 1) {
    uiField21.classList.add('input-active');
  }else{   
    uiField21.classList.remove('input-active');
  }
})
/// ***
/// *** 2 hrac
var uiField22 = document.getElementsByClassName('name4')[0];
var uiField23 = document.getElementsByClassName('surname4')[0];
var uiField24 = document.getElementsByClassName('nickname4')[0];
var uiField25 = document.getElementsByClassName('datum4')[0];
var uiField26 = document.getElementsByClassName('id4')[0];
var uiField27 = document.getElementsByClassName('build4')[0];



uiField22.addEventListener('keyup', function () {
  if (uiField22.value.length >= 1) {
    uiField22.classList.add('input-active');
  }else{   
    uiField22.classList.remove('input-active');
  }
})
uiField23.addEventListener('keyup', function () {
  if (uiField23.value.length >= 1) {
    uiField23.classList.add('input-active');
  }else{   
    uiField23.classList.remove('input-active');
  }
})
uiField24.addEventListener('keyup', function () {
  if (uiField24.value.length >= 1) {
    uiField24.classList.add('input-active');
  }else{   
    uiField24.classList.remove('input-active');
  }
})
uiField25.addEventListener('keyup', function () {
  if (uiField25.value.length >= 1) {
    uiField25.classList.add('input-active');
  }else{   
    uiField25.classList.remove('input-active');
  }
})
uiField26.addEventListener('keyup', function () {
  if (uiField26.value.length >= 1) {
    uiField26.classList.add('input-active');
  }else{   
    uiField26.classList.remove('input-active');
  }
})
uiField27.addEventListener('keyup', function () {
  if (uiField27.value.length >= 1) {
    uiField27.classList.add('input-active');
  }else{   
    uiField27.classList.remove('input-active');
  }
})
/// ***
/// *** 3 hrac
var uiField28 = document.getElementsByClassName('name5')[0];
var uiField29 = document.getElementsByClassName('surname5')[0];
var uiField30 = document.getElementsByClassName('nickname5')[0];
var uiField31 = document.getElementsByClassName('datum5')[0];
var uiField32 = document.getElementsByClassName('id5')[0];
var uiField33 = document.getElementsByClassName('build5')[0];



uiField28.addEventListener('keyup', function () {
  if (uiField28.value.length >= 1) {
    uiField28.classList.add('input-active');
  }else{   
    uiField28.classList.remove('input-active');
  }
})
uiField29.addEventListener('keyup', function () {
  if (uiField29.value.length >= 1) {
    uiField29.classList.add('input-active');
  }else{   
    uiField29.classList.remove('input-active');
  }
})
uiField30.addEventListener('keyup', function () {
  if (uiField30.value.length >= 1) {
    uiField30.classList.add('input-active');
  }else{   
    uiField30.classList.remove('input-active');
  }
})
uiField31.addEventListener('keyup', function () {
  if (uiField31.value.length >= 1) {
    uiField31.classList.add('input-active');
  }else{   
    uiField31.classList.remove('input-active');
  }
})
uiField32.addEventListener('keyup', function () {
  if (uiField32.value.length >= 1) {
    uiField32.classList.add('input-active');
  }else{   
    uiField32.classList.remove('input-active');
  }
})
uiField33.addEventListener('keyup', function () {
  if (uiField33.value.length >= 1) {
    uiField33.classList.add('input-active');
  }else{   
    uiField33.classList.remove('input-active');
  }
})
/// ***
/// *** 2.1 hrac
var uiField34 = document.getElementsByClassName('name6')[0];
var uiField35 = document.getElementsByClassName('surname6')[0];
var uiField36 = document.getElementsByClassName('nickname6')[0];
var uiField37 = document.getElementsByClassName('datum6')[0];
var uiField38 = document.getElementsByClassName('id6')[0];
var uiField39 = document.getElementsByClassName('build6')[0];



uiField34.addEventListener('keyup', function () {
  if (uiField34.value.length >= 1) {
    uiField34.classList.add('input-active');
  }else{   
    uiField34.classList.remove('input-active');
  }
})
uiField35.addEventListener('keyup', function () {
  if (uiField35.value.length >= 1) {
    uiField35.classList.add('input-active');
  }else{   
    uiField35.classList.remove('input-active');
  }
})
uiField36.addEventListener('keyup', function () {
  if (uiField36.value.length >= 1) {
    uiField36.classList.add('input-active');
  }else{   
    uiField36.classList.remove('input-active');
  }
})
uiField37.addEventListener('keyup', function () {
  if (uiField37.value.length >= 1) {
    uiField37.classList.add('input-active');
  }else{   
    uiField37.classList.remove('input-active');
  }
})
uiField38.addEventListener('keyup', function () {
  if (uiField38.value.length >= 1) {
    uiField38.classList.add('input-active');
  }else{   
    uiField38.classList.remove('input-active');
  }
})
uiField39.addEventListener('keyup', function () {
  if (uiField39.value.length >= 1) {
    uiField39.classList.add('input-active');
  }else{   
    uiField39.classList.remove('input-active');
  }
})
/// ***
/// *** 2.2 hrac
var uiField40 = document.getElementsByClassName('name7')[0];
var uiField41 = document.getElementsByClassName('surname7')[0];
var uiField42 = document.getElementsByClassName('nickname7')[0];
var uiField43 = document.getElementsByClassName('datum7')[0];
var uiField44 = document.getElementsByClassName('id7')[0];
var uiField45 = document.getElementsByClassName('build7')[0];



uiField40.addEventListener('keyup', function () {
  if (uiField40.value.length >= 1) {
    uiField40.classList.add('input-active');
  }else{   
    uiField40.classList.remove('input-active');
  }
})
uiField41.addEventListener('keyup', function () {
  if (uiField41.value.length >= 1) {
    uiField41.classList.add('input-active');
  }else{   
    uiField41.classList.remove('input-active');
  }
})
uiField42.addEventListener('keyup', function () {
  if (uiField42.value.length >= 1) {
    uiField42.classList.add('input-active');
  }else{   
    uiField42.classList.remove('input-active');
  }
})
uiField43.addEventListener('keyup', function () {
  if (uiField43.value.length >= 1) {
    uiField43.classList.add('input-active');
  }else{   
    uiField43.classList.remove('input-active');
  }
})
uiField44.addEventListener('keyup', function () {
  if (uiField44.value.length >= 1) {
    uiField44.classList.add('input-active');
  }else{   
    uiField44.classList.remove('input-active');
  }
})
uiField45.addEventListener('keyup', function () {
  if (uiField45.value.length >= 1) {
    uiField45.classList.add('input-active');
  }else{   
    uiField45.classList.remove('input-active');
  }
})
/// ***
/// *** 2.3 hrac
var uiField46 = document.getElementsByClassName('name8')[0];
var uiField47 = document.getElementsByClassName('surname8')[0];
var uiField48 = document.getElementsByClassName('nickname8')[0];
var uiField49 = document.getElementsByClassName('datum8')[0];
var uiField50 = document.getElementsByClassName('id8')[0];
var uiField51 = document.getElementsByClassName('build8')[0];



uiField46.addEventListener('keyup', function () {
  if (uiField46.value.length >= 1) {
    uiField46.classList.add('input-active');
  }else{   
    uiField46.classList.remove('input-active');
  }
})
uiField47.addEventListener('keyup', function () {
  if (uiField47.value.length >= 1) {
    uiField47.classList.add('input-active');
  }else{   
    uiField47.classList.remove('input-active');
  }
})
uiField48.addEventListener('keyup', function () {
  if (uiField48.value.length >= 1) {
    uiField48.classList.add('input-active');
  }else{   
    uiField48.classList.remove('input-active');
  }
})
uiField49.addEventListener('keyup', function () {
  if (uiField49.value.length >= 1) {
    uiField49.classList.add('input-active');
  }else{   
    uiField49.classList.remove('input-active');
  }
})
uiField50.addEventListener('keyup', function () {
  if (uiField50.value.length >= 1) {
    uiField50.classList.add('input-active');
  }else{   
    uiField50.classList.remove('input-active');
  }
})
uiField51.addEventListener('keyup', function () {
  if (uiField51.value.length >= 1) {
    uiField51.classList.add('input-active');
  }else{   
    uiField51.classList.remove('input-active');
  }
})
/// ***
/// *** 2.4 hrac
var uiField52 = document.getElementsByClassName('name9')[0];
var uiField53 = document.getElementsByClassName('surname9')[0];
var uiField54 = document.getElementsByClassName('nickname9')[0];
var uiField55 = document.getElementsByClassName('datum9')[0];
var uiField56 = document.getElementsByClassName('id9')[0];
var uiField57 = document.getElementsByClassName('build9')[0];



uiField52.addEventListener('keyup', function () {
  if (uiField52.value.length >= 1) {
    uiField52.classList.add('input-active');
  }else{   
    uiField52.classList.remove('input-active');
  }
})
uiField53.addEventListener('keyup', function () {
  if (uiField53.value.length >= 1) {
    uiField53.classList.add('input-active');
  }else{   
    uiField53.classList.remove('input-active');
  }
})
uiField54.addEventListener('keyup', function () {
  if (uiField54.value.length >= 1) {
    uiField54.classList.add('input-active');
  }else{   
    uiField54.classList.remove('input-active');
  }
})
uiField55.addEventListener('keyup', function () {
  if (uiField55.value.length >= 1) {
    uiField55.classList.add('input-active');
  }else{   
    uiField55.classList.remove('input-active');
  }
})
uiField56.addEventListener('keyup', function () {
  if (uiField56.value.length >= 1) {
    uiField56.classList.add('input-active');
  }else{   
    uiField56.classList.remove('input-active');
  }
})
uiField57.addEventListener('keyup', function () {
  if (uiField57.value.length >= 1) {
    uiField57.classList.add('input-active');
  }else{   
    uiField57.classList.remove('input-active');
  }
})
/// ***
/// *** 3.1 hrac
var uiField58 = document.getElementsByClassName('name10')[0];
var uiField59 = document.getElementsByClassName('surname10')[0];
var uiField60 = document.getElementsByClassName('nickname10')[0];
var uiField61 = document.getElementsByClassName('datum10')[0];
var uiField62 = document.getElementsByClassName('id10')[0];
var uiField63 = document.getElementsByClassName('build10')[0];

var uiField64 = document.getElementsByClassName('name11')[0];
var uiField65 = document.getElementsByClassName('surname11')[0];
var uiField66 = document.getElementsByClassName('nickname11')[0];
var uiField67 = document.getElementsByClassName('datum11')[0];
var uiField68 = document.getElementsByClassName('id11')[0];
var uiField69 = document.getElementsByClassName('build11')[0];

var uiField70 = document.getElementsByClassName('name12')[0];
var uiField71 = document.getElementsByClassName('surname12')[0];
var uiField72 = document.getElementsByClassName('nickname12')[0];
var uiField73 = document.getElementsByClassName('datum12')[0];
var uiField74 = document.getElementsByClassName('id12')[0];
var uiField75 = document.getElementsByClassName('build12')[0];

var uiField76 = document.getElementsByClassName('name13')[0];
var uiField77 = document.getElementsByClassName('surname13')[0];
var uiField78 = document.getElementsByClassName('nickname13')[0];
var uiField79 = document.getElementsByClassName('datum13')[0];
var uiField80 = document.getElementsByClassName('id13')[0];
var uiField81 = document.getElementsByClassName('build13')[0];

var uiField82 = document.getElementsByClassName('name14')[0];
var uiField83 = document.getElementsByClassName('surname14')[0];
var uiField84 = document.getElementsByClassName('nickname14')[0];
var uiField85 = document.getElementsByClassName('datum14')[0];
var uiField86 = document.getElementsByClassName('id14')[0];
var uiField87 = document.getElementsByClassName('build14')[0];

uiField58.addEventListener('keyup', function () {
  if (uiField58.value.length >= 1) {
    uiField58.classList.add('input-active');
  }else{   
    uiField58.classList.remove('input-active');
  }
})
uiField59.addEventListener('keyup', function () {
  if (uiField59.value.length >= 1) {
    uiField59.classList.add('input-active');
  }else{   
    uiField59.classList.remove('input-active');
  }
})
uiField60.addEventListener('keyup', function () {
  if (uiField60.value.length >= 1) {
    uiField60.classList.add('input-active');
  }else{   
    uiField60.classList.remove('input-active');
  }
})
uiField61.addEventListener('keyup', function () {
  if (uiField61.value.length >= 1) {
    uiField61.classList.add('input-active');
  }else{   
    uiField61.classList.remove('input-active');
  }
})
uiField62.addEventListener('keyup', function () {
  if (uiField62.value.length >= 1) {
    uiField62.classList.add('input-active');
  }else{   
    uiField62.classList.remove('input-active');
  }
})
uiField63.addEventListener('keyup', function () {
  if (uiField63.value.length >= 1) {
    uiField63.classList.add('input-active');
  }else{   
    uiField63.classList.remove('input-active');
  }
})
uiField64.addEventListener('keyup', function () {
  if (uiField64.value.length >= 1) {
    uiField64.classList.add('input-active');
  }else{   
    uiField64.classList.remove('input-active');
  }
})
uiField65.addEventListener('keyup', function () {
  if (uiField65.value.length >= 1) {
    uiField65.classList.add('input-active');
  }else{   
    uiField65.classList.remove('input-active');
  }
})
uiField66.addEventListener('keyup', function () {
  if (uiField66.value.length >= 1) {
    uiField66.classList.add('input-active');
  }else{   
    uiField66.classList.remove('input-active');
  }
})
uiField67.addEventListener('keyup', function () {
  if (uiField67.value.length >= 1) {
    uiField67.classList.add('input-active');
  }else{   
    uiField67.classList.remove('input-active');
  }
})
uiField68.addEventListener('keyup', function () {
  if (uiField68.value.length >= 1) {
    uiField68.classList.add('input-active');
  }else{   
    uiField68.classList.remove('input-active');
  }
})
uiField69.addEventListener('keyup', function () {
  if (uiField69.value.length >= 1) {
    uiField69.classList.add('input-active');
  }else{   
    uiField69.classList.remove('input-active');
  }
})
uiField70.addEventListener('keyup', function () {
  if (uiField70.value.length >= 1) {
    uiField70.classList.add('input-active');
  }else{   
    uiField70.classList.remove('input-active');
  }
})
uiField71.addEventListener('keyup', function () {
  if (uiField71.value.length >= 1) {
    uiField71.classList.add('input-active');
  }else{   
    uiField71.classList.remove('input-active');
  }
})
uiField72.addEventListener('keyup', function () {
  if (uiField72.value.length >= 1) {
    uiField72.classList.add('input-active');
  }else{   
    uiField72.classList.remove('input-active');
  }
})
uiField73.addEventListener('keyup', function () {
  if (uiField73.value.length >= 1) {
    uiField73.classList.add('input-active');
  }else{   
    uiField73.classList.remove('input-active');
  }
})
uiField74.addEventListener('keyup', function () {
  if (uiField74.value.length >= 1) {
    uiField74.classList.add('input-active');
  }else{   
    uiField74.classList.remove('input-active');
  }
})
uiField75.addEventListener('keyup', function () {
  if (uiField75.value.length >= 1) {
    uiField75.classList.add('input-active');
  }else{   
    uiField75.classList.remove('input-active');
  }
})
uiField76.addEventListener('keyup', function () {
  if (uiField76.value.length >= 1) {
    uiField76.classList.add('input-active');
  }else{   
    uiField76.classList.remove('input-active');
  }
})
uiField77.addEventListener('keyup', function () {
  if (uiField77.value.length >= 1) {
    uiField77.classList.add('input-active');
  }else{   
    uiField77.classList.remove('input-active');
  }
})
uiField78.addEventListener('keyup', function () {
  if (uiField78.value.length >= 1) {
    uiField78.classList.add('input-active');
  }else{   
    uiField78.classList.remove('input-active');
  }
})
uiField79.addEventListener('keyup', function () {
  if (uiField79.value.length >= 1) {
    uiField79.classList.add('input-active');
  }else{   
    uiField79.classList.remove('input-active');
  }
})
uiField80.addEventListener('keyup', function () {
  if (uiField80.value.length >= 1) {
    uiField80.classList.add('input-active');
  }else{   
    uiField80.classList.remove('input-active');
  }
})
uiField81.addEventListener('keyup', function () {
  if (uiField81.value.length >= 1) {
    uiField81.classList.add('input-active');
  }else{   
    uiField81.classList.remove('input-active');
  }
})
uiField82.addEventListener('keyup', function () {
  if (uiField82.value.length >= 1) {
    uiField82.classList.add('input-active');
  }else{   
    uiField82.classList.remove('input-active');
  }
})
uiField83.addEventListener('keyup', function () {
  if (uiField83.value.length >= 1) {
    uiField83.classList.add('input-active');
  }else{   
    uiField83.classList.remove('input-active');
  }
})
uiField84.addEventListener('keyup', function () {
  if (uiField84.value.length >= 1) {
    uiField84.classList.add('input-active');
  }else{   
    uiField84.classList.remove('input-active');
  }
})
uiField85.addEventListener('keyup', function () {
  if (uiField85.value.length >= 1) {
    uiField85.classList.add('input-active');
  }else{   
    uiField85.classList.remove('input-active');
  }
})
uiField86.addEventListener('keyup', function () {
  if (uiField86.value.length >= 1) {
    uiField86.classList.add('input-active');
  }else{   
    uiField86.classList.remove('input-active');
  }
})
uiField87.addEventListener('keyup', function () {
  if (uiField87.value.length >= 1) {
    uiField87.classList.add('input-active');
  }else{   
    uiField87.classList.remove('input-active');
  }
})
/// ***

/// *** 4 (6 hracu) hrac
var uiField88 = document.getElementsByClassName('name15')[0];
var uiField89 = document.getElementsByClassName('surname15')[0];
var uiField90 = document.getElementsByClassName('nickname15')[0];
var uiField91 = document.getElementsByClassName('datum15')[0];
var uiField92 = document.getElementsByClassName('id15')[0];
var uiField93 = document.getElementsByClassName('build15')[0];

var uiField94 = document.getElementsByClassName('name16')[0];
var uiField95 = document.getElementsByClassName('surname16')[0];
var uiField96 = document.getElementsByClassName('nickname16')[0];
var uiField97 = document.getElementsByClassName('datum16')[0];
var uiField98 = document.getElementsByClassName('id16')[0];
var uiField99 = document.getElementsByClassName('build16')[0];

var uiField100 = document.getElementsByClassName('name17')[0];
var uiField101 = document.getElementsByClassName('surname17')[0];
var uiField102 = document.getElementsByClassName('nickname17')[0];
var uiField103 = document.getElementsByClassName('datum17')[0];
var uiField104 = document.getElementsByClassName('id17')[0];
var uiField105 = document.getElementsByClassName('build17')[0];

var uiField106 = document.getElementsByClassName('name18')[0];
var uiField107 = document.getElementsByClassName('surname18')[0];
var uiField108 = document.getElementsByClassName('nickname18')[0];
var uiField109 = document.getElementsByClassName('datum18')[0];
var uiField110 = document.getElementsByClassName('id18')[0];
var uiField111 = document.getElementsByClassName('build18')[0];

var uiField112 = document.getElementsByClassName('name19')[0];
var uiField113 = document.getElementsByClassName('surname19')[0];
var uiField114 = document.getElementsByClassName('nickname19')[0];
var uiField115 = document.getElementsByClassName('datum19')[0];
var uiField116 = document.getElementsByClassName('id19')[0];
var uiField117 = document.getElementsByClassName('build19')[0];

var uiField118 = document.getElementsByClassName('name20')[0];
var uiField119 = document.getElementsByClassName('surname20')[0];
var uiField120 = document.getElementsByClassName('nickname20')[0];
var uiField121 = document.getElementsByClassName('datum20')[0];
var uiField122 = document.getElementsByClassName('id20')[0];
var uiField123 = document.getElementsByClassName('build20')[0];

uiField88.addEventListener('keyup', function () {
  if (uiField88.value.length >= 1) {
    uiField88.classList.add('input-active');
  }else{   
    uiField88.classList.remove('input-active');
  }
})
uiField89.addEventListener('keyup', function () {
  if (uiField89.value.length >= 1) {
    uiField89.classList.add('input-active');
  }else{   
    uiField89.classList.remove('input-active');
  }
})
uiField90.addEventListener('keyup', function () {
  if (uiField90.value.length >= 1) {
    uiField90.classList.add('input-active');
  }else{   
    uiField90.classList.remove('input-active');
  }
})
uiField91.addEventListener('keyup', function () {
  if (uiField91.value.length >= 1) {
    uiField91.classList.add('input-active');
  }else{   
    uiField91.classList.remove('input-active');
  }
})
uiField92.addEventListener('keyup', function () {
  if (uiField92.value.length >= 1) {
    uiField92.classList.add('input-active');
  }else{   
    uiField92.classList.remove('input-active');
  }
})
uiField93.addEventListener('keyup', function () {
  if (uiField93.value.length >= 1) {
    uiField93.classList.add('input-active');
  }else{   
    uiField93.classList.remove('input-active');
  }
})
uiField94.addEventListener('keyup', function () {
  if (uiField94.value.length >= 1) {
    uiField94.classList.add('input-active');
  }else{   
    uiField94.classList.remove('input-active');
  }
})
uiField95.addEventListener('keyup', function () {
  if (uiField95.value.length >= 1) {
    uiField95.classList.add('input-active');
  }else{   
    uiField95.classList.remove('input-active');
  }
})
uiField96.addEventListener('keyup', function () {
  if (uiField96.value.length >= 1) {
    uiField96.classList.add('input-active');
  }else{   
    uiField96.classList.remove('input-active');
  }
})
uiField97.addEventListener('keyup', function () {
  if (uiField97.value.length >= 1) {
    uiField97.classList.add('input-active');
  }else{   
    uiField97.classList.remove('input-active');
  }
})
uiField98.addEventListener('keyup', function () {
  if (uiField98.value.length >= 1) {
    uiField98.classList.add('input-active');
  }else{   
    uiField98.classList.remove('input-active');
  }
})
uiField99.addEventListener('keyup', function () {
  if (uiField99.value.length >= 1) {
    uiField99.classList.add('input-active');
  }else{   
    uiField99.classList.remove('input-active');
  }
})
uiField100.addEventListener('keyup', function () {
  if (uiField100.value.length >= 1) {
    uiField100.classList.add('input-active');
  }else{   
    uiField100.classList.remove('input-active');
  }
})
uiField101.addEventListener('keyup', function () {
  if (uiField101.value.length >= 1) {
    uiField101.classList.add('input-active');
  }else{   
    uiField101.classList.remove('input-active');
  }
})
uiField102.addEventListener('keyup', function () {
  if (uiField102.value.length >= 1) {
    uiField102.classList.add('input-active');
  }else{   
    uiField102.classList.remove('input-active');
  }
})
uiField103.addEventListener('keyup', function () {
  if (uiField103.value.length >= 1) {
    uiField103.classList.add('input-active');
  }else{   
    uiField103.classList.remove('input-active');
  }
})
uiField104.addEventListener('keyup', function () {
  if (uiField104.value.length >= 1) {
    uiField104.classList.add('input-active');
  }else{   
    uiField104.classList.remove('input-active');
  }
})
uiField105.addEventListener('keyup', function () {
  if (uiField105.value.length >= 1) {
    uiField105.classList.add('input-active');
  }else{   
    uiField105.classList.remove('input-active');
  }
})
uiField106.addEventListener('keyup', function () {
  if (uiField106.value.length >= 1) {
    uiField106.classList.add('input-active');
  }else{   
    uiField106.classList.remove('input-active');
  }
})
uiField107.addEventListener('keyup', function () {
  if (uiField107.value.length >= 1) {
    uiField107.classList.add('input-active');
  }else{   
    uiField107.classList.remove('input-active');
  }
})
uiField108.addEventListener('keyup', function () {
  if (uiField108.value.length >= 1) {
    uiField108.classList.add('input-active');
  }else{   
    uiField108.classList.remove('input-active');
  }
})
uiField109.addEventListener('keyup', function () {
  if (uiField109.value.length >= 1) {
    uiField109.classList.add('input-active');
  }else{   
    uiField109.classList.remove('input-active');
  }
})
uiField110.addEventListener('keyup', function () {
  if (uiField110.value.length >= 1) {
    uiField110.classList.add('input-active');
  }else{   
    uiField110.classList.remove('input-active');
  }
})
uiField111.addEventListener('keyup', function () {
  if (uiField111.value.length >= 1) {
    uiField111.classList.add('input-active');
  }else{   
    uiField111.classList.remove('input-active');
  }
})
uiField112.addEventListener('keyup', function () {
  if (uiField112.value.length >= 1) {
    uiField112.classList.add('input-active');
  }else{   
    uiField112.classList.remove('input-active');
  }
})
uiField113.addEventListener('keyup', function () {
  if (uiField113.value.length >= 1) {
    uiField113.classList.add('input-active');
  }else{   
    uiField113.classList.remove('input-active');
  }
})
uiField114.addEventListener('keyup', function () {
  if (uiField114.value.length >= 1) {
    uiField114.classList.add('input-active');
  }else{   
    uiField114.classList.remove('input-active');
  }
})
uiField115.addEventListener('keyup', function () {
  if (uiField115.value.length >= 1) {
    uiField115.classList.add('input-active');
  }else{   
    uiField115.classList.remove('input-active');
  }
})
uiField116.addEventListener('keyup', function () {
  if (uiField116.value.length >= 1) {
    uiField116.classList.add('input-active');
  }else{   
    uiField116.classList.remove('input-active');
  }
})
uiField117.addEventListener('keyup', function () {
  if (uiField117.value.length >= 1) {
    uiField117.classList.add('input-active');
  }else{   
    uiField117.classList.remove('input-active');
  }
})
uiField118.addEventListener('keyup', function () {
  if (uiField118.value.length >= 1) {
    uiField118.classList.add('input-active');
  }else{   
    uiField118.classList.remove('input-active');
  }
})
uiField119.addEventListener('keyup', function () {
  if (uiField119.value.length >= 1) {
    uiField119.classList.add('input-active');
  }else{   
    uiField119.classList.remove('input-active');
  }
})
uiField120.addEventListener('keyup', function () {
  if (uiField120.value.length >= 1) {
    uiField120.classList.add('input-active');
  }else{   
    uiField120.classList.remove('input-active');
  }
})
uiField121.addEventListener('keyup', function () {
  if (uiField121.value.length >= 1) {
    uiField121.classList.add('input-active');
  }else{   
    uiField121.classList.remove('input-active');
  }
})
uiField122.addEventListener('keyup', function () {
  if (uiField122.value.length >= 1) {
    uiField122.classList.add('input-active');
  }else{   
    uiField122.classList.remove('input-active');
  }
})
uiField123.addEventListener('keyup', function () {
  if (uiField123.value.length >= 1) {
    uiField123.classList.add('input-active');
  }else{   
    uiField123.classList.remove('input-active');
  }
})

/// ***

/// *** 5 (7 hracu) hrac
var uiField124 = document.getElementsByClassName('name21')[0];
var uiField125 = document.getElementsByClassName('surname21')[0];
var uiField126 = document.getElementsByClassName('nickname21')[0];
var uiField127 = document.getElementsByClassName('datum21')[0];
var uiField128 = document.getElementsByClassName('id21')[0];
var uiField129 = document.getElementsByClassName('build21')[0];
uiField124.addEventListener('keyup', function () {
  if (uiField124.value.length >= 1) {
    uiField124.classList.add('input-active');
  }else{   
    uiField124.classList.remove('input-active');
  }
})
uiField125.addEventListener('keyup', function () {
  if (uiField125.value.length >= 1) {
    uiField125.classList.add('input-active');
  }else{   
    uiField125.classList.remove('input-active');
  }
})
uiField126.addEventListener('keyup', function () {
  if (uiField126.value.length >= 1) {
    uiField126.classList.add('input-active');
  }else{   
    uiField126.classList.remove('input-active');
  }
})
uiField127.addEventListener('keyup', function () {
  if (uiField127.value.length >= 1) {
    uiField127.classList.add('input-active');
  }else{   
    uiField127.classList.remove('input-active');
  }
})
uiField128.addEventListener('keyup', function () {
  if (uiField128.value.length >= 1) {
    uiField128.classList.add('input-active');
  }else{   
    uiField128.classList.remove('input-active');
  }
})
uiField129.addEventListener('keyup', function () {
  if (uiField129.value.length >= 1) {
    uiField129.classList.add('input-active');
  }else{   
    uiField129.classList.remove('input-active');
  }
})
var uiField130 = document.getElementsByClassName('name22')[0];
var uiField131 = document.getElementsByClassName('surname22')[0];
var uiField132 = document.getElementsByClassName('nickname22')[0];
var uiField133 = document.getElementsByClassName('datum22')[0];
var uiField134 = document.getElementsByClassName('id22')[0];
var uiField135 = document.getElementsByClassName('build22')[0];
uiField130.addEventListener('keyup', function () {
  if (uiField130.value.length >= 1) {
    uiField130.classList.add('input-active');
  }else{   
    uiField130.classList.remove('input-active');
  }
})
uiField131.addEventListener('keyup', function () {
  if (uiField131.value.length >= 1) {
    uiField131.classList.add('input-active');
  }else{   
    uiField131.classList.remove('input-active');
  }
})
uiField132.addEventListener('keyup', function () {
  if (uiField132.value.length >= 1) {
    uiField132.classList.add('input-active');
  }else{   
    uiField132.classList.remove('input-active');
  }
})
uiField133.addEventListener('keyup', function () {
  if (uiField133.value.length >= 1) {
    uiField133.classList.add('input-active');
  }else{   
    uiField133.classList.remove('input-active');
  }
})
uiField134.addEventListener('keyup', function () {
  if (uiField134.value.length >= 1) {
    uiField134.classList.add('input-active');
  }else{   
    uiField134.classList.remove('input-active');
  }
})
uiField135.addEventListener('keyup', function () {
  if (uiField135.value.length >= 1) {
    uiField135.classList.add('input-active');
  }else{   
    uiField135.classList.remove('input-active');
  }
})
var uiField136 = document.getElementsByClassName('name23')[0];
var uiField137 = document.getElementsByClassName('surname23')[0];
var uiField138 = document.getElementsByClassName('nickname23')[0];
var uiField139 = document.getElementsByClassName('datum23')[0];
var uiField140 = document.getElementsByClassName('id23')[0];
var uiField141 = document.getElementsByClassName('build23')[0];
uiField136.addEventListener('keyup', function () {
  if (uiField136.value.length >= 1) {
    uiField136.classList.add('input-active');
  }else{   
    uiField136.classList.remove('input-active');
  }
})
uiField137.addEventListener('keyup', function () {
  if (uiField137.value.length >= 1) {
    uiField137.classList.add('input-active');
  }else{   
    uiField137.classList.remove('input-active');
  }
})
uiField138.addEventListener('keyup', function () {
  if (uiField138.value.length >= 1) {
    uiField138.classList.add('input-active');
  }else{   
    uiField138.classList.remove('input-active');
  }
})
uiField139.addEventListener('keyup', function () {
  if (uiField139.value.length >= 1) {
    uiField139.classList.add('input-active');
  }else{   
    uiField139.classList.remove('input-active');
  }
})
uiField140.addEventListener('keyup', function () {
  if (uiField140.value.length >= 1) {
    uiField140.classList.add('input-active');
  }else{   
    uiField140.classList.remove('input-active');
  }
})
uiField141.addEventListener('keyup', function () {
  if (uiField141.value.length >= 1) {
    uiField141.classList.add('input-active');
  }else{   
    uiField141.classList.remove('input-active');
  }
})
var uiField142 = document.getElementsByClassName('name24')[0];
var uiField143 = document.getElementsByClassName('surname24')[0];
var uiField144 = document.getElementsByClassName('nickname24')[0];
var uiField145 = document.getElementsByClassName('datum24')[0];
var uiField146 = document.getElementsByClassName('id24')[0];
var uiField147 = document.getElementsByClassName('build24')[0];
uiField142.addEventListener('keyup', function () {
  if (uiField142.value.length >= 1) {
    uiField142.classList.add('input-active');
  }else{   
    uiField142.classList.remove('input-active');
  }
})
uiField143.addEventListener('keyup', function () {
  if (uiField143.value.length >= 1) {
    uiField143.classList.add('input-active');
  }else{   
    uiField143.classList.remove('input-active');
  }
})
uiField144.addEventListener('keyup', function () {
  if (uiField144.value.length >= 1) {
    uiField144.classList.add('input-active');
  }else{   
    uiField144.classList.remove('input-active');
  }
})
uiField145.addEventListener('keyup', function () {
  if (uiField145.value.length >= 1) {
    uiField145.classList.add('input-active');
  }else{   
    uiField145.classList.remove('input-active');
  }
})
uiField146.addEventListener('keyup', function () {
  if (uiField146.value.length >= 1) {
    uiField146.classList.add('input-active');
  }else{   
    uiField146.classList.remove('input-active');
  }
})
uiField147.addEventListener('keyup', function () {
  if (uiField147.value.length >= 1) {
    uiField147.classList.add('input-active');
  }else{   
    uiField147.classList.remove('input-active');
  }
})
var uiField148 = document.getElementsByClassName('name25')[0];
var uiField149 = document.getElementsByClassName('surname25')[0];
var uiField150 = document.getElementsByClassName('nickname25')[0];
var uiField151 = document.getElementsByClassName('datum25')[0];
var uiField152 = document.getElementsByClassName('id25')[0];
var uiField153 = document.getElementsByClassName('build25')[0];

var uiField154 = document.getElementsByClassName('name26')[0];
var uiField155 = document.getElementsByClassName('surname26')[0];
var uiField156 = document.getElementsByClassName('nickname26')[0];
var uiField157 = document.getElementsByClassName('datum26')[0];
var uiField158 = document.getElementsByClassName('id26')[0];
var uiField159 = document.getElementsByClassName('build26')[0];

var uiField160 = document.getElementsByClassName('name27')[0];
var uiField161 = document.getElementsByClassName('surname27')[0];
var uiField162 = document.getElementsByClassName('nickname27')[0];
var uiField163 = document.getElementsByClassName('datum27')[0];
var uiField164 = document.getElementsByClassName('id27')[0];
var uiField165 = document.getElementsByClassName('build27')[0];
uiField148.addEventListener('keyup', function () {
  if (uiField148.value.length >= 1) {
    uiField148.classList.add('input-active');
  }else{   
    uiField148.classList.remove('input-active');
  }
})
uiField149.addEventListener('keyup', function () {
  if (uiField149.value.length >= 1) {
    uiField149.classList.add('input-active');
  }else{   
    uiField149.classList.remove('input-active');
  }
})
uiField150.addEventListener('keyup', function () {
  if (uiField150.value.length >= 1) {
    uiField150.classList.add('input-active');
  }else{   
    uiField150.classList.remove('input-active');
  }
})
uiField151.addEventListener('keyup', function () {
  if (uiField151.value.length >= 1) {
    uiField151.classList.add('input-active');
  }else{   
    uiField151.classList.remove('input-active');
  }
})
uiField152.addEventListener('keyup', function () {
  if (uiField152.value.length >= 1) {
    uiField152.classList.add('input-active');
  }else{   
    uiField152.classList.remove('input-active');
  }
})
uiField153.addEventListener('keyup', function () {
  if (uiField153.value.length >= 1) {
    uiField153.classList.add('input-active');
  }else{   
    uiField153.classList.remove('input-active');
  }
})
uiField154.addEventListener('keyup', function () {
  if (uiField154.value.length >= 1) {
    uiField154.classList.add('input-active');
  }else{   
    uiField154.classList.remove('input-active');
  }
})
uiField155.addEventListener('keyup', function () {
  if (uiField155.value.length >= 1) {
    uiField155.classList.add('input-active');
  }else{   
    uiField155.classList.remove('input-active');
  }
})
uiField156.addEventListener('keyup', function () {
  if (uiField156.value.length >= 1) {
    uiField156.classList.add('input-active');
  }else{   
    uiField156.classList.remove('input-active');
  }
})
uiField157.addEventListener('keyup', function () {
  if (uiField157.value.length >= 1) {
    uiField157.classList.add('input-active');
  }else{   
    uiField157.classList.remove('input-active');
  }
})
uiField158.addEventListener('keyup', function () {
  if (uiField158.value.length >= 1) {
    uiField158.classList.add('input-active');
  }else{   
    uiField158.classList.remove('input-active');
  }
})
uiField159.addEventListener('keyup', function () {
  if (uiField159.value.length >= 1) {
    uiField159.classList.add('input-active');
  }else{   
    uiField159.classList.remove('input-active');
  }
})
uiField160.addEventListener('keyup', function () {
  if (uiField160.value.length >= 1) {
    uiField160.classList.add('input-active');
  }else{   
    uiField160.classList.remove('input-active');
  }
})
uiField161.addEventListener('keyup', function () {
  if (uiField161.value.length >= 1) {
    uiField161.classList.add('input-active');
  }else{   
    uiField161.classList.remove('input-active');
  }
})
uiField162.addEventListener('keyup', function () {
  if (uiField162.value.length >= 1) {
    uiField162.classList.add('input-active');
  }else{   
    uiField162.classList.remove('input-active');
  }
})
uiField163.addEventListener('keyup', function () {
  if (uiField163.value.length >= 1) {
    uiField163.classList.add('input-active');
  }else{   
    uiField163.classList.remove('input-active');
  }
})
uiField164.addEventListener('keyup', function () {
  if (uiField164.value.length >= 1) {
    uiField164.classList.add('input-active');
  }else{   
    uiField164.classList.remove('input-active');
  }
})
uiField165.addEventListener('keyup', function () {
  if (uiField165.value.length >= 1) {
    uiField165.classList.add('input-active');
  }else{   
    uiField165.classList.remove('input-active');
  }
})

var uiField166 = document.getElementsByClassName('name28')[0];
var uiField167 = document.getElementsByClassName('surname28')[0];
var uiField168 = document.getElementsByClassName('nickname28')[0];
var uiField169 = document.getElementsByClassName('datum28')[0];
var uiField170 = document.getElementsByClassName('id28')[0];
var uiField171 = document.getElementsByClassName('build28')[0];
uiField166.addEventListener('keyup', function () {
  if (uiField166.value.length >= 1) {
    uiField166.classList.add('input-active');
  }else{   
    uiField166.classList.remove('input-active');
  }
})
uiField167.addEventListener('keyup', function () {
  if (uiField167.value.length >= 1) {
    uiField167.classList.add('input-active');
  }else{   
    uiField167.classList.remove('input-active');
  }
})
uiField168.addEventListener('keyup', function () {
  if (uiField168.value.length >= 1) {
    uiField168.classList.add('input-active');
  }else{   
    uiField168.classList.remove('input-active');
  }
})
uiField169.addEventListener('keyup', function () {
  if (uiField169.value.length >= 1) {
    uiField169.classList.add('input-active');
  }else{   
    uiField169.classList.remove('input-active');
  }
})
uiField170.addEventListener('keyup', function () {
  if (uiField170.value.length >= 1) {
    uiField170.classList.add('input-active');
  }else{   
    uiField170.classList.remove('input-active');
  }
})
uiField171.addEventListener('keyup', function () {
  if (uiField171.value.length >= 1) {
    uiField171.classList.add('input-active');
  }else{   
    uiField171.classList.remove('input-active');
  }
})


var uiField172 = document.getElementsByClassName('name29')[0];
var uiField173 = document.getElementsByClassName('surname29')[0];
var uiField174 = document.getElementsByClassName('nickname29')[0];
var uiField175 = document.getElementsByClassName('datum29')[0];
var uiField176 = document.getElementsByClassName('id29')[0];
var uiField177 = document.getElementsByClassName('build29')[0];
uiField172.addEventListener('keyup', function () {
  if (uiField172.value.length >= 1) {
    uiField172.classList.add('input-active');
  }else{   
    uiField172.classList.remove('input-active');
  }
})
uiField173.addEventListener('keyup', function () {
  if (uiField173.value.length >= 1) {
    uiField173.classList.add('input-active');
  }else{   
    uiField173.classList.remove('input-active');
  }
})
uiField174.addEventListener('keyup', function () {
  if (uiField174.value.length >= 1) {
    uiField174.classList.add('input-active');
  }else{   
    uiField174.classList.remove('input-active');
  }
})
uiField175.addEventListener('keyup', function () {
  if (uiField175.value.length >= 1) {
    uiField175.classList.add('input-active');
  }else{   
    uiField175.classList.remove('input-active');
  }
})
uiField176.addEventListener('keyup', function () {
  if (uiField176.value.length >= 1) {
    uiField176.classList.add('input-active');
  }else{   
    uiField176.classList.remove('input-active');
  }
})
uiField177.addEventListener('keyup', function () {
  if (uiField177.value.length >= 1) {
    uiField177.classList.add('input-active');
  }else{   
    uiField177.classList.remove('input-active');
  }
})
var uiField178 = document.getElementsByClassName('name30')[0];
var uiField179 = document.getElementsByClassName('surname30')[0];
var uiField180 = document.getElementsByClassName('nickname30')[0];
var uiField181 = document.getElementsByClassName('datum30')[0];
var uiField182 = document.getElementsByClassName('id30')[0];
var uiField183 = document.getElementsByClassName('build30')[0];
uiField178.addEventListener('keyup', function () {
  if (uiField178.value.length >= 1) {
    uiField178.classList.add('input-active');
  }else{   
    uiField178.classList.remove('input-active');
  }
})
uiField179.addEventListener('keyup', function () {
  if (uiField179.value.length >= 1) {
    uiField179.classList.add('input-active');
  }else{   
    uiField179.classList.remove('input-active');
  }
})
uiField180.addEventListener('keyup', function () {
  if (uiField180.value.length >= 1) {
    uiField180.classList.add('input-active');
  }else{   
    uiField180.classList.remove('input-active');
  }
})
uiField181.addEventListener('keyup', function () {
  if (uiField181.value.length >= 1) {
    uiField181.classList.add('input-active');
  }else{   
    uiField181.classList.remove('input-active');
  }
})
uiField182.addEventListener('keyup', function () {
  if (uiField182.value.length >= 1) {
    uiField182.classList.add('input-active');
  }else{   
    uiField182.classList.remove('input-active');
  }
})
uiField183.addEventListener('keyup', function () {
  if (uiField183.value.length >= 1) {
    uiField183.classList.add('input-active');
  }else{   
    uiField183.classList.remove('input-active');
  }
})
var uiField184 = document.getElementsByClassName('name31')[0];
var uiField185 = document.getElementsByClassName('surname31')[0];
var uiField186 = document.getElementsByClassName('nickname31')[0];
var uiField187 = document.getElementsByClassName('datum31')[0];
var uiField188 = document.getElementsByClassName('id31')[0];
var uiField189 = document.getElementsByClassName('build31')[0];
uiField184.addEventListener('keyup', function () {
  if (uiField184.value.length >= 1) {
    uiField184.classList.add('input-active');
  }else{   
    uiField184.classList.remove('input-active');
  }
})
uiField185.addEventListener('keyup', function () {
  if (uiField185.value.length >= 1) {
    uiField185.classList.add('input-active');
  }else{   
    uiField185.classList.remove('input-active');
  }
})
uiField186.addEventListener('keyup', function () {
  if (uiField186.value.length >= 1) {
    uiField186.classList.add('input-active');
  }else{   
    uiField186.classList.remove('input-active');
  }
})
uiField187.addEventListener('keyup', function () {
  if (uiField187.value.length >= 1) {
    uiField187.classList.add('input-active');
  }else{   
    uiField187.classList.remove('input-active');
  }
})
uiField188.addEventListener('keyup', function () {
  if (uiField188.value.length >= 1) {
    uiField188.classList.add('input-active');
  }else{   
    uiField188.classList.remove('input-active');
  }
})
uiField189.addEventListener('keyup', function () {
  if (uiField189.value.length >= 1) {
    uiField189.classList.add('input-active');
  }else{   
    uiField189.classList.remove('input-active');
  }
})
var uiField190 = document.getElementsByClassName('name32')[0];
var uiField191 = document.getElementsByClassName('surname32')[0];
var uiField192 = document.getElementsByClassName('nickname32')[0];
var uiField193 = document.getElementsByClassName('datum32')[0];
var uiField194 = document.getElementsByClassName('id32')[0];
var uiField195 = document.getElementsByClassName('build32')[0];
uiField190.addEventListener('keyup', function () {
  if (uiField190.value.length >= 1) {
    uiField190.classList.add('input-active');
  }else{   
    uiField190.classList.remove('input-active');
  }
})
uiField191.addEventListener('keyup', function () {
  if (uiField191.value.length >= 1) {
    uiField191.classList.add('input-active');
  }else{   
    uiField191.classList.remove('input-active');
  }
})
uiField192.addEventListener('keyup', function () {
  if (uiField192.value.length >= 1) {
    uiField192.classList.add('input-active');
  }else{   
    uiField192.classList.remove('input-active');
  }
})
uiField193.addEventListener('keyup', function () {
  if (uiField193.value.length >= 1) {
    uiField193.classList.add('input-active');
  }else{   
    uiField193.classList.remove('input-active');
  }
})
uiField194.addEventListener('keyup', function () {
  if (uiField194.value.length >= 1) {
    uiField194.classList.add('input-active');
  }else{   
    uiField194.classList.remove('input-active');
  }
})
uiField195.addEventListener('keyup', function () {
  if (uiField195.value.length >= 1) {
    uiField195.classList.add('input-active');
  }else{   
    uiField195.classList.remove('input-active');
  }
})
var uiField196 = document.getElementsByClassName('name33')[0];
var uiField197 = document.getElementsByClassName('surname33')[0];
var uiField198 = document.getElementsByClassName('nickname33')[0];
var uiField199 = document.getElementsByClassName('datum33')[0];
var uiField200 = document.getElementsByClassName('id33')[0];
var uiField201 = document.getElementsByClassName('build33')[0];
uiField196.addEventListener('keyup', function () {
  if (uiField196.value.length >= 1) {
    uiField196.classList.add('input-active');
  }else{   
    uiField196.classList.remove('input-active');
  }
})
uiField197.addEventListener('keyup', function () {
  if (uiField197.value.length >= 1) {
    uiField197.classList.add('input-active');
  }else{   
    uiField197.classList.remove('input-active');
  }
})
uiField198.addEventListener('keyup', function () {
  if (uiField198.value.length >= 1) {
    uiField198.classList.add('input-active');
  }else{   
    uiField198.classList.remove('input-active');
  }
})
uiField199.addEventListener('keyup', function () {
  if (uiField199.value.length >= 1) {
    uiField199.classList.add('input-active');
  }else{   
    uiField199.classList.remove('input-active');
  }
})
uiField200.addEventListener('keyup', function () {
  if (uiField200.value.length >= 1) {
    uiField200.classList.add('input-active');
  }else{   
    uiField200.classList.remove('input-active');
  }
})
uiField201.addEventListener('keyup', function () {
  if (uiField201.value.length >= 1) {
    uiField201.classList.add('input-active');
  }else{   
    uiField201.classList.remove('input-active');
  }
})
var uiField202 = document.getElementsByClassName('name34')[0];
var uiField203 = document.getElementsByClassName('surname34')[0];
var uiField204 = document.getElementsByClassName('nickname34')[0];
var uiField205 = document.getElementsByClassName('datum34')[0];
var uiField206 = document.getElementsByClassName('id34')[0];
var uiField207 = document.getElementsByClassName('build34')[0];
uiField202.addEventListener('keyup', function () {
  if (uiField202.value.length >= 1) {
    uiField202.classList.add('input-active');
  }else{   
    uiField202.classList.remove('input-active');
  }
})
uiField203.addEventListener('keyup', function () {
  if (uiField203.value.length >= 1) {
    uiField203.classList.add('input-active');
  }else{   
    uiField203.classList.remove('input-active');
  }
})
uiField204.addEventListener('keyup', function () {
  if (uiField204.value.length >= 1) {
    uiField204.classList.add('input-active');
  }else{   
    uiField204.classList.remove('input-active');
  }
})
uiField205.addEventListener('keyup', function () {
  if (uiField205.value.length >= 1) {
    uiField205.classList.add('input-active');
  }else{   
    uiField205.classList.remove('input-active');
  }
})
uiField206.addEventListener('keyup', function () {
  if (uiField206.value.length >= 1) {
    uiField206.classList.add('input-active');
  }else{   
    uiField206.classList.remove('input-active');
  }
})
uiField207.addEventListener('keyup', function () {
  if (uiField207.value.length >= 1) {
    uiField207.classList.add('input-active');
  }else{   
    uiField207.classList.remove('input-active');
  }
})
var uiField208 = document.getElementsByClassName('name35')[0];
var uiField209 = document.getElementsByClassName('surname35')[0];
var uiField210 = document.getElementsByClassName('nickname35')[0];
var uiField211 = document.getElementsByClassName('datum35')[0];
var uiField212 = document.getElementsByClassName('id35')[0];
var uiField213 = document.getElementsByClassName('build35')[0];
uiField208.addEventListener('keyup', function () {
  if (uiField208.value.length >= 1) {
    uiField208.classList.add('input-active');
  }else{   
    uiField208.classList.remove('input-active');
  }
})
uiField209.addEventListener('keyup', function () {
  if (uiField209.value.length >= 1) {
    uiField209.classList.add('input-active');
  }else{   
    uiField209.classList.remove('input-active');
  }
})
uiField210.addEventListener('keyup', function () {
  if (uiField210.value.length >= 1) {
    uiField210.classList.add('input-active');
  }else{   
    uiField210.classList.remove('input-active');
  }
})
uiField211.addEventListener('keyup', function () {
  if (uiField211.value.length >= 1) {
    uiField211.classList.add('input-active');
  }else{   
    uiField211.classList.remove('input-active');
  }
})
uiField212.addEventListener('keyup', function () {
  if (uiField212.value.length >= 1) {
    uiField212.classList.add('input-active');
  }else{   
    uiField212.classList.remove('input-active');
  }
})
uiField213.addEventListener('keyup', function () {
  if (uiField213.value.length >= 1) {
    uiField213.classList.add('input-active');
  }else{   
    uiField213.classList.remove('input-active');
  }
})
var uiField214 = document.getElementsByClassName('name36')[0];
var uiField215 = document.getElementsByClassName('surname36')[0];
var uiField216 = document.getElementsByClassName('nickname36')[0];
var uiField217 = document.getElementsByClassName('datum36')[0];
var uiField218 = document.getElementsByClassName('id36')[0];
var uiField219 = document.getElementsByClassName('build36')[0];
uiField214.addEventListener('keyup', function () {
  if (uiField214.value.length >= 1) {
    uiField214.classList.add('input-active');
  }else{   
    uiField214.classList.remove('input-active');
  }
})
uiField215.addEventListener('keyup', function () {
  if (uiField215.value.length >= 1) {
    uiField215.classList.add('input-active');
  }else{   
    uiField215.classList.remove('input-active');
  }
})
uiField216.addEventListener('keyup', function () {
  if (uiField216.value.length >= 1) {
    uiField216.classList.add('input-active');
  }else{   
    uiField216.classList.remove('input-active');
  }
})
uiField217.addEventListener('keyup', function () {
  if (uiField217.value.length >= 1) {
    uiField217.classList.add('input-active');
  }else{   
    uiField217.classList.remove('input-active');
  }
})
uiField218.addEventListener('keyup', function () {
  if (uiField218.value.length >= 1) {
    uiField218.classList.add('input-active');
  }else{   
    uiField218.classList.remove('input-active');
  }
})
uiField219.addEventListener('keyup', function () {
  if (uiField219.value.length >= 1) {
    uiField219.classList.add('input-active');
  }else{   
    uiField219.classList.remove('input-active');
  }
})
var uiField220 = document.getElementsByClassName('name37')[0];
var uiField221 = document.getElementsByClassName('surname37')[0];
var uiField222 = document.getElementsByClassName('nickname37')[0];
var uiField223 = document.getElementsByClassName('datum37')[0];
var uiField224 = document.getElementsByClassName('id37')[0];
var uiField225 = document.getElementsByClassName('build37')[0];
uiField220.addEventListener('keyup', function () {
  if (uiField220.value.length >= 1) {
    uiField220.classList.add('input-active');
  }else{   
    uiField220.classList.remove('input-active');
  }
})
uiField221.addEventListener('keyup', function () {
  if (uiField221.value.length >= 1) {
    uiField221.classList.add('input-active');
  }else{   
    uiField221.classList.remove('input-active');
  }
})
uiField222.addEventListener('keyup', function () {
  if (uiField222.value.length >= 1) {
    uiField222.classList.add('input-active');
  }else{   
    uiField222.classList.remove('input-active');
  }
})
uiField223.addEventListener('keyup', function () {
  if (uiField223.value.length >= 1) {
    uiField223.classList.add('input-active');
  }else{   
    uiField223.classList.remove('input-active');
  }
})
uiField224.addEventListener('keyup', function () {
  if (uiField224.value.length >= 1) {
    uiField224.classList.add('input-active');
  }else{   
    uiField224.classList.remove('input-active');
  }
})
uiField225.addEventListener('keyup', function () {
  if (uiField225.value.length >= 1) {
    uiField225.classList.add('input-active');
  }else{   
    uiField225.classList.remove('input-active');
  }
})
var uiField226 = document.getElementsByClassName('name38')[0];
var uiField227 = document.getElementsByClassName('surname38')[0];
var uiField228 = document.getElementsByClassName('nickname38')[0];
var uiField229 = document.getElementsByClassName('datum38')[0];
var uiField230 = document.getElementsByClassName('id38')[0];
var uiField231 = document.getElementsByClassName('build38')[0];
uiField226.addEventListener('keyup', function () {
  if (uiField226.value.length >= 1) {
    uiField226.classList.add('input-active');
  }else{   
    uiField226.classList.remove('input-active');
  }
})
uiField227.addEventListener('keyup', function () {
  if (uiField227.value.length >= 1) {
    uiField227.classList.add('input-active');
  }else{   
    uiField227.classList.remove('input-active');
  }
})
uiField228.addEventListener('keyup', function () {
  if (uiField228.value.length >= 1) {
    uiField228.classList.add('input-active');
  }else{   
    uiField228.classList.remove('input-active');
  }
})
uiField229.addEventListener('keyup', function () {
  if (uiField229.value.length >= 1) {
    uiField229.classList.add('input-active');
  }else{   
    uiField229.classList.remove('input-active');
  }
})
uiField230.addEventListener('keyup', function () {
  if (uiField230.value.length >= 1) {
    uiField230.classList.add('input-active');
  }else{   
    uiField230.classList.remove('input-active');
  }
})
uiField231.addEventListener('keyup', function () {
  if (uiField231.value.length >= 1) {
    uiField231.classList.add('input-active');
  }else{   
    uiField231.classList.remove('input-active');
  }
})
var uiField232 = document.getElementsByClassName('name39')[0];
var uiField233 = document.getElementsByClassName('surname39')[0];
var uiField234 = document.getElementsByClassName('nickname39')[0];
var uiField235 = document.getElementsByClassName('datum39')[0];
var uiField236 = document.getElementsByClassName('id39')[0];
var uiField237 = document.getElementsByClassName('build39')[0];
uiField232.addEventListener('keyup', function () {
  if (uiField232.value.length >= 1) {
    uiField232.classList.add('input-active');
  }else{   
    uiField232.classList.remove('input-active');
  }
})
uiField233.addEventListener('keyup', function () {
  if (uiField233.value.length >= 1) {
    uiField233.classList.add('input-active');
  }else{   
    uiField233.classList.remove('input-active');
  }
})
uiField234.addEventListener('keyup', function () {
  if (uiField234.value.length >= 1) {
    uiField234.classList.add('input-active');
  }else{   
    uiField234.classList.remove('input-active');
  }
})
uiField235.addEventListener('keyup', function () {
  if (uiField235.value.length >= 1) {
    uiField235.classList.add('input-active');
  }else{   
    uiField235.classList.remove('input-active');
  }
})
uiField236.addEventListener('keyup', function () {
  if (uiField236.value.length >= 1) {
    uiField236.classList.add('input-active');
  }else{   
    uiField236.classList.remove('input-active');
  }
})
uiField237.addEventListener('keyup', function () {
  if (uiField237.value.length >= 1) {
    uiField237.classList.add('input-active');
  }else{   
    uiField237.classList.remove('input-active');
  }
})
var uiField238 = document.getElementsByClassName('name40')[0];
var uiField239 = document.getElementsByClassName('surname40')[0];
var uiField240 = document.getElementsByClassName('nickname40')[0];
var uiField241 = document.getElementsByClassName('datum40')[0];
var uiField242 = document.getElementsByClassName('id40')[0];
var uiField243 = document.getElementsByClassName('build40')[0];
uiField238.addEventListener('keyup', function () {
  if (uiField238.value.length >= 1) {
    uiField238.classList.add('input-active');
  }else{   
    uiField238.classList.remove('input-active');
  }
})
uiField239.addEventListener('keyup', function () {
  if (uiField239.value.length >= 1) {
    uiField239.classList.add('input-active');
  }else{   
    uiField239.classList.remove('input-active');
  }
})
uiField240.addEventListener('keyup', function () {
  if (uiField240.value.length >= 1) {
    uiField240.classList.add('input-active');
  }else{   
    uiField240.classList.remove('input-active');
  }
})
uiField241.addEventListener('keyup', function () {
  if (uiField241.value.length >= 1) {
    uiField241.classList.add('input-active');
  }else{   
    uiField241.classList.remove('input-active');
  }
})
uiField242.addEventListener('keyup', function () {
  if (uiField242.value.length >= 1) {
    uiField242.classList.add('input-active');
  }else{   
    uiField242.classList.remove('input-active');
  }
})
uiField243.addEventListener('keyup', function () {
  if (uiField243.value.length >= 1) {
    uiField243.classList.add('input-active');
  }else{   
    uiField243.classList.remove('input-active');
  }
})
var uiField244 = document.getElementsByClassName('name41')[0];
var uiField245 = document.getElementsByClassName('surname41')[0];
var uiField246 = document.getElementsByClassName('nickname41')[0];
var uiField247 = document.getElementsByClassName('datum41')[0];
var uiField248 = document.getElementsByClassName('id41')[0];
var uiField249 = document.getElementsByClassName('build41')[0];
uiField244.addEventListener('keyup', function () {
  if (uiField244.value.length >= 1) {
    uiField244.classList.add('input-active');
  }else{   
    uiField244.classList.remove('input-active');
  }
})
uiField245.addEventListener('keyup', function () {
  if (uiField245.value.length >= 1) {
    uiField245.classList.add('input-active');
  }else{   
    uiField245.classList.remove('input-active');
  }
})
uiField246.addEventListener('keyup', function () {
  if (uiField246.value.length >= 1) {
    uiField246.classList.add('input-active');
  }else{   
    uiField246.classList.remove('input-active');
  }
})
uiField247.addEventListener('keyup', function () {
  if (uiField247.value.length >= 1) {
    uiField247.classList.add('input-active');
  }else{   
    uiField247.classList.remove('input-active');
  }
})
uiField248.addEventListener('keyup', function () {
  if (uiField248.value.length >= 1) {
    uiField248.classList.add('input-active');
  }else{   
    uiField248.classList.remove('input-active');
  }
})
uiField249.addEventListener('keyup', function () {
  if (uiField249.value.length >= 1) {
    uiField249.classList.add('input-active');
  }else{   
    uiField249.classList.remove('input-active');
  }
})
var uiField250 = document.getElementsByClassName('name42')[0];
var uiField251 = document.getElementsByClassName('surname42')[0];
var uiField252 = document.getElementsByClassName('nickname42')[0];
var uiField253 = document.getElementsByClassName('datum42')[0];
var uiField254 = document.getElementsByClassName('id42')[0];
var uiField255 = document.getElementsByClassName('build42')[0];
uiField250.addEventListener('keyup', function () {
  if (uiField250.value.length >= 1) {
    uiField250.classList.add('input-active');
  }else{   
    uiField250.classList.remove('input-active');
  }
})
uiField251.addEventListener('keyup', function () {
  if (uiField251.value.length >= 1) {
    uiField251.classList.add('input-active');
  }else{   
    uiField251.classList.remove('input-active');
  }
})
uiField252.addEventListener('keyup', function () {
  if (uiField252.value.length >= 1) {
    uiField252.classList.add('input-active');
  }else{   
    uiField252.classList.remove('input-active');
  }
})
uiField253.addEventListener('keyup', function () {
  if (uiField253.value.length >= 1) {
    uiField253.classList.add('input-active');
  }else{   
    uiField253.classList.remove('input-active');
  }
})
uiField254.addEventListener('keyup', function () {
  if (uiField254.value.length >= 1) {
    uiField254.classList.add('input-active');
  }else{   
    uiField254.classList.remove('input-active');
  }
})
uiField255.addEventListener('keyup', function () {
  if (uiField255.value.length >= 1) {
    uiField255.classList.add('input-active');
  }else{   
    uiField255.classList.remove('input-active');
  }
})
var uiField256 = document.getElementsByClassName('name43')[0];
var uiField257 = document.getElementsByClassName('surname43')[0];
var uiField258 = document.getElementsByClassName('nickname43')[0];
var uiField259 = document.getElementsByClassName('datum43')[0];
var uiField260 = document.getElementsByClassName('id43')[0];
var uiField261 = document.getElementsByClassName('build43')[0];
uiField256.addEventListener('keyup', function () {
  if (uiField256.value.length >= 1) {
    uiField256.classList.add('input-active');
  }else{   
    uiField256.classList.remove('input-active');
  }
})
uiField257.addEventListener('keyup', function () {
  if (uiField257.value.length >= 1) {
    uiField257.classList.add('input-active');
  }else{   
    uiField257.classList.remove('input-active');
  }
})
uiField258.addEventListener('keyup', function () {
  if (uiField258.value.length >= 1) {
    uiField258.classList.add('input-active');
  }else{   
    uiField258.classList.remove('input-active');
  }
})
uiField259.addEventListener('keyup', function () {
  if (uiField259.value.length >= 1) {
    uiField259.classList.add('input-active');
  }else{   
    uiField259.classList.remove('input-active');
  }
})
uiField260.addEventListener('keyup', function () {
  if (uiField260.value.length >= 1) {
    uiField260.classList.add('input-active');
  }else{   
    uiField260.classList.remove('input-active');
  }
})
uiField261.addEventListener('keyup', function () {
  if (uiField261.value.length >= 1) {
    uiField261.classList.add('input-active');
  }else{   
    uiField261.classList.remove('input-active');
  }
})
var uiField262 = document.getElementsByClassName('name44')[0];
var uiField263 = document.getElementsByClassName('surname44')[0];
var uiField264 = document.getElementsByClassName('nickname44')[0];
var uiField265 = document.getElementsByClassName('datum44')[0];
var uiField266 = document.getElementsByClassName('id44')[0];
var uiField267 = document.getElementsByClassName('build44')[0];
uiField262.addEventListener('keyup', function () {
  if (uiField262.value.length >= 1) {
    uiField262.classList.add('input-active');
  }else{   
    uiField262.classList.remove('input-active');
  }
})
uiField263.addEventListener('keyup', function () {
  if (uiField263.value.length >= 1) {
    uiField263.classList.add('input-active');
  }else{   
    uiField263.classList.remove('input-active');
  }
})
uiField264.addEventListener('keyup', function () {
  if (uiField264.value.length >= 1) {
    uiField264.classList.add('input-active');
  }else{   
    uiField264.classList.remove('input-active');
  }
})
uiField265.addEventListener('keyup', function () {
  if (uiField265.value.length >= 1) {
    uiField265.classList.add('input-active');
  }else{   
    uiField265.classList.remove('input-active');
  }
})
uiField266.addEventListener('keyup', function () {
  if (uiField266.value.length >= 1) {
    uiField266.classList.add('input-active');
  }else{   
    uiField266.classList.remove('input-active');
  }
})
uiField267.addEventListener('keyup', function () {
  if (uiField267.value.length >= 1) {
    uiField267.classList.add('input-active');
  }else{   
    uiField267.classList.remove('input-active');
  }
})
var uiField268 = document.getElementsByClassName('name45')[0];
var uiField269 = document.getElementsByClassName('surname45')[0];
var uiField270 = document.getElementsByClassName('nickname45')[0];
var uiField271 = document.getElementsByClassName('datum45')[0];
var uiField272 = document.getElementsByClassName('id45')[0];
var uiField273 = document.getElementsByClassName('build45')[0];
uiField268.addEventListener('keyup', function () {
  if (uiField268.value.length >= 1) {
    uiField268.classList.add('input-active');
  }else{   
    uiField268.classList.remove('input-active');
  }
})
uiField269.addEventListener('keyup', function () {
  if (uiField269.value.length >= 1) {
    uiField269.classList.add('input-active');
  }else{   
    uiField269.classList.remove('input-active');
  }
})
uiField270.addEventListener('keyup', function () {
  if (uiField270.value.length >= 1) {
    uiField270.classList.add('input-active');
  }else{   
    uiField270.classList.remove('input-active');
  }
})
uiField271.addEventListener('keyup', function () {
  if (uiField271.value.length >= 1) {
    uiField271.classList.add('input-active');
  }else{   
    uiField271.classList.remove('input-active');
  }
})
uiField272.addEventListener('keyup', function () {
  if (uiField272.value.length >= 1) {
    uiField272.classList.add('input-active');
  }else{   
    uiField272.classList.remove('input-active');
  }
})
uiField273.addEventListener('keyup', function () {
  if (uiField273.value.length >= 1) {
    uiField273.classList.add('input-active');
  }else{   
    uiField273.classList.remove('input-active');
  }
})
var uiField274 = document.getElementsByClassName('name46')[0];
var uiField275 = document.getElementsByClassName('surname46')[0];
var uiField276 = document.getElementsByClassName('nickname46')[0];
var uiField277 = document.getElementsByClassName('datum46')[0];
var uiField278 = document.getElementsByClassName('id46')[0];
var uiField279 = document.getElementsByClassName('build46')[0];
uiField274.addEventListener('keyup', function () {
  if (uiField274.value.length >= 1) {
    uiField274.classList.add('input-active');
  }else{   
    uiField274.classList.remove('input-active');
  }
})
uiField275.addEventListener('keyup', function () {
  if (uiField275.value.length >= 1) {
    uiField275.classList.add('input-active');
  }else{   
    uiField275.classList.remove('input-active');
  }
})
uiField276.addEventListener('keyup', function () {
  if (uiField276.value.length >= 1) {
    uiField276.classList.add('input-active');
  }else{   
    uiField276.classList.remove('input-active');
  }
})
uiField277.addEventListener('keyup', function () {
  if (uiField277.value.length >= 1) {
    uiField277.classList.add('input-active');
  }else{   
    uiField277.classList.remove('input-active');
  }
})
uiField278.addEventListener('keyup', function () {
  if (uiField278.value.length >= 1) {
    uiField278.classList.add('input-active');
  }else{   
    uiField278.classList.remove('input-active');
  }
})
uiField279.addEventListener('keyup', function () {
  if (uiField279.value.length >= 1) {
    uiField279.classList.add('input-active');
  }else{   
    uiField279.classList.remove('input-active');
  }
})
var uiField280 = document.getElementsByClassName('name47')[0];
var uiField281 = document.getElementsByClassName('surname47')[0];
var uiField282 = document.getElementsByClassName('nickname47')[0];
var uiField283 = document.getElementsByClassName('datum47')[0];
var uiField284 = document.getElementsByClassName('id47')[0];
var uiField285 = document.getElementsByClassName('build47')[0];
uiField280.addEventListener('keyup', function () {
  if (uiField280.value.length >= 1) {
    uiField280.classList.add('input-active');
  }else{   
    uiField280.classList.remove('input-active');
  }
})
uiField281.addEventListener('keyup', function () {
  if (uiField281.value.length >= 1) {
    uiField281.classList.add('input-active');
  }else{   
    uiField281.classList.remove('input-active');
  }
})
uiField282.addEventListener('keyup', function () {
  if (uiField282.value.length >= 1) {
    uiField282.classList.add('input-active');
  }else{   
    uiField282.classList.remove('input-active');
  }
})
uiField283.addEventListener('keyup', function () {
  if (uiField283.value.length >= 1) {
    uiField283.classList.add('input-active');
  }else{   
    uiField283.classList.remove('input-active');
  }
})
uiField284.addEventListener('keyup', function () {
  if (uiField284.value.length >= 1) {
    uiField284.classList.add('input-active');
  }else{   
    uiField284.classList.remove('input-active');
  }
})
uiField285.addEventListener('keyup', function () {
  if (uiField285.value.length >= 1) {
    uiField285.classList.add('input-active');
  }else{   
    uiField285.classList.remove('input-active');
  }
})
var uiField286 = document.getElementsByClassName('name48')[0];
var uiField287 = document.getElementsByClassName('surname48')[0];
var uiField288 = document.getElementsByClassName('nickname48')[0];
var uiField289 = document.getElementsByClassName('datum48')[0];
var uiField290 = document.getElementsByClassName('id48')[0];
var uiField291 = document.getElementsByClassName('build48')[0];
uiField286.addEventListener('keyup', function () {
  if (uiField286.value.length >= 1) {
    uiField286.classList.add('input-active');
  }else{   
    uiField286.classList.remove('input-active');
  }
})
uiField287.addEventListener('keyup', function () {
  if (uiField287.value.length >= 1) {
    uiField287.classList.add('input-active');
  }else{   
    uiField287.classList.remove('input-active');
  }
})
uiField288.addEventListener('keyup', function () {
  if (uiField288.value.length >= 1) {
    uiField288.classList.add('input-active');
  }else{   
    uiField288.classList.remove('input-active');
  }
})
uiField289.addEventListener('keyup', function () {
  if (uiField289.value.length >= 1) {
    uiField289.classList.add('input-active');
  }else{   
    uiField289.classList.remove('input-active');
  }
})
uiField290.addEventListener('keyup', function () {
  if (uiField290.value.length >= 1) {
    uiField290.classList.add('input-active');
  }else{   
    uiField290.classList.remove('input-active');
  }
})
uiField291.addEventListener('keyup', function () {
  if (uiField291.value.length >= 1) {
    uiField291.classList.add('input-active');
  }else{   
    uiField291.classList.remove('input-active');
  }
})
var uiField292 = document.getElementsByClassName('name49')[0];
var uiField293 = document.getElementsByClassName('surname49')[0];
var uiField294 = document.getElementsByClassName('nickname49')[0];
var uiField295 = document.getElementsByClassName('datum49')[0];
var uiField296 = document.getElementsByClassName('id49')[0];
var uiField297 = document.getElementsByClassName('build49')[0];
uiField292.addEventListener('keyup', function () {
  if (uiField292.value.length >= 1) {
    uiField292.classList.add('input-active');
  }else{   
    uiField292.classList.remove('input-active');
  }
})
uiField293.addEventListener('keyup', function () {
  if (uiField293.value.length >= 1) {
    uiField293.classList.add('input-active');
  }else{   
    uiField293.classList.remove('input-active');
  }
})
uiField294.addEventListener('keyup', function () {
  if (uiField294.value.length >= 1) {
    uiField294.classList.add('input-active');
  }else{   
    uiField294.classList.remove('input-active');
  }
})
uiField295.addEventListener('keyup', function () {
  if (uiField295.value.length >= 1) {
    uiField295.classList.add('input-active');
  }else{   
    uiField295.classList.remove('input-active');
  }
})
uiField296.addEventListener('keyup', function () {
  if (uiField296.value.length >= 1) {
    uiField296.classList.add('input-active');
  }else{   
    uiField296.classList.remove('input-active');
  }
})
uiField297.addEventListener('keyup', function () {
  if (uiField297.value.length >= 1) {
    uiField297.classList.add('input-active');
  }else{   
    uiField297.classList.remove('input-active');
  }
})
var uiField298 = document.getElementsByClassName('name50')[0];
var uiField299 = document.getElementsByClassName('surname50')[0];
var uiField300 = document.getElementsByClassName('nickname50')[0];
var uiField301 = document.getElementsByClassName('datum50')[0];
var uiField302 = document.getElementsByClassName('id50')[0];
var uiField303 = document.getElementsByClassName('build50')[0];
uiField298.addEventListener('keyup', function () {
  if (uiField298.value.length >= 1) {
    uiField298.classList.add('input-active');
  }else{   
    uiField298.classList.remove('input-active');
  }
})
uiField299.addEventListener('keyup', function () {
  if (uiField299.value.length >= 1) {
    uiField299.classList.add('input-active');
  }else{   
    uiField299.classList.remove('input-active');
  }
})
uiField300.addEventListener('keyup', function () {
  if (uiField300.value.length >= 1) {
    uiField300.classList.add('input-active');
  }else{   
    uiField300.classList.remove('input-active');
  }
})
uiField301.addEventListener('keyup', function () {
  if (uiField301.value.length >= 1) {
    uiField301.classList.add('input-active');
  }else{   
    uiField301.classList.remove('input-active');
  }
})
uiField302.addEventListener('keyup', function () {
  if (uiField302.value.length >= 1) {
    uiField302.classList.add('input-active');
  }else{   
    uiField302.classList.remove('input-active');
  }
})
uiField303.addEventListener('keyup', function () {
  if (uiField303.value.length >= 1) {
    uiField303.classList.add('input-active');
  }else{   
    uiField303.classList.remove('input-active');
  }
})
var uiField304 = document.getElementsByClassName('name51')[0];
var uiField305 = document.getElementsByClassName('surname51')[0];
var uiField306 = document.getElementsByClassName('nickname51')[0];
var uiField307 = document.getElementsByClassName('datum51')[0];
var uiField308 = document.getElementsByClassName('id51')[0];
var uiField309 = document.getElementsByClassName('build51')[0];
uiField304.addEventListener('keyup', function () {
  if (uiField304.value.length >= 1) {
    uiField304.classList.add('input-active');
  }else{   
    uiField304.classList.remove('input-active');
  }
})
uiField305.addEventListener('keyup', function () {
  if (uiField305.value.length >= 1) {
    uiField305.classList.add('input-active');
  }else{   
    uiField305.classList.remove('input-active');
  }
})
uiField306.addEventListener('keyup', function () {
  if (uiField306.value.length >= 1) {
    uiField306.classList.add('input-active');
  }else{   
    uiField306.classList.remove('input-active');
  }
})
uiField307.addEventListener('keyup', function () {
  if (uiField307.value.length >= 1) {
    uiField307.classList.add('input-active');
  }else{   
    uiField307.classList.remove('input-active');
  }
})
uiField308.addEventListener('keyup', function () {
  if (uiField308.value.length >= 1) {
    uiField308.classList.add('input-active');
  }else{   
    uiField308.classList.remove('input-active');
  }
})
uiField309.addEventListener('keyup', function () {
  if (uiField309.value.length >= 1) {
    uiField309.classList.add('input-active');
  }else{   
    uiField309.classList.remove('input-active');
  }
})
var uiField310 = document.getElementsByClassName('name52')[0];
var uiField311 = document.getElementsByClassName('surname52')[0];
var uiField312 = document.getElementsByClassName('nickname52')[0];
var uiField313 = document.getElementsByClassName('datum52')[0];
var uiField314 = document.getElementsByClassName('id52')[0];
var uiField315 = document.getElementsByClassName('build52')[0];
uiField310.addEventListener('keyup', function () {
  if (uiField310.value.length >= 1) {
    uiField310.classList.add('input-active');
  }else{   
    uiField310.classList.remove('input-active');
  }
})
uiField311.addEventListener('keyup', function () {
  if (uiField311.value.length >= 1) {
    uiField311.classList.add('input-active');
  }else{   
    uiField311.classList.remove('input-active');
  }
})
uiField312.addEventListener('keyup', function () {
  if (uiField312.value.length >= 1) {
    uiField312.classList.add('input-active');
  }else{   
    uiField312.classList.remove('input-active');
  }
})
uiField313.addEventListener('keyup', function () {
  if (uiField313.value.length >= 1) {
    uiField313.classList.add('input-active');
  }else{   
    uiField313.classList.remove('input-active');
  }
})
uiField314.addEventListener('keyup', function () {
  if (uiField314.value.length >= 1) {
    uiField314.classList.add('input-active');
  }else{   
    uiField314.classList.remove('input-active');
  }
})
uiField315.addEventListener('keyup', function () {
  if (uiField315.value.length >= 1) {
    uiField315.classList.add('input-active');
  }else{   
    uiField315.classList.remove('input-active');
  }
})
var uiField316 = document.getElementsByClassName('name53')[0];
var uiField317 = document.getElementsByClassName('surname53')[0];
var uiField318 = document.getElementsByClassName('nickname53')[0];
var uiField319 = document.getElementsByClassName('datum53')[0];
var uiField320 = document.getElementsByClassName('id53')[0];
var uiField321 = document.getElementsByClassName('build53')[0];
uiField316.addEventListener('keyup', function () {
  if (uiField316.value.length >= 1) {
    uiField316.classList.add('input-active');
  }else{   
    uiField316.classList.remove('input-active');
  }
})
uiField317.addEventListener('keyup', function () {
  if (uiField317.value.length >= 1) {
    uiField317.classList.add('input-active');
  }else{   
    uiField317.classList.remove('input-active');
  }
})
uiField318.addEventListener('keyup', function () {
  if (uiField318.value.length >= 1) {
    uiField318.classList.add('input-active');
  }else{   
    uiField318.classList.remove('input-active');
  }
})
uiField319.addEventListener('keyup', function () {
  if (uiField319.value.length >= 1) {
    uiField319.classList.add('input-active');
  }else{   
    uiField319.classList.remove('input-active');
  }
})
uiField320.addEventListener('keyup', function () {
  if (uiField320.value.length >= 1) {
    uiField320.classList.add('input-active');
  }else{   
    uiField320.classList.remove('input-active');
  }
})
uiField321.addEventListener('keyup', function () {
  if (uiField321.value.length >= 1) {
    uiField321.classList.add('input-active');
  }else{   
    uiField321.classList.remove('input-active');
  }
})
var uiField322 = document.getElementsByClassName('name54')[0];
var uiField323 = document.getElementsByClassName('surname54')[0];
var uiField324 = document.getElementsByClassName('nickname54')[0];
var uiField325 = document.getElementsByClassName('datum54')[0];
var uiField326 = document.getElementsByClassName('id54')[0];
var uiField327 = document.getElementsByClassName('build54')[0];
uiField322.addEventListener('keyup', function () {
  if (uiField322.value.length >= 1) {
    uiField322.classList.add('input-active');
  }else{   
    uiField322.classList.remove('input-active');
  }
})
uiField323.addEventListener('keyup', function () {
  if (uiField323.value.length >= 1) {
    uiField323.classList.add('input-active');
  }else{   
    uiField323.classList.remove('input-active');
  }
})
uiField324.addEventListener('keyup', function () {
  if (uiField324.value.length >= 1) {
    uiField324.classList.add('input-active');
  }else{   
    uiField324.classList.remove('input-active');
  }
})
uiField325.addEventListener('keyup', function () {
  if (uiField325.value.length >= 1) {
    uiField325.classList.add('input-active');
  }else{   
    uiField325.classList.remove('input-active');
  }
})
uiField326.addEventListener('keyup', function () {
  if (uiField326.value.length >= 1) {
    uiField326.classList.add('input-active');
  }else{   
    uiField326.classList.remove('input-active');
  }
})
uiField327.addEventListener('keyup', function () {
  if (uiField327.value.length >= 1) {
    uiField327.classList.add('input-active');
  }else{   
    uiField327.classList.remove('input-active');
  }
})







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