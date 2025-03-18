import { openCurriculum } from "../../scripts/actions.js";

export const TopMenu = {
  create: ({options, showMenuIcon, hideMenuIcon}) => {},
  isMenuOpen: false,
  icons: {
    menu: {
      show: null,
      hide: null
    }
  }
};

TopMenu.create = ({options, showMenuIcon, hideMenuIcon}) => {
  TopMenu.options = options;
  TopMenu.icons.menu.show = showMenuIcon;
  TopMenu.icons.menu.hide = hideMenuIcon;

  TopMenu.self = document.createElement("div");
  TopMenu.self.id = "top_menu";

  TopMenu.occupiedArea = document.createElement("div");
  TopMenu.occupiedArea.classList.add("occupied_area");
  TopMenu.self.appendChild(TopMenu.occupiedArea);

  createLogo("D");

  createOptions();

  createToggleButton();

  return TopMenu.self;
}

function createToggleButton() {
  const toggleMenuButton = document.createElement("button");
  toggleMenuButton.addEventListener("click", () => {
    TopMenu.isMenuOpen = !TopMenu.isMenuOpen;
    buttonImage.src = TopMenu.isMenuOpen ? TopMenu.icons.menu.hide : TopMenu.icons.menu.show;
    const menu = TopMenu.self.querySelector(".menu");
    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  });
  toggleMenuButton.classList.add("toggle_menu");
  TopMenu.occupiedArea.appendChild(toggleMenuButton);

  const buttonImage = document.createElement("img");
  buttonImage.src = TopMenu.icons.menu.show;
  toggleMenuButton.appendChild(buttonImage);
}

function createLogo(acronym) {
  const borderArea = document.createElement("div");
  borderArea.classList.add("octagon_border");

  const octaconArea = document.createElement("div");
  octaconArea.classList.add("octagon");
  octaconArea.textContent = acronym;
  borderArea.appendChild(octaconArea);

  TopMenu.occupiedArea.appendChild(borderArea)
}

function createOptions() {
  const occupiedArea = TopMenu.self.querySelector(".occupied_area");

  const menuArea = document.createElement("nav");
  menuArea.classList.add("menu");
  menuArea.classList.add("hide");

  for (const option of TopMenu.options) {
    if (!option.showOnMenu) continue;

    const anchor = document.createElement("a");
    anchor.href = `#${option.href}`;

    const order = document.createElement("span");
    order.textContent = `${option.order}.`;
    anchor.appendChild(order);

    const text = document.createElement("span");
    text.textContent = `${option.title}`;
    anchor.appendChild(text);

    menuArea.appendChild(anchor);
  }

  const curriculumButton = document.createElement("button");
  curriculumButton.addEventListener("click", openCurriculum)
  curriculumButton.textContent = "currículo";
  curriculumButton.classList.add("curriculum");
  menuArea.appendChild(curriculumButton);

  occupiedArea.appendChild(menuArea);

}

