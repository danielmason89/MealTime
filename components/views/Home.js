import html from "html-literal";
import apple from "/icon/apple-brands.svg";
import googlePlay from "/icon/google-play-brands.svg";
import checkmark from "/icon/check-circle-regular.svg";
import tasty from "/icon/drumstick-bite-solid.svg";
import full from "/icon/battery-full-solid.svg";
import omnivore from "/images/ala--lHZUkiWM74-unsplash.jpg";
import veggie from "/images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg";
import meattie from "/images/jon-tyson-kctt4tL1dkE-unsplash.jpg";
export default () => html`
<main>

    <section class="hero flex">
        <h2>Meals Simplified.</h2>
        <h3>Begin enjoying your time more with Mealtime</h3>
        <div id="btn-container">
            <button class="button1"><img id="button-image" src="${apple}" alt="apple-app-icon" />Download</button>
            <button class="button2"><img id="button-image" src="${googlePlay}"
                    alt="google-play-icon" />Download</button>
        </div>
    </section>

    <section class="features">
        <header>
            <h2>A Time Saving, Meal-preparing Platform</h2>
        </header>
        <div id="feature">
            <figure class="feature-container">
                <img class="feature-svg" src="${checkmark}" alt="checkmark">
                <figcaption class="feature-title feature-text">
                    <h3 class="feature-title">Easy to Navigate.</h3>
                    <p class="feature-text">So easy to use, you'll trust your child to choose</p>
                </figcaption>
            </figure>
            <figure class="feature-container">
                <img class="feature-svg" src="${tasty}" alt="tasty">
                <figcaption>
                    <h3 class="feature-title">Humble & Tasty recipes.</h3>
                    <p class="feature-text">We take the effort to showcase everyday meals</p>
                </figcaption>
            </figure>
            <figure class="feature-container">
                <img class="feature-svg" src="${full}" alt="feeling-full">
                <figcaption>
                    <h3 class="feature-title">Guaranteed to feel full.</h3>
                    <p class="feature-text">Spend time better, feeling nourished to do other things</p>
                </figcaption>
            </figure>
        </div>
    </section>

    <section id="food">
        <header class="food-header">
            <h2>A chance to save time in the kitchen</h2>
            <h3>Choose any recipe from chicken quesadilla,<br /> to pasta aglio olio, and smash burgers</h3>
        </header>
    </section>

    <section id="diets">
        <div class="carousel slideshow-container">
            <div class="carouselItem carouselItemVisible">
                <h2 class="text">Vegan. The best and brightest to leave you feeling better.</h2>
                <img src="${veggie}" />
                <p class="text">Healthy Tomorrow</p>
            </div>

            <div class="carouselItem">
                <h2 class="text">Protein-focus. Protein orientated meals, to help from workout to workout</h2>
                <img src="${meattie}" />
                <p class="text">Beefier Tomorrow</p>
            </div>

            <div class="carouselItem">
                <h2 class="text">The best of both world. get your veggie with that protein</h2>
                <img src="${omnivore}" />
                <p class="text">Omni-conscious</p>
            </div>

            <div class="carouselActions">
                <button id="carouselBtnPrev" class="prev" aria-label="previous-slide">
                    <</button> <button id="carouselBtnNex" class="next" aria-label="next-slide">>
                </button>
            </div>
        </div>
    </section>

    <section id="cta">
        <header class="cta-header">
            <h3>Discover ways to get time back from the Kitchen.</h3>
        </header>
        <div id="btn-container">
            <button class="button1"><img id="button-image" src="${apple}" alt="apple-app-icon" />Download</button>
            <button class="button2"><img id="button-image" src="${googlePlay}" alt="google-play-icon" />
                Download</button>
    </section>
</main>`;
