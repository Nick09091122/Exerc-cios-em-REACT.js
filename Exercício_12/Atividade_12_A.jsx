import './App.css';
import React, { useState } from "react";


function BotaoCurtida() {
  const [curtido, setCurtido] = useState(false);
  const [Likes, setLikes] = useState(0);


  const alternarCurtida = () => {
    setCurtido(!curtido);
    setLikes(curtido ? Likes - 1 : Likes + 1);
  };


  return (
    <button onClick={alternarCurtida} style={{
      backgroundColor: curtido ? 'Blue' : 'gray',
      margin: '12px',
    }} className="botao-curtida">
      {curtido ? 'Dislike' : 'Like'} {Likes}
    </button>
  );
}


export default BotaoCurtida;