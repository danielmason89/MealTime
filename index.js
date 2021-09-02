// import food from "./icon/mealTime.svg";
import { Nav, Main, Footer } from "./components";
import * as state from "/store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import "./env";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = new Navigo(window.location.origin);

//import slides from "./lib/functions/slideShow";
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
  router.updatePageLinks();
  addEventListener(st);
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
    const form = document.getElementById("myForm");

    form.addEventListener("submit", event => {
      event.preventDefault();
      form.style.display = "none";
      const inputList = event.target.elements;

      const mealTimeData = {
        meal: inputList.meal.value,
        time: inputList.time.value,
        diet: inputList.diet.value
      };

      axios
        .post(`${process.env.API}/recipes`, mealTimeData)
        .then(response => {
          console.log("response", response.data);
          // console.log("state", state.Recipes);
          state.Recipes.recipes.push(response.data);
          router.navigate("/Recipes");

          event.preventDefault();
        })
        .catch(error => {
          console.log("It puked", error);
        });
      // console.log(response.data);
    });

    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONTACULAR_KEY}&query=taco&diet=Pescetarian&addRecipeInformation=true&instructionsRequired/`
      )
      .then(response => {
        st.Recipes.post = {};
        st.Recipes.post.data = response.data.results[0].sourceUrl;
      })
      .catch(error => {
        console.log("It puked", error);
      });
  }
}

// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Recipes";

//     switch (page) {
//       case "Recipe":
//         axios
//           .get(
//             `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONTACULAR_KEY}&query=taco&diet=Pescetarian&addRecipeInformation=true&instructionsRequired/posts/recipes`
//           )
//           .then(response => {
//             state[page].recipes = response.data;
//             console.log(response.data);
//             done();
//             // console.log(response, state.Home.weather);
//           })
//           .catch(error => {
//             console.log("Need Instructions Please", error);
//             done();
//           });
//         break;

//       default:
//         done();
//     }
//   }
// });

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
