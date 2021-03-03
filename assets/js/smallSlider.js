var slideIndex = 0;

/* 
The function increases the index by 1, showing the next slide*/
function nextSlide() {
    showSmallSlides(slideIndex += 1);
}

/* The function decreases the index by 1, showing the next slide*/
function prevSlide() {
    showSmallSlides(slideIndex -= 1);
}

/* Sets current slide */
function currentSmallSlide(n) {
    showSmallSlides(slideIndex = n);
}
/* Sets current slide with dots */

/* Set background to small slider */
function smallSliderBg() {
    let dotsBox = document.querySelectorAll('.dots-box');
    for (let i = 0; i < dotsBox.length; i++) {
        if (dotsBox[i].children) {
            document.querySelectorAll('.slider-box')[i].style.background = `url('${dotsBox[i].children[0].getAttribute('data-img')}')`;
            document.querySelectorAll('.slider-box')[i].style.backgroundSize = 'cover';
        }
    }
}
smallSliderBg();

$('.small-slider .dots-box .dot').each(function (ind, el) {
    // set thumbs background
    if ($(this).attr('data-img')) {
        let bg = $(this).attr('data-img');
        $(this).css({
            background: `url('${bg}') no-repeat`,
            backgroundSize: 'cover'
        })
    };
    // set sider-box background onklick
    $(this).on('click', function () {
        let bg = $(this).attr('data-img');
        $(this).parent().next().animate({
            'opacity': 0.1
        }, 200, 'easeInOutQuint', function () {
            $(this).css({
                background: `url('${bg}') no-repeat`,
                backgroundSize: 'cover'
            })
        }).animate({
            'opacity': 1
        }, 200,'easeInOutQuint')
    })

});






// $('.small-slider .dots-box .dot').on('click', function (event) {



//     for (let i = 0; i < $('.small-slider .dots-box .dot').length; i++) {
//         if (event.target == $('.small-slider .dots-box .dot')[i]) {
//             currentSmallSlide(i + 1);
//         }
//     }

// }) 

/* Main slider's function*/
function showSmallSlides(n) {
    let i;
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