import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.div`
  margin: 5%;
  color:#6e6e6e ;

  
`;

export const Empresas = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5%;

  @media (max-width:700px){
      flex-wrap: wrap;
  }
`;

export const Icons =styled.div`
width: 200px; 

@media (max-width:700px){
  margin-bottom: 10%;
    width: 100%;
    justify-content: center;
   margin-top: 5%;
    text-align: center;
}

`
