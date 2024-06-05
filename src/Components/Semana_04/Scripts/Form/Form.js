import React, { useState } from 'react';

function Forms() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;