import React from 'react';
import Space from './containers/space/space'
import Bot from './containers/bot/bot'
import Chat from './containers/chat/chat'
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