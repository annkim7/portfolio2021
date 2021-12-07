$(function(){

    var btn = $('.pop-btn');
    var close = $('.close-btn');

    var array = [
        {"title":"Its game", "contents": "테스트1"},
        {"title":"STF 2021", "contents": "테스트2"},
        {"title":"IKW 2021", "contents": "테스트3"},
        {"title":"Jipremium x 4", "contents": "테스트4"},
        {"title":"Eco", "contents": "테스트5"},
        {"title":"Inquebangkok", "contents": "테스트6"},
    ];

    $.getJSON('data/data.json', function(data){
        var dataHTML = 
        '<div class="popup">' +
            '<a class="close-btn"></a>' +
            '<div class="pop-con">' +
                '<div class="pop-box">' +
                    '<div class="title">' + data.title + '</div>' +
                    '<div class="text">' + data.contents + '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
        $('.container').append(dataHTML);
           
    
        }); 
    

    // $.getJSON('data/data.json', function(data){
    //     var elements = [];

    //     $.each(data, function(i, item){

    //         var itemHTML = 
    //             '<div class="popup">' +
    //                 '<a class="close-btn"></a>' +
    //                 '<div class="pop-con">' +
    //                     '<div class="pop-box">' +
    //                         '<div class="title">' + item. title + '</div>' +
    //                         '<div class="text">' + item.contents + '</div>' +
    //                     '</div>' +
    //                 '</div>' +
    //             '</div>'
    //             ;

    //         elements.push($(itemHTML).get(0));
    //     });

    //     $('.container').append(elements);

    // }); 

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
        
        $('.popup').fadeIn();
        $('.ball').addClass('on');

        $('.pop-con').find('.title').text(array[popIdx].title);
        $('.pop-con').find('.text').text(array[popIdx].contents);

        
    });


    close.click(function(){
        $('.popup').fadeOut();
        $('.ball').removeClass('on');
        
    });

});