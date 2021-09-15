import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  background:#434950;
  color: #FFF;
  justify-content: space-around;

@media (max-width:700px){
    flex-direction: column;
    align-items: center;
    
    
}
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  background: #1cc4cd;
  margin: 5%;
  padding: 20px;
  color: #FFF;
  border-radius:10px;

  @media (max-width:700px){
      font-size: 15px;
  }
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 5%;

  @media (max-width:700px){
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-right: 20%;
      width: 70%;
  }
`

export const Container3 = styled.div`
  margin: 5%;
`

export const Link =styled.a`
color:#FFF;
margin:5px;
`
export const H2 =styled.h2`
color:#1cc4cd ;

`
export const Spam =styled.span`

font-size: 13px;
vertical-align: text-top;
`
export const Paragraph =styled.p `
padding-bottom: 10px;
margin-top:20px;
border-bottom:1px solid #1cc4cd;
width: fit-content;
`
export const H1 =styled.h1 `
margin-bottom: 10px;
`
export const Icons =styled.img `

width: 30px;
`