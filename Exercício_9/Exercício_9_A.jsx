import './App.css';
import React, { useState } from "react";


 function MudarCores() {
  const [cor, setCor] = useState("#000000");


  const mudarCor = (novaCor) => {
    setCor(novaCor);
    document.body.style.backgroundColor = novaCor;
  };


  return (
    <div>
      <h2>Como trocar cores?</h2>
      <button onClick={() => mudarCor('#1231ab')}>Azul</button>
      <button onClick={() => mudarCor('#ab2313')}>Vermelho</button>
      <button onClick={() => mudarCor('#13ab23')}>Verde</button>
    </div>)
 }


 export default MudarCores;