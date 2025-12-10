import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const styles = {
  // Cores principais NÃO ESQUEÇA
  colors: {
    preto: "#121212",
    pretoClaro: "#181818",
    pretoMedio: "#282828",
    rosa: "#f53179ff",
    rosaClaro: "#ff7eb3",
    rosaEscuro: "#91274cff",
    branco: "#ffffff",
    cinza: "#b3b3b3",
    cinzaEscuro: "#535353",
  },

  // Layout principal
  app: {
    backgroundColor: "#121212",
    color: "#ffffff",
    minHeight: "100vh",
    fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gridTemplateRows: "auto 1fr 90px",
    gridTemplateAreas: `
      "sidebar header"
      "sidebar main"
      "player player"
    `,
    height: "100vh",
  },

  header: {
    gridArea: "header",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    padding: "20px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #282828",
  },

  sidebar: {
    gridArea: "sidebar",
    backgroundColor: "#000000",
    padding: "24px 12px",
    overflowY: "auto",
  },

  main: {
    gridArea: "main",
    padding: "24px 32px",
    overflowY: "auto",
    backgroundColor: "#121212",
  },

  player: {
    gridArea: "player",
    backgroundColor: "#181818",
    borderTop: "1px solid #282828",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
};

// ============ COMPONENTE: HEADER ============
function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header style={styles.header}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: styles.colors.branco,
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            backgroundColor: styles.colors.pretoMedio,
          }}
        >
          ←
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: styles.colors.branco,
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            backgroundColor: styles.colors.pretoMedio,
          }}
        >
          →
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: "400px",
        }}
      >
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: "100%",
            padding: "12px 48px 12px 48px",
            borderRadius: "500px",
            border: "none",
            backgroundColor: styles.colors.pretoMedio,
            color: styles.colors.branco,
            fontSize: "14px",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "16px",
            top: "12px",
            color: styles.colors.cinza,
          }}
        >
          🔍
        </span>
      </div>

      <button
        style={{
          backgroundColor: styles.colors.rosa,
          color: styles.colors.branco,
          border: "none",
          padding: "12px 32px",
          borderRadius: "500px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "14px",
          transition: "all 0.3s ease",
        }}
      >
        Fazer Upgrade
      </button>
    </header>
  );
}

