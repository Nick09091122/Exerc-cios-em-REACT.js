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


    return (
      <div>
        <input
          type="text"
          value={Item}
          onChange={(e) => setItem(e.target.value)}
          placeholder='Escreva um item para adicionar na lista de compras'
        /><div>
        <button onClick={adicionarItem}>Adicionar</button>
        </div>
        <ul style={{ backgroundColor: 'gray', padding: '1px' }}>
          {Lista.map((Item, index) => (
            <li key={index}>{Item}</li>
          ))}
        </ul>
      </div>
);  
  };




export default AdicionarLista;
