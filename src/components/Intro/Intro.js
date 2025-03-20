import { setRandomArrayElement } from "../../scripts/actions.js";

export const Intro = {
  create: ({data, fullName}) => {},
};

Intro.create = ({data, fullName}) => {
  Intro.data = data;
  Intro.self = document.createElement("section");
  Intro.self.id = "intro";

  const occupiedArea = document.createElement("div");
  occupiedArea.classList.add("occupied_area");
  Intro.self.appendChild(occupiedArea);
  
  const greeting = document.createElement("p");
  greeting.classList.add("greeting");
  greeting.textContent = `${setGreetings()}, meu nome é`;
  occupiedArea.appendChild(greeting);  

  const name = document.createElement("h1");
  name.classList.add("name");
  greeting.appendChild(name);

  const firstName = document.createElement("span");
  firstName.textContent = setName(fullName, 0);
  name.appendChild(firstName);

  const lastName = document.createElement("span");
  lastName.classList.add("last_name");
  lastName.textContent = setName(fullName);
  setInterval(() => {
    lastName.textContent = setName(fullName);
  }, 10000);
  name.appendChild(lastName);

  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  occupiedArea.appendChild(subtitle);

  const joke = document.createElement("span");
  joke.classList.add("joke")
  joke.textContent = setRandomArrayElement(data.content.jokes);
  setInterval(() => {
    joke.textContent = setRandomArrayElement(data.content.jokes);
  }, 10000);
  subtitle.appendChild(joke);

  const excerpt = document.createElement("span");
  excerpt.classList.add("excerpt");
  excerpt.textContent = Intro.data.content.excerpt;
  occupiedArea.appendChild(excerpt);

  return Intro.self;
}

function setGreetings() {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

function setName(fullName, position) {
  const fullNameArray = fullName.split(" ");

  if (fullNameArray[position]) {
    return fullNameArray[position]
  } else {
    while (true) {
      const nextName = setRandomArrayElement(fullNameArray)
      if (nextName.length >= 3 && nextName != fullNameArray[0]){
        return `${nextName}.`
      }
  }

  }
}