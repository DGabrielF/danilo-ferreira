import { SectionTitle } from "../SectionTitle/SectionTitle.js";
import { ProjDetail } from "./ProjDetail/ProjDetail.js";

export const Projects = {
  create: ({data}) => {},
};

Projects.create = ({data}) => {
  Projects.data = data;
  
  Projects.self = document.createElement("section");
  Projects.self.id = "projects";

  Projects.occupiedArea = document.createElement("div");
  Projects.occupiedArea.classList.add("occupied_area");
  Projects.self.appendChild(Projects.occupiedArea);

  const title = SectionTitle.create({
    order: Projects.data.order,
    title: Projects.data.title,
  })
  Projects.occupiedArea.appendChild(title);

  Projects.container = document.createElement("div");
  Projects.container.classList.add("container");
  Projects.occupiedArea.appendChild(Projects.container)
  
  createSideMenu();
  updateSideMenu(Projects.data.content.types[0]);

  createContent();

  const detail = ProjDetail.create();
  Projects.self.appendChild(detail);

  return Projects.self;
};

function createSideMenu() {
  const sideMenu = document.createElement("nav");
  sideMenu.classList.add("nav_bar");
  for (const type of Projects.data.content.types) {
    const typeFound = Projects.data.content.projects.find(project => 
      project.type === type.slug
    )
    if (!typeFound) continue;

    const div = document.createElement("div");
    div.addEventListener("click", () => {
      updateSideMenu(type);
      updateContent(type);
    });
    div.classList.add("project_item");
    div.classList.add("select_item");
    div.id = type.slug; 

    const addon = document.createElement("div");
    div.appendChild(addon);

    const text = document.createElement("span");
    text.textContent = type.name;
    div.appendChild(text);

    sideMenu.appendChild(div);
  }
  Projects.container.appendChild(sideMenu);
};

function updateSideMenu(selectedProject) {
  const navBar = Projects.self.querySelectorAll('.nav_bar>div');
  navBar.forEach(item => {
    if (item.id === selectedProject.slug) {
      item.classList.remove("select_item");
      item.classList.add("selected_item");
    } else {
      item.classList.remove("selected_item");
      item.classList.add("select_item");    
    }
  });
};

function createContent() {
  Projects.content = document.createElement("div");
  Projects.content.classList.add("project_container");
  Projects.container.appendChild(Projects.content);

  Projects.area = document.createElement("div");
  Projects.area.classList.add("card_area");
  Projects.content.appendChild(Projects.area);

  for (const project of Projects.data.content.projects) {
    const card = createCard(project);
    if (!project.spotlight) {card.classList.add("hide")}
    Projects.area.appendChild(card);
  }  
};

function updateContent(selectedType) {
  const cards = Projects.area.querySelectorAll(".card");
  for (const card of cards) {
    if (card.dataset.type === selectedType.slug) {
      if (card.classList.contains("hide")) {
        card.classList.remove("hide");
      }
    } else {
      if (!card.classList.contains("hide")) {
        card.classList.add("hide");
      }
    }    
  } 
};

function createCard(project) {
  const card = document.createElement("div");
  card.dataset.type = project.type;
  card.classList.add("card")

  const background = document.createElement("div");
  background.classList.add("background");
  card.appendChild(background);

  const backgroundImage = document.createElement("img");
  backgroundImage.src = `src/assets/project_images/${project.slug}-bg.jpeg`;
  backgroundImage.alt = project.name.toLowerCase();
  background.appendChild(backgroundImage);

  const detail = document.createElement("div");
  detail.classList.add("details");
  card.appendChild(detail);
  
  const name = document.createElement("span");
  name.textContent = project.name;
  name.classList.add("name");
  detail.appendChild(name);
  
  const excerpt = document.createElement("div");
  excerpt.classList.add("excerpt");
  detail.appendChild(excerpt);
  
  const paragraph = document.createElement("p");
  paragraph.textContent = project.excerpt;
  paragraph.classList.add("text");
  excerpt.appendChild(paragraph);

  const button = document.createElement("button");
  button.textContent = "VER MAIS";
  button.addEventListener("click", () => {
    ProjDetail.update(project);
    ProjDetail.show();
  })
  button.dataset.key = project.slug;
  detail.appendChild(button);

  return card;
};