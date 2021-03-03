/* Response slider start functions*/
let sliderBoxWidth = $('#responseSlider').width();
let sliderTrack = $('#responseSlider > .slider');
let slide = $('#responseSlider .slide');
// init dots creation function
createDots();
//set width to slider track
sliderTrack.width($('#responseSlider').width() * slide.length)

//resposible slide function
$(window).on('resize', function(){
    if($(this).width() < 824){
    $('#responseSlider .slide').outerWidth($('#responseSlider').innerWidth());
    // sliderBoxWidth = $('#responseSlider').innetWidth();
    }
    sliderTrack.css('left', -$('#responseSlider').width());
    sliderBoxWidth = $('#responseSlider').width();
})


// slider list	position
sliderTrack.css('left', -sliderBoxWidth);
slide.last().prependTo(sliderTrack);

let dotCount = 1;
function nextSlide() {
    if(dotCount < 0){
        dotCount = $('.dot-item').length-1;
    }
    if(dotCount < $('.dot-item').length && dotCount >= 0){
        dotCount--;
        $('.dot-item').removeClass('active');
        $('.dot-item').eq(dotCount).addClass('active');
    }
    sliderTrack.animate({
        'margin-left': -sliderBoxWidth,
    }, 1000, "easeInOutQuint",function () {
        $('#responseSlider .slide').first().appendTo($('#responseSlider > .slider'));
        sliderTrack.css('margin-left', 0);
    });
};
//move slide back
function prevSlide() {
    if(dotCount >= -1  && dotCount <= $('.dot-item').length-1){
        dotCount++;
        $('.dot-item').removeClass('active');
        $('.dot-item').eq(dotCount).addClass('active');
    };
    if(dotCount >=$('.dot-item').length-1){
        dotCount = -1;
    };

    sliderTrack.animate({
            'margin-left': sliderBoxWidth
        }, 1000, "easeInOutQuint",
        function () {
            $('#responseSlider .slide').last().prependTo($('#responseSlider > .slider'));
            sliderTrack.css('margin-left', 0);
        });
};
// create slider navigation dots
function createDots(){
    $('#responseSlider .responsedDots').html('');
    let slideQuty = $('#responseSlider .slide').length;
    let newDot = '<div class="dot-item"></div>';
    for(let i=0; i< slideQuty; i++){
        $('#responseSlider .responsedDots').append(newDot);
    }
    if($('.dot-item').eq(1)){
        $('.dot-item').eq(1).addClass('active');
    }
}
// $('.dot-item').on('click', function(event){
//     let countSlide;
//     let countdots;
//     for(let i=0; i<$('.dot-item').length; i++){
//         if($('.dot-item')[i] == event.target){
//             countdots = i;
//         }
//     }
//     for(let i=0; i<$('#responseSlider .slide').length; i++){
//         if(i == countdots && i!=1){
//                 $('#responseSlider .slide')[1].next($('#responseSlider .slide')[i])
//             nextSlide();
//             // console.log();
//         }
//     }
        
// });



