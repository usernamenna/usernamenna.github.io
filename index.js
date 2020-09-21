/*eslint-env browser*/

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;
// clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
// initialize slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}
// show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}
// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}
// left arrow click
arrowLeft.addEventListener('click', function () {
    if (current == 0) {
        current = sliderImages.length;
    }
    slideLeft();
})
arrowRight.addEventListener('click', function () {
    if (current == sliderImages.length - 1) {
        current = -1
    }
    slideRight();
})
startSlide();
