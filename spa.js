document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");

    // Função para inicializar o menu (hamburguer + dropdown)
    function initMenu() {
        const menuToggle = document.getElementById("mobile-menu");
        const navList = document.getElementById("nav-list");

        if (!menuToggle || !navList) return;

        // Remove listeners antigos antes de adicionar novos
        menuToggle.replaceWith(menuToggle.cloneNode(true));
        const newMenuToggle = document.getElementById("mobile-menu");

        newMenuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
            newMenuToggle.classList.toggle("active");
        });

        const dropdownLinks = document.querySelectorAll("li.has-dropdown > a");
        dropdownLinks.forEach(link => {
            link.addEventListener("click", e => {
                const submenu = link.nextElementSibling;
                if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                    e.preventDefault();
                    submenu.classList.toggle("open");
                }
            });
        });
    }

    // Função para carregar conteúdo via SPA
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(res => res.text())
            .then(html => {
                mainContent.innerHTML = html;
                // Reexecuta o menu e links SPA após trocar a página
                initMenu();
                attachSpaLinks();
            })
            .catch(() => {
                mainContent.innerHTML = "<p>Erro ao carregar a página.</p>";
            });
    }

    // Função para adicionar evento nos links SPA
    function attachSpaLinks() {
        document.querySelectorAll("a[data-page]").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const page = link.getAttribute("data-page");
                if (page) loadPage(page);
            });
        });
    }

    // Inicializa
    initMenu();
    attachSpaLinks();
});
