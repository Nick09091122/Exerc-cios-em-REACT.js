import './App.css';
import React, { useState } from "react";




function TextoReal() {
    const [texto, setTexto] = useState("");
    if (texto.length > 50) {
          setTexto(texto.slice(0, 50));
        }


    return (


      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreva algo por favor."
          style={{ width: "300px", height: "30px", fontSize: "16px" }}
        />
        <h2>{texto.toUpperCase()}</h2>
        <h3>{texto.length} / 50</h3>
      </div>
      );
}




export default TextoReal;
