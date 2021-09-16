import React from 'react';
import * as S from './styled'
import Pagamentos from '../../assets/pagamentos.png'
import Arrow from '../../assets/arrow2.png'
import Chat from '../../assets/chat.png'
import Telefone from '../../assets/Svg/phone.svg'
// import { Container } from './styles';

function Contato() {
    return (
        <S.Main id="Contact">
            <S.Container1  >
                <S.H1  >AGENDAMENTO EXPRESS NÓS VAMOS ATÉ VOCÊ! </S.H1>
                <S.H3>SERVIÇOS COM GARANTIA DE 90 DIAS</S.H3><br/>
                
                <S.Btn1 href="tel:08738218100"><img src={Telefone} width="50px" /><S.DDD>(87)</S.DDD>991054786</S.Btn1>
                <S.Paragraph>Orçamento Preciso e Sem Surpresas
                    Agendamento Imediato, atendimento em *30 minutos
                </S.Paragraph>
                <S.ImgPag src={Pagamentos}/>
            </S.Container1>

            <S.Container2>
                <img src={Arrow}/>
            </S.Container2>

            <S.Container3>
                <S.Speak>
                    <img src={Chat} width="300px" /><br/>
                    <S.Btn2  href="https://api.whatsapp.com/send?phone=5587991054786" >WhatsApp</S.Btn2>
                </S.Speak>
            </S.Container3>

        </S.Main>
    );
}

export default Contato;