import { structureData } from "../../../database/structure.js";
import { Fade } from "../../Fade/Fade.js";

export const ProjDetail = {
  create: () => {},
  update: (project) => {},
  show: () => {},
  hide: () => {},
}

ProjDetail.create = () => {
  ProjDetail.self = document.createElement("div");
  ProjDetail.self.style.display = "none";
  ProjDetail.self.id = "project_details";

  const closeButton = document.createElement("button"); 
  closeButton.classList.add("close"); 
  ProjDetail.self.appendChild(closeButton);

  const buttonImage = document.createElement("img");
  buttonImage.addEventListener("click", ProjDetail.hide)
  buttonImage.src = structureData.icons.close;
  closeButton.appendChild(buttonImage);

  ProjDetail.title = document.createElement("h1");
  ProjDetail.self.appendChild(ProjDetail.title);

  const line1 = document.createElement("div");
  line1.classList.add("horizontal_line");
  ProjDetail.self.appendChild(line1);
  
  ProjDetail.description = document.createElement("p");
  ProjDetail.description.classList.add("description")
  ProjDetail.self.appendChild(ProjDetail.description);

  const line2 = document.createElement("div");
  line2.classList.add("horizontal_line");
  ProjDetail.self.appendChild(line2);

  ProjDetail.listArea = document.createElement("div");
  ProjDetail.listArea.classList.add("list_area");
  ProjDetail.self.appendChild(ProjDetail.listArea);

  createGoalItems();

  const line3 = document.createElement("span");
  line3.classList.add("horizontal_line");
  ProjDetail.listArea.appendChild(line3);

  const line4 = document.createElement("span");
  line4.classList.add("vertical_line");
  ProjDetail.listArea.appendChild(line4);

  createToolItems();
  
  const line5 = document.createElement("span");
  line5.classList.add("horizontal_line");
  ProjDetail.self.appendChild(line5);
  
  createTeamItems();

  return ProjDetail.self;
};

ProjDetail.update = (project) => {
  ProjDetail.title.textContent = project.name;
  ProjDetail.description.textContent = project.description;
  if (project.link) {
    const link = document.createElement("button");
    link.textContent = "Acessar";
    link.addEventListener("click", () => {
      window.open(project.link, "_blank")}
    );
    ProjDetail.description.appendChild(link);
  };
  ProjDetail.goalsArea.style.display = (project.goals) ? "flex" : "none";
  if (project.goals) updateGoalItems(project.goals);

  ProjDetail.toolsArea.style.display = (project.tools) ? "flex" : "none";
  if (project.tools) updateToolItems(project.tools);

  ProjDetail.teamArea.style.display = (project.team) ? "flex" : "none";
  if (project.team) updateTeamItems(project.team);
};

ProjDetail.show = () => {
  ProjDetail.self.style.display = "flex";
  Fade.show();
};

ProjDetail.hide = () => {
  Fade.close();
};

function createGoalItems() {
  ProjDetail.goalsArea = document.createElement("div");
  ProjDetail.goalsArea.classList.add("area");
  ProjDetail.listArea.appendChild(ProjDetail.goalsArea);

  const goalTitle = document.createElement(("h2"));
  goalTitle.textContent = "OBJETIVOS";
  ProjDetail.goalsArea.appendChild(goalTitle);
  
  ProjDetail.goalItems = document.createElement("ul");
  ProjDetail.goalsArea.appendChild(ProjDetail.goalItems);
}

function updateGoalItems(items) {
  if (!items) return;
  
  ProjDetail.goalItems.innerHTML = "";
  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    ProjDetail.goalItems.appendChild(listItem);    
  }
};

function createToolItems () {
  ProjDetail.toolsArea = document.createElement("div");
  ProjDetail.toolsArea.classList.add("area");
  ProjDetail.listArea.appendChild(ProjDetail.toolsArea);

  const toolTitle = document.createElement(("h2"));
  toolTitle.textContent = "FERRAMENTAS";
  ProjDetail.toolsArea.appendChild(toolTitle);
    
  ProjDetail.toolItems = document.createElement("ul");
  ProjDetail.toolsArea.appendChild(ProjDetail.toolItems);
};

function updateToolItems(items) {
  if (!items) return;
  
  ProjDetail.toolItems.innerHTML = "";
  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    ProjDetail.toolItems.appendChild(listItem);    
  }
};

function createTeamItems () {
  ProjDetail.teamArea = document.createElement("div");
  ProjDetail.teamArea.classList.add("area");
  ProjDetail.self.appendChild(ProjDetail.teamArea)
  
  const teamTitle = document.createElement(("h2"));
  teamTitle.textContent = "EQUIPE"
  ProjDetail.teamArea.appendChild(teamTitle);
    
  ProjDetail.teamItems = document.createElement("ul");
  ProjDetail.teamItems.classList.add("class_area");
  ProjDetail.teamArea.appendChild(ProjDetail.teamItems);
};

function updateTeamItems(items) {
  if (!items) return;

  const projectData = structureData.sections.find(item => item.href === "projects")
  const allProjectMembers = projectData.content.team;
  
  ProjDetail.teamItems.innerHTML = "";
  for (const item of items) {
    const member = allProjectMembers.find(member => member.slug === item);
    if (!member) continue;

    const listItem = document.createElement("li");
    listItem.classList.add("member_card");
    
    const image = document.createElement("img");
    image.classList.add("profile");
    image.src = `src/assets/team_images/${member.slug}.jpeg`;
    image.onerror = () => {
      image.src = structureData.icons.profileDefault;
    }
    setInterval(() => {
      const dice = Math.random();
      if (dice > 0.5) {
        image.src = `src/assets/team_images/${member.slug}-hover.jpg`;
        setTimeout(() => {
          image.src = `src/assets/team_images/${member.slug}.jpeg`;
        }, 1000);
      }
    }, 5000);
    listItem.appendChild(image);
    

    const detail = document.createElement("div");
    listItem.appendChild(detail);
    
    const name = document.createElement("span");
    const arrayName = member.fullName.split(" ");
    name.textContent = `${arrayName[0]} ${arrayName[arrayName.length - 1]}`
    detail.appendChild(name);
    
    if (member.links && member.links.length > 0) {
      const links = document.createElement("ul");
      links.classList.add("links");
      detail.appendChild(links);
      
      for (const link of member.links) {
        const item = document.createElement("li");
        item.addEventListener("click", () => {
          window.open(link.url, "_blank")
        })
        item.classList.add("link_item");
        links.appendChild(item);
        
        const logo = document.createElement("img");
        logo.src = structureData.icons[link.name.toLowerCase()];
        logo.alt = link.name
        item.appendChild(logo);

        const text = document.createElement("span");
        text.textContent = link.text;
        item.appendChild(text);

      }

    }



    // Adicionar os links de github, linked e portfólio
    ProjDetail.teamItems.appendChild(listItem);    
  }
};