import styled from 'styled-components';
import Img from '../../assets/background3.jpg'

export const Main = styled.div`
  display: flex;
  justify-content:space-between;
  background-image: url(${Img});
  color:#FFF;
  padding: 30px;
  height: 70vh;
  padding-top: 10%;
  
  @media (max-width:700px){
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      height: auto;
  }
`;

export const Container1 = styled.div`
  padding: 20px;
  width: 35%;
  margin-left: 6%;
  text-align: center;

  @media (max-width:700px){
      width: 90%;
      flex-wrap: wrap;
      justify-content: center;
      margin-right: 20px;
  }
`;
export const Container2 = styled.div`
  width: 20%;

  @media (max-width:700px){
      display: none;
  }
`;
export const Container3 = styled.div`
  width: 25%;
  margin-bottom: 20px;

  @media (max-width:700px){
      width: 100%;
      margin-top:-50px;
  }
`;

export const H3 =styled.h3`
color: #FFF;
text-shadow: -3px 2px 3px #79dbed;
margin-bottom: 20px;
`

export const H1 =styled.h1`
color: #FFF;
text-shadow: -3px 2px 3px #79dbed;
`

export const Paragraph =styled.p `
margin:20px;
font-weight: 600;
`

export const Btn1 =styled.a`
width:400px ;
height: 100px;
background: #7ed321;
border-radius:20px;
color: #FFF;
font-size: 40px;
border:none;
font-family: auto;
font-weight: 800;
padding: 20px;

:hover{
    cursor: pointer;
}

@media (max-width:700px){
    width: 100px;
    font-size: 25px;
    padding-top:10px ;
    display: table;
    margin-left: 30px;
    
}
`
export const DDD =styled.span`
font-size: 20px;
top: 0;
vertical-align: text-top;
margin: 10px;

@media (max-width:700px){
    font-size: 10px;
}
`

export const Btn2 =styled.a`

width: 400px;
height: 70px;
font-size: 20px;
background: #7ed321;
border-radius:20px;
color: #FFF;
font-size: 40px;
border:none;
font-family: auto;
font-weight: 800;
padding: 15px;

:hover{
    cursor: pointer;
}

`

export const Speak =styled.div`
text-align: center;
align-items: center;
margin-top: 20%;

`

export const ImgPag =styled.img`


@media (max-width:700px){
    width: 100%;
}
`
