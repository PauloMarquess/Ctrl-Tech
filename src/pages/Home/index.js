import react from "react";
import Destak from "../../components/Destak";
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
        </main>
        </>
    )
}

export default Home;