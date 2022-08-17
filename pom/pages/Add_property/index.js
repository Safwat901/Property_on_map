import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";

import Footer from "../../components/Footer";
import Head from "next/head";
import Carousel from "../../components/Carousell";
import AdpropertyGetSt from "../../components/AdpropertyGetSt";
import AdpropertyForm from "../../components/AdpropertyForm";
import AdpropertyHowWork from "../../components/AdpropertyHowWork";

const index = () => {
  return (
    <>
      <Head>
        <title>ADD PROPERTY</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <Carousel imgsrc="/carousel3.jpg" />
      <AdpropertyGetSt />
      <AdpropertyHowWork />

      <Footer />
    </>
  );
};

export default index;
