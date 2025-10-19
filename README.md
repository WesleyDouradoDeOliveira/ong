Plataforma ONG - Experiência Prática IV
Descrição do Projeto

Este projeto é uma plataforma web completa para ONGs, desenvolvida como parte da disciplina Fundamentos da Web e Estruturação de Interfaces, consolidando práticas profissionais de versionamento, acessibilidade e otimização para produção.

A plataforma permite que ONGs, voluntários e doadores interajam em um ambiente digital seguro e acessível, oferecendo:

Página inicial com missão, visão e valores;

Listagem de projetos sociais com descrição, imagens e badges;

Cadastro de voluntários com validação de formulário;

Navegação responsiva com menu hamburguer e dropdowns;

Implementação de práticas de acessibilidade e otimização.

Estrutura do Projeto
plataforma-ong/
│
├── index.html
├── projetos.html
├── projeto1.html
├── projeto2.html
├── cadastro.html
├── contato.html
│
├── css/
│ ├── variables.css
│ ├── layout.css
│ ├── navigation.css
│ ├── components.css
│ └── style.css
│
├── js/
│ ├── spa.js
│ ├── menu.js
│ └── utils.js
│
├── imagens/
│ ├── Ong.jpeg
│ ├── Escola.jpeg
│ ├── voluntario.jpeg
│ └── voluntarios.png
│
├── README.md
└── LICENSE

Funcionalidades

Navegação responsiva em desktop e mobile;

Menu dropdown e menu hamburguer com acessibilidade (Tab, Enter, ARIA);

Páginas de projetos com cards, imagens e badges de categoria;

Formulário de cadastro com validação de campos e máscaras de input (CPF, telefone, CEP);

Estrutura semântica HTML5: <header>, <main>, <section>, <footer>;

Compatibilidade com leitores de tela e contraste adequado (mínimo 4.5:1);

Suporte a modo de alto contraste e dark mode acessível;

Otimização para produção: minificação de CSS/JS/HTML, compressão de imagens.

Tecnologias Utilizadas

HTML5 – Estrutura semântica e conteúdo acessível;

CSS3 – Grid, Flexbox, design system, responsividade e temas;

JavaScript – SPA, manipulação do DOM e validação de formulários;

Git & GitHub – Controle de versão com GitFlow, commits semânticos e releases;

Ferramentas de otimização – Minificação e compressão de imagens.

Versionamento (Git/GitHub)

Branch principal: main – versão estável.

Branch de desenvolvimento: develop.

Branches de funcionalidades: feature/....

Histórico de commits semântico, exemplo:

feat(navbar): adicionar menu responsivo com dropdown

fix(form): corrigir validação de CPF

chore(images): otimizar imagens para produção

Releases versionadas: v1.0.0, v1.1.0, etc.

Issues e milestones documentando tarefas e bugs.

Acessibilidade

Navegação por teclado em todos os elementos interativos;

Suporte completo a leitores de tela;

Contraste mínimo de 4.5:1 para texto normal;

Modo de alto contraste e dark mode acessível;

Estrutura semântica adequada e ARIA em menus e formulários.

Como Executar

Clone o repositório:

git clone https://github.com/WesleyDouradoDeOliveira/ong


Abra index.html em qualquer navegador moderno.

Autor

Wesley Dourado de Oliveira
📧 Email: a30wesleyyy@gmail.com

🔗 GitHub: https://github.com/WesleyDouradoDeOliveira
