'use strict'

// stars rating functions
var starsContener = document.querySelectorAll('.stars');

for (var i = 0; i < starsContener.length; i++){

    starsContener[i].addEventListener('click', setRating);
    starsContener[i].addEventListener('mouseover', setHover);
    starsContener[i].addEventListener('mouseout', removeHover);
    function setRating(e){
        let cStar = e.target;
        let stars = this.querySelectorAll('.star');
        let match = false;
        stars.forEach(function(star){
            if(match){
                star.classList.remove('full');
            }else{
                star.classList.add('full');
                star.style.color = '#d58e32';
            }
            if(star === cStar){
                match = true;
            }
        });
    }
    function setHover(e){
        let hStar = e.target;
        let stars = this.querySelectorAll('.star');
        let match = false;
        stars.forEach(function(star){
            if(match){
                star.classList.remove('star-hover');
            }else{
                star.classList.add('star-hover');
            }
            if(star === hStar){
                match = true;
            } 
        });
    }
    
    function removeHover(e){
        let stars = this.querySelectorAll('.star');
        stars.forEach(function(star){
            star.classList.remove('star-hover');
        });
    }
}
