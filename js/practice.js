// slider js 
let sliderContainer = document.getElementById(".slider-container");
let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");
let slidewidth = slides[0].clientWidth;
let slideindex = 0;

// function declaration
function shoowslide(index) {
    if (index = 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    } sliderContainer.style.transform = `translatex(-${slidewidth * index}px)`
    slideindex = index;


    // updating the slidebar based on the indicators

}