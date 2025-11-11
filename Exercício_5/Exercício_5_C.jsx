import React from 'react';
import { useState } from 'react';


function App() {

  const [contador, setContador] = useState(20);
  const Temperatura = useState('blue')[20];

  const incrementar = () => {
    setContador(contador + 2);
  };

  const decrementar = () => {
    setContador(contador - 2);
  };

  
  return (
    <div>
      <h1 style={{color: (contador >= 30 ? 'red' : (contador >= 20 ? 'orange' : (contador > 0 ? 'blue' : 'white')))}}>Temperatura atual: {contador}°</h1>
      <button onClick={incrementar}>aumentar</button>
      <button onClick={decrementar}>reduzir</button>
    </div>
  );
}
export default App;
