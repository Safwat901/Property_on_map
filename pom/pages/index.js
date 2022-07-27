import Link from "next/link";
import Carousel from "../components/Carousell";
import Footer from "../components/Footer";
import Login_button from "../components/Login_button";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Login_button />
      <Navbar />
      <Carousel />
      <Footer />
    </>
  );
};
export default index;
