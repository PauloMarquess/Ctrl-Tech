<<<<<<< HEAD
import React from "react";
=======
import react from "react";
import Contato from "../../components/Contato";
>>>>>>> 0b8ddbbb102a314575eb787588cd79833973238e
import Destak from "../../components/Destak";
import DestakTwo from "../../components/DestakTwo";
import Footer from "../../components/Footer";
import Garantia from "../../components/Garantia";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
<<<<<<< HEAD
=======
import Slider from "../../components/Slider";
import Story from "../../components/story";
import Up from "../../components/atomic/Up"
import * as S from './styled'
>>>>>>> 0b8ddbbb102a314575eb787588cd79833973238e

const Home = () => {
  return (
    <>
      <header>
        <SectionOne />
      </header>
      <main>
        <SectionTwo />
        <Destak />
      </main>
    </>
  );
};

<<<<<<< HEAD
export default Home;
=======
 const Home = () => {

    return (
        <>
        <header>
            <Up/>
            <SectionOne/>
        </header>
        <main>
            <SectionTwo/>
            <Destak/>
            <Garantia/>
            <Story/>
            <DestakTwo/>
            <Slider />
            <Contato/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default Home;
>>>>>>> 0b8ddbbb102a314575eb787588cd79833973238e
