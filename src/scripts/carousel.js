(function() {
'use strict';

  var vPortWidth = window.screen.availWidth;
  var pBox = document.querySelectorAll('.carousel-box');
  var pBoxLength = pBox.length;
  var pCarousel = document.querySelector('.products-carousel');
  var carouselDots = document.querySelector('.carousel-dots');
  var dotsMain = document.querySelector('.dots-main');
  var dotsTempl = '<li><a href="#" class="dot-click basic-animation"></a></li>';

  console.log(vPortWidth);
  console.log(pBoxLength);

  function addDots(){
    var box;
    var i;
    var dotsCount = 0;
    var newLi = document.createElement('li');
    var newA = document.createElement('a');

    carouselDots.innerHTML = '';
    if (vPortWidth >= 1025){
        box = pBoxLength/4;
        console.log(box);
      for ( i = 0; i<box; i++){
          carouselDots.insertAdjacentHTML('afterbegin', dotsTempl);
      }

      return;

    } else if (vPortWidth >= 990){
        box = pBoxLength/3;
        console.log(box);
      for ( i = 0; i<box; i++){
        carouselDots.insertAdjacentHTML('afterbegin', dotsTempl);
      }

      return;

    } else if (vPortWidth >= 568){
          box = pBoxLength/2;
          console.log(box);
      for ( i = 0; i < box; i++){
          carouselDots.insertAdjacentHTML('afterbegin', dotsTempl);
      }

      return;
    } else if (vPortWidth <= 567){
        box = pBoxLength;
        console.log(box);
      for ( i = 0; i<box; i++){
        carouselDots.insertAdjacentHTML('afterbegin', dotsTempl);
      }

      return;
    }
    console.log(box);
}

addDots();
window.addEventListener('resize', addDots);
// ();

var dotClic = document.querySelectorAll('.dot-click');
var dotClick = dotClic.length;

function moveProductsOnClick(){
  console.log('click');
}

for (var i = 0; i < dotClick; i++){
  dotClic[i].addEventListener('click', moveProductsOnClick);
}

console.log(dotClick);

})();
