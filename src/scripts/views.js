import { setGreetings, setRandomArrayElement, setLastName } from "./actions.js"

export function toggleTopMenu(state) {
  state.isTopMenuOpen = !state.isTopMenuOpen;
  const topMenu = document.querySelector(".top_menu");
  if (state.isTopMenuOpen) {
    topMenu.classList.remove("hide");
  } else {
    topMenu.classList.add("hide");
  }
}

export function handleGreeting() {
  const greeting = document.querySelector(".greeting");
  greeting.textContent = setGreetings();
}

export function handleLastName(fullName) {
  const lastName = document.querySelector(".last_name");
  lastName.textContent = setLastName(fullName);

}

export function handleJoke(jokes) {
  const joke = document.querySelector(".joke");
  joke.textContent = setRandomArrayElement(jokes)
}

export function fallingWordsAnimation(wordsArray, fallingDuration) {
  const fallingWords = document.querySelector(".falling_words");
  const span = document.createElement('span');
  span.classList.add("matrix-char");
  span.textContent = setRandomArrayElement(wordsArray);
  const randomPosition = Math.floor(Math.random() * 90) + 5;
  span.style.left = `${randomPosition}%`;
  fallingWords.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, fallingDuration);
}

export function createExperienceMenu(selectedCompany, companies) {
  const experienceNavBar = document.querySelector(".experience_nav_bar");
  for (let company of companies) {
    const button = document.createElement("div");
    button.classList.add("experience_item");
    button.id = company.alias
    const itemClass = selectedCompany.alias === company.alias ? "selected_item" : "select_item";
    button.classList.add(itemClass);

    button.addEventListener("click", () => {
      selectedCompany = updateExperienceData(company, selectedCompany, companies);
      updateExperienceMenu(selectedCompany)
    });

    const mark = document.createElement("div");

    button.appendChild(mark);

    const text = document.createElement("p");
    text.textContent = company.alias;
    button.appendChild(text);

    experienceNavBar.appendChild(button);
  }
}

export function updateExperienceMenu(selectedCompany) {
  const experienceNavBar = document.querySelectorAll('.experience_nav_bar>div');
  experienceNavBar.forEach(item => {
    if (item.id === selectedCompany.alias) {
      item.classList.remove("select_item");
      item.classList.add("selected_item");
    } else {
      item.classList.remove("selected_item");
      item.classList.add("select_item");    
    }
  });
}

export function updateExperienceData(company, selectedCompany, companies) {
  selectedCompany = companies.find(item => item.alias === company.alias);

  const name = document.querySelector(".company");
  name.textContent = selectedCompany.name;

  const position = document.querySelector(".position");
  position.textContent = selectedCompany.position;

  const activities = document.querySelector(".activities");
  activities.innerHTML = "";
  for (let act of selectedCompany.activities) {
    const div = document.createElement("div");
    div.classList.add("activity");
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#00ff00" viewBox="0 0 256 256"><path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path></svg>`;

    const text = document.createElement("span");
    text.textContent = act;
    div.appendChild(text);
    activities.appendChild(div);
  }

  const projects = document.querySelector(".projects");
  projects.innerHTML = "";
  for (let proj of selectedCompany.projects) {
    const div = document.createElement("div");
    div.classList.add("project");
    div.textContent = proj;
    projects.appendChild(div);
  }
  return selectedCompany
}

export function createCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const bg = document.createElement("div");
  bg.classList.add("background");
  card.appendChild(bg);

  const img = document.createElement("img");
  img.src = `src/assets/project_images/${project.slug}-bg.jpeg`;
  img.alt = project.name.toLowerCase();
  bg.appendChild(img);

  const details = document.createElement("div");
  details.classList.add("details");
  card.appendChild(details);

  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = project.name;
  details.appendChild(name);

  const excerpt = document.createElement("div");
  excerpt.classList.add("excerpt");
  details.appendChild(excerpt);

  const excerptText = document.createElement("p");
  excerptText.classList.add("text");
  excerptText.textContent = project.excerpt;
  excerpt.appendChild(excerptText);

  const seeMore = document.createElement("button");
  seeMore.id = project.slug;
  seeMore.textContent = "VER MAIS";
  details.appendChild(seeMore);
  return card;
}

export function createSeatedItem(item) {
  const seatedItems = document.createElement("div");
  seatedItems.classList.add("seated_items");
  seatedItems.style.left = String(item.left) + "%";
  seatedItems.style.bottom = String(item.bottom) + "%";
  seatedItems.style.backgroundImage = `url(src/assets/icons/${item.name.toLocaleLowerCase()}-logo-duotone.svg)`;
  seatedItems.addEventListener("click", () => switchContactWay(state.contacts, item.name, item.url));
  return seatedItems;
}