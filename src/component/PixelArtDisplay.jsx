
import React from 'react';
import PropTypes from 'prop-types';

const PixelArtDisplay = ({ pixels, pixelSize }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(150, ${pixelSize}px)`,
  };

  return (
    <div className="pixel-art-display" style={style}>
      {pixels.map((color, index) => (
        <div
          key={index}
          className="pixel"
          style={{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: color }}
        />
      ))}
    </div>
  );
};

PixelArtDisplay.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.string).isRequired,
  pixelSize: PropTypes.number.isRequired,
};

export default PixelArtDisplay;
