import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, isLoaded, handleDonation, handleLike }) {
  const toyCards = toys.map(toy => {
    return <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      handleDonation={handleDonation}
      handleLike={handleLike}
    />
  })
  if (!isLoaded) {
    return <h3>Loading...</h3>
  }
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
