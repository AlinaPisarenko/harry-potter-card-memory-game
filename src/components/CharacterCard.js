import React from "react";

function CharacterCard({ character }) {
  const { name, image, house } = character;
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{house}</p>
      <button type="button" className="btn btn-dark">
        Remove
      </button>
    </li>
  );
}

export default CharacterCard;
