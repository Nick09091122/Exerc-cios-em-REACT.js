import React, { useState } from 'react';


function TextoComprimental() {


  const [texto, setTexto] = useState('');
  const Validacao = texto.length >= 3;
  const mostrarMensagem = texto.length > 0;
  const mensagem = Validacao ? 'Texto válido!' : 'Digite pelo menos 3 caracteres';
  const MensagemCor = Validacao ? 'green' : 'red';


  return (
    <div>
      <input
        type="text"
        id="meuInput"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Mínimo de 3 caracteres..."
        style={{ border: mostrarMensagem ? `2px solid ${MensagemCor}` : '1px solid #ccc' }}
      />


      {mostrarMensagem && (
        <p style={{ color: MensagemCor, marginTop: '5px' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}


export default TextoComprimental;