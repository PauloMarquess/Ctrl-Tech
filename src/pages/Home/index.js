import React from "react";
import Destak from "../../components/Destak";
import DestakTwo from "../../components/DestakTwo";
import Footer from "../../components/Footer";
import Garantia from "../../components/Garantia";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import Slider from "../../components/Slider";
import Story from "../../components/story";
import Up from "../../components/atomic/Up";

const Home = () => {
  return (
    <>
      <header>
        <Up />
        <SectionOne />
      </header>
      <main>
        <SectionTwo />
        <Destak />
        <Garantia />
        <Story />
        <DestakTwo />
        <Slider />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
