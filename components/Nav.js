import html from "html-literal";
export default links => html`
  <nav id="navbar">
    <h1 id="logo"><a href="/Home" data-navigo>MealTime</a></h1>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
    <div class="burger">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </div>
  </nav>
`;
