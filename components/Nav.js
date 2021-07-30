import html from "html-literal";
export default () => html `<header class="main-header">
<nav>
    <h1 id="logo"><a href="#home">Mealtime</a></h1>
    <ul class="nav-links">
        <li><a href="#value">Recipes</a></li>
        <li><a href="./about.html">About </a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
    <div class="burger">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
    </div>
</nav>
</header>`;
