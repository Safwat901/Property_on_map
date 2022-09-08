import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ForRent1.module.css";
import ForRentsideCardsml from "./ForRentsideCardsml";

const ForRent1sideCard = () => {
  return (
    <>
      <div className={styles.mainCardDiv}>
        <div className={styles.mainCardDiv1}>
          <Card style={{ width: "19rem", border: "none" }}>
            <Card.Img variant="top" src="/cartoon1.png" />
            <Card.Body style={{ padding: "0", marginTop: "10px" }}>
              <Card.Title>Notun Bazar</Card.Title>
              <Card.Text>Apartment</Card.Text>
              <Card.Title>BDT 35.5 Lakh</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.mainCardDiv2}>
          <ForRentsideCardsml
            location="Boundary Road"
            type="House"
            price="35 Lakh"
          />
          <ForRentsideCardsml
            location="Nahar Road"
            type="Office"
            price="40 Lakh"
          />
          <ForRentsideCardsml
            location="College Road"
            type="House"
            price="75 Lakh"
          />
          <ForRentsideCardsml
            location="Chorpara"
            type="Apartment"
            price="90 Lakh"
          />
        </div>
      </div>
    </>
  );
};

export default ForRent1sideCard;
