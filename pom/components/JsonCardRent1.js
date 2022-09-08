import ForRentsideCardsml from "./ForRentsideCardsml";

const JsonCardRent1 = () => {
  const CardDetail = [
    {
      prices: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
    },
    {
      prices: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
    },
    {
      prices: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
    },
    {
      prices: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
    },
    {
      prices: "BDT 60 lakh",
      location: "Notun bazar, Mymensingh",
      type: "Apartment",
    },
  ];

  const renderCard = (item, index) => {
    return (
      <>
        <ForRentsideCardsml data={item} />
      </>
    );
  };

  return (
    <>
      <div>{CardDetail.map(renderCard)}</div>
    </>
  );
};

export default JsonCardRent1;
