import config from './doc/doc.js'; // 不需要大括号 {}
config.forEach(item => {
    console.log(`a: ${item.a}, b: ${item.b}`);
    
    if (item.c) {
        console.log('包含子项:');
        item.c.forEach(subItem => {
            console.log(`  a: ${subItem.a}, b: ${subItem.b}`);
        });
    }
});







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