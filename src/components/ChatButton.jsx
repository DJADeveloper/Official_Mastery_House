import React from "react";
import { FaComments } from "react-icons/fa";
import "../home.css";

const ChatButton = ({ onClick }) => {
  return (
    <button className="chat-button" onClick={onClick}>
      <FaComments className="chat-icon" />
    </button>
  );
};

export default ChatButton;
