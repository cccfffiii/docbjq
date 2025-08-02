const aside = document.getElementById('aside');
const menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    aside.classList.toggle('active');
    if (aside.classList.contains('active')) {
        menu.src = "img/a2.svg"; 
    } else {
        menu.src = "img/a1.svg"; 
    }
});