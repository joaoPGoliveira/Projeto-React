import React, { useState } from 'react';

function Forms3() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${userInfo.firstName} ${userInfo.lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms3;