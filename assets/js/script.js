// scroll to section
$('a[href^="#"]').click(function () {
    var target = $(this).attr('href')

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
    return false;
});
//toggle menu
$('.toggle-menu-btn').click(function () {
    $('#nav-menu').toggleClass('toggle');
    
})
$('#nav-menu a').click(function(){
    $('#nav-menu').toggleClass('toggle');
}) 
$('#toggle-phone').click(function(){
    $('#phone-list').fadeToggle();
})
$(window).on('scroll', function(){
        $('#phone-list').fadeOut();
        if($(window).scrollTop()>122){
            $('#nav-menu').removeClass('toggle');
        };
})
