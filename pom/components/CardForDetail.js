import Button1 from "./Button1";
import Link from "next/link";

const CardForDetail = (props) => {
  return (
    <>
      <div className="main-div">
        <a href="/ForRent1">
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
              style={{
                display: "flex",
                marginLeft: "120px",
                marginTop: "30px",
              }}
            >
              <Button1 />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardForDetail;
