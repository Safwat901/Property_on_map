import Login_button from "./Login_button";

const CardForDetail = (props) => {
  return (
    <>
      <div className="main-div">
        <div className="img-div">
          <img src={props.data.imgsrcs} alt="sdkja"></img>
        </div>
        <div className="body-div">
          <div className="desc-dev">
            <h3>{props.data.price}</h3>
            <p>{props.data.location}</p>
            <p>{props.data.type}</p>
            <p>{props.data.details}</p>
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
