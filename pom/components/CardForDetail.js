import Login_button from "./Login_button";

const CardForDetail = () => {
  return (
    <>
      <div className="main-div">
        <div className="img-div">
          <img src="/card1.jpg" alt="sdkja"></img>
        </div>
        <div className="body-div">
          <div className="desc-dev">
            <h3>BDT 1.5 Core</h3>
            <p>Nasirabad road,Mymensingh</p>
            <p>Apartment</p>
            <p>3 bed, 2 bath, 1300sqft</p>
          </div>
          <div
            style={{ display: "flex", marginLeft: "120px", marginTop: "30px" }}
          >
            <Login_button title="Call" />
            <Login_button title="Email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardForDetail;
