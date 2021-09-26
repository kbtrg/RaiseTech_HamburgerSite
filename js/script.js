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