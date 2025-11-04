import React from 'react';
import { useState } from 'react';

function App() {
const [dados, setdados] = useState({
  nome: '',
  idade: '',
  email: ''
});

  const handleMudança = (e) => {
    const {name , value} = e.target;
    setdados ({
      ...dados,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Formulário</h2>
      <form>
      <div>
        <label>Nome:  </label>
        <input type='text' name='nome' value={dados.null} onChange={handleMudança}></input>
        <label>Idade:  </label>
        <input type='number' name='idade' value={dados.null} onChange={handleMudança}></input>
        <label>Email:  </label>
        <input type='text' name='email' value={dados.null} onChange={handleMudança}></input>
      </div>
      </form>
      <div>
        <h2>Dados fornecidos:</h2>
          <h5><strong>Nome: </strong> {dados.nome} </h5>
          <h5><strong>Idade: </strong> {dados.idade} </h5>
          <h5><strong>Email: </strong> {dados.email} </h5>
        </div>
    </div>
  )
}

export default App;
