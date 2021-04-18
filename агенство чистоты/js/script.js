window.addEventListener('DOMContentLoaded', function(){

    'use strict'; 


//Слайдер 

$('.header__slider:first').addClass('is-current');
$('.dot:first').addClass('dot-active');
setInterval(function(){
let $next = $('.header__slider.is-current')
    .removeClass('is-current')
    .removeClass('kenburns-top')
    .next('.header__slider');

$next.length ? $next.addClass('is-current') : $('.header__slider:first').addClass('is-current');
$next.length ? $next.addClass('kenburns-top') : $('.header__slider:first').addClass('kenburns-top');

let $nextDot = $('.dot.dot-active')
    .removeClass('dot-active')
    .next('.dot');

$nextDot.length ? $nextDot.addClass('dot-active') : $('.dot:first').addClass('dot-active');


}, 5000);

//Табы 
let tab = document.querySelectorAll('.advantages__tab'), 
        tabContent = document.querySelectorAll('.advantages__tabcontent'),
        info = document.querySelector('.advantages__descr'); 

        function hideTabContent(a){

            for(let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
    
        }
        hideTabContent(1);

        function showTabContent(b){
            if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        info.addEventListener('click', function(event){
            let target = event.target;
            if(target && target.classList.contains('advantages__tab')){
    
                for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;   
                    }
                }
                for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    tab[i].classList.add('active');
                }
                else {
                    tab[i].classList.remove('active') ; 
                }
            }
        }
    
        });

//Аккордион 
$('.price__item_plus').click(function(event) {
    $(this).next().toggle(300);
    $(this).children().last().toggleClass('plus-active');
});

//Скрипт для любого якоря при нажатии на ссылку будет плавная прокрутка к id="header" 

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });



     
});