import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/ForRent1.module.css";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HomeIcon from "@mui/icons-material/Home";
import GarageIcon from "@mui/icons-material/Garage";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import DirectionsIcon from "@mui/icons-material/Directions";
import ForRent1FloorPlan from "./ForRent1FloorPlan";
import ForRent1Form from "./ForRent1Form";
import ForRent1PrprtVdo from "./ForRent1PrprtVdo";
import ForRent1SeeAlso from "./ForRent1SeeAlso";
import { style } from "@mui/system";

const ForRent1Card = () => {
  return (
    <>
      <div
        style={{
          // background: "black",
          width: "60%",
          marginBottom: "50rem",

          display: "flex",
          flexDirection: "column",
        }}
        className={styles.motherDiv}
      >
        <Carousel
          style={{
            width: "75%",
            marginLeft: "200px",
            objectFit: "contain",
            marginTop: "2rem",
          }}
          slide={false}
        >
          <Carousel.Item>
            <img
              style={{
                height: "400px",
                width: "5000px",
              }}
              className="d-block w-100"
              src="/slider1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "400px",
                width: "5000px",
              }}
              className="d-block w-100"
              src="/slider2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* DESCRIPTIONS............................... */}
        <div className={styles.mainDiv}>
          <div className={styles.priceDiv}>
            <h5>
              BDT <span>75 Lakh</span>
            </h5>
            <h5>Notun Bazar, Mymensingh</h5>
          </div>
          <div className={styles.overView}>
            <div className={styles.iconDiv}>
              <HowToRegIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>ID</p>
                <span>123124</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <HomeIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Type</p>
                <span>Home</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <GarageIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Parking</p>
                <span>Yes</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <SingleBedIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Bedroom</p>
                <span>3</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <ShowerIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Bath</p>
                <span>2</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <SquareFootIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Sqrft</p>
                <span>1200</span>
              </div>
            </div>

            <div className={styles.iconDiv}>
              <DirectionsIcon
                style={{
                  background: "#4f7942",
                  color: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
                }}
              />
              <div className={styles.titlediv}>
                <p>Purpose</p>
                <span>Rent</span>
              </div>
            </div>
          </div>

          <div className={styles.title4}>
            <h4>
              Plan to move in this 1087 SQ FT flat which is up for sale in
            </h4>
          </div>
          <div className={styles.descrp}>
            End the disparity of wanting a suitable home, to meet your homely
            demands being in a limited budget. Evaluate this cost efficient 1087
            Square Feet flat right in Uttara, with decent 3 beds and nicely
            planned 3 baths, aligning with your need of wanting a modest home at
            the cheapest rate. The well-planned kitchen area is located right
            next to the spacious drawing-dining space. However, this flat has a
            nice balcony. The house has the best quality fittings for
            guaranteeing healthy hygiene. Want to know more about this flat?
            Just give us a call or contact us!
          </div>
          <ForRent1FloorPlan />
          <ForRent1PrprtVdo />
          <div style={{ display: "flex" }}>
            <ForRent1SeeAlso />
          </div>
        </div>
      </div>
      <ForRent1Form />
    </>
  );
};

export default ForRent1Card;
