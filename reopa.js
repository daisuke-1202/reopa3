var pos = 300;
$(function(){
    setInterval(function(){
        var random = Math.floor(Math.random()*4);
        if(random == 0){
            pos = pos + 20;
            $("#reopa").animate({left:pos});
            $("img").attr("src","reoparight.png");
        }
        if(random == 1){
            pos = pos - 20;
            $("#reopa").animate({left:pos});
            $("img").attr("src","reopaleft.png");
        }
        if(random == 2){
            pos = pos + 20;
            $("#reopa").animate({top:pos});
            $("img").attr("src","reopabottom.png");
        }
        if(random == 3){
            pos = pos - 20;
            $("#reopa").animate({top:pos});
            $("img").attr("src","reopatop.png");
        }
    },500);
});