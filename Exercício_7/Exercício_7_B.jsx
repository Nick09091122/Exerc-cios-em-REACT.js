import './App.css';
import React, { useState } from "react";


function TextoReal() {
    const [texto, setTexto] = useState("");


    return (
      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreva algo por favor."
        />
        <h2>{texto.toUpperCase()}</h2>
      </div>
      );
}


export default TextoReal;
