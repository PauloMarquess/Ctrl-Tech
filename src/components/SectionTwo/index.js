import styled from "styled-components";

export const Main =styled.div`
display: flex;
flex-direction: column;

`
export const Container =styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
align-items: baseline;

`

export const Card =styled.div`

display: flex;
width: 25%;
margin: 2%;
text-align: center;
flex-direction: column;

@media (max-width:700px) {
    width: 100%;
}

`

export const Verificado =styled.img`
width: 50px;

`
export const H1 =styled.h1`
color: #626262;
`
export const H3 =styled.h3`
color: #626262;
`
export const Title = styled.section`
margin: 5% 0 5% 5%;

`
export const Paragraph =styled.p`
color: #626262;
`
