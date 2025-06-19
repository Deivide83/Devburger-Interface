 import{UserCircleIcon,ShoppingCartIcon } from "@phosphor-icons/react";
 import { useNavigate, useResolvedPath } from "react-router-dom";
 import { useUser } from "../../hooks/UserContext";


import { Container,
        Navigate,
        Options,
        Profile,
        Logout,
        LinkContainer,
        HeaderLink, 
        Content,  
    } from "./styles"

   
 
export function Header(){

    const navigate = useNavigate();
    const {pathname} = useResolvedPath();
    const {logout, userInfo} = useUser()
   
   function logoutUser(){

    logout();
    navigate('login');


   }
    

    return(
        
        <Container>
            <Content>
            <Navigate>
             <div>
                <HeaderLink to='/' $isActive={pathname === '/'} > Home</HeaderLink>
                <hr></hr>
                <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'} >Cardápios</HeaderLink>                          
             </div>
            </Navigate>
            <Options>
                <Profile>
                    <UserCircleIcon color="#fff" size={24} />
                    <div>
                        <p> 
                            Olá, <span>{userInfo.name}</span>
                        </p>
                        <Logout onClick={logoutUser} >Sair</Logout>
                    </div>
                </Profile>
                 <LinkContainer>
            <ShoppingCartIcon color="#fff" size={24} />
            <HeaderLink to={'/carrinho'} >Carrinho</HeaderLink>
            </LinkContainer>
            </Options>
           
             </Content>

        </Container>
    )

}