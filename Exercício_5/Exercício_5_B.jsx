import React from 'react';
import { useState } from 'react';


function App() {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 5);
  };

  const decrementar = () => {
    setContador(contador - 5);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>aumentar</button>
      <button onClick={decrementar}>reduzir</button>
    </div>
  );
}
export default App;
