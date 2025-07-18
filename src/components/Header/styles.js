import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`

background-color: #1f1f1f;
width: 100%;
height: 72px;
padding:0 56px;



`;
export const Content = styled.div`
  
display:flex;
align-items: center;
justify-content:space-between;

width:100%;
max-width: 1280px;
margin: 0 auto;

`;

export const Navigate = styled.nav`

display:flex;
align-items: center;
justify-content:center;
height:72px;

div{

   
    display:flex;
    align-items:center;
    gap:20px;

}
hr{
  height:24px;
  border: 1px solid #9758a6

}



`;
export const HeaderLink = styled(Link)`

color: ${(props => props.$isActive ? '#9758a6' : '#fff')};
border-bottom: ${(props => props.$isActive ? '1px solid #9758a6' : 'none')};
text-decoration:none;
font-size:14px;
transition: color 0.2s;

&:hover{
    color:#9758a6;

}


`;

export const Options = styled.div`
  
   display:flex;
   align-items: center;
   justify-content:center;
   gap:48px
 


`;


export const Profile= styled.div`

     display:flex;
     align-items: center;
     gap:48px;
     font-size:14px;

  p{
    color: #fff;
    line-height: 90%;
    font-weight: 300;
  }
  span{

    font-weight:700;
    color: #9758a6;

  }
  

`


export const LinkContainer = styled.div`

     display:flex;
     align-items: center;
     gap: 10px;
    

`;


export const Logout= styled.button`

color: #ff3205;
text-decoration:none;
font-weight:700;
background-color:transparent;
border:none;



`;


