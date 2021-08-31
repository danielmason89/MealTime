// import food from "./icon/mealTime.svg";
import { Nav, Main, Footer } from "./components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";

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
  window.onscroll = () => {
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

    document.getElementById("carouselBtnNex").addEventListener("click", () => {
      moveToNexSlide();
    });

    document.getElementById("carouselBtnPrev").addEventListener("click", () => {
      moveToPrevSlide();
    });
  }

  // Spoontacular API
  if (st.view === "Recipes") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;

      const recipes = [];
      for (let input of inputList.recipes) {
        if (input.checked) {
          recipes.push(input.value);
        }
      }

      const requestData = {
        meal: inputList.meal.value,
        prepTime: inputList.prepTime.value,
        diet: inputList.diet.value
      };

      axios
        .post(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONTACULAR_KEY}&query=taco&diet=Pescetarian&addRecipeInformation=true&instructionsRequired/posts`, requestData)
        .then(response => {
          state.Recipes.post = {};
          console.log(response.data.results[0].sourceUrl);
          state.Recipes.post.data = response.data.results[0].sourceUrl;
          console.log("data from store", state.Recipes.post.data);
        })
        .catch(error => {
          console.log("It puked", error);
        });
    })

  }
}

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
