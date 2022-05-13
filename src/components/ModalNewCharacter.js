import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

function ModalNewCharacter({
  setShowModal,
  showModal,
  newWizard,
  setNewWizard,
}) {
  const [show, setShow] = useState(true);

  //destructuring props
  const { name, house, image, patronus, wand } = newWizard;

  //closing modal
  function handleClose() {
    setShow(false);
    setShowModal(!showModal);
    setNewWizard(!newWizard);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-comp">
        <Modal.Header closeButton>
          <Modal.Title>Congrats, {name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Say Goodbye to your muggle life! You are one of us now!</h5>

          <Container>
            <Row>
              <Col sm={4}>
                <img className="modal-image" src={image} />
              </Col>
              <Col sm={4}>
                <h2>{name}</h2>
                <h5>{house}</h5>
              </Col>
              <Col sm={4}>
                <h5>Patronus: {patronus}</h5>
                <h5>Wand:</h5>
                <ul className="wand-new">
                  <li>{wand.wood}</li>
                  <li>{wand.core}</li>
                  <li>{wand.length} inch</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Great!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNewCharacter;
