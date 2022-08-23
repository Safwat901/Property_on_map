import Link from "next/link";
import Carousel from "../components/Carousell";
import Footer from "../components/Footer";
import Login_button from "../components/Login_button";
import Navbar from "../components/Navbar";
import Head from "next/head";
import MainSearch from "../components/MainSearch";
import Cards from "../components/Cards";
import FlatFr from "../components/FlatFr";
import FlateFs from "../components/FlateFs";
import CardsRowfr from "../components/CardsRowfr";
import CardsRowfs from "../components/CardsRowfs";
import SliderVt from "../components/SliderVt";
import TopRatedev from "../components/TopRatedev";
import CardsTopratedv from "../components/CardsTopratedv";
import PopularMymenNeig from "../components/PopularMymenNeig";
import Tabb from "../components/Tabb";
import MenuBar from "../components/MenuBar";
import NavBarUpper from "../components/NavBarUpper";
import MegaMenuBar from "../components/MegaMenuBar";

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBarUpper />
      <MegaMenuBar />
      <Carousel imgsrc="/carousel1.jpg" />
      <MainSearch />
      <FlatFr />
      <CardsRowfr />
      <FlateFs />
      <CardsRowfs />

      <SliderVt />
      <TopRatedev />
      <CardsTopratedv />
      <PopularMymenNeig />
      <Tabb />

      <Footer />
    </>
  );
};
export default index;
