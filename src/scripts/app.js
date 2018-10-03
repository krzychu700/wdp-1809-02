(function() {
    'use strict';

    var responsiveStep = 568;
    var change = window.innerWidth > responsiveStep ? false : true;
    //buttons for menu hamburger and search
    var menuHamburger = document.getElementById('menuHamburger');
    var menuSearchButton = document.getElementById('menuSearchButton');
    //menu
    var menuList = document.getElementById('menuList');
    var menuSearch = document.getElementById('menuSearch');

    window.addEventListener('resize', function() {
        if(window.innerWidth > responsiveStep) {
            menuList.style.display = "flex";
            menuSearch.style.display = "flex";
            change = false;
        }
        else {
            menuList.style.display = "none";
            menuSearch.style.display = "none";
            change = true;
        }
    });

    var changeVisible = function(item) {
        change ? (item.style.display = "flex") : (item.style.display = "none");
        change = !change;
    };

    menuHamburger.addEventListener('click', function() {
        changeVisible(menuList)});
    menuSearchButton.addEventListener('click', function() {
        changeVisible(menuSearch)});
})();

