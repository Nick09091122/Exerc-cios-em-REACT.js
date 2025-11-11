import './App.css';
import React, { useState } from "react";


function Calculadora() {
  const [Num1, SetNum1] = useState('0');
  const [Num2, SetNum2] = useState('0');
  const [Resultado, SetResultado] = useState('0');


  const Calcular = (operacao) => {
    const Num1 = parseFloat(Num1);
    const Num2 = parseFloat(Num2);
   
    if (Num1.isNaN || Num2.isNaN) {
      SetResultado('Erro: Entrada inválida');
      return;
    }
    let resultado;
    switch (operacao) {
      case '+':
        resultado = Num1 + Num2;
        break;
      case '-':
        resultado = Num1 - Num2;
        break;
      case '*':
        resultado = Num1 * Num2;
        break;
      case '/':
        if (Num2 === 0) {
          SetResultado('Erro: Divisão por zero');
          return;
        }
        resultado = Num1 / Num2;
        break;
      default:
        SetResultado('Erro: Operação inválida');
        return;
    }
    SetResultado(resultado.toString());
  }


return (
    <div className="Calculadora">
      <h1>Calculadora Simples</h1>
      <p style={{minWidth: '20px'}}>{Num1}</p>
      <p style={{minWidth: '20px'}}>{Num2}</p>
      <input
        type="number"
        value={Num1}
        onChange={(e) => SetNum1(e.target.value)}
      />
      <input
        type="number"
        value={Num2}
        onChange={(e) => SetNum2(e.target.value)}
      />
      <button onClick={Calcular = '+'}>+</button>
      <button onClick={Calcular = '-'}>-</button>
      <button onClick={Calcular = '*'}>*</button>
      <button onClick={Calcular = '/'}>/</button>
      <button onClick={Calcular}>Calcular</button>
      <h2>Resultado: {Resultado}</h2>
    </div>
  );
}


export default Calculadora;
