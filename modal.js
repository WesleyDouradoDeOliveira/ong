// Modal e Alertas
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro");
    const modal = document.getElementById("modal");
    const closeModal = modal?.querySelector(".close");
    const alertBox = document.getElementById("alert");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = form.nome.value.trim();
            const email = form.email.value.trim();
            const cpfVal = form.cpf.value.trim();

            if (!nome || !email || !cpfVal) {
                alert("Preencha todos os campos obrigatórios!");
                return;
            }

            if (!email.includes("@")) {
                alert("Digite um e-mail válido!");
                return;
            }

            if (alertBox) {
                alertBox.style.display = "block";
                setTimeout(() => alertBox.style.display = "none", 5000);
            }

            if (modal) modal.style.display = "flex";
            form.reset();
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});