import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
  display: flex;
  background: linear-gradient(
-90deg
,#185a9d 0%,#43cea2 100%);

@media (max-width:700px){
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
`

export const Card =styled.div`
display: flex;
width: 30%;
margin: 6%;
text-align: center;
justify-content: center;
@media (max-width:700px){
    display: flex;
    width: 70%;
     flex-wrap: wrap;
     
}

`
export const Images =styled.img`
width: 300px;

@media (max-width:700px){
    padding-right: 20px;
}

`