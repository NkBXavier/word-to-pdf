import React from 'react';
import { jsPDF } from 'jspdf';

const ConvertToPDF = ({ documentText, data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Contenu du fichier Word :", 10, 10);
    doc.text(documentText, 10, 20);
    doc.text("Données de la base :", 10, 50);

    // Vérifie que data est défini et est un tableau
    if (data && Array.isArray(data)) {
      data.slice(0, 5).forEach((item, index) => {
        doc.text(`${index + 1}. ${item.title}`, 10, 60 + index * 10);
      });
    } else {
      doc.text("Aucune donnée à afficher.", 10, 60);
    }

    doc.save("output.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Convertir en PDF</button>
    </div>
  );
};

export default ConvertToPDF;
