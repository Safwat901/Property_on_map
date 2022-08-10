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
          boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
        }}
      >
        <div className="inner">
          <img
            style={{ width: "18rem", height: "12rem", objectFit: "auto" }}
            class="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
        </div>

        <div class="card-body text-center ">
          <h5 class="card-title">{props.title}</h5>
          <p style={{ color: "Green" }} class="card-location">
            {props.location}
          </p>

          <p style={{ fontFamily: "robot" }} class="card-detail">
            {props.detail}
          </p>
          <a
            href={props.link}
            style={{ background: "#4f7942", color: "white" }}
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
