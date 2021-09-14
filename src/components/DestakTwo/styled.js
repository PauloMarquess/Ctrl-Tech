import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  background-image: linear-gradient(
-90deg
, #185A9D 0%, #43CEA2 100%);
color: #FFF;
height: 50vh;

@media (max-width:700px) {
  width: 100%;
 
}
`
export const Container1 =styled.div`
width: 50%;
margin-left:5%;
margin-top:5%;

@media (max-width:700px){
  
}
`

export const Container2 =styled.div`
width: 35%;
justify-content: center;
text-align: center;
margin-left:5%;
margin-top:5%;

@media (max-width:700px){
 
}

`