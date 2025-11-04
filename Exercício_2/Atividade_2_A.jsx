import "./App.css";


function BemVindo({ nome }) {
  return <h1>Bem vindo ao React {nome}</h1>;
}


export default function App() {
  return (
    <div>
      <BemVindo nome = 'Explosivo'/>
    </div>
  );
}
