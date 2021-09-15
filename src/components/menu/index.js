import react from "react";
import ButtonOne from "../atomic/ButtonOne";
import * as S from './styled'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Menu = () => {
    return (
        <S.Container id ="Home">

            <div>
                <S.Strong href='#'><strong>Doutor</strong>Reparo.com</S.Strong>
                <S.Paragraph>Mestre da informática</S.Paragraph>
            </div>

            <S.Navigation>
               <AnchorLink href="#Service"> <S.Link>NOSSOS SERVIÇOS</S.Link></AnchorLink>
                <S.Link href="#Garantia">NOSSA GARANTIA</S.Link>
                <S.Link href="#Story">QUEM SOMOS</S.Link>
                <S.Link href="#Contact">CONTATO</S.Link>
                <ButtonOne />
            </S.Navigation>
            
        </S.Container>
    )


}

export default Menu;