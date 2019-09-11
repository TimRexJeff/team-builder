import React, { useState } from "react";

const Create = props => {
  const [newPeep, setNewPeep] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setNewPeep({
      ...newPeep,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newPeep);
  };

  const resetForm = event => {
    event.preventDefault();
    setNewPeep({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;
