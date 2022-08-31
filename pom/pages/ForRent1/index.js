import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import MegaMenuBar from "../../components/MegaMenuBar";

import BreadCumbMui from "../../components/BreadCumbMui";
import ForRent1Card from "../../components/ForRent1Card";
import ForRent1Form from "../../components/ForRent1Form";
import ForRent1sideCard from "../../components/ForRent1sideCard";

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
      <ForRent1Form />
      <ForRent1sideCard />

      <Footer />
    </>
  );
};

export default index;
