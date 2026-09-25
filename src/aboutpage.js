export function loadAboutpage() {
  const content = document.querySelector("#content");
  const page = document.createElement("div");

  page.classList.add("aboutPage");

  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "About La Tavola";

  const paragraphe1 = document.createElement("p");
  paragraphe1.classList.add("paragraphe");
  paragraphe1.textContent = "At Tavola, we believe that great food brings people together. Our kitchen is inspired by traditional Italian recipes, using fresh ingredients and simple, authentic flavors.";

  const paragraphe2 = document.createElement("p");
  paragraphe2.classList.add("paragraphe");
  paragraphe2.textContent = "From homemade pasta to classic Italian desserts, every dish is prepared with care and served with the warmth of a traditional Italian table.";

  page.appendChild(title);
  page.appendChild(paragraphe1);
  page.appendChild(paragraphe2);
  content.appendChild(page);
}
