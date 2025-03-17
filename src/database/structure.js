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
        ],
        projects: [
          {
            name: "NBI - Núcleo Baiano de Implantes",
            slug: "nbi",
            type: "web",
            excerpt: "Desenvolvimento de web site dinâmico e responsivo para o Núcleo Baiano de Implantes",
            description: "Este projeto consistiu em desenhar a estrutura da landing page para telas grandes e pequenas. Estruturar, dispor e estilizar os elementos. Adicionar dinâmica e funcionalidade aos componentes. E realizar o deploy da aplicação.",
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