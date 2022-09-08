import styles from "../styles/ForRent1.module.css";

const ForRent1PrprtVdo = () => {
  return (
    <>
      <div className={styles.mainDivvv}>
        <div className={styles.txtDiv}>
          <h2>Property Video</h2>
        </div>

        <div className={styles.vdoDiv}>
          <video
            style={{ width: "100%", objectFit: "cover" }}
            class="video-fluid z-depth-1"
            autoplay
            loop
            controls
            muted
            // poster="/cartoon1.png"
          >
            <source src="vdo1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default ForRent1PrprtVdo;
