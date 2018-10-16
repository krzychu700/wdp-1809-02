// (function () {
var productsTabs = document.querySelectorAll(".js-productTab");
var tabs = document.querySelector(".gallery-tabs");
var productBoxfinder = document.querySelectorAll(".product-box");
var slider = document.querySelector(".gallery-slider");
var ovlImage = document.querySelector(".gallery-overlay");
var sliderStars = ovlImage.querySelectorAll(".js-star");
var sliderArrowL = slider.querySelector(".js-slider-arrow-left");
var sliderArrowR = slider.querySelector(".js-slider-arrow-right");
var picturesArea = slider.querySelector(".pictures-area");
var pos = 0;
var tempPos = 0;

var dataHolder = [];

function slideCreator() {
  picturesArea.insertAdjacentHTML("afterbegin", '<div class ="slider-box slider-image"><img class="js-image js-image-ovl" src=""></div>');
}

function sliderIfnoHolder(k) {
  var getProductImage = productBoxfinder[k].querySelector('.myImage').src;
  var getProductName = productBoxfinder[k].querySelector('.content').innerText;
  var getOldPrice = productBoxfinder[k].querySelector('.price-old').innerText;
  var getNewPrice = productBoxfinder[k].querySelector('.price-new').innerText;
  var getStars = productBoxfinder[k].querySelectorAll(".full").length;
  var SliderVariables = {};
  SliderVariables.src = getProductImage;
  SliderVariables.name = getProductName;
  SliderVariables.oldPrice = getOldPrice;
  SliderVariables.newPrice = getNewPrice;
  SliderVariables.stars = getStars;
  dataHolder[dataHolder.length] = SliderVariables;
}

function topRatedChecker() {
  var starAverage = 0;
  for (var i = 0; i < productBoxfinder.length; i++) {
    var starsHolder = productBoxfinder[i].querySelectorAll(".stars");
    for (var j = 0; j < starsHolder.length; j++) {
      var starsCounter = starsHolder[j].querySelectorAll(".full").length;
      starAverage = starsCounter;
    }
    if (starAverage > 2) {
      slideCreator();
      sliderIfnoHolder(i);
    }
  }
}

function topSeller() {
  var priceNew = 0;
  var priceOld = 0;
  for (var i = 0; i < productBoxfinder.length; i++) {
    var getPriceNew = productBoxfinder[i].querySelectorAll('.price-new');
    var getPriceOld = productBoxfinder[i].querySelectorAll('.price-old');
    for (var j = 0; j < getPriceNew.length; j++) {
      var getTextN = getPriceNew[j].innerText;
      var remDolarN = getTextN.replace("$", "");
      var priceNew = parseInt(remDolarN);
    }
    for (var k = 0; k < getPriceOld.length; k++) {
      var getTextO = getPriceOld[k].innerText;
      var remDolarO = getTextO.replace("$", "");
      var priceOld = parseInt(remDolarO);
    }
    if ((priceOld / priceNew) > 1.4) {
      slideCreator();
      sliderIfnoHolder(i);
    }
  }
}

function topFeatures() {
  var priceNew = 0;
  var priceOld = 0;
  var starAverage = 0;
  for (var i = 0; i < productBoxfinder.length; i++) {
    var getPriceNew = productBoxfinder[i].querySelectorAll('.price-new');
    var getPriceOld = productBoxfinder[i].querySelectorAll('.price-old');
    var starsHolder = productBoxfinder[i].querySelectorAll(".stars");
    for (var j = 0; j < getPriceNew.length; j++) {
      var getTextN = getPriceNew[j].innerText;
      var remDolarN = getTextN.replace("$", "");
      var priceNew = parseInt(remDolarN);
    }
    for (var k = 0; k < getPriceOld.length; k++) {
      var getTextO = getPriceOld[k].innerText;
      var remDolarO = getTextO.replace("$", "");
      var priceOld = parseInt(remDolarO);
    }
    for (var l = 0; l < starsHolder.length; l++) {
      var starsCounter = starsHolder[l].querySelectorAll(".full").length;
      starAverage = starsCounter;
    }
    if (((priceOld / priceNew) > 1.7) && (starAverage > 3)) {
      slideCreator();
      sliderIfnoHolder(i);
    }
  }
}

function activeImages() {
  var sliderImages = slider.querySelectorAll(".js-image");
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].src = dataHolder[i].src;
  }
  ovlImage.style.backgroundImage = "url('" + dataHolder[0].src + "')";
  ovlImage.querySelector(".js-title").innerHTML = dataHolder[0].name;
  ovlImage.querySelector(".price-new").innerHTML = dataHolder[0].newPrice;
  ovlImage.querySelector(".price-old").innerHTML = dataHolder[0].oldPrice;
  for (var k = 0; k < sliderStars.length; k++) {
    sliderStars[k].classList.remove("full");
  }
  for (var l = 0; l < dataHolder[0].stars; l++) {
    sliderStars[l].className += " full"
  }
  sliderImages[0].classList.remove("js-image-ovl");
}

