

/* ************************** блоки ************************** */

/* блок в котором находится видео */
let blockVideo = document.querySelector('.video__wrap-iframe');
/* само видео */
let video = document.querySelector('#video__player');


/* ***************************** кнопки ***************************** */

/* кнопка запуска по центру */
let buttonPlayCenter = document.querySelector('.video__button-play-main'); 
/* кнопка запуска в панеле */
let buttonPlayPanel = document.querySelector('.video__play');
/* кнопка стоп в панеле */
let buttonPousePanel = document.querySelector('.video__stop');
/* кнопка звука */
let volumeButton = document.querySelector('.video__volume-button');
/* кнопка отсутствия звука */
let notVolumeButton = document.querySelector('.video__not-volume-button');
/* кнопка во весь экран */
let fullscreen = document.querySelector('.video__fullscreen-button');
/* ползунок звука */
let volumeSlider = document.querySelector('#volume-indicator');
/* ползунок видео */
let progress;
progress = document.querySelector('#progress-bar');


/* запускает видео */
function play(){
   video.play();
}
/* останавливает видео */
function pause(){
   video.pause();
}
video.ontimeupdate = progressUpdate;


/* при клике по самому видео */
blockVideo.addEventListener('click', function(){
   if(video.paused){
      play();
      buttonPlayCenter.style.display = 'none';
      buttonPlayPanel.style.display = 'none';
      buttonPousePanel.style.display = 'block';
   }else{
      pause();
      buttonPlayCenter.style.display = 'block';
      buttonPlayPanel.style.display = 'block';
      buttonPousePanel.style.display = 'none';
   }
})
/* при клике по центральной кнопке */
buttonPlayCenter.addEventListener('click', function(){
   play();
   buttonPlayCenter.style.display = 'none';
   buttonPlayPanel.style.display = 'none';
   buttonPousePanel.style.display = 'block';
})
/* при клике по кнопке запуска в панеле */
buttonPlayPanel.addEventListener('click', function(){
   play();
   buttonPlayPanel.style.display = 'none';
   buttonPousePanel.style.display = 'block';
   buttonPlayCenter.style.display = 'none';
})
/* при клике по кнопке паузы в панеле */
buttonPousePanel.addEventListener('click', function(){
   pause();
   buttonPlayCenter.style.display = 'block';
   buttonPlayPanel.style.display = 'block';
   buttonPousePanel.style.display = 'none';
})
/* при нажатии на кнопку звука */
volumeButton.addEventListener('click', function(){
   video.volume = 0;
   this.style.display = 'none';
   notVolumeButton.style.display = 'block';
})
/* при нажатии на кнопку отсутствия звука */
notVolumeButton.addEventListener('click', function(){
   let v = volumeSlider.value;
   video.volume = v / 100;
   this.style.display = 'none';
   volumeButton.style.display = 'block';
})
/* при нажатии на кнопку fullscreen */
fullscreen.addEventListener('click', function(){
   video.requestFullscreen();
})
/* регулировка звука */
volumeSlider.addEventListener('input', function(){
   let v = this.value;
   video.volume = v / 100;
   if(video.volume == 0){
      notVolumeButton.style.display = 'block'; 
      volumeButton.style.display = 'none';
   }else{
      notVolumeButton.style.display = 'none'; 
      volumeButton.style.display = 'block';
   }
})
/* отслеживание видео */
function progressUpdate () {
   // console.log(video.duration);
   // console.log(video.currentTime);
   let d = video.duration;
   let c = video.currentTime;
   progress.value = 100 * c / d;
   if(video.currentTime == 47.067) {
      buttonPlayCenter.style.display = 'block';
      buttonPlayPanel.style.display = 'block';
      buttonPousePanel.style.display = 'none';
   }
}
/* регулировка видео */
progress.addEventListener('click', function(){
   let w = this.offsetWidth;
   let o = event.offsetX;
   console.log(w);
   console.log(o);
   this.value = 100 * o / w;
   video.pause();
   video.currentTime = video.duration * o / w;
   play();
})


/* ***************************** события клавишь ***************************** */
document.onkeydown = function(event) {
   console.log(event);
}

/* Shift ', - Comma' '. - Period' */

/* при нажатии на пробел */
function  space() {
   if(video.paused){
      play();
      buttonPlayCenter.style.display = 'none';
      buttonPlayPanel.style.display = 'none';
      buttonPousePanel.style.display = 'block';
   }else{
      pause(); 
      buttonPlayCenter.style.display = 'block';
      buttonPlayPanel.style.display = 'block';
      buttonPousePanel.style.display = 'none'; 
   }
}
/* при нажатии на M(англ) */
function  keyM() {
   if(volumeButton.style.display == 'block'){
      volumeButton.style.display = 'none';
      notVolumeButton.style.display = 'block';
      video.volume = 0;
   }
   else{
      let v = volumeSlider.value;
      video.volume = v / 100;
      notVolumeButton.style.display = 'none';
      volumeButton.style.display = 'block';
   }
}
/* при нажатии на F */
function  keyF() {
   if(!video.requestFullscreen()){
      video.requestFullscreen();
   }
   else{
      document.exitFullscreen();
   }
}

let flag = false;

/* нажатия клавишь */
document.onkeydown = function(event) {
   if(event.code == 'Space') space();
   if(event.code == 'KeyM') keyM();
   if(event.code == 'KeyF') keyF();
   if(event.code == 'KeyF') keyF();
   if(event.code == 'KeyF') keyF();
   if(event.code == 'KeyF') keyF();
   /* увеличение скорости */
   if (event.key == 'Shift') flag = true;   
   if (event.code == 'Comma' && flag) {
      play();
      video.playbackRate = 1.5;
   }
   /* уменьшение скорости */
   if (event.key == 'Shift') flag = true;   
   if (event.code == 'Period' && flag) {
      play();
      video.playbackRate = 0.5;
   }

}





/* ***************************** пзиция ползунков ***************************** */
let slider = document.querySelector('.video__my-style');
let output = document.getElementById('progress-bar');
let slider2 = document.querySelector('.video__my-style2');
let output2 = document.getElementById('volume-indicator');

output.innerHTML = slider.value;
output2.innerHTML = slider2.value;

slider.oninput = function() {
   output.innerHTML = this.value;
}

slider.addEventListener('mousemove', function() {
   let x = slider.value;
   let color = 'linear-gradient(90deg, rgb(113, 7, 7)' + x + '%, rgb(196, 196, 196)' + x + '%)';
   slider.style.background = color;
})
slider2.addEventListener('mousemove', function() {
   let x = slider2.value;
   let color = 'linear-gradient(90deg, rgb(113, 7, 7)' + x + '%, rgb(196, 196, 196)' + x + '%)';
   slider2.style.background = color;
})
