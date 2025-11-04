import "./App.css";


function CartaoPessoal({nome, idade, profissao}) {
  return (
    <div className="cartao">
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}




export default function App() {
  return (
    <div>
      <CartaoPessoal nome = 'Juão' idade = {67} profissao = 'Herdeiro'/>
    </div>
  );
}
