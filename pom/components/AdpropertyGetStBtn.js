import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/Adproperty.module.css";

const AdpropertyGetStBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        style={{ background: "#32cd32", fontFamily: "Tahoma" }}
        onClick={handleShow}
      >
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Full Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          {/*.......................... radio button components................ */}
          <Form>
            <p>What's your Purpose?</p>
            {/* {["checkbox", "radio"].map((type) => ( */}
            {/* <div key={`inline-${type}`} className="mb-3"> */}
            <Form.Check
              inline
              label="Sale"
              name="group1"
              //   type={type}
              //   id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Rent"
              name="group1"
              //   type={type}
              //   id={`inline-${type}-2`}
            />
            <div className={styles.radio2}>
              <p>Property Type?</p>
              {/* {["checkbox", "radio"].map((type) => ( */}
              {/* <div key={`inline-${type}`} className="mb-3"> */}
              <Form.Check
                inline
                label="Sale"
                name="group1"
                //   type={type}
                //   id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Rent"
                name="group1"
                //   type={type}
                //   id={`inline-${type}-2`}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdpropertyGetStBtn;
