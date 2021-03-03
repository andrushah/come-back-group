//* top slider start functions */
/* default slide index */
var slideIndex = 0; //set default slide
// showSlides(slideIndex); // init slider
autoSlide(); // start animation. To stop animation comment this line and set slideIndex = 1;

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
document.querySelector('.slider-dots').onclick = function () {
    for (let i = 0; i < this.children.length; i++) {
        if (this.children[i] == event.target) {
            currentSlide(i + 1);
        }
    }
    window.clearTimeout(timeoutId); //reset timeOut
    timeoutId = setTimeout(autoSlide, 6000);
}

/* Main slider's function*/
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
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
/* Autoslide function */
function autoSlide() {
    showSlides(slideIndex += 1);
    timeoutId = setTimeout(autoSlide, 6000);
}
/* top slider end functions */

/* Response slider start functions*/
let itemWidth = $('.partnersList').width() / 4;
    // position of slider list	    
    $('.sliderTrack').css('left', -328);
    $('.sliderTrack > li:last-child').prependTo('.sliderTrack');
if(window.innerWidth < 1440){
    $('.sliderTrack > li').width(itemWidth);
    $('.sliderTrack').css('left', -itemWidth);
} 
if(window.innerWidth < 768){
    itemWidth = $('.partnersList').width() / 2;
    $('.sliderTrack > li').width(itemWidth);
    $('.sliderTrack').css('left', -itemWidth);
}

window.onresize = function () {
    if(window.innerWidth < 768){
        itemWidth = $('.partnersList').width() / 2;
        
    }else{
        itemWidth = $('.partnersList').width() / 4;
    }
    // position of slider list	
    $('.sliderTrack').css('left', -itemWidth);
    $('.sliderTrack > li').width(itemWidth);
}


//move slide forward
function nextSlide() {
    $('.sliderTrack').animate({
            'margin-left': -itemWidth
        }, 500,
        function () {
            $('.sliderTrack>li:first-child').appendTo('.sliderTrack');
            $('.sliderTrack').css('margin-left', 0);
        });
};

//move slide back
function prevSlide() {
    $('.sliderTrack').animate({
            'margin-left': itemWidth
        }, 500,
        function () {
            $('.sliderTrack>li:last-child').prependTo('.sliderTrack');
            $('.sliderTrack').css('margin-left', 0);
        });
};
/* Bottom slider end functions*/