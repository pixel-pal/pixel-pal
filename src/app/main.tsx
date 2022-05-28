import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

socket.on("connect", () => {
  console.log(socket.connected); // true
});

socket.on("disconnect", () => {
  console.log(socket.connected); // false
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
