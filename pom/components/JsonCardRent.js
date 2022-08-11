import CardForDetail from "./CardForDetail";

import Raff from "./Raff";

const JsonCardRent = () => {
  const Cardinfo = [
    {
      price: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
      details: "2 bed, 2 bath",
      imgsrcs: "/card5.jpg",
    },
    {
      price: "BDT 40 lakh",
      location: "boundary road, Mymensingh",
      type: "House",
      details: "3 bed, 2 bath ",
      imgsrcs: "/card7.jpg",
    },
    {
      price: "BDT 60 lakh",
      location: "Notun bazar",
      type: "Apartment",
      details: "2 bed, 2 bath, Mymensingh",
      imgsrcs: "/card8.jpg",
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

  const renderCard = (item, index) => {
    return (
      <>
        <CardForDetail data={item} />
      </>
    );
  };

  return <div>{Cardinfo.map(renderCard)}</div>;
};

export default JsonCardRent;
