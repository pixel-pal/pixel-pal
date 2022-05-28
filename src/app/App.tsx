import React from 'react';
import './styles/App.scss';
import Editor from './components/Editor';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1 id="main_title">Pixel Pal</h1>
      <Editor />
    </div>
  );
}

export default App;
