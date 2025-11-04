import React from 'react';
import { useState } from 'react';


function App() {
  const [dados, setDados] = useState({
    nome: '',
    idade: '',
    email: ''
  });


  const handleMudança = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  };


  function handleMaioridade() {
    const idadeNumero = parseInt(dados.idade) || 0;
    return idadeNumero >= 18;
  }


  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Nome: </label>
          <input
            type='text'
            name='nome'
            value={dados.nome}
            onChange={handleMudança}
          />
        </div>
        <div>
          <label>Idade: </label>
          <input
            type='number'
            name='idade'
            value={dados.idade}
            onChange={handleMudança}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={dados.email}
            onChange={handleMudança}
          />
        </div>
      </form>
      <div>
        <h2>Dados fornecidos:</h2>
        <h5><strong>Nome: </strong> {dados.nome} </h5>
        <h5><strong>Idade: </strong> {dados.idade} </h5>
        <h5><strong>Email: </strong> {dados.email} </h5>
       
        {!handleMaioridade() ? (
          <div>Você é menor que 18 anos</div>
        ) : (
          <div>Você está na maioridade jurídica</div>
        )}
      </div>
    </div>
  );
}


export default App;
