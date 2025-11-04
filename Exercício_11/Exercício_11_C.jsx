import React from 'react';
import { useState } from 'react';




function App() {
const [dados, setdados] = useState({
  cidade: '',
  estado: '',
  CEP: ''
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
        <label>cidade:  </label>
        <input type='text' name='cidade' value={dados.null} onChange={handleMudança}></input>
        <label>estado:  </label>
        <input type='number' name='estado' value={dados.null} onChange={handleMudança}></input>
        <label>CEP:  </label>
        <input type='number' name='CEP' value={dados.null} onChange={handleMudança}></input>
      </div>
      </form>
      <div>
        <h2>Dados fornecidos:</h2>
          <h5><strong>cidade: </strong> {dados.nome} </h5>
          <h5><strong>estado: </strong> {dados.idade} </h5>
          <h5><strong>CEP: </strong> {dados.email} </h5>
        </div>
    </div>
  )
}

export default App;
