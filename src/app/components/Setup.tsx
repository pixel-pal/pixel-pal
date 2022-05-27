import React, { useState } from "react"

export default function Setup() {
  const [panelWidth, setPanelWidth] = useState<number>(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState("start drawing")
  const [selectedColor, setColor] = useState("#f44336")
  
  function initializeDrawingPanel() {
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)
    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing")
  }

  function handleWidth(e : any){
      setPanelWidth(e.target.value)
  }

  function handleHeight(e : any){
    setPanelHeight(e.target.value)
}

  return (
    <div id="setup">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={handleWidth}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={handleHeight}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </button>
    </div>
  )
}