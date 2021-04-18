window.addEventListener('DOMContentLoaded', function()  {
    
  'use strict'

$('.main_title_bg:first').addClass('is-current');
setInterval(function(){
  var $next = $('.main_title_bg.is-current')
  	.removeClass('is-current')
  	.next('.main_title_bg');
  
  $next.length ? $next.addClass('is-current') : $('.main_title_bg:first').addClass('is-current');
}, 5000); 



  //Выпадающее меню 
  $('.dropdown_catalog').hover(function() {
    $('.menu_catalog').show();
    $('.menu_catalog').offset({top:100}); 
  },
  function() {
    $('.menu_catalog').offset({top:200}); 
    $('.menu_catalog').hide();
  });

  $('.dropdown_about').hover(function() {
    $('.menu_about').show();
    $('.menu_about').offset({top:100}); 
  },
  function() {
    $('.menu_about').offset({top:200}); 
    $('.menu_about').hide();
  });

  $('.header__search').hover(function(){
   $('.header__form').show();
   $('.header__form').offset({top:80});
   
  },
  function() {
    $('.header__form').offset({top:200}); 
    $('.header__form').hide();
    
  });

  //Корзина при клике на нее 
  $('.header__cart_content').click(function(){
    $('.header__cart_box').show();
    $('.header__cart_box').offset({top:100});
  
  });
  //Закрытие корзины
  $('.header__cart_close').click(function(){
    $('.header__cart_box').hide();
    $('.header__cart_box').offset({top:200});
  });

  //Вызов модального окна 
  $('.header__enter').click(function() {
    $('.overlay, #modal').show();
  });
  //Вызов модального окна event
  let btn = $('.main__btn'),
      basket = $('.main__basket'),
      btn_in = $('.main__btn_in');

      btn.click(function(){
        $('.overlay, #modal__basket').show();
       
      })

     
      basket.click(function(event){
       
        let target = event.target; 
     
        for(let i = 0; i < btn.length; i++) {
        if(target == btn[i]){
        
          btn[i].classList.add('hide');

        }   
       } 
       
     });

     

   //Закрытие модального окна 
  $('.modal__close').click(function() {
    $('.overlay, #modal').hide();
  });
  $('.modal__close_basket').click(function(){
    $('.overlay, #modal__basket').hide();
  })
  
 
   
  
  //Слайдер 
  $(document).ready(function(){
    
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

   });

  
   







});