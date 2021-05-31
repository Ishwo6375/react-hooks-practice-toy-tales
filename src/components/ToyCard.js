import React from "react";

function ToyCard({ id, name, image, likes, handleDonation, handleLike }) {
  function handleDonateClick() {
    handleDonation(id)
  }

  function handleLikeClick() {
    handleLike(id, likes)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
