// Máscaras de Formulário
document.addEventListener("DOMContentLoaded", () => {
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
});
