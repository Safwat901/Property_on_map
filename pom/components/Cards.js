import React from "react";

const Cards = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          display: "flex",

          alignItems: "stretch",
          justifyContent: "space-around",
          float: "right",
          margin: "18px",
          height: "25rem",
        }}
      >
        <img
          style={{ width: "auto", height: "12rem", objectFit: "auto" }}
          class="card-img-top"
          src={props.imgsrc}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p style={{ color: "Green" }} class="card-location">
            {props.location}
          </p>

          <p style={{ fontFamily: "robot" }} class="card-detail">
            {props.detail}
          </p>
          <a
            style={{ background: "#4f7942", color: "white" }}
            href="#"
            class="btn "
          >
            See Deatils
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
