import styled from "styled-components";

export const Commit =styled.div`
text-align: center;
width: 30%;

@media (max-width:700px) {
    width: 100%;
    margin-bottom:30px;
}
`

export const Container =styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

@media (max-width:700px) {
    display: flex;
    flex-direction: column;
}
`

export const Options =styled.div`

width: 30%;
background: #FFF;
padding: 20px;
border-radius: 10px;
text-align: center;
margin-bottom: 20px;

@media (max-width:700px){
    width: 90%;
    
}


`
export const ContainerIcons =styled.div`
margin-top: 30px;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width:700px){
    
    
}



`
export const Card =styled.div`
width:110px;
padding: 10px;
text-align: start;



`
export const Link =styled.a`
color: #2586a5;
`
export const H3 =styled.h3`

color: #FFF;
text-shadow: -3px 2px 3px #79dbed;


`
export const Strong =styled.span`

font-size: 2.5rem;
text-shadow: -3px 2px 3px #79dbed;
`

export const H1 =styled.h1`

color: #2586a5;

@media (max-width:700px){
    padding: 15px;
    text-align: center;
}
`

export const Paragraph =styled.p`

color: #2586a5;

@media (max-width:700px){
    padding: 15px;
    text-align: center;
    text-decoration-line: underline;
}
`
export const Arrow =styled.div`
@media (max-width:700px){
    display: none;
}
`

