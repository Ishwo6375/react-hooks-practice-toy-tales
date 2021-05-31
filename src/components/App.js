import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toys, setToys] = useState([]);
  const baseURL = "http://localhost:3001/toys";

  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setToys(data)
        setIsLoaded(true)
      })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(formData) {
    const configObj = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch(baseURL, configObj)
      .then(resp => resp.json())
      .then(newToy => {
        setToys([...toys, newToy])
      })
  }

  function handleDonation(id) {
    const configObj = { method: "DELETE" };
    fetch(`${baseURL}/${id}`, configObj)
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
  }

  function handleLike(id, numLikes) {
    const newLikes = numLikes + 1;
    const configObj = {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: newLikes })
    };
    fetch(`${baseURL}/${id}`, configObj)
      .then(resp => resp.json())
      .then(newToy => {
        const updatedToys = toys.map(toy => {
          if (toy.id === id) {
            return newToy
          }
          return toy
        });
        setToys(updatedToys)
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} isLoaded={isLoaded} handleDonation={handleDonation} handleLike={handleLike} />
    </>
  );
}

export default App;
