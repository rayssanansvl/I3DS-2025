import React, { useRef, useState } from "react";
import { io } from "socket.io-client";
import "../App.css"; // Certifique-se de que o caminho esteja correto

const Join = (props) => {
  const usernameRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o modo Dark/Light

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre os modos Dark e Light
  };

  return (
    <div
      className={`vh-100 vw-100 d-flex flex-column justify-content-center align-items-center join-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Botão para alternar entre Dark e Light */}
      <button className="mode-toggle-btn" onClick={toggleMode}>
        {isDarkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      <h1 className="mb-4 join-title">💬 devChat</h1>

      <div className="rounded-4 shadow-lg d-flex flex-column justify-content-evenly align-items-center join-card">
        <h3 className="text-center fw-semibold join-subtitle">
          Bem-vindo ao devChat!
        </h3>

        <p className="text-center join-description">
          Digite seu nome de usuário para entrar e começar a conversar.
        </p>

        <input
          ref={usernameRef}
          type="text"
          className="form-control join-input"
          placeholder="Digite seu nome..."
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

        <button
          className="btn w-100 fw-bold join-button"
          onClick={handleSubmit}
        >
          Entrar
        </button>

        <small className="mt-2 join-footer">
          © 2025 devChat — conexão simples e rápida
        </small>
      </div>
    </div>
  );
};

export default Join;
