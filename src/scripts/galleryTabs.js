(function () {
  var productsTabs = document.querySelectorAll(".js-productTab");

  for (var i = 0; i < productsTabs.length; i++) {
    productsTabs[i].addEventListener("click", function () {
      for (var j = 0; j < productsTabs.length; j++) {
        productsTabs[j].classList.remove("active");
      };
      this.className += " active";
    });
  }
})();