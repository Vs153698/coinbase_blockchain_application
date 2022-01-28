import { useState } from "react";
import styled from "styled-components";
import React from 'react';
import CoinItem from './CoinItem'

const CoinSelector = ({ setAction, selectedToken, setSelectedToken, sanityToken, thirdWebTokens, Walletaddress }) => {
    return (
        <Wrapper>
            <Title>Select Assets</Title>
            <CoinList>
                {sanityToken.map((token, index) =>(
                    <CoinItem key={index} token={token} sender={Walletaddress} selectedToken={selectedToken} sanityToken={sanityToken} setAction={setAction} setSelectedToken={setSelectedToken} thirdWebTokens={thirdWebTokens}/>
                ))}
            </CoinList>
        </Wrapper>
    );
};

export default CoinSelector;
const Wrapper = styled.div`

`
const Title = styled.div`
width: 100%;
text-align: center;
font-size: 1.5rem;
margin-bottom:1rem;
`
const CoinList = styled.div`
display: flex;
flex-direction: column;
margin-bottom:200px;
`
