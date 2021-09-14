import react from "react";
import Destak from "../../components/Destak";
import Garantia from "../../components/Garantia";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
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
        </main>
        </>
    )
}

export default Home;