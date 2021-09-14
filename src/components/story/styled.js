import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  color: #50cb9e;
  margin: 30px;
  font-weight: 700;
  

  @media (max-width:700px){
    flex-direction: column;
  }
`

export const Container1 =styled.div`
width:50% ;
padding: 20px;
margin: 30px;
display: flex;
flex-direction: column;

@media (max-width:700px){
    width: 90%;
    align-items: center;
    margin: 10px;
    padding: 10px;
}
`

export const Container2 =styled.div`
width: 35%;
padding: 20px;
margin:30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width:700px){
    width: 90%;
    align-items: center;
    margin: 10px;
    padding: 10px;
    
}
`

export const Icon1 =styled.img `
width: 120px;
margin: 10px;
`

export const Icon2 =styled.img `
width: 60px;
margin: 10px;
`

export const H1 =styled.h1`

color:#626262;
margin-bottom: 20px;
`

export const H3 =styled.h3`

color:#626262;
margin-bottom:20px ;
`
export const H2 =styled.h2`

color:#000000;
margin-bottom:20px ;
`