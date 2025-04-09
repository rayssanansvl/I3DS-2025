import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const { username } = props;
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef(null);
  const bottomRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // Conectando ao WebSocket na porta 8181 (corrigido)
    socketRef.current = new WebSocket("ws://localhost:8181");

    socketRef.current.onopen = () => {
      console.log("🟢 Conectado ao servidor WebSocket!");
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessageList((current) => [...current, data]);
      } catch {
        console.log("Mensagem recebida (formato bruto):", event.data);
        setMessageList((current) => [
          ...current,
          { author: "Servidor", text: event.data },
        ]);
      }
    };

    socketRef.current.onclose = () => {
      console.log("🔌 Desconectado do servidor WebSocket.");
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    // Verificando se o WebSocket está aberto antes de enviar a mensagem
    if (socketRef.current.readyState === WebSocket.OPEN) {
      const data = {
        author: username, // Usa o nome de usuário real
        text: message,
      };

      socketRef.current.send(JSON.stringify(data)); // Envia a mensagem via WebSocket
      setMessageList((current) => [...current, data]); // Adiciona a mensagem na lista de mensagens

      messageRef.current.value = "";
      messageRef.current.focus();
    } else {
      console.error("WebSocket não está aberto. Tente novamente mais tarde.");
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`chat-background ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <button className="mode-toggle-btn" onClick={toggleMode}>
        {isDarkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div id="chat-container">
        <div className="chat-header">💭 devChat</div>

        <div id="chat-body">
          {messageList.map((message, index) => (
            <div
              className={`chat-message ${
                message.author === username ? "self" : "other"
              }`}
              key={index}
            >
              <div className="fw-bold mb-1">{message.author}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div id="chat-footer">
          <input
            ref={messageRef}
            autoFocus
            id="msgUser"
            name="msgUser"
            type="text"
            placeholder="Digite uma mensagem"
            className="chat-input"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="send-button" onClick={handleSubmit}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
