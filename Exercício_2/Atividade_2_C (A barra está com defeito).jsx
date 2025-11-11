import "./App.css";


function StatusJogo({nivel, pontos}) {
  const pontosMax = nivel * 1000;
  const progresso = Math.min((pontos / pontosMax) * 100, 100); // Corrigido Math.min() e parênteses
  const corBarra = progresso < 30 ? "vermelho" : progresso < 70 ? "amarelo" : "verde";


  return (
    <div className="status-jogo">
      <h2>Nível: {nivel}</h2>
      <h2>Pontos: {pontos} / {pontosMax}</h2>
      <div className="barra-progresso">
        <div className={`progresso ${corBarra}`} style={{width: `${progresso}%`}}></div>
      </div>
      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <StatusJogo nivel={5} pontos={2000} />
    </div>
  );
}
