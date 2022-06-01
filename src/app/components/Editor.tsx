import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import DrawingPanel from './DrawingPanel';
import '../styles/editor.scss';

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState<string | number>(16);
  const [panelHeight, setPanelHeight] = useState<string | number>(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setColor] = useState('#f44336');

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing');
  }

  const changeColor = (color: any) => {
    console.log(color);
    setColor(color.hex);
  };

  return (
    <div id="editor">
      {hideDrawingPanel && <h2>Choose Drawing Size</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <div id='drawing-tools'>
          <div id="color-picker">
            <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
          </div>
          <button 
            onClick={()=>{setColor('#FFFFFF')}}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                fill="#000" 
                className="bi bi-eraser-fill" 
                viewBox="0 0 16 16"
              >
                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
              </svg>
          </button>
        </div>
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
