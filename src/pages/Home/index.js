import React from "react";
import Destak from "../../components/Destak";
import DestakTwo from "../../components/DestakTwo";
import Footer from "../../components/Footer";
import Garantia from "../../components/Garantia";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import Slider from "../../components/Slider";
import Story from "../../components/story";
import Contato from "../../components/Contato";

const Home = () => {
  return (
    <>
      <header>
        
        <SectionOne />
      </header>
      <main>
        <SectionTwo />
        <Destak />
        <Garantia />
        <Story />
        <DestakTwo />
        <Slider />
        <Contato/>
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
