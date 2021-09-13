import react from "react";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo/styled";
import * as S from './styled'


 const Home = () => {

    return (
        <>
        <header>
            <SectionOne/>
        </header>
        <main>
            <SectionTwo/>
        </main>
        </>
    )
}

export default Home;