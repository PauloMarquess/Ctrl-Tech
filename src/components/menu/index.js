import react from "react";
import ButtonOne from "../atomic/ButtonOne";
import * as S from './styled'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Menu = () => {
    return (
        <S.Container>

            <div>
                <S.Strong href='#'><strong>Doutor</strong>Reparo.com</S.Strong>
                <S.Paragraph>Mestre da informática</S.Paragraph>
            </div>

            <S.Navigation>
                <AnchorLink href="#Service"  > <S.Link>NOSSOS SERVIÇOS</S.Link></AnchorLink>
                <AnchorLink  href="#Garantia"><S.Link>NOSSA GARANTIA</S.Link></AnchorLink>
                <AnchorLink href="#Story"> <S.Link >QUEM SOMOS</S.Link></AnchorLink>
                <AnchorLink href="#Contact"> <S.Link  >CONTATO</S.Link></AnchorLink>
                 <AnchorLink href="#Contact"><ButtonOne /></AnchorLink>
            </S.Navigation>

        </S.Container>
    )


}

export default Menu;