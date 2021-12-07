$.fn.selfSlide = function(options){
    var defaults = {
        slideWidth : 600,
        slideMargin : 100,
        maxSlides : 3,
        responsiveMargin : 20
    };

    var options = $.extend({}, defaults, options);


    var slideWrapper = $(this),
        slides = slideWrapper.find('.slides'),
        slide = slides.find('li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = options.slideWidth,
        slideMargin = options.slideMargin,
        movAmt,
        maxSlides = options.maxSlides,
        responsiveMargin = options.responsiveMargin,
        newSlides,
        newSlideWidth,
        prevBtn = slideWrapper.find('.prev'),
        nextBtn = slideWrapper.find('.next');

    newSlideWidth = slideWidth;

    for(var i = 0; i < slideCount; i++){
        slide.eq(i).addClass('item-' + i);
    };


    //복사본 생성하기 뒤에 5개 추가
    slides.append(slide.clone().addClass('clone'));

    //복사본 생성하기 앞에 5개 추가
    slides.prepend(slide.clone().addClass('clone'));

    //가로배열하기
    function slideLayout(sw, sm){
        newSlides = $('.slide_wrapper li');
        movAmt = sw + sm;

        newSlides.each(function(idx){
            $(this).css({left: movAmt*idx + 'px', width: sw + 'px'});
        });
    }
    slideLayout(slideWidth, slideMargin);

    // 중앙배치하기
    function setSlidePos(){
        var ulMoveAmt = -movAmt * slideCount + 'px';
        slides.css({transform: 'translateX('+ ulMoveAmt + ')'});
    }
    setSlidePos();

    //좌우버튼 슬라이드 작동하기
    nextBtn.click(function(){
        moveSlide(currentIdx + 1);

    });
    prevBtn.click(function(){
        moveSlide(currentIdx - 1);

    });

    // 슬라이드 이동 함수
    function moveSlide(num){
        slides.stop().animate({left:movAmt * -num + 'px'}, 500, function(){
            if(currentIdx == slideCount || currentIdx == -slideCount){
                slides.css({left: '0px'});
                currentIdx = 0;
            }
        });
        currentIdx = num;

        //slide.eq(num).addClass('item-' + num);

        // console.log(currentIdx, slideCount);
    }



    //자동 슬라이드
    var timer = undefined;

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }

    autoSlide();

    function stopSlide(){
        clearInterval(timer);
        timer = undefined;
    }

    slideWrapper.mouseenter(function(){
        stopSlide();
    });

    slideWrapper.mouseleave(function(){
        autoSlide();
    });

    //반응형 슬라이드
    $(window).resize(function(){
        console.log($(this).width());
        if($(this).width() < 700){
            responsiveMargin = 20;
            newSlideWidth = (slides.width() - responsiveMargin*(maxSlides - 1))/maxSlides;
            
        }else{
            newSlideWidth = slideWidth;
            responsiveMargin = slideMargin;
        }

        if($(this).width() <= 500){
            newSlideWidth = slides.width();
            responsiveMargin = 0;
        }
        slideLayout(newSlideWidth, responsiveMargin);
        setSlidePos();
    });
}