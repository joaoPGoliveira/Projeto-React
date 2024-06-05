import React, { useState } from 'react';

function ShapeEditor2() {
  const [shapes, setShapes] = useState([
    { id: 1, type: 'circle' },
    { id: 2, type: 'square' },
  ]);

  const changeShape = (id) => {
    setShapes(shapes.map(shape => 
      shape.id === id ? { ...shape, type: shape.type === 'circle' ? 'square' : 'circle' } : shape
    ));
  };

  const removeShape = (id) => {
    setShapes(shapes.filter(shape => shape.id !== id));
  };

  return (
    <div>
      {shapes.map(shape => (
        <div key={shape.id}>
          <p>{shape.type}</p>
          <button onClick={() => changeShape(shape.id)}>Change Shape</button>
          <button onClick={() => removeShape(shape.id)}>Remove Shape</button>
        </div>
      ))}
    </div>
  );
}

export default ShapeEditor2;