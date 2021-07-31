console.log("hello World");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
const prevSlide = document.querySelector(".prev")
prevSlide.addEventListener("click", () => {
    plusSlides(-1)
});

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

const nextSlide = document.querySelector(".next")
nextSlide.addEventListener("click", () => {
    plusSlides(1)
});


function showSlides(n) {
  var i = 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

