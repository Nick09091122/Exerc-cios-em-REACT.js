import React from "react";
import "./App.css";

function StatusJogo({ nivel, pontos }) {
  const pontosMax = nivel * 1000;
  const progresso = Math.min((pontos / pontosMax) * 100, 100);
  
  // Definindo cores diretamente no estilo
  const corBarra = progresso < 30 ? "#ff4757" : (progresso < 70) ? "#ffa502" : "#2ed573";

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#b9e9f6ff',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: '10px 0', color: '#333' }}>Nível: {nivel}</h2>
      <h2 style={{ margin: '10px 0', color: '#333' }}>Pontos: {pontos} / {pontosMax}</h2>
      
      {/* Container da barra de progresso */}
      <div>
        {/* Barra de progresso interna */}
        <div style={{
          width: `${progresso}%`,
          height: '100%',
          backgroundColor: corBarra,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '10px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          {progresso >= 50 && `${progresso.toFixed(1)}%`}
        </div>
      </div>
      
      <p style={{ 
        margin: '10px 0', 
        color: '#666', 
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        {progresso.toFixed(1)}% completo
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <StatusJogo nivel={7} pontos={6500} />
    </div>
  );
}