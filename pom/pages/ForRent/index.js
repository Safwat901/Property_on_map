import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";

import JsonCardRent from "../../components/JsonCardRent";

const index = () => {
  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <JsonCardRent />

      <Footer />
    </>
  );
};

export default index;
