import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { SocketContext, socket } from './Socket.jsx';

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
