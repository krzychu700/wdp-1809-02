(function () {
    function cartSizeCheck() {
        var cartIcon = document.getElementsByClassName("cart-icon");
        var cartCounter = document.getElementsByClassName("cart-counter");

        if (cartCounter[0].innerText.length <= 2) {
            cartIcon[0].style.width = '55px';
            cartCounter[0].style.width = '28px';
        } else if (cartCounter[0].innerText.length === 3) {
            cartIcon[0].style.width = '69px';
            cartCounter[0].style.width = '42px';
        } else if (cartCounter[0].innerText.length === 4) {
            cartIcon[0].style.width = '78px';
            cartCounter[0].style.width = '50px';
        } else if (cartCounter[0].innerText.length === 5) {
            cartIcon[0].style.width = '90px';
            cartCounter[0].style.width = '60px';
        } else if (cartCounter[0].innerText.length > 5) {
            cartCounter[0].innerHTML = "99999";
            cartIcon[0].style.width = '90px';
            cartCounter[0].style.width = '60px';
        };
    }

    cartSizeCheck();
})();