export const SectionTitle = {
  create: ({order, title}) => {},
}

SectionTitle.create = ({order, title}) => {
  const section = document.createElement("div");
  section.classList.add("section_title");

  const head = document.createElement("h3");
  section.appendChild(head);
  
  const number = document.createElement("span");
  number.textContent = `${order}. `;
  head.appendChild(number);
  
  const text = document.createElement("span");
  text.textContent = `${title}`;
  head.appendChild(text);
  
  const line = document.createElement("span");
  line.classList.add("horizontal_line");
  section.appendChild(line);
  
  return section;
};