import React, { useState } from "react";

function NewCharacterForm({ onAddCharacter }) {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [patronus, setPatronus] = useState("");
  const [image, setImage] = useState("");
  const [wandWood, setWandWood] = useState("");
  const [wandCore, setWandCore] = useState("");
  const [wandLength, setWandLength] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:3001/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        house,
        patronus,
        image,
        wand: {
          wood: wandWood,
          core: wandCore,
          length: wandLength,
        },
      }),
    })
      .then((r) => r.json())
      .then((newCharacter) => onAddCharacter(newCharacter));
  }

  return (
    <div>
      <h2>New Character Form</h2>
      <form onSubmit={submitHandler}>
        <button type="submit">Add Character</button>
        <input
          type="text"
          name="name"
          placeholder="Character Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="house"
          placeholder="House"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
        <input
          type="text"
          name="patronus"
          placeholder="Patronus"
          value={patronus}
          onChange={(e) => setPatronus(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="wandWood"
          placeholder="Wand Wood"
          value={wandWood}
          onChange={(e) => setWandWood(e.target.value)}
        />
        <input
          type="text"
          name="wandCore"
          placeholder="Wand Core"
          value={wandCore}
          onChange={(e) => setWandCore(e.target.value)}
        />
        <input
          type="text"
          name="wandLength"
          placeholder="Wand Length"
          value={wandLength}
          onChange={(e) => setWandLength(e.target.value)}
        />
      </form>
    </div>
  );
}

export default NewCharacterForm;
