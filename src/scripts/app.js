var selectOption = document.querySelector('header .menu-bar .search-form .category select');

selectOption.addEventListener('mouseover', function(){
    console.log('mouse over');
    selectOption.style.backgroudColor = '#d58e32;'
})