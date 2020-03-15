import React from 'react';
import Space from './containers/space'
import Bot from './containers/bot'
import Chat from './containers/chat'
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <Space />
      <Bot />
      <Chat />
    </div>
  );
}

export default App;