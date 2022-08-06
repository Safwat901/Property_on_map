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

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Carousel />
      <MainSearch />
      <FlatFr />
      <CardsRowfr />
      <FlateFs />
      <CardsRowfs />
      <SliderVt />

      <Footer />
    </>
  );
};
export default index;
