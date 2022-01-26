import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_SANITY_META_MAST_KEY,
        // below url we got from meta mask settings network rinbytestnetwork
        ethers.getDefaultProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
    ),
)
const Container = styled.div`
display:flex;
height: 100vh;
width:100vw;
background-color:#0a0b0d;
color: white;
overflow: hidden;
`
const MainContainer = styled.div`
flex:1;
`
const Dashboard = ({ address, connectWallet }) => {
    const [sanityToken, setSanityToken] = useState([]);
    const [thirdWebTokens, setThirdWebTokens] = useState([]);
    useEffect(() => {
        const getsanityandthirdwebtoken = async () => {
            const coins = await fetch("https://0hmuoedc.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22Coins%22%5D%7B%0A%20%20name%2C%0A%20%20inrprice%2C%0A%20%20contractaddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
            const sanityToken = (await coins.json()).result
            setSanityToken(sanityToken)
            setThirdWebTokens(sanityToken.map(token => sdk.getTokenModule(token.contractaddress)))

        }
        return getsanityandthirdwebtoken()

    }, []);
    return (
        <Container>
            <SideBar />
            <MainContainer>
                <Header Walletaddress={address} connectWallet={connectWallet} sanityToken={sanityToken} thirdWebTokens={thirdWebTokens} />
                <Main Walletaddress={address} connectWallet={connectWallet} sanityToken={sanityToken} thirdWebTokens={thirdWebTokens} />
            </MainContainer>
        </Container>
    );
}

export default Dashboard;