// ===== Construction Neuve =====
const formConstruction = document.getElementById('formConstruction');
if (formConstruction) {
    formConstruction.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(formConstruction).entries());

        let basePrix = 500000;
        let surface = Number(data.terrain);
        let etages = Number(data.etages);
        let pieces = Number(data.pieces);

        let prixTotal = basePrix * surface * etages;

        if (data.finition === 'premium') prixTotal *= 1.2;
        if (data.structure === 'acier') prixTotal *= 1.1;

        localStorage.setItem('devis', JSON.stringify({
            type: 'Construction Neuve',
            data: data,
            prix: prixTotal
        }));

        window.location.href = "devis.html";
    });
}

// ===== Rénovation =====
const formRenovation = document.getElementById('formRenovation');
if (formRenovation) {
    formRenovation.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(formRenovation).entries());

        let basePrix = 15000;
        let surface = Number(data.surface);
        let prixTotal = basePrix * surface;

        if (data.finition === 'premium') prixTotal *= 1.3;
        if (data.travaux === 'plomberie') prixTotal *= 1.2;

        localStorage.setItem('devis', JSON.stringify({
            type: 'Rénovation',
            data: data,
            prix: prixTotal
        }));

        window.location.href = "devis.html";
    });
}

// ===== Affichage devis =====
const resultDiv = document.getElementById('resultDevis');
if (resultDiv) {
    const devis = JSON.parse(localStorage.getItem('devis'));
    if (devis) {
        let html = `<h2>${devis.type}</h2><ul>`;
        for (const key in devis.data) {
            html += `<li>${key}: ${devis.data[key]}</li>`;
        }
        html += `</ul><h3>Prix total estimé: ${devis.prix.toLocaleString()} FCFA</h3>`;
        resultDiv.innerHTML = html;
    }
}
