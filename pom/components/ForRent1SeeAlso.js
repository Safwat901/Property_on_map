import styles from "../styles/ForRent1.module.css";
import Card from "react-bootstrap/Card";
import ForRent1sideCard from "./ForRent1sideCard";
const ForRent1SeeAlso = () => {
  return (
    <>
      <div className={styles.mainnDiv}>
        <div style={{ marginBottom: "50px" }} className={styles.txtDiv}>
          <h2>Related Propertise</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "30px",
          }}
          className={styles.mainCadrdDiv}
        >
          <div className={styles.mainCardDaiv1}>
            <Card style={{ width: "19rem", border: "none" }}>
              <Card.Img
                style={{
                  height: "200px",
                  paddingLeft: "0",
                }}
                variant="top"
                src="/cartoon1.png"
              />
              <Card.Body style={{ padding: "0", marginTop: "10px" }}>
                <Card.Title>Notun Bazar</Card.Title>
                <Card.Text>Apartment</Card.Text>
                <Card.Title>BDT 35.5 Lakh</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className={styles.mainCardDaiv1}>
            <Card style={{ width: "19rem", border: "none" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src="/cartoon1.png"
              />
              <Card.Body style={{ padding: "0", marginTop: "10px" }}>
                <Card.Title>Notun Bazar</Card.Title>
                <Card.Text>Apartment</Card.Text>
                <Card.Title>BDT 35.5 Lakh</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className={styles.mainCardDaiv1}>
            <Card style={{ width: "19rem", border: "none" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src="/cartoon1.png"
              />
              <Card.Body style={{ padding: "0", marginTop: "10px" }}>
                <Card.Title>Notun Bazar</Card.Title>
                <Card.Text>Apartment</Card.Text>
                <Card.Title>BDT 35.5 Lakh</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForRent1SeeAlso;
