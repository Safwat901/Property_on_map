import { Card } from "material-ui";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FlatFr from "./FlatFr";
import ForRentPNM from "./ForRentPNM";
import ForSalePNM from "./ForSalePNM.js";

const PopularMymenNeig = () => {
  return (
    <>
      <div className="container4">
        <div style={{ marginBottom: "30px" }}>
          <h1>Popular Mymensingh Neighborhoods</h1>
        </div>
        <div>
          <Tabs
            style={{ marginLeft: "200px" }}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab
              style={{
                textAlign: "center",
                marginLeft: "-60px",
              }}
              eventKey="home"
              title="For Sale"
            >
              <ForSalePNM />
            </Tab>
            <Tab
              style={{ textAlign: "center", marginLeft: "-60px" }}
              eventKey="profile"
              title="For Rent"
            >
              <ForRentPNM />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PopularMymenNeig;
