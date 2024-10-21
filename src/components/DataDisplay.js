import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = ({ documentText }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error("Erreur lors de la récupération des données", error));
  }, []);

  return (
    <div>
      <h3>Données récupérées :</h3>
      <ul>
        {data.slice(0, 5).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h3>Contenu du fichier Word :</h3>
      <p>{documentText}</p>
    </div>
  );
};

export default DataDisplay;
