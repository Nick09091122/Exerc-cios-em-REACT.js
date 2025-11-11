import './App.css';
import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [resultado, setResultado] = useState('0');

  const calcular = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
   
    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Erro: Entrada inválida');
      return;
    } else if (numero1 === 0 || numero2 === 0) {
      setResultado('Um dos números é zero, logo temos uma linha ou um ponto');
      return;
    } else {
      const resultadoCalculo = numero1 * numero2;
      setResultado(resultadoCalculo.toString());
    }
  };

  return (
    <div className="Calculadora">
      <h1>Calculadora da área de retangulos</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder='Altura'
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder='Largura'
      />
      <button onClick={calcular}>Calcular</button>
      <h2>A área do retangulo é: {resultado}CM²</h2>
    </div>
  );
}

export default Calculadora;