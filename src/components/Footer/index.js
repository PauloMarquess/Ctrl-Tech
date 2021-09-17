import React from 'react';
import * as S from './styled'
import Icone from '../../assets/manutencao.png'
import Phone from '../../assets/phone-call.png'
import Email from '../../assets/new-email.png'
import Http from '../../assets/link.png'
import Gps from '../../assets/localization.png'
// import { Container } from './styles';

function Footer() {
    return (
        <S.Main >
            <S.Container1>
                <h1>Base Operacional</h1>
                  <S.Link href="https://goo.gl/maps/1xg7aqP8Podfgnxi9"> <S.Icons src={Gps} /> Rua Prudente de Morais 261 <br/> &nbsp; &nbsp; &nbsp; &nbsp;Arcoverde -PE</S.Link>
                <S.Link href="mailto:hma@hma.org.br?subject=Hello%20again"><S.Icons src={Email} /> paulinho_@hotmail.com</S.Link>
                <S.Link href="tel:08774001690"><S.Icons src={Phone} /> (87) 7400-1690</S.Link>
                <S.Link href="https://ctrl-tech.vercel.app/"><S.Icons src={Http} /> https://ctrl-tech.vercel.app</S.Link>

            </S.Container1>

            <S.Container2>

                <S.H1>Horários de Atendimento</S.H1>
                <p>Algumas localidades possuem horário de atendimento diferenciado, consulte.</p>

                <div>
                    <S.Paragraph>Segunda-Sexta</S.Paragraph>
                    <S.H2>8<S.Spam>00</S.Spam> - 18<S.Spam>00</S.Spam></S.H2>
                    <S.Paragraph>Sábado</S.Paragraph>
                    <S.H2>8<S.Spam>00</S.Spam> - 13<S.Spam>00</S.Spam></S.H2>
                </div>
            </S.Container2>

            <S.Container3>
                <img src={Icone} />
            </S.Container3>
        </S.Main>
    );
}

export default Footer;