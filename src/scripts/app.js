'use strict'

var btnFavorite = document.querySelectorAll('a.btn-outline');

 for (var i = 0; i < btnFavorite.length; i++) {
	btnFavorite[i].addEventListener('click', function (event) {
        var classActive = this.classList;
        if (classActive.contains('active')){
            this.classList.remove('active');
        } else {
            this.className += ' active';
        }
    }, false);
} 
