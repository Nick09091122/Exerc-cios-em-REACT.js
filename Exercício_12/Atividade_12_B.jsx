import './App.css';
import React, { useState } from "react";


function BotaoFavoritar() {
  const [curtido, setCurtido] = useState(false);
  const [Likes, setLikes] = useState(0);


  const alternarCurtida = () => {
    setCurtido(!curtido);
    setLikes(curtido ? Likes - 1 : Likes + 1);
  };


  const icone = () => {
    return curtido ? '🌕' : '🌑';
  }


  return (
    <button onClick={alternarCurtida} style={{
      backgroundColor: curtido ? 'teal' : 'gray',
      margin: '12px',
    }} className="botao-curtida">
      {curtido ? 'Remover dos favoritos' : 'Favoritar'} {Likes} {icone()}
    </button>
  );
}


export default BotaoFavoritar;
