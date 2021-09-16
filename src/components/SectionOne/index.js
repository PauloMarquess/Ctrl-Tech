import react from "react";
import FirstLook from "../atomic/First-Look";
import Menu from "../menu";
import * as S from './styled'


const SectionOne = () => {
    return(

        <S.Container  id ="Home">
            <S.H4>A solução do problema é a nossa garantia. Sem reparo, sem cobrança.</S.H4>
            <Menu/>
            <FirstLook/>
        
        </S.Container>
    )
}

export default SectionOne;