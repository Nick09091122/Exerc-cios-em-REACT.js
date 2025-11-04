import "./App.css";


function PrevisaoTemporal({Local, Temperatura, Clima, Umidade}) {
 const getIcone = (Clima) => {
  const climas = {
    'ensolarado': '☀️',
    'chuvoso': '🌧️',
    'nublado': '☁️',
    'tempestuoso': '🌩️',
    'nevando': '❄️',
  };
  return climas[Clima.toLowerCase()] || '🌈';
 }


 const getCorTemperatur = (Temperatura) => {
  if (Temperatura >= 30) return 'red';
  if (Temperatura >= 20) return 'orange';
  if (Temperatura >= 10) return 'yellow';
  return 'blue';
 }


 return (
  <div style={{
    border: '2px solid #ddd',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #acf, #e6f7ff)',
    color: 'white',
    maxWidth: '250px',
    minWidth: '100px',
  }} >
    <h2 style={{ margin: '0 0 15px 0'}}>{Local}</h2>
    <div style={{ fontSize: '48px' }}>{getIcone(Clima)}</div>
    <div style={{
      fontSize: '32px',
      fontWeight: 'bold',
      color: getCorTemperatur(Temperatura),
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    }}> {Temperatura} Graus Célsius </div>
    <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}> Clima: {Clima} </p>
    <p style={{ opacity: '0.9', fontSize: '12px' }}> Umidade: {Umidade}% </p>
  </div>);
}


export default function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '50px',
  };
  return (
    <div style={containerStyle}>
      <PrevisaoTemporal Local='Curitiba' Temperatura={37} Clima='Ensolarado' Umidade={'56'}/>
      <PrevisaoTemporal Local='São Paulo' Temperatura={22} Clima='Nublado' Umidade={'70'}/>
      <PrevisaoTemporal Local='Rio de Janeiro' Temperatura={28} Clima='Chuvoso' Umidade={'80'}/>
      <PrevisaoTemporal Local='Porto Alegre' Temperatura={15} Clima='Tempestuoso' Umidade={'90'}/>
      <PrevisaoTemporal Local='Florianópolis' Temperatura={8} Clima='Nevando' Umidade={'95'}/>
    </div>
  );
}
