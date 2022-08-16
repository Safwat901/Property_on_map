import styles from "../styles/Adproperty.module.css";
import Login_button from "./Login_button";

const AdpropertyGetSt = () => {
  return (
    <>
      <div className={styles.startedDiv}>
        <div className={styles.titleDiv}>
          <h2>Request For Rent or Buy</h2>
        </div>
        <div className={styles.desDiv}>
          <p>
            Request For Rent or Buysdkh asdkjlhadskj kjn nskjld wpoein capoucfnc
            aqfijpad adsj adskj lkdsj qd
          </p>
        </div>
        <div className={styles.btnDiv}>
          <Login_button title="Get Started" />
        </div>
      </div>
    </>
  );
};

export default AdpropertyGetSt;
