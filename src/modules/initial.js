import loadFooter from "./footer";
import loadHeader from "./header";
import loadHome from "./home";

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