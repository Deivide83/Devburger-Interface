import Logo from '../../assets/Logo 1.svg'
import { CartItems, CartResume } from '../../components'
import {Container,Banner,Title,Content } from './styles'


export function  Cart(){

    return(
        <Container>
          <Banner>
            <img src={Logo} alt="Logo devburger" />
          </Banner>
          <Title>
            <h1>Checkout - Pedidos</h1>
          </Title>
          <Content>
            <CartItems/>
           <CartResume/> 

          </Content>
        </Container>
    )
}