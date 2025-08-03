import config from './doc/doc.js';

function inittheme() {
    if (localStorage.getItem('theme')==='light') {
        themeclick('light');
    } else if (localStorage.getItem('theme')==='dark') {
        themeclick('dark');
    } else if (localStorage.getItem('theme')==='auto') {
        themeclick('auto');
    }
    const savedtheme = localStorage.getItem('theme') || 'light';
    settheme(savedtheme, false);
    themeclick(savedtheme);
}
function settheme(theme,save=true) {
    if (save) localStorage.setItem('theme',theme)
    if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
const themelight = document.getElementById('theme-light');
const themedark= document.getElementById('theme-dark');
const themeauto = document.getElementById('theme-auto');
themelight.addEventListener('click', function() {
    settheme('light');
    themeclick('light');
});
themedark.addEventListener('click', function() {
    settheme('dark');
    themeclick('dark');
});
themeauto.addEventListener('click', function() {
    settheme('auto');
    themeclick('auto');
    const e=document;(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)?(e.exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen).call(e):(e.documentElement.requestFullscreen||e.documentElement.webkitRequestFullscreen||e.documentElement.mozRequestFullScreen||e.documentElement.msRequestFullscreen).call(e.documentElement)
});
function themeclick(theme) {
    console.log(theme);
    if (theme === 'light') {
        
        themelight.classList.add('click');
        themedark.classList.remove('click');
        themeauto.classList.remove('click');
    } else if (theme === 'dark') {
        themelight.classList.remove('click');
        themedark.classList.add('click');
        themeauto.classList.remove('click');
    } else if (theme === 'auto') {
        themelight.classList.remove('click');
        themedark.classList.remove('click');
        themeauto.classList.add('click');
    }
}
inittheme();
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'auto') {
        settheme('auto', false);
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