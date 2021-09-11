import react from "react";
import ButtonOne from "../atomic/ButtonOne";
import * as S from './styled'


const Menu = () => {
    return (
        <S.Container>

            <div>
                <S.Strong href='#'><strong>Doutor</strong>Reparo.com</S.Strong>
                <S.Paragraph>Mestre da informática</S.Paragraph>
            </div>

            <S.Navigation>
                <S.Link href='#'>NOSSOS SERVIÇOS</S.Link>
                <S.Link href='#'>NOSSA GARANTIA</S.Link>
                <S.Link href='#'>QUEM SOMOS</S.Link>
                <S.Link href='#'>CONTATO</S.Link>
                <ButtonOne />
            </S.Navigation>
            
        </S.Container>
    )


}

export default Menu;