import "./App.css";


function Datahoraautal() {
  const agora = new Date();
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    return (<h1> o instante atual é {diaSemana}, {dia} de {mes} do ano {ano}</h1>);
}


function Ola() {
  return <h2>Olá meu manolo</h2>;
}


export default function App() {
  return (
    <div>
      <Ola/>
      <Datahoraautal/>
    </div>
  );
}
