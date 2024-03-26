import React, { useState } from 'react';
import './Home.css';
import openaiClient from '../../../api/chatGPT'; 

function Home() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Chame o método necessário do cliente OpenAI
      const completion = await openaiClient.complete({
        engine: 'davinci',
        prompt: inputText,
        maxTokens: 50,
      });

      // Extraia a resposta da resposta e defina-a no estado
      const textResponse = completion.data.choices[0].text;
      setResponse(textResponse);
    } catch (error) {
      console.error('Erro ao obter resposta do ChatGPT:', error);
    }
  };

  return (
    <div className="container">
      <h1>ChatGPT</h1>
      <form className="input-container" onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
      {response && (
        <div className="response-container">
          <h2>Resposta do ChatGPT:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
