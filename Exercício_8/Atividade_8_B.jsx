import './App.css';
import React, { useState } from "react";


function AdicionarLista() {


  const [Item, setItem] = useState('');
  const [Lista, setLista] = useState([]);


  const adicionarItem = () => {
    if (Item.trim()) {
      setLista([...Lista, Item]);
      setItem('');
    };
  };


    return ( <h1 style={{textShadow: 'black', fontSize: '24px', minWidth: '444px'}}>Lista de Fazeres</h1>,
      <div>
        <input
          type="text"
          value={Item}
          onChange={(e) => setItem(e.target.value)}
          placeholder='Escreva uma tarefa para ser feita no futuro'
          style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '305px' }}
        /><div>
        <button onClick={adicionarItem}>Nova tarefa</button>
        </div>
        <ul style={{ backgroundColor: 'gray', padding: '1px'}}>
          {Lista.map((Item, index) => (
            <li key={index}>{Item}</li>
          ))}
        </ul>
      </div>
);  
  };




export default AdicionarLista;