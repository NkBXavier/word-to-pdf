import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataDisplay from './components/DataDisplay';
import ConvertToPDF from './components/ConvertToPDF';

function App() {
  const [documentText, setDocumentText] = useState('');
  const [data, setData] = useState([]);

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Application Word to PDF</h1>
      <FileUpload onFileLoad={setDocumentText} />
      <DataDisplay documentText={documentText} onDataChange={handleDataChange} />
      <ConvertToPDF documentText={documentText} data={data} />
    </div>
  );
}

export default App;
