import { structureData } from "../../database/structure.js";
import { setRandomArrayElement } from "../../scripts/actions.js";
import { Carousel } from "../Carousel/Carousel.js";
import { SectionTitle } from "../SectionTitle/SectionTitle.js";

export const AboutMe = {
  create: ({data}) => {},
  duration: 10000,
  interval: 1000,
}

AboutMe.create = ({data}) => {
  AboutMe.self = document.createElement("section");
  AboutMe.self.id = "about_me";
  
  AboutMe.occupiedArea = document.createElement("div");
  AboutMe.occupiedArea.classList.add("occupied_area");
  AboutMe.self.appendChild(AboutMe.occupiedArea)

  const title = SectionTitle.create({
    order: data.order,
    title: data.title,
  })
  AboutMe.occupiedArea.appendChild(title);

  AboutMe.personalInfo = document.createElement("div");
  AboutMe.personalInfo.classList.add("personal_info");
  AboutMe.occupiedArea.appendChild(AboutMe.personalInfo);

  createCarousel(data.content.carousel);

  const profileImage = document.createElement("div");
  profileImage.classList.add("profile_image");
  AboutMe.personalInfo.appendChild(profileImage);

  const fallingWordsArea = document.createElement("div");
  fallingWordsArea.classList.add("falling_words");
  AboutMe.occupiedArea.appendChild(fallingWordsArea);

  fallingWordsAnimation(data.content.usedTools, AboutMe.duration);
  setInterval(() => {
    fallingWordsAnimation(data.content.usedTools, AboutMe.duration);
  }, AboutMe.interval);

  const content = document.createElement("div");
  content.classList.add("content");

  return AboutMe.self;
};

function createCarousel(data) {
  const carouselItems = [];
  for (const item of data) {
    const div = document.createElement("div");

    const itemTitle = document.createElement("span");
    itemTitle.textContent = item.title;
    div.appendChild(itemTitle);

    const itemText = document.createElement("p");
    itemText.textContent = item.text;
    div.appendChild(itemText);

    carouselItems.push(div);
  }

  const caroussel = new Carousel({
    objectArray: carouselItems,
    numberOfItemsToShow: 1,
    itemPresentationTime: 200000,
    previousButtonImg: structureData.icons.leftIcon,
    nextButtonImg: structureData.icons.rightIcon
  });
  AboutMe.personalInfo.appendChild(caroussel.create());
}

function fallingWordsAnimation(wordsArray, fallingDuration) {
  const fallingWords = AboutMe.self.querySelector(".falling_words");
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