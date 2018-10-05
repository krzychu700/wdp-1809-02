(function () {
var productsCard = document.querySelectorAll(".js-products");
var jsBed = document.getElementsByClassName("bed-products");
var jsChair = document.getElementsByClassName("chair-products");
var jsSofa = document.getElementsByClassName("sofa-products");
var jsTable = document.getElementsByClassName("table-products");
var jsDining = document.getElementsByClassName("dining-products");
var jsDoots = document.getElementById("js-dots");

function cardChecker() {
    if (productsCard[0].classList.contains("active")) {
        jsBed[0].style.display = "flex";
    } else {
        jsBed[0].style.display = "none";
    };
    if (productsCard[1].classList.contains("active")) {
        jsChair[0].style.display = "flex";
    } else {
        jsChair[0].style.display = "none";
    };
    if (productsCard[2].classList.contains("active")) {
        jsSofa[0].style.display = "flex";
    } else {
        jsSofa[0].style.display = "none";
    };
    if (productsCard[3].classList.contains("active")) {
        jsTable[0].style.display = "flex";
    } else {
        jsTable[0].style.display = "none";
    };
    if (productsCard[4].classList.contains("active")) {
        jsDining[0].style.display = "flex";
    } else {
        jsDining[0].style.display = "none";
    }
}

function dotsCreator() {
    var elemCreator = document.createElement("li");
    var linkCreator = document.createElement("a");
    var child = jsDoots.appendChild(elemCreator);
    child.appendChild(linkCreator);
    child.setAttribute("class", "dynamic-dot basic-animation");
}

function dotsCounter() {
    var jsDynamicDots = document.querySelectorAll(".dynamic-dot");
    for (var l = 0; l < jsDynamicDots.length; l++) {
        jsDoots.removeChild(jsDynamicDots[l]);
    }
}

function dotsChecker() {
    dotsCounter();
    var bedProducts = jsBed[0].querySelectorAll(".product-box").length;
    var chairProducts = jsChair[0].querySelectorAll(".product-box").length;
    var sofaProducts = jsSofa[0].querySelectorAll(".product-box").length;
    var tableProducts = jsTable[0].querySelectorAll(".product-box").length;
    var diningProducts = jsDining[0].querySelectorAll(".product-box").length;

    if ((bedProducts > 8) && (productsCard[0].classList.contains("active"))) {
        do {
            dotsCreator();
            bedProducts-=8;
        }
        while (8 < bedProducts);
    } ;
    if ((chairProducts > 8) && (productsCard[1].classList.contains("active"))) {
        do {
            dotsCreator();
            chairProducts-=8;
        }
        while (8 < chairProducts);
    };
    if ((sofaProducts > 8) && (productsCard[2].classList.contains("active"))) {
        do {
            dotsCreator();
            sofaProducts-=8;
        }
        while (8 < sofaProducts);
    };
    if ((tableProducts > 8) && (productsCard[3].classList.contains("active"))) {
        do {
            dotsCreator();
            tableProducts-=8;
        }
        while (8 < tableProducts);
    };
    if ((diningProducts > 8) && (productsCard[4].classList.contains("active"))) {
        do {
            dotsCreator();
            diningProducts-=8;
        }
        while (8 < diningProducts);
    }
}

dotsChecker();

for (var i = 0; i < productsCard.length; i++) {

    productsCard[i].addEventListener("click", function () {

        for (var j = 0; j < productsCard.length; j++) {
            productsCard[j].classList.remove("active");
        };
        this.className += " active";
        cardChecker();
        dotsCounter();
        dotsChecker();
    });
}

})();