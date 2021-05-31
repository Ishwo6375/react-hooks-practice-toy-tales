import React from "react";
import { useState } from "react";

function ToyForm({ handleNewToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleNewToy(formData)
    setFormData({
      name: "",
      image: "",
      likes: 0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
