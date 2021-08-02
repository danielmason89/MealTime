import html from "html-literal";
export default () => html `
<nav id ="navbar">
    <h1 id="logo"><a href="#">Mealtime</a></h1>
    <ul class="nav-links">
        <li><a href="../recipes.html">Recipes</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
    <div class="burger">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
    </div>
</nav>
`;