function imageSelecter() {
  activeImages();
  var sliderImages = slider.querySelectorAll(".js-image");
  for (var i = 0; i < sliderImages.length; i++) {
    (function (index) {
      sliderImages[i].onclick = function () {
        ovlImage.style.backgroundImage = "url('" + dataHolder[index].src + "')";
        ovlImage.querySelector(".js-title").innerHTML = dataHolder[index].name;
        ovlImage.querySelector(".price-new").innerHTML = dataHolder[index].newPrice;
        ovlImage.querySelector(".price-old").innerHTML = dataHolder[index].oldPrice;
        for (var j = 0; j < sliderImages.length; j++) {
          sliderImages[j].className += " js-image-ovl";
        };
        this.classList.remove("js-image-ovl");
        for (var k = 0; k < sliderStars.length; k++) {
          sliderStars[k].classList.remove("full");
        }
        for (var l = 0; l < dataHolder[index].stars; l++) {
          sliderStars[l].className += " full"
        }
      }
    })(i);
  }
}

function tabChecker() {
  if (productsTabs[0].classList.contains("active")) {
    topFeatures();
    imageSelecter();
    sliderLength();
  } else if (productsTabs[1].classList.contains("active")) {
    topRatedChecker(); //nie posiadamy info o liczbie sprzedazy, wiec na ta chwile uzyje funkcji z najlepszymi ocenami
    imageSelecter();
    sliderLength();
  } else if (productsTabs[2].classList.contains("active")) {
    topSeller();
    imageSelecter();
    sliderLength();
  } else if (productsTabs[3].classList.contains("active")) {
    topRatedChecker();
    imageSelecter();
    sliderLength();
  };
}

tabChecker();

function sliderCleaner() {
  var sliders = slider.querySelectorAll(".slider-image");
  for (var i = 0; i < sliders.length; i++) {
    picturesArea.removeChild(sliders[i]);
  }
  dataHolder.length = 0;
}

for (var i = 0; i < productsTabs.length; i++) {
  productsTabs[i].addEventListener("click", function () {
    for (var j = 0; j < productsTabs.length; j++) {
      productsTabs[j].classList.remove("active");
    };
    this.className += " active";
  });
}

tabs.addEventListener("click", function () {
  sliderCleaner();
  tabChecker();
});

function sliderLength() {
  var sliders = slider.querySelectorAll(".slider-image");
  if (sliders.length > 6) {
    for (var i = 6; i < sliders.length; i++) {
      sliders[i].style.display = "none";
    }
  }
  pos = 0;
}

function activeSlide(pos) {
  var sliderImages = slider.querySelectorAll(".js-image");
  ovlImage.style.backgroundImage = "url('" + dataHolder[pos].src + "')";
  ovlImage.querySelector(".js-title").innerHTML = dataHolder[pos].name;
  ovlImage.querySelector(".price-new").innerHTML = dataHolder[pos].newPrice;
  ovlImage.querySelector(".price-old").innerHTML = dataHolder[pos].oldPrice;
  for (var j = 0; j < sliderImages.length; j++) {
    sliderImages[j].className += " js-image-ovl";
  };
  sliderImages[pos].classList.remove("js-image-ovl");
  for (var k = 0; k < sliderStars.length; k++) {
    sliderStars[k].classList.remove("full");
  }
  for (var l = 0; l < dataHolder[pos].stars; l++) {
    sliderStars[l].className += " full"
  }
}

function rightClcArr() {
  var sliders = slider.querySelectorAll(".slider-image");
  pos += 6;
  if (pos > sliders.length) {
    sliderCleaner()
    tabChecker();
    sliderLength();
    pos = 0;
    tempPos = 0;
  }
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
    tempPos = pos + 6;
  }
  for (var j = pos; j < tempPos; j++) {

    if (tempPos > sliders.length) {
      tempPos = sliders.length
    }
    sliders[j].style.display = "flex";
  }
}

function leftClcArr() {
  pos -= 6;
  var slidersLeft = 0;
  var sliders = slider.querySelectorAll(".slider-image");
  if (pos < 0) {
    slidersLeft = sliders.length % pos;
    pos = sliders.length - slidersLeft;
  }
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
    tempPos = pos + 6;
  }
  for (var j = pos; j < tempPos; j++) {
    if (tempPos > sliders.length) {
      tempPos = sliders.length
    }
    sliders[j].style.display = "flex";
  }
  if (pos === 0) {
    sliderCleaner();
    tabChecker();
    sliderLength();
    pos = 0;
    tempPos = 0;
  }
}

sliderArrowR.addEventListener("click", function () {
  rightClcArr();
  activeSlide(pos);
})

sliderArrowL.addEventListener("click", function () {
  leftClcArr();
  activeSlide(pos);
})
// })();