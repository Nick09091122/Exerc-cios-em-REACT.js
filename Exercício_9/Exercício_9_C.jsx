import './App.css';
import React, { useState } from "react";


 function Sentimento() {
  const [fonte, setFonte] = useState('30px');
  const [cor, setCor] = useState('#707173');
  const [emocao, setEmocao] = useState("");


  const mudarCor = (novaCor) => {
    setCor(novaCor);
    document.body.style.backgroundColor = novaCor;
  };




  const mudarTamanho = (novoTamanho) => {
    setFonte(novoTamanho);
  };


  const getTamanho = () => {
    return { fontSize: fonte };
  }


  const mudarEmocao = (novaEmocao) => {
    setEmocao(novaEmocao);
  }
  return (
    <div>
      <h2>Qual Sentimento você deseja ver?</h2>
      <button onClick={() => mudarTamanho('15px') + mudarCor('#fa61df') + mudarEmocao('😅') + alert('...')}>Tímido</button>
      <button onClick={() => mudarTamanho('55px') + mudarCor('#fa5555') + mudarEmocao('😠') + alert('Qualé parça')}>Raiva</button>
      <button onClick={() => mudarTamanho('10px') + mudarCor('#7ca8f2') + mudarEmocao('😞') + alert('Hoje está um dia com temperatura inconstante')}>Triste</button>
      <button onClick={() => mudarTamanho('75px') + mudarCor('#f20900') + mudarEmocao('🤬') + alert('Vá a ##########')}>Furioso</button>
      <button onClick={() => mudarTamanho('35px') + mudarCor('#ffcf52') + mudarEmocao('😃') + alert('Hihihi')}>Feliz</button>
      <button onClick={() => mudarTamanho('30px') + mudarCor('#707173') + mudarEmocao('😐')}>Neutro</button>


      <p style={{fontSize: (fonte)}}>{emocao}</p>
    </div>
    )
  };


 export default Sentimento;

