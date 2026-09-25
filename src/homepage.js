import  photo  from "./img/spaghetti-meatballs.jpg";
export function loadHomepage() {
  const content = document.querySelector("#content");
  const page = document.createElement("div");

  page.classList.add("homePage");

  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "La Tavola the best restaurant in the world";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Authentic Italian cuisine, made with love.";

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = photo;
  img.alt = "spaghetti meatballs";

  const welcomeTxt = document.createElement("p");
  welcomeTxt.classList.add("welcome-text");
  welcomeTxt.textContent = "Welcome to Tavola, where traditional Italian recipes meet fresh ingredients and a warm, welcoming atmosphere. Enjoy homemade pasta, delicious meatballs, and the authentic flavors of Italy.";

  page.appendChild(title);
  page.appendChild(tagline);
  page.appendChild(img);
  page.appendChild(welcomeTxt);
  content.appendChild(page);
}
