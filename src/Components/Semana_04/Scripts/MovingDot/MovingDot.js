import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      <p>The mouse position is ({position.x}, {position.y})</p>
    </div>
  );
}

export default MovingDot;