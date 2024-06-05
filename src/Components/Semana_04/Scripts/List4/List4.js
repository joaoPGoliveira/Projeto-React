import React, { useState } from 'react';

function List4() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, text: `Item ${items.length + 1}` }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default List4;