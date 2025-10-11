function initMenu() {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");
    const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

    if (!menuToggle || !navList) return;

    // Evita duplicar evento
    menuToggle.onclick = () => {
        navList.classList.toggle("active");
        menuToggle.classList.toggle("active");
    };

    dropdownLinks.forEach(link => {
        link.onclick = e => {
            const submenu = link.nextElementSibling;
            if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                e.preventDefault();
                submenu.classList.toggle("active");
            }
        };
    });
}

// Inicializa o menu ao abrir o site
document.addEventListener("DOMContentLoaded", initMenu);
