import "./css/style.css";
import initialLoad from "./modules/initial.js";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadAbout from "./modules/about.js";
import loadContact from "./modules/contact.js";

// Append fragment to DOM.
const content = document.querySelector("#content");
content.appendChild(initialLoad());

// Add event listener for company logo.
const companyLogo = document.querySelector(".company-logo");
companyLogo.addEventListener("click", function(){
  loadTab(loadHome);
})

// Add event listeners for each tab.
const tabs = document.querySelectorAll(".tab");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(event) {
    let tab = event.target.getAttribute("data-index");
    switch (tab) {
      case "home":
        loadTab(loadHome);
        break;
      case "menu":
        loadTab(loadMenu);
        break;
      case "about":
        loadTab(loadAbout);
        break;
      case "contact":
        loadTab(loadContact);
        break;
    }
  });
}

function loadTab(loadTabCallback) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(loadTabCallback());
}