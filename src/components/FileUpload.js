import React, { useState } from 'react';
import mammoth from 'mammoth';

const FileUpload = ({ onFileLoad }) => {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        setFileContent(result.value);
        onFileLoad(result.value);  // Appelle la fonction pour passer les données
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".doc,.docx" />
      <div>
        <h3>Contenu du fichier Word :</h3>
        <p>{fileContent}</p>
      </div>
    </div>
  );
};

export default FileUpload;
