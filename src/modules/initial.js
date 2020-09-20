import loadFooter from "../components/footer/footer";
import loadHeader from "../components/header/header.js";
import loadHome from "../components/home/home.js";

function initialLoad() {
  let fragment = document.createDocumentFragment();

  // Header
  fragment.appendChild(loadHeader());

  // Main
  const main = document.createElement("main");
  main.appendChild(loadHome());
  fragment.appendChild(main);

  // Footer
  fragment.appendChild(loadFooter());

  return fragment;
}

export default initialLoad;