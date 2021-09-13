import React from 'react';
import * as S from './styled'
import Formatacao from '../../assets/formatacao.png'
import Verificado from '../../assets/verificado.png'
import Suporte from '../../assets/suporte.png'
import Phone from '../../assets/phone.png'
import Wifi from '../../assets/wifi.png'
import Smart from '../../assets/smart.png'
import Acessories from '../../assets/Acessories.png'
// import { Container } from './styles';

function SectionTwo() {
    return (
        <S.Main>
            <S.Title>
                <S.H1>NOSSOS SERVIÇOS</S.H1>
                <S.H3>A DoutorReparo.com repara qualquer problema em informática</S.H3>
            </S.Title>

            <S.Container>
                <S.Card>
                    <div>
                        <img src={Formatacao} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>Formatação</h3><br />
                        <S.Paragraph>Nossa técnica de formatação é até 85% mais rápida que as formatações
                            convencionais e proporciona maior segurança aos seus arquivos.</S.Paragraph><br />
                        <S.Paragraph>Traga muito mais velocidade e corrija erros no seu Notebook ou PC.</S.Paragraph>
                    </div>
                </S.Card>

                <S.Card>
                    <div>
                        <img src={Suporte} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>Suporte Técnico</h3><br />
                        <S.Paragraph>Nossos técnicos são especialistas e podem resolver problemas com seu Computador,
                            Impressora, Arquivos, Acessórios, Wi-Fi, Internet, Instalação de Softwares.</S.Paragraph><br />
                        <S.Paragraph>Você também pode contar com Assessoria Especializada para tirar todas as suas dúvidas.</S.Paragraph>
                    </div>
                </S.Card>

                <S.Card>
                    <div>
                        <img src={Phone} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>Conserto de Equipamentos</h3><br />
                        <S.Paragraph>Consertamos Equipamentos de Informática, Smartphones, Notebook,
                            Monitores, No-breaks. Orçamento sem compromisso com retirada e entrega
                            no local sem custo adicional.</S.Paragraph><br />

                    </div>
                </S.Card>

                <S.Card>
                    <div>
                        <img src={Wifi} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>Wifi | Instalação e Reparo</h3><br />
                        <S.Paragraph>Realizamos a instalação de rede wi-fi com melhoria de sinal para todos
                            os cômodos da casa ou escritório. Configuração e ajustes finos de frequência e canais
                            com melhor velocidade de navegação.</S.Paragraph>
                    </div>
                </S.Card>

                <S.Card>
                    <div>
                        <img src={Smart} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>SmartTV | Configuração e Instalação</h3><br />
                        <S.Paragraph>Realizamos a instalação e configuração da sua SmartTV.
                             Conectamos na sua rede WiFi e realizamos instalação dos canais de HDTV e CABO. 
                             Instruções para uso dos Apps Netflix YouTube e outros.</S.Paragraph>
                    </div>
                </S.Card>

                <S.Card>
                    <div>
                        <img src={Acessories} />
                        <div>
                            <S.Verificado src={Verificado} />
                        </div>
                        <h3>Formatação</h3><br />
                        <S.Paragraph>Temos peças para os principais fabricantes como Dell, Lenovo,
                             Positivo, HP e Apple. Encontre Teclado, mouse, Placa de Vídeo, memória, Fonte, Placa mãe, Telas,
                              Monitores, adaptadores e muito mais.</S.Paragraph>
                    </div>
                </S.Card>


            </S.Container>
        </S.Main>
    );
}

export default SectionTwo;