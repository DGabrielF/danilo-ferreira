import { SectionTitle } from "../SectionTitle/SectionTitle.js";

export const Contacts = {
  create: ({data}) => {},
}

Contacts.create = ({data}) => {
  Contacts.data = data;
  
  Contacts.self = document.createElement("section");
  Contacts.self.id = "contacts";

  Contacts.occupedArea = document.createElement("div");
  Contacts.occupedArea.classList.add("occuped_area");
  Contacts.self.appendChild(Contacts.occupedArea);
  
  const title = SectionTitle.create({
    order: Contacts.data.order,
    title: Contacts.data.title,
  })
  Contacts.occupedArea.appendChild(title);

  Contacts.content = document.createElement("div");
  Contacts.content.classList.add("content");
  Contacts.occupedArea.appendChild(Contacts.content);

  createEndText();

  createAnimation();

  return Contacts.self;
}

function createEndText() {
  const text = document.createElement("p");
  text.classList.add("end_text");
  text.textContent = Contacts.data.content.text;
  Contacts.content.appendChild(text);
};

function createAnimation() {
  Contacts.animationArea = document.createElement("div");
  Contacts.animationArea.classList.add("ferris_wheel");

  const arrayWithPosition = [...Contacts.data.content.contacts];
  setElementsPosition(arrayWithPosition);
  arrayWithPosition.forEach(item => {
    const seatedItems = createSeatedItem(item);
    Contacts.animationArea.appendChild(seatedItems);
  })

  Contacts.content.appendChild(Contacts.animationArea);
}

function setElementsPosition(arrayWithPosition) {
  const TOTAL = 100;
  arrayWithPosition.map((item, index) => {
    const angle = index * 2*Math.PI/ arrayWithPosition.length
    item.left = Math.floor(TOTAL/2*(1+Math.cos(angle)))
    item.bottom = Math.floor(TOTAL/2*(1+Math.sin(angle)))
  })
}

function createSeatedItem(item) {
  const seatedItems = document.createElement("div");
  seatedItems.classList.add("seated_items");
  seatedItems.style.left = String(item.left) + "%";
  seatedItems.style.bottom = String(item.bottom) + "%";
  seatedItems.style.backgroundImage = `url(src/assets/icons/${item.name.toLocaleLowerCase()}-logo-duotone.svg)`;
  seatedItems.addEventListener("click", () => switchContactWay(state.contacts, item.name, item.url));
  return seatedItems;
}

function switchContactWay(contacts, key, link) {
  if (key.toLowerCase() === "telefone" || key.toLowerCase() === "whatsapp") {
    chatOnWhatsapp(contacts)
  } else if  (key.toLowerCase() === "email") {
    sendEmail(contacts, "Finalmente te encontrei", `${setGreetings()}, estava dando uma olhada no seu portfólio, fiquei muito interessa e resolvi entrar em contato. Gostaria de ...`)
  } else {
    window.open(link, "_blank")
  }
}