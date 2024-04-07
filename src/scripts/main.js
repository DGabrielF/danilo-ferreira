import { handleGreeting, handleJoke, handleLastName, toggleTopMenu, fallingWordsAnimation, updateExperienceData, createExperienceMenu } from "./views.js"
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
  },
  companies: [
    {
      alias: "LABCMI",
      name: "Liga Álvaro Bahia Contra a Mortalidade Infantil",
      position: "Trainee de Pesquisa e Desenvolvimento",
      activities: [
        "Organização do banco de dados",
        "Transição do banco de dados de excel para o Firebase Firestore",
        "Sistema para leitura de e-mails, download de notas fiscais e extração de dados",
        "Análises estatísticas",
        "Sistema para geração de relatórios",
        "Avaliação de falhas",
        "Projetos de melhoria de processos"
      ],
      projects: [
        "NIX",
        "COCITE",
        "TÁCITA",
        "Curso de aperfeiçoamento"
      ]
    },
    {
      alias: "Individuais",
      name: "Projetos Pessoais",
      position: "Desenvolvedor Frontend",
      activities: [
        "Criação de estruturas HTML",
        "Estilização páginas web com CSS",
        "Comportamento dinâmico de páginas usando JavaScript",
        "Gerenciamento de estados",
        "Gestão do ciclo de vida de elementos",
      ],
      projects: [
        "Curriculo",
        "Jogo da memória",
        "Formulário de CEP"
      ]
    },
  ],
  selectedCompany: {},

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


  state.selectedCompany = state.companies[0]
  updateExperienceData(state.selectedCompany, state.selectedCompany, state.companies)
  createExperienceMenu(state.selectedCompany, state.companies);
}

init();








