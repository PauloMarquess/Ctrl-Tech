import React from 'react';
import * as S from './styled'
import Rede from '../../assets/rede.png'
import Verificado from '../../assets/verificado.png'
// import { Container } from './styles';

function Story() {
    return (
        <S.Main>
            <S.Container1  id="Story">
                <S.H1>QUEM SOMOS</S.H1>
                <S.H3>A DoutorReparo.com é líder em suporte em informática no sul do Brasil</S.H3>
                <h3>Fundada em 2006, a DoutorReparo.com nasceu da necessidade de suprir a demanda
                    local por suporte em informática. Conseguiu se estabelecer como
                    referência em suporte técnico, trazendo muito mais profissionalismo
                    e qualidade no atendimento ao cliente.</h3><br/>

                <h3>Desde 2015 a DoutorReparo.com atende no formato de micro franquia,
                    com unidades estrategicamente posicionadas para trazer mais agilidade
                    no atendimento e redução de custos operacionais, proporcionando
                    redução de custos para todos os clientes.
                </h3><br/>

                <h3>Os serviços estão disponíveis para Empresas de todos os portes, também possui
                    equipe técnica exclusiva para atendimento de clientes domésticos.</h3>
            </S.Container1>

            <S.Container2>
                <S.Icon1 src={Rede}/>
                <div><S.Icon2 src= {Verificado}/></div>
                <S.H2>REDE DE ESPECIALISTAS</S.H2>
                <h3>Nossos especialistas operam de unidades home-based e
                     estão posicionados estrategicamente para reduzir o tempo de 
                     deslocamento, proporcionando reparos muito mais rápidos e redução
                      de custo da operação.</h3>
            </S.Container2>
        </S.Main>
    )
}

export default Story;