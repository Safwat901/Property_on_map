import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";

import JsonCardRent from "../../components/JsonCardRent";

import BreadCumbMui from "../../components/BreadCumbMui";

const index = () => {
  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      {/* <BreadCumb segment="For Rent" path="Notun Bazar" /> */}
      <BreadCumbMui segment="For Rent" place="Notun Bazar" />
      <JsonCardRent />

      <Footer />
    </>
  );
};

export default index;
