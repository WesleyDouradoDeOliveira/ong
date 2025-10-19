// Sistema de Templates
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('cardsContainer');
    if (!container) return;

    const cardsData = [
        { title: "Projeto 1", description: "Descrição do Projeto 1" },
        { title: "Projeto 2", description: "Descrição do Projeto 2" }
    ];

    function createCard(title, description) {
        return `
            <div class="card">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
    }

    cardsData.forEach(card => {
        container.innerHTML += createCard(card.title, card.description);
    });
});