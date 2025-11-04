import React from 'react';
import { useState } from 'react';


function App() {
const [dados, setdados] = useState({
  corCabelo: '',
  Acessorios: '',
  corOlhos: ''
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
        <label>Escolha uma das opções de cabelo:  </label>
       <select name='corCabelo' value={dados.corCabelo} onChange={handleMudança}>
        <option value='Careca'>Careca</option>
        <option value='Loiro'>Loiro</option>
        <option value='Moreno'>Moreno</option>
        <option value='Ruivo'>Ruivo</option>
        <option value='Preto'>Preto</option>
      </select>
        <label>Acessórios desejados:  </label>
        <input type='text' name='Acessorios' value={dados.null} onChange={handleMudança}></input>
        <label>Cor de olhos:  </label>
   <select name='corOlhos' value={dados.corOlhos} onChange={handleMudança}>
        <option value='Castanho'>Castanhos</option>
        <option value='Castanho_Claro'>Castanhos Claros</option>
        <option value='Vermelho'>Vermelhos</option>
        <option value='Negros'>Negros</option>
        <option value='Branco'>Brancos</option>
      </select>
      </div>
      </form>
      <div>
        <h2>Dados fornecidos:</h2>
          <h5><strong>A cor de seu cabelo: </strong> {dados.corCabelo} </h5>
          <h5><strong>Os acessórios selecionados: </strong> {dados.Acessorios} </h5>
          <h5><strong>Seus olhos: </strong> {dados.corOlhos} </h5>
        </div>
    </div>
  )
}

export default App;
