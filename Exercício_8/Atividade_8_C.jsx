import './App.css';
import React, { useState } from "react";


function ObjetoTime() {
  // Estado para o time atual (objeto)
  const [time, setTime] = useState({
    nome: '',
    pontuacao: ''
  });


  // Estado para a lista de times (array)
  const [listaTimes, setListaTimes] = useState([]);


  const adicionarTime = () => {
    if (time.nome.trim() && time.pontuacao.trim()) {
      setListaTimes([...listaTimes, { ...time, id: Date.now() }]);
      // Resetar o formulário
      setTime({
        nome: '',
        pontuacao: ''
      });
    }
  };


  const getMedalha = (pontuacao) => {
    if (pontuacao >= 90) return '🥇';
    if (pontuacao >= 70) return '🥈';
    if (pontuacao >= 50) return '🥉';
    return '🎖️';
  };


  // Função para atualizar uma propriedade específica do time
  const atualizarTime = (propriedade, valor) => {
    setTime(prevTime => ({
      ...prevTime,
      [propriedade]: valor
    }));
  };


  // Ordenar times por pontuação (maior para menor)
  const timesOrdenados = [...listaTimes].sort((a, b) => b.pontuacao - a.pontuacao);


  return (
    <div>
      <h1 style={{textShadow: '0 1px 2px black', fontSize: '24px', minWidth: '444px'}}>
        Lista de Times
      </h1>
     
      <div>
        <input
          type="text"
          value={time.nome}
          onChange={(e) => atualizarTime('nome', e.target.value)}
          placeholder='Escreva o nome do time'
          style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '305px' }}
        />
        <input
          type='number'
          value={time.pontuacao}
          onChange={(e) => atualizarTime('pontuacao', e.target.value)}
          placeholder='Pontuação'
          style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '100px', marginLeft: '10px' }}
        />
       
        <div style={{marginTop: '10px'}}>
          <button onClick={adicionarTime}>Registre a possível lenda</button>
        </div>
       
        <ul style={{ backgroundColor: '#221100', padding: '20px', marginTop: '20px', listStyle: 'none' }}>
          {timesOrdenados.map((timeItem, index) => (
            <li key={timeItem.id} style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#331100',
              borderRadius: '4px',
              border: '1px solid #553300',
              color: 'white'
            }}>
              <span style={{ marginRight: '8px' }}>
                {getMedalha(Number(timeItem.pontuacao))}
              </span>
              <strong>{timeItem.nome}</strong> - {timeItem.pontuacao} pontos
              <span style={{ float: 'right', color: '#ffd700' }}>
                #{index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default ObjetoTime;
