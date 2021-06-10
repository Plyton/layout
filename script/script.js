'use strict'
let btn = document.querySelector(".video_txt-btn");
let video = document.querySelector(".video_item");
let wrp = document.querySelector(".video_txt-wrp");


btn.addEventListener('click', function () {

    video.play();
    video.controls = 'true';
    video.removeAttribute('muted');
    wrp.style.display = 'none';


})

video.addEventListener('ended', function () {
    wrp.style.display = 'block';
    video.removeAttribute('controls');

})


video.addEventListener('pause', function () {
      wrp.style.display = 'block';

})
