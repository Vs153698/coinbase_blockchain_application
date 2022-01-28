import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { urlFor } from '../../lib/sanity';
import { FaCheck } from 'react-icons/fa';
import { Rings } from 'react-loader-spinner';

const CoinItem = ({ Walletaddress, sanityToken, thirdWebTokens, token, sender, setAction, selectedToken, setSelectedToken }) => {
    const [image, setImage] = useState();
    const [balance, setBalance] = useState('Fetching...');
    useEffect(() => {
        const getBalance = async () => {
            let activeThirdWebToken
            thirdWebTokens.map(thirdWebToken => {
                if (thirdWebToken.address === token.contractaddress) {
                    activeThirdWebToken = thirdWebToken
                }
            })
            const balance = await activeThirdWebToken.balanceOf(sender)
            return await setBalance(balance.displayValue.split('.')[0])
        }
        getBalance()

    }, [Walletaddress, thirdWebTokens, token]);
    useEffect(() => {
        const ImageUrl = urlFor(token.logo).width(250).url()
        setImage(ImageUrl)
    }, [selectedToken]);
    return (
        <Wrapper style={{ backgroundColor: selectedToken.name === token.name && '#141519' }} onClick={() => { setSelectedToken(token); setAction('send') }}>
            <Main>
                <Icon>
                    <img src={image} alt="" />
                </Icon>
                <NameDetails>
                    <Name>{token.name}</Name>
                    <Symbol>{token.symbol}</Symbol>
                </NameDetails>
            </Main>
            <Balance>{balance} {token.symbol}</Balance>
            <InSelected>{Boolean(selectedToken.contractaddress === token.contractaddress) && <FaCheck />}</InSelected>
        </Wrapper>
    )

};

export default CoinItem;
const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 1rem 0.5rem;
border-radius:0.5rem;
margin-bottom: 0.3rem;
&:hover{
    background-color:#0e0f14;
    cursor: pointer;
}
`
const Main = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Symbol = styled.div`
color: #8a919e;
font-size: 0.8rem;
`
const Icon = styled.div`
margin-right:1rem;
height:1.8rem;
width:1.8rem;
border-radius: 50%;
overflow: hidden;
display: grid;
place-items: center;
& > img { 
    height: 120%;
    width: 120%;
    object-fit: cover;
}
`
const NameDetails = styled.div``
const Name = styled.div`
font-size:1.1rem;
margin-bottom:0.2rem;
`
const Balance = styled.div``

const InSelected = styled.div`
margin-left: 0.5rem;
color: #3773f5;
`