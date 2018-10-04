(function(){
var productsCard = document.querySelectorAll(".js-products");
var jsBed = document.getElementsByClassName("bed-products");
var jsChair = document.getElementsByClassName("chair-products");
var jsSofa = document.getElementsByClassName("sofa-products");
var jsTable = document.getElementsByClassName("table-products");
var jsDining = document.getElementsByClassName("dining-products");

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

for (var i = 0; i < productsCard.length; i++) {

    productsCard[i].addEventListener("click", function () {
        for (var j = 0; j < productsCard.length; j++) {
            productsCard[j].classList.remove("active");
        };
        this.className += " active";
        cardChecker();
    });
}
})();
