import styled  from "styled-components";
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background.svg';


export const Container = styled.div`
 width: 100%;
 background-color: #f0f0f0;
 background: url('${Background}');
 min-height:100%;
 background: linear-gradient(
    rgba(255,255,255,0.6),
     rgba(255,255,255,0.6)
),

url('${Background}');
height: 100vh;



`

export const Banner = styled.div`
 background: url('${Texture}');
 background-color: #1f1f1f;
 background-size: cover;
 background-position: center;
 display: flex;
 justify-content: center;
 align-items: center;
 position:relative;

 height: 180px;

 img{
    height:130px;

 }



`

export const Title = styled.div`

 font-size: 25px;
 font-weight: 300;
 padding-bottom: 12px;
 color: #61a120;
 text-align: center;
 position: relative;

 &::after{
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;


 }


`


export const Content = styled.div`


display: grid;
grid-template-columns: 1fr 30%;
gap: 20px;
width: 100%;
max-width: 1280px;
margin: 0 auto;
padding: 40px;




`