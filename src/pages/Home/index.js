import react from "react";
import Destak from "../../components/Destak";
import DestakTwo from "../../components/DestakTwo";
import Garantia from "../../components/Garantia";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import Story from "../../components/story";

import * as S from './styled'


 const Home = () => {

    return (
        <>
        <header>
            <SectionOne/>
        </header>
        <main>
            <SectionTwo/>
            <Destak/>
            <Garantia/>
            <Story/>
            <DestakTwo/>
            
        </main>
        </>
    )
}

export default Home;