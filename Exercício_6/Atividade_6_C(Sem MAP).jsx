import { useState } from 'react';
import React from 'react';
import './App.css';

function TextoSecreto() {

  const [visivel, setvisivel] = useState(false);
  return (
    <div>
        <h2> Cofre ultra secreto 💼</h2>
      <button onClick={() => setvisivel(!visivel)}>
        {visivel ? 'Fechar cofre' : 'Abrir cofre'} {visivel ? '🔒' : '🔓'}
      </button>
      {visivel && <ul><li><img src='https://www.bloonswiki.com/images/4/4e/BTDB2_etienne_portrait.png' style={{width: '126px', height: '126px'}}/></li>
      <li>Planta de todos os bandejões</li>
      <li>Planos do conselho de professores</li>
      </ul>}
    </div>
  );

}

export default TextoSecreto;
