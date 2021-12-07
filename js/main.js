$(function(){

    var btn = $('.pop-btn');
    var close = $('.close-btn');
    
    btn.click(function(){
        var list = $(this).parents('li');
        var popClass = $(this).parents('li').attr('class');

        if(list.hasClass('clone')){
            var listNum = list.attr('class').split(' ')[0];
            var popIdx = listNum.split('-')[1];
        }else{
            var popIdx = popClass.split('-')[1];
        }
        
        $.getJSON('./data/data.json', function(data){

            var dataHTML = 
                '<div class="popup">' +
                    '<a class="close-btn"></a>' +
                    '<div class="pop-con">' +
                        '<div class="pop-box">' +
                            '<div class="title">' + data[popIdx].title + '</div>' +
                            '<div class="text">' + data[popIdx].contents + '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            
            $('.container').append(dataHTML).fadeIn(1000);
           
        });
        $('.ball').addClass('on');

    });

    
    $(document).on("click", '.close-btn', function(){
        // $(this).parent().fadeTo(1000, 0.2);
        // $(this).parent().remove();

        $(this).parent('.popup').fadeOut("1000", function(){
            $(this).remove();
        });

        $('.ball').removeClass('on');
    });

});