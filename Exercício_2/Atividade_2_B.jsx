import "./App.css";

function BemVindo({ nome }) {
  nome = prompt("Digite seu nome:");
  return <h1>Bem vindo ao React {nome}</h1>;
}

export default function App() {
  return (
    <div>
      <BemVindo nome/>
    </div>
  );
}
