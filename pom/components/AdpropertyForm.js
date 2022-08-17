import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/Adproperty.module.css";

const AdpropertyForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        style={{
          background: "red",
          background: "#32cd32",
          fontFamily: "Tahoma",
          color: "azure",
          width: "110px",
          border: "none",
          borderRadius: "5px",
          height: "50px",
        }}
        onClick={handleShow}
      >
        Let's Start
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.container}>
            <form>
              <h3>Request Form</h3>
              <div className={styles.uiDivider}></div>
              <div className={styles.uiForm}>
                <div className={styles.field}>
                  <label style={{ fontFamily: "Tahoma" }}>
                    Name<sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                  ></input>
                </div>
                <div className={styles.field}>
                  <label style={{ fontFamily: "Tahoma" }}>
                    Email<sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div className={styles.field}>
                  <label style={{ fontFamily: "Tahoma" }}>
                    Phone Number<sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="number"
                    placeholder="Mobile Number"
                    required
                  ></input>
                </div>
                {/* radio button............................................... */}

                <div className={styles.radioContainer}>
                  <div className={styles.radio1}>
                    <p style={{ fontFamily: "Tahoma" }}>Purpose?</p>
                    <input
                      style={{ cursor: "pointer" }}
                      type="radio"
                      id="sale"
                      checked="checked"
                    ></input>
                    <span className={styles.checkmark}></span>
                    <label for="Sale">Sale</label>

                    <input
                      style={{ marginLeft: "40px", cursor: "pointer" }}
                      type="radio"
                      id="rent"
                    ></input>
                    <span className={styles.checkmark}></span>
                    <label for="Sale">Rent</label>
                  </div>
                  <div className={styles.radio2}>
                    <p style={{ fontFamily: "Tahoma" }}>Property Type?</p>
                    <input type="radio" id="Residential" checked></input>
                    <label for="Residential">Residential</label>

                    <input
                      style={{ marginLeft: "40px" }}
                      type="radio"
                      id="Commercial"
                    ></input>
                    <label for="Commercial">Commercial</label>
                    <input
                      style={{ marginLeft: "40px" }}
                      type="radio"
                      id="Land"
                    ></input>
                    <label for="Land">Land</label>
                  </div>
                  <div style={{ marginTop: "20px" }} className="textarea">
                    <div className="textarea-text">
                      <p>
                        <label for="w3review">Write your location </label>
                      </p>
                    </div>
                    <div className="main-texarea">
                      <textarea
                        style={{ width: "300px" }}
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                      ></textarea>
                    </div>
                    <div className="btnDivv">
                      <button
                        style={{
                          background: "red",
                          background: "#32cd32",
                          fontFamily: "Tahoma",
                          color: "azure",
                          width: "110px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdpropertyForm;
