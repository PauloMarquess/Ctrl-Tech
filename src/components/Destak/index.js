import React from 'react';
import * as S from './styled'
import Profi from '../../assets/profissionais.png'
import Garantia from '../../assets/garantia.png'
import Identi from '../../assets/identificacao.png'
// import { Container } from './styles';

function Destak() {
  return (
      <S.Container>
          <S.Card>
             <S.Images src={Profi}/>          
          </S.Card>

          <S.Card>
             <S.Images src={Identi}/>          
          </S.Card>

          <S.Card>
             <S.Images src={Garantia}/>          
          </S.Card>

      </S.Container>
  );
}

export default Destak;