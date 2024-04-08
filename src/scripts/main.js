import { chatOnWhatsapp, openCurriculum, setElementsPosition, switchContactWay } from "./actions.js";
import { handleGreeting, handleJoke, handleLastName, toggleTopMenu, fallingWordsAnimation, updateExperienceData, createExperienceMenu, createCard, createSeatedItem } from "./views.js"
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
  projects: [
    {
      "name": "NIX",
      "slug": "nix",
      "area": "professional",
      "spotlight": true,
      "excerpt": "Gerenciar materiais hospitalares utilizando uma interface mais amigável, reduzindo o risco de falhas na digitação, automatizar atividades rotineiras como verificação de email e preenchimento de planilhas.",
      "description": "Esta aplicação foi desenvolvida para otimizar e simplificar o processo de gestão de notas fiscais, atendendo a uma variedade de objetivos-chave. Utilizando uma abordagem centrada no cliente, combinada com análise detalhada de falhas, o projeto foi cuidadosamente desenhado e implementado utilizando uma variedade de ferramentas e tecnologias. Com o objetivo de reduzir significativamente o tempo gasto na atualização de planilhas e minimizar erros de digitação, a aplicação emprega recursos avançados de processamento de dados utilizando Python, incluindo bibliotecas como Numpy e Pandas. Além disso, a integração com um banco de dados gerenciado de forma eficiente permite um armazenamento seguro e acessível das informações relacionadas às notas fiscais. Para evitar que notas fiscais fiquem sem registro e facilitar sua localização, a aplicação utiliza uma combinação de técnicas de indexação e busca eficazes, proporcionando aos usuários uma maneira rápida e intuitiva de encontrar as informações necessárias. A interface do usuário foi desenvolvida com a biblioteca Tkinter, garantindo uma experiência fluida e amigável para os usuários finais. Além disso, a aplicação implementa funcionalidades de monitoramento do estado das notas fiscais, auxiliando os usuários na visualização e acompanhamento do fluxo de trabalho. A comunicação por email é automatizada através da biblioteca Smtplib, permitindo notificações instantâneas sobre atualizações importantes ou ações necessárias. Por fim, a documentação abrangente da aplicação garante que os usuários possam entender completamente suas funcionalidades e como utilizá-las de maneira eficaz, contribuindo para uma adoção suave e uma utilização otimizada. Em resumo, esta aplicação oferece uma solução abrangente e eficiente para simplificar o gerenciamento de notas fiscais, reduzindo o tempo e os esforços necessários, minimizando erros e proporcionando uma melhor visibilidade e controle sobre o processo.",
      "goals": [
        "Reduzir o tempo utilizado para atualizar planilhas",
        "Reduzir erros de digitação",
        "Evitar que notas fiscais ficassem sem registro",
        "Facilitar a localização de notas",
        "Auxiliar na visualização do estado das notas."
      ],
      "usedTools": [
        "Voz do cliente",
        "Análise de falhas",
        "Gerenciamento de banco de dados",
        "Ferramentas de priorização",
        "Desenho do projeto",
        "Python",
        "Numpy",
        "Pandas",
        "Tkinter",
        "Smtplib",
        "Firebase",
        "Documentação da aplicação"
      ],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"},
        {"name": "Jonatas Oliveira Cavalcante"}
      ]
    },
    {
      "name": "COCITE",
      "slug": "cocite",
      "area": "professional",
      "spotlight": true,
      "excerpt": "Maximizar a credibilidade do controle de temperatura dos equipamentos de resfriamento! Diagnósticos precisos, relatórios estatísticos e recomendações claras.",
      "description": "Desenvolvemos uma aplicação para elevar a credibilidade do controle de temperatura dos equipamentos frigoríficos, especialmente perante os órgãos fiscalizadores. Utilizando uma abordagem avançada, nossa solução requisita periodicamente dados em tempo real de um banco de dados de monitoramento, alimentado por sensores de temperatura conectados via wi-fi, permitindo um diagnóstico preciso do comportamento dos refrigeradores conforme as intervalos de temperatura permitidas. Com o poder da análise estatística e da elaboração de indicadores, nossa aplicação gera relatórios abrangentes, fornecendo não apenas dados estatísticos detalhados, mas também diagnósticos de comportamento e recomendações claras sobre as medidas a serem tomadas, caso necessário. Tudo isso é possível graças à integração perfeita de tecnologias avançadas, incluindo Python, Numpy, Pandas e Matplotlib. Prepare-se para elevar o padrão do controle de temperatura da sua empresa e enfrentar os desafios regulatórios com confiança!",
      "goals": [
        "Elevar a credibilidade do controle de temperatura da empresa em vista do órgão fiscalizador",
        "Requisitar periodicamente os dados de um banco de dados em tempo real de monitoramento",
        "Diagnosticar o comportamento dos refrigeradores de acordo com os intervalos de temperatura permitidas",
        "Geração de um relatório com dados estatísticos, diagnóstico de comportamento e atitudes a serem tomadas, caso necessário."
      ],
      "usedTools": [
        "Consumo de dados de API",
        "Padronização de documentos",
        "Análise estatística",
        "Elaboração de indicadores",
        "Python",
        "Numpy",
        "Pandas",
        "Matplotlib"
      ],
      "team": [
        {"name": "Fábio César"},
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"},
        {"name": "Gabriel Vita"}
      ]
    },
    {
      "name": "TÁCITA",
      "slug": "tacita",
      "area": "professional",
      "spotlight": false,
      "excerpt": "Realizar uma análise dos níveis de ruído a rotina nas UTI's Neonatais. Projeto que daria base para um estudo na relação de causa efeito do ruído em ocorrências com pacientes.",
      "description": "Desenvolvimento de dispositivos, que além de alertar com sinais visuais sobre a ultrapassagem de um nível configurado de ruído também enviam dados em tempo real para um InfluxDB. Software para fazer a conexão com o Grafana para apresentação dos dados em tempo real, geração de um banco de dados para estudo compontamental dos setores monitorados.",
      "goals": [
        "Mapear o sistema de monitoramento de ruído para replicação",
        "Replicar o dispositivo"
      ],
      "usedTools": [
        "Componentes eletrônicos",
        "Conexões eletrônicas",
        "Desenho técnico"
      ],
      "team": [
        {"name": "Fábio César"},
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"},
        {"name": "Gabriel Vita"}
      ]
    },
    {
      "name": "Treinamentos",
      "slug": "solidworkds",
      "area": "professional",
      "spotlight": false,
      "excerpt": "Iniciar um programa de capacitação interna. Com a intenção de atender as necessidades do setor e do Hospital.",
      "description": "Gerar material para treinamento",
      "goals": [
        "Iniciar um processo de treinamento interno",
        "Desenvolver modelos de peças de equipamentos para a impressora 3D"
      ],
      "usedTools": [
        "Desenho técnico",
        "Modelagem 3D"
      ],
      "team": [
        {"name": "Daniel Campos da Paixão"},
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 0,
      "id": "pokeCardGame",
      "name": "PokéCard Game",
      "slug":"pokecard",
      "area": "personal",
      "spotlight": true,
      "excerpt": "O projeto consiste em um de cartas, onde os dados são da PokeAPI (pokeapi.co), onde você pode duelar, ganhar moedas, comprar pacotes de cartas, escolher o melhor conjunto de cartas para ser o jogador mais bem classificado.",
      "githubUrl": "https://github.com/DGabrielF/pokemon-card-game/",
      "url": "https://dgabrielf.github.io/pokemon-card-game/",
      "usedTools": ["HTML", "CSS", "JavaScript", "Firebase", "API"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 1,
      "id": "pianoSimulator",
      "name": "Simulador de Piano",
      "slug":"piano",
      "area": "personal",
      "spotlight": false,
      "excerpt": "O projeto consiste em um simulador de teclado, aceitando toques e teclas.",
      "githubUrl": "https://github.com/DGabrielF/piano-simulator/",
      "url": "https://dgabrielf.github.io/piano-simulator/",
      "usedTools": ["HTML", "CSS", "JavaScript"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 2,
      "id": "wreckItRalph",
      "name": "Detona Ralph",
      "slug":"ralph",
      "area": "personal",
      "spotlight":true,
      "excerpt": "O projeto consiste em um jogo baseado no clássico Detona Ralph e possui sistemas de classificação, aumento da dificuldade e intervalos de descanso.",
      "githubUrl": "https://github.com/DGabrielF/wreck-it-ralph/",
      "url": "https://dgabrielf.github.io/wreck-it-ralph/",
      "usedTools": ["HTML", "CSS", "JavaScript", "Firebase"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 3,
      "id": "memoryGame",
      "name": "Jogo da Memória",
      "slug":"memory",
      "spotlight":false,
      "excerpt": "O projeto consiste em um jogo da memória que conta a quantidade de movimentos utilizados para completar o desafio.",
      "githubUrl": "https://github.com/DGabrielF/memory-game/",
      "url": "https://dgabrielf.github.io/memory-game/",
      "usedTools": ["HTML", "CSS", "JavaScript"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 4,
      "id": "mathHelper",
      "name": "Math Helper",
      "slug": "abaco",
      "area": "personal",
      "spotlight":false,
      "excerpt": "O projeto consiste em utilizar lógica de programação para resolver cálculos.",
      "githubUrl": "https://github.com/DGabrielF/math-helper/",
      "url": "https://dgabrielf.github.io/math-helper/",
      "usedTools": ["HTML", "CSS", "JavaScript"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 5,
      "id": "pokedex",
      "name": "Pokedex",
      "slug": "pokedex",
      "area": "personal",
      "spotlight":false,
      "excerpt": "O projeto consiste em consumir dados da PokeAPI (pokeapi.co) para criar uma aplicação de busca de informações sobre os pokemons.",
      "githubUrl": "https://github.com/DGabrielF/pokedex/",
      "url": "https://dgabrielf.github.io/pokedex/",
      "usedTools": ["HTML", "CSS", "JavaScript", "API"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 0,
      "id": "JsCep",
      "name": "Formulário de endereço",
      "slug": "cep",
      "area": "personal",
      "spotlight":true,
      "excerpt": "O projeto consistiu em criar uma interface com auto preenchimento de campos do endereço com base no CEP digitado.",
      "githubUrl": "https://github.com/DGabrielF/js-cep-challenge/",
      "siteUrl": "https://dgabrielf.github.io/js-cep-challenge/",
      "usedTools": ["HTML", "CSS", "JavaScript", "API"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 1,
      "id": "JsPhotoGrid",
      "name": "Disposição responsiva de imagens",
      "slug": "grid",
      "area": "personal",
      "spotlight":false,
      "excerpt": "Este é um projeto simples desenvolvido para demonstrar o uso do Display Grid, técnicas de responsividade e boas práticas de organização de projetos utilizando JavaScript, HTML e CSS.",
      "githubUrl": "https://github.com/DGabrielF/js-photo-grid-challenge/",
      "siteUrl": "https://dgabrielf.github.io/js-photo-grid-challenge/",
      "usedTools": ["HTML", "CSS", "JavaScript"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    },
    {
      "index": 2,
      "id": "JsCurrencyExchange",
      "name": "Consulta de compra e venda de moedas",
      "slug": "currency",
      "area": "personal",
      "spotlight":false,
      "excerpt": "O projeto consiste em consumir dados da AwesomeAPI (awesomeapi.com.br) para criar uma aplicação de conversão de moedas.",
      "githubUrl": "https://github.com/DGabrielF/js-currency-challenge/",
      "siteUrl": "https://dgabrielf.github.io/js-currency-challenge/",
      "usedTools": ["HTML", "CSS", "JavaScript", "API"],
      "team": [
        {"name": "Danilo Gabriel Fagundes de Oliveira Ferreira"}
      ]
    }
  ],  
  contacts: [
    {"name": "Whatsapp", "url": "5571993210108", "text": "(71) 99321-0108"},
    {"name": "Email", "url": "mailto:danilofof@gmail.com", "text": "danilofof@gmail.com"},
    {"name": "GitHub", "url": "http://github.com/DGabrielF", "text": "/DGabrielF"},
    {"name": "Linkedin", "url": "https://www.linkedin.com/in/danilo-ferreira-092457127", "text": "/danilo-ferreira-092457127"},
    {"name": "Facebook", "url": "https://www.facebook.com/danilo.ferreira.186590", "text": "/danilo.ferreira.186590"}
  ],

}

function init() {
  const topMenuIcon = document.querySelector(".menu_icon");
  topMenuIcon.addEventListener("click", () => toggleTopMenu(state));

  const btnCurriculum = document.querySelector(".curriculum");
  btnCurriculum.addEventListener("click",() => openCurriculum());

  handleGreeting();

  handleLastName(state.fullName)
  setInterval(() => handleLastName(state.fullName), 9900);

  handleJoke(state.jokes)
  setInterval(() => handleJoke(state.jokes), 9900);

  const btnWhatsapp = document.querySelector(".btn_chat_whatsapp");
  btnWhatsapp.addEventListener("click", () => chatOnWhatsapp(state.contacts))
  
  fallingWordsAnimation(state.usedTools, state.fallingAnimation.duration)
  setInterval(() => {
    fallingWordsAnimation(state.usedTools, state.fallingAnimation.duration);
  }, state.fallingAnimation.interval)


  state.selectedCompany = state.companies[0]
  updateExperienceData(state.selectedCompany, state.selectedCompany, state.companies)
  createExperienceMenu(state.selectedCompany, state.companies);

  const professional_container = document.querySelector(".project_container>.card_area")
  const personal_container = document.querySelector(".personal_projects>.card_area")

  state.projects.forEach( project => {
    const card = createCard(project);
    if (project.area === "professional") {
      professional_container.appendChild(card);
    } else if (project.area === "personal") {
      personal_container.appendChild(card);
    }    
  });

  const animationArea = document.querySelector(".ferris_wheel")
  const arrayWithPosition =  [...state.contacts];
  setElementsPosition(arrayWithPosition);
  arrayWithPosition.forEach( item => {
    const seatedItems = createSeatedItem(item);
    animationArea.appendChild(seatedItems)
  })
}

init();
