import CardForDetail from "./CardForDetail";

const JsonCardSale = () => {
  const Cardsinfo = [
    {
      price: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
      details: "2 bed, 2 bath",
      imgsrcs: "/card1.jpg",
    },
    {
      price: "BDT 40 lakh",
      location: "boundary road, Mymensingh",
      type: "House",
      details: "3 bed, 2 bath ",
      imgsrcs: "/card2.jpg",
    },
    {
      price: "BDT 60 lakh",
      location: "Notun bazar",
      type: "Apartment",
      details: "2 bed, 2 bath, Mymensingh",
      imgsrcs: "/card7.jpg",
    },
    {
      price: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
      details: "2 bed, 2 bath",
      imgsrcs: "/card5.jpg",
    },
    {
      price: "BDT 60 lakh",
      location: "notun bazar",
      type: "house",
      details: "2 bed, 2 bath, Mymensingh",
      imgsrcs: "/card8.jpg",
    },
  ];

  const renderCards = (items, ind) => {
    return (
      <>
        <CardForDetail data={items} />
      </>
    );
  };

  return <>{Cardsinfo.map(renderCards)}</>;
};

export default JsonCardSale;
