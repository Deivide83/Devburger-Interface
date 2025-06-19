

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .carousel-item{
  padding-right:30px;
  
  
}
 
  padding-left:30px;
  padding-bottom: 15px;

  .react-multiple-carousel__arrow--left{
   left: 15px;
   top:10px;

 }

 .react-multiple-carousel__arrow--right{
   right: 40px;
   top:10px;

 }

  
`;
export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #9755a6;
  font-weight: 800;
  text-align:center;
  margin-bottom: 40px;
  margin-top: 20px;
  position: relative;
  padding-bottom: 12px;

  &::after{
    content:"";
    position: absolute;
    bottom:0;
    width: 55px;
    height: 4px;
    background-color:#9755a6;
    left: calc(50% - 28px)
}
`;


export const ContainerItems = styled.div`
  background: url(${(props) => props.$imageUrl}) ;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
 
  width: 100%;
  height: 200px;
  padding: 20px 10px;
  border-radius: 5px;
 
  
  
`;

export const CategoryButton = styled(Link)`

    color: #ffff;
    background-color: rgba(0,0,0,0.2);
    padding: 10px 30px;
    border-radius:20px;
    font-size: 22px;
    margin-top : 50px;
    text-decoration:none;
    font-weight: 500;
 
 &:hover{
  background-color : #9755a6;

 }

`