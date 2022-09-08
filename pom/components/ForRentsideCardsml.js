import styles from "../styles/ForRent1.module.css";

const ForRentsideCardsml = (props) => {
  return (
    <>
      <div className={styles.mainDivSml}>
        <div className={styles.imgDivv}>
          <img
            style={{ width: "150px", height: "140px" }}
            src="/cartoon1.png"
            alt="sdkja"
          ></img>
        </div>
        <div className={styles.bodyDiv}>
          {/* <h3>{props.data.price}</h3>
              <p>{props.data.location}</p>
              <p>{props.data.type}</p> */}
          <h4>{props.location}</h4>
          <p>{props.type}</p>
          <h5>{props.price}</h5>
        </div>
      </div>
    </>
  );
};

export default ForRentsideCardsml;
