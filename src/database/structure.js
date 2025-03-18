export const structureData = {
  icons: {
    listMenu: "src/assets/icons/menu.svg",
    close: "src/assets/icons/close.svg",
    leftIcon: "src/assets/icons/left.svg",
    rightIcon: "src/assets/icons/right.svg",
    github: "src/assets/icons/github-logo-duotone.svg",
    linkedin: "src/assets/icons/linkedin-logo-duotone.svg",
    profileDefault: "src/assets/icons/profile-default.svg",
  },
  sections: [
    {
      order: 0,
      href: "intro",
      title: "Introdução",
      showOnMenu: false,
      content: {
        excerpt: "Focado e instigado por desafios, encontrar uma forma de tornar processos, ferramentas, procedimentos e pessoas melhores, isso inclui especialmente a mim mesmo, é o meu 'PORQUÊ'.",
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
      }
    },
    {
      order: 1,
      href: "about_me",
      title: "Sobre mim",
      showOnMenu: true,
      content: {
        carousel: [
          {
            title: "Trainee",
            text: "setor de pesquisa e desenvolvimento Hospital Martagão Gesteira.",
            src: "",
          },
          {
            title: "Estágio",
            text: "desenho e otimização de projeto na Fluxotécnica.",
            src: "",
          },
          {
            title: "Formação",
            text: "grau de bacharel em engenharia química pela Universidade Federal da Bahia.",
            src: "",
          },
          {
            title: "Jiu Jistu",
            text: "faixa marrom e professor pela Fight Club CT Brotas.",
            src: "",
          },
          {
            title: "Reforço escolar",
            text: "dez anos de experiência dando aula de matemática, física e química.",
            src: "",
          },
          {
            title: "Programador FrontEnd",
            text: "Desenvolvimento de sites para ATA Tech.",
            src: "",
          },
          {
            title: "Operador Logístico",
            text: "Caixa, conferente, repositor, estoque pelo Tá Barato Demais.",
            src: "",
          },
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
        ]
      }
    },
    {
      order: 2,
      href: "experience",
      title: "Experiência",
      showOnMenu: true,
      content: {
        companies: [
          {
            alias: "LABCMI",
            name: "Liga Álvaro Bahia Contra a Mortalidade Infantil",
            position: "Trainee de Pesquisa e Desenvolvimento",
            date: {
              start: "02/02/2022",
              end: "02/02/2023"
            },
            activities: [
              "Organização de Banco de Dados",
              "Transição de Banco de Dados de Excel para o Firebase",
              "Automação de leitura de e-mails, download de notas fiscais e extração de dados",
              "Análises Estatísticas",
              "Geração Automática de Relatórios",
              "Análise de Falhas",
              "Projetos de Melhoria Contínua"
            ],
            projects: [
              "NIX",
              "COCITE",
              "TÁCITA",
              "Cursos"
            ]
          },
          {
            alias: "FREELANCES",
            name: "Freelances",
            position: "Desenvolvedor Frontend",
            date: {
              start: "02/02/2023",
              end: "Atual"
            },
            activities: [
              "Design voltado a UX",
              "Responsividade",
              "Consumo de APIs",
              "CRUD",
            ],
            projects: [
              "NBI",
            ]
          },
          {
            alias: "TA BARATO D+",
            name: "Tá Barato Demais",
            position: "Serviços Gerais",
            date: {
              start: "02/10/2024",
              end: "10/03/2025"
            },
            activities: [
              "Atendimento ao cliente",
              "Operador de caixa",
              "Operador de máquinas",
              "Conferente de Logística",
              "Estoquista",
              "Sistema para gerenciamento de datas de validade",
              "Elaboração de documentos de padronização",
            ],
            projects: [
              "ExpDateWebApp",
            ]
          },
        ],
      }
    },
    {
      order: 3,
      href: "projects",
      title: "Projetos",
      showOnMenu: true,
      content: {
        types: [
          {
            name: "Websites",
            slug: "web",
          },
          {
            name: "Jogos",
            slug: "games",
          },
          {
            name: "Automações",
            slug: "auto",
          },
          {
            name: "Desafios",
            slug: "challenges",
          },
          {
            name: "Gestão",
            slug: "management",
          },
          {
            name: "Hobbies",
            slug: "hobbies",
          },
        ],
        projects: [
          {
            name: "NBI - Núcleo Baiano de Implantes",
            slug: "nbi",
            type: "web",
            excerpt: "Desenvolvimento de web site dinâmico e responsivo para o Núcleo Baiano de Implantes",
            description: "Este projeto consistiu-se em desenhar a estrutura da landing page para telas grandes e pequenas. Estruturar, dispor e estilizar os elementos. Adicionar dinâmica e funcionalidade aos componentes para que os clientes possam ter acesso as informações importantes sobre a empresa e formas de contato. E realizar o deploy da aplicação.",
            spotlight: true,
            link: "https://www.nbi.com.br",
            goals: [
              "Criar o design da página",
              "Desenvolver o web site",
              "Adicionar efeitos para melhorar a UI",
              "Criar funcionalidades para melhorar a UX",
            ],
            tools: [
              {
                name: "Figma",
                function: "Desenho estrutural e prototipagem de telas com tamanhos distintos.",
                detail: "",
                link: ""
              },
              {
                name: "HTML",
                function: "Desenvolver a estrutura do site",
                detail: "",
                link: ""
              },
              {
                name: "CSS",
                function: "Estilização e ajustes dos elementos para diferentes telas",
                detail: "",
                link: ""
              },
              {
                name: "JavaScript",
                function: "Adicionar comportamentos dinâmicos e interativos para o usuário.",
                detail: "",
                link: ""
              },
            ],
            team: [
              "danilogfof",
              "gustavorf"
            ],
          },
          {
            name: "NIX",
            slug: "nix",
            type: "auto",
            excerpt: "Desenvolvimento de um software executável para realizar a automação do processo de extração, tratamento e carregamento de dados de notas fiscais.",
            description: "Este projeto consistiu-se em desenvolver um software para uso no setor de Engenharia Clínica do Hospital Martagão Gesteira. Com o objetivo de evitar o esquecimento de notas com datas próximas ou casos onde o responsável não conferiu o e-mail e por algum motivo a nota não foi identificada, o que gerava custos relacionados a juros e multas. O processo manual também era custoso em relação ao tempo sendo executado e foi possível reduzir o tempo de execução da tarefa.",
            spotlight: true,
            goals: [
              "Busca de notas fiscais no e-mail",
              "Extração de dados das notas fiscais",
              "Armazenamento dos dados em núvem",
              "Iterface gráfica interativa",
              "Sistema de autenticação de usuário"
            ],
            tools: [
              {
                name: "Python",
                function: "Estrutura lógica e gráfica do software",
                detail: "",
                link: ""
              },
              {
                name: "Firebase",
                function: "Armazenamento de dados e autenticação de usuário",
                detail: "",
                link: ""
              },
              {
                name: "Excel",
                function: "Saída de relatórios com os dados selecionados",
                detail: "",
                link: ""
              }
            ],
            team: [
              "danilogfof",
              "jonatasosc"
            ],
          },
          {
            name: "COCITE",
            slug: "cocite",
            type: "auto",
            excerpt: "Desenvolvimento de um programa para realizar a automação do processo de extração, tratamento e carregamento de dados obtidos em tempo real por sensores de temperatura e maximizar a credibilidade do controle de temperatura dos equipamentos de resfriamento! Diagnósticos precisos, relatórios estatísticos e recomendações claras.",
            description: "Este projeto consistiu-se uma aplicação para elevar a credibilidade do controle de temperatura dos equipamentos frigoríficos, especialmente perante os órgãos fiscalizadores. Utilizando uma abordagem avançada, nossa solução requisita periodicamente dados em tempo real de um banco de dados de monitoramento, alimentado por sensores de temperatura conectados via wi-fi, permitindo um diagnóstico preciso do comportamento dos refrigeradores conforme as intervalos de temperatura permitidas. Com o poder da análise estatística e da elaboração de indicadores, nossa aplicação gera relatórios abrangentes, fornecendo não apenas dados estatísticos detalhados, mas também diagnósticos de comportamento e recomendações claras sobre as medidas a serem tomadas, caso necessário. Tudo isso é possível graças à integração perfeita de tecnologias avançadas, incluindo Python, Numpy, Pandas e Matplotlib. Prepare-se para elevar o padrão do controle de temperatura da sua empresa e enfrentar os desafios regulatórios com confiança!",
            spotlight: false,
            goals: [
              "Busca de notas fiscais no e-mail",
              "Extração de dados das notas fiscais",
              "Armazenamento dos dados em núvem",
              "Iterface gráfica interativa",
              "Sistema de autenticação de usuário"
            ],
            tools: [
              {
                name: "Python",
                function: "Estrutura lógica e gráfica do software",
                detail: "",
                link: ""
              },
              {
                name: "Grafana",
                function: "Armazenamento e apresentação de dados em tempo real",
                detail: "",
                link: ""
              },
              {
                name: "Word",
                function: "Saída de relatórios com os dados selecionados",
                detail: "",
                link: ""
              }
            ],
            team: [
              "danilogfof",
              "gabrielv"
            ],
          },
          {
            name: "Detona Ralph",
            slug: "ralph",
            type: "games",
            excerpt: "Desenvolvimento de uma versão web do jogo de arcade Detona Ralph, utilizando apenas javascript, html e css.",
            description: "Este projeto consistiu-se em desenvolver a versão web de um jogo  de arcade Detona Ralph, utilizando javascript, html, css e um banco de dados não relacional. Contendo um cronometro e sistemas de ranqueamento, progressão de dificuldade e de pontuação. A aplicação contém quatro páginas navegáveis. Testa lá e tenta escrever seu nome no ranking!",
            spotlight: true,
            link: "https://dgabrielf.github.io/wreck-it-ralph/",
            goals: [
              "Estruturar uma mecânica para um jogo",
              "Aplicar ferramentas estéticas",
              "Construir uma interface gráfica atrativa para o usuário",
            ],
            tools: [
              {
                name: "JavaScript",
                function: "Prover as mecânicas do jogo",
                detail: "",
                link: ""
              },
              {
                name: "HTML",
                function: "Estruturar a página, que mesmo simples precisa se comportar de maneira perfeita com o ajuste das telas",
                detail: "",
                link: ""
              },
              {
                name: "CSS",
                function: "Aplicação de atributos estéticos e suas variações como pseudo-elementos",
                detail: "",
                link: ""
              },
              {
                name: "Firebase",
                function: "Armazenamento dos dados de jogadores que escreveram o nome",
                detail: "",
                link: ""
              }
            ],
            team: [
              "danilogfof",
            ],
          },
          {
            name: "Jogo da Memória",
            slug: "memory",
            type: "games",
            excerpt: "Desenvolvimento de uma versão web de um jogo da memória, utilizando apenas javascript, html e css.",
            description: "Este projeto consistiu-se em desenvolver a versão web de um jogo da memória, utilizando apenas javascript, html e css. Contendo um botão de reinício e um contador de tentativas. Experimente e divirta-se!",
            spotlight: false,
            link: "https://dgabrielf.github.io/memory-game/",
            goals: [
              "Estruturar uma mecânica para um jogo",
              "Aplicar ferramentas estéticas",
              "Construir uma interface gráfica atrativa para o usuário",
            ],
            tools: [
              {
                name: "JavaScript",
                function: "Prover as mecânicas do jogo",
                detail: "",
                link: ""
              },
              {
                name: "HTML",
                function: "Estruturar a página, que mesmo simples precisa se comportar de maneira perfeita com o ajuste das telas",
                detail: "",
                link: ""
              },
              {
                name: "CSS",
                function: "Aplicação de atributos estéticos e suas variações como pseudo-elementos",
                detail: "",
                link: ""
              }
            ],
            team: [
              "danilogfof",
            ],
          },
        ],
        team: [
          {
            slug: "danilogfof",
            fullName: "Danilo Gabriel Fagundes de Oliveira Ferreira",
            links: [
              {
                name: "GitHub",
                url: "http://github.com/DGabrielF",
                text: "/DGabrielF"
              },
              {
                name: "LinkedIn", 
                url: "https://www.linkedin.com/in/danilogabriel-ferreira/", text: "/danilogabriel-ferreira"
              },
            ]
          },
          {
            slug: "gustavorf",
            fullName: "Gustavo Ricci Ferreira",
            links: [
              {
                name: "GitHub",
                url: "https://github.com/tasugvo",
                text: "/tasugvo"
              },
            ]
          },
          {
            slug: "jonatasosc",
            fullName: "Jonatas de Oliveira Souza Cavalcante",
            links: [
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jonatasosc/",
                text: "/jonatasosc"
              },
            ]
          },
          {
            slug: "gabrielv",
            fullName: "Gabriel Vita",
            links: [
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/gabriel-vita/",
                text: "/gabriel-vita"
              },
            ]
          }
        ]
      }
    },
    {
      order: 4,
      href: "contact",
      title: "Contato",
      showOnMenu: true,
      content: {
        text: "No momento estou procurando novas oportunidades, serei sempre receptivo. Caso você tenha alguma pergunta ou apenas quer trocar uma ideia, ficarei muito feliz em entrar ter uma boa conversa contigo!",
        contacts: [
          {
            name: "Whatsapp",
            url: "5571993210108", 
            text: "(71) 99321-0108"
          },
          {
            name: "Email",
            url: "mailto:danilofof@gmail.com",
            text: "danilofof@gmail.com"
          },
          {
            name: "GitHub",
            url: "http://github.com/DGabrielF",
            text: "/DGabrielF"
          },
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/danilogabriel-ferreira/",
            text: "/danilo-gabriel-ferreira-092457127"
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/danilo.ferreira.186590",
            text: "/danilo.ferreira.186590"            
          }
        ]
      }
    },
  ]
}