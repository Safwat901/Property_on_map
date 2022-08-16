import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";

import Footer from "../../components/Footer";
import Head from "next/head";
import Carousel from "../../components/Carousell";
import AdpropertyGetSt from "../../components/AdpropertyGetSt";

const index = () => {
  return (
    <>
      <Head>
        <title>ADD PROPERTY</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <Carousel imgsrc="/carousel(2).png" />
      <AdpropertyGetSt />

      <Footer />
    </>
  );
};

export default index;
