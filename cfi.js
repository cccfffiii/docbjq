const cfi = {
    主题初始化 : function() {
        const theme = localStorage.getItem("theme") || 'auto';
        this.设置主题(theme);
        window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
            if (localStorage.getItem('theme') === 'auto') {
                    this.设置主题("auto");
            }
        });
    }, 
    设置主题: function(theme) {
        localStorage.setItem('theme',theme)
        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
    切换全屏: function() {
        const e=document;(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)?(e.exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen).call(e):(e.documentElement.requestFullscreen||e.documentElement.webkitRequestFullscreen||e.documentElement.mozRequestFullScreen||e.documentElement.msRequestFullscreen).call(e.documentElement)
    },
}



