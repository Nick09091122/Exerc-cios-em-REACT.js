import "./App.css";


function MenuRestaurante() {
  const pratos = [
    { nome: "Lasanha", preco: 25.0, descricao: "Lasanha à bolonhesa" },
    { nome: "Pizza", preco: 30.0, descricao: "Pizza de calabresa" },
    { nome: "Salada", preco: 15.0, descricao: "Salada verde com molho especial" },
    { nome: "Sushi", preco: 40.0, descricao: "Combinado de sushi variado" },
    ];
    return (
      <div>
        <h1>Menu do Restaurante</h1>
        <div className="menu">
          {pratos.map((prato, index) => (
            <div key={index} className="Cardprato">
              <h4>{prato.nome}</h4>
              <p className="preco">{prato.preco.toFixed(2)}</p>
              <p className="descricao">{prato.descricao}</p>
        </div>)
          )}
        </div>
      </div>
    );
  }


export default function App() {
  return (
    <div>
      <MenuRestaurante/>
    </div>
  );
}
