import styled from "styled-components";


export const Container =styled.div `

display: flex;
align-items: center;
justify-content: space-around;

@media (max-width:700px) {

    display: none;
}
`

export const Navigation =styled.nav`
display: flex;
align-items: center;
margin: 1%;

`

export const Link =styled.a`
margin: 20px;
color: #FFF;
:hover{
    cursor: pointer;
    opacity: 50%;
}

`

export const Strong =styled.span`


font-size: 2rem;
color: #FFF;
`

export const Paragraph =styled.p`

text-align: end;
color: #FFF;
`

