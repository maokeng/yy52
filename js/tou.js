var opt;
var hg;
 $(".nvshi").click(function () {
     opt=$(".nvshi2").css("opacity");
     hg=parseInt($(".erji").css("height"));
     if(opt==1 || hg>0){
         $(".erji").animate({
         height: "0px"
         },1000);
         setTimeout(function(){
             $(".nvshi2").css("opacity","0");
             $(".nanshi2").css("opacity","0");
             $(".peishi2").css("opacity","0");
         },1000);
     }else{
         $(".erji").animate({
             height: "474px"
         },1000);
         $(".nvshi2").css("opacity","1");
         $(".nanshi2").css("opacity","0");
         $(".peishi2").css("opacity","0");
     }
 });
$(".nanshi").click(function () {
    opt=$(".nanshi2").css("opacity");
    hg=parseInt($(".erji").css("height"));
    if(opt==1 || hg>0){
        $(".erji").animate({
            height: "0px"
        },1000);
        setTimeout(function(){
            $(".nvshi2").css("opacity","0");
            $(".nanshi2").css("opacity","0");
            $(".peishi2").css("opacity","0");
        },1000);
    }else{
        $(".erji").animate({
            height: "474px"
        },1000);
        $(".nvshi2").css("opacity","0");
        $(".nanshi2").css("opacity","1");
        $(".peishi2").css("opacity","0");
    }
});
$(".peishi").click(function () {
    opt=$(".peishi2").css("opacity");
    hg=parseInt($(".erji").css("height"));
    if(opt==1 || hg>0){
        $(".erji").animate({
            height: "0px"
        },1000);
        setTimeout(function(){
            $(".nvshi2").css("opacity","0");
            $(".nanshi2").css("opacity","0");
            $(".peishi2").css("opacity","0");
        },1000);
    }else{
        $(".erji").animate({
            height: "474px"
        },1000);
        $(".nvshi2").css("opacity","0");
        $(".nanshi2").css("opacity","0");
        $(".peishi2").css("opacity","1");
    }
});
