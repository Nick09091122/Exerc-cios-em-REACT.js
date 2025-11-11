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
      {visivel && <div><img src='https://www.bloonswiki.com/images/4/4e/BTDB2_etienne_portrait.png'/> </div>}
    </div>
  );



}

export default TextoSecreto;
