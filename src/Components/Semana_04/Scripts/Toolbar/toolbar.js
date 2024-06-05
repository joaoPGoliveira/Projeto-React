import React from "react";

function Toolbar() {
  return (
    <div>
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Toolbar;
