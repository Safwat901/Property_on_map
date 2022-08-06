import React from "react";

const Cards = () => {
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
          style={{ width: "18rem", height: "15rem" }}
          class="card-img-top"
          src="/card1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
