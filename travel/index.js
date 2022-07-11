// Burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector('.close_menu');
const navList = document.querySelector('.nav-list');
const bodyOpacity = document.querySelector('.body_opacity');

(function () {
    burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacity.classList.add('body_opacity_active');
    })
  /*burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacity.style.display = bodyOpacity.style.display === 'none' ? 'block' : 'none';
      setTimeout(function () {
          bodyOpacity.classList.add('body_opacity_active');
        }, 50);   
    })*/
    menuClose.addEventListener('click', () => { 
      menu.classList.remove('open_menu');
      bodyOpacity.classList.remove('body_opacity_active');
    })
    navList.addEventListener('click', () => {
      menu.classList.remove('open_menu');
      bodyOpacity.classList.remove('body_opacity_active');
    })
}());

document.addEventListener('click', function(e){
    if(menu !== e.target){
        menu.classList.remove('open_menu');
        bodyOpacity.classList.remove('body_opacity_active');
    }}, true);


console.log(`Travel#2.
\n1.Вёрстка соответствует макету. Ширина экрана 390px +48
-блок <header> +6
-секция preview +9
-секция steps +9
-секция destinations +9
-секция stories +9
-блок <footer> +6
\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
-нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
-нет полосы прокрутки при ширине страницы от 390px до 320рх +8
\n3.На ширине экрана 390рх и меньше реализовано адаптивное меню +22
-при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
-при нажатии на бургер-иконку плавно появляется адаптивное меню +4
-адаптивное меню соответствует макету +4
-при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
-ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
-при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
\nИтог: 85
`);