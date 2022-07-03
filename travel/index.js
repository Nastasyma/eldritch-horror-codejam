// Burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector('.close_menu');
const menuCloseMenu1 = document.querySelector('.menu1');
const menuCloseMenu2 = document.querySelector('.menu2');
const menuCloseMenu3 = document.querySelector('.menu3');
const menuCloseMenu4 = document.querySelector('.menu4');
const menuCloseAccount = document.querySelector('.account');
const menuCloseMedia = document.querySelector('.social_media');

(function () {
    burger.addEventListener('click', () => {
        menu.classList.add('open_menu');
    })
    menuClose.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseMenu1.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseMenu2.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseMenu3.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseMenu4.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseAccount.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
    menuCloseMedia.addEventListener('click', () => {
        menu.classList.remove('open_menu');
    })
}());

document.addEventListener('click', function(e){
    if(menu !== e.target){
        menu.classList.remove('open_menu');
    }}, true);


/*console.log(`1. Вёрстка валидная +10; 
\n2. Вёрстка семантическая +20: 
- <header>, <main>, <footer> +3;
- четыре элемента <section> (по количеству секций) +3;
- только один заголовок <h1> +3;
- три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3;
- один элемент <nav> (панель навигации) +3;
- два списка ul > li > a (панель навигации, ссылки на соцсети) +3;
- четыре кнопки <button> +2;
\n3. Вёрстка соответствует макету +48:
- блок <header> +6;
- секция preview +9;
- секция steps +9;
- секция destinations +9;
- секция stories +9;
- блок <footer> +6;
\n4. Требования к css + 12:
- для построения сетки используются флексы или гриды +2;
- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2;
- фоновый цвет тянется на всю ширину страницы +2;
- иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2;
- изображения добавлены в формате .jpg +2;
- есть favicon +2;
 \n5. Интерактивность, реализуемая через css +20:
- плавная прокрутка по якорям +5;
- иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается доабвление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5;
- интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта +5;
- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5;
\nИтог: 100
`);*/