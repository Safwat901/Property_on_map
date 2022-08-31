import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ForRent1.module.css";

const ForRent1sideCard = () => {
  return (
    <>
      <div className={styles.mainCardDiv}>
        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src="/cartoon1.png" />
          <Card.Body>
            <Card.Title>Notun Bazar</Card.Title>
            <Card.Text>Apartment</Card.Text>
            <Card.Title>BDT 35.5 Lakh</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ForRent1sideCard;
