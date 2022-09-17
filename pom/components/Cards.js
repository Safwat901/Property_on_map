import Link from "next/link";

const Cards = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "20rem",
          display: "flex",

          alignItems: "stretch",
          justifyContent: "space-around",
          float: "right",
          margin: "18px",
          height: "22rem",
          boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
        }}
      >
        <div className="inner">
          <img
            style={{ width: "20rem", height: "12rem", objectFit: "auto" }}
            class="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
        </div>

        <div class="card-body text-center ">
          <h5 style={{ color: "#f4af1b" }} class="card-title">
            {props.title}
          </h5>
          <p class="card-location">{props.location}</p>

          <p style={{ fontFamily: "robot" }} class="card-detail">
            {props.detail}
          </p>
          <Link href="/ForRent1">
            <a style={{ background: "#00154f  ", color: "white" }} class="btn ">
              See Deatils
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
