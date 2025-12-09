import "./App.css";
import React, { useState } from "react";

const classes = [
  {
    nome: "Guerreiro",vida: +0,força: 3,vitalidade: 3,conhecimento: 2,técnica: 50,
  },
  {
    nome: "Mago",vida: +0,força: 2,vitalidade: 1,conhecimento: 5,técnica: 10,
  },
  {
    nome: "Assassino",vida: +0,força: 6,vitalidade: 0,conhecimento: 3,técnica: 70,
  },
  {
    nome: "Bárbaro",vida: +0,força: 5,vitalidade: 6,conhecimento: 0,técnica: 0,
  },
];

const raças = [
  {
    nome: "Humano",
    vida: 10,
    força: 1,
    vitalidade: 1,
    conhecimento: 1,
    técnica: 5,
  },
  {
    nome: "Elfo",
    vida: 5,
    força: -1,
    vitalidade: 0,
    conhecimento: 3,
    técnica: 10,
  },
  {
    nome: "Anão",
    vida: 15,
    força: 3,
    vitalidade: 2,
    conhecimento: -3,
    técnica: 20,
  },
  {
    nome: "SuperHumano",
    vida: 100,
    força: 10,
    vitalidade: 10,
    conhecimento: 10,
    técnica: 100,
  },
];
const itensDisponiveis = [
  { id: 1, nome: "Capacete", tipo: "Cabeça", Encantamento: "Mágico", Shellings: 15 },
  { id: 2, nome: "Espada", tipo: "Arma", Encantamento: "Especial", Shellings: 25 },
  { id: 3, nome: 'Poção', tipo: 'Consumível', Encantamento: 'Nenhum', Shellings: 3, efeito: 'cura' },
  { id: 4, nome: "Armadura", tipo: "Torso", Encantamento: "Forte", Shellings: 20 },
  { id: 5, nome: "Escudo", tipo: "Escudo", Encantamento: "Épico", Shellings: 30 },
];
const inimigos = [
  {
    nome: "Goblin",
    vida: 30,
    força: 3,
    vitalidade: 2,
    conhecimento: 1,
    técnica: 10,
  },
  {
    nome: "Orc",
    vida: 50,
    força: 5,
    vitalidade: 4,
    conhecimento: 0,
    técnica: 5,
  },
  {
    nome: "Lobo Selvagem",
    vida: 25,
    força: 4,
    vitalidade: 3,
    conhecimento: 0,
    técnica: 15,
  },
  {
    nome: "Feiticeiro Sombrio",
    vida: 40,
    força: 2,
    vitalidade: 2,
    conhecimento: 6,
    técnica: 25,
  },
];

function Jogador({ nome, raça, classe, inventario, emCombate, atributos, nivel, xp, shellings }) {
  const xpParaProximoNivel = 100;
  const progressoXP = (xp % xpParaProximoNivel) / xpParaProximoNivel * 100;

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "20px", 
      margin: "20px", 
      borderRadius: "10px",
      backgroundColor: "#4CAF50"
    }}>
      <h2>Status do Personagem</h2>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Raça:</strong> {raça}</p>
      <p><strong>Classe:</strong> {classe}</p>
      <p><strong>Nível:</strong> {nivel}</p>
      <p><strong>XP:</strong> {xp}/{nivel * 100}</p>
      <p><strong>Shellings:</strong> {shellings} </p>
      
      <div style={{ margin: "10px 0" }}>
        <div style={{ 
          width: "100%", 
          height: "20px", 
          backgroundColor: "#ddd", 
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div 
            style={{ 
              height: "100%", 
              backgroundColor: "#21E5F3",
              width: `${progressoXP}%`,
              transition: "width 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "white",
              fontWeight: "bold"
            }}
          >
            {Math.round(progressoXP)}%
          </div>
        </div>
      </div>
      
      {atributos && (
        <>
          <h3>Atributos Finais:</h3>
          <p><strong>Vida:</strong> {atributos.vida}</p>
          <p><strong>Força:</strong> {atributos.força}</p>
          <p><strong>Vitalidade:</strong> {atributos.vitalidade}</p>
          <p><strong>Conhecimento:</strong> {atributos.conhecimento}</p>
          <p><strong>Técnica:</strong> {atributos.técnica}</p>
        </>
      )}
    </div>
  );
}

