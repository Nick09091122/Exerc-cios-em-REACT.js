import './App.css';
import React, { useState } from "react";


function BotaoFavoritar() {
  const [curtido, setCurtido] = useState(false);
  const [Likes, setLikes] = useState(0);
  const [nivel, setNivel] = useState(1);


  const alternarCurtida = () => {
    setCurtido(!curtido);
    setLikes(curtido ? Likes - 1 : Likes + 1);
  };
   
  const Nivel = () => {
    const novoLikes = Likes + 1;
    setLikes(novoLikes);
    if (Likes >= 20) {
      setNivel(5);
    } else if (Likes >= 15) {
      setNivel(4);
    } else if (Likes >= 10) {
      setNivel(3);
    } else if (Likes >= 5) {
      setNivel(2);
    } else {
      setNivel(1);
    }};


  const icone = () => {
    if (nivel === 1) {
      return '😐';
    } else if (nivel === 2) {
      return '🙂';
    } else if (nivel === 3) {
      return '😊';
    } else if (nivel === 4) {
      return '😁';
    } else {
      return '🤩';
    }
  }


  return (
    <div>
    <button onClick={alternarCurtida || Nivel} style={{
      backgroundColor: curtido ? 'teal' : 'gray',
      margin: '12px',
    }} className="botao-curtida">
      {curtido ? 'Remover dos favoritos' : 'Favoritar'} {Likes} {icone()}
    </button>
      <button onClick={alternarCurtida && Nivel}>Botão teste (+1 like)</button>
    </div>
 
  );
}


export default BotaoFavoritar;
