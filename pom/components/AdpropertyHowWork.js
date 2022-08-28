import styles from "../styles/Adproperty.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AdpropertyHowWork = () => {
  return (
    <>
      <div className={styles.mainnDiv}>
        <div className={styles.titleDiv}>
          <h1>How it works</h1>
        </div>
        <div className={styles.paraDiv}>
          <p>paragraph idao sdu as iodu ij</p>
        </div>

        <div className={styles.cardDiv}>
          <Card style={{ width: "18rem", height: "20rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "10rem" }}
              variant="top"
              src="/cartoon1.png"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* ....................card2 ........... */}
          <Card style={{ width: "18rem", height: "20rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "10rem" }}
              variant="top"
              src="/cartoon1.png"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* ....................card3 ........... */}
          <Card style={{ width: "18rem", height: "20rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "10rem" }}
              variant="top"
              src="/cartoon1.png"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* ....................card4 ........... */}
          <Card style={{ width: "18rem", height: "20rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "10rem" }}
              variant="top"
              src="/cartoon1.png"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdpropertyHowWork;
