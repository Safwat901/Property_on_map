import { Card } from "material-ui";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FlatFr from "./FlatFr";
import ForRentPNM from "./ForRentPNM";
import ForSalePNM from "./ForSalePNM.js";

const Tabb = () => {
  return (
    <>
      <Tabs
        style={{ marginLeft: "560px" }}
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab style={{ marginLeft: "200px" }} eventKey="home" title="For Sale">
          <ForSalePNM />
        </Tab>
        <Tab
          style={{ marginLeft: "200px" }}
          eventKey="profile"
          title="For Rent"
        >
          <ForRentPNM />
        </Tab>
      </Tabs>
    </>
  );
};

export default Tabb;
