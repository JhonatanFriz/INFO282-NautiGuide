import React, { useState } from 'react';

const RevisarSolicitudes = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <textarea
        className="chat-input"
        placeholder="Escribe aquí..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button className="send-button" onClick={handleSendMessage}>
        Enviar
      </button>
    </div>
  );
};

export default RevisarSolicitudes;