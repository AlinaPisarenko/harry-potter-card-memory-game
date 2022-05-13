import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalComponent({ moves, handleRestart, level }) {
  const [show, setShow] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
  });

  //closing modal
  function handleClose() {
    setShow(false);
    handleRestart();
  }

  //submiting new score
  function handleSubmit() {
    setShow(false);

    //creating an object for a new player
    const newPlayer = {
      firstName: form.firstName,
      score: moves,
      level: level,
    };

    //sending data to database
    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    }).then((r) => r.json());

    //restarting form
    setForm({
      firstName: "",
    });
    handleRestart();
  }

  //keeping track of the input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-comp">
        <Modal.Header closeButton>
          <Modal.Title>You are a Wizard!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You completed the game in {moves} moves</Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter your name in the Goblet of Fire</Form.Label>
            <Form.Control
              type="input"
              name="firstName"
              placeholder="Type your name"
              onChange={handleChange}
              value={form.firstName}
              autoFocus
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Restart
          </Button>
          <Button
            variant="secondary"
            onClick={handleSubmit}
            onKeyDown={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
