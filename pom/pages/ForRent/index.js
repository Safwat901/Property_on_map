import MenuBar from "../../components/MenuBar";
import NavBarUpper from "../../components/NavBarUpper";
import Head from "next/head";
import Footer from "../../components/Footer";
import CardForDetail from "../../components/CardForDetail";

const index = () => {
  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>
      <NavBarUpper />
      <MenuBar />
      <CardForDetail />
      <CardForDetail />
      <CardForDetail />
      <CardForDetail />
      <CardForDetail />
      <Footer />
    </>
  );
};

export default index;
