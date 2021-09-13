import styled from "styled-components";
import Background from '../../assets/background.jpg'


export const Container =styled.div`

background-image: url(${Background}) ;



`
export const H4 =styled.p`

display:flex;
color: #FFF;
padding: 20px;
justify-content: end;
margin-right: 10%;

@media (max-width:700px){
    padding: 20px;
    text-align: center;

}
`
