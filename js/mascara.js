document.addEventListener("DOMContentLoaded", () => {
    // ================== Menu Hambúrguer ==================
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector("nav ul.nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // ================== Dropdown no Mobile ==================
    const dropdownLinks = document.querySelectorAll("nav li > a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const submenu = link.nextElementSibling;
            if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                e.preventDefault(); // evita abrir página no mobile
                submenu.classList.toggle("active");
            }
        });
    });

    // ================== Máscaras de Formulário ==================
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    const formatCPF = value => value.replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    const formatTelefone = value => value.replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4,5})(\d{4})$/, "$1-$2");

    const formatCEP = value => value.replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2");

    if (cpf) cpf.addEventListener("input", () => cpf.value = formatCPF(cpf.value));
    if (telefone) telefone.addEventListener("input", () => telefone.value = formatTelefone(telefone.value));
    if (cep) cep.addEventListener("input", () => cep.value = formatCEP(cep.value));

    // ================== Modal e Alerta de Feedback ==================
    const form = document.getElementById("cadastro");
    const modal = document.getElementById("modal");
    const closeModal = modal.querySelector(".close");
    const alertBox = document.getElementById("alert");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // impede envio real

            // Mostra alerta apenas ao enviar
            if (alertBox) {
                alertBox.style.display = "block";
                setTimeout(() => alertBox.style.display = "none", 5000);
            }

            // Mostra modal apenas ao enviar
            if (modal) modal.style.display = "flex";

            form.reset(); // opcional: limpa os campos após envio
        });
    }

    // Fechar modal ao clicar no X
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
