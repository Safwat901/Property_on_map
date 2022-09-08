// import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import MegaMenuBar from "../../components/MegaMenuBar";

import JsonCardRent from "../../components/JsonCardRent";

import BreadCumbMui from "../../components/BreadCumbMui";
import ForRentPagination from "../../components/ForRentPagination";

const index = () => {
  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>
      <NavBarUpper />
      <MegaMenuBar />
      {/* <BreadCumb segment="For Rent" path="Notun Bazar" /> */}
      <BreadCumbMui segment="For Rent" place="Notun Bazar" />
      <JsonCardRent />
      <ForRentPagination />

      <Footer />
    </>
  );
};

export default index;
