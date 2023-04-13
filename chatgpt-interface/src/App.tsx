import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputText }),
    });
    const data = await response.json();
    setResponseText(data.reply);
  };

  return (
    <div className="App">
      <h1>ChatGPT Interface</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{responseText}</p>
    </div>
  );
}

export default App;
