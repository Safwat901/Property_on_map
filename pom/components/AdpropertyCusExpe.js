import styles from "../styles/Adproperty.module.css";
import AdpropertyVdo from "./AdpropertyVdo";

const AdpropertyCusExpe = () => {
  return (
    <>
      <div className={styles.cusDiv}>
        <div className={styles.cusTitle}>
          <h2>How it works</h2>
        </div>
        <div className={styles.cusDes}>
          <p>adsjkl kdjpo apodkjapo xqdij cqdijpoqcn a qcijaxnpdijq qdijc</p>
        </div>
        <div className={styles.cusVdo}>
          <AdpropertyVdo vdosrc="vdo1.mp4" />
          <AdpropertyVdo vdosrc="vdo2.mp4" />
          <AdpropertyVdo vdosrc="vdo3.mp4" />
        </div>
      </div>
    </>
  );
};

export default AdpropertyCusExpe;
