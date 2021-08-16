// import food from "./icon/mealTime.svg";
import { Nav, Main, Footer } from "./components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();
//import slides from "./lib/functions/slideShow";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
  addEventListener(st);
  router.updatePageLinks();
}
render(state.Home);

// Slide show functionality
function addEventListener(st) {
  // Burger Functionality
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const links = nav.querySelectorAll("a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      burger.classList.toggle("toggle");
    });
  });

  // Navbar transition
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  // Slide show
  let slidePosition = 0;
  const slides = document.getElementsByClassName("carouselItem");
  const totalSlides = slides.length;

  document
    .getElementById("carouselBtnNex")
    .addEventListener("click", function() {
      moveToNexSlide();
    });

  document
    .getElementById("carouselBtnPrev")
    .addEventListener("click", function() {
      moveToPrevSlide();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove("carouselItemVisible");
      slide.classList.add("carouselItemHidden");
    }
    slides[slidePosition].classList.add("carouselItemVisible");
  }

  function moveToNexSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }
  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }

  // if (st.view === "Contact") {
  //   let contactLink = document.querySelector('[title = "Contact"]');
  //   console.log(contactLink);
  //   contactLink.style.display = "none";
  //   contactLink.removeChild(contact);
  // }
  // if (st.view === "Home") {
  //   var slideIndex = 1;
  //   showSlides(slideIndex);

  //   // Next/previous controls
  //   function plusSlides(n) {
  //     showSlides((slideIndex += n));
  //   }
  //   const prevSlide = document.querySelector(".prev");
  //   prevSlide.addEventListener("click", () => {
  //     plusSlides(-1);
  //   });

  //   // Thumbnail image controls
  //   function currentSlide(n) {
  //     showSlides((slideIndex = n));
  //   }

  //   const nextSlide = document.querySelector(".next");
  //   nextSlide.addEventListener("click", () => {
  //     plusSlides(1);
  //   });

  //   function showSlides(n) {
  //     var i = 0;
  //     var slides = document.getElementsByClassName("mySlides");
  //     var dots = document.getElementsByClassName("dot");
  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     dots[slideIndex - 1].className += " active";
  //   }
}
