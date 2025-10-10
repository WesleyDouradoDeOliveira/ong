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

            // Só bloqueia o clique se for mobile e houver submenu
            if (submenu && submenu.tagName === "UL" && window.innerWidth <= 768) {
                e.preventDefault(); // Evita abrir página no mobile
                submenu.classList.toggle("active");
            }
        });
    });

    // ================== Máscaras de Formulário ==================
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    const formatCPF = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value;
    };

    const formatTelefone = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        return value;
    };

    const formatCEP = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        return value;
    };

    if (cpf) cpf.addEventListener("input", () => cpf.value = formatCPF(cpf.value));
    if (telefone) telefone.addEventListener("input", () => telefone.value = formatTelefone(telefone.value));
    if (cep) cep.addEventListener("input", () => cep.value = formatCEP(cep.value));

    // ================== Modal e Alerta de Feedback ==================
    const form = document.getElementById("cadastro");
    const modal = document.getElementById("modal");
    const closeModal = modal.querySelector(".close");
    const alertBox = document.getElementById("alert");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Mostrar alerta
        if (alertBox) {
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 5000);
        }

        // Mostrar modal
        if (modal) modal.style.display = "flex";
    });

    // Fechar modal ao clicar no X
    if (closeModal) closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
