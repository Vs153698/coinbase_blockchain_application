import Image from "next/image";
import styled from "styled-components";
import CoinbaseLogo from "../assets/cb-logo.png";
import { navItems } from "../static/navItems";

const SideBar = () => {
    return (
        <Wrapper>
            <LogoConainer>
                <Logo>
                    <Image src={CoinbaseLogo} alt="Coinbase"/>
                </Logo>
            </LogoConainer>
            <NavItemsContainer>
                {navItems.map((item,index)=>(
                    <NavItem key={index} >
                        <NavIcon >{item.icon}</NavIcon>
                        <NavTitle>{item.title}</NavTitle>

                    </NavItem>
                ))}
            </NavItemsContainer>
        </Wrapper>
    );
}

export default SideBar;
const Wrapper = styled.div`
height: calc(100vh);
border-right: 1px solid #282b2f;
width: calc(22rem - 52px - 16px);
padding: 0 1rem;
`
const LogoConainer = styled.div`
margin: 1.5rem 0;
`
const Logo = styled.div`
width: 44%;
object-fit: cover;
margin-left: 1.5rem;
`
const NavItemsContainer = styled.div`
margin-top: 3rem;
&:hover{
    cursor: pointer;
}
`
const NavItem = styled.div`
display:flex;
align-items: center;
font-size: 1.3rem;
font-weight: 500;
border-radius: 0.5rem;
margin-top: 1.5rem;
height: 4rem;
&:hover{
    background-color:#141519;
}
`
const NavIcon = styled.div`
background-color:#141519;
padding: 0.7rem;
border-radius: 50%;
margin: 0 1rem;
display: grid;
place-items:center;
`
const NavTitle = styled.div``