function Loja({ shellings, comprarItem, inventario }) {
  const pocoesNoInventario = inventario.filter(item => item.nome === "Poção").length;

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "20px", 
      margin: "20px", 
      borderRadius: "10px",
      backgroundColor: "#101010",
      color: "white"
    }}>
      <h3>Loja</h3>
      <p><strong>Seus Shellings:</strong> {shellings} 💰</p>
      <p><strong>Poções no inventário:</strong> {pocoesNoInventario}</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
        {itensDisponiveis.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #444",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#1a1a1a"
            }}
          >
            <strong style={{ color: getCorEncantamento(item.Encantamento) }}>{item.nome}</strong>
            <div style={{ fontSize: "12px", marginTop: "5px" }}>
              <div>Tipo: {item.tipo}</div>
              <div>Encantamento: {item.Encantamento}</div>
              <div style={{ color: "#FFD700", marginTop: "5px" }}>
                Preço: {item.Shellings}
              </div>
            </div>
            <button
              onClick={() => comprarItem(item)}
              disabled={shellings < item.Shellings}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "10px",
                backgroundColor: shellings >= item.Shellings ? "#4CAF50" : "#666",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: shellings >= item.Shellings ? "pointer" : "not-allowed"
              }}
            >
              {shellings >= item.Shellings ? "Comprar" : "Shellings Insuficientes"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Inventario({ inventario }) {
  const pocoes = inventario.filter(item => item.nome === "Poção");
  const outrosItens = inventario.filter(item => item.nome !== "Poção");

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "20px", 
      margin: "20px", 
      borderRadius: "10px",
      backgroundColor: "#101010",
      color: "white"
    }}>
      <h3>Seu Inventário</h3>
      
      <div>
        <h4>Poções de Cura ({pocoes.length})</h4>
        {pocoes.length === 0 ? (
          <p style={{ color: "#666" }}>Você não tem poções</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {pocoes.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #4CAF50",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#1a3a1a"
                }}
              >
                <strong>{item.nome}</strong>
                <div style={{ fontSize: "12px" }}>
                  Tipo: {item.tipo}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Outros Itens ({outrosItens.length}/20):</h4>
        {outrosItens.length === 0 ? (
          <p style={{ color: "#666" }}>Seu inventário está vazio</p>
        ) : (
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
            gap: "10px" 
          }}>
            {outrosItens.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#1a1a1a"
                }}
              >
                <strong style={{ color: getCorEncantamento(item.Encantamento) }}>{item.nome}</strong>
                <div style={{ fontSize: "12px" }}>
                  Tipo: {item.tipo}
                </div>
                <div style={{ fontSize: "12px" }}>
                  Encantamento: <span style={{ color: getCorEncantamento(item.Encantamento) }}>
                    {item.Encantamento}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SistemaCombate({ 
  jogador, 
  atributosJogador, 
  onSairCombate, 
  inventario, 
  onUsarPocao,
  onInimigoDerrotado 
}) {
  const [inimigoAtual, setInimigoAtual] = useState(() => 
    inimigos[Math.floor(Math.random() * inimigos.length)]
  );
  const [vidaJogador, setVidaJogador] = useState(atributosJogador.vida);
  const [vidaInimigo, setVidaInimigo] = useState(inimigoAtual.vida);
  const [mensagem, setMensagem] = useState("Combate iniciado! Escolha uma ação.");
  const [combateAtivo, setCombateAtivo] = useState(true);

  const pocoesDisponiveis = inventario.filter(item => item.nome === "Poção").length;

  const calcularDano = (atacante, defensor) => {
    const danoBase = atacante.força + Math.floor(Math.random() * 5);
    const defesa = defensor.vitalidade;
    return Math.max(1, danoBase - defesa);
  };

  const atacar = () => {
    if (!combateAtivo) return;

    // Jogador ataca
    const danoJogador = calcularDano(atributosJogador, inimigoAtual);
    const novaVidaInimigo = Math.max(0, vidaInimigo - danoJogador);
    setVidaInimigo(novaVidaInimigo);
    
    let novaMensagem = `Você ataca o ${inimigoAtual.nome} causando ${danoJogador} de dano!`;

    // Verifica se inimigo foi derrotado
    if (novaVidaInimigo <= 0) {
      setCombateAtivo(false);
      setMensagem(`🎉 Você derrotou o ${inimigoAtual.nome}! +10 XP`);
      onInimigoDerrotado();
      return;
    }

    // Inimigo contra-ataca
    const danoInimigo = calcularDano(inimigoAtual, atributosJogador);
    const novaVidaJogador = Math.max(0, vidaJogador - danoInimigo);
    setVidaJogador(novaVidaJogador);
    
    novaMensagem += ` O ${inimigoAtual.nome} contra-ataca causando ${danoInimigo} de dano!`;

    // Verifica se jogador foi derrotado
    if (novaVidaJogador <= 0) {
      setCombateAtivo(false);
      setMensagem(`💀 Você foi derrotado pelo ${inimigoAtual.nome}...`);
      return;
    }

    setMensagem(novaMensagem);
  };

  const usarPocao = () => {
    if (!combateAtivo || pocoesDisponiveis === 0) return;

    const cura = 25; // Cura fixa das poções
    const novaVidaJogador = Math.min(atributosJogador.vida, vidaJogador + cura);
    setVidaJogador(novaVidaJogador);

    // Remove uma poção do inventário
    onUsarPocao();

    // Inimigo ataca durante o uso da poção
    const danoInimigo = calcularDano(inimigoAtual, atributosJogador);
    const vidaAposCura = Math.max(0, novaVidaJogador - danoInimigo);
    setVidaJogador(vidaAposCura);

    let novaMensagem = `🧪 Você usa uma poção e recupera ${cura} de vida. `;
    
    if (vidaAposCura <= 0) {
      setCombateAtivo(false);
      setMensagem(`💀 Você foi derrotado pelo ${inimigoAtual.nome} enquanto usava a poção...`);
    } else {
      novaMensagem += `O ${inimigoAtual.nome} ataca causando ${danoInimigo} de dano!`;
      setMensagem(novaMensagem);
    }
  };

  const novoCombate = () => {
    const novoInimigo = inimigos[Math.floor(Math.random() * inimigos.length)];
    setInimigoAtual(novoInimigo);
    setVidaJogador(atributosJogador.vida);
    setVidaInimigo(novoInimigo.vida);
    setMensagem("Novo combate iniciado! Escolha uma ação.");
    setCombateAtivo(true);
  };

  return (
    <div style={{ 
      border: "2px solid #ff6b6b", 
      padding: "20px", 
      margin: "20px", 
      borderRadius: "10px",
      backgroundColor: "#101010",
      color: "white"
    }}>
      <h2>Combate</h2>
      
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>Seu Personagem</h3>
          <div style={{ border: "1px solid #4CAF50", padding: "10px", borderRadius: "5px" }}>
            <p><strong>Vida:</strong> {vidaJogador}/{atributosJogador.vida}</p>
            <p><strong>Força:</strong> {atributosJogador.força}</p>
            <p><strong>Vitalidade:</strong> {atributosJogador.vitalidade}</p>
            <p><strong>Poções:</strong> {pocoesDisponiveis}</p>
            <div style={{ 
              width: "100%", 
              height: "20px", 
              backgroundColor: "#101010", 
              borderRadius: "10px",
              margin: "5px 0"
            }}>
              <div 
                style={{ 
                  height: "100%", 
                  backgroundColor:  vidaJogador > atributosJogador.vida * 0.6 ? '#4CAF50' : 
                  (vidaJogador > atributosJogador.vida * 0.3 ? "#EDFC62" : "#f44336"),
                  borderRadius: "10px",
                  width: `${(vidaJogador / atributosJogador.vida) * 100}%`,
                  transition: "width 0.3s ease"
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>{inimigoAtual.nome}</h3>
          <div style={{ border: "1px solid #ff4444", padding: "10px", borderRadius: "5px" }}>
            <p><strong>Vida:</strong> {vidaInimigo}/{inimigoAtual.vida}</p>
            <p><strong>Força:</strong> {inimigoAtual.força}</p>
            <p><strong>Vitalidade:</strong> {inimigoAtual.vitalidade}</p>
            <div style={{ 
              width: "100%", 
              height: "20px", 
              backgroundColor: "#333", 
              borderRadius: "10px",
              margin: "5px 0"
            }}>
              <div 
                style={{ 
                  height: "100%", 
                  backgroundColor: vidaInimigo > inimigoAtual.vida * 0.3 ? "#ff4444" : "#8B0000",
                  borderRadius: "10px",
                  width: `${(vidaInimigo / inimigoAtual.vida) * 100}%`,
                  transition: "width 0.3s ease"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mensagem do Combate */}
      <div style={{ 
        margin: "20px 0", 
        padding: "15px", 
        backgroundColor: "#2a2a2a", 
        borderRadius: "5px",
        border: "1px solid #444"
      }}>
        <strong>{mensagem}</strong>
      </div>

      {/* Ações */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        <button 
          onClick={atacar}
          disabled={!combateAtivo}
          style={{
            padding: "12px 24px",
            backgroundColor: combateAtivo ? "#f44336" : "#666",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        >
          Atacar
        </button>
        
        <button 
          onClick={usarPocao}
          disabled={!combateAtivo || pocoesDisponiveis === 0}
          style={{
            padding: "12px 24px",
            backgroundColor: (combateAtivo && pocoesDisponiveis > 0) ? "#4CAF50" : "#666",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        >
          Usar Poção ({pocoesDisponiveis})
        </button>
        
        {!combateAtivo && (
          <button 
            onClick={novoCombate}
            style={{
              padding: "12px 24px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
             Novo Combate
          </button>
        )}
        
        <button 
          onClick={onSairCombate}
          style={{
            padding: "12px 24px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
           Sair do Combate
        </button>
      </div>
    </div>
  );
}

function getCorEncantamento(encantamento) {
  switch (encantamento) {
    case "Especial": return "#4CAF50";
    case "Forte": return "#666";
    case "Épico": return "#2196F3";
    case "Mágico": return "#FF9800";
    default: return "#fff";
  }
}

function Telainicial() {
  const [nome, setNome] = useState("");
  const [raçaSelecionada, setRaçaSelecionada] = useState("");
  const [classeSelecionada, setClasseSelecionada] = useState("");
  const [nomeRegistrado, setNomeRegistrado] = useState(false);
  const [personagemCompleto, setPersonagemCompleto] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [emCombate, setEmCombate] = useState(false);
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);
  const [shellings, setShellings] = useState(20);
  const [mostrarLoja, setMostrarLoja] = useState(false);

  const calcularAtributos = () => {
    if (!raçaSelecionada || !classeSelecionada) return null;

    const raça = raças.find(r => r.nome === raçaSelecionada);
    const classe = classes.find(c => c.nome === classeSelecionada);

    const vidaBonus = (nivel - 1) * 5;

    return {
      vida: raça.vida + classe.vida + vidaBonus,
      força: raça.força + classe.força,
      vitalidade: raça.vitalidade + classe.vitalidade,
      conhecimento: raça.conhecimento + classe.conhecimento,
      técnica: raça.técnica + classe.técnica,
    };
  };

  const atributosJogador = calcularAtributos();

  const handleRegistrarNome = () => {
    if (nome.trim() !== "") {
      setNomeRegistrado(true);
    } else {
      alert("Por favor, digite um nome válido");
    }
  };

  const handleSelecionarRaça = (raça) => {
    setRaçaSelecionada(raça);
  };

  const handleSelecionarClasse = (classe) => {
    setClasseSelecionada(classe);
  };

  const handleFinalizarPersonagem = () => {
    if (raçaSelecionada && classeSelecionada) {
      setPersonagemCompleto(true);
    } else {
      alert("Por favor, selecione uma raça e uma classe");
    }
  };

  const comprarItem = (item) => {
    if (shellings >= item.Shellings) {
      setShellings(shellings - item.Shellings);
      setInventario([...inventario, item]);
      alert(`Você comprou ${item.nome} por ${item.Shellings} Shellings!`);
    }
  };

  const usarPocao = () => {
    const indexPocao = inventario.findIndex(item => item.nome === "Poção");
    if (indexPocao !== -1) {
      const novoInventario = [...inventario];
      novoInventario.splice(indexPocao, 1);
      setInventario(novoInventario);
    }
  };

  const entrarCombate = () => {
    setEmCombate(true);
  };

  const sairCombate = () => {
    setEmCombate(false);
  };

  const handleInimigoDerrotado = () => {
    const xpGanho = 10;
    const shellingsGanhos = 5;
    
    setXp(xp + xpGanho);
    setShellings(shellings + shellingsGanhos);
    
    const xpNecessario = nivel * 100;
    if (xp + xpGanho >= xpNecessario) {
      const novosNiveis = Math.floor((xp + xpGanho) / 100) + 1;
      setNivel(novosNiveis);
      alert(`🎉 Parabéns! Você subiu para o nível ${novosNiveis}! +5 de Vida!`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#1a1a1a", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Criação de Personagem</h1>
      
      {!nomeRegistrado ? (
        <div style={{ textAlign: "center" }}>
          <h4>Escreva seu nome</h4>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Escreva vosso nome"
            style={{ 
              width: "200px", 
              height: "30px", 
              fontSize: "16px",
              padding: "5px",
              margin: "10px",
              backgroundColor: "#333",
              color: "white",
              border: "1px solid #444"
            }}
          />
          <br />
          <button 
            onClick={handleRegistrarNome}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Registrar nome
          </button>
        </div>
      ) : !personagemCompleto ? (
        <div>
          <h2 style={{ textAlign: "center" }}>Personagem em Criação!</h2>
          <p style={{ textAlign: "center" }}><strong>Nome:</strong> {nome}</p>
          <p style={{ textAlign: "center" }}>Agora escolha sua raça e classe.</p>

          {/* Seleção de Raça */}
          <div style={{ margin: "30px 0" }}>
            <h3>Selecione sua Raça:</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {raças.map((raça, index) => (
                <button
                  key={index}
                  onClick={() => handleSelecionarRaça(raça.nome)}
                  style={{
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: raçaSelecionada === raça.nome ? "#4CAF50" : "#333",
                    color: "white",
                    minWidth: "150px",
                    textAlign: "left",
                    border: raçaSelecionada === raça.nome ? "2px solid #fff" : "1px solid #444",
                    cursor: "pointer"
                  }}
                >
                  <strong>{raça.nome}</strong>
                  <div style={{ fontSize: "12px", marginTop: "5px" }}>
                    <div>Vida: {raça.vida}</div>
                    <div>Força: {raça.força}</div>
                    <div>Vitalidade: {raça.vitalidade}</div>
                    <div>Conhecimento: {raça.conhecimento}</div>
                    <div>Técnica: {raça.técnica}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {raçaSelecionada && (
            <div style={{ margin: "30px 0" }}>
              <h3>Selecione sua Classe:</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {classes.map((classe, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelecionarClasse(classe.nome)}
                    style={{
                      padding: "15px",
                      borderRadius: "8px",
                      backgroundColor: classeSelecionada === classe.nome ? "#2196F3" : "#333",
                      color: "white",
                      minWidth: "150px",
                      textAlign: "left",
                      border: classeSelecionada === classe.nome ? "2px solid #fff" : "1px solid #444",
                    }}
                  >
                    <strong>{classe.nome}</strong>
                    <div style={{ fontSize: "12px", marginTop: "5px" }}>
                      <div>Força: {classe.força}</div>
                      <div>Vitalidade: {classe.vitalidade}</div>
                      <div>Conhecimento: {classe.conhecimento}</div>
                      <div>Técnica: {classe.técnica}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {raçaSelecionada && classeSelecionada && (
            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <button
                onClick={handleFinalizarPersonagem}
                style={{
                  padding: "15px 30px",
                  fontSize: "18px",
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Finalizar Personagem
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2>Personagem Criado com Sucesso!</h2>
            <button
              onClick={entrarCombate}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                margin: "5px"
              }}
            >
              Entrar em Combate
            </button>
            <button
              onClick={() => setMostrarLoja(!mostrarLoja)}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: "#FF9800",
                color: "white",
                border: "none",
                borderRadius: "5px",
                margin: "5px"
              }}
            >
              {mostrarLoja ? "Fechar Loja" : "Loja"}
            </button>
          </div>

          <Jogador 
            nome={nome} 
            raça={raçaSelecionada} 
            classe={classeSelecionada}
            inventario={inventario}
            emCombate={emCombate}
            atributos={atributosJogador}
            nivel={nivel}
            xp={xp}
            shellings={shellings}
          />

          {emCombate ? (
            <SistemaCombate 
              jogador={{ nome, raça: raçaSelecionada, classe: classeSelecionada }}
              atributosJogador={atributosJogador}
              onSairCombate={sairCombate}
              inventario={inventario}
              onUsarPocao={usarPocao}
              onInimigoDerrotado={handleInimigoDerrotado}
            />
          ) : mostrarLoja ? (
            <Loja 
              shellings={shellings}
              comprarItem={comprarItem}
              inventario={inventario}
            />
          ) : (
            <Inventario 
              inventario={inventario}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Telainicial;