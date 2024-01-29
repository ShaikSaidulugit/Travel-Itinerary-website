$(document).ready(function(){
    $(window).scroll(function(){
        if($('body').scrollTop()>'100'){
            $('#btn4').fadeIn(500)
        }else{
            $('#btn4').fadeOut(500)
        }
    })

    $('#btn4').click(function(){
        $('body').animate({'scrollTop' : '0px'},500)
    })
})

// =============Howitwork function==============

$(document).ready(function(){
    $('#btn5').click(function(){
        $('body').animate({'scrollTop' : '664px'})
    })

})
$(document).ready(function(){
        $('#btn6').click(function(){
        $('body').animate({'scrollTop' : '3710px'})
    })
})
