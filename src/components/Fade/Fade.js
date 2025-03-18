export const Fade = {
  create: () => {},
  close: () => {},
  show: () => {},
};

Fade.create = () => {
  Fade.self = document.createElement("div");
  Fade.self.id = "fade";
  Fade.self.style.zIndex = 11;
  Fade.self.style.display = "none";
  Fade.self.addEventListener("click", () => Fade.close());

  return Fade.self;
};

Fade.close = () => {
  Fade.hide();
  const aboveElements = getAboveElements();

  if (aboveElements.length >= 0) {
    for (const element of aboveElements) {
      element.style.display = "none";
    }
  }
}

Fade.hide = () => {
  Fade.self.style.display = "none";
}

Fade.show = () => {
  Fade.self.style.display = "flex";
}

function getAboveElements(zIndex = Number(Fade.self.style.zIndex)) {  
  return ([...document.querySelectorAll("*")].filter( el => window.getComputedStyle(el).zIndex >= zIndex));
}