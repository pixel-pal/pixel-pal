import React from 'react';
import Pixel from './Pixel';
import '../styles/row.scss';

export default function Row(props) {
  const { width, selectedColor } = props;

  const pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
