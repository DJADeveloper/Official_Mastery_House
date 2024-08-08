import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import "../home.css";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = {
        sender: "bot",
        text: "Hi, I am the Mastery House assistant. How can I help you today?",
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5001/chat", {
        message: input,
      });
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        sender: "bot",
        text: "Sorry, there was an error processing your request.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container open">
      <div className="chatbot-header" onClick={onClose}>
        <span>Chat with us</span>
        <FaTimes className="close-icon" />
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
