$(function(){
    $('header .inner .SNB .menubox').click(function(){
        $('.popup').addClass('active')  
    })

    $('.popup .button').click(function(){
        $('.popup').removeClass('active')
    })


    $('.filter-bar .inner .textbtn .texttop button.checkbox').click(function(){
        $(this).toggleClass('red')
    })
})