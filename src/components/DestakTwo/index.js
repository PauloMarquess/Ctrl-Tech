import React from 'react';
import ButtonTwo from '../atomic/ButtonTwo';
import * as S from './styled'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { Container } from './styles';

function DestakTwo() {
    return (
        <S.Main>
            <S.Container1>
                <h1>A DoutorReparo.com é uma Microfranquia, Líder em Atendimentos Personalizados,
                    E Que Se Diferencia Pela Qualidade nos Serviços Realizados.</h1>
            </S.Container1>

            <S.Container2>
                <h3>Ainda não é nosso(a) cliente?
                    Impressione-se com o atendimento Premium, com valor justo.</h3>
                 <AnchorLink href="#Contact" > <ButtonTwo/></AnchorLink> 
            </S.Container2>
        </S.Main>
    );
}

export default DestakTwo;