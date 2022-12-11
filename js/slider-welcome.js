/* цифры */
let totalAmountImages = document.querySelector('.welcome__num-common');
let currentImageNumber = document.querySelector('.welcome__num-action');

/* буллеты */
let bullets = document.querySelectorAll('.welcome__radio');

/* стрелки */
let comButton = document.querySelectorAll('.welcome__arrows');
let leftButton = document.querySelector('.welcome__arr-left');
let rightButton = document.querySelector('.welcome__arr-right');

/* контейнеры */
let wrapOuter = document.querySelector('.welcome__wrapper');
let wrapInner = document.querySelector('.welcome__block-img');
let imagesSlider = document.querySelectorAll('.welcome__image');


/* *************************** arrow *********************************** */

/* ширина главного контейнера */
let sizeBox = wrapOuter.clientWidth;

let index = 1;

/* перемещаем слайдер на ширину одного изображения в лево, что-бы слайдер начинался с нашего первого изображения */
function positionStart (){
   let size = sizeBox;
   wrapInner.style.transform += 'translateX(' + (-index * size) + 'px)';
}
positionStart();

/* перелистывание в право */
function moveRight () {
   wrapInner.style.transition = 'all 0.5s ease-in-out';
   let size = sizeBox;
   if(index <= 0) return false;
   else index--;
   wrapInner.style.transform = 'translateX(' + (-index * size) + 'px)';
   looping();
   
}

/* перелистывание в лево */
function moveLeft () {
   wrapInner.style.transition = 'all 0.5s ease-in-out';
   let max = imagesSlider.length;
   let size = sizeBox;
   if(index >= max - 1) return false;
   else index++;
   wrapInner.style.transform = 'translateX(' + (-index * size) + 'px)';
   looping();
}

/* при клике на левую кнопка */
leftButton.onclick = moveRight;

/* при клике на правую кнопка */
rightButton.onclick = moveLeft;

/* зацикливает слайдер */
function looping () {
   let size = sizeBox;
   wrapInner.addEventListener('transitionend', function () {
      if(imagesSlider[index].id === 'firstClone') index = 1;
      else if(imagesSlider[index].id === 'lastClone') index = imagesSlider.length - 2;
      else index;
      wrapInner.style.transition = 'none';
      wrapInner.style.transform = 'translateX(' + (-index * size) + 'px)';
   });
}


/* ****************************** swipe ****************************** */

wrapOuter.addEventListener('touchstart', handleTouchStart, false);
wrapOuter.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

/* при касании */
function handleTouchStart (e) {
   const firstTouch = e.touches[0];
   x1 = firstTouch.clientX;
   console.log(x1);
}

/* при движении */
function handleTouchMove (e) {
   if(!x1) return false;
   let x2 = event.touches[0].clientX;
   console.log(x2);
   let xDiff = x2 - x1;

   if(xDiff > 0) moveRight();
   else moveLeft();
   x1 = null;
}


/* ******************************* цифры ******************************* */