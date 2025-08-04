package com.cfi.csrj;

import android.app.Activity;
import android.os.Bundle;

import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.content.res.Configuration;
import android.webkit.JavascriptInterface;
import android.view.WindowManager;
import android.os.Build;

public class MainActivity extends Activity {
    private WebView webView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // 初始化WebView
        webView = findViewById(R.id.webview);
        // 定义设置
        WebSettings webSettings = webView.getSettings();
        // 启用JavaScript
        webSettings.setJavaScriptEnabled(true);
        // 启用dom保存
        webSettings.setDomStorageEnabled(true);
        // 设置WebViewClient以在WebView中打开链接而不是浏览器
        webView.setWebViewClient(new WebViewClient());
        //打开本地文件
        webView.loadUrl("file:///android_asset/index.html");
        // 添加JS接口
        webView.addJavascriptInterface(new JsInterface(this), "androidBridge");
        //设置安卓9.0刘海屏允许扩展到状态栏
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
		//webview加载完毕检测系统主题
		webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                 String jsCode = isSystemInDarkMode() ? "webviewsettheme('dark');" : "webviewsettheme('light');";
                     if (webView != null) {
                         webView.evaluateJavascript(jsCode, null);
                     }
            }
        });
		
		
		
		
		
		
		
		
		
    }
	//获取系统主题
    public boolean isSystemInDarkMode() {
        int nightModeFlags = getResources().getConfiguration().uiMode & 
                           Configuration.UI_MODE_NIGHT_MASK;
        return nightModeFlags == Configuration.UI_MODE_NIGHT_YES;
    }
    //系统主题变化代码
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        // 直接在这里处理主题变化
        boolean isDarkMode = (newConfig.uiMode & Configuration.UI_MODE_NIGHT_MASK) 
                            == Configuration.UI_MODE_NIGHT_YES;
        
        // 调用网页JS函数切换主题
        String jsCode = isDarkMode ? "webviewsettheme('dark');" : "webviewsettheme('light');";
        if (webView != null) {
            webView.evaluateJavascript(jsCode, null);
        }
    }
    // 进入全屏（隐藏状态栏和导航栏）
    private void aenterFullscreen() {
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_FULLSCREEN          // 隐藏状态栏
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION   // 隐藏导航栏
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY  // 沉浸式模式（触摸后不会立即退出全屏）
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE     // 保持布局稳定
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN // 内容延伸到状态栏区域
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION // 内容延伸到导航栏区域
        );
    }
    // 退出全屏（显示状态栏和导航栏）
    private void aexitFullscreen() {
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE); // 清除所有标志
    }
    //设置JavaScript调用
    private class JsInterface {
        private Activity activity;
        JsInterface(Activity activity) {
            this.activity = activity;
        }
        //进入全屏
        @JavascriptInterface
        public void enterFullscreen() {
            activity.runOnUiThread(() -> aenterFullscreen());
        }
        //退出全屏
        @JavascriptInterface
        public void exitFullscreen() {
            activity.runOnUiThread(() -> aexitFullscreen());
        }
    }
    
    
    
    
    

}




