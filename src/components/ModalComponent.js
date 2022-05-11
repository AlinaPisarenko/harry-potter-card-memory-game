import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalComponent({ moves, handleRestart, level }) {
  const [show, setShow] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
  });

  console.log(level);

  function handleClose() {
    setShow(false);
    handleRestart();
  }

  function handleSubmit() {
    setShow(false);

    const newPlayer = {
      firstName: form.firstName,
      score: moves,
      level: level,
    };
    const pl = "players";
    const ad = "advanced-players";

    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    }).then((r) => r.json());

    setForm({
      firstName: "",
    });
    handleRestart();
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats!</Modal.Title>
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
            variant="primary"
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
