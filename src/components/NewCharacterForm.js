import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

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

    if (name === "" || house === "" || image === "") {
      alert("Please enter your Name, Image and a House you belong to");
    } else {
      //sending new object to db
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

      //resetting form
      setName("");
      setHouse("");
      setPatronus("");
      setImage("");
      setWandWood("");
      setWandCore("");
      setWandLength("");
    }
  }

  return (
    <div>
      <h3 className="page-title">ADD YOUR CHARACTER</h3>

      <Form onSubmit={submitHandler} className="new-form">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              placeholder="CHARACTER NAME"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="IMAGE URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
            placeholder="HOUSE"
            type="text"
            name="house"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            placeholder="PATRONUS"
            type="text"
            name="patronus"
            value={patronus}
            onChange={(e) => setPatronus(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="form-label">|</Form.Label>
            <Form.Control
              placeholder="LENGTH"
              type="number"
              name="wandLength"
              value={wandLength}
              onChange={(e) => setWandLength(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="form-label">WAND</Form.Label>
            <Form.Control
              placeholder="WOOD"
              type="text"
              name="wandWood"
              value={wandWood}
              onChange={(e) => setWandWood(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="form-label">|</Form.Label>
            <Form.Control
              placeholder="CORE"
              type="text"
              name="wandCore"
              value={wandCore}
              onChange={(e) => setWandCore(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button className="btn-form" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewCharacterForm;
