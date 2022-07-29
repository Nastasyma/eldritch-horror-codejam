// ------- slider -------

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

// рандомное число от 1 до 20
function getRandomNum(){
  return (Math.floor(Math.random() * 20) + 1);
}

let slideNumber = getRandomNum();

// рандомный background в зависимости от времени суток
function setBg() {
  const img = new Image();
  let bgNum  = String(slideNumber).padStart(2,'0');
    img.src = `https://raw.githubusercontent.com/Nastasyma/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
  }
}
setBg();

// стрелка вправо листает background по порядку
function getSlideNext(){
  if (slideNumber < 20) {
    slideNumber = slideNumber + 1;
  } else if (slideNumber === 20) {
    slideNumber = 1;
  }
  setBg();
};
// стрелка влево листает background по порядку
function getSlidePrev(){
  if (slideNumber > 1) {
    slideNumber = slideNumber - 1;
  } else if (slideNumber === 1) {
    slideNumber = 20;
  }
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);