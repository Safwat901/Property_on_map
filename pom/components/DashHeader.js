import { height } from "@mui/system";
import styles from "../styles/DashBoard.module.css";

const DashHeader = () => {
  return (
    <>
      <div className={styles.headcontainer}>
        <div className={styles.headwrapper}>
          <div className={styles.headtitle}>
            <h3>Hola!! Admin</h3>

            <p>Welcome to the Board!</p>
          </div>
        </div>
        <div className={styles.dashprofile}>
          <img
            style={{ width: "50px", height: "40px", cursor: "pointer" }}
            src="/logo.png"
            alt="missing"
          />
        </div>
      </div>
    </>
  );
};

export default DashHeader;
