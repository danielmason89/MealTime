import html from "html-literal";
export default () => html `<main>
<section class="hero flex">
    <h2>Meals Simplified.</h2>
    <h3>Begin enjoying your meals more with Mealtime</h3>
    <button>app store</button>
    <button>google play</button>
    <!-- included images for visual impact -->
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
        A Time Saving, Meal-preparing Platform
    </header>
    <div id="recipes-carousel" class="carousel slide" data-ride="false">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <h2 class="recipe-text">Vegan. We've got the best and brightest to leave you feeling better about what your eating.</h2>
                <img class="recipe-image" src="" alt="">
                <em>Healthy Tomorrow</em>
            </div>
            <div class="carousel-item">
                <h2 class="recipe-text">Protein-focus. Protein orientated meals, to help from workout to workout</h2>
                <img class="recipe-image" src="" alt="">
                <em>Beefier Tomorrow</em>
            </div>
            <div class="carousel-item">
                <h2 class="recipe-text">The best of both world. get your veggie with that protein</h2>
                <img class="recipe-image" src="" alt="">
                <em>Omnivore</em>
            </div>
        </div>

        <a class="carousel-control-prev" href="#recipe-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#recipe-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
    </div>
</section>

<section id="contact">contact/call to action section/section>
</main>`;
