import React from "react";
import { Paper } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { API } from "./App";

function CharacterCard({ character, onDelete }) {
  //destructuring props
  const { id, name, image, house, patronus, wand } = character;

  //removing character from database
  function handleRemove() {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(character));
  }

  return (
    <div style={{ height: "100%", width: "50vh", margin: "16px" }}>
      <Paper
        style={{
          height: "80vh",
          width: "35vh",
          background: "black",
          color: "white",
          border: "",
          border: "1px solid #BFBFBF",
          boxShadow: "2px 2px 5px  #BFBFBF",
        }}
      >
        {" "}
        <img src={image} alt={name} className="image-list" />
        <h5 className="char-name">{name}</h5>
        <p className="char-description">{house}</p>
        <p className="char-description-detail">
          {patronus === "" ? null : ` Patronus: ${patronus}`}
        </p>
        <p className="char-description-detail">
          {wand.wood === "" ? null : `Wand: `}
          {wand.wood === "" ? null : `${wand.wood}, `}
          {wand.length === "" ? null : `${wand.length} inch, `}
          {wand.core === "" ? null : `${wand.core}, `}
        </p>
      </Paper>
      <Button
        onClick={handleRemove}
        color="primary"
        variant="outline-primary"
        className=" btn btn-remove"
      >
        Remove
      </Button>
    </div>
  );
}

export default CharacterCard;
