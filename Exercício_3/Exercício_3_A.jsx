import "./App.css";


function ListaFavorita() {
  const favoritos = ["Jogar", "Cantar", "Escrever"];
  return (
    <div>
      {" "}
      <h3>Coisas que são agradáveis de fazer</h3>,
      <ul>
        {favoritos.map((favorito, index) => (
          <li key={index}>{favorito}</li>
        ))}
      </ul>
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
