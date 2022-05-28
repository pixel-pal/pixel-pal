import React from 'react';
import Pixel from './Pixel';
import '../styles/row.scss';
import { RowProps } from '../../types'

export default function Row(props : RowProps) {
  const { width, selectedColor } = props;

  const pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
