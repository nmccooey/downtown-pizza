import "../css/home.css";
import pizzaBackground from "../assets/img/pizza-background.jpg";

function loadHome() {
  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";
  homeContainer.innerHTML =
  `
  <h2 class="home-title">Fresh Brick Oven Pizza</h2>
  <p>Over 50 years of award winning pizza.</p>
  `;

  return homeContainer;
}

export default loadHome;

