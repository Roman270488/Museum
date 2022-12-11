function initComparisons() {

   /* находит все элементы с классом "explore__slider-img-overplay": */
   let x = document.getElementsByClassName("explore__slider-img-overplay");
   for (let i in x) {
     compareImages(x[i]);
   }
   
   function compareImages(img) {
     var slider, img, clicked = 0, w, h;

     /* получим ширину и высоту элемента img */
     w = img.offsetWidth;
     h = img.offsetHeight;

     /* установим ширину элемента img на 50%: */
     img.style.width = (w / 2) + "px";

     /* сделаем слайдер */
     slider = document.createElement("DIV");
     slider.setAttribute("class", "explore__slider");

     /* вставим слайдер */
     img.parentElement.insertBefore(slider, img);

     /* разместим ползунок горизонтально, посередине: */
     slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

     /* событие мыши, когда кнопка нажата */
     slider.addEventListener("mousedown", slideReady);

     /* событие мыши, когда кнопка отжата */
     window.addEventListener("mouseup", slideFinish);

     /* событие косание */
     slider.addEventListener("touchstart", slideReady);

      /* событие отжатие */
     window.addEventListener("touchstop", slideFinish);

     /* активный ползунок */
     function slideReady(e) {

       /* предотвратить любые другие действия, которые могут произойти при перемещении по изображению: */
       e.preventDefault();

       /* ползунок нажат и готов к перемещению */
       clicked = 1;

       /* выполняет функцию при перемещении ползунка: */
       window.addEventListener("mousemove", slideMove);
       window.addEventListener("touchmove", slideMove);
     }

     /* ползунок не активен */
     function slideFinish() {
       clicked = 0;
     }

     function slideMove(e) {

       /* если ползунок больше не нажимается, выходит из этой функции: */
       if (clicked == 0) {
         return false;
       }
       /* позиция х */
       let pos = getCursorPos(e)

       /* не позволяет слайдеру уходить за пределы блока */
       if (pos < 0) pos = 0;
       if (pos > w) pos = w;

       /* вызывает функцию, которая изменит размер наложенного изображения в соответствии с курсором: */
       slide(pos);
     }

     function getCursorPos(e) {

       e = e || window.event;

       /* получить позицию х изображения */
       let a = img.getBoundingClientRect();

       /* вычислить х координату курсора относительно изображения */
       let x = e.pageX - a.left;

       /* укажем любую прокрутку страницы */
       x = x - window.pageXOffset;
       return x;
     }

     function slide(x) {
       /* изменим размер изображения */
       img.style.width = x + "px";

       /* позиция ползунка */
       slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
     }

   }
}
initComparisons();