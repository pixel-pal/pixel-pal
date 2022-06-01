import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Editor from './components/Editor';
import { io } from 'socket.io-client';
import { Canvas } from '../types';


function setUpCanvas(rows : number | string, columns : number | string, defaultValue : string){
    const canvas = Array(rows)
    .fill()
    .map(() => Array(columns).fill(defaultValue))
    return canvas;
}

function App(): JSX.Element {
  const [canvas, setCanvas] = useState([]);
  const [panelWidth, setPanelWidth] = useState<string | number>(16);
  const [panelHeight, setPanelHeight] = useState<string | number>(16);

  const socket = io('http://localhost:3001');
  socket.on("connect", () => {
    console.log('Socket is connected');
    socket.emit("draw", { canvas })
    
    socket.on('newCanvas', (newCanvas) => {
      console.log('updated', newCanvas);
      checkCanvas(newCanvas)
    })
  });
  socket.on("disconnect", () => {
    console.log('Socket is disconnected');
  });

  const checkCanvas = (newCanvas) => {
    if(JSON.stringify(newCanvas) === JSON.stringify(canvas)){
      setCanvas(newCanvas);
    }
  }

  useEffect(() => {
    const newCanvas = setUpCanvas(panelHeight, panelWidth, '#fff');
    console.log(newCanvas)
    setCanvas(newCanvas)
  }, [setCanvas])

  return (
    <div className="App">
      <h1 id="main_title">Pixel Pal</h1>
      <Editor 
        canvas={canvas} 
        setCanvas={setCanvas} 
        panelWidth={panelWidth} 
        setPanelWidth={setPanelWidth} 
        panelHeight={panelHeight} 
        setPanelHeight={setPanelHeight}
      />
    </div>
  );
}

export default App;
