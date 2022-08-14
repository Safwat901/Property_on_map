import JsonCardRent from "../../components/JsonCardRent";
import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import JsonCardSale from "../../components/JsonCardSale";
import BreadCumbMui from "../../components/BreadCumbMui";

const index = () => {
  return (
    <>
      <Head>
        <title>Sale</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <BreadCumbMui segment="For Sale" place="Boundary Road" />
      <JsonCardSale />

      <Footer />
    </>
  );
};

export default index;
