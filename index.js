// import food from "./icon/mealTime.svg";
import { Nav, Main, Footer } from "./components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
const API_KEY = process.env.API_KEY;

const router = new Navigo(window.location.origin);

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

  // Navbar transition functionality
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

  // Slide show functionality
  if (st.view === "Home") {
    let slidePosition = 0;
    const slides = document.getElementsByClassName("carouselItem");
    const totalSlides = slides.length;

    const updateSlidePosition = () => {
      for (let slide of slides) {
        slide.classList.remove("carouselItemVisible");
        slide.classList.add("carouselItemHidden");
      }
      slides[slidePosition].classList.add("carouselItemVisible");
    };

    const moveToPrevSlide = () => {
      if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
      } else {
        slidePosition--;
      }
      updateSlidePosition();
    };

    const moveToNexSlide = () => {
      if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
      } else {
        slidePosition++;
      }
      updateSlidePosition();
    };

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
  }

  if (st.view === "Recipes") {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=taco&diet=Pescetarian&addRecipeInformation=true&instructionsRequired/posts`
      )
      .then(response => {
        state.Recipes.post = {};
        state.Recipes.post.data = response.data.results[0].spoonacularSourceUrl;
        console.log("data from store", state.Recipes.post.data);
      });
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

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();
