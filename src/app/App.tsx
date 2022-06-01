import React, { useState, useEffect, useContext } from 'react';
import './styles/App.scss';
import Editor from './components/Editor';
import { SocketContext } from './Socket.jsx';

function setUpCanvas(rows: number | string, columns: number | string, defaultValue: string) {
  const canvas = Array(rows)
    .fill()
    .map(() => Array(columns).fill(defaultValue))
  return canvas;
}

function App(): JSX.Element {
  const [panelWidth, setPanelWidth] = useState<string | number>(16);
  const [panelHeight, setPanelHeight] = useState<string | number>(16);
  const [canvas, setCanvas] = useState(setUpCanvas(panelHeight, panelWidth, '#fff'));
  const socket = useContext(SocketContext);
  socket.on('newCanvas', (newCanvas) => {
    console.log('geeeeetting new canvas', newCanvas)
    setCanvas(canvas)
  })


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
