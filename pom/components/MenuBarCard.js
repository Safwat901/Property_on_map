const MenuBarCard = () => {
  return (
    <div
      className="card"
      style={{
        width: "5rem",
        display: "flex",

        alignItems: "stretch",
        justifyContent: "space-around",
        float: "right",
        margin: "18px",
        height: "8rem",
        boxShadow: "5px 5px 15px rgb(0,0,0,0.5)",
      }}
    >
      <div className="inner">
        <img
          style={{ width: "18rem", height: "12rem", objectFit: "auto" }}
          class="card-img-top"
          src="/cartoon1.jpg"
          alt="Card image cap"
        />
      </div>

      <div class="card-body text-center ">
        <h5 class="card-title">fsidf</h5>
        <p style={{ color: "Green" }} class="card-location">
          {/* {props.location} */} askdjk
        </p>

        <p style={{ fontFamily: "robot" }} class="card-detail">
          asdiasodpia asdasdas
        </p>
      </div>
    </div>
  );
};

export default MenuBarCard;
