import React, { useState } from 'react';
import styled from 'styled-components';
import CoinSelector from './CoinSelector';
import Spinner from '../Spinner';
import Tranfer from './Tranfer';
import Recieve from './Recieve';
const Wrapper = styled.div`
height: 35rem;
width: 27rem;
color: white;
border: 1px solid #282b2f;
display: flex;
flex-direction: column;
`
const Selector = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height: 5rem;
`
const Option = styled.div`
height:100%;
width: 100%;
display: grid;
place-items: center;
font-size: 1.2rem;
font-weight: 600;
&:hover{
    cursor: pointer;
    background-color:#111214;
}
`
const ModelMain = styled.div`
padding: 0 1.2rem;
display: flex;
height: 100%;
flex-direction: column;
justify-content: flex-end;
`
const TransferModal = ({ sanityToken, thirdWebTokens, Walletaddress }) => {
    const [action, setAction] = useState('send');
    const [selectedToken, setSelectedToken] = useState(sanityToken[2])

    const selectedStyle = {
        color: '#3773f5',

    }
    const UnselectedStyle = {
        border: '1px solid #2B2b2f'
    }
    const selectedModal = (option) => {
        switch (option) {
            case 'send':
                return <Tranfer selectedToken={selectedToken} setAction={setAction} thirdWebTokens={thirdWebTokens} Walletaddress={Walletaddress} />
            case 'recieve':
                return <Recieve selectedToken={selectedToken} setAction={setAction} Walletaddress={Walletaddress} />
            case 'select':
                return <CoinSelector setAction={setAction} selectedToken={selectedToken} setSelectedToken={setSelectedToken} sanityToken={sanityToken} thirdWebTokens={thirdWebTokens} Walletaddress={Walletaddress} />
            case 'transferring':
                return (
                    <div style={{marginBottom:130}}>
                        <Spinner message="Transferring..."/>
                    </div>
                )
            case 'transferred':
                return (
                <h1 style={{ color: 'green', textAlign: 'center', marginBottom:230 }}>Transfer Complete</h1>
                )

            default:
                break;
        }
    }
    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'send' ? selectedStyle : UnselectedStyle} onClick={() => setAction('send')}>
                    <p >Send</p>
                </Option>
                <Option style={action === 'recieve' ? selectedStyle : UnselectedStyle} onClick={() => setAction('recieve')}>
                    <p >Recieve</p>
                </Option>
            </Selector>
            <ModelMain>
                {selectedModal(action)}
            </ModelMain>
        </Wrapper>
    );
};


export default TransferModal;
