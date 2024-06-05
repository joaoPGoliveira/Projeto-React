import React, { useState } from 'react';

function ShapeEditor() {
  const [shapes, setShapes] = useState([
    { id: 1, type: 'circle' },
    { id: 2, type: 'square' },
  ]);

  const changeShape = (id) => {
    setShapes(shapes.map(shape => 
      shape.id === id ? { ...shape, type: shape.type === 'circle' ? 'square' : 'circle' } : shape
    ));
  };

  return (
    <div>
      {shapes.map(shape => (
        <div key={shape.id}>
          <p>{shape.type}</p>
          <button onClick={() => changeShape(shape.id)}>Change Shape</button>
        </div>
      ))}
    </div>
  );
}

export default ShapeEditor;