

import styled from "styled-components";

export const Container = styled.div`

.carousel-item{
  padding-right:30px
}
 overflow-x: hidden;

 .react-multi-carousel-list{
   overflow: visible;

 }
 .react-multiple-carousel__arrow--left{
   left: 15px;
   top:10px;

 }

 .react-multiple-carousel__arrow--right{
   right: 40px;
   top:10px;

 }

  padding-left: 40px;
  
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color:#61a120;
  font-weight: 800;
  text-align:center;
  margin-bottom: 78px;
  margin-top: 20px;
  position: relative;
  padding-bottom: 12px;

  &::after{
    content:"";
    position: absolute;
    bottom:0;
    width: 55px;
    height: 4px;
    background-color:#61a120;
    left: calc(50% - 28px)
}
`;


