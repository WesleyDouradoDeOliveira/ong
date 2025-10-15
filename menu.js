function initMenu() {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");
    const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

    if (!menuToggle || !navList) return;

    // Abrir/fechar menu mobile
    menuToggle.onclick = () => {
        navList.classList.toggle("active");
        menuToggle.classList.toggle("active");
    };

    // Dropdown no mobile
    dropdownLinks.forEach(link => {
        link.onclick = e => {
            const submenu = link.nextElementSibling;
            if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                e.preventDefault(); // evita abrir página
                link.parentElement.classList.toggle("open"); // usa .open para CSS
            }
        };
    });
}

document.addEventListener("DOMContentLoaded", initMenu);
