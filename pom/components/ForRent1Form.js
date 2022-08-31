import styles from "../styles/ForRent1.module.css";
const ForRent1Form = () => {
  return (
    <>
      <div className={styles.container}>
        <form>
          <h3>Contact Form</h3>
          <div className={styles.uiDivider}></div>
          <div className={styles.uiForm}>
            <div className={styles.field}>
              {/* <label>
                Name<sup>*</sup>
              </label> */}
              <br />
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              ></input>
            </div>
            <div className={styles.field}>
              {/* <label>
                Email<sup>*</sup>
              </label> */}
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className={styles.field}>
              {/* <label>
                Phone Number<sup>*</sup>
              </label> */}
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
              <div style={{ marginTop: "20px" }} className="textarea">
                <div className="textarea-text">
                  {/* <p>
                    <label for="w3review">Write your location </label>
                  </p> */}
                </div>
                <div className="main-texarea">
                  <textarea
                    style={{ width: "300px" }}
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="btnDivv">
                  <button
                    style={{
                      background: "red",
                      background: "#3cb371",
                      fontFamily: "Tahoma",
                      color: "azure",
                      width: "110px",
                      border: "none",
                      borderRadius: "5px",
                      marginLeft: "80px",
                      marginTop: "10px",
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
    </>
  );
};

export default ForRent1Form;
