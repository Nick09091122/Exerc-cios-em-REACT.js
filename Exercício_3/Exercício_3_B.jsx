import "./App.css";


function ListaFavorita() {
  const favoritos = [
    "Macarrão com carne moída",
    "Frango empanado",
    "Pedra de sal com um pouco de carne",
    "Sonho",
  ];
  return (
    <div>
      <h3>Coisas que são agradáveis de comer nessa ordem</h3>
      <ol>
        {favoritos.map((favorito, index) => (
          <li key={index}>{favorito}</li>
        ))}
      </ol>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <ListaFavorita />
    </div>
  );
}
