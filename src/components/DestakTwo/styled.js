import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  background-image: linear-gradient(
-90deg
, #185A9D 0%, #43CEA2 100%);
color: #FFF;
height: 50vh;

@media (max-width:700px) {
  
 display: table;
 margin: 1%;
 padding: 5%;
}
`
export const Container1 =styled.div`
width: 50%;
margin-left:5%;
margin-top:5%;

@media (max-width:700px){
  font-size: 9px;
  text-align: left;
  
  width: 100%;
  padding:5px;
  
}
`

export const Container2 =styled.div`
width: 35%;
justify-content: center;
text-align: center;
margin-left:5%;
margin-top:5%;

@media (max-width:700px){
 width: 90%;
}

`

