export function loadMenupage() {
  const content = document.querySelector("#content");
  const page = document.createElement("div");

  page.classList.add("menuPage");

  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Our Menu";
  page.appendChild(title);

  const menu = {
    Pasta: [
      "Spaghetti & Meatballs",
      "Fettuccine Alfredo",
      "Penne Arrabbiata"
    ],
    "Main Courses": [
      "Chicken Parmigiana",
      "Lasagna della Casa",
      "Eggplant Parmigiana"
    ],
    Desserts: [
      "Classic Tiramisu",
      "Panna Cotta",
      "Cannoli"
    ]
  };

  for (const category in menu) {
    const dishTitle = document.createElement("h2");
    dishTitle.textContent = category;
    page.appendChild(dishTitle);

    menu[category].forEach((dish) => {
      const item = document.createElement("p");
      item.textContent = dish;
      page.appendChild(item);
    });
  }

  content.appendChild(page);
}
