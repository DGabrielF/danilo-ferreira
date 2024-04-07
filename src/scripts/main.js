import { handleGreeting, handleJoke, handleLastName, toggleTopMenu, fallingWordsAnimation } from "./views.js"
const state = {
  isTopMenuOpen: false,
  fullName: "Danilo Gabriel Fagundes de Oliveira Ferreira",
  jokes: [
    "Aprendiz de mago.",
    "Aspirante à toque de Midas.",
    "Pokemon em evolução.",
    "Comece onde está.",
    "Use o que você tem.",
    "Faça o que você pode.",
    "Uma metamorfose ambulante...",
    "Que tal um pouco de alquimia?",
    "O obstáculo é o caminho!",
    "Não existe atalhos no mundo ninja..."
  ],
  usedTools: [
    "Smtplib",
    "Tkinter",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Python",
    "Firestore",
    "Firestorage",
    "Firebase",
    "API",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Git",
    "Github"
  ],
  fallingAnimation: {
    interval: 1000,
    duration: 10000,
  }
}

function init() {
  const topMenuIcon = document.querySelector(".menu_icon");
  topMenuIcon.addEventListener("click", e => toggleTopMenu(state));

  handleGreeting();

  handleLastName(state.fullName)
  setInterval(() => handleLastName(state.fullName), 7900);

  handleJoke(state.jokes)
  setInterval(() => handleJoke(state.jokes), 9900);
  
  fallingWordsAnimation(state.usedTools, state.fallingAnimation.duration)
  setInterval(() => {
    fallingWordsAnimation(state.usedTools, state.fallingAnimation.duration);
  }, state.fallingAnimation.interval)
}

init();


