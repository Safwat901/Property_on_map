import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import MegaMenuBar from "../../components/MegaMenuBar";

import BreadCumbMui from "../../components/BreadCumbMui";
import ForRent1Card from "../../components/ForRent1Card";
import ForRent1Form from "../../components/ForRent1Form";
import ForRent1sideCard from "../../components/ForRent1sideCard";
import ForRentsideCardsml from "../../components/ForRentsideCardsml";
import NavbarActive from "../../components/NavbarActive";

const index = () => {
  return (
    <>
      <Head>
        <title>Rent Details</title>
      </Head>
      <NavBarUpper />
      <MegaMenuBar />
      <BreadCumbMui segment="For Rent" place="Notun Bazar" />

      <ForRent1Card />

      <Footer />
    </>
  );
};

export default index;
