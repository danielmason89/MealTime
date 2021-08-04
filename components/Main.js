import html from "html-literal";
import apple from "/icon/apple-brands.svg";
import googlePlay from "/icon/google-play-brands.svg";
import checkmark from "/icon/check-circle-regular.svg";
import tasty from "/icon/drumstick-bite-solid.svg";
import full from "/icon/battery-full-solid.svg";
import omnivore from "/images/ala--lHZUkiWM74-unsplash.jpg";
import veggie from "/images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg";
import meattie from "/images/jon-tyson-kctt4tL1dkE-unsplash.jpg";
import * as views from "./views";
export default (st) => `${views[st.views](st)}
`;


