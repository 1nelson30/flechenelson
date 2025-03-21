let currentIndex = 0 ;
const slides = document.querySelectorAll('.slide') ;

function showSlide(index) {
    Slides.forEach((slide, i) => {
        Slide.style.display = (i === index) ? 'block' : 'none' ;
    }) ;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length ;
    showSlide(currentIndex) ;
}

showSlide(currentIndex) ;
setInterval(nextSlide, 3000) ; // Change slide every 3 seconds

