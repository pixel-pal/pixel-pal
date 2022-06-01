import React from 'react';
import '../styles/drawingPanel.scss';
import Row from './Row';

import { DrawingProps } from '../../types';

export default function DrawingPanel(props: DrawingProps) {
  const { width, height, selectedColor, canvas, setCanvas } = props;

  const rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        row={i}
        canvas={canvas}
        setCanvas={setCanvas}
        width={width}
        selectedColor={selectedColor}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  );
}
