import React, { useState } from "react";

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Click to Open Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: darkMode ? "#23272F" : "rgb(17,24,39)",
          color: darkMode ? "#F3F3F3" : "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          fontSize: "16px",
        }}
      >
        {isOpen ? "Close Chat" : "Chat with Me"}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "350px",
            height: "500px",
            zIndex: 9999,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: darkMode ? "#23272F" : "#fff",
          }}
        >
          {/* Chatbot iframe */}
          <iframe
            src={`https://www.chatbase.co/chatbot-iframe/MOjZD4mz77Yx69EWEr79t`}
            title="Chatbot"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;