import React, { useState } from 'react';
import '../styles/pixel.scss';
import { PixelProps } from '../../types';

const Column = (props: PixelProps) => {
  const { selectedColor, row, col, canvas, setCanvas } = props;

  const [pixelColor, setPixelColor] = useState('#fff');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
        console.log(canvas)
    setPixelColor(selectedColor);
    setCanChangeColor(false);
    canvas[row][col] = selectedColor;
    setCanvas(canvas);
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}

export default Column;