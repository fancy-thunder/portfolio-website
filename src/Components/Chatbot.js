import React, { useState } from "react";

const Chatbot = () => {
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
          backgroundColor: "rgb(17,24,39)", // Dark grayish-blue color
          color: "#fff",
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
            backgroundColor: "#fff",
          }}
        >
          {/* Chatbot iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/D5uknssSnno1J5Ki24kWo"
            title="Chatbot"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>

          {/* White overlay to hide branding & bot name */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "50px", // Adjusted height to hide both branding & bot name
              backgroundColor: "#fff", // White background to cover elements
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
