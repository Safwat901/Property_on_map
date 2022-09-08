import styles from "../styles/ForRent1.module.css";

const ForRent1FloorPlan = () => {
  return (
    <>
      <div className={styles.mainnDiv}>
        <div className={styles.txtDiv}>
          <h2>Floor Plan</h2>
        </div>

        <div className={styles.picDiv}>
          <img src="/cartoon3.jpg" alt="missing" />
        </div>

        <div className={styles.dscDiv}>
          <p>Commercial Listening, Town Hall</p>
        </div>
      </div>
    </>
  );
};

export default ForRent1FloorPlan;
