import { structureData } from "../../database/structure.js";
import { ProjDetail } from "../Projects/ProjDetail/ProjDetail.js";
import { SectionTitle } from "../SectionTitle/SectionTitle.js";

export const Experience = {
  create: ({data, projects}) => {},
  contentViews: {
    company: null,
    position: null,
    date: null,
    activities: null,
    projects: null,
  }
}

Experience.create = ({data, projects}) => {
  Experience.data = data;
  Experience.projects = projects;
  Experience.self = document.createElement("section");
  Experience.self.id = "experience",

  Experience.occupiedArea = document.createElement("div");
  Experience.occupiedArea.classList.add("occupied_area");
  Experience.self.appendChild(Experience.occupiedArea)
  const title = SectionTitle.create({
    order: Experience.data.order,
    title: Experience.data.title,
  });
  Experience.occupiedArea.appendChild(title);

  Experience.container = document.createElement("div");
  Experience.container.classList.add("container");
  Experience.occupiedArea.appendChild(Experience.container);

  createSideMenu();
  updateSideMenu(Experience.data.content.companies[0]);

  createContent();
  updateContent(Experience.data.content.companies[0]);
  
  return Experience.self;
};

function createSideMenu() {
  const sideMenu = document.createElement("nav");
  sideMenu.classList.add("nav_bar");
  for (const company of Experience.data.content.companies) {
    const div = document.createElement("div");
    div.addEventListener("click", () => {
      updateSideMenu(company);
      updateContent(company);
    });
    div.classList.add("experience_item");
    div.classList.add("select_item");
    div.id = company.alias; 

    const addon = document.createElement("div");
    div.appendChild(addon);

    const text = document.createElement("span");
    text.textContent = company.alias;
    div.appendChild(text);

    sideMenu.appendChild(div);

  }
  Experience.container.appendChild(sideMenu);
};

function updateSideMenu(selectedCompany) {
  const experienceNavBar = Experience.self.querySelectorAll('.nav_bar>div');
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

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  
  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);  
  Experience.contentViews.company = document.createElement("div");
  Experience.contentViews.company.classList.add("company");
  header.appendChild(Experience.contentViews.company);
  Experience.contentViews.position = document.createElement("div");
  Experience.contentViews.position.classList.add("position");
  header.appendChild(Experience.contentViews.position);
  
  const period = document.createElement("div");
  period.classList.add("period");
  content.appendChild(period);  
  Experience.contentViews.date = document.createElement("div");
  Experience.contentViews.date.classList.add("dateSpan");
  period.appendChild(Experience.contentViews.date); 
  
  const line1 = document.createElement("div");
  line1.classList.add("horizontal_line");
  content.appendChild(line1);
  
  Experience.contentViews.activities = document.createElement("div");
  Experience.contentViews.activities.classList.add("activities");
  content.appendChild(Experience.contentViews.activities);
  
  const line2 = document.createElement("div");
  line2.classList.add("horizontal_line");
  content.appendChild(line2);
  
  Experience.contentViews.projects = document.createElement("div");
  Experience.contentViews.projects.classList.add("projects");
  content.appendChild(Experience.contentViews.projects);
  
  Experience.container.appendChild(content);
};

function updateContent(company) {
  for (const attribute in company) {
    switch (attribute) {
      case "name":
        Experience.contentViews.company.textContent = company.name        
        break;
      case "position":
        Experience.contentViews.position.textContent = company.position        
        break;
      case "date":
        Experience.contentViews.date.textContent = `${company.date.start} - ${company.date.end}`       
        break;
      case "activities":
        Experience.contentViews.activities.innerHTML = ""
        for (const activity of company.activities) {
          const div = document.createElement("div");
          div.classList.add("activity");
          div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#00ff00" viewBox="0 0 256 256"><path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path></svg>`;
      
          const text = document.createElement("span");
          text.textContent = activity;
          div.appendChild(text);

          Experience.contentViews.activities.appendChild(div)      
        }
        break;
      case "projects":
        Experience.contentViews.projects.innerHTML = "";
        for (const project of company.projects) {
          const div = document.createElement("div");
          div.addEventListener("click", () => {
            const foundProject = Experience.projects.find(item => item.slug === project.toLowerCase());
            ProjDetail.update(foundProject);
            ProjDetail.show();
          })
          div.classList.add("project");
          
          const text = document.createElement("span");
          text.textContent = project;
          div.appendChild(text);

          Experience.contentViews.projects.appendChild(div)      
        }
        break;
      default:
        break;
    }
  }
}