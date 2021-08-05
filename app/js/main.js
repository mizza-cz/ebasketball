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