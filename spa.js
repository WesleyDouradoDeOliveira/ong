<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Plataforma ONG - Conectando voluntários e projetos sociais para transformação comunitária.">
    <title>ONG Plataforma - Home</title>

    <!-- CSS Modular -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        /* ======= Correção para menu mobile ======= */
        @media (max-width: 768px) {
            nav ul {
                display: none;
                flex-direction: column;
                background-color: var(--color-primary);
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 999;
            }
            nav ul.active {
                display: flex;
            }
            .menu-toggle {
                display: flex;
                cursor: pointer;
                flex-direction: column;
                gap: 5px;
            }
            li.has-dropdown > .dropdown {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: var(--color-primary);
            }
            li.has-dropdown.open > .dropdown {
                display: flex;
            }
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <img src="imagens/Ong.jpeg" alt="Logo da ONG Plataforma" width="200">
        </div>

        <!-- Menu hamburguer -->
        <div class="menu-toggle" id="mobile-menu" role="button" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="nav-list">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav aria-label="Menu principal">
            <ul class="nav-list" id="nav-list" role="menu">
                <li><a href="index.html" data-page="index">Home</a></li>
                <li class="has-dropdown">
                    <a href="projetos.html">Projetos</a>
                    <ul class="dropdown" role="menu">
                        <li role="menuitem"><a href="projeto1.html" data-page="projeto1">Projeto 1</a></li>
                        <li role="menuitem"><a href="projeto2.html" data-page="projeto2">Projeto 2</a></li>
                    </ul>
                </li>
                <li><a href="cadastro.html" data-page="cadastro">Cadastro</a></li>
                <li><a href="contato.html" data-page="contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Conteúdo principal -->
    <main class="container">
        <section class="col-6">
            <h1>Bem-vindo à ONG Plataforma</h1>
            <p>Nossa missão é conectar ONGs, voluntários e doadores em um ambiente digital completo e acessível.</p>
        </section>
        <section class="col-6">
            <img src="imagens/voluntarios.png" alt="Voluntários trabalhando" style="width:100%;">
        </section>
    </main>

    <!-- Rodapé -->
    <footer class="col-12">
        <p>&copy; 2025 ONG Plataforma. Todos os direitos reservados.</p>
    </footer>

    <!-- JS Menu + SPA -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const mainContent = document.querySelector("main");

            function initMenu() {
                const menuToggle = document.getElementById("mobile-menu");
                const navList = document.getElementById("nav-list");
                const dropdownLinks = document.querySelectorAll("li.has-dropdown > a");

                if (!menuToggle || !navList) return;

                // Menu hamburguer mobile
                menuToggle.addEventListener("click", () => {
                    navList.classList.toggle("active");
                    menuToggle.classList.toggle("active");
                    menuToggle.setAttribute("aria-expanded", navList.classList.contains("active"));
                });

                // Dropdown mobile
                dropdownLinks.forEach(link => {
                    link.addEventListener("click", e => {
                        const submenu = link.nextElementSibling;
                        if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                            e.preventDefault();
                            link.parentElement.classList.toggle("open");
                        }
                    });
                });
            }

            // SPA: carregar páginas internas
            function loadPage(page) {
                fetch(`${page}.html`)
                    .then(res => res.text())
                    .then(html => {
                        mainContent.innerHTML = html;
                        initMenu();
                        attachSpaLinks();
                    })
                    .catch(() => {
                        mainContent.innerHTML = "<p>Erro ao carregar a página.</p>";
                    });
            }

            // Links SPA
            function attachSpaLinks() {
                document.querySelectorAll("a[data-page]").forEach(link => {
                    link.addEventListener("click", e => {
                        e.preventDefault();
                        const page = link.getAttribute("data-page");
                        if (page) loadPage(page);
                    });
                });
            }

            initMenu();
            attachSpaLinks();
        });
    </script>
</body>
</html>