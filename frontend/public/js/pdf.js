const exportBtn = document.getElementById('exportPDF');
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const devis = JSON.parse(localStorage.getItem('devis'));
        doc.setFontSize(16);
        doc.text("Devis BTP", 20, 20);
        let y = 30;
        doc.setFontSize(12);
        doc.text(`Type: ${devis.type}`, 20, y); y += 10;
        for (const key in devis.data) {
            doc.text(`${key}: ${devis.data[key]}`, 20, y); y += 10;
        }
        doc.text(`Prix total estimé: ${devis.prix.toLocaleString()} FCFA`, 20, y + 10);
        doc.save('devis.pdf');
    });
}
