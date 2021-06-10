'use strict'
let mainHeader = document.querySelector('.main-header')
let features = document.querySelector('.features')
let realization = document.querySelector('.realization')
// let featuresPosition = features.getBoundingClientRect() 
// Получает позицию элемента в виде объекта со свойствами left, right, top, bottom
window.addEventListener('scroll', function (event) {

    if (window.pageYOffset >= mainHeader.offsetTop) {
        features.classList.add('animate__animated', 'animate__bounceIn')
        features.style.backgroundColor = "grey"
    }

    if (window.pageYOffset >= features.offsetTop) {
        features.classList.remove('animate__animated', 'animate__bounceIn')
        realization.classList.add('animate__animated', 'animate__flipInY')
    }
})