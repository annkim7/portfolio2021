
window.onload = function(){
    var section = document.getElementsByTagName("section");
    var ball = document.querySelectorAll(".ball");
    var ballNum = ball.length;

    window.addEventListener("scroll", function(){
        var scroll = this.scrollY;

        if(scroll > section[0].offsetTop + window.outerHeight/10){
            pageChangeFunc();
        }else{
            pageChangeReset();
        }
        
    });

    pageChangeReset();

    function pageChangeFunc(){        
        for(var i = 0; i < ballNum; i++){
            var time = i * 0.2;
            if( i < 4){
                ball[i].style.left = "-150%";
                ball[i].style.transition = "1.5s";
                ball[i].style.setProperty("transition-delay", time +"s");
            }else{
                ball[i].style.left = "150%";
                ball[i].style.transition = "1.5s";
                ball[i].style.setProperty("transition-delay", time +"s");
            }
        }
    }

    function pageChangeReset(){
        for(var i = 0; i < ballNum; i++){
            var time = i * 0.2;
            ball[i].style.left = "50%";
            ball[i].style.transition = "1.5s";
            ball[i].style.setProperty("transition-delay", time +"s");
        }
    }
}