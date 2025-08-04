//主题设置相关代码
const themelight = document.getElementById('theme-light');
const themedark = document.getElementById('theme-dark');
const themeauto = document.getElementById('theme-auto');
const theme = localStorage.getItem("theme") || 'light';
if (theme === 'light') {
    setlightclick();
} else if (theme === 'dark') {
    setdarkclick();
} else if (theme === 'auto') {
    setautoclick();
}
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'auto') {
       settheme("auto");
   }
});
function settheme(theme) {
    localStorage.setItem('theme', theme)
    if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
themelight.addEventListener('click', function() {
    setlightclick();
});
themedark.addEventListener('click', function() {
    setdarkclick();
});
themeauto.addEventListener('click', function() {
    setautoclick();
})
function setlightclick() {
    settheme('light');
    themelight.classList.add('click');
    themedark.classList.remove('click');
    themeauto.classList.remove('click');
}
function setdarkclick() {
    settheme('dark');
    themelight.classList.remove('click');
    themedark.classList.add('click');
    themeauto.classList.remove('click');    
}
function setautoclick() {
    settheme('auto');
    themelight.classList.remove('click');
    themedark.classList.remove('click');
    themeauto.classList.add('click');    
}





//显示隐藏侧边栏代码
const aside = document.getElementById('aside');
const menuicon = document.getElementById('menuicon');
menuicon.addEventListener('click', function() {
    aside.classList.toggle('active');
    if (aside.classList.contains('active')) {
        menuicon.innerHTML = `<path d="M128 160h768v64H128v-64zM128 373.333333h512v64H128v-64zM128 586.666667h512v64H128v-64zM128 800h768v64H128v-64zM896 384l-170.666667 128 170.666667 128V384z"></path>`;
    } else {
        menuicon.innerHTML = `<path d="M128 160h768v64H128v-64zM128 373.333333h512v64H128v-64zM128 586.666667h512v64H128v-64zM128 800h768v64H128v-64zM725.333333 384l170.666667 128-170.666667 128V384z"></path>`; 
    }
});




//全屏代码
const fullscreenicon = document.getElementById('fullscreenicon');
var sfqp = false;
fullscreenicon.addEventListener('click', function() {
    if (sfqp){
        exitFullscreen();
    }else{
        enterFullscreen();
    }
    updateFullscreenIcon();
});
document.addEventListener('fullscreenchange', updateFullscreenIcon);
document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
document.addEventListener('mozfullscreenchange', updateFullscreenIcon);
document.addEventListener('MSFullscreenChange', updateFullscreenIcon);
function updateFullscreenIcon() {
    const isFullscreen = sfqp || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (isFullscreen) {
        fullscreenicon.innerHTML = `<path d="M749.248 704H864a32 32 0 1 0 0-64H672a32 32 0 0 0-32 32v192a32 32 0 1 0 64 0v-114.752l137.36 137.36a32 32 0 1 0 45.232-45.264L749.248 704zM320 749.248V864a32 32 0 1 0 64 0V672a32 32 0 0 0-32-32H160a32 32 0 1 0 0 64h114.752l-137.36 137.36a32 32 0 1 0 45.264 45.232L320 749.248zM749.248 320H864a32 32 0 1 1 0 64H672a32 32 0 0 1-32-32V160a32 32 0 1 1 64 0v114.752l137.36-137.36a32 32 0 1 1 45.232 45.264L749.248 320zM320 274.752V160a32 32 0 1 1 64 0v192a32 32 0 0 1-32 32H160a32 32 0 1 1 0-64h114.752l-137.36-137.36a32 32 0 1 1 45.264-45.232L320 274.752z"></path>`;
    } else {
        fullscreenicon.innerHTML = `<path d="M237.248 192H352a32 32 0 1 0 0-64H160a32 32 0 0 0-32 32v192a32 32 0 1 0 64 0v-114.752l137.36 137.36a32 32 0 1 0 45.232-45.264L237.248 192zM832 237.248V352a32 32 0 1 0 64 0V160a32 32 0 0 0-32-32H672a32 32 0 1 0 0 64h114.752l-137.36 137.36a32 32 0 1 0 45.264 45.232L832 237.248zM237.248 832H352a32 32 0 1 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 1 1 64 0v114.752l137.36-137.36a32 32 0 1 1 45.232 45.264L237.248 832zM832 786.752V672a32 32 0 1 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 1 1 0-64h114.752l-137.36-137.36a32 32 0 1 1 45.264-45.232L832 786.752z"></path>`;
    }
}
const element = document.documentElement;
function enterFullscreen() {
// 优先使用原生桥接方法
        if (window.androidBridge && window.androidBridge.enterFullscreen) {
            window.androidBridge.enterFullscreen();
            sfqp = true; // 更新内部状态
        }
        // 浏览器全屏API
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitEnterFullscreen) {
            element.webkitEnterFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        sfqp = true; // 更新内部状态
        
}
function exitFullscreen() {
        // 优先使用原生桥接方法
        if (window.androidBridge && window.androidBridge.exitFullscreen) {
            window.androidBridge.exitFullscreen();
            sfqp = false; // 更新内部状态
        }
        // 浏览器全屏API
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        sfqp = false; // 更新内部状态
}




