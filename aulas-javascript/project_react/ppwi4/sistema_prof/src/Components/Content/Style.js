import styled from "styled-components";

export const ContentContainer = styled.div `
   background-color: #E5E5E5;
   transition: margin-left 350ms ease;
   padding: 30px;
   margin-top: 50px;
   min-height: calc(100vh - 50px);

   @media(min-width:468px){
       margin-left: 0;
   } 
`

export const GradeSistema = styled.div`
    position: relative;
    background: #ffffff;
    border-radius: 6px;
    padding:40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom:30px;

`

export const Rodape = styled.div`
    border-top: 1px solid #ddd;
    padding: 20px 0 0 0; 
    margin-top: 20px; 

`