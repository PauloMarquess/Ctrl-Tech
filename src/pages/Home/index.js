import React from "react";
import Destak from "../../components/Destak";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";

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

export default Home;
