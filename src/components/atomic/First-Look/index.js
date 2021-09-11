import React from 'react';
import * as S from './styled'
import ArrowRight from '../../../assets/arrow-right.png'
import Img1 from '../../../assets/1.png'
import Img2 from '../../../assets/2.png'
import Img3 from '../../../assets/3.png'
import Img4 from '../../../assets/4.png'
import Img5 from '../../../assets/5.png'
import Img6 from '../../../assets/6.png'
// import { Container } from './styles';

const FirstLook = () => {
    return (
        <S.Container>
            <S.Commit>
                <S.H3>A MAIOR FRANQUIA DE <br /><S.Strong>SUPORTE EM INFORMÁTICA</S.Strong> <br />DO SUL DO BRASIL</S.H3>
            </S.Commit>

            <S.Arrow>
                <img src={ArrowRight} />

            </S.Arrow>

            <S.Options>

                <div>
                    <S.H1>Vamos resolver o <br />Problema ? </S.H1>
                    <S.Paragraph>Receba seu orçamento em menos de 1 minuto!</S.Paragraph>

                    <S.ContainerIcons>

                        <S.Card>
                            <img src={Img1} />
                            <S.Link  href="#">Formatar Equipamento</S.Link>
                        </S.Card>

                        <S.Card>
                            <img src={Img2} />
                            <S.Link  href="#">Ajuda de um Especialista</S.Link>
                        </S.Card>

                        <S.Card>
                            <img src={Img3} />
                            <S.Link  href="#">Ajuda com Wifi</S.Link>
                        </S.Card>

                        <S.Card>
                            <img src={Img4} />
                            <S.Link  href="#">Acho que estou com Vírus</S.Link>
                        </S.Card>

                        <S.Card>
                            <img src={Img5} />
                            <S.Link  href="#"> Configurar  SmartTv</S.Link>
                        </S.Card>

                        <S.Card>
                            <img src={Img6} />
                            <S.Link href="#">Problemas no meu Smartphone</S.Link>
                        </S.Card>

                    </S.ContainerIcons>
                </div>
            </S.Options>

        </S.Container>
    );
}

export default FirstLook;