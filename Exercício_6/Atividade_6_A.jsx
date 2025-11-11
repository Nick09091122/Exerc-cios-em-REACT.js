import { useState } from 'react';
import React from 'react';
import './App.css';

function TextoSecreto() {

  const [visivel, setvisivel] = useState(false);
  return (
    <div>
      <button onClick={() => setvisivel(!visivel)}>
        {visivel ? 'Esconder' : 'Mostrar'} 
      </button>
      {visivel && <p>Este texto existe</p>}
    </div>
  );



}

export default TextoSecreto;
