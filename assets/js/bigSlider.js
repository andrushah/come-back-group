$('#sliderControls').outerWidth($('.slider-box').width());

$(window).on('resize', function () {
        $('#sliderControls').outerWidth($('.slider-box').width());
    
})
//* top slider start functions */
/* default slide index */
var slideIndex = 0; //set default slide

showSlides(slideIndex+=1); // init slider
// autoSlide(); // start animation. To stop animation comment this line and set slideIndex = 1;

/* 
The function increases the index by 1, showing the next slide*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
/* The function decreases the index by 1, showing the next slide*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}
/* Sets current slide */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Sets current slide with dots */
$('#sliderControls .dots .dot').on('click', function (event) {
    for (let i = 0; i < $('#sliderControls .dots .dot').length; i++) {
        if (event.target == $('#sliderControls .dots .dot')[i]) {
            currentSlide(i + 1);
        }
    }
    
}) 

/* Main slider's function*/
function showSlides(n) {
    let slides = $('.slider-track .slide');
    let dots = $('#sliderControls .dots .dot');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (const iterator of slides) {
        iterator.style.display = "none";
    }
    for (const iterator of dots) {
        iterator.className = iterator.className.replace('active', '');
    }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
}