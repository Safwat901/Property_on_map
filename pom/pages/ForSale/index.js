import JsonCardRent from "../../components/JsonCardRent";
import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import JsonCardSale from "../../components/JsonCardSale";

const index = () => {
  return (
    <>
      <Head>
        <title>Sale</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <JsonCardSale />

      <Footer />
    </>
  );
};

export default index;
