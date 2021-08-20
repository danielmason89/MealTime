// import food from "./icon/mealTime.svg";
import { Nav, Main, Footer } from "./components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

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
}

// Rooter hooks, unsure where to use yet...
// router.hooks({
//   before: (done, params) => {
//     const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Home";

//     if (page === "Blog") {
//       state.Blog.posts = [];
//       axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
//         response.data.forEach(post => {
//           state.Blog.posts.push(post);
//           done();
//         });
//       });
//     }

//     if (page === "Home") {
//       axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?appid=fbb30b5d6cf8e164ed522e5082b49064&q=st.%20louis`
//         )
//         .then(response => {
//           state.Home.weather = {};
//           state.Home.weather.city = response.data.name;
//           state.Home.weather.temp = response.data.main.temp;
//           state.Home.weather.feelsLike = response.data.main.feels_like;
//           state.Home.weather.description = response.data.weather[0].main;
//           done();
//         })
//         .catch(err => console.log(err));
//     }
//   }
// });

// Api request
// axios
//   .get(`https://api.github.com/users/${YOUR_GITHUB_USERNAME}/repos`, {
//     headers: {
//       Authorization: `token ${YOUR_GH_TOKEN}`,
//     },
//   })
//   .then((response) => console.log(response.data));

// Api endpoint
// {
//   headers: {
//     Authorization: `token ${YOUR_GH_TOKEN}`;
//   }
// }
