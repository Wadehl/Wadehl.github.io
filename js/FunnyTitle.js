// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title ='_φ_(．．)  Studying...';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '٩꒰▽ ꒱³ 写完咯';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});