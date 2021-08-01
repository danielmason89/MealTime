import html from "html-literal";
import apple from "../icon/apple-brands.svg";
import googlePlay from "../icon/google-play-brands.svg";
import omnivore from "../images/ala--lHZUkiWM74-unsplash.jpg";
import veggie from "../images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg";
import meattie from "../images/jon-tyson-kctt4tL1dkE-unsplash.jpg";
export default () => html `
<main>
<section class="hero flex">
    <h2>Meals Simplified.</h2>
    <h3>Begin enjoying your meals more with Mealtime</h3>
    <button class="button"><img id="button-image" src="${apple}" alt="apple-app-icon" /> Download</button>
    <button class="button"><img id="button-image" src="${googlePlay}" alt="google-play-icon" /> Download</button>
</section>

<section id="value">
    <header class="value-header">
        <h2>A chance to save time in the kitchen</h2>
        <h3>Choose any recipe from chicken quesadilla,<br /> to black bean burger, and smash burgers.</h3>
    </header>
    <card>
        <div>
            <h3>Easy to Navigate.</h3>
            <p>So easy to use, you'll trust your child to cook</p>
        </div>
        <div>
            <h3>Humble & Tasty recipes.</h3>
            <p>We take the effort to showcase everyday meals</p>
        </div>
        <div>
            <h3>Guaranteed to feel full.</h3>
            <p>Spend the time better, by feeling nourished to other things</p>
        </div>
    </card>
</section>


<section id="recipes">
    <header class="recipes-header">
       <h2>A Time Saving, Meal-preparing Platform</h2>
    </header>
  <!-- Slideshow container -->
  <div class="slideshow-container">
  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
<div class="numbertext"></div>
<p>Healthy Tomorrow</p>
    <img class="diet" src="${veggie}">
    <div class="text">Vegan. We've got the best and brightest to leave you feeling better about what your eating.</div>
  </div>

  <div class="mySlides fade">
   
<div class="numbertext"><p>Beefier Tomorrow</p></div>
    <img src="${meattie}"
style="width:100%">
    <div class="text">Protein-focus. Protein orientated meals, to help from workout to workout</div>
  </div>
  <div class="mySlides fade">
   
<figure class="numbertext"><p>Omnivore</p></figure>
    <img class="diet" src="${omnivore}">
    <h1 class="text" style="color:red;">The best of both world. get your veggie with that protein</h1>
  </div>

  <!-- Next and previous
  buttons -->
  <a class="prev">❮</a>
 
<a class="next">❯</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>

  <span class="dot" onclick="currentSlide(2)"></span>
 
<span class="dot" onclick="currentSlide(3)"></span>
</div>


     <!-- <a class="carousel-control-prev" href="#recipe-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#recipe-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span> -->
</section>



<section id="cta">
<h3>Find a way to get time back from the Kitchen.</h3>
<button class="button"><img id="button-image" src="${apple}" alt="apple-app-icon" /> Download</button>
    <button class="button"><img id="button-image" src="${googlePlay}" alt="google-play-icon" /> Download</button>
</section>
</main>`;


