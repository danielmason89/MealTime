import html from "html-literal";
import facebook from "../icon/facebook.svg";
import twitter from "../icon/twitter.svg";
import instagram from "../icon/instagram.svg";
export default () => html`
  <footer>
    <div class="footer-wrapper">
      <h5><a href="#home">Mealtime</a>&copy;2021</h5>
      <ul>
        <li>
          <a href="#" title="twitter-social-media"
            ><img src="${twitter}" alt="twitter-social-media"
          /></a>
        </li>
        <li>
          <a href="#" title="facebook-social-media"
            ><img src="${facebook}" alt="facebook-social-media"
          /></a>
        </li>
        <li>
          <a href="#" title="instagram-social-media"
            ><img src="${instagram}" alt="instagram-social-media"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
`;
