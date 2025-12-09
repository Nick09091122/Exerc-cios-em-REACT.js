import "./App.css";

function Saudacao({ Nome, Hora }) {
  return (
    <div>
      <h1 style={{ alignItems: "center" }}>Olá Capitão {Nome}</h1>
      <h4 style={{ alignItems: "center" }}>
        Atualmente são {Hora} horas no dia 29 de Abril de 1978 Em Hollow Zero
      </h4>
    </div>
  );
}

function BarraProgresso({ progresso = 65 }) {
  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "15px",
        margin: "20px 0",
        background: "linear-gradient(to right, #0a0a2a, #1a1a4a)",
        color: "white",
        minWidth: "300px",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#88ffff" }}>
        Status da Missão
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        <span>Florianópolis</span>
        <span style={{ color: "#ff4444" }}>Hollow Zero</span>
      </div>

      <div
        style={{
          height: "25px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            background: "linear-gradient(90deg, #00ff00, #00cc00)",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundImage:
                "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: `${progresso}%`,
            transform: "translateX(-50%)",
            fontSize: "2rem",
          }}
        >
          🚀
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#88ffff",
          fontSize: "14px",
        }}
      >
        {progresso}% da jornada concluída
      </div>
    </div>
  );
}

function RelatorioBordo() {
  const eventos = [
    {
      id: 1,
      titulo: "Lançamento da Terra",
      data: "29/04/1978 - 10:00",
      descricao: "Decolagem bem-sucedida do CEF",
      status: "concluido",
    },
    {
      id: 2,
      titulo: "Correção de Trajetória",
      data: "29/04/1978 - 14:30",
      descricao: "Ajuste orbital para otimização de combustível",
      status: "concluido",
    },
    {
      id: 3,
      titulo: "Atravessando Cinturão de Asteroides",
      data: "29/04/1978 - 19:00",
      descricao: "Navegação segura através da região de asteroides",
      status: "em_andamento",
    },
    {
      id: 4,
      titulo: "Preparação para Órbita Marciana",
      data: "30/04/1978 - 08:00",
      descricao:
        "Sistemas de entrada orbital e atividade Ethéria sendo verificados",
      status: "pendente",
    },
    {
      id: 5,
      titulo: "Pouso em Marte",
      data: "30/04/1978 - 15:00",
      descricao: "Sequência de aterrissagem automática iniciada",
      status: "pendente",
    },
  ];

  const getStatusIcon = (status) => {
    const icones = {
      concluido: "✅",
      em_andamento: "⏳",
      pendente: "🔄",
    };
    return icones[status] || "🔘";
  };

  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "15px",
        margin: "20px 0",
        background: "linear-gradient(to right, #0a0a2a, #1a1a4a)",
        color: "white",
        minWidth: "350px",
        maxHeight: "400px",
        overflowY: "auto",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#88ffff" }}>
        📋 Relatório de Bordo
      </h3>

      <div>
        {eventos.map((evento) => (
          <div
            key={evento.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "12px",
              marginBottom: "10px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              borderLeft: "4px solid #4488ff",
            }}
          >
            <div
              style={{
                background: "#4488ff",
                color: "#000",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                marginRight: "12px",
                flexShrink: "0",
              }}
            >
              {evento.id}
            </div>

            <div style={{ flex: "1" }}>
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: "#88ffff",
                }}
              >
                {evento.titulo}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#8888ff",
                  marginBottom: "4px",
                }}
              >
                {evento.data}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                {evento.descricao}
              </div>
            </div>

            <div
              style={{
                marginLeft: "12px",
                fontSize: "1.2rem",
              }}
            >
              {getStatusIcon(evento.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrevisaoTemporal({
  Local,
  Temperatura,
  Clima,
  Umidade,
  Radiacao,
  Gravidade,
}) {
  const getIcone = (Clima) => {
    const climas = {
      ensolarado: "☀️",
      chuvoso: "🌧️",
      nublado: "☁️",
      tempestuoso: "🌩️",
      nevando: "❄️",
    };
    return climas[Clima.toLowerCase()] || "🌈";
  };
  const getIcone1 = (Radiacao) => {
    const condicoes = {
      altapressão: "☠️",
      atividade: "☢️",
    };
    return condicoes[Radiacao.toLowerCase()] || "👍";
  };

  const getCorTemperatur = (Temperatura) => {
    if (Temperatura >= 30) return "red";
    if (Temperatura >= 20) return "orange";
    if (Temperatura >= 10) return "yellow";
    return "blue";
  };

  const getIcone2 = (Umidade) => {
    if (Umidade <= 40) return "🥀";
    if (Umidade > 40 && Umidade < 60) return "💨";
    return "💦";
  };

  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "2px",
        padding: "15px",
        marginTop: "",
        background: "linear-gradient(to right, #acf, #e6f7ff)",
        color: "white",
        maxWidth: "250px",
        minWidth: "50px",
      }}
    >
      <h2 style={{ margin: "0 0 15px 0" }}>{Local}</h2>
      <h5>A gravidade é {Gravidade}</h5>
      <div style={{ fontSize: "24px" }}>{getIcone(Clima)}</div>
      <div style={{ fontSize: "12px" }}>
        Nível de radiação: {getIcone1(Radiacao)}
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: getCorTemperatur(Temperatura),
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {" "}
        {Temperatura} Graus Célsius{" "}
      </div>
      <p style={{ margin: "10px 0 0 0", fontSize: "10px" }}> Clima: {Clima} </p>
      <p style={{ opacity: "0.9", fontSize: "12px" }}>
        {" "}
        Umidade: {Umidade}% {getIcone2(Umidade)}
      </p>
    </div>
  );
}

export default function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
    padding: "20px",
    background: "linear-gradient(135deg, #0a0a2a, #1a1a4a)",
    minHeight: "100vh",
  };

  const colunaEsquerdaStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const colunaDireitaStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={colunaEsquerdaStyle}>
        <Saudacao Nome={"Angpar"} Hora={19.39} />
        <BarraProgresso progresso={65} />
        <RelatorioBordo />
      </div>

      <div style={colunaDireitaStyle}>
        <PrevisaoTemporal
          Local="Marte"
          Temperatura={37}
          Clima="Ensolarado"
          Radiacao={"altapressão"}
          Gravidade={"10gs"}
          Umidade={"56"}
        />
        <PrevisaoTemporal
          Local="Júpiter"
          Temperatura={22}
          Clima="Nublado"
          Radiacao={""}
          Gravidade={"15gs"}
          Umidade={"20"}
        />
        <PrevisaoTemporal
          Local="Hollow Zero"
          Temperatura={28}
          Clima="Chuvoso"
          Radiacao={"altapressão"}
          Gravidade={"10gs"}
          Umidade={"80"}
        />
        <PrevisaoTemporal
          Local="Netuno"
          Temperatura={15}
          Clima="Tempestuoso"
          Radiacao={"atividade"}
          Gravidade={"4gs"}
          Umidade={"90"}
        />
        <PrevisaoTemporal
          Local="Florianópolis"
          Temperatura={8}
          Clima="Nevando"
          Radiacao={"atividade"}
          Gravidade={"10gs"}
          Umidade={"95"}
        />
      </div>
    </div>
  );
}
