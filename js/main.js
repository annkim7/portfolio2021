$(function(){

    

    // var array = [
    //     {"title":"Its game", "contents": "테스트1"},
    //     {"title":"STF 2021", "contents": "테스트2"},
    //     {"title":"IKW 2021", "contents": "테스트3"},
    //     {"title":"Jipremium x 4", "contents": "테스트4"},
    //     {"title":"Eco", "contents": "테스트5"},
    //     {"title":"Inquebangkok", "contents": "테스트6"},
    // ];

    var btn = $('.pop-btn');
    var close = $('.close-btn');
    $('.popup').hide();
    
    
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
            
            $('.container').append(dataHTML);
        
        }); 

        $('.popup').fadeIn();
        $('.ball').addClass('on');

        //$('.pop-con').find('.title').text(array[popIdx].title);
        //$('.pop-con').find('.text').text(array[popIdx].contents);
    });


    $('.close-btn').click(function(){
        $('.popup').fadeOut();
        $('.popup').remove();
        $('.ball').removeClass('on');
    });

});