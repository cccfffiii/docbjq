//主题设置相关代码
const theme = localStorage.getItem("theme") || 'auto';
settheme(theme);
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
const themelight = document.getElementById('theme-light');
const themedark = document.getElementById('theme-dark');
const themeauto = document.getElementById('theme-auto');
themelight.addEventListener('click', function() {
    settheme('light');
    themelight.classList.add('click');
    themedark.classList.remove('click');
    themeauto.classList.remove('click');
});
themedark.addEventListener('click', function() {
    settheme('dark');
    themelight.classList.remove('click');
    themedark.classList.add('click');
    themeauto.classList.remove('click');
});
themeauto.addEventListener('click', function() {
    settheme('auto');
    themelight.classList.remove('click');
    themedark.classList.remove('click');
    themeauto.classList.add('click');
})





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