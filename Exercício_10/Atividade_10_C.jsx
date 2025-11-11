import './App.css';
import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState('0');
  const [resultado, setResultado] = useState('0');
  const [operacao, setOperacao] = useState('real'); // Moeda de origem
  const [conversao, setConversao] = useState('dollar'); // Moeda de destino

  const calcular = () => {
    const numero1 = parseFloat(num1);
   
    if (isNaN(numero1)) {
      setResultado('Erro: Entrada inválida');
      return;
    }

    let resultadoCalculo;
    
    // Converter para string única para o switch
    const combinacao = `${operacao}_${conversao}`;
    
    switch (combinacao) {
      case 'real_real':
        resultadoCalculo = numero1;
        break;
      case 'real_dollar':
        resultadoCalculo = numero1 * 0.2; 
        break;
      case 'real_euro':
        resultadoCalculo = numero1 * 0.15; 
        break;
      case 'dollar_real':
        resultadoCalculo = numero1 * 6; 
        break;
      case 'dollar_euro':
        resultadoCalculo = numero1 * 0.9; 
        break;
      case 'dollar_dollar':
        resultadoCalculo = numero1;
        break;
      case 'euro_euro':
        resultadoCalculo = numero1;
        break;
      case 'euro_real':
        resultadoCalculo = numero1 * 5.70; 
        break;
      case 'euro_dollar':
        resultadoCalculo = numero1 * 1.1;
        break;
      default:
        setResultado('Erro: Operação inválida');
        return;
    }
    
    setResultado(resultadoCalculo.toFixed(2));
  };

  return (
    <div className="Calculadora">
      <h1>Conversor de Moedas</h1>
      
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Valor"
      />
      
      <div>
        <h3>De:</h3>
        <button onClick={() => setOperacao('real')}>Real</button>
        <button onClick={() => setOperacao('dollar')}>Dólar</button>
        <button onClick={() => setOperacao('euro')}>Euro</button>
      </div>
      
      <div>
        <h3>Para:</h3>
        <button onClick={() => setConversao('real')}>Real</button>
        <button onClick={() => setConversao('dollar')}>Dólar</button>
        <button onClick={() => setConversao('euro')}>Euro</button>
      </div>
      
      <button onClick={calcular} style={{backgroundColor: '#000daa'}}>Converter</button>
      <h2>Resultado: {resultado}</h2>
      <p>Convertendo de {operacao} para {conversao}</p>
    </div>
  );
}

export default Calculadora;