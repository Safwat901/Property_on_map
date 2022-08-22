import styles from "../styles/Adproperty.module.css";

const AdpropertyContact = () => {
  return (
    <>
      <div className={styles.coverDiv}>
        <div className={styles.imgsDiv}>
          <img
            style={{ height: "300px", width: "65rem" }}
            src="/banner1.jpg"
            alt="missing"
          />
        </div>
        <div className={styles.contactDiv}>
          <h2>Interested to learn more?</h2>
          <p style={{ textAlign: "justify" }}>
            Contact us today to learn more about how you can rent or sell
            property online quickly and easily.
          </p>
          <div className={styles.number}>
            <h1 style={{ marginLeft: "700px", marginTop: "-50px" }}>
              01714232435
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdpropertyContact;
