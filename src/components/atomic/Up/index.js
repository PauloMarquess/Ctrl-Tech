import React from 'react';
import * as S from './styled'
import ArrowUp from '../../../assets/arrow-up.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import { Container } from './styles';

function Up() {
  return (
      <S.Container>
            <AnchorLink href="#Home">
                <S.Up src={ArrowUp}/>
            </AnchorLink>
      </S.Container>
  );
}

export default Up;