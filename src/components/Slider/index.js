import React from 'react';
import Wifi from '../../assets/wifi.png'
import Verificado from '../../assets/verificado.png'
import * as S from './styled'
import Img1 from '../../assets/Slide/1.png'
import Img2 from '../../assets/Slide/2.png'
import Img3 from '../../assets/Slide/3.png'
import Img4 from '../../assets/Slide/4.png'
// import { Container } from './styles';

function Slider() {
    return (
        <S.Container>
            <S.Title>
                <h2>Clientes Atendidos:</h2>
            </S.Title>

            <S.Empresas  >
                <S.Icons>
                    <img src={Img1} />
                </S.Icons>

                <S.Icons>
                    <img src={Img2} />
                </S.Icons>

                <S.Icons>
                    <img src={Img3} />
                </S.Icons>

                <S.Icons>
                    <img src={Img4} />
                </S.Icons>
            </S.Empresas>
        </S.Container>
    );
}

export default Slider;