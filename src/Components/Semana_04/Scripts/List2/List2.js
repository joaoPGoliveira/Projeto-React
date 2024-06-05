import React, { useState } from 'react';

function List2() {
  const [items, setItems] = useState([{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, text: `Item ${items.length + 1}` }]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default List2;