import Link from "next/link";
import Carousel from "../components/Carousell";
import Footer from "../components/Footer";
import Login_button from "../components/Login_button";
import Navbar from "../components/Navbar";
import Head from "next/head";
import MainSearch from "../components/MainSearch";

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
      <Carousel />
      <MainSearch />
      <Footer />
    </>
  );
};
export default index;
