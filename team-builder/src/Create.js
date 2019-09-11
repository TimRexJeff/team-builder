import React, { useState } from "react";

const Create = props => {
  const [newPeep, setNewPeep] = useState({
    title: "",
    body: ""
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
      title: "",
      body: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value="Hello"
      />
      <textarea name="body" onChange={handleChange} value={newPeep.body} />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;
