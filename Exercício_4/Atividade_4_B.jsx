import "./App.css";


function CartaoLivro({Titulo, Autor, Ano, Genero}) {
  return (
    <div className="cartaolivristico">
      <h1>Obra: {Titulo}</h1>
      <h3>Genero: {Genero}</h3>
      <h4>Publicado em: {Ano}</h4>
      <h5>Por: {Autor}</h5>
    </div>
  );
}




export default function App() {
  return (
    <div>
      <CartaoLivro Titulo={'As fábulas de um Neandertal'} Autor={'Labrubru e Lakaca'} Ano = {1984} Genero = {'Educacional'} />
    </div>
  );
}
