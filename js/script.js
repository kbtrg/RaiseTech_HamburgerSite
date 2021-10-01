/* 共通処理
-----------------------------------------------------------------*/
//リサイズ時に読み込み
$(window).resize(function(){
    $('.l-sidebar').fadeOut(250);  
    $('.left-block').css('position', 'static');
});




/* Windowサイズに合わせた処理
-----------------------------------------------------------------*/
//Windowサイズの取得
$windowWidth = window.innerWidth;
//Windowサイズの定義
$sp = 520;
$iPad = 960;
//Windowサイズ判定
isMobileSize = ($windowWidth < $sp);
isTabletSize = ($windowWidth <= $iPad) && ($windowWidth > $sp);
isPcSize = ($windowWidth > $iPad);


//モバイルサイズの場合の記述
if(isMobileSize){
    //ハンバーガーボタン処理
    $(function(){
        $('.ham-menu').click(function() {
            $('.l-sidebar').fadeIn(250);
            $('.left-block').css({position: "fixed", width: "100%"});
        });
        $('.c-ham-btn').click(function() {
            $('.l-sidebar').fadeOut(250);  
            $('.left-block').css('position', 'static');
        });
    });
}
//タブレットサイズの場合の記述
else if(isTabletSize){
    //ハンバーガーボタン処理
    $(function(){
        $('.ham-menu').click(function() {
            $('.l-sidebar').fadeIn(250);
            $('.left-block').css({position: "fixed", width: "100%"});
        });
        $('.c-ham-btn').click(function() {
            $('.l-sidebar').fadeOut(250);  
            $('.left-block').css('position', 'static');
        });
    });
}
//PCサイズの場合の記述
else if(isPcSize){
    
}