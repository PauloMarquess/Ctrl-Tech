import styled from 'styled-components';

export const Main = styled.div`
  
  background: #343a41;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`

export const Container1=styled.div`
margin-top: 5%;
margin-right:35%;

@media (max-width:700px){
    width: 70%;
    justify-content: center;
    margin-left:20%;
}
`
export const Container2=styled.div`

display: flex;
justify-content: space-around;
margin: 5%;

@media (max-width:700px){
    flex-wrap: wrap;

}
`
export const Container3=styled.div`
width: 60%;
justify-content: center;
text-align: center;
margin-bottom: 5%;
`
export const Card = styled.div`
width: 25%;
text-align: center;
align-items: center;

@media (max-width:700px){
    width: 90%;
    margin: 20px;

}

`
export const Icons =styled.img `

width:150px
`

export const Number =styled.h3`
background:#ffffff;
margin: 5px;
font-size: 1.5rem;
text-align: center;

  height: 0; 
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 25px solid #343a41;
  border-top:25px solid transparent ;


`