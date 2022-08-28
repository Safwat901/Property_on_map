import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import MegaMenuBar from "../../components/MegaMenuBar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Carousel from "../../components/Carousell";
import AdpropertyGetSt from "../../components/AdpropertyGetSt";
import AdpropertyForm from "../../components/AdpropertyForm";
import AdpropertyHowWork from "../../components/AdpropertyHowWork";
import AdpropertyCusExpe from "../../components/AdpropertyCusExpe";
import AdpropertyFAQ from "../../components/AdpropertyFAQ";
import AdpropertyContact from "../../components/AdpropertyContact";

const index = () => {
  return (
    <>
      <Head>
        <title>ADD PROPERTY</title>
      </Head>
      <NavBarUpper />
      <MegaMenuBar />
      <Carousel imgsrc="/carousel3.jpg" />
      <AdpropertyGetSt />
      <AdpropertyHowWork />
      <AdpropertyCusExpe />
      <AdpropertyFAQ />
      <AdpropertyContact />

      <Footer />
    </>
  );
};

export default index;