// ============ COMPONENTE: SIDEBAR ============
function Sidebar({ playlists, onCreatePlaylist, onSelectPlaylist }) {
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      onCreatePlaylist(newPlaylistName);
      setNewPlaylistName("");
    }
  };

  return (
    <aside style={styles.sidebar}>
      <div
        style={{
          padding: "20px 12px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "26px",
            color: styles.colors.branco,
          }}
        >
          Spotify<span style={{ color: styles.colors.rosa }}>+</span>
        </div>

        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "30px",
            }}
          >
            {[
              "Início",
              "Procurar",
              "Biblioteca",
              "Criar Playlist",
              "Músicas Curtidas",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "12px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: styles.colors.cinza,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    ":hover": {
                      color: styles.colors.branco,
                      backgroundColor: styles.colors.pretoMedio,
                    },
                  }}
                >
                  {index === 0 && "🏠"}
                  {index === 1 && "🕵️"}
                  {index === 2 && "📚"}
                  {index === 3 && "➕"}
                  {index === 4 && "💞"}
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3
            style={{
              color: styles.colors.cinza,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            Suas Playlists:
          </h3>

          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              placeholder="Nova playlist..."
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              style={{
                flex: 1,
                padding: "8px 12px",
                backgroundColor: styles.colors.pretoMedio,
                border: "1px solid transparent",
                borderRadius: "4px",
                color: styles.colors.branco,
              }}
            />
            <button
              onClick={handleCreatePlaylist}
              style={{
                backgroundColor: styles.colors.rosa,
                color: styles.colors.branco,
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Criar
            </button>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxHeight: "300px",
              overflowY: "auto",
            }}
          >
            {playlists &&
              playlists.map((playlist) => (
                <li
                  key={playlist.id}
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  <button
                    onClick={() => onSelectPlaylist(playlist)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      backgroundColor: "transparent",
                      border: "none",
                      color: styles.colors.cinza,
                      padding: "8px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: styles.colors.branco,
                        backgroundColor: styles.colors.pretoMedio,
                      },
                    }}
                  >
                    📀 {playlist.name} ({playlist.songs.length})
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

// ============ COMPONENTE: LISTA DE MÚSICAS ============
function ListaMusicas({
  musicas,
  onPlay,
  currentSong,
  isPlaying,
  onToggleFavorite,
  onAddToPlaylist,
}) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  return (
    <div>
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "24px",
          color: styles.colors.branco,
        }}
      >
        Músicas Recomendadas
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {musicas.map((musica) => (
          <div
            key={musica.id}
            style={{
              backgroundColor: styles.colors.pretoMedio,
              borderRadius: "8px",
              padding: "16px",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              ":hover": {
                backgroundColor: styles.colors.cinzaEscuro,
                transform: "translateY(-4px)",
              },
            }}
          >
            <div
              style={{
                position: "relative",
                marginBottom: "16px",
              }}
            >
              <img
                src={musica.cover}
                alt={musica.title}
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "12px",
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlay(musica);
                }}
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: styles.colors.rosa,
                  border: "none",
                  color: styles.colors.branco,
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: "0.9",
                  transition: "all 0.3s ease",
                  transform: "scale(0.9)",
                  ":hover": {
                    opacity: "1",
                    transform: "scale(1)",
                  },
                }}
              >
                {currentSong?.id === musica.id && isPlaying ? "⏸" : "▶"}
              </button>
            </div>

            <h3
              style={{
                fontSize: "16px",
                marginBottom: "4px",
                color: styles.colors.branco,
              }}
            >
              {musica.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: styles.colors.cinza,
                marginBottom: "12px",
              }}
            >
              {musica.artist}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(musica.id);
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: musica.isFavorite
                    ? styles.colors.rosa
                    : styles.colors.cinza,
                  fontSize: "20px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                {musica.isFavorite ? "💝" : "💀"}
              </button>

              <div
                style={{
                  position: "relative",
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlaylist(
                      selectedPlaylist === musica.id ? null : musica.id
                    );
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: styles.colors.cinza,
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  ➕
                </button>

                {selectedPlaylist === musica.id && (
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "30px",
                      backgroundColor: styles.colors.pretoClaro,
                      borderRadius: "4px",
                      padding: "8px",
                      minWidth: "150px",
                      zIndex: "1000",
                      border: `1px solid ${styles.colors.cinzaEscuro}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        color: styles.colors.cinza,
                        marginBottom: "8px",
                      }}
                    >
                      Adicionar à playlist
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToPlaylist(musica, "Favoritas");
                      }}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        color: styles.colors.branco,
                        padding: "4px 8px",
                        textAlign: "left",
                        cursor: "pointer",
                        borderRadius: "2px",
                        ":hover": {
                          backgroundColor: styles.colors.pretoMedio,
                        },
                      }}
                    >
                      Favoritas
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ COMPONENTE: PLAYER ============
function Player({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  volume,
  onVolumeChange,
  progress,
  onProgressChange,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={styles.player}>
      {/* Informações da música atual */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          width: "30%",
        }}
      >
        {currentSong ? (
          <>
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "4px",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "14px",
                  color: styles.colors.branco,
                }}
              >
                {currentSong.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: styles.colors.cinza,
                }}
              >
                {currentSong.artist}
              </div>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: styles.colors.cinza,
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              💝
            </button>
          </>
        ) : (
          <div
            style={{
              color: styles.colors.cinza,
              fontSize: "14px",
            }}
          >
            Nenhuma música selecionada
          </div>
        )}
      </div>

      {/* Controles do player */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          width: "40%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={onPrevious}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: styles.colors.branco,
              fontSize: "24px",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            ⏮
          </button>

          <button
            onClick={onPlayPause}
            style={{
              backgroundColor: styles.colors.branco,
              border: "none",
              color: styles.colors.preto,
              fontSize: "24px",
              cursor: "pointer",
              padding: "12px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            {isPlaying ? "⏸" : "⏭︎"}
          </button>

          <button
            onClick={onNext}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: styles.colors.branco,
              fontSize: "24px",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            ⏭
          </button>
        </div>

        {/* Barra de progresso */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: styles.colors.cinza,
              minWidth: "40px",
            }}
          >
            {formatTime(currentSong?.duration * (progress / 100) || 0)}
          </span>

          <div
            style={{
              flex: 1,
              height: "4px",
              backgroundColor: styles.colors.cinzaEscuro,
              borderRadius: "2px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: styles.colors.rosa,
                borderRadius: "2px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-6px",
                  top: "-6px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: styles.colors.branco,
                  borderRadius: "50%",
                  cursor: "grab",
                }}
              />
            </div>
          </div>

          <span
            style={{
              fontSize: "12px",
              color: styles.colors.cinza,
              minWidth: "40px",
            }}
          >
            {formatTime(currentSong?.duration || 0)}
          </span>
        </div>
      </div>

      {/* Controle de volume */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "30%",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            color: styles.colors.cinza,
            fontSize: "20px",
          }}
        >
          ♫
        </span>

        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: styles.colors.cinzaEscuro,
            borderRadius: "2px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: `${volume}%`,
              height: "100%",
              backgroundColor: styles.colors.rosa,
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: `calc(${100 - volume}% - 6px)`,
                top: "-6px",
                width: "12px",
                height: "12px",
                backgroundColor: styles.colors.branco,
                borderRadius: "50%",
                cursor: "grab",
              }}
            />
          </div>
        </div>

        <span
          style={{
            fontSize: "12px",
            color: styles.colors.cinza,
            minWidth: "30px",
          }}
        >
          {volume}%
        </span>
      </div>
    </div>
  );
}

function SpotifyClone() {
  // Estado principal
  const [musicas, setMusicas] = useState([
    {
      id: 1,
      title: "The Mind Eletric",
      artist: "Miracle Musical",
      cover:
        "data:image/jpeg;base64,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",
      duration: 354,
      isFavorite: true,
    },
    {
      id: 2,
      title: "Kashmir",
      artist: "Led Zeppelin",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLNI3FaCrxtRvVSwfet7p6CFf6JqUoc8xuA&s",
      duration: 482,
      isFavorite: true,
    },
    {
      id: 3,
      title: "Marrom bombom",
      artist: "Gabriel do Nascimento",
      cover:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXFRcWGBcXFxcYFxUXFhUYFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUvLS0vLy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIASwAqAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEcQAAEDAQQHBQQIAwcCBwAAAAEAAhEDBBIhMQUiQVFhcZEGE4GhsTLB0fAHI0JSYnKC4RSywlNjkqKz0vEkQxUzNIOTo8P/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QALBEAAgIBAwIEBQUBAAAAAAAAAAECEQMEITESQQUTMlEiYYGRwRQjcbHwof/aAAwDAQACEQMRAD8AuqWdUOop3aKKCqUl5mWRpnVQtNJV90j3MVZYrWY0C92vO7RZYolqIp2QGDCpi9vPVL7XpZlN90k47Yw+ckxoVQcNoMeOfomXiyRVg1OLdHC9vPVSl+8oltNWMpLCyP3NNIEBfv8AIKYbU+QmlnsspxQ0XITWOMpLkDOUV2Mprjcu7124LSWrR4CW1bMqyScC41IWG0u3KJtZ+75/sjH0FVUooX6lm/LRR/GcCvf4wbj5Lw0lA0la1DJ5aLRbG7j8+K9Frb8hD90u7pa8+RXloKFpbv8AVche6XK/PfsV5aNbWpoKrSTR7UNVYuVKNmxS+mqHtTGo1DVWoKjTNpgpSTSGnGtJYxt9wMQD1470XbK5Bc0FxdMAQ2ILRtI3z0Rmhez4bSBMF2ZI3884xXX0unUY9c9/YBOTk+mLPnGk22h7iRRc0Y4w47dkhE6I0y9rm03gtcIAnMxN0wc/3X0e0WMNwwKWW3RtOoIe0HjGI4g7E/8AqYv4ZIz+ma3TDdH1w9vERPiJB+doO5MKbFmdB0alKq+kSDqtuOIwcwF10ASDOLp/4nSUg/8AB0PxXLzQWPI127BoPqiNLIxOrO8ws/Qc8bGefwRzK7vus6n/AGo+PMkjE8dhVsallWkr6tod91v+M/7UNUqv+50cPeAg5sifcJjhSBqtNDVaeCJvkmC0jCcY9xUKow8EswgAWKBava9W6YuuPECQqjam7RU/+N59Gqo9RHRK4vbirFrZ/eDnSq/7FMWqn94jm149QmIqQNtE201y5tso/wBo0czHquW9zNo1DlTUCk5yg5J2aoGqNQtYI2oEJajDSQJMHDespW0i+xgtOWofxLGY6z2tmcADExjzX0Gx1QG5gADbgF8tdSe+1iQYY4mCcnE7N42dF9Eq0TcBImBkTA6r0GdV0pCmn3TL7VVYfZcJ4EFCvZhxS2mxxxNNrDP2XXsNmMBXaTY9rRAdJE6vtchO1LuKbobTdAfacuZQNVh16Ws07hIvD53J7oSs99Gm94hzmgkc8vKFktM1psj5FRs3AW1M8agHhkcFtNH1GCmwFwBut28EPWr9uP8AIPF62GMVrXKpjmH/ALjfP4K8Mb/aM6n4LmUxm0iDnYLiVGqAPttPIn4LkGSkuTSaKX+1+kqFQYKRGJ/L7yvKiMuEYAarcfFRDEQRn87F4p0XKyXse0WK8gKtq5ycjJRQNq2ReV4uLTuK5LSlbNpDMuXhKhK6UJMzRF6perXFVvVkEdp0QHG+YDw8OaREOAOI6Yp5StEDHFKbbWrd40C73YAJP2s8Byz8le5+K63X1RVGNrbL6j6d8ZCc9gHEqOkXNwMgiPJLaVpbeIJl5khuE3ZuzB2e8qDhHtXgJjFsDHYiqBOpFlv0c2swUsrz2QdxvjFac9k6RYyHPNTIt1cCwlrieEjxSDRNO85jSQMpcSQBGRJGWITm0udScQ2revYkse4g8ydvxRcd1Qrmpy2Krfoui03G3iQTeMMEcAWkyfReWPQDyL4Y57cdgjD1UrHamNOuy8IyvFvjIUa9vH2BF50BkkxOGe1bcY1uBuV7HtSjTbFxpBhxcTxggN4AeqslCMqkjHOMeavvLia1fvNf7g6Onf7aIk6x/KPUrx68LvU/0qFSqN4zWHHj6G0zyfU+qi/ZzUW1RlInH1K9cVlunuaROmKZZUN94LAC506o3gDaZLQOJQtO0UxX7p9Z7eAbeOU8AI2q4UXmGNYS293z7oJL7oIpsgfix6bkJoDQz+9fWtV2neORe0ugmXarSSMgOq7kMeOlaXBzJZJ779xobFUwuucQWh0mAADIBM5SQcFyhaHk1HlzpDqhgDJrGANaMeA6lciY9NjlG0gc8+ROrCpXFRXSvM2dY8Kg9TKrc8JjHpsuR7RBTywjyyNKyl147AyDzJw9Cgq+BR1jr6zwTEgHhDTn4SHcmlA6R1XTGGII2g7RzGfIhdn9L5UFX1BQydaszml+zrK1QVD90tI34y0jjifJCWHss2nWZUDiQ0EwdrogfPBaNrw4RMH14rg0DIyVanSphOpUGtsB7unVxANURG5pumeEu8ki0sHGtTbeOJbOJnOIzWsNvpfw7KJq0xUY72bwDhec0jAnaSOchZu22Nz61Nwc240i9rt2EHKdxKNicf8Ai/Jz8nVf1YXb7NFFxGetiOZA9ED2L1q2sSQMMSTGu1M9K2qk2iWB7b0HCRtJj1Sbsy8031DgYF4BrmkxeGMbAs51WGTReLeaRoWYXjxPlCVaQ7RsaYE5kbstqK0lax3D6jBjdc8iQYyMTyC+cvtAeZdJOJ54RCUhhjkzznLs/wADPW441FGwq6YpFpc9+wYBx24CIgpJV7QlhIuuLNhGcb8N3VZ1tJ7nXbpjAT5z4e5XPY5joccssTiDuM5/ArpJLsKjmhpuqS1wOWbTtByIO9bOwW8VQCM4XzanpSmCQ4+O0c/kLQ6DtzhUZOAc6OERlPzklNVpY5It90HxZXF/I+lWfRjnUwQTJM3b2BjDLLmTuGW0jR3ZWk1rn1nCoS3ATgw7xGZB2+SGpV3CkyZiThsOJxzznkiatpqXSA1zREyQBO/CTgRKKscVG/kLSnK6+ZntONc2i5+/VHEk5DjiuXml3io+jSmYN90bA0SOGOC8T+nyLDjUUhfKnOTYxNUDiqalc8uSpc/FVuclMenx418MUHlklLlnVapUJXEqDxKMZJF5EOGBGI96ttDLzcjjgAMeIaDteNh2jBDiYgqdOx03McHNB4xiIEg4DO7exz1USG9oZwS7CW11WtcA8iDkRkeHA8EzsbGC7leIcQZvYCAQHcJGSz77BcqupiD9bqhrYADowgeJ6p5bLC0FlRhF6nx9pjhD5G+Gh36YQcuih0NPubWaUm2lwJtN2g07RUdH2GZDEjVkztxAA3IKzVw8El0GcJJkgY+PitXa6THtLXAOa4QR8CMQcNm5YjtBoWtZ5rUXl1IGSD7dMHPHa3iMR5rMIKMVH2SX2FZS6m2MQ2CGvdIcd8XduBPEZI/QVdmu6MQwtdsxa4ARvnFZPQ9pqVTBdqtlxPASfnknNgDzeLWuLb2YBjLHHxlEnDzMbxyezMxfTNTXJpaFG/RfTyvNNPlq3ZHhC+c6IsFSpXfSIIdTDidmN4DbljK+iaEq3mHg9w6FTp2ZvfOqQLxbdJ3iRHouR53TqcsP4/pHQhC8UWZQ6Jrd40tFNsRk87DiSOPuCOt3Z4OlwjEZOkAcZ3BaL+Cpg3g1odETAmJmJ54oo0WkAHcivK72NrGq3MQzs2Qxzg5jgATq45CYUOzlkdUrNABuUzec6IBwEAcz71umWZjWwAAIiAAMIywVNnphgDQAIGQVZtVKEK93X3MrArv2HlBpDGuhuWBz24SBkoWu11LsOcIP3TIwGQ3JhZdNllFjBSkho1r3DdCR6XtLXPJhowxiNu+Nua6Ozi0zmb3YlFYtrVHYYNDeusV6ltSv9W9333uPhkuR3G3/AMMo0rwhqtSFdV3jFA2h0goQQKDl4xD2R8tB4ImkIHirIek4KdAzebvE7c24/wAt5UTmvQ4jLP5CuLpmoOpJiu3mKh4QepOPmE2qtvNIyvBwnIYsAnKM3HqlunGRUwyNMR1JjwvAeCYaMdeY3eI8nY5flYmpLZB8brJKLF7y4sa4GDhgfMKdS0gAzlt3EKbqeLmkZOPnifUpbpIZs3x0OfoUk1TAy2+H2D+zmgWd419PuzS7glzPtsqFwzxyuuwHBDaUtzqTXXqeEOAIEzmMYywxS2yaRuPLmEtJ55bk8sel6b8HgjiCCOhGCzm087Uo7l48kaakT0SBcJGReeogHzRlZu1VWeowjUbdAMc8czxRD26pgEwNnMCfCZ8F5rNKS1svezp468lA1eoAJJI5SvbNWaTEuPWPLCVzCDgVfTa1ozJXSTVFpqiRCg/M8lIFRnErmZMvmaiEVwml/wBLarHJ/JnukbUWU2lsA3Wgl0wdXYByQN69Tc5v2hMx90Y88Q5PK1lFQRdvNEZYHDCeKW22i1rCxs3cGCCJE4GfLLeV6aLfV8jjOq+Zk9IPusY3c2T+qSuQXaGsbzoIAECOYPpHmuTcXe4Lg2tqtZacWlvp1QlreLt5vimL6rQLt4O9yBt9na1pcHBmGMnDnwSwUq0TUmn+pw80aHJZ2bxoNJIMlxkZEXjBE7xCZuVkPVwXRgotcoQjpGleYy8SAGuExeJ1ssSOO3Yp6Luta4B0mQ4C6Qcp3x9lu3eqtIVPqgPx9BdMdZPRQ0XVvVIdspx4Nx3bp6plW0g8XeRP5BFqpXXuOOO8k+yY9COqSaccGi9kQ1w+Hn6p/asCJG/dubOXJZXtySKVPEC9UuknADVLsSPyoMo/EYzbSYh/ihvKNs9sGzHhtPIIezaJGBe+R91oif1TlyCbU3tYIY0NHD3nam0mLDnRlqaylL8DMxGOzomvZW3986tOy4ANkG9PzyWIdbSQcDtHiCQcE77BWu7aCw5VGx4txHleSMtDijKWVL4n/tg3nycVDsjSaR0dd1gNX+X9kNQpyQ1okkwBvJWqBI+yPHHyVVgsXdPNQMBJEAY6oOd3mkpae5bcDEdTUafIl0g0Mq93OIY08xF2R4tKX2x0Md+Zo6uA96I7c0iKlKrBbLSwz+E3hj+orP1LUS24TIMHiIMjHwVR8GjLURzRltdtfXemU9a1icGt62Ne61inJcbpyAkGfNZXTGme9kNa9oJ1auAmMDdBxjPFV0GFzjefszd8FXaabbxcTAyaOA3L0mHw3FOSj1X3f4o42TW5YRb6a7L8mZfZ3VHuA14beGviYIJBJ4EwuRuhdDNqtIb3hF5wJMQccmiJ6LlzviTHNmfQTY2gZwltqg4U4dG0+yD70VXcamfs7t6B01X7ui8jCGk8AAJQQpToU/VNggi6DIyMiZHBH3kn7PuAoUhuptHRsJq4iFZCbSVFoxI4z4H9wVKmvH7Dxjrl5x1UIC6UrQ0N+84RzAdj871Vod/1hxwuPnpzRFqphwgoSlXFnfN0uvC6AMIjWAy2kAeKPDIlGmXF/Gmx3pEwWztc8DPPM+/osl9INObJO6ow+RHvVbdMOq22gwnK/qjJuo7PeeKv7en/AKR352DzPwQ2+qRrJLqlZltEWomk3HFuHw8kzp1ys3oqoQ13XonNlrSAU8LPkLnWPHHxH7R0ROjbQaVVlQfZcD0OIQx37sf29ytVNWiz7QyC28Mdo9QmtoqNcARv9yzvZO1d5ZKZ2gXTwu4ekLQ12aoPziFzWqdGzFfSQNSkf7yOrHfBYgFbT6SH6lMf3o8mPWJaCcBiU9p/QYktyRrQqXuLyIPDzVVvlgxwJyxHuTHsxZ79Ru4Y9PkdU1DN5Vz9kwGbF1pR+aNdoWyChTZTbhAx/f5zlciqeZxE7JXLgNtux/ZbAFepGq2OaQdqRFmqiZcWHwBwk9U0fada6xt4pV2lq3bO5rgA95a2JkmXCSfAFMGCGhm/VM/KB5Jm5L9FU/q2po0SOishFilUZLSFLuyvXHBQgI2tLA7hJ4EYOHUFC21wvUyYjE9Igq2iYvs2HWHj7Q64+Kp0hTabgGGJ6YEjyzUIZmz0Wt0ixzdrXnxg/FMPpGqfUMbvqjya74oNxAt7eDHeoC9+kmrhQbvvO8mgepWsa+NEZmbC3A8l1ktZa0bVOziAeSXUX+qevegHazV2etLQVdTOEbvTZ8PBBWX2RyRLD8D7vP1Kho+jfRxbfqqtLcQ4fqEH0HVbqtVJYJEf8L5L2Ftdy03dj2ub/V/SvrNsuinI2/ApHMqmaR8++kK0S6k38zukD3lZEWq5JAkxgju1Ns720OOxsMHhn5kpFXrQCeHom8UagkVdOwa01yajbxlxBJPkBHVbXse0Cm953hg9T6jovm1K0l9WTsAHqfevoHZeue7u73ud/lZ7yh6p1jNQ3luaW1WprG3jswA2uJyaOJ+K5AGkXVATk0GBxOZ57Fy5Vh6DXUw1sMDaY5AA9MVm9N2RopE5kvbtnGcY8JWpdTLsTTHOYKT6bsbboM4hwMZ8M/FOAirRrdTJHMZCpsg1RCMaFCHrXKuup3VXWAUICPokgHd6HApbbQ4Fnj6jlvTCpa3MfAYSIb4ySCAOAxKWaQq6zT+F3q1UQz7T/wBYPyPH8uKo7e171pptH2KTZ5uJPpdULC8utvKm71lBdpz/ANZV/R/ptRcCuZUuCqYYeSW0xB+eaZ1W/V+Crt1EAUT96lJ5io9voAm7qSBx4Y1sLpajGBKtHOwTWkVbRS4CtF2k06rH/deJ8CPUeq+t6SrilSc8nBrS4jkF8aqm64OORhp4fdPUx4rc9oNLX7DQE41AL3/t4PP+IBL5YdUkaTMVVcTnmc/HMpbpKpDHHhHXD3o57tqTacqQyN7h0GPwR26VlLkG0K2XFfQ+xrQWPnMGPA/8LAaA9orbdmRL6nC6R/mQNUv2mbh6jTU2QSd56rlZREY4+q5coYG2zHFL9JUW924xGCOu7+mxC6Rp3mFsxI2fFPABRY3YRuKNphKLHRLcLx8cZ64+aaUr22Dyw8v3VFl9xDWp0Iu8gK7pd4qFE2ewUt0lTEMMCAceRBjzu9EytRhnj8+iS6brGnRBAJJewAcLwc//ACgjxCosytgIFuujIsd5BxS7tLjbKnHu/wDTaitHPi39R4RCo082ba7lTP8A9TExp/UVPg8tLdSMBsxyULQS8spy0hlOAW5azi7DhjHgibQ092TuxQmjiXucXHHLDgmat2CvYtstAtKZtBVTKInMoym3YrZEdIc0tcMxBQ1G3PLAxzpu3gPy3j65nmiq0BpO4FeGmLjW4YYDxVFgjqpOWSW6bqal38QPQOjH9RT2BCW6QoB1mqu2sqUnDk7vGkfy9FU+Pt/Za5BtB0oF7eVtOzDNaoeDf6lmNC0QaQnP4hNaVsqUNZpG5wImRs6Y7RmsaiLeNpFxdOzdsGC5K+z+mW16ZOqHAkFoM8iNsLlx2mtmMWaNu/ND1mlx3DJXx4BVvqANJHgnQAptLQ2pDdmfNE00DUokOJ37UbSyVGj2s7NC0WyZU6ziVOi1QgNpOo9oaGBpzJvbIy9Uhr1HmtUDzI7lh4AioYgbJBPQLS12S6SJAGCT16X19QkfYp//AKQoQxbhctzZ2x6qOmP/AFr+DWf6bVbpmP4um4mIBM8QCf2VWkTNsqcmf6bUfB6voVP0l1Vs03ILRdMROPgU0cz6o8km0TJHtHqU0gQ5DBvd/iKvobRx9wVDKQO13+J3xV7GgDBQhC2v1SOCuqZIK1uw5kDq4Im/sVIsrqPwjig7dWLaNVgaYe1oPCKrCHH0/UiqrJ5Lwtbcq3sJov8AEgXmjjrAKpOkRck9CDUE8PRMaejjWD4rCkWluJGBvG7BOzYgNDulkr3StS5Z6pG0NHVyrO6g/wDdy4KybezDqbHue9zKl4FtdhJY0Aey66cBxXqzFh0naWEFlVzAeJI8RuXLnOQdY51wfcXm8QNnvVrrPeVbHBEMKIDFGkpvARqhQpPwKeVqQIKQ1WwYWWWj1oV1NUhXuEBWQHa556oK2MAe78rB0v8AxTV2AnalFtdrEbjBO8wJ8zHgoQxHaYDvaZ/MPGMFHStC7ap+/TY7yunzanto0BVtVQd2abRTIJvm6IdIgYGTgUN2rsgp17Owva54pEuumRF7VE8w5EwZI+Z03uScZdN1sRazVjgs5o83XFvEjxBWmpLPVKUVnj8V4eKeQBjJjlcCqqZVgKyzRRbhgPzN/mCurb1Va8h+Zn8wU3KiFtNwIQukPZ/U31Cmx0FQthxYN7vQErSIG6NZDTzTGz6FfaWPawNIBYSHEAGCTGO+Ch6NOGpz2ebLXn8UdB+6R8U1HkaaU/4/sPpcfXkURVV7CVjAvUKYBnGoSRwwb716tXd4Ll5N+MZG+DswxOCpMjoC399SDtowdzGadMcsF2HrEOqjYXNPVv7LeWSkXcBvOA67l6uSqbicSKcuAuiC4w0EncEFbtC1L0i7yn3p3Z3NaIZltdkXH3N4dVJ9VKZtQk6huPw0i7mZ/wDD6gzb0xXr7O6ZIIA4J8+1tGeChUe1+GxYjqfdElovYztR4ALz7LQTz4pEHE4nbieZxKd9oXXQWgQMgN8n/lKmWSoWyGmI3fMpu1ViXS7ossFEEExtSzS/ZY16zKlJzWugNh3smCSDIyOJ8k60eNTx9wV0ri5NTPFqnOPYfhiU8SiyeiuwBMGrWAG0Nb/U4+5KvpC7NUaAZVs4vNAu1TMnMXHnZmSDG8cU90bWMkEk47T4oq31qbj3DoJqU3G6drMGuMbtYdV046+badbA1oVW7Pk1Mgq1qCFdtN7qb3Q5rix0gjFpg8NiuNvpf2jfP0hdi7Oc0WWgYeIPQgqYSrTdtc36sAi81rpP3XgOEDZgVGz6TMDVM8Ig8VmMlLgjVcjggJz2DYKlsJMEUqZJkAi88gCQeAPVZl9oddvADxPuHxW5+j6xdzZH2l/tV3Ez+FpLWgeN4+KW1eToxOhjTQU8ivg2VssVCoCXUKR4tFw9aZCztGzMZIYLoJmJJzwzPIJ7Z6l2kL2BOU5+KUkYryviebJKEYNun2OvDFCLtIiVy9euXKjjtBLMR2SqHvXaphwEOg3ZZ7TQcphwwW0FrdIYMAIdzkn4LJaEt0MpUtoqVHzwc1oj/KfJad7xLd5B6L2niDlHqaOLpfUjR2K2g4bUxaZWTNSCCE60bbgRjmk8mHp3XA9hz9Tp8lts0bfcNgBk8dwR1KzhoVFbSDWhLbRpVx4BZhjlPgPkzRh6mHWltJus6OZSHS+m2uBZSzyJ3Dglem7beABdjM+oQDDAyTkNPW8nYjk1TaqKocWT2B4+qshRoiGgbgPRTBXAyvqnJ/NjcFUUiQqXSCNp8xj6T0S3ta1zX0Lex0GjeY5kOJq3yAKYDcidcTvhLO39Rwswc1xa5tRpkGDk4YEY7Ug0J9IFoowKjW1WQAZwdhtvbT4Lq6HDOeJSX8AsmaKfRL7lnbE0atfvaJnvGA1GuaWuY8apBB2wBluO9JbBo/vK1OnA1nAH8ubseQKP0zpAWiu6s1ly9Ei8XYgRMkYYAYcFf2dqBtcPul0NIwgXb0NvYnIAldp9UMPw80cyTjLLb4so+kZoFqbAj6ps7vaeB5BK9HnBNPpAtbX12Bo9lmLt8uJjw96TWByzo4yjhSlya1DTm2g+vUjGJggxsPBfUuz1vous7HMpPYzWLaZfqtxxIAyBIJ8eK+XOZK2Vn7xjGsFVzWtEANDNnEtJQtbhyZIpY6u+5vTZ1ibcjWWq1F5Q7jGeCzeLjrPqn9bo6AgL11kYcSwHmJ8yuS/BZ5JdWSf2Qy/EEuIja1aSos9qrTHN7Z6SuSStZxGAC5MR8DxpepgX4hL2FWibC9pvTrb4xWlsdN0hzpJ4rEWXSdqedV0DfdEeiZsq1z/3X+gPRFnoM2T1SRFqscOIm4OIUWujJV6LB7pl4ybok7yOKtqMIRVGlQLqt2SNSdqFtTjGeCtDlTa8vnctRSRTbe7FFZ0umMl6SSJOEZKDGFxU64AwW4q3RlukBvNUjWr1SebW/wAjQqGWaTrOqO/NUe7yJRrWFTbTxlNxwY48RX2APJN8ti3Smj6fcv1ALrHEYeyYmR0WGoNlwHEeq32n33bPVP4Y6kD3rC2ATUb87FvZM1jbobZFOND2UFpdtJ8h+8pW8YLU2Oz3WMEY3RPOJPnKpMzIyva9kOp8neoSmwuxWk7cWfUpPnIlsfmEz/lWYsXtDmrRtek0FjEvaN72jzHxWyqBZTQ1OazB+Kf8OP8AStncWTMihjAuccFc2mvHKigUrlN65bTMiulZQNiKZSXoCsas2ShzYf8Ay2/O1EzIQdhdqDxRdN2xIy9TGlwil6Htns/O5H1GoHSLdUBRFipjQF5cxzkq1lFoxdC9a1GxK5A8jpFYapBimQoBybsXFHa7Cyu4uaPOfcsbosaxO4fBavttV+oaN9QeTXfssxowYOPILIWPpHeiaPeVWtOUyfAT7gtk1izHZRn1jjuZ6kfBaloVMyzLdvx9XS/Of5VkLF7QWn+kB5vUW7IcfEkD3LLWYwVcQi9JsezDZqg7mE+ce9axZjswILTvZ7p9y06gORK8oOUoXEKIyDlcpVQvVZQC1pVzGKLVa1Ds2MLD7PiiXN2oWwZHmiXYJSfqYePCLhBCA0mIA5owFAaWecPncqLF73TgrSVQzMomExhBZSpyi1qtKi5HAma7asmkw7nnzafgUk0XSlnMn3BajtQB3A/O30KzFhMNjifVX2CRe1Gl7LM1qkbmjzd8FoGyk/Zdvt8bn9SdOWGU+TH9vKZL6RGd1+XAt+Kyx+8NuxbvtWwE0T+Jw6gH3BZK0sDXloyN08iTBhbjwaT2NN2Tok3XbAzDoAT6rUEJfoRgAP6R5JmqfJl8kQvYXoXpUMkCFy8K5WUf/9k=",
      duration: 391,
      isFavorite: false,
    },
    {
      id: 6,
      title: "Ultimate Battle of Ultimate Destiny",
      artist:
        "Michael Jordan && Michael B. Jordan && Jordan Peele && Jordan Fisher && Jordan Schlansky",
      cover:
        "data:image/jpeg;base64,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",
      duration: 294,
      isFavorite: false,
    },
    {
      id: 7,
      title: "Crazy Frog, Axel F",
      artist: "Crazy Frog",
      cover:
        "data:image/jpeg;base64,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",
      duration: 369,
      isFavorite: true,
    },
    {
      id: 8,
      title: "VS Shark (Feat. Slash)",
      artist: "T+Pazolite",
      cover:
        "data:image/jpeg;base64,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",
      duration: 356,
      isFavorite: false,
    },
    {
      id: 4,
      title: "Falling behind",
      artist: "Thiaguinho Nogueira",
      cover:
        "data:image/jpeg;base64,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",
      duration: 301,
      isFavorite: false,
    },
    {
      id: 5,
      title: "Eu sinto o Shadow",
      artist: "Gabriel do Nascimento",
      cover:
        "data:image/jpeg;base64,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",
      duration: 183,
      isFavorite: false,
    },
  ]);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [playlists, setPlaylists] = useState([
    { id: 1, name: "Favoritas", songs: [1, 3, 5, 7] },
    { id: 2, name: "Rock Clássico", songs: [1, 2, 3, 8] },
    { id: 3, name: "Anos 90", songs: [4, 6] },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const progressInterval = useRef(null);

  useEffect(() => {
    if (musicas.length > 0 && !currentSong) {
      setCurrentSong(musicas[0]);
    }
  }, [musicas]);

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => clearInterval(progressInterval.current);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlay = (musica) => {
    if (currentSong?.id === musica.id) {
      handlePlayPause();
    } else {
      setCurrentSong(musica);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentSong) {
      const currentIndex = musicas.findIndex((m) => m.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % musicas.length;
      setCurrentSong(musicas[nextIndex]);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (currentSong) {
      const currentIndex = musicas.findIndex((m) => m.id === currentSong.id);
      const prevIndex =
        currentIndex === 0 ? musicas.length - 1 : currentIndex - 1;
      setCurrentSong(musicas[prevIndex]);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVolume = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setVolume(Math.round(newVolume));
  };

  const handleProgressChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newProgress = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setProgress(newProgress);
  };

  const handleToggleFavorite = (songId) => {
    setMusicas((prev) =>
      prev.map((musica) =>
        musica.id === songId
          ? { ...musica, isFavorite: !musica.isFavorite }
          : musica
      )
    );

    const favoritasPlaylist = playlists.find((p) => p.name === "Favoritas");
    if (favoritasPlaylist) {
      const isInFavorites = favoritasPlaylist.songs.includes(songId);
      setPlaylists((prev) =>
        prev.map((playlist) => {
          if (playlist.name === "Favoritas") {
            return {
              ...playlist,
              songs: isInFavorites
                ? playlist.songs.filter((id) => id !== songId)
                : [...playlist.songs, songId],
            };
          }
          return playlist;
        })
      );
    }
  };

  const handleCreatePlaylist = (name) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name,
      songs: [],
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const handleAddToPlaylist = (musica, playlistName) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.name === playlistName) {
          if (!playlist.songs.includes(musica.id)) {
            return {
              ...playlist,
              songs: [...playlist.songs, musica.id],
            };
          }
        }
        return playlist;
      })
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredMusicas = musicas.filter(
    (musica) =>
      musica.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musica.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.app}>
      <Sidebar
        playlists={playlists}
        onCreatePlaylist={handleCreatePlaylist}
        onSelectPlaylist={setSelectedPlaylist}
      />

      <Header onSearch={handleSearch} />

      <main style={styles.main}>
        {selectedPlaylist ? (
          <div>
            <h1
              style={{
                fontSize: "32px",
                marginBottom: "24px",
                color: styles.colors.branco,
              }}
            >
              {selectedPlaylist.name}
            </h1>
            <div
              style={{
                backgroundColor: styles.colors.pretoMedio,
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              {selectedPlaylist.songs.map((songId) => {
                const song = musicas.find((m) => m.id === songId);
                return song ? (
                  <div
                    key={song.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "12px",
                      borderRadius: "4px",
                      ":hover": {
                        backgroundColor: styles.colors.pretoClaro,
                      },
                    }}
                  >
                    <img
                      src={song.cover}
                      alt={song.title}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "4px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: styles.colors.branco,
                          fontSize: "16px",
                        }}
                      >
                        {song.title}
                      </div>
                      <div
                        style={{
                          color: styles.colors.cinza,
                          fontSize: "14px",
                        }}
                      >
                        {song.artist}
                      </div>
                    </div>
                    <button
                      onClick={() => handlePlay(song)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: styles.colors.cinza,
                        fontSize: "20px",
                        cursor: "pointer",
                        padding: "8px",
                      }}
                    >
                      ▶️
                    </button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ) : (
          <ListaMusicas
            musicas={filteredMusicas}
            onPlay={handlePlay}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onToggleFavorite={handleToggleFavorite}
            onAddToPlaylist={handleAddToPlaylist}
          />
        )}
      </main>

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        volume={volume}
        onVolumeChange={(e) => handleVolumeChange(e)}
        progress={progress}
        onProgressChange={(e) => handleProgressChange(e)}
      />
    </div>
  );
}

export default SpotifyClone;
