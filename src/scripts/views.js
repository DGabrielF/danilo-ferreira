import { setGreetings, setRandomArrayElement, setLastName, switchContactWay } from "./actions.js"
import { state } from "./main.js"

export function toggleTopMenu() {
  state.isOpen.topMenu = !state.isOpen.topMenu;
  const topMenu = document.querySelector(".top_menu");
  if (state.isOpen.topMenu) {
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

export function createExperienceMenu() {
  const experienceNavBar = document.querySelector(".experience_nav_bar");
  for (let company of state.companies) {
    const button = document.createElement("div");
    button.classList.add("experience_item");
    button.id = company.alias
    const itemClass = state.selected.company.alias === company.alias ? "selected_item" : "select_item";
    button.classList.add(itemClass);

    button.addEventListener("click", () => {
      updateExperienceData(state, company.alias);
      updateExperienceMenu(state.selected.company)
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

export function updateExperienceData(state, alias) {
  state.selected.company = state.companies.find(item => item.alias === alias);

  const name = document.querySelector(".company");
  name.textContent = state.selected.company.name;

  const position = document.querySelector(".position");
  position.textContent = state.selected.company.position;

  const activities = document.querySelector(".activities");
  activities.innerHTML = "";
  for (let act of state.selected.company.activities) {
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
  for (let proj of state.selected.company.projects) {
    const div = document.createElement("div");
    div.classList.add("project");
    div.textContent = proj;
    div.addEventListener("click", () => {
      state.isOpen.projectDetail = true;
      state.selected.project = state.projects.find(item => item.name.toLowerCase() === proj.toLowerCase());
      toggleProjectDetails(state)
      setProjectDetails(state)
    })
    projects.appendChild(div);
  }
}

export function createCard(project, state) {
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
  seeMore.addEventListener("click", () => {
    state.isOpen.projectDetail = true;
    state.selected.project = project
    toggleProjectDetails(state)
    setProjectDetails(state)
  })
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

export function setProjectDetails(state) {
  const projectName = document.querySelector("#project_details .title");
  projectName.textContent = state.selected.project.name;
  const projectDescription = document.querySelector("#project_details .description");
  projectDescription.textContent = state.selected.project.excerpt;

  const goals = document.querySelector("#project_details .goals");
  goals.innerHTML = "";
  if (state.selected.project.goals) {
    addProjectGoals(state.selected.project.goals, goals);
  }

  const tools = document.querySelector("#project_details .tools");
  tools.innerHTML = "";
  if (state.selected.project.usedTools) {
    addUsedTools(state.selected.project.usedTools, tools);
  }

  const team = document.querySelector("#project_details .team");
  team.innerHTML = "";
  if (state.selected.project.team) {
    addTeamMembers(state.selected.project.team, team);
  }

}

function addProjectGoals(goalsArray, goals) {
  goalsArray.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goals.appendChild(li);
  });
}

function addUsedTools(usedToolsArray, tools) {
  usedToolsArray.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    tools.appendChild(li);
  });
}

function addTeamMembers(membersArray, team) {
  membersArray.forEach(member => {
    const li = document.createElement("li");
    const fullNameArray = member.name.split(" ");
    li.textContent = `${fullNameArray[0]} ${fullNameArray[fullNameArray.length - 1]}`;
    team.appendChild(li);
  });
}

export function toggleProjectDetails(state) {
  const fade = document.querySelector(".fade");
  const projectDetails = document.querySelector("#project_details");
  if (state.isOpen.projectDetail) {
    fade.classList.remove("hide");
    projectDetails.classList.remove("hide");
  } else {
    fade.classList.add("hide");
    projectDetails.classList.add("hide");
  }
}

export function toggleScrollTopButton() {
  var scrollTopButton = document.querySelector(".to_top");
  if (window.scrollY > 200) {
      scrollTopButton.style.display = "flex";
  } else {
      scrollTopButton.style.display = "none";
  }
}