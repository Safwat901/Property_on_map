import Cards from "./Cards";

const TopRatedev = () => {
  return (
    <>
      <div
        style={{
          background: "rgb(234, 234, 244)",
          display: "flex",
          flexDirection: "column",
          height: "500px",
          alignItems: "center",
          width: "150rem",
          marginTop: "5rem",
        }}
        className="container"
      >
        <div>
          <h1>Top Rated Devlopers</h1>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Cards
            title="BDT 12500 "
            imgsrc="/card1.jpg"
            location="Town Hall"
            detail="2 bed,2 bath. Apartment"
            link="/ForRent"
          />
          <Cards
            title="BDT 738947 "
            imgsrc="/card3.jpg"
            location="Town Hall"
            detail="2 bed,2 bath. Apartment"
            link="/ForRent"
          />
          <Cards
            title="BDT 738947 "
            imgsrc="/card3.jpg"
            location="Town Hall"
            detail="2 bed,2 bath. Apartment"
            link="/ForRent"
          />
        </div>
      </div>
    </>
  );
};

export default TopRatedev;
