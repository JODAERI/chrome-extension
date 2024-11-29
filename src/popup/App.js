import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, { text: input, user: "user" }]);
    setInput("");

    // 간단한 응답
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "조달 관련 도움을 드립니다!", user: "bot" },
      ]);
    }, 500);
  };

  return (
    <div
      style={{
        padding: "10px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{ textAlign: msg.user === "user" ? "right" : "left" }}
          >
            <p
              style={{
                padding: "5px 10px",
                margin: "5px",
                background: msg.user === "user" ? "#e6f7ff" : "#f0f0f0",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleSendMessage}
        style={{
          padding: "10px",
          borderRadius: "5px",
          background: "#007bff",
          color: "white",
        }}
      >
        전송
      </button>
    </div>
  );
};

export default App;
