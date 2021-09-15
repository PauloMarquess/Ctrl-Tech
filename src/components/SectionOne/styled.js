import styled from "styled-components";
import Background from '../../assets/background.jpg'
import Background2 from '../../assets/background2.jpg'

export const Container =styled.div`

background-image: url(${Background}) ;

@media (max-width:700px){
    background-image:url(${Background2});
}


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
