document.addEventListener("DOMContentLoaded", () => {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    cpf.addEventListener("input", () => {
        let v = cpf.value.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.value = v;
    });

    telefone.addEventListener("input", () => {
        let v = telefone.value.replace(/\D/g, "");
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
        v = v.replace(/(\d{4})(\d)/, "$1-$2");
        telefone.value = v;
    });

    cep.addEventListener("input", () => {
        let v = cep.value.replace(/\D/g, "");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        cep.value = v;
    });
});
