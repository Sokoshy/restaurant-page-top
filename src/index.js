import { loadHomepage } from "./homepage.js";
import { loadAboutpage } from "./aboutpage.js";
import { loadMenupage } from "./menupage.js"

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const content = document.querySelector("#content");

const tabs = [
  { button: home,  load: loadHomepage },   // la fonction SANS les ()
  { button: menu,  load: loadMenupage },
  { button: about, load: loadAboutpage },
];

tabs.forEach((tab) => {
  tab.button.addEventListener("click", () => {
    content.textContent = "";
    tab.load();
  });
});

loadHomepage();
