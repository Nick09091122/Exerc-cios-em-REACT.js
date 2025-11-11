import './App.css';
import React, { useState } from "react";


 function MudarTamanhoFonte() {
  const [fonte, setFonte] = useState('20px');


  const mudarTamanho = (novoTamanho) => {
    setFonte(novoTamanho);
    document.body.style.fontSize = novoTamanho;
  };


  return (
    <div>
      <h2>Como trocar cores?</h2>
      <button onClick={() => mudarTamanho('10px')}>Pequeno</button>
      <button onClick={() => mudarTamanho('20px')}>Médio</button>
      <button onClick={() => mudarTamanho('30px')}>Grande</button>
      <button onClick={() => mudarTamanho('200px')}>Enorme</button>
    </div>
    )
 }


 export default MudarTamanhoFonte;