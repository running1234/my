$(function(){
    var num = 0
    $('.audio').click(function(){
        if(num == 0){
            $('.audio img').removeClass('music-rotate');
            $('.audio').removeClass('audio-bg');
            num = 1;
        }else{
            $('.audio img').addClass('music-rotate');
            $('.audio').addClass('audio-bg');
            num = 0;
        }
        if($('.audio audio').get(0).paused){
            $('.audio audio').get(0).play();
        }else{
            $('.audio audio').get(0).pause();
        }
    });
});