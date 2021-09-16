import React from 'react';
import * as S from './styled'
import Selo from '../../assets/garantia2.png'
import Baloes from '../../assets/baloes.png'
import SemRep from '../../assets/sem-reparo.png'
import Arrow from '../../assets/arrow-down.png'
import ButtonOne from '../atomic/ButtonOne';
// import { Container } from './styles';

function Garantia() {
    return (
        <S.Main id="Garantia">
            
            <S.Container1 >
                <h1>NOSSA GARANTIA :</h1>
                <h3>Prefira a Experiência Aliada a Credibilidade transmitida
                    por mais de uma década.
                </h3>
            </S.Container1>


            <S.Container2>
                <S.Card>
                    <S.Icons src={Selo} />
                    <S.Number>1</S.Number>
                    <h4>Garantia de 90 dias</h4>
                    <p>Todos os nosso serviços possuem garantia de 90 dias,
                        nos caso em que seu equipamento volte a apresentar
                        os mesmos erros em decorrência de imperícia técnica.
                        Só ficam fora desta garantia os danos causados por reinfecções de vírus,
                        utilização de softwares irregulares ou pane em peças fora de garantia.</p>
                </S.Card>

                <S.Card>
                    <S.Icons src={Baloes} />
                    <S.Number>2</S.Number>
                    <h4>13 Anos No Mercado</h4>
                    <p>A DoutorReparo.com já está a 13 anos no mercado
                        de manutenção de computadores, e desde 2015 passou
                        a atender no formato de microfranquia, assim tem conseguido
                        trazer muito mais comodidade e qualidade para clientes que antes
                        não podiam ser atendidos</p>
                </S.Card>

                <S.Card>
                    <S.Icons src={SemRep} />
                    <S.Number>3</S.Number>
                    <h4>Sem Reparo, Sem Cobrança</h4>
                    <p>Só cobramos por serviços realizados com êxito,
                        este é o nosso compromisso. A não ser nos casos em que a preferência
                        seja somente contratar o serviço de Diagnóstico
                        Preciso, onde o reparo não é realizado, mas o cliente sabe
                        exatamente o que precisa ser feito.</p>
                </S.Card>
            </S.Container2>

            <S.Container3>
                <h1>Agende Agora Mesmo e tenha um Técnico Especialista
                    na sua Casa ou Empresa</h1>
                <img src={Arrow}/>
                <ButtonOne/>
            </S.Container3>
        </S.Main>

    );
}

export default Garantia;