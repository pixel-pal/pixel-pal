import React from 'react';
import Column from './Column';
import '../styles/row.scss';
import { RowProps } from '../../types';

export default function Row(props: RowProps) {
  const { width, selectedColor, canvas, setCanvas, row } = props;

  const pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Column key={i} row={row} col={i} selectedColor={selectedColor} canvas={canvas} setCanvas={setCanvas} />);
  }

  return <div className="row">{pixels}</div>;
}
